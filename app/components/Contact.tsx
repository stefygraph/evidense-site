import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/site";

// Section 10. Close. Anchor: #contact.
export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-16 py-20 md:py-28 max-w-7xl mx-auto border-t border-[var(--color-slate)]/40">
      <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-6">
        Start with a conversation.
      </h2>
      <p className="font-sans text-lg md:text-xl font-light text-foreground/70 leading-relaxed max-w-2xl mb-10">
        Thirty minutes. No material required in advance. If a sprint is not the right answer for
        where you are, I will say so.
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
  );
}
