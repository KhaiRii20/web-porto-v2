"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home",      href: "#home" },
    { name: "About",     href: "#about" },
    { name: "Resume",    href: "#resume" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact",   href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-4 left-0 z-50 px-4">
      <div className="max-w-[1000px] mx-auto bg-white/60 dark:bg-dark-blue/70 backdrop-blur-md border border-white/40 dark:border-accent/20 shadow-lg rounded-2xl px-6 py-3 flex justify-between items-center relative overflow-hidden">

        {/* Logo */}
        <div className="text-xl font-extrabold bg-gradient-to-r from-deep-dark via-primary to-secondary dark:from-surface dark:via-accent dark:to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          <Link href="/">Daffa Khairi</Link>
        </div>

        {/* Hamburger */}
        <div
          className="md:hidden text-2xl text-slate-700 dark:text-accent hover:text-primary dark:hover:text-surface transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={isOpen ? "ri-close-circle-line" : "ri-menu-4-line"}></i>
        </div>

        {/* Links */}
        <ul className={`
          flex flex-col md:flex-row gap-4 md:gap-8 items-center
          absolute md:static left-0 w-full md:w-auto
          bg-white/90 dark:bg-dark-blue/95 md:bg-transparent md:dark:bg-transparent
          backdrop-blur-xl md:backdrop-blur-none
          rounded-2xl md:rounded-none
          border border-white/50 dark:border-accent/20 md:border-none
          shadow-xl md:shadow-none
          p-6 md:p-0
          transition-all duration-300 ease-in-out
          ${isOpen
            ? "top-[120%] opacity-100 visible"
            : "top-[100%] opacity-0 invisible md:opacity-100 md:visible md:static"}
        `}>
          {navLinks.map((link) => (
            <li key={link.name} className="w-full md:w-auto text-center">
              <Link
                href={link.href}
                className="text-slate-600 dark:text-accent/80 font-medium hover:text-primary dark:hover:text-surface transition-colors relative group block py-2 md:py-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                <span className="hidden md:block absolute -bottom-1 left-1/2 w-0 h-1 bg-primary dark:bg-accent rounded-full transition-all duration-300 group-hover:w-1/2 group-hover:-translate-x-1/2" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Scroll Progress */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-accent/20 w-full">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            style={{ width: `${scrollProgress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

      </div>
    </nav>
  );
}