"use client";

export default function AnimatedBackground() {
  return (
    // Fixed inset-0 membuat elemen ini memenuhi layar & -z-10 menaruhnya di paling belakang
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#EEEEEE]">
      
      {/* Bola 1: Aksen Abu-abu (Bergerak) */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      
      {/* Bola 2: Surface Terang (Bergerak lambat) */}
      <div className="absolute top-0 -right-4 w-96 h-96 bg-surface rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      
      {/* Bola 3: Secondary Blue (Bergerak di bawah) */}
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Texture Noise (Opsional: Memberi kesan premium/kertas) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
    </div>
  );
}