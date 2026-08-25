import Image from "next/image";
import Link from "next/link";

// Section 6. Who is speaking, with a link to /about. Anchor: #founder.
// The stat row figures come from the FEI record: independently
// measured, third-party verifiable. Plain figures, no icons, no
// animation. Playfair carries the key figures per the design note.
const RECORD = [
  { figure: "-78% spend, +7% audience", label: "paid media cut, audience grew, same year" },
  { figure: "CHF 1m+", label: "new revenue in the first ten months" },
  { figure: "81%", label: "of video views on channels we owned" },
];

export default function Founder() {
  return (
    <section id="founder" className="px-6 md:px-16 py-20 md:py-28 max-w-7xl mx-auto border-t border-[var(--color-slate)]/40">
      <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-24 items-start">
        <div>
          {/* Portrait treatment (border, slight tone) is the one image
              treatment on the site, so it reads as deliberate on the
              dark ground. */}
          <Image
            src="/stephane.webp"
            alt="Stéphane Schwander, founder of EvidenSe, at work in his office"
            width={1200}
            height={1500}
            className="w-full max-w-xs border border-[var(--color-slate)]/60"
          />
        </div>

        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-8">
            EvidenSe is Stéphane Schwander.
          </h2>
          <div className="font-sans text-lg md:text-xl font-light text-foreground/70 leading-relaxed space-y-6">
            <p>
              Eight years at UEFA. Eleven at the FEI, the international federation for equestrian
              sport, latterly as Head of Digital and then Head of Content and Platform Management,
              where I built and ran one of the strongest digital operations in Olympic sport,
              turning the federation into its own media platform and growing its owned audience
              from 351,000 to 5.3 million.
            </p>
            <p className="text-foreground font-normal">
              I have defended the budget, briefed the board and lived with the consequences. That
              is the difference between advice and a recommendation someone is prepared to sign.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-10 pt-8 border-t border-[var(--color-slate)]/30">
            {RECORD.map((r) => (
              <div key={r.figure}>
                <p className="font-serif text-xl md:text-2xl text-foreground leading-tight mb-1.5">
                  {r.figure}
                </p>
                <p className="font-sans text-sm font-light text-foreground/60 leading-snug">
                  {r.label}
                </p>
              </div>
            ))}
          </div>

          <div className="font-sans text-lg md:text-xl font-light text-foreground/70 leading-relaxed mt-10 space-y-6">
            <p>
              Alongside the practice, I lecture at Toulouse Business School and advise start-ups,
              currently as adviser to{" "}
              <a
                href="https://pickeat.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground border-b border-foreground/40 hover:border-foreground transition-colors"
              >
                PickEat.it
              </a>
              .
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
