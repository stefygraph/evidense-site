import { init } from "@amplitude/analytics-node";

// Server-side Amplitude client (Node SDK). Initialised once per runtime,
// before the first track() call in a route handler. The project API key
// is public and ingestion-scoped; it lives in .env.local / Vercel env,
// never in the repo. The EvidenSe project is in the EU data region.
const key = process.env.AMPLITUDE_API_KEY;

if (!key) {
  console.error("[amplitude] AMPLITUDE_API_KEY is not set — no events will be sent");
} else {
  init(key, { serverZone: "EU" });
}
