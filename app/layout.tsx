import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { FOUNDER_SAME_AS, ORG_SAME_AS, SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: "EvidenSe | Evidence-led advisory for sport revenue decisions",
  description:
    "Independent advisory for sport organisations, rights holders, brands and investors. Three-week decision sprints that show where revenue really is, and what to grow, fund or stop. Based in Lausanne.",
  icons: {
    icon: [
      { url: "/favicon.png?v=3", sizes: "any" },
      { url: "/favicon.png?v=3", type: "image/x-icon" },
    ],
    apple: "/favicon.png?v=3",
  },
};

// Organization and Person schema, so the founder and the practice are
// connected in search.
const EXPERTISE = [
  "Sport revenue strategy",
  "Sponsorship valuation",
  "Media rights strategy",
  "Commercial due diligence",
  "Sports investment advisory",
  "Olympic and international federation advisory",
  "Decision support",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: "EvidenSe",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      email: "hello@evidense.io",
      description:
        "Independent advisory practice helping sport organisations, rights holders, brands and investors understand where commercial value is really being created, and what to grow, fund, back or stop.",
      slogan: "Better decisions under pressure.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lausanne",
        addressCountry: "CH",
      },
      areaServed: "Worldwide",
      knowsAbout: EXPERTISE,
      founder: { "@id": `${SITE_URL}/#stephane` },
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "The Decision Sprint",
          description:
            "A fixed-scope engagement of three to four weeks: gather the organisation's commercial, audience, digital and sponsorship data, test pricing, packaging, rights structure and audience quality, and deliver a board ready recommendation on what to grow, hold, reprice or stop.",
          provider: { "@id": `${SITE_URL}/#organization` },
        },
      },
      ...(ORG_SAME_AS.length > 0 && { sameAs: ORG_SAME_AS }),
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#stephane`,
      name: "Stéphane Schwander",
      url: `${SITE_URL}/about`,
      image: `${SITE_URL}/stephane.webp`,
      worksFor: { "@id": `${SITE_URL}/#organization` },
      jobTitle: "Founder",
      description:
        "Founder of EvidenSe. Eight years at UEFA (2006 to 2014, latterly Digital Operations Manager) and eleven at the FEI, the international federation for equestrian sport (Commercial Manager Digital Partnerships, Head of Digital, then Head of Content and Platform Management), where he grew the owned audience from 351,000 to 5.3 million. Founder of WNG in 2001. Adviser to PickEat.it, mentor in ThinkSport's TECH4SPORT Accelerator, member of the Sport Innovation Challenge Council, lecturer at Toulouse Business School and guest lecturer at the University of Lausanne.",
      award:
        "Best Entertainment, Leisure and Travel Campaign, Alliance of Independent Agencies, London 2022",
      knowsAbout: EXPERTISE,
      affiliation: [
        { "@type": "Organization", name: "PickEat.it", url: "https://pickeat.it" },
        { "@type": "Organization", name: "ThinkSport", url: "https://thinksport.org" },
        { "@type": "EducationalOrganization", name: "Toulouse Business School" },
        {
          "@type": "EducationalOrganization",
          name: "University of Lausanne, Institute of Sport Sciences",
        },
      ],
      ...(FOUNDER_SAME_AS.length > 0 && { sameAs: FOUNDER_SAME_AS }),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "EvidenSe",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-GB",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background text-foreground">
        <div className="min-h-screen">{children}</div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <GoogleAnalytics gaId="G-Z8Z07NKD7D" />
      </body>
    </html>
  );
}
