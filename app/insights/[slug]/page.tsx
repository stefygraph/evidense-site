export const runtime = "nodejs";
export const dynamicParams = true;

import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllInsights, getInsightBySlug } from "@/lib/insights";
import { renderMdx } from "@/lib/mdx";

async function unwrapParams<T>(p: T | Promise<T>): Promise<T> {
  return await Promise.resolve(p);
}

export async function generateStaticParams() {
  const insights = getAllInsights();
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: any }) {
  const p = await unwrapParams(params);
  const post = getInsightBySlug(p.slug);
  if (!post) return {};

  return {
    title: `${post.frontmatter.title} | EvidenSe`,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date,
    },
  };
}

export default async function InsightPage({ params }: { params: any }) {
  const p = await unwrapParams(params);
  const slug = p?.slug;

  const post = getInsightBySlug(slug);
  if (!post || post.frontmatter.status !== "published") notFound();

  const content = await renderMdx(post.content);

  // JSON-LD (SEO + AIO)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.evidense.io";
  const canonicalUrl = `${baseUrl}/insights/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    mainEntityOfPage: canonicalUrl,
    author: { "@type": "Person", name: "Stéphane Schwander" },
    publisher: { "@type": "Organization", name: "EvidenSe" },
  };

  return (
    <main className="min-h-screen bg-[#000423] text-[#F8FAFC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        {/* Kicker (match home) */}
        <div className="text-xs tracking-[0.22em] uppercase text-[#F8FAFC]/70">
          Decision Support • Strategic Mandates • Institutional Alignment
        </div>

        {/* Back (discreet) */}
        <div className="mt-6 text-xs tracking-[0.18em] uppercase text-[#F8FAFC]/70">
          <Link href="/insights" className="hover:text-[#F8FAFC]">
            ← Insights
          </Link>
        </div>

        {/* Title block */}
        <h1 className="mt-8 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          {post.frontmatter.title}
        </h1>

        <p className="mt-5 text-base leading-relaxed text-[#F8FAFC]/80">
          {post.frontmatter.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[#F8FAFC]/70">
          <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
          <span className="text-[#F8FAFC]/30">/</span>
          <span>EvidenSe</span>
        </div>

        {/* Primary CTA, consistent label */}
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center border border-[#F8FAFC] px-5 py-3 text-xs uppercase tracking-[0.18em] hover:bg-[#F8FAFC] hover:text-[#000423]"
          >
            Start the conversation
          </Link>
        </div>

        <div className="mt-12 h-px w-full bg-[#F8FAFC]/15" />

        {/* Article content */}
        <article className="prose prose-invert mt-12 max-w-none">
          {content}
        </article>

        <div className="mt-14 h-px w-full bg-[#F8FAFC]/15" />

        <div className="mt-10 text-xs tracking-[0.22em] uppercase text-[#F8FAFC]/70">
          EvidenSe — Lausanne / Switzerland
        </div>
      </div>
    </main>
  );
}
