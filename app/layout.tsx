import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SITE_URL } from "@/lib/site";

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
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "EvidenSe",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      email: "hello@evidense.io",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lausanne",
        addressCountry: "CH",
      },
      founder: { "@id": `${SITE_URL}/#stephane` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#stephane`,
      name: "Stéphane Schwander",
      url: `${SITE_URL}/about`,
      worksFor: { "@id": `${SITE_URL}/#organization` },
      jobTitle: "Founder",
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
