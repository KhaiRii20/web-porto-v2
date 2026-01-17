import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    // Class 'bg-background' dihapus dari sini agar AnimatedBackground terlihat
    <main className="relative min-h-screen overflow-hidden text-deep-dark font-sans">
      
      {/* Background diletakkan paling atas agar dirender duluan di layer belakang */}
      <AnimatedBackground />
      
      <Navbar />
      
      {/* Konten Utama */}
      <div className="relative z-10 flex flex-col gap-10"> 
        <Hero />
        <About />
        <Contact />
      </div>
      
    </main>
  );
}