// Section 5. The reader self-identifies. Mobile first: most LinkedIn
// traffic is mobile, so the cards stack and stay scannable.
const SITUATIONS = [
  {
    title: "Your audience has grown faster than your revenue.",
    body: "The reach is real. The commercial return has not followed, and nobody can say precisely why.",
    tag: "Federations, leagues, clubs, rights holders",
  },
  {
    title: "You are about to commit capital.",
    body: "A property, a team or a sporttech target needs a view on upside, risk and durability that an investment committee will accept.",
    tag: "Investors, funds, acquirers",
  },
  {
    title: "You are being asked to pay for exposure.",
    body: "A renewal or a new property is on the table and you need to know what that audience is genuinely worth to you, not what the proposal claims.",
    tag: "Brands and sponsors",
  },
  {
    title: "A decision is due and the room is split.",
    body: "A congress, a budget cycle or a rights renewal is coming, and the internal view will not converge on its own.",
    tag: "Federations and institutional bodies",
  },
];

export default function FourSituations() {
  return (
    <section id="situations" className="px-6 md:px-16 py-20 md:py-28 max-w-7xl mx-auto border-t border-[var(--color-slate)]/40">
      <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-12 md:mb-16">
        Four situations we are built for.
      </h2>

      <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl">
        {SITUATIONS.map((s) => (
          <div key={s.title} className="border border-[var(--color-slate)]/50 p-7 md:p-9 flex flex-col">
            <h3 className="font-sans text-lg md:text-xl font-semibold text-foreground mb-3 leading-snug">
              {s.title}
            </h3>
            <p className="font-sans text-base font-light text-foreground/70 leading-relaxed mb-6">
              {s.body}
            </p>
            <p className="font-sans text-xs uppercase tracking-[0.12em] font-medium text-[var(--color-moss)] brightness-125 mt-auto">
              {s.tag}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
