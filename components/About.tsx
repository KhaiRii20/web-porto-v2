"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = target / (1500 / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const skills = [
    { name: "Next.js",    icon: "ri-nextjs-fill",       color: "text-slate-800 dark:text-surface", level: 85 },
    { name: "React",      icon: "ri-reactjs-line",      color: "text-blue-500",                    level: 90 },
    { name: "Tailwind",   icon: "ri-windy-fill",        color: "text-cyan-500",                    level: 88 },
    { name: "TypeScript", icon: "ri-code-s-slash-line", color: "text-blue-600 dark:text-blue-400", level: 75 },
    { name: "Node.js",    icon: "ri-nodejs-line",       color: "text-green-600 dark:text-green-400",level: 70 },
    { name: "Git",        icon: "ri-git-branch-line",   color: "text-orange-600 dark:text-orange-400",level: 80 },
    { name: "Python",     icon: "ri-python-line",       color: "text-blue-700 dark:text-blue-500", level: 65 },
    { name: "C++",        icon: "ri-cplusplus-line",      color: "text-blue-400 dark:text-blue-300", level: 60 },
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-[1000px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary dark:text-accent font-bold tracking-wider text-sm uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-slate-800 dark:text-surface">
            More Than Just{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Code
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-premium p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-surface mb-4">My Journey</h3>
            <p className="text-slate-600 dark:text-accent/80 leading-relaxed mb-6">
              I started my coding journey out of pure curiosity, and now it has become my passion.
              I specialize in building{" "}
              <span className="font-bold text-primary dark:text-accent">
                fast, responsive, and interactive
              </span>{" "}
              websites using modern technologies.
            </p>
            <p className="text-slate-600 dark:text-accent/80 leading-relaxed">
              When I'm not coding, I love exploring tech stacks and learning efficient ways to
              write clean, maintainable code.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { value: 1, suffix: "+", label: "Years Exp." },
                { value: 5, suffix: "+", label: "Projects" },
                { value: 1, suffix: "×", label: "Publication" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/60 dark:bg-dark-blue/60 p-4 rounded-2xl shadow-sm text-center">
                  <h4 className="text-3xl font-bold text-primary dark:text-accent">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-accent/60 font-semibold uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Kanan: Skill Cards */}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: -8, rotateX: 4 }}
                style={{ transformStyle: "preserve-3d" }}
                className="bg-white/60 dark:bg-dark-blue/60 backdrop-blur-sm border border-white/60 dark:border-accent/20 p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-default"
              >
                <div className="flex items-center gap-3 mb-3">
                  <i className={`${skill.icon} text-2xl ${skill.color}`}></i>
                  <span className="font-semibold text-slate-700 dark:text-surface">{skill.name}</span>
                </div>
                <div className="h-1.5 bg-slate-200 dark:bg-primary/40 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
                <p className="text-xs text-slate-400 dark:text-accent/60 mt-1 text-right">
                  {skill.level}%
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}