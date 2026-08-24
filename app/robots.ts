// All crawlers are welcome, and the AI assistants' crawlers are named
// explicitly so the intent is unambiguous: EvidenSe wants to be read,
// indexed and cited by search engines and AI assistants alike.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "meta-externalagent",
  "CCBot",
];

export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.evidense.io";
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
