import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000423] text-white selection:bg-white/20">
      
      {/* --- NAVIGATION --- */}
      <nav className="px-6 pt-10 md:px-12 md:pt-12 flex justify-between items-start">
        {/* Logo Container */}
        <div className="relative w-40 md:w-56">
          <Image
            src="/logo.svg"
            alt="EvidenSe Logo"
            width={220}
            height={80}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* Top Right Button */}
        <a 
          href="mailto:stephane@evidense.io" 
          className="hidden md:flex group items-center gap-3 border border-white/20 px-5 py-3 text-white hover:bg-white hover:text-[#000423] transition-all duration-300"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Start the conversation</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="px-6 md:px-12 flex flex-col justify-center min-h-[75vh]">
        <div className="max-w-5xl">
          
          {/* Label: Small, spaced out, uppercase */}
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/50 mb-6 md:mb-8 ml-1">
            Decision Support • Strategic Mandates • Institutional Alignment
          </p>
          
          {/* Headline: HUGE Serif font, tight line-height */}
          <h1 className="font-serif text-[3.5rem] md:text-[7rem] leading-[0.95] md:leading-[0.9] tracking-tight mb-8 md:mb-12">
            Better decisions <br />
            <span className="text-white">under pressure.</span>
          </h1>
          
          {/* Subtext: Clean Sans-serif */}
          <p className="font-sans text-lg md:text-2xl font-light text-white/70 max-w-2xl leading-relaxed">
            EvidenSe helps organisations navigate complex decisions using evidence, audience insight and strategic judgement.
          </p>

          {/* Mobile Button (Visible only on small screens) */}
          <div className="mt-12 md:hidden">
            <a 
              href="mailto:stephane@evidense.io" 
              className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-white border-b border-white/30 pb-2"
            >
              Start the conversation <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}