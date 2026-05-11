"use client";
import Image from "next/image";
import {
  motion, AnimatePresence,
  useMotionValue, useSpring,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";

function MagneticButton({
  children, className, ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sry = useSpring(ry, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rx.set(y * -15);
    ry.set(x * 15);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const textToType =
    "Crafting immersive web experiences with modern technologies. Focusing on clean code, interactive design, and solving real-world problems.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < textToType.length) {
        setDisplayedText((prev) => prev + textToType.charAt(i));
        i++;
      } else clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    { text: "Software Engineer", icon: "ri-code-s-slash-line" },
    { text: "Machine Learning",  icon: "ri-brain-line" },
    { text: "Artificial Intelligence", icon: "ri-robot-2-line" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Social links
  const socials = [
    {
      icon: "ri-instagram-line",
      href: "https://instagram.com/dfkhairiii",
      label: "Instagram",
    },
    {
      icon: "ri-linkedin-fill",
      href: "https://www.linkedin.com/in/muhammad-daffa-khairi-addin-20483336b",
      label: "LinkedIn",
    },
    {
      icon: "ri-github-fill",
      href: "https://github.com/KhaiRii20",
      label: "GitHub",
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-24 pb-12">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* KIRI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 text-center md:text-left z-10"
        >
          {/* Badge */}
          <div className="inline-block px-4 py-2 mb-6 bg-surface/50 dark:bg-dark-blue/50 backdrop-blur-sm border border-secondary/20 dark:border-accent/20 rounded-full shadow-sm min-w-[200px] md:min-w-0">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-sm font-bold text-primary dark:text-accent tracking-wider uppercase flex items-center gap-2 justify-center md:justify-start"
              >
                <i className={`${roles[roleIndex].icon} text-lg`}></i>
                {roles[roleIndex].text}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-deep-dark dark:text-surface mb-6 leading-tight">
            I'm <span className="text-shimmer">Daffa</span>
            <br />
            <span className="text-4xl md:text-6xl text-secondary dark:text-accent">
              Creative Dev.
            </span>
          </h1>

          {/* Typewriter */}
          <div className="h-32 md:h-24 mb-8">
            <p className="text-secondary dark:text-accent/80 text-lg leading-relaxed max-w-lg mx-auto md:mx-0 font-medium">
              {displayedText}
              <span className="animate-pulse text-primary dark:text-accent font-bold ml-1">|</span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center md:justify-start mt-4 flex-wrap">
            <MagneticButton className="px-8 py-4 bg-deep-dark dark:bg-surface text-white dark:text-deep-dark font-bold rounded-xl shadow-xl hover:bg-primary dark:hover:bg-accent transition-all duration-300 flex items-center gap-2 group">
              Let's Talk
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
            </MagneticButton>
            <MagneticButton className="px-8 py-4 bg-transparent border-2 border-primary dark:border-accent text-primary dark:text-accent font-bold rounded-xl hover:bg-primary dark:hover:bg-accent hover:text-white dark:hover:text-deep-dark transition-all">
              See Projects
            </MagneticButton>
          </div>

          {/* ✨ Social Links */}
          <div className="flex gap-3 justify-center md:justify-start mt-8">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-surface/60 dark:bg-dark-blue/60 border border-white/60 dark:border-accent/20 flex items-center justify-center text-secondary dark:text-accent hover:bg-deep-dark dark:hover:bg-accent hover:text-white dark:hover:text-deep-dark transition-all duration-300 shadow-sm"
              >
                <i className={`${s.icon} text-lg`}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* KANAN: Foto 3D — SINTA badge dihapus */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center relative z-10"
        >
          <TiltCard>
            <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]">

              <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-surface dark:from-dark-blue dark:to-primary rounded-full blur-3xl opacity-60 animate-pulse" />

              <div
                className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/40 dark:border-accent/20 shadow-2xl bg-surface/30 backdrop-blur-sm"
                style={{ transform: "translateZ(20px)" }}
              >
                <Image
                  src="/assets/profile.jpg"
                  alt="Daffa Khairi"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-dark/20 to-transparent" />
              </div>

              {/* Floating Card: Status */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-4 bg-white/80 dark:bg-dark-blue/80 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/60 dark:border-accent/20"
                style={{ transform: "translateZ(40px)" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-deep-dark dark:bg-accent rounded-full flex items-center justify-center text-white dark:text-deep-dark">
                    <i className="ri-terminal-box-line text-2xl"></i>
                  </div>
                  <div>
                    <p className="text-xs text-secondary dark:text-accent/70 font-bold uppercase">Status</p>
                    <p className="text-sm font-bold text-deep-dark dark:text-surface">Open to Work</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </TiltCard>
        </motion.div>

      </div>
    </section>
  );
}