import React from "react";
import ThreeBackground from "./ThreeBackground";
import CustomCursor from "./CustomCursor";
import FloatingNav from "./FloatingNav";
import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";

interface HomeProps {
  name?: string;
  title?: string;
  description?: string;
}

const Home = ({
  name = "John Doe",
  title = "Full Stack Developer",
  description = "Building digital experiences with modern technologies",
}: HomeProps) => {
  return (
    <div className="relative min-h-screen w-full bg-[#0A0A0A] overflow-x-hidden">
      {/* Background Effects */}
      <ThreeBackground
        particleColor="#00F0FF"
        backgroundColor="#0A0A0A"
        particleCount={1000}
      />

      {/* Custom Cursor */}
      <CustomCursor
        color="#00F0FF"
        size={20}
        trailLength={8}
        trailOpacity={0.5}
      />

      {/* Navigation */}
      <FloatingNav />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home">
          <HeroSection name={name} title={title} description={description} />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <SkillsSection />
        </section>

        {/* Additional sections can be added here */}
      </main>

      {/* Global light beam effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-[#00F0FF] opacity-5 rotate-45 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-[#FF00FF] opacity-5 -rotate-45 blur-[100px]" />
      </div>
    </div>
  );
};

export default Home;
