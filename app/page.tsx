import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";       // ✨ BARU
import Contact from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";
import CustomCursor from "@/components/CustomCursor"; // ✨ BARU

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-deep-dark font-sans">
      <AnimatedBackground />
      <CustomCursor />  {/* ✨ BARU */}
      <Navbar />
      <div className="relative z-10 flex flex-col gap-10">
        <Hero />
        <About />
        <Projects />    {/* ✨ BARU */}
        <Contact />
      </div>
    </main>
  );
}