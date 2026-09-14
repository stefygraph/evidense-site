import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/site";

// /about exists to be sendable on its own in an introduction email,
// and to close the credibility question for a warm reader. It carries
// its own metadata for exactly that reason.
export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Stéphane Schwander | EvidenSe",
  description:
    "Twenty-five years across sport's institutions and start-ups: nine at UEFA, eleven at the FEI, an owned audience grown from 351,000 to 5.3 million. Why EvidenSe exists, and how the work is done.",
};

// Career facts, dates and figures confirmed by Stéphane, August 2026.

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
                Nine years at UEFA in Nyon, from 2005 to 2014, first as an application
                specialist on UEFA.com, then as Digital Operations Manager: everything published
                on the site, in twelve languages, across some 1,600 matches a season and around
                sixty contributors in Europe, with a EUR 2.1 million budget.
              </p>
              <p>
                Eleven years at the FEI, the international federation for equestrian sport:
                Commercial Manager, Digital Partnerships from 2015 to 2017, Head of Digital from
                2018 to 2024, then Head of Content and Platform Management until 2026, with a
                team of fifteen across Lausanne, Germany and England and a CHF 2.5 million
                budget.
              </p>
              <p>
                Before that, founder of WNG, a web and new media agency in Lausanne started in
                2001 and built to CHF 1.9 million in turnover with a team of nine. Vendor,
                operator, executive: I have written the recommendation, executed it, and been
                the one who had to defend it upstairs.
              </p>
            </div>
          </div>
        </section>

        {/* The FEI story. id="record" so the proof is directly
            linkable in an introduction email: /about#record */}
        <section
          id="record"
          className="py-16 border-t border-[var(--color-slate)]/40 grid md:grid-cols-[1fr_2fr] gap-10 md:gap-24 items-start"
        >
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
              Over eleven years we turned the federation into its own media platform. The owned
              audience grew from 351,000 to 5.3 million. We founded the FEI Media House, a joint
              venture with ClipMyHorse.TV, so that production was something we controlled rather
              than access we had to request. And we built commercial inventory on those channels:
              the media offer booked over CHF 1 million in its first ten months, with seven
              partners each receiving a delivery report against their own name.
            </p>
            <p>
              The proof came when the spending stopped. In my final year we cut paid media spend
              by 78 percent, and the audience still grew by 7 percent. By then, 81 percent of our
              video consumption ran through channels we owned, while the sport's mainstream
              television coverage fell by a quarter to a half in a single cycle. Measured
              independently for ASOIF, the operation performed in the first quartile of Olympic
              international federations on owned channels.
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
              Markus Lang. At{" "}
              <a
                href="https://thinksport.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground border-b border-foreground/40 hover:border-foreground transition-colors"
              >
                ThinkSport
              </a>
              , the Lausanne-based international sport cluster, I mentor start-ups in the
              TECH4SPORT Accelerator and sit on the Sport Innovation Challenge Council. I also
              advise start-ups directly, currently as adviser to{" "}
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
            <p>
              The FEI work took Best Entertainment, Leisure and Travel Campaign at the Alliance
              of Independent Agencies awards in London in 2022, for a campaign that used 30
              percent fewer posts than its predecessor and reached 96 percent more people. I
              trained in Leading Digital Business Transformation at IMD in Lausanne.
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
