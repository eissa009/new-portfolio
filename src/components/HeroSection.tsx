import React from "react";
import { motion } from "framer-motion";
import { Code2, Terminal, Zap } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
}

const HeroSection = ({
  name = "John Doe",
  title = "Full Stack Developer",
  description = "Building digital experiences with modern technologies",
}: HeroSectionProps) => {
  return (
    <section className="relative w-full h-[982px] bg-[#0A0A0A] flex items-center justify-center overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(#00F0FF 1px, transparent 1px), 
                            linear-gradient(90deg, #00F0FF 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Light Beam Effects */}
      <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#00F0FF] opacity-5 rotate-45 blur-[100px]" />
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-[#FF00FF] opacity-5 -rotate-45 blur-[100px]" />

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        {/* Animated Name with Glitch Effect */}
        <motion.h1
          className="text-6xl md:text-8xl font-space-grotesk font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="relative inline-block">
            <span className="relative z-10">{name}</span>
            <span className="absolute top-0 left-0 -ml-[2px] text-[#00F0FF] opacity-70 blur-[1px] animate-glitch1">
              {name}
            </span>
            <span className="absolute top-0 left-0 -ml-[1px] text-[#FF00FF] opacity-70 blur-[1px] animate-glitch2">
              {name}
            </span>
          </span>
        </motion.h1>

        {/* Animated Title */}
        <motion.h2
          className="text-2xl md:text-4xl font-space-grotesk text-[#00F0FF] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl font-jetbrains-mono text-gray-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {description}
        </motion.p>

        {/* Floating Icons */}
        <div className="flex justify-center gap-8">
          {[
            { icon: <Code2 size={32} />, delay: 0.6 },
            { icon: <Terminal size={32} />, delay: 0.7 },
            { icon: <Zap size={32} />, delay: 0.8 },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-[#00F0FF] hover:text-[#FF00FF] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item.delay }}
              whileHover={{ scale: 1.2 }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#00F0FF] rounded-full p-2">
          <div className="w-2 h-2 bg-[#00F0FF] rounded-full animate-scroll" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
