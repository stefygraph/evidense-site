import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/site";

// /about exists to be sendable on its own in an introduction email,
// and to close the credibility question for a warm reader. It carries
// its own metadata for exactly that reason.
export const metadata: Metadata = {
  title: "About Stéphane Schwander | EvidenSe",
  description:
    "Twenty years inside sport's institutions: nine at UEFA, eleven at the FEI. Why EvidenSe exists, and how the work is done.",
};

// TODO(Stéphane), required before launch (handover note, section 11):
// 1. Exact UEFA years, first paragraph of The career.
// 2. One hard number from the FEI period, in The FEI story.

const PRINCIPLES = [
  {
    title: "No overclaims",
    body: "A verifiable fact is worth more than an impressive adjective. If a claim cannot be checked, it does not go in the recommendation.",
  },
  {
    title: "Advisory only",
    body: "EvidenSe advises. It does not resell technology, take implementation mandates or carry a stake in the outcome it recommends.",
  },
  {
    title: "AI as accelerator, not headline",
    body: "Modelling and AI make the evidence work faster and more systematic. They are method, never the promise.",
  },
  {
    title: "Verification over generation",
    body: "Anything a model produces is checked against sources before it reaches you. The recommendation is argued, not generated.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen selection:bg-[var(--color-moss)] selection:text-white">
      <Header />

      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        {/* Portrait and intro */}
        <section className="pt-16 md:pt-24 pb-16 grid md:grid-cols-[1fr_2fr] gap-10 md:gap-24 items-start">
          <div>
            <Image
              src="/stephane.webp"
              alt="Stéphane Schwander, founder of EvidenSe, at work in his office"
              width={1200}
              height={1500}
              priority
              className="w-full max-w-xs border border-[var(--color-slate)]/60"
            />
          </div>

          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-8">
              Stéphane Schwander.
            </h1>
            <div className="font-sans text-lg md:text-xl font-light text-foreground/70 leading-relaxed space-y-6">
              <p>
                {/* TODO(Stéphane): add exact UEFA years. */}
                Nine years at UEFA as Digital Operations Manager. Eleven years at the FEI, the
                international federation for equestrian sport, as Head of Digital and then Head
                of Content and Platform Management. Co-founder of WNG in 2002. More than two
                decades of international experience across Olympic federations, European
                football and start-ups.
              </p>
            </div>
          </div>
        </section>

        {/* The FEI story */}
        <section className="py-16 border-t border-[var(--color-slate)]/40 grid md:grid-cols-[1fr_2fr] gap-10 md:gap-24 items-start">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
            The FEI years.
          </h2>
          <div className="font-sans text-lg md:text-xl font-light text-foreground/70 leading-relaxed space-y-6 max-w-2xl">
            <p>
              When I joined the FEI, equestrian sport reached its audience the way most Olympic
              sports still do: through broadcasters, on their terms, in their windows. The
              federation could prove it was being watched a few weeks every four years. It could
              not prove much else.
            </p>
            <p>
              Over eleven years we turned the federation into its own media platform. We built the
              digital operation, brought production and distribution in-house where it made
              commercial sense, and created inventory on owned channels rather than renting
              audience from broadcasters. Sponsors stopped buying exposure and started buying
              positions in a platform the federation controlled.
              {/* TODO(Stéphane): one hard number from this period goes here. Blocking. */}
            </p>
            <p>
              That work is the origin of the EvidenSe thesis. It proved that visibility and value
              are built separately, that owned demand is worth more than rented reach, and that
              none of it survives unless the case can be defended in front of a board, a congress
              and a budget. I defended those budgets, briefed those boards and lived with the
              consequences.
            </p>
          </div>
        </section>

        {/* The differentiator */}
        <section className="py-16 border-t border-[var(--color-slate)]/40">
          <blockquote className="border-l-2 border-[var(--color-moss)] pl-6 md:pl-8 max-w-3xl">
            <p className="font-serif text-2xl md:text-3xl text-foreground leading-snug">
              Consultants have the models but have never carried a decision through a congress.
              Federation insiders have the credibility but not the modelling. EvidenSe works in
              the overlap.
            </p>
          </blockquote>
        </section>

        {/* Standing */}
        <section className="py-16 border-t border-[var(--color-slate)]/40 grid md:grid-cols-[1fr_2fr] gap-10 md:gap-24 items-start">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
            Beyond the practice.
          </h2>
          <div className="font-sans text-lg md:text-xl font-light text-foreground/70 leading-relaxed space-y-6 max-w-2xl">
            <p>
              I lecture at Toulouse Business School, and have given guest lectures at the
              Institute of Sport Sciences of the University of Lausanne, invited by Professor
              Markus Lang. I advise start-ups, currently as adviser to{" "}
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
            <p>
              The two feed each other. Teaching forces the thesis to be explainable to someone
              with no stake in agreeing with it, and a founder's board asks harder questions
              about revenue than most congresses do.
            </p>
          </div>
        </section>

        {/* How I work */}
        <section className="py-16 border-t border-[var(--color-slate)]/40">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-12">
            How I work.
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12 max-w-5xl">
            {PRINCIPLES.map((p) => (
              <div key={p.title}>
                <h3 className="font-sans text-lg font-semibold text-foreground mb-3">{p.title}.</h3>
                <p className="font-sans text-base font-light text-foreground/70 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 border-t border-[var(--color-slate)]/40">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-6">
            Start with a conversation.
          </h2>
          <p className="font-sans text-lg font-light text-foreground/70 leading-relaxed max-w-2xl mb-10">
            Thirty minutes. No material required in advance. If a sprint is not the right answer
            for where you are, I will say so.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-semibold uppercase tracking-widest text-background bg-foreground px-7 py-3.5 hover:bg-foreground/85 transition-colors"
            >
              Book a call
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-sans text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
