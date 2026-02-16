import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type Insight = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  status: "published" | "draft";
  readingTime: string;
};

const INSIGHTS_DIR = path.join(process.cwd(), "content", "insights");

function toSlug(filename: string) {
  const base = String(filename).replace(/\.mdx$/i, "");
  return base.replace(/^\d{4}-\d{2}-\d{2}-/i, "");
}

function safeSlug(value: unknown) {
  const s = String(value ?? "").trim();
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\-_\/]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

type RawPost = {
  filename: string;
  slug: string;
  data: any;
  content: string;
};

function readAll(): RawPost[] {
  if (!fs.existsSync(INSIGHTS_DIR)) return [];
  const files = fs.readdirSync(INSIGHTS_DIR).filter((f) => f.endsWith(".mdx"));

  return files.map((filename) => {
    const fullPath = path.join(INSIGHTS_DIR, filename);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);
    const slug = safeSlug(data?.slug || toSlug(filename));

    return { filename, slug, data, content };
  });
}

export function getAllInsights(): Insight[] {
  const posts = readAll();

  const items: Insight[] = posts.map((p) => ({
    slug: p.slug,
    title: String(p.data?.title || ""),
    description: String(p.data?.description || ""),
    date: String(p.data?.date || ""),
    tags: Array.isArray(p.data?.tags) ? p.data.tags.map(String) : [],
    status: (p.data?.status as "published" | "draft") || "draft",
    readingTime: readingTime(p.content).text,
  }));

  return items
    .filter((x) => x.status === "published")
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getInsightBySlug(slug: string) {
  const target = safeSlug(slug);
  const posts = readAll();

  const match = posts.find((p) => p.slug === target);
  if (!match) return null;

  return {
    slug: match.slug,
    frontmatter: {
      title: String(match.data?.title || ""),
      description: String(match.data?.description || ""),
      date: String(match.data?.date || ""),
      tags: Array.isArray(match.data?.tags) ? match.data.tags.map(String) : [],
      status: (match.data?.status as "published" | "draft") || "draft",
    },
    content: match.content,
  };
}
