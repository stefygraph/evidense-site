import fs from "node:fs";
import path from "node:path";
import readingTime from "reading-time";
import {
  LAUSANNE_VAUD,
  LAUSANNE_VAUD_PATHS,
  LAUSANNE_VAUD_PUBLISHED,
  type ArticleLocale,
} from "@/lib/articles/lausanne-vaud";

// Long-form articles that live outside content/insights (their own
// routes, several languages). /insights and /fr/insights read this list,
// so a new long read, or a new language for an existing one, appears on
// both index pages by adding one entry here.

export const BRIEFING_PATHS: Record<ArticleLocale, string> = {
  en: "/insights",
  fr: "/fr/insights",
};

export type LongReadVersion = { path: string; title: string; description: string; minutes: number };
export type LongRead = {
  id: string;
  published: string;
  versions: Partial<Record<ArticleLocale, LongReadVersion>>;
};

// Same rule as the article page: words of the MDX body plus two minutes
// for the tables, figures and FAQ rendered from data.
export function articleMinutes(id: string, locale: ArticleLocale): number {
  const file = path.join(process.cwd(), "content", "articles", `${id}.${locale}.mdx`);
  const source = fs.readFileSync(file, "utf8");
  return Math.max(1, Math.round(readingTime(source.replace(/<[^>]+>/g, "")).minutes + 2));
}

export function getLongReads(): LongRead[] {
  const lausanneVaud: LongRead = {
    id: "lausanne-vaud",
    published: LAUSANNE_VAUD_PUBLISHED,
    versions: Object.fromEntries(
      (["en", "fr"] as ArticleLocale[]).map((l) => [
        l,
        {
          path: LAUSANNE_VAUD_PATHS[l],
          title: LAUSANNE_VAUD[l].h1,
          description: LAUSANNE_VAUD[l].description,
          minutes: articleMinutes("lausanne-vaud", l),
        },
      ])
    ),
  };
  return [lausanneVaud].sort((a, b) => b.published.localeCompare(a.published));
}

export function formatDate(iso: string, locale: ArticleLocale): string {
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-CH" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
