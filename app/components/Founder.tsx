import Link from "next/link";

// Section 6. Who is speaking, with a link to /about. Anchor: #founder.
//
// TODO(Stéphane), blocking before launch:
// 1. Photograph. Drop a portrait at /public/stephane.jpg (shot or
//    cropped against a dark background per the design note) and
//    replace the placeholder <div> below with a next/image.
// 2. One hard number from the FEI period, appended to the first
//    paragraph. The handover note marks this as blocking.
export default function Founder() {
  return (
    <section id="founder" className="px-6 md:px-16 py-20 md:py-28 max-w-7xl mx-auto border-t border-[var(--color-slate)]/40">
      <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-24 items-start">
        <div>
          {/* Placeholder for the portrait. Replace with next/image once the photograph exists. */}
          <div
            className="aspect-[4/5] w-full max-w-xs border border-[var(--color-slate)]/60 flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="font-serif text-5xl text-foreground/20 select-none">SS</span>
          </div>
        </div>

        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-8">
            EvidenSe is Stéphane Schwander.
          </h2>
          <div className="font-sans text-lg md:text-xl font-light text-foreground/70 leading-relaxed space-y-6">
            <p>
              Nine years at UEFA. Eleven at the FEI, the international federation for equestrian
              sport, as Head of Digital and then Head of Content and Platform Management, where I
              built and ran one of the strongest digital operations in Olympic sport, turning the
              federation into its own media platform and creating commercial inventory on owned
              channels rather than renting audience from broadcasters.
            </p>
            <p className="text-foreground font-normal">
              I have defended the budget, briefed the board and lived with the consequences. That
              is the difference between advice and a recommendation someone is prepared to sign.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-block mt-8 font-sans text-sm font-medium text-foreground border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
          >
            More about how I work &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
