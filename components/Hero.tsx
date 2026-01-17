"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  // --- LOGIKA 1: EFEK MENGETIK (Typewriter) ---
  const textToType = "Crafting immersive web experiences with modern technologies. Focusing on clean code, interactive design, and solving real-world problems.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < textToType.length) {
        setDisplayedText((prev) => prev + textToType.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30); // Kecepatan mengetik (semakin kecil semakin cepat)

    return () => clearInterval(typingInterval);
  }, []);


  // --- LOGIKA 2: ROTATING BADGE (Berganti Role) ---
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    { text: "Software Engineer", icon: "ri-code-s-slash-line" },
    { text: "Machine Learning", icon: "ri-brain-line" },
    { text: "Artificial Intelligence", icon: "ri-robot-2-line" }
  ];

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // Ganti setiap 3 detik

    return () => clearInterval(roleInterval);
  }, []);


  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-24 pb-12">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* KOLOM KIRI: TEXT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 text-center md:text-left z-10"
        >
          {/* Dynamic Rotating Badge */}
          <div className="inline-block px-4 py-2 mb-6 bg-surface/50 backdrop-blur-sm border border-secondary/20 rounded-full shadow-sm min-w-[200px] md:min-w-0">
            <AnimatePresence mode="wait">
              <motion.span 
                key={roleIndex} // Key berubah memicu animasi ulang
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-sm font-bold text-primary tracking-wider uppercase flex items-center gap-2 justify-center md:justify-start"
              >
                <i className={`${roles[roleIndex].icon} text-lg`}></i>
                {roles[roleIndex].text}
              </motion.span>
            </AnimatePresence>
          </div>
          
          {/* Heading Utama */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-deep-dark mb-6 leading-tight">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Daffa</span>
            <br />
            <span className="text-4xl md:text-6xl text-secondary">Creative Dev.</span>
          </h1>
          
          {/* Deskripsi Typewriter */}
          <div className="h-32 md:h-24 mb-8"> 
            <p className="text-secondary text-lg leading-relaxed max-w-lg mx-auto md:mx-0 font-medium">
              {displayedText}
              <span className="animate-pulse text-primary font-bold ml-1">|</span>
            </p>
          </div>
          
          {/* Tombol Aksi */}
          <div className="flex gap-4 justify-center md:justify-start mt-4">
            <button className="px-8 py-4 bg-deep-dark text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
              Let's Talk 
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">
              See Projects
            </button>
          </div>
        </motion.div>

        {/* KOLOM KANAN: GAMBAR PROFIL */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center relative z-10"
        >
          <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]">
            {/* Abstrak Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-surface rounded-full blur-3xl opacity-60 animate-pulse"></div>
            
            {/* Frame Foto Miring */}
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/40 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 bg-surface/30 backdrop-blur-sm">
              <Image 
                src="/assets/profile.jpg" 
                alt="Daffa Khairi"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Card Statistik (Pojok Kanan Bawah) */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-4 bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/60"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-deep-dark rounded-full flex items-center justify-center text-white">
                  <i className="ri-terminal-box-line text-2xl"></i>
                </div>
                <div>
                  <p className="text-xs text-secondary font-bold uppercase">Status</p>
                  <p className="text-sm font-bold text-deep-dark">Open to Work</p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}