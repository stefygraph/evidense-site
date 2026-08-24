import { BOOKING_URL } from "@/lib/site";

// Section 1. The problem, the audience, the promise, in fifteen seconds.
// Hero, H1, subtitle and one CTA must be visible without scrolling
// on a 13-inch laptop.
export default function Hero() {
  return (
    <section id="top" className="px-6 md:px-16 pt-16 md:pt-24 pb-20 md:pb-28 max-w-7xl mx-auto">
      <p className="font-sans text-xs tracking-[0.2em] text-foreground/50 mb-8 uppercase font-medium">
        Independent advisory. Lausanne.
      </p>

      <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8 text-foreground max-w-4xl">
        Growing audience. Flat revenue. We find out why.
      </h1>

      <p className="font-sans text-lg md:text-xl font-light text-foreground/70 leading-relaxed max-w-3xl mb-10">
        EvidenSe is an independent advisory practice for federations and leagues, rights holders
        and clubs, brands and investors. We show you where commercial value is really being
        created, where it is leaking, and what to grow, fund, back or stop.
      </p>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm font-semibold uppercase tracking-widest text-background bg-foreground px-7 py-3.5 hover:bg-foreground/85 transition-colors"
        >
          Book a 30 minute call
        </a>
        <a
          href="#sprint"
          className="font-sans text-sm font-medium text-foreground/80 border-b border-foreground/40 pb-1 hover:text-foreground hover:border-foreground transition-colors"
        >
          See how the sprint works
        </a>
      </div>
    </section>
  );
}
