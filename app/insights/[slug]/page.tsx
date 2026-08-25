export const runtime = "nodejs";
export const dynamicParams = true;

import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getAllInsights, getInsightBySlug } from "@/lib/insights";
import { renderMdx } from "@/lib/mdx";
import { BOOKING_URL, SITE_URL } from "@/lib/site";

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
    alternates: { canonical: `/insights/${post.slug}` },
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

  const canonicalUrl = `${SITE_URL}/insights/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    mainEntityOfPage: canonicalUrl,
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#stephane`,
      name: "Stéphane Schwander",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "EvidenSe",
    },
  };

  return (
    <main className="relative min-h-screen selection:bg-[var(--color-moss)] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-3xl pt-14 md:pt-20 pb-16 md:pb-20">
          <Link
            href="/insights"
            className="font-sans text-xs uppercase tracking-[0.15em] text-foreground/50 hover:text-foreground transition-colors"
          >
            &larr; The Briefing
          </Link>

          <h1 className="mt-8 font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight text-foreground">
            {post.frontmatter.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 font-sans text-xs uppercase tracking-[0.12em] text-foreground/50 pb-10 border-b border-[var(--color-slate)]/40">
            <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
            <span className="text-foreground/25">/</span>
            <span>Stéphane Schwander</span>
          </div>

          <article className="article-prose font-sans mt-10">{content}</article>

          <div className="mt-16 pt-10 border-t border-[var(--color-slate)]/40">
            <p className="font-sans text-lg font-light text-foreground/70 leading-relaxed mb-6 max-w-xl">
              If a decision like this is coming to your board, start with a conversation. Thirty
              minutes, no material required in advance.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-sans text-sm font-semibold uppercase tracking-widest text-background bg-foreground px-7 py-3.5 hover:bg-foreground/85 transition-colors"
            >
              Book a call
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
