import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";

interface AboutSectionProps {
  bio?: string;
  avatarUrl?: string;
}

const AboutSection = ({
  bio = "Hi, I'm a passionate developer with a love for creating beautiful and functional web experiences. I specialize in modern web technologies and always strive to learn and grow in this ever-evolving field.",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=portfolio",
}: AboutSectionProps) => {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-[#0A0A0A] py-20 px-4 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-space-grotesk text-white mb-8 text-center"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-48 h-48 rounded-full border-2 border-[#00F0FF] p-1 relative group"
          >
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="Profile"
                className="w-full h-full rounded-full object-cover bg-[#0A0A0A]"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-[#0A0A0A] flex items-center justify-center">
                <User className="w-20 h-20 text-[#00F0FF]" />
              </div>
            )}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#FF00FF] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <p className="text-lg font-jetbrains-mono text-gray-300 leading-relaxed relative">
              <span className="absolute -left-4 top-0 text-[#00F0FF]">
                &gt;
              </span>
              {bio}
              <span className="inline-block w-2 h-5 bg-[#00F0FF] ml-1 animate-pulse" />
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00F0FF1A_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF1A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#00F0FF] opacity-20 blur-[100px] animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#FF00FF] opacity-20 blur-[100px] animate-pulse" />
    </section>
  );
};

export default AboutSection;
