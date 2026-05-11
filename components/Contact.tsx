"use client";
import { motion } from "framer-motion";

export default function Contact() {
  const socials = [
    {
      icon: "ri-instagram-line",
      href: "https://instagram.com/dfkhairiii",
      label: "Instagram",
    },
    {
      icon: "ri-linkedin-fill",
      href: "https://www.linkedin.com/in/muhammad-daffa-khairi-addin-20483336b",
      label: "LinkedIn",
    },
    {
      icon: "ri-github-fill",
      href: "https://github.com/KhaiRii20",
      label: "GitHub",
    },
  ];

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-[1000px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary dark:text-accent font-bold tracking-widest text-sm uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2 text-deep-dark dark:text-surface">
            Let's Start a{" "}
            <span className="text-secondary dark:text-accent">Project</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-secondary dark:text-accent/80 text-lg leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to send me a message.
              I'm currently available for freelance work and collaborations.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/50 dark:bg-dark-blue/50 backdrop-blur-sm p-4 rounded-xl border border-white/60 dark:border-accent/20 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-deep-dark dark:bg-accent text-white dark:text-deep-dark rounded-full flex items-center justify-center text-xl">
                  <i className="ri-mail-send-line"></i>
                </div>
                <div>
                  <p className="text-sm text-secondary dark:text-accent/70 font-semibold">Email Me</p>
                  <p className="text-deep-dark dark:text-surface font-bold">daffa201105@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/50 dark:bg-dark-blue/50 backdrop-blur-sm p-4 rounded-xl border border-white/60 dark:border-accent/20 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-primary dark:bg-accent text-white dark:text-deep-dark rounded-full flex items-center justify-center text-xl">
                  <i className="ri-whatsapp-line"></i>
                </div>
                <div>
                  <p className="text-sm text-secondary dark:text-accent/70 font-semibold">WhatsApp</p>
                  <p className="text-deep-dark dark:text-surface font-bold">+62 812-5656-8149</p>
                </div>
              </div>
            </div>

            {/* ✨ Social Links */}
            <div className="pt-4">
              <p className="text-sm font-bold text-secondary dark:text-accent/70 mb-4 uppercase tracking-wide">
                Find me on
              </p>
              <div className="flex gap-4">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-surface dark:bg-dark-blue text-deep-dark dark:text-accent rounded-full flex items-center justify-center hover:bg-deep-dark dark:hover:bg-accent hover:text-white dark:hover:text-deep-dark transition-all duration-300 border border-white/60 dark:border-accent/20"
                  >
                    <i className={`${s.icon} text-xl`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Kanan: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-premium p-8 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-deep-dark dark:text-surface">Your Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-background/50 dark:bg-dark-blue/50 border border-accent/30 dark:border-accent/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent transition-all text-deep-dark dark:text-surface placeholder:text-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-deep-dark dark:text-surface">Your Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-background/50 dark:bg-dark-blue/50 border border-accent/30 dark:border-accent/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent transition-all text-deep-dark dark:text-surface placeholder:text-accent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-deep-dark dark:text-surface">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-background/50 dark:bg-dark-blue/50 border border-accent/30 dark:border-accent/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent transition-all text-deep-dark dark:text-surface placeholder:text-accent"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-deep-dark dark:text-surface">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-background/50 dark:bg-dark-blue/50 border border-accent/30 dark:border-accent/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent transition-all text-deep-dark dark:text-surface placeholder:text-accent resize-none"
                />
              </div>

              <button
                type="button"
                className="w-full bg-deep-dark dark:bg-accent text-white dark:text-deep-dark font-bold py-4 rounded-xl hover:bg-primary dark:hover:bg-surface transition-colors shadow-lg flex items-center justify-center gap-2 group"
              >
                Send Message
                <i className="ri-send-plane-fill group-hover:translate-x-1 transition-transform"></i>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}