import { getAllInsights } from "@/lib/insights";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://evidense.io";
  const insights = getAllInsights();

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/insights`, lastModified: new Date() },
    ...insights.map((i) => ({
      url: `${baseUrl}/insights/${i.slug}`,
      lastModified: i.date,
    })),
  ];
}
