"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BOOKING_URL } from "@/lib/site";

// Sticky header with the four anchors required by the handover note,
// plus a persistent booking CTA on the right. On the homepage the
// links smooth-scroll to stable section IDs. From /about (or any
// other route) the same links resolve absolutely. On mobile the
// Contact anchor is hidden: the CTA covers the same intent and the
// row must not overflow.
const ANCHORS = [
  { label: "Approach", href: "/#approach" },
  { label: "Sprint", href: "/#sprint" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact", desktopOnly: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-sm border-b border-[var(--color-slate)]/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="px-4 sm:px-6 md:px-16 max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20">
        <Link href="/" aria-label="EvidenSe home" className="relative w-24 md:w-36 shrink-0">
          <Image
            src="/logo.svg"
            alt="EvidenSe"
            width={160}
            height={60}
            priority
            className="w-full h-auto brightness-0 invert"
          />
        </Link>

        <div className="flex items-center gap-3 md:gap-7">
          {ANCHORS.map((a) => (
            <Link
              key={a.label}
              href={a.href}
              className={`font-sans text-xs md:text-sm font-medium text-foreground/70 hover:text-foreground transition-colors tracking-wide ${
                a.desktopOnly ? "hidden md:inline" : ""
              }`}
            >
              {a.label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[11px] md:text-sm font-semibold uppercase tracking-wide md:tracking-wider text-background bg-foreground px-3 md:px-5 py-2 md:py-2.5 hover:bg-foreground/85 transition-colors whitespace-nowrap"
          >
            Book a call
          </a>
        </div>
      </nav>
    </header>
  );
}
