import { getAllInsights } from "@/lib/insights";
import { HREFLANG, SPONSORING_MACHINE_PATHS, type LabsLocale } from "@/lib/labs";
import {
  ARTICLE_HREFLANG,
  LAUSANNE_VAUD_MODIFIED,
  LAUSANNE_VAUD_PATHS,
  type ArticleLocale,
} from "@/lib/articles/lausanne-vaud";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.evidense.io";
  const insights = getAllInsights();

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    // The Briefing index in English and French, listed as translations.
    ...["/insights", "/fr/insights"].map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: { en: `${baseUrl}/insights`, "fr-CH": `${baseUrl}/fr/insights` },
      },
    })),
    { url: `${baseUrl}/labs`, lastModified: new Date() },
    // La Sponsoring Machine in three languages, each entry listing all
    // three so search engines treat them as translations of one page.
    ...(["en", "fr", "de"] as LabsLocale[]).map((l) => ({
      url: `${baseUrl}${SPONSORING_MACHINE_PATHS[l]}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          (["en", "fr", "de"] as LabsLocale[]).map((x) => [
            HREFLANG[x],
            `${baseUrl}${SPONSORING_MACHINE_PATHS[x]}`,
          ])
        ),
      },
    })),
    // Long-form article in English and French, listed as translations.
    ...(["en", "fr"] as ArticleLocale[]).map((l) => ({
      url: `${baseUrl}${LAUSANNE_VAUD_PATHS[l]}`,
      lastModified: LAUSANNE_VAUD_MODIFIED,
      alternates: {
        languages: Object.fromEntries(
          (["en", "fr"] as ArticleLocale[]).map((x) => [
            ARTICLE_HREFLANG[x],
            `${baseUrl}${LAUSANNE_VAUD_PATHS[x]}`,
          ])
        ),
      },
    })),
    ...insights.map((i) => ({
      url: `${baseUrl}/insights/${i.slug}`,
      lastModified: i.date,
    })),
    // index.evidense.io is a separate static site (its own repo, no sitemap of
    // its own), but it is an EvidenSe project and belongs in this sitemap so
    // it is discoverable from the same root.
    { url: "https://index.evidense.io/", lastModified: new Date() },
  ];
}
