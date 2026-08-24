import { BOOKING_URL } from "@/lib/site";

// Section 4. The concrete offer. Anchor: #sprint.
// Sprint steps and deliverables are set in the sans face: these
// sections exist to be scanned.
const STEPS = [
  {
    step: "Step 1",
    title: "Gather",
    body: "We bring together your commercial, audience, digital and sponsorship data and set it against the market evidence around you. We interview the few people inside your organisation who hold the real picture.",
  },
  {
    step: "Step 2",
    title: "Test",
    body: "We test pricing, packaging, rights structure and audience quality to establish where revenue is leaking, where you are underpriced, and which assumptions no longer hold.",
  },
  {
    step: "Step 3",
    title: "Decide",
    body: "We deliver a board ready recommendation setting out what to grow, hold, reprice or stop, together with the reasoning that supports it.",
  },
];

const DELIVERABLES = [
  "A written decision memo, board ready",
  "A working session with your leadership team",
  "A ranked shortlist of moves, scored on realistic revenue impact",
];

export default function DecisionSprint() {
  return (
    <section id="sprint" className="px-6 md:px-16 py-20 md:py-28 max-w-7xl mx-auto border-t border-[var(--color-slate)]/40">
      <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-12 md:mb-16">
        The Decision Sprint.
      </h2>

      <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-14 max-w-6xl">
        {STEPS.map((s) => (
          <div key={s.step}>
            <p className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-foreground/50 mb-3">
              {s.step}
            </p>
            <h3 className="font-sans text-xl font-semibold text-foreground mb-4">{s.title}.</h3>
            <p className="font-sans text-base md:text-lg font-light text-foreground/70 leading-relaxed">
              {s.body}
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mb-10">
        <p className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-foreground/50 mb-4">
          You get
        </p>
        <ul className="space-y-3">
          {DELIVERABLES.map((d) => (
            <li key={d} className="font-sans text-lg text-foreground flex gap-3">
              <span className="text-[var(--color-moss)] brightness-125 select-none" aria-hidden="true">
                &#9642;
              </span>
              {d}
            </li>
          ))}
        </ul>
      </div>

      <p className="font-sans text-base md:text-lg font-light text-foreground/70 leading-relaxed max-w-2xl mb-10">
        Fixed scope, agreed before we start. No retainer. Most sprints run three to four weeks,
        depending on how quickly your team can make time for us.
      </p>

      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block font-sans text-sm font-semibold uppercase tracking-widest text-foreground border border-foreground/40 px-7 py-3.5 hover:bg-foreground hover:text-background transition-colors"
      >
        Start a conversation
      </a>
    </section>
  );
}
