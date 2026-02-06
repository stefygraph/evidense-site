import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Mobile Optimized */}
      <section className="px-6 py-20 md:px-12 md:py-32 flex flex-col justify-center min-h-[90vh]">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.2em] mb-6 opacity-60">Advisory • Proof-of-concepts</p>
          <h1 className="font-serif text-5xl md:text-8xl leading-[1.1] mb-8 tracking-tight">
            Better decisions <br className="hidden md:block" /> under pressure.
          </h1>
          <p className="text-lg md:text-2xl font-light leading-relaxed mb-10 max-w-xl">
            EvidenSe helps organisations navigate complex decisions using evidence, audience insight and strategic judgement.
          </p>
          <button className="w-full md:w-auto bg-evidense-ink text-white px-8 py-4 flex justify-between md:justify-start items-center gap-6 hover:opacity-90 transition-all">
            <span className="text-sm font-semibold uppercase tracking-widest">Start a conversation</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* The Problem Section - Grid flips on Desktop */}
      <section className="bg-white px-6 py-24 md:px-12 grid md:grid-cols-2 gap-12 items-start">
        <h2 className="font-serif text-3xl md:text-5xl leading-tight">When decisions matter, intuition is not enough.</h2>
        <div className="space-y-6 text-lg opacity-80 leading-relaxed">
          <p>In complex organisations, decisions involve timing, perception, and long-term consequences. Yet many are still made under pressure with incomplete evidence.</p>
          <p className="font-semibold text-evidense-ink">EvidenSe brings clarity before the move is made.</p>
        </div>
      </section>

      {/* Footer - Minimalist */}
      <footer className="px-6 py-12 md:px-12 border-t border-evidense-ink/10 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[0.2em] opacity-50">
        <p>EvidenSe — Lausanne / Switzerland</p>
        <p className="mt-4 md:mt-0">© 2026 Evidense</p>
      </footer>
    </main>
  );
}