import Image from "next/image"; // <--- C'était la ligne manquante !
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000423] text-white selection:bg-white/20">
      
      {/* --- NAVIGATION --- */}
      <nav className="px-6 pt-12 md:px-12 flex justify-between items-center">
        
        {/* LOGO SVG */}
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
        
        {/* Bouton Nav (Style Feb 7th) */}
        <a 
          href="mailto:stephane@evidense.io" 
          className="hidden md:flex items-center gap-4 border border-white/30 px-6 py-3 text-white hover:bg-white hover:text-[#000423] transition-all"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Start the conversation</span>
          <ArrowRight size={14} />
        </a>
      </nav>

      {/* --- HERO SECTION (Le Design Feb 7th) --- */}
      <section className="px-6 py-20 md:px-12 md:py-32 flex flex-col justify-center min-h-[80vh]">
        <div className="max-w-4xl">
          
          <p className="text-xs uppercase tracking-[0.3em] mb-8 font-semibold text-white/60">
            Independent Advisory for Global Sport
          </p>
          
          {/* Titre immense et serré */}
          <h1 className="font-serif text-6xl md:text-9xl leading-[0.9] mb-10 tracking-tighter text-white">
            Structural clarity <br className="hidden md:block"/> under pressure.
          </h1>
          
          <p className="text-xl md:text-3xl font-light leading-relaxed mb-12 max-w-2xl text-white/80">
            EvidenSe advises sports leadership, institutions and brands investing in sport on high-impact strategic decisions.
          </p>

          {/* Gros Bouton Blanc */}
          <a 
            href="mailto:stephane@evidense.io" 
            className="w-full md:w-auto bg-white text-[#000423] px-10 py-5 flex justify-between md:justify-start items-center gap-8 hover:bg-slate-200 transition-all inline-flex"
          >
            <span className="text-sm font-bold uppercase tracking-[0.2em]">Start the conversation</span>
            <ArrowRight size={20} />
          </a>

        </div>
      </section>

      {/* --- SECTION 2 --- */}
      <section className="border-t border-white/10 px-6 py-24 md:px-12 md:py-40 grid md:grid-cols-2 gap-16 items-start">
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] tracking-tight text-white">
          When political, commercial and reputational stakes are significant, decisions require independent perspective and structured risk assessment.
        </h2>
        <div className="space-y-8 text-xl md:text-2xl font-light leading-relaxed">
          <p className="text-white/80">
            EvidenSe brings cross-sport context and executive-level calibration before the move is made.
          </p>
          <p className="font-semibold text-white border-l-4 border-white/30 pl-6 py-2">
            Selective engagements. Limited long-term mandates.
          </p>
        </div>
      </section>

      {/* --- FOOTER --- */}
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
