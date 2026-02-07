import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000423] text-white">
      {/* Navigation / Logo Area */}
      <nav className="px-6 pt-12 md:px-12 flex justify-between items-center">
        <span className="font-serif text-4xl md:text-5xl tracking-tighter font-bold border-b-2 border-white pb-2 text-white">
          EvidenSe
        </span>
        
        <a 
          href="mailto:stephane@evidense.io" 
          className="hidden md:flex items-center gap-4 border border-white/30 px-6 py-3 text-white hover:bg-white hover:text-[#000423] transition-all"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Start the conversation</span>
          <ArrowRight size={14} />
        </a>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 md:px-12 md:py-32 flex flex-col justify-center min-h-[80vh]">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] mb-8 font-semibold text-white/60">
            Decision Support • Strategic Mandates • Institutional Alignment
          </p>
          <h1 className="font-serif text-6xl md:text-9xl leading-[0.9] mb-10 tracking-tighter text-white">
            Better decisions <br className="hidden md:block" /> under pressure.
          </h1>
          <p className="text-xl md:text-3xl font-light leading-relaxed mb-12 max-w-2xl text-white/80">
            EvidenSe helps organisations navigate complex decisions using evidence, audience insight and strategic judgement.
          </p>
          
          <a 
            href="mailto:stephane@evidense.io" 
            className="w-full md:w-auto bg-white text-[#000423] px-10 py-5 flex justify-between md:justify-start items-center gap-8 hover:bg-slate-200 transition-all inline-flex"
          >
            <span className="text-sm font-bold uppercase tracking-[0.2em]">Start the conversation</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* The Problem Section - Border top to separate slightly */}
      <section className="border-t border-white/10 px-6 py-24 md:px-12 md:py-40 grid md:grid-cols-2 gap-16 items-start">
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] tracking-tight text-white">
          When decisions matter, intuition is not enough.
        </h2>
        <div className="space-y-8 text-xl md:text-2xl font-light leading-relaxed">
          <p className="text-white/80">
            In complex organisations, decisions involve timing, perception, and long-term consequences. 
            Yet many are still made under pressure with incomplete evidence.
          </p>
          <p className="font-semibold text-white border-l-4 border-white/30 pl-6 py-2">
            EvidenSe brings clarity before the move is made.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 md:px-12 bg-[#000423] border-t border-white/10 flex flex-col md:flex-row justify-between text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">
        <div className="space-y-1">
          <p>EvidenSe — Lausanne / Switzerland</p>
          <p className="lowercase tracking-normal font-medium text-white/60">stephane@evidense.io</p>
        </div>
        <p className="mt-6 md:mt-0">© 2026 EvidenSe</p>
      </footer>
    </main>
  );
}