import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const LOOPS_API_KEY = process.env.LOOPS_API_KEY;

    // Envoi direct à l'API de Loops
    const response = await fetch("https://app.loops.so/api/v1/contacts/create", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOOPS_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        email, 
        userGroup: "EvidenSe Newsletter" 
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || "Failed to subscribe" }, 
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}