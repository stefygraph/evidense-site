import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getAllInsights } from "@/lib/insights";
import { LAUSANNE_VAUD, LAUSANNE_VAUD_PATHS, LAUSANNE_VAUD_PUBLISHED } from "@/lib/articles/lausanne-vaud";

export const metadata = {
  alternates: {
    canonical: "/insights",
    languages: { en: "/insights", "fr-CH": "/fr/insights", "x-default": "/insights" },
  },
  title: "The Briefing: sport revenue, sponsorship and decisions | EvidenSe",
  description:
    "Evidence-led notes by Stéphane Schwander on sport revenue, sponsorship value, international sport and decisions under pressure. Rare, never noise.",
};

export default function InsightsPage() {
  const insights = getAllInsights();

  return (
    <main className="relative min-h-screen selection:bg-[var(--color-moss)] selection:text-white">
      <Header />

      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-3xl pt-16 md:pt-24 pb-16 md:pb-20">
          <nav aria-label="Language" className="flex justify-end gap-3 font-sans text-xs uppercase tracking-[0.15em] text-foreground/50 mb-6">
            <span className="text-foreground" aria-current="page">
              EN
            </span>
            <span className="text-foreground/25">/</span>
            <Link href="/fr/insights" hrefLang="fr-CH" lang="fr-CH" className="hover:text-foreground transition-colors">
              FR
            </Link>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-foreground mb-4">
            The Briefing.
          </h1>
          <p className="font-sans text-lg md:text-xl font-light text-foreground/70 leading-relaxed">
            Notes for people who decide. Rare, never noise.
          </p>

          {/* Featured long read, in English and French */}
          <article className="mt-14 border border-[var(--color-moss)]/60 bg-[var(--color-moss)]/10 p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-x-3 font-sans text-xs uppercase tracking-[0.12em] text-foreground/50">
              <span className="text-[var(--color-moss)] font-semibold">Long read</span>
              <span className="text-foreground/25">/</span>
              <time dateTime={LAUSANNE_VAUD_PUBLISHED}>{LAUSANNE_VAUD_PUBLISHED}</time>
              <span className="text-foreground/25">/</span>
              <span>EN · FR</span>
            </div>
            <h2 className="mt-4 font-serif text-2xl md:text-3xl leading-snug tracking-tight text-foreground">
              <Link href={LAUSANNE_VAUD_PATHS.en} className="hover:text-foreground/80 transition-colors">
                {LAUSANNE_VAUD.en.h1}
              </Link>
            </h2>
            <p className="mt-4 font-sans text-base md:text-lg font-light text-foreground/70 leading-relaxed">
              {LAUSANNE_VAUD.en.description}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href={LAUSANNE_VAUD_PATHS.en}
                className="inline-block font-sans text-sm font-medium text-foreground/80 border-b border-foreground/40 pb-0.5 hover:text-foreground hover:border-foreground transition-colors"
              >
                Read the article &rarr;
              </Link>
              <Link
                href={LAUSANNE_VAUD_PATHS.fr}
                hrefLang="fr-CH"
                lang="fr-CH"
                className="inline-block font-sans text-sm font-medium text-foreground/60 border-b border-foreground/25 pb-0.5 hover:text-foreground hover:border-foreground transition-colors"
              >
                Lire en français &rarr;
              </Link>
            </div>
          </article>

          <div className="mt-14 space-y-12">
            {insights.map((i) => (
              <article key={i.slug} className="border-t border-[var(--color-slate)]/40 pt-10">
                <div className="flex flex-wrap items-center gap-x-3 font-sans text-xs uppercase tracking-[0.12em] text-foreground/50">
                  <time dateTime={i.date}>{i.date}</time>
                  <span className="text-foreground/25">/</span>
                  <span>{i.readingTime}</span>
                </div>

                <h2 className="mt-4 font-serif text-2xl md:text-3xl leading-snug tracking-tight text-foreground">
                  <Link
                    href={`/insights/${String(i.slug)}`}
                    className="hover:text-foreground/80 transition-colors"
                  >
                    {i.title}
                  </Link>
                </h2>

                <p className="mt-4 font-sans text-base md:text-lg font-light text-foreground/70 leading-relaxed">
                  {i.description}
                </p>

                <Link
                  href={`/insights/${String(i.slug)}`}
                  className="inline-block mt-5 font-sans text-sm font-medium text-foreground/80 border-b border-foreground/40 pb-0.5 hover:text-foreground hover:border-foreground transition-colors"
                >
                  Read the note &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
