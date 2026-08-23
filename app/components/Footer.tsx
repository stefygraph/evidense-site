import Image from "next/image";
import { CONTACT_EMAIL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 py-12 border-t border-[var(--color-slate)]/40 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-sm font-sans font-light text-foreground/70">
        <div className="flex items-center gap-5">
          <div className="w-[30px] h-[30px] shrink-0 relative">
            <Image
              src="/swiss-precision.png"
              alt="Swiss made"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <div className="space-y-0.5">
            <p className="text-foreground uppercase tracking-widest text-xs font-bold">EvidenSe</p>
            <p>Based in Lausanne. Working internationally.</p>
          </div>
        </div>
        <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-foreground transition-colors">
          {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  );
}
