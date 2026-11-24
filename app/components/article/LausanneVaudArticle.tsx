import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import readingTime from "reading-time";
import Footer from "../Footer";
import Header from "../Header";
import ArticleTracking from "./ArticleTracking";
import { BOOKING_URL, CONTACT_EMAIL, FOUNDER_SAME_AS, SITE_URL } from "@/lib/site";
import { frenchTypography } from "@/lib/labs";
import {
  ARTICLE_HREFLANG,
  FIGURE_SOURCES,
  LAUSANNE_VAUD,
  LAUSANNE_VAUD_MODIFIED,
  LAUSANNE_VAUD_PATHS,
  LAUSANNE_VAUD_PUBLISHED,
  commonsFilePage,
  commonsSrcSet,
  commonsThumb,
  type ArticleLocale,
  type FigureId,
  type LausanneVaudContent,
} from "@/lib/articles/lausanne-vaud";

// Long-form article, one component for EN and FR. Body text comes from
// content/articles/lausanne-vaud.<locale>.mdx; tables, figures and CTAs
// are components fed by lib/articles/lausanne-vaud.ts. Layout: one
// reading column (about 68 characters), a sticky contents list with the
// booking button on wide screens, a collapsible contents list on mobile.

const LOCALES: ArticleLocale[] = ["en", "fr"];
const ARTICLE_ID = "lausanne-vaud";

export function lausanneVaudMetadata(locale: ArticleLocale): Metadata {
  const c = LAUSANNE_VAUD[locale];
  const t = (s: string) => (locale === "fr" ? frenchTypography(s) : s);
  return {
    title: `${t(c.metaTitle)} | EvidenSe`,
    description: c.description,
    alternates: {
      canonical: LAUSANNE_VAUD_PATHS[locale],
      languages: {
        [ARTICLE_HREFLANG.en]: LAUSANNE_VAUD_PATHS.en,
        [ARTICLE_HREFLANG.fr]: LAUSANNE_VAUD_PATHS.fr,
        "x-default": LAUSANNE_VAUD_PATHS.en,
      },
    },
    authors: [{ name: "Stéphane Schwander", url: `${SITE_URL}/about` }],
    openGraph: {
      title: t(c.metaTitle),
      description: c.description,
      type: "article",
      url: LAUSANNE_VAUD_PATHS[locale],
      siteName: "EvidenSe",
      locale: c.ogLocale,
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => LAUSANNE_VAUD[l].ogLocale),
      publishedTime: LAUSANNE_VAUD_PUBLISHED,
      modifiedTime: LAUSANNE_VAUD_MODIFIED,
      authors: [`${SITE_URL}/about`],
    },
  };
}

function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function textOf(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (typeof node === "object" && "props" in node) {
    return textOf((node as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

function Refs({ refs }: { refs: number[] }) {
  if (!refs.length) return null;
  return (
    <>
      {refs.map((n) => (
        <Ref key={n} n={String(n)} />
      ))}
    </>
  );
}

function Ref({ n }: { n: string }) {
  return (
    <sup className="lv-ref">
      <a href={`#source-${n}`} aria-label={`Source ${n}`}>
        {n}
      </a>
    </sup>
  );
}

const label = "font-sans text-[11px] uppercase tracking-[0.15em] text-foreground/50";
const border = "border-[var(--color-slate)]/40";
const primaryBtn =
  "inline-block text-center font-sans text-sm font-semibold uppercase tracking-widest text-background bg-foreground px-7 py-3.5 hover:bg-foreground/85 transition-colors";
const textLink =
  "font-sans text-sm font-semibold uppercase tracking-widest text-foreground border-b border-[var(--color-moss)] pb-1 hover:border-foreground transition-colors";

function Photo({
  id,
  c,
  priority = false,
  className = "",
  imgClassName = "",
  sizes,
}: {
  id: FigureId;
  c: LausanneVaudContent;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  sizes: string;
}) {
  const src = FIGURE_SOURCES[id];
  const f = c.figures[id];
  const t = (s: string) => (c.locale === "fr" ? frenchTypography(s) : s);
  return (
    <figure className={className}>
      {/* Wikimedia Commons thumbnails at standard widths, served from
          Wikimedia's CDN. Plain img keeps the srcset under our control. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={commonsThumb(src.path, 1280)}
        srcSet={commonsSrcSet(src.path)}
        sizes={sizes}
        width={src.width}
        height={src.height}
        alt={f.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={`block w-full h-auto bg-[var(--color-slate)]/20 ${imgClassName}`}
      />
      <figcaption className="mt-3 font-sans text-xs md:text-[13px] font-light leading-relaxed text-foreground/55">
        {t(f.caption)}{" "}
        <span className="text-foreground/40">
          {c.imageCredit}
          {c.locale === "fr" ? " : " : ": "}
          <a href={commonsFilePage(src.path)} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-foreground">
            {src.author}
          </a>
          ,{" "}
          <a href={src.licenceUrl} target="_blank" rel="noopener license" className="underline underline-offset-2 hover:text-foreground">
            {src.licence}
          </a>
          , via Wikimedia Commons
        </span>
      </figcaption>
    </figure>
  );
}

function Blocks(c: LausanneVaudContent) {
  const t = (s: string) => (c.locale === "fr" ? frenchTypography(s) : s);

  const blocks: Record<string, ReactNode> = {
    facts: (
      <dl className={`my-10 grid grid-cols-2 md:grid-cols-3 border-t border-l ${border}`}>
        {c.facts.map((f) => (
          <div key={f.label} className={`border-r border-b ${border} px-4 py-5 md:px-5`}>
            <dt className="font-serif text-3xl md:text-4xl leading-none text-foreground">{f.value}</dt>
            <dd className="mt-3 font-sans text-sm md:text-[15px] leading-snug text-foreground/85">{t(f.label)}</dd>
            <dd className="mt-2 font-sans text-xs leading-snug font-light text-foreground/50">
              {t(f.scope)}
              <Refs refs={f.refs} />
            </dd>
          </div>
        ))}
      </dl>
    ),
    places: (
      <div className={`my-10 border-t ${border}`}>
        {c.places.map((p) => (
          <div key={p.place} className={`grid sm:grid-cols-[10rem_1fr] gap-x-6 gap-y-1 py-5 border-b ${border}`}>
            <p className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-[var(--color-moss)] pt-1">{p.place}</p>
            <div>
              <p className="font-sans text-base md:text-lg leading-snug text-foreground">{t(p.orgs)}</p>
              <p className="mt-1 font-sans text-sm font-light text-foreground/60">
                {t(p.field)}
                <Refs refs={p.refs} />
              </p>
            </div>
          </div>
        ))}
      </div>
    ),
    impact: (
      <figure className={`my-10 border ${border} p-5 md:p-7`}>
        <figcaption className={label}>{t(c.impact.heading)}</figcaption>
        <div className="mt-6 space-y-5">
          {c.impact.rows.map((r) => (
            <div key={r.area}>
              <div className="flex items-baseline justify-between gap-4 font-sans">
                <span className="text-sm md:text-base text-foreground/80">{r.area}</span>
                <span className="font-serif text-xl md:text-2xl text-foreground whitespace-nowrap">{r.amount}</span>
              </div>
              <div className="mt-2 h-1.5 bg-[var(--color-slate)]/25" aria-hidden="true">
                <div className="h-full bg-[var(--color-moss)]" style={{ width: `${(r.value / c.impact.rows[0].value) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 font-sans text-xs leading-relaxed font-light text-foreground/55">
          {t(c.impact.note)}
          <Refs refs={c.impact.refs} />
        </p>
      </figure>
    ),
    expertise: (
      <div className={`my-10 border-t ${border}`}>
        <div className={`hidden sm:grid grid-cols-2 gap-6 py-3 border-b ${border} ${label}`}>
          <span>{t(c.expertise.headers[0])}</span>
          <span>{t(c.expertise.headers[1])}</span>
        </div>
        {c.expertise.rows.map((r) => (
          <div key={r.need} className={`grid sm:grid-cols-2 gap-x-6 gap-y-1 py-4 border-b ${border}`}>
            <p className="font-sans text-sm md:text-base font-light text-foreground/65">{t(r.need)}</p>
            <p className="font-sans text-base text-foreground">
              {t(r.where)}
              <Refs refs={r.refs} />
            </p>
          </div>
        ))}
      </div>
    ),
    needs: (
      <div className="my-10 grid gap-3">
        <div className={`hidden sm:grid grid-cols-2 gap-6 px-5 ${label}`}>
          <span>{t(c.needs.headers[0])}</span>
          <span>{t(c.needs.headers[1])}</span>
        </div>
        {c.needs.rows.map((r) => (
          <div key={r.need} className={`grid sm:grid-cols-2 gap-x-6 gap-y-2 border ${border} px-5 py-4`}>
            <p className="font-sans text-base font-medium text-foreground">{t(r.need)}</p>
            <p className="font-sans text-sm md:text-base font-light text-foreground/70">
              <span className="sm:hidden text-[var(--color-moss)]" aria-hidden="true">
                &rarr;{" "}
              </span>
              {t(r.contribution)}
            </p>
          </div>
        ))}
      </div>
    ),
    tools: (
      <div className="my-10" data-track="tools">
        <p className={label}>{t(c.tools.heading)}</p>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          {c.tools.items.map((it) => (
            <div key={it.name} className={`border ${border} p-5 md:p-6 flex flex-col`}>
              <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-[var(--color-moss)] font-semibold">
                {it.kicker.split(" · ").map((part, i) => (
                  <span key={part} className={i ? "block" : ""}>
                    {part}
                  </span>
                ))}
              </p>
              <p className="mt-3 font-serif text-xl leading-snug text-foreground">{it.name}</p>
              <p className="mt-3 font-sans text-sm leading-relaxed font-light text-foreground/70 flex-1">{t(it.body)}</p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                {it.links.map((l) =>
                  l.external ? (
                    <a key={l.label} href={l.href} target="_blank" rel="noopener" data-cta={l.cta} className={textLink}>
                      {t(l.label)} &rarr;
                    </a>
                  ) : (
                    <Link key={l.label} href={l.href} data-cta={l.cta} className={textLink}>
                      {t(l.label)} &rarr;
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    inlineCta: (
      <aside className="my-12 border-l-2 border-[var(--color-moss)] pl-5 md:pl-6 py-1" data-track="inline-cta">
        <p className="font-sans text-base md:text-lg leading-relaxed text-foreground/85">{t(c.inlineCta.text)}</p>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-cta="booking_inline" className={`inline-block mt-4 ${textLink}`}>
          {t(c.inlineCta.button)} &rarr;
        </a>
      </aside>
    ),
    cta: (
      <section id="contact" className="my-14 bg-[var(--color-moss)]/10 border border-[var(--color-moss)]/60 p-6 md:p-10" data-track="cta">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-moss)] font-semibold">{t(c.cta.eyebrow)}</p>
        <h2 className="mt-4 font-serif text-2xl md:text-3xl leading-snug text-foreground text-balance">{t(c.cta.heading)}</h2>
        <p className="mt-4 font-sans text-base md:text-lg font-light leading-relaxed text-foreground/75">{t(c.cta.body)}</p>
        <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-x-8">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-cta="booking_main" className={primaryBtn}>
            {t(c.cta.primary)}
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(c.cta.emailSubject)}`}
            data-cta="email"
            className="font-sans text-sm text-foreground/80 underline underline-offset-4 decoration-[var(--color-moss)] hover:text-foreground"
          >
            {c.cta.email} {CONTACT_EMAIL}
          </a>
          <Link href="/about" data-cta="about" className="font-sans text-sm text-foreground/80 underline underline-offset-4 decoration-[var(--color-moss)] hover:text-foreground">
            {t(c.cta.about)} &rarr;
          </Link>
        </div>
        <p className="mt-6 font-sans text-xs font-light text-foreground/50">{t(c.cta.note)}</p>
      </section>
    ),
  };
  return blocks;
}

function jsonLd(c: LausanneVaudContent, toc: { id: string; title: string }[]) {
  const url = `${SITE_URL}${LAUSANNE_VAUD_PATHS[c.locale]}`;
  const other = c.locale === "en" ? "fr" : "en";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: c.h1,
        description: c.description,
        url,
        mainEntityOfPage: url,
        inLanguage: c.htmlLang,
        datePublished: LAUSANNE_VAUD_PUBLISHED,
        dateModified: LAUSANNE_VAUD_MODIFIED,
        image: commonsThumb(FIGURE_SOURCES.hero.path, 1920),
        author: { "@id": `${SITE_URL}/#stephane`, "@type": "Person", name: "Stéphane Schwander", url: `${SITE_URL}/about`, sameAs: FOUNDER_SAME_AS },
        publisher: { "@id": `${SITE_URL}/#organization` },
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: [
          { "@type": "City", name: "Lausanne", sameAs: "https://www.wikidata.org/wiki/Q807" },
          { "@type": "AdministrativeArea", name: "Canton of Vaud", sameAs: "https://www.wikidata.org/wiki/Q12771" },
        ],
        articleSection: toc.map((s) => s.title),
        citation: c.sources.map((s) => s.url),
        [c.locale === "en" ? "workTranslation" : "translationOfWork"]: {
          "@id": `${SITE_URL}${LAUSANNE_VAUD_PATHS[other]}#article`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "EvidenSe", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "The Briefing", item: `${SITE_URL}/insights` },
          { "@type": "ListItem", position: 3, name: c.metaTitle, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: c.htmlLang,
        mainEntity: c.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

export default async function LausanneVaudArticle({ locale }: { locale: ArticleLocale }) {
  const c = LAUSANNE_VAUD[locale];
  const fr = locale === "fr";
  const t = (s: string) => (fr ? frenchTypography(s) : s);

  const raw = fs.readFileSync(path.join(process.cwd(), "content", "articles", `lausanne-vaud.${locale}.mdx`), "utf8");
  const source = fr ? frenchTypography(raw) : raw;

  const toc = [...source.matchAll(/^## (.+)$/gm)].map((m) => ({ id: slugify(m[1]), title: m[1] }));
  const minutes = Math.max(1, Math.round(readingTime(source.replace(/<[^>]+>/g, "")).minutes + 2));
  const blocks = Blocks(c);

  const { content } = await compileMDX({
    source,
    options: { parseFrontmatter: false },
    components: {
      Ref,
      Block: ({ id }: { id: string }) => <>{blocks[id] ?? null}</>,
      Figure: ({ id }: { id: string }) => (
        <Photo id={id as FigureId} c={c} className="my-10" sizes="(min-width: 768px) 680px, 100vw" />
      ),
      h2: ({ children }: { children?: ReactNode }) => {
        const id = slugify(textOf(children));
        return (
          <h2 id={id} data-track={id}>
            {children}
          </h2>
        );
      },
    },
  });

  const tocList = (
    <ol className="space-y-3 font-sans text-sm leading-snug">
      {toc.map((s, i) => (
        <li key={s.id} className="flex gap-3">
          <span className="text-foreground/35 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
          <a href={`#${s.id}`} className="text-foreground/70 hover:text-foreground transition-colors">
            {s.title}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <main lang={c.htmlLang} className="relative min-h-screen selection:bg-[var(--color-moss)] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(c, toc)) }} />
      <Header />

      {/* Title block */}
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-3xl pt-10 md:pt-16">
          <div className="flex flex-wrap items-center justify-between gap-4 font-sans text-xs uppercase tracking-[0.15em] text-foreground/50">
            <nav aria-label="Breadcrumb">
              <Link href="/insights" className="hover:text-foreground transition-colors">
                &larr; {c.breadcrumb}
              </Link>
            </nav>
            <nav aria-label={c.languageLabel} className="flex items-center gap-3">
              {LOCALES.map((l, idx) => (
                <span key={l} className="flex items-center gap-3">
                  {idx > 0 && <span className="text-foreground/25">/</span>}
                  {l === locale ? (
                    <span className="text-foreground" aria-current="page">
                      {l.toUpperCase()}
                    </span>
                  ) : (
                    <Link
                      href={LAUSANNE_VAUD_PATHS[l]}
                      hrefLang={ARTICLE_HREFLANG[l]}
                      lang={LAUSANNE_VAUD[l].htmlLang}
                      data-cta={`switch_${l}`}
                      className="hover:text-foreground transition-colors"
                    >
                      {l.toUpperCase()}
                    </Link>
                  )}
                </span>
              ))}
            </nav>
          </div>

          <p className="mt-10 font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-moss)] font-semibold">{t(c.eyebrow)}</p>
          <h1 className="mt-4 font-serif text-[2.1rem] sm:text-4xl md:text-5xl leading-[1.12] tracking-tight text-foreground text-balance">
            {t(c.h1)}
          </h1>
          <p className="mt-6 md:mt-8 font-sans text-lg md:text-xl font-light text-foreground/80 leading-relaxed">{t(c.standfirst)}</p>

          <div className={`mt-8 flex items-center gap-4 pb-8 border-b ${border}`}>
            <Image src="/stephane.webp" alt="Stéphane Schwander" width={48} height={48} className="w-12 h-12 rounded-full object-cover object-top shrink-0" />
            <div className="font-sans text-sm leading-snug">
              <Link href="/about" className="text-foreground hover:underline underline-offset-4">
                {t(c.byline)}
              </Link>
              <p className="mt-1 text-xs text-foreground/50">
                <time dateTime={LAUSANNE_VAUD_PUBLISHED}>{t(c.factsChecked)}</time>
                <span className="mx-2 text-foreground/25">/</span>
                {c.minutesRead(minutes)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero photograph */}
      <div className="max-w-7xl mx-auto md:px-16 mt-8 md:mt-10">
        <Photo
          id="hero"
          c={c}
          priority
          sizes="(min-width: 1280px) 1152px, 100vw"
          imgClassName="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] object-cover"
          className="[&>figcaption]:px-6 md:[&>figcaption]:px-0"
        />
      </div>

      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-[minmax(0,680px)_1fr] lg:gap-16 xl:gap-24 pt-10 md:pt-14 pb-16 md:pb-24">
          <article className="min-w-0 max-w-[680px]">
            {/* In brief: the answer first, for skimmers and for engines */}
            <section className={`border ${border} p-5 md:p-7`} aria-labelledby="in-brief">
              <h2 id="in-brief" className={label}>
                {t(c.inBrief.heading)}
              </h2>
              <ul className="mt-4 space-y-3 font-sans text-base leading-relaxed text-foreground/85">
                {c.inBrief.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span className="mt-[0.7em] h-px w-3 shrink-0 bg-[var(--color-moss)]" aria-hidden="true" />
                    <span>{t(it)}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Contents, mobile and tablet */}
            <details className={`lg:hidden mt-6 border ${border} group`}>
              <summary className="cursor-pointer list-none flex items-center justify-between px-5 py-4 font-sans text-xs uppercase tracking-[0.15em] text-foreground/70">
                {t(c.tocLabel)}
                <span className="text-foreground/40 transition-transform group-open:rotate-45 text-lg leading-none">+</span>
              </summary>
              <div className="px-5 pb-5">{tocList}</div>
            </details>

            <div className="lv-prose mt-10 font-sans">{content}</div>

            {/* FAQ, mirrored in the FAQPage JSON-LD */}
            <section className={`mt-16 pt-12 border-t ${border}`} data-track="faq">
              <h2 className="font-serif text-2xl md:text-3xl leading-snug text-foreground">{t(c.faqHeading)}</h2>
              <div className="mt-8 space-y-8">
                {c.faq.map((f) => (
                  <div key={f.q}>
                    <h3 className="font-sans text-base md:text-lg font-semibold text-foreground">{t(f.q)}</h3>
                    <p className="mt-2 font-sans text-base md:text-lg font-light text-foreground/75 leading-relaxed">
                      {t(f.a)}
                      <Refs refs={f.refs} />
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Author */}
            <section className={`mt-16 border ${border} p-5 md:p-7 flex flex-col sm:flex-row gap-5`}>
              <Image src="/stephane.webp" alt="Stéphane Schwander" width={88} height={88} className="w-20 h-20 rounded-full object-cover object-top shrink-0" />
              <div>
                <p className="font-serif text-xl text-foreground">{c.author.name}</p>
                <p className="mt-1 font-sans text-xs uppercase tracking-[0.15em] text-[var(--color-moss)] font-semibold">{t(c.author.role)}</p>
                <p className="mt-3 font-sans text-sm md:text-base font-light leading-relaxed text-foreground/70">{t(c.author.bio)}</p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm">
                  <Link href="/about" data-cta="about_author" className="text-foreground underline underline-offset-4 decoration-[var(--color-moss)]">
                    {t(c.author.link)} &rarr;
                  </Link>
                  <a href={FOUNDER_SAME_AS[0]} target="_blank" rel="noopener me" data-cta="linkedin" className="text-foreground/70 underline underline-offset-4 decoration-[var(--color-slate)] hover:text-foreground">
                    LinkedIn
                  </a>
                </div>
              </div>
            </section>

            {/* Sources */}
            <section className={`mt-16 pt-12 border-t ${border}`} aria-labelledby="sources">
              <h2 id="sources" className="font-serif text-2xl leading-snug text-foreground">
                {c.sourcesHeading}
              </h2>
              <p className="mt-4 font-sans text-sm font-light leading-relaxed text-foreground/55">{t(c.sourcesIntro)}</p>
              <ol className="mt-6 space-y-2.5 font-sans text-[13px] md:text-sm leading-relaxed text-foreground/65">
                {c.sources.map((s) => (
                  <li key={s.n} id={`source-${s.n}`} className="lv-source flex gap-3 -mx-2 px-2 py-1">
                    <span className="text-[var(--color-moss)] tabular-nums w-6 shrink-0 text-right">{s.n}</span>
                    <span className="min-w-0 break-words">
                      {s.org}.{" "}
                      <a href={s.url} target="_blank" rel="noopener" className="text-foreground/85 underline underline-offset-2 decoration-foreground/25 hover:decoration-foreground">
                        {s.title}
                      </a>
                      . <span className="text-foreground/45">{t(s.note)}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          </article>

          {/* Contents and booking, wide screens */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 max-w-[260px]">
              <p className={label}>{t(c.tocLabel)}</p>
              <div className="mt-5">{tocList}</div>
              <div className={`mt-10 pt-8 border-t ${border}`}>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-cta="booking_sidebar" className={`${primaryBtn} w-full px-4 text-xs`}>
                  {t(c.cta.primary)}
                </a>
                <a href="#contact" className="mt-3 block font-sans text-xs text-foreground/50 hover:text-foreground">
                  {t(c.cta.eyebrow)} &darr;
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
      <ArticleTracking article={ARTICLE_ID} locale={locale} />
    </main>
  );
}
