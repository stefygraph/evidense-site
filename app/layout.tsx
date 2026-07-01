import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

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
  title: "EvidenSe | Predictive intelligence and senior judgement",
  description: "Premium advisory practice and programmatic venture engine based out of Lausanne. Moving from noise to strategic judgement in the sports economy.",
  icons: {
    icon: [
      { url: "/favicon.png?v=3", sizes: "any" },
      { url: "/favicon.png?v=3", type: "image/x-icon" },
    ],
    apple: "/favicon.png?v=3",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background text-foreground">
        <div className="min-h-screen">{children}</div>
        
        {/* Google Analytics ID officiel pour EvidenSe */}
        <GoogleAnalytics gaId="G-Z8Z07NKD7D" />
        
      </body>
    </html>
  );
}