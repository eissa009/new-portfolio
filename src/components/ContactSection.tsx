import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-[#0A0A0A] py-20 px-4 relative overflow-hidden flex items-center justify-center"
    >
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-space-grotesk text-white mb-8"
        >
          Get in Touch
        </motion.h2>

        <motion.a
          href="mailto:isa@isadev.online"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#0A0A0A] border-2 border-[#00F0FF] text-[#00F0FF] rounded-lg hover:bg-[#00F0FF]/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] font-jetbrains-mono text-lg"
        >
          <Mail className="w-6 h-6" />
          Send me an email
        </motion.a>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00F0FF1A_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF1A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#FF00FF] opacity-20 blur-[100px] animate-pulse" />
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#00F0FF] opacity-20 blur-[100px] animate-pulse" />
    </section>
  );
};

export default ContactSection;
