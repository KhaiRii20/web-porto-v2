"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "SmartSpend Sync",
    description: "AI-powered financial management app dengan intelligent expense synchronization.",
    tags: ["Next.js", "AI", "TypeScript"],
    icon: "ri-funds-line",
    color: "from-primary to-secondary",
    status: "In Progress",
  },
  {
    title: "Sehatin",
    description: "Health monitoring application untuk tracking kondisi fisik pengguna secara real-time.",
    tags: ["React", "Node.js", "IoT"],
    icon: "ri-heart-pulse-line",
    color: "from-secondary to-accent",
    status: "Completed",
  },
  {
    title: "SI-SCAN",
    description: "Scanning system untuk deteksi judi online di Kalimantan Selatan.",
    tags: ["Python", "ML", "Web Scraping"],
    icon: "ri-scan-line",
    color: "from-accent to-surface",
    status: "Research",
  },
  {
    title: "Temp Monitor",
    description: "Arduino/ESP32 temperature monitoring dengan notifikasi Telegram otomatis.",
    tags: ["Arduino", "ESP32", "IoT"],
    icon: "ri-temp-hot-line",
    color: "from-primary to-accent",
    status: "Completed",
  },
];

const statusStyle: Record<string, string> = {
  Completed:     "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400",
  "In Progress": "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400",
  Research:      "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400",
};

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 relative z-10">
      <div className="max-w-[1000px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary dark:text-accent font-bold tracking-wider text-sm uppercase">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-slate-800 dark:text-surface">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Projects
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHovered(index)}
              onHoverEnd={() => setHovered(null)}
              className="glass-premium rounded-3xl p-6 cursor-pointer group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`} />

              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                  <i className={`${project.icon} text-2xl`}></i>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusStyle[project.status]}`}>
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-800 dark:text-surface mb-2">
                {project.title}
              </h3>
              <p className="text-slate-500 dark:text-accent/70 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-surface/60 dark:bg-dark-blue/60 text-secondary dark:text-accent font-semibold px-3 py-1 rounded-full border border-white/60 dark:border-accent/20">
                    {tag}
                  </span>
                ))}
              </div>

              <motion.div
                className="absolute bottom-6 right-6 text-primary dark:text-accent opacity-0 group-hover:opacity-100"
                animate={hovered === index ? { x: [0, 4, 0] } : {}}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <i className="ri-arrow-right-up-line text-xl"></i>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}