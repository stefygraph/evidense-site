import { NextResponse } from "next/server";

// Loops mailing lists. IDs come from Loops Settings -> Lists.
// The site's forms pass a `list` key ("briefing" by default), never a
// raw list ID, so the API cannot be used to subscribe people to
// arbitrary lists.
const MAILING_LISTS: Record<string, string> = {
  briefing: "cmtu635tpe68h0i1m5iaq7gat", // The Briefing
  index: "cmtu649h5e6qr0i1m1pa3bzgu", // EvidenSe Sport Attention Index
};

// index.evidense.io is a separate static site with no API of its own:
// its subscribe form calls this endpoint directly, so it needs to be
// allowed here as a cross-origin caller.
const ALLOWED_ORIGINS = ["https://index.evidense.io", "https://www.evidense.io"];

function corsHeaders(origin: string | null) {
  const allowOrigin = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[1];
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS(request: Request) {
  return new NextResponse(null, { status: 204, headers: corsHeaders(request.headers.get("origin")) });
}

export async function POST(request: Request) {
  const headers = corsHeaders(request.headers.get("origin"));

  try {
    const { email, list } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400, headers });
    }

    const listId = MAILING_LISTS[typeof list === "string" ? list : "briefing"];
    if (!listId) {
      return NextResponse.json({ error: "Unknown list" }, { status: 400, headers });
    }

    const LOOPS_API_KEY = process.env.LOOPS_API_KEY;

    const response = await fetch("https://app.loops.so/api/v1/contacts/create", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOOPS_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        userGroup: "EvidenSe Newsletter",
        mailingLists: { [listId]: true },
      }),
    });

    // A repeat subscriber returns 409 from Loops. Update the existing
    // contact instead, so they still end up subscribed to the list.
    if (response.status === 409) {
      await fetch("https://app.loops.so/api/v1/contacts/update", {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${LOOPS_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          mailingLists: { [listId]: true },
        }),
      });

      // The contact exists either way: show a success state rather
      // than an error for a repeat subscriber.
      return NextResponse.json({ success: true }, { status: 200, headers });
    }

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || "Failed to subscribe" },
        { status: response.status, headers }
      );
    }

    return NextResponse.json({ success: true }, { status: 200, headers });
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500, headers });
  }
}
