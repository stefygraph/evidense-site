"use client";

import { useEffect, useRef } from "react";

// Subordinated per the handover note: lower contrast, slower drift,
// and disabled entirely when the visitor prefers reduced motion.
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
    this.vx = (Math.random() - 0.5) * 0.25;
    this.vy = (Math.random() - 0.5) * 0.25;
    this.color = "rgba(255, 255, 255, 0.05)";
  }

  update(mouse: { x: number; y: number }) {
    const dx = mouse.x - this.gridX;
    const dy = mouse.y - this.gridY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 250) {
      this.x += (this.gridX - this.x) * 0.1;
      this.y += (this.gridY - this.y) * 0.1;
      this.color = "rgba(95, 122, 108, 0.35)";
    } else {
      this.x += this.vx;
      this.y += this.vy;
      if (Math.abs(this.x - this.gridX) > 150) this.vx *= -1;
      if (Math.abs(this.y - this.gridY) > 150) this.vy *= -1;
      this.color = "rgba(255, 255, 255, 0.05)";
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

export default function AlignmentBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true" />;
}
