// Section 3. The gap, visually, in four seconds.
// On the dark ground the deck's light-versus-dark contrast does not
// transfer, so the contrast is built with weight and treatment:
// left column inert, right column the thing that matters.
const PLENTY = ["Dashboards", "Reports", "Benchmarks", "Audience data"];

const RUNS_OUT = [
  "Clear options",
  "Tested assumptions",
  "An honest view of the risk",
  "A recommended move",
  "A decision that holds",
];

export default function Contrast() {
  return (
    <section id="contrast" className="px-6 md:px-16 py-20 md:py-28 max-w-7xl mx-auto border-t border-[var(--color-slate)]/40">
      <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-12 md:mb-16 max-w-3xl">
        What sport has, and what it runs out of.
      </h2>

      <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-5xl">
        {/* Left: inert */}
        <div className="border border-[var(--color-slate)]/60 p-8 md:p-10">
          <p className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-foreground/40 mb-8">
            There is plenty of this
          </p>
          <ul className="space-y-4">
            {PLENTY.map((item) => (
              <li key={item} className="font-sans text-lg font-light text-foreground/45">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: the thing that matters */}
        <div className="bg-[var(--color-moss)]/15 border border-[var(--color-moss)] p-8 md:p-10">
          <p className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-[var(--color-moss)] mb-8 brightness-125">
            This is what runs out
          </p>
          <ul className="space-y-4">
            {RUNS_OUT.map((item) => (
              <li key={item} className="font-sans text-xl md:text-2xl font-normal text-foreground">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
