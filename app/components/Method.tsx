import Image from "next/image";

// Section 8. Method, Largo.ai, the formula. Anchor: #method.
// The illustration draws the method: scattered sport signals pass
// through structured analysis and converge on one decision.
const TERMS = [
  "Senior-led throughout, from framing the decision to the final recommendation. No leverage model, no juniors learning on your engagement.",
  "Fixed fee, agreed before the engagement starts. No time-based billing.",
  "Every proposal defines the decision, the evidence, the assumptions to test, deliverables, timeline, fee, exclusions and next step.",
];

export default function Method() {
  return (
    <section id="method" className="px-6 md:px-16 py-20 md:py-28 max-w-7xl mx-auto border-t border-[var(--color-slate)]/40">
      <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-24 items-start">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
            How the work is done.
          </h2>
          <Image
            src="/illu-method.webp"
            alt=""
            aria-hidden="true"
            width={760}
            height={1013}
            className="hidden md:block w-full max-w-[280px] mt-10 opacity-90"
          />
        </div>

        <div className="max-w-2xl">
          <div className="font-sans text-lg md:text-xl font-light text-foreground/70 leading-relaxed space-y-6">
            <p>
              We use modelling and AI to process evidence faster and more systematically than a
              traditional consulting team can. We do not use it to produce the answer.
            </p>
            <p>
              The analysis is structured. The judgement is senior. The recommendation is argued,
              not generated.
            </p>
            <p>
              Where predictive modelling genuinely adds value, we work with selected partners
              including Largo.ai, an EPFL spin-off.
            </p>
          </div>

          <blockquote className="border-l-2 border-[var(--color-moss)] pl-6 my-10">
            <p className="font-serif text-xl md:text-2xl text-foreground leading-snug">
              Modelling processes the evidence. Senior judgement turns it into the decision.
            </p>
          </blockquote>

          <ul className="space-y-4 border-t border-[var(--color-slate)]/30 pt-8">
            {TERMS.map((t) => (
              <li key={t} className="font-sans text-base font-light text-foreground/70 leading-relaxed">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
