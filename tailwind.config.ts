import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warna Background Utama
        background: "#EEEEEE", 
        
        // Palette Industrial Blue-Grey (Pilihan Anda)
        "deep-dark": "#06141B",  // Text Utama
        "dark-blue": "#11212D",  // Navbar/Footer elements
        "primary": "#253745",    // Primary Button / Highlight
        "secondary": "#4A5C6A",  // Secondary Text
        "accent": "#9BA8AB",     // Icons / Borders
        "surface": "#CCD0CF",    // Surface cards
      },
      animation: {
        blob: "blob 10s infinite", // Animasi bola bergerak
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;