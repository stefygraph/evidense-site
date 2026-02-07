import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation / Logo Area */}
      <nav className="px-6 pt-12 md:px-12 flex justify-between items-center">
        {/* Playfair Display Bold applied here via font-serif */}
        <span className="font-serif text-4xl md:text-5xl tracking-tighter font-bold text-[#000042] border-b-2 border-[#000042] pb-2">
          EvidenSe
        </span>
        
        <a 
          href="mailto:stephane@evidense.io" 
          className="hidden md:flex items-center gap-4 border border-[#000042] px-6 py-3 text-[#000042] hover:bg-[#000042] hover:text-white transition-all"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Start the conversation</span>
          <ArrowRight size={14} />
        </a>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 md:px-12 md:py-32 flex flex-col justify-center min-h-[80vh]">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] mb-8 font-semibold text-[#000042]/70">
            Decision Support • Strategic Mandates • Institutional Alignment
          </p>
          <h1 className="font-serif text-6xl md:text-9xl leading-[0.9] mb-10 tracking-tighter text-[#000042]">
            Better decisions <br className="hidden md:block" /> under pressure.
          </h1>
          <p className="text-xl md:text-3xl font-light leading-relaxed mb-12 max-w-2xl text-[#000042]/90">
            EvidenSe helps organisations navigate complex decisions using evidence, audience insight and strategic judgement.
          </p>
          
          <a 
            href="mailto:stephane@evidense.io" 
            className="w-full md:w-auto bg-[#000042] text-white px-10 py-5 flex justify-between md:justify-start items-center gap-8 hover:bg-opacity-90 transition-all inline-flex"
          >
            <span className="text-sm font-bold uppercase tracking-[0.2em]">Start the conversation</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* The Problem Section - Using your #000042 color */}
      <section className="bg-[#000042] text-white px-6 py-24 md:px-12 md:py-40 grid md:grid-cols-2 gap-16 items-start">
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] tracking-tight">
          When decisions matter, intuition is not enough.
        </h2>
        <div className="space-y-8 text-xl md:text-2xl font-light leading-relaxed">
          <p className="text-white/90">
            In complex organisations, decisions involve timing, perception, and long-term consequences. 
            Yet many are still made under pressure with incomplete evidence.
          </p>
          <p className="font-semibold text-white border-l-4 border-white/30 pl-6 py-2">
            EvidenSe brings clarity before the move is made.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 md:px-12 bg-white border-t border-[#000042]/10 flex flex-col md:flex-row justify-between text-[11px] font-bold uppercase tracking-[0.3em] text-[#000042]/60">
        <div className="space-y-1">
          <p>EvidenSe — Lausanne / Switzerland</p>
          <p className="lowercase tracking-normal font-medium text-[#000042]">stephane@evidense.io</p>
        </div>
        <p className="mt-6 md:mt-0 text-[#000042]">© 2026 EvidenSe</p>
      </footer>
    </main>
  );
}