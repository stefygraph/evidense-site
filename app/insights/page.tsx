import Link from "next/link";
import { getAllInsights } from "@/lib/insights";

export const metadata = {
  title: "Insights | EvidenSe",
  description: "Evidence-led notes for leaders navigating complex decisions.",
};

export default function InsightsPage() {
  const insights = getAllInsights();

  return (
    <main className="min-h-screen bg-[#000423] text-[#F8FAFC]">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        {/* Kicker (match home) */}
        <div className="text-xs tracking-[0.22em] uppercase text-[#F8FAFC]/70">
          Decision Support • Strategic Mandates • Institutional Alignment
        </div>

        {/* Hero (match home rhythm) */}
        <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          Insights
        </h1>

        <p className="mt-5 text-base leading-relaxed text-[#F8FAFC]/80">
          Evidence-led notes for leaders making decisions under pressure.
        </p>

        {/* Primary CTA (match home label) */}
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center border border-[#F8FAFC] px-5 py-3 text-xs uppercase tracking-[0.18em] hover:bg-[#F8FAFC] hover:text-[#000423]"
          >
            Start the conversation
          </Link>
        </div>

        <div className="mt-12 h-px w-full bg-[#F8FAFC]/15" />

        {/* List (editorial, not cardy) */}
        <div className="mt-12 space-y-10">
          {insights.map((i) => (
            <article key={i.slug} className="pb-10">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[#F8FAFC]/70">
                <time dateTime={i.date}>{i.date}</time>
                <span className="text-[#F8FAFC]/30">/</span>
                <span>{i.readingTime}</span>
              </div>

              <h2 className="mt-3 font-serif text-2xl leading-snug tracking-tight">
                <Link
                  href={`/insights/${String(i.slug)}`}
                  className="underline-offset-4 hover:underline"
                >
                  {i.title}
                </Link>
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-[#F8FAFC]/80">
                {i.description}
              </p>

              {i.tags?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {i.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-[#F8FAFC]/20 px-3 py-1 text-[11px] tracking-wide text-[#F8FAFC]/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-10 h-px w-full bg-[#F8FAFC]/10" />
            </article>
          ))}
        </div>

        {/* Footer line (match home tone) */}
        <div className="mt-10 text-xs tracking-[0.22em] uppercase text-[#F8FAFC]/70">
          EvidenSe — Lausanne / Switzerland
        </div>
      </div>
    </main>
  );
}
