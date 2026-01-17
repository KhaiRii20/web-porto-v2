"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-4 left-0 z-50 px-4">
      {/* Container Glassmorphism Utama */}
      <div className="max-w-[1000px] mx-auto bg-white/60 backdrop-blur-md border border-white/40 shadow-lg rounded-2xl px-6 py-3 flex justify-between items-center relative">
        
        {/* Logo dengan Gradient */}
        <div className="text-xl font-extrabold bg-gradient-to-r from-deep-dark via-primary to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          <Link href="/">Daffa Khairi</Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div 
          className="md:hidden text-2xl text-slate-700 cursor-pointer hover:text-primary transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={isOpen ? "ri-close-circle-line" : "ri-menu-4-line"}></i>
        </div>

        {/* Menu Links */}
        <ul className={`
            /* Base Layout */
            flex flex-col md:flex-row gap-4 md:gap-8 items-center 
            
            /* Posisi Mobile (Floating Card di bawah navbar) */
            absolute md:static 
            left-0 w-full md:w-auto
            bg-white/90 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none
            rounded-2xl md:rounded-none
            border border-white/50 md:border-none
            shadow-xl md:shadow-none
            p-6 md:p-0
            
            /* Animasi Transisi Mobile */
            transition-all duration-300 ease-in-out
            
            /* Logika Buka/Tutup Mobile */
            ${isOpen 
              ? "top-[120%] opacity-100 visible" 
              : "top-[100%] opacity-0 invisible md:opacity-100 md:visible md:static"}
          `}>
            
          {navLinks.map((link) => (
            <li key={link.name} className="w-full md:w-auto text-center">
              <Link 
                href={link.href} 
                className="text-slate-600 font-medium hover:text-primary transition-colors relative group block py-2 md:py-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                {/* Efek Dot di bawah link saat hover (Desktop) */}
                <span className="hidden md:block absolute -bottom-1 left-1/2 w-0 h-1 bg-primary rounded-full transition-all duration-300 group-hover:w-1/2 group-hover:-translate-x-1/2"></span>
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}