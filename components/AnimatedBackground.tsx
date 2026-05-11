"use client";
import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Deteksi dark mode
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const colors = isDark
      ? ["#4A5C6A", "#9BA8AB", "#CCD0CF", "#253745"]
      : ["#253745", "#4A5C6A", "#9BA8AB", "#CCD0CF"];

    const particles: {
      x: number; y: number;
      vx: number; vy: number;
      radius: number; opacity: number; color: string;
    }[] = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 3 + 1,
        opacity: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            const lineOpacity = isDark
              ? `rgba(155, 168, 171, ${0.1 * (1 - dist / 150)})`
              : `rgba(37, 55, 69, ${0.08 * (1 - dist / 150)})`;
            ctx.strokeStyle = lineOpacity;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        const alpha = Math.floor(p.opacity * 255).toString(16).padStart(2, "0");
        ctx.fillStyle = p.color + alpha;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    // ✨ bg berubah sesuai mode
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#EEEEEE] dark:bg-[#06141B]">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />

      {/* Blob — opacity lebih rendah di dark mode */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-accent rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 dark:opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-96 h-96 bg-surface rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-15 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-secondary rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000" />

      {/* Geometric Shapes */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-primary/20 dark:border-accent/20 rounded-lg animate-float rotate-45 opacity-40" />
      <div
        className="absolute top-1/2 left-16 w-10 h-10 border-2 border-secondary/20 dark:border-accent/10 rounded-full animate-float opacity-30"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-1/4 right-24 w-12 h-12 border border-accent/30 opacity-35 animate-float"
        style={{ animationDelay: "1s", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />
      <div
        className="absolute top-20 left-1/3 w-8 h-8 bg-primary/10 dark:bg-accent/10 rounded rotate-12 animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-5" />
    </div>
  );
}