import Link from "next/link";
import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";
import {
  HREFLANG,
  SPONSORING_MACHINE,
  SPONSORING_MACHINE_PATHS,
  SPONSORING_MACHINE_TOOL_URL,
  LINKS,
  frenchTypography,
  plainText,
  type LabsLocale,
} from "@/lib/labs";

// La Sponsoring Machine, one component for the three language versions
// (/labs/sponsoring-machine, /fr/..., /de/...). Each route only picks
// the locale. The page is written to be read by a club committee and
// quoted correctly by generative engines: a direct answer in the first
// two sentences, explicit definition, named entities, dated figures,
// FAQ in real questions, matching JSON-LD.

const LOCALES: LabsLocale[] = ["en", "fr", "de"];

export function sponsoringMachineMetadata(locale: LabsLocale): Metadata {
  const c = SPONSORING_MACHINE[locale];
  const path = SPONSORING_MACHINE_PATHS[locale];
  return {
    title: `${c.title} | EvidenSe`,
    description: c.description,
    alternates: {
      canonical: path,
      languages: {
        [HREFLANG.en]: SPONSORING_MACHINE_PATHS.en,
        [HREFLANG.fr]: SPONSORING_MACHINE_PATHS.fr,
        [HREFLANG.de]: SPONSORING_MACHINE_PATHS.de,
        "x-default": SPONSORING_MACHINE_PATHS.en,
      },
    },
    openGraph: {
      title: c.title,
      description: c.description,
      type: "website",
      url: path,
      siteName: "EvidenSe",
      locale: c.ogLocale,
      alternateLocale: LOCALES.filter((l) => l !== locale).map(
        (l) => SPONSORING_MACHINE[l].ogLocale
      ),
    },
  };
}

// Renders [label](href) as links. Internal links use next/link,
// external ones open in a new tab.
function rich(text: string, fr: boolean): ReactNode[] {
  const source = fr ? frenchTypography(text) : text;
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(source)) !== null) {
    if (m.index > last) parts.push(<Fragment key={i++}>{source.slice(last, m.index)}</Fragment>);
    const [, label, href] = m;
    const cls =
      "text-foreground underline decoration-[var(--color-moss)] underline-offset-4 hover:decoration-foreground transition-colors";
    parts.push(
      href.startsWith("/") ? (
        <Link key={i++} href={href} className={cls}>
          {label}
        </Link>
      ) : (
        <a key={i++} href={href} target="_blank" rel="noopener" className={cls}>
          {label}
        </a>
      )
    );
    last = m.index + m[0].length;
  }
  if (last < source.length) parts.push(<Fragment key={i++}>{source.slice(last)}</Fragment>);
  return parts;
}

function jsonLd(locale: LabsLocale) {
  const c = SPONSORING_MACHINE[locale];
  const pageUrl = `${SITE_URL}${SPONSORING_MACHINE_PATHS[locale]}`;
  const serviceId = `${SITE_URL}${SPONSORING_MACHINE_PATHS.en}#service`;
  const jessyId = `${SITE_URL}${SPONSORING_MACHINE_PATHS.en}#jessy`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: c.title,
        description: c.description,
        inLanguage: c.htmlLang,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": serviceId },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "EvidenSe", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Labs", item: `${SITE_URL}/labs` },
          { "@type": "ListItem", position: 3, name: "La Sponsoring Machine", item: pageUrl },
        ],
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "La Sponsoring Machine",
        url: SPONSORING_MACHINE_TOOL_URL,
        mainEntityOfPage: pageUrl,
        description: c.serviceDescription,
        serviceType: c.serviceType,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "Switzerland" },
        audience: { "@type": "Audience", audienceType: c.audience },
        availableLanguage: ["fr", "de"],
        inLanguage: c.htmlLang,
        // No prices published yet: only the free demo is declared.
        offers: { "@type": "Offer", name: "Demo", price: "0", priceCurrency: "CHF" },
        contributor: { "@id": jessyId },
      },
      {
        "@type": "Person",
        "@id": jessyId,
        name: "Jessy Ducommun",
        jobTitle: "Field research and product, La Sponsoring Machine",
        affiliation: [
          { "@type": "CollegeOrUniversity", name: "University of Lausanne (UNIL)", url: LINKS.unil },
          { "@type": "SportsOrganization", name: "LUC Floorball Epalinges", url: LINKS.lucFloorball },
        ],
        sameAs: [LINKS.jessyLinkedIn],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        inLanguage: c.htmlLang,
        mainEntity: c.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: plainText(f.a) },
        })),
      },
    ],
  };
}

export default function SponsoringMachine({ locale }: { locale: LabsLocale }) {
  const c = SPONSORING_MACHINE[locale];
  const fr = locale === "fr";
  const t = (s: string) => (fr ? frenchTypography(s) : s);

  return (
    <main
      lang={c.htmlLang}
      className="relative min-h-screen selection:bg-[var(--color-moss)] selection:text-white"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(locale)) }}
      />

      <Header />

      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <article className="max-w-3xl pt-14 md:pt-20 pb-16 md:pb-24">
          {/* Breadcrumb and language switcher */}
          <div className="flex flex-wrap items-center justify-between gap-4 font-sans text-xs uppercase tracking-[0.15em] text-foreground/50">
            <nav aria-label="Breadcrumb">
              <Link href="/labs" className="hover:text-foreground transition-colors">
                &larr; {c.breadcrumbLabs}
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
                      href={SPONSORING_MACHINE_PATHS[l]}
                      hrefLang={HREFLANG[l]}
                      lang={SPONSORING_MACHINE[l].htmlLang}
                      className="hover:text-foreground transition-colors"
                    >
                      {l.toUpperCase()}
                    </Link>
                  )}
                </span>
              ))}
            </nav>
          </div>

          <p className="mt-10 font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-moss)] font-semibold">
            {c.eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight text-foreground">
            {t(c.h1)}
          </h1>

          <div className="mt-8 font-sans text-lg md:text-xl font-light text-foreground/80 leading-relaxed space-y-5">
            {c.lead.map((p, i) => (
              <p key={i}>{rich(p, fr)}</p>
            ))}
          </div>

          {/* Key facts: scannable, and easy for an engine to quote */}
          <dl className="mt-10 grid sm:grid-cols-2 border-t border-l border-[var(--color-slate)]/40">
            {c.facts.map((f) => (
              <div key={f.label} className="border-r border-b border-[var(--color-slate)]/40 px-5 py-4">
                <dt className="font-sans text-[11px] uppercase tracking-[0.15em] text-foreground/50">
                  {t(f.label)}
                </dt>
                <dd className="mt-1 font-sans text-sm md:text-base text-foreground">{t(f.value)}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <a
              href={SPONSORING_MACHINE_TOOL_URL}
              target="_blank"
              rel="noopener"
              className="inline-block text-center font-sans text-sm font-semibold uppercase tracking-widest text-background bg-foreground px-7 py-3.5 hover:bg-foreground/85 transition-colors"
            >
              {c.cta.primary}
            </a>
            <p className="font-sans text-sm font-light text-foreground/60">
              {t(c.cta.note)}{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=La%20Sponsoring%20Machine`}
                className="text-foreground/80 underline underline-offset-4 hover:text-foreground"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>

          {/* Body */}
          <div className="mt-6">
            {c.sections.map((s) => (
              <section key={s.heading} className="mt-14">
                <h2 className="font-serif text-2xl md:text-3xl leading-snug text-foreground">
                  {t(s.heading)}
                </h2>
                <div className="mt-5 font-sans text-base md:text-lg font-light text-foreground/75 leading-relaxed space-y-5">
                  {s.body.map((p, i) => (
                    <p key={i}>{rich(p, fr)}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* FAQ: visible questions and answers, mirrored in the FAQPage JSON-LD */}
          <section className="mt-16 pt-12 border-t border-[var(--color-slate)]/40">
            <h2 className="font-serif text-2xl md:text-3xl leading-snug text-foreground">
              {t(c.faqHeading)}
            </h2>
            <div className="mt-8 space-y-8">
              {c.faq.map((f) => (
                <div key={f.q}>
                  <h3 className="font-sans text-base md:text-lg font-semibold text-foreground">
                    {t(f.q)}
                  </h3>
                  <p className="mt-2 font-sans text-base md:text-lg font-light text-foreground/75 leading-relaxed">
                    {rich(f.a, fr)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-16 pt-10 border-t border-[var(--color-slate)]/40">
            <p className="font-sans text-lg font-light text-foreground/70 leading-relaxed mb-6 max-w-xl">
              {t(c.closing)}
            </p>
            <a
              href={SPONSORING_MACHINE_TOOL_URL}
              target="_blank"
              rel="noopener"
              className="inline-block font-sans text-sm font-semibold uppercase tracking-widest text-background bg-foreground px-7 py-3.5 hover:bg-foreground/85 transition-colors"
            >
              {c.cta.primary}
            </a>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
