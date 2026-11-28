import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getAllInsights } from "@/lib/insights";
import { BRIEFING_PATHS, formatDate, getLongReads } from "@/lib/articles/registry";
import { frenchTypography } from "@/lib/labs";
import { SPONSORING_MACHINE_PATHS } from "@/lib/labs";
import { BOOKING_URL, SITE_URL } from "@/lib/site";

// The Briefing in French: every article published under /fr/insights,
// newest first, then the notes that exist only in English so a French
// reader sees the whole publication. Fed by lib/articles/registry.ts.

const TITLE = "The Briefing en français";
// Search title: the brand name plus what the notes are about.
const META_TITLE = "The Briefing en français : sport, valeur et décisions";
const DESCRIPTION =
  "Les articles d'EvidenSe en français, par Stéphane Schwander : sport international, Lausanne et Vaud, valeur commerciale et décisions. Rares, jamais du bruit.";

export const metadata: Metadata = {
  title: `${META_TITLE} | EvidenSe`,
  description: DESCRIPTION,
  alternates: {
    canonical: BRIEFING_PATHS.fr,
    languages: { en: BRIEFING_PATHS.en, "fr-CH": BRIEFING_PATHS.fr, "x-default": BRIEFING_PATHS.en },
  },
  openGraph: {
    title: META_TITLE,
    description: DESCRIPTION,
    type: "website",
    url: BRIEFING_PATHS.fr,
    siteName: "EvidenSe",
    locale: "fr_CH",
    alternateLocale: ["en_GB"],
  },
};

const t = frenchTypography;
const meta = "flex flex-wrap items-center gap-x-3 font-sans text-xs uppercase tracking-[0.12em] text-foreground/50";
const readLink =
  "inline-block font-sans text-sm font-medium text-foreground/80 border-b border-foreground/40 pb-0.5 hover:text-foreground hover:border-foreground transition-colors";

export default function FrenchBriefingPage() {
  const french = getLongReads().filter((r) => r.versions.fr);
  const englishOnly = getAllInsights();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}${BRIEFING_PATHS.fr}#webpage`,
        url: `${SITE_URL}${BRIEFING_PATHS.fr}`,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: "fr-CH",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: french.map((r, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}${r.versions.fr!.path}`,
            name: r.versions.fr!.title,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "EvidenSe", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: TITLE, item: `${SITE_URL}${BRIEFING_PATHS.fr}` },
        ],
      },
    ],
  };

  return (
    <main lang="fr-CH" className="relative min-h-screen selection:bg-[var(--color-moss)] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-3xl pt-16 md:pt-24 pb-16 md:pb-20">
          <nav aria-label="Langue" className="flex justify-end gap-3 font-sans text-xs uppercase tracking-[0.15em] text-foreground/50">
            <Link href={BRIEFING_PATHS.en} hrefLang="en" lang="en" className="hover:text-foreground transition-colors">
              EN
            </Link>
            <span className="text-foreground/25">/</span>
            <span className="text-foreground" aria-current="page">
              FR
            </span>
          </nav>

          <p className="mt-6 font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-moss)] font-semibold">En français</p>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl leading-tight tracking-tight text-foreground mb-4">The Briefing.</h1>
          <p className="font-sans text-lg md:text-xl font-light text-foreground/70 leading-relaxed">
            {t("Des notes pour celles et ceux qui décident. Rares, jamais du bruit. Voici tout ce qu'EvidenSe publie en français.")}
          </p>

          {/* French articles */}
          <div className="mt-14 space-y-12">
            {french.map((r) => {
              const v = r.versions.fr!;
              return (
                <article key={r.id} className="border-t border-[var(--color-slate)]/40 pt-10">
                  <div className={meta}>
                    <time dateTime={r.published}>{formatDate(r.published, "fr")}</time>
                    <span className="text-foreground/25">/</span>
                    <span>{v.minutes} min de lecture</span>
                    {r.versions.en && (
                      <>
                        <span className="text-foreground/25">/</span>
                        <Link href={r.versions.en.path} hrefLang="en" lang="en" className="hover:text-foreground transition-colors">
                          Also in English
                        </Link>
                      </>
                    )}
                  </div>
                  <h2 className="mt-4 font-serif text-2xl md:text-3xl leading-snug tracking-tight text-foreground">
                    <Link href={v.path} className="hover:text-foreground/80 transition-colors">
                      {t(v.title)}
                    </Link>
                  </h2>
                  <p className="mt-4 font-sans text-base md:text-lg font-light text-foreground/70 leading-relaxed">{t(v.description)}</p>
                  <Link href={v.path} className={`mt-5 ${readLink}`}>
                    {t("Lire l'article")} &rarr;
                  </Link>
                </article>
              );
            })}
          </div>

          {/* Notes published in English only */}
          {englishOnly.length > 0 && (
            <section className="mt-20 pt-12 border-t border-[var(--color-slate)]/40">
              <h2 className="font-serif text-2xl md:text-3xl leading-snug text-foreground">{t("Les autres notes, en anglais")}</h2>
              <p className="mt-3 font-sans text-base font-light text-foreground/60 leading-relaxed">
                {t("Ces notes de The Briefing ne sont pour l'instant publiées qu'en anglais.")}
              </p>
              <ul className="mt-8 border-t border-[var(--color-slate)]/40">
                {englishOnly.map((i) => (
                  <li key={i.slug} className="border-b border-[var(--color-slate)]/40">
                    <Link
                      href={`/insights/${i.slug}`}
                      hrefLang="en"
                      className="group grid sm:grid-cols-[1fr_auto] gap-x-6 gap-y-1 py-5 -mx-2 px-2 hover:bg-[var(--color-slate)]/10 transition-colors"
                    >
                      <span lang="en" className="font-sans text-base md:text-lg text-foreground group-hover:underline underline-offset-4 decoration-[var(--color-moss)]">
                        {i.title}
                      </span>
                      <span className="font-sans text-xs uppercase tracking-[0.12em] text-foreground/50 sm:pt-1.5 whitespace-nowrap">
                        <time dateTime={i.date}>{formatDate(i.date, "fr")}</time> · EN
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Elsewhere in French */}
          <section className="mt-16 pt-10 border-t border-[var(--color-slate)]/40">
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-foreground/50">{t("Aussi en français sur le site")}</p>
            <p className="mt-3 font-sans text-base md:text-lg font-light text-foreground/70 leading-relaxed">
              <Link href={SPONSORING_MACHINE_PATHS.fr} className="text-foreground underline underline-offset-4 decoration-[var(--color-moss)] hover:decoration-foreground">
                La Sponsoring Machine
              </Link>
              {t(", le premier projet d'EvidenSe Labs : aider les clubs sportifs amateurs de toute la Suisse à valoriser et vendre leur sponsoring.")}
            </p>
          </section>

          <div className="mt-16 pt-10 border-t border-[var(--color-slate)]/40">
            <p className="font-sans text-lg font-light text-foreground/70 leading-relaxed mb-6 max-w-xl">
              {t("Une décision en vue dans votre organisation ? Commençons par une conversation. Trente minutes, sans document à préparer.")}
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-sans text-sm font-semibold uppercase tracking-widest text-background bg-foreground px-7 py-3.5 hover:bg-foreground/85 transition-colors"
            >
              {t("Réserver un appel")}
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
