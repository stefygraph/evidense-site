import Image from "next/image";

// Section 2. Why the problem exists. Anchor: #approach.
// The illustration is the section's argument drawn: rings of
// audience around a small core of actual value.
export default function VisibilityNotRevenue() {
  return (
    <section
      id="approach"
      className="px-6 md:px-16 py-20 md:py-28 max-w-7xl mx-auto grid md:grid-cols-[1fr_2fr] gap-10 md:gap-24 items-start border-t border-[var(--color-slate)]/40"
    >
      <div>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
          Visibility is not revenue.
        </h2>
        <Image
          src="/illu-audience.webp"
          alt=""
          aria-hidden="true"
          width={760}
          height={1013}
          className="hidden md:block w-full max-w-[280px] mt-10 opacity-90"
        />
      </div>
      <div className="font-sans text-lg md:text-xl font-light text-foreground/70 leading-relaxed space-y-6 max-w-2xl">
        <p>
          Most sport organisations can prove they are being watched. Far fewer can prove they are
          being paid for it.
        </p>
        <p>
          Followers, views and Olympic peaks are not the same thing as monetisable demand.
          Treating them as if they were is how commercial decisions quietly go wrong, and how a
          strong year on paper becomes a difficult conversation with the board.
        </p>
        <p>
          The same gap sits on the other side of the table. Capital is committed to sport
          properties, teams and sporttech companies on the strength of reach figures that were
          never built to predict revenue.
        </p>
        <p>
          The problem is rarely a shortage of data. It is that nobody has the time or the mandate
          to turn scattered signals into a decision that survives contact with a board or an
          investment committee.
        </p>
      </div>
    </section>
  );
}
