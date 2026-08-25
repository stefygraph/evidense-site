import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getAllInsights } from "@/lib/insights";

export const metadata = {
  alternates: { canonical: "/insights" },
  title: "The Briefing | EvidenSe",
  description:
    "Notes for people who decide. Rare, never noise. Evidence-led writing on sport revenue, sponsorship value and decisions under pressure.",
};

export default function InsightsPage() {
  const insights = getAllInsights();

  return (
    <main className="relative min-h-screen selection:bg-[var(--color-moss)] selection:text-white">
      <Header />

      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-3xl pt-16 md:pt-24 pb-16 md:pb-20">
          <h1 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-foreground mb-4">
            The Briefing.
          </h1>
          <p className="font-sans text-lg md:text-xl font-light text-foreground/70 leading-relaxed">
            Notes for people who decide. Rare, never noise.
          </p>

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
