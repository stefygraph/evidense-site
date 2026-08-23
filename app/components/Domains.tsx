// Section 7. The full scope of work.
const DOMAINS = [
  {
    title: "Sport Revenue Intelligence",
    lead: "Finding the value being left on the table.",
    body: "Commercial friction audits, asset repackaging, revenue sprints.",
  },
  {
    title: "Predictive Investment and Due Diligence",
    lead: "De-risking capital before it is committed.",
    body: "Investment memos, target simulation, portfolio and partnership review.",
  },
  {
    title: "Decision systems for federations",
    lead: "Faster, better documented decisions without losing control, credibility or institutional memory.",
    body: "Fractional chief strategy support, AI-assisted decision workflows.",
  },
];

export default function Domains() {
  return (
    <section id="domains" className="px-6 md:px-16 py-20 md:py-28 max-w-7xl mx-auto border-t border-[var(--color-slate)]/40">
      <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-12 md:mb-16">
        Three domains of work.
      </h2>

      <div className="grid md:grid-cols-3 gap-10 md:gap-12 max-w-6xl">
        {DOMAINS.map((d) => (
          <div key={d.title}>
            <h3 className="font-serif text-2xl text-foreground mb-4">{d.title}.</h3>
            <p className="font-sans text-base md:text-lg text-foreground font-normal leading-relaxed mb-3">
              {d.lead}
            </p>
            <p className="font-sans text-base font-light text-foreground/60 leading-relaxed">
              {d.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
