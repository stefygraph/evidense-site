"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// --- THE ALIGNMENT MATRIX BACKGROUND LOGIC (FULLY TYPED) ---
class MatrixNode {
  gridX: number;
  gridY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;

  constructor(x: number, y: number) {
    this.gridX = x;
    this.gridY = y;
    this.x = x + (Math.random() - 0.5) * 200;
    this.y = y + (Math.random() - 0.5) * 200;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.color = "rgba(255, 255, 255, 0.1)";
  }

  update(mouse: { x: number; y: number }) {
    const dx = mouse.x - this.gridX;
    const dy = mouse.y - this.gridY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 250) {
      this.x += (this.gridX - this.x) * 0.1;
      this.y += (this.gridY - this.y) * 0.1;
      this.color = "rgba(95, 122, 108, 0.8)";
    } else {
      this.x += this.vx;
      this.y += this.vy;
      if (Math.abs(this.x - this.gridX) > 150) this.vx *= -1;
      if (Math.abs(this.y - this.gridY) > 150) this.vy *= -1;
      this.color = "rgba(255, 255, 255, 0.1)";
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function AlignmentBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId: number;
    const particles: MatrixNode[] = [];
    const spacing = 40;
    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const initParticles = () => {
      particles.length = 0;
      for (let x = 0; x < width + 200; x += spacing) {
        for (let y = 0; y < height + 200; y += spacing) {
          particles.push(new MatrixNode(x, y));
        }
      }
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update(mouse);
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}

// --- MAIN PAGE COMPONENT ---
export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-[var(--color-moss)] selection:text-white">
      
      {/* BACKGROUND CANVAS */}
      <AlignmentBackground />

      {/* ALL CONTENT WRAPPED IN A RELATIVE DIV WITH Z-10 */}
      <div className="relative z-10">
        
        {/* --- NAVIGATION --- */}
        <nav className="px-6 pt-12 md:px-16 flex justify-between items-center max-w-7xl mx-auto">
          <div className="relative w-32 md:w-40">
            <Image
              src="https://evidense-site.vercel.app/logo.svg"
              alt="EvidenSe"
              width={160}
              height={60}
              priority
              unoptimized
              className="w-full h-auto filter brightness-0 invert" 
            />
          </div>
          
          <a 
            href="mailto:hello@evidense.io" 
            className="font-sans text-xs font-bold uppercase tracking-widest text-foreground border border-foreground/30 px-6 py-3 hover:bg-foreground hover:text-background transition-all backdrop-blur-sm"
          >
            Request a Diagnostic
          </a>
        </nav>

        {/* --- SECTION 1: HERO --- */}
        <section className="px-6 md:px-16 pt-32 pb-24 max-w-7xl mx-auto">
          <p className="font-sans text-xs tracking-[0.2em] text-foreground/50 mb-10 uppercase font-medium">
            Lausanne | London | Global
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-10 text-foreground max-w-4xl">
            Predictive intelligence <br className="hidden md:block"/> for the sports economy.
          </h1>
          
          <p className="font-sans text-xl md:text-2xl font-light text-foreground/70 leading-relaxed max-w-3xl mb-16">
            Sport has become too complex to rely on instinct. We provide the mathematical certainty and strategic due diligence that allow rights holders, federations, and investors to maximize revenue and de-risk their capital.
          </p>

          <a 
            href="mailto:hello@evidense.io" 
            className="inline-block border-b border-foreground pb-1 font-sans text-sm font-medium text-foreground hover:text-foreground/60 hover:border-foreground/60 transition-all uppercase tracking-wide"
          >
            Request a Diagnostic
          </a>
        </section>

        {/* --- DIVIDER --- */}
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
           <hr className="border-t border-[var(--color-slate)]/40" />
        </div>

        {/* --- SECTION 2: THE HOOK --- */}
        <section className="px-6 md:px-16 py-24 max-w-7xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
            The era of emotional decision-making is over.
          </h2>
          <div className="font-sans text-lg md:text-xl font-light text-foreground/70 leading-relaxed space-y-8 max-w-2xl">
            <p>
              Sports investments fail for two reasons: a lack of predictive data before launch, and internal political friction. We built EvidenSe to eliminate both.
            </p>
            <p className="text-foreground font-medium">
              Stop guessing. Start knowing.
            </p>
          </div>
        </section>

        {/* --- SECTION 3: THE 3 PILLARS --- */}
        <section className="px-6 md:px-16 pb-32 max-w-7xl mx-auto">
          <div className="space-y-0">
            
            {/* Pillar 1 */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 py-16 border-t border-[var(--color-slate)]/40">
               <div>
                 <p className="font-sans text-xs tracking-[0.1em] text-foreground/50 uppercase font-bold mb-4">Pillar 01</p>
                 <h3 className="font-serif text-2xl text-foreground">Sport Revenue Intelligence</h3>
               </div>
               <div className="font-sans text-lg font-light text-foreground/70 max-w-2xl leading-relaxed space-y-6">
                 <p className="text-foreground font-medium">Algorithmic yield optimization.</p>
                 <p>We run your digital and sponsorship data through our predictive models to pinpoint exactly where you are losing money. We identify the specific assets to unbundle and repackage, delivering a mathematical roadmap to capture untapped revenue.</p>
                 <div className="pt-4">
                   <p className="text-xs uppercase tracking-wider font-semibold text-foreground/50 mb-3">Deliverables</p>
                   <ul className="space-y-2 text-base text-foreground">
                     <li>— The 48-Hour Commercial Friction Audit</li>
                     <li>— Asset Repackaging Strategy</li>
                     <li>— The 90-Day Revenue Sprint (Managed Execution)</li>
                   </ul>
                 </div>
               </div>
            </div>

            {/* Pillar 2 */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 py-16 border-t border-[var(--color-slate)]/40">
               <div>
                 <p className="font-sans text-xs tracking-[0.1em] text-foreground/50 uppercase font-bold mb-4">Pillar 02</p>
                 <h3 className="font-serif text-2xl text-foreground">Predictive Investment & Due Diligence</h3>
               </div>
               <div className="font-sans text-lg font-light text-foreground/70 max-w-2xl leading-relaxed space-y-6">
                 <p className="text-foreground font-medium">De-risking capital allocation.</p>
                 <p>Before you commit capital, we test the target asset against the EvidenSe engine. We simulate audience fatigue, format adoption, and commercial ceilings to provide the absolute mathematical certainty required to protect board and fund decisions.</p>
                 <div className="pt-4">
                   <p className="text-xs uppercase tracking-wider font-semibold text-foreground/50 mb-3">Deliverables</p>
                   <ul className="space-y-2 text-base text-foreground">
                     <li>— EvidenSe Predictive Investment Memo</li>
                     <li>— SportTech Target Simulation</li>
                     <li>— MCO Integration Audit</li>
                   </ul>
                 </div>
               </div>
            </div>

            {/* Pillar 3 */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 py-16 border-t border-b border-[var(--color-slate)]/40">
               <div>
                 <p className="font-sans text-xs tracking-[0.1em] text-foreground/50 uppercase font-bold mb-4">Pillar 03</p>
                 <h3 className="font-serif text-2xl text-foreground">Federation OS</h3>
               </div>
               <div className="font-sans text-lg font-light text-foreground/70 max-w-2xl leading-relaxed space-y-6">
                 <p className="text-foreground font-medium">Institutional agility as a service.</p>
                 <p>A managed intelligence service for sports organizations. We operate as your fractional predictive layer, plugging our AI-assisted workflows directly into your executive board to automate reporting and force rapid, evidence-based governance.</p>
                 <div className="pt-4">
                   <p className="text-xs uppercase tracking-wider font-semibold text-foreground/50 mb-3">Deliverables</p>
                   <ul className="space-y-2 text-base text-foreground">
                     <li>— Fractional Chief Strategy Support</li>
                     <li>— AI Workflow Integration</li>
                   </ul>
                 </div>
               </div>
            </div>

          </div>
        </section>

        {/* --- SECTION 4: THE UNFAIR ADVANTAGE --- */}
        <section className="px-6 md:px-16 pb-32 max-w-7xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
            The difference between an opinion and evidence.
          </h2>
          <div className="font-sans text-lg md:text-xl font-light text-foreground/70 leading-relaxed space-y-6 max-w-2xl">
            <p>
              The EvidenSe approach is driven by the <strong className="font-medium text-foreground">Sport Value Index</strong> and integrates exclusive predictive technology from <strong className="font-medium text-foreground">Largo.ai</strong> (EPFL spin-off). 
            </p>
            <p>
              We don’t just analyze the past; we model future audience behaviors to guarantee the commercial viability of your sports investments before they happen.
            </p>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="px-6 md:px-16 pb-16 pt-8 border-t border-[var(--color-slate)]/40 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end text-sm font-sans font-medium text-foreground/70">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 md:mb-0">
            
            {/* Swiss Precision Image - 30px CSS */}
            <div className="w-[30px] h-[30px] shrink-0 relative flex items-center justify-center">
               <Image 
                 src="/swiss-precision.png" 
                 alt="Swiss Precision" 
                 fill
                 className="object-contain"
                 unoptimized
               />
            </div>

            <div className="space-y-1 block">
              <p className="text-foreground uppercase tracking-widest text-xs font-bold">EvidenSe</p>
              <p>Based in Lausanne. Operating globally.</p>
            </div>
          </div>
          
          <a 
            href="mailto:hello@evidense.io"
            className="font-sans text-xs font-bold uppercase tracking-widest text-foreground border border-foreground/30 px-6 py-3 hover:bg-foreground hover:text-background transition-all mb-2 backdrop-blur-sm"
          >
            Request a portfolio assessment
          </a>
        </footer>
      </div>
    </main>
  );
}