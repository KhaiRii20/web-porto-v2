"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-widest text-sm uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2 text-deep-dark">
            Let's Start a <span className="text-secondary">Project</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Kolom Kiri: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-secondary text-lg leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to send me a message. 
              I'm currently available for freelance work and collaborations.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white/60 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-deep-dark text-white rounded-full flex items-center justify-center text-xl">
                  <i className="ri-mail-send-line"></i>
                </div>
                <div>
                  <p className="text-sm text-secondary font-semibold">Email Me</p>
                  <p className="text-deep-dark font-bold">daffa201105@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white/60 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl">
                  <i className="ri-whatsapp-line"></i>
                </div>
                <div>
                  <p className="text-sm text-secondary font-semibold">WhatsApp</p>
                  <p className="text-deep-dark font-bold">+62 812-5656-8149</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4">
              <p className="text-sm font-bold text-secondary mb-4 uppercase tracking-wide">Find me on</p>
              <div className="flex gap-4">
                {["ri-instagram-line", "ri-linkedin-fill", "ri-github-fill", "ri-dribbble-line"].map((icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 bg-surface text-deep-dark rounded-full flex items-center justify-center hover:bg-deep-dark hover:text-white transition-all duration-300">
                    <i className={`${icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Kolom Kanan: Form Input */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-deep-dark">Your Name</label>
                  <input type="text" placeholder="Name" className="w-full bg-background/50 border border-accent/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-deep-dark placeholder:text-accent" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-deep-dark">Your Email</label>
                  <input type="email" placeholder="Email" className="w-full bg-background/50 border border-accent/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-deep-dark placeholder:text-accent" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-deep-dark">Subject</label>
                <input type="text" placeholder="Project Inquiry" className="w-full bg-background/50 border border-accent/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-deep-dark placeholder:text-accent" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-deep-dark">Message</label>
                <textarea rows={4} placeholder="Tell me about your project..." className="w-full bg-background/50 border border-accent/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-deep-dark placeholder:text-accent resize-none"></textarea>
              </div>

              <button type="button" className="w-full bg-deep-dark text-white font-bold py-4 rounded-xl hover:bg-primary transition-colors shadow-lg flex items-center justify-center gap-2 group">
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