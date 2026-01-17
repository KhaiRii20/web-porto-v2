"use client";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { name: "Next.js", icon: "ri-nextjs-fill", color: "text-slate-800" },
    { name: "React", icon: "ri-reactjs-line", color: "text-blue-500" },
    { name: "Tailwind", icon: "ri-windy-fill", color: "text-cyan-500" },
    { name: "TypeScript", icon: "ri-code-s-slash-line", color: "text-blue-600" },
    { name: "Node.js", icon: "ri-nodejs-line", color: "text-green-600" },
    { name: "Git", icon: "ri-git-branch-line", color: "text-orange-600" },
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-wider text-sm uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-slate-800">
            More Than Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Code</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Kolom Kiri: Kartu Deskripsi Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/40 backdrop-blur-md border border-white/50 p-8 rounded-3xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-4">My Journey</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              I started my coding journey out of pure curiosity, and now it has become my passion. 
              I specialize in building <span className="font-bold text-primary">fast, responsive, and interactive</span> websites using modern technologies.
            </p>
            <p className="text-slate-600 leading-relaxed">
              When I'm not coding, I love exploring about tech stack and learning about new efficient ways to write code.
            </p>
            
            <div className="mt-8 flex gap-4">
               <div className="bg-white/60 p-4 rounded-2xl shadow-sm text-center flex-1">
                 <h4 className="text-3xl font-bold text-primary">1+</h4>
                 <p className="text-xs text-slate-500 font-semibold uppercase mt-1">Years Exp.</p>
               </div>
               <div className="bg-white/60 p-4 rounded-2xl shadow-sm text-center flex-1">
                 <h4 className="text-3xl font-bold text-secondary-500">5+</h4>
                 <p className="text-xs text-slate-500 font-semibold uppercase mt-1">Projects</p>
               </div>
            </div>
          </motion.div>

          {/* Kolom Kanan: Skill Grid */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="grid grid-cols-2 gap-4 content-start"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="bg-white/60 backdrop-blur-sm border border-white/60 p-4 rounded-2xl shadow-sm flex items-center gap-3 hover:shadow-md transition-all cursor-default"
              >
                <i className={`${skill.icon} text-2xl ${skill.color}`}></i>
                <span className="font-semibold text-slate-700">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}