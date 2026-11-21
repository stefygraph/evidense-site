import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { BOOKING_URL, SITE_URL } from "@/lib/site";
import { SPONSORING_MACHINE_PATHS } from "@/lib/labs";

// EvidenSe Labs: the public experiments. Kept apart from the advisory
// offer on the homepage so a cold reader is not confused about what
// EvidenSe sells, while each lab still proves the method in the open.
// Client case studies belong on a future /work page, not here.

const DESCRIPTION =
  "Public experiments by EvidenSe: the Sport Attention Index, a monthly ranking of public attention across Olympic international federations, and La Sponsoring Machine, which helps amateur clubs in Switzerland value their sponsorship.";

export const metadata: Metadata = {
  alternates: { canonical: "/labs" },
  title: "EvidenSe Labs | Public experiments in sport value",
  description: DESCRIPTION,
  openGraph: {
    title: "EvidenSe Labs",
    description: DESCRIPTION,
    type: "website",
    url: "/labs",
    siteName: "EvidenSe",
  },
};

const LABS = [
  {
    name: "EvidenSe Sport Attention Index",
    question: "Which international federations hold public attention, and how is it moving?",
    body: "A monthly ranking of public attention across the international federations of the Olympic programme, built from open signals such as Wikipedia readership and search interest. Published on the 3rd of each month.",
    status: "Live, monthly",
    href: "https://index.evidense.io",
    cta: "Open the Index",
    external: true,
    languages: null as null | { label: string; href: string; hrefLang: string }[],
  },
  {
    name: "La Sponsoring Machine",
    question: "How much sponsorship is an amateur club leaving on the table?",
    body: "Helps amateur sports clubs in French-speaking Switzerland value, structure and sell their sponsorship: an estimate of what the club is worth to a local sponsor, three offer tiers and a brochure, then ten relevant local companies to approach. Run with the University of Lausanne.",
    status: "Beta, French-speaking Switzerland",
    href: SPONSORING_MACHINE_PATHS.en,
    cta: "Read more",
    external: false,
    languages: [
      { label: "EN", href: SPONSORING_MACHINE_PATHS.en, hrefLang: "en" },
      { label: "FR", href: SPONSORING_MACHINE_PATHS.fr, hrefLang: "fr-CH" },
      { label: "DE", href: SPONSORING_MACHINE_PATHS.de, hrefLang: "de-CH" },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/labs#webpage`,
  url: `${SITE_URL}/labs`,
  name: "EvidenSe Labs",
  description: DESCRIPTION,
  inLanguage: "en-GB",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  hasPart: [
    { "@type": "Dataset", name: "EvidenSe Sport Attention Index", url: "https://index.evidense.io" },
    {
      "@type": "Service",
      "@id": `${SITE_URL}${SPONSORING_MACHINE_PATHS.en}#service`,
      name: "La Sponsoring Machine",
      url: `${SITE_URL}${SPONSORING_MACHINE_PATHS.en}`,
    },
  ],
};

export default function LabsPage() {
  return (
    <main className="relative min-h-screen selection:bg-[var(--color-moss)] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <section className="pt-14 md:pt-20 pb-12 max-w-3xl">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-moss)] font-semibold">
            EvidenSe Labs
          </p>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight text-foreground">
            The method, tested in public.
          </h1>
          <p className="mt-8 font-sans text-lg md:text-xl font-light text-foreground/75 leading-relaxed">
            Labs are tools and datasets EvidenSe builds to test its method in the open. Each one
            starts from a single commercial question, is measured against real data, and stays a
            working experiment rather than a platform. The advisory work itself is on the{" "}
            <Link href="/" className="text-foreground underline decoration-[var(--color-moss)] underline-offset-4">
              homepage
            </Link>
            .
          </p>
        </section>

        <section className="pb-20 md:pb-28 grid md:grid-cols-2 gap-6">
          {LABS.map((lab) => (
            <div
              key={lab.name}
              className="border border-[var(--color-slate)]/50 p-7 md:p-9 flex flex-col"
            >
              <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-foreground/50">
                {lab.status}
              </p>
              <h2 className="mt-3 font-serif text-2xl md:text-3xl leading-snug text-foreground">
                {lab.name}
              </h2>
              <p className="mt-4 font-sans text-base font-medium text-foreground/90 leading-relaxed">
                {lab.question}
              </p>
              <p className="mt-3 font-sans text-base font-light text-foreground/70 leading-relaxed flex-1">
                {lab.body}
              </p>
              <div className="mt-7 flex items-center justify-between gap-4">
                {lab.external ? (
                  <a
                    href={lab.href}
                    target="_blank"
                    rel="noopener"
                    className="font-sans text-sm font-semibold uppercase tracking-widest text-foreground border-b border-[var(--color-moss)] pb-1 hover:border-foreground transition-colors"
                  >
                    {lab.cta} &rarr;
                  </a>
                ) : (
                  <Link
                    href={lab.href}
                    className="font-sans text-sm font-semibold uppercase tracking-widest text-foreground border-b border-[var(--color-moss)] pb-1 hover:border-foreground transition-colors"
                  >
                    {lab.cta} &rarr;
                  </Link>
                )}
                {lab.languages && (
                  <span className="flex items-center gap-3 font-sans text-xs uppercase tracking-[0.15em] text-foreground/50">
                    {lab.languages.map((l) => (
                      <Link
                        key={l.label}
                        href={l.href}
                        hrefLang={l.hrefLang}
                        className="hover:text-foreground transition-colors"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </span>
                )}
              </div>
            </div>
          ))}
        </section>

        <section className="pb-20 md:pb-28 max-w-3xl border-t border-[var(--color-slate)]/40 pt-12">
          <p className="font-sans text-lg font-light text-foreground/70 leading-relaxed mb-6">
            If a lab raises a question for your organisation, start with a conversation. Thirty
            minutes, no material required in advance.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans text-sm font-semibold uppercase tracking-widest text-background bg-foreground px-7 py-3.5 hover:bg-foreground/85 transition-colors"
          >
            Book a call
          </a>
        </section>
      </div>

      <Footer />
    </main>
  );
}
