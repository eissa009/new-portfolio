import React from "react";
import SkillCard from "./SkillCard";
import { Code2, Palette, Globe2, Database, Cpu, Lock } from "lucide-react";

interface Skill {
  title: string;
  description: string;
  proficiency: number;
  tags: string[];
  icon: React.ReactNode;
}

interface SkillsSectionProps {
  skills?: Skill[];
}

const defaultSkills: Skill[] = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    proficiency: 90,
    tags: ["React", "TypeScript", "CSS"],
    icon: <Code2 className="w-6 h-6 text-[#00F0FF]" />,
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user experiences",
    proficiency: 85,
    tags: ["Figma", "Design Systems", "Prototyping"],
    icon: <Palette className="w-6 h-6 text-[#FF00FF]" />,
  },
  {
    title: "Backend Development",
    description: "Building scalable server-side applications",
    proficiency: 80,
    tags: ["Node.js", "Python", "APIs"],
    icon: <Database className="w-6 h-6 text-[#00F0FF]" />,
  },
  {
    title: "Web Performance",
    description: "Optimizing for speed and efficiency",
    proficiency: 75,
    tags: ["Performance", "SEO", "Analytics"],
    icon: <Globe2 className="w-6 h-6 text-[#FF00FF]" />,
  },
  {
    title: "DevOps",
    description: "Managing deployment and infrastructure",
    proficiency: 70,
    tags: ["Docker", "CI/CD", "AWS"],
    icon: <Cpu className="w-6 h-6 text-[#00F0FF]" />,
  },
  {
    title: "Security",
    description: "Implementing secure coding practices",
    proficiency: 85,
    tags: ["Auth", "Encryption", "Testing"],
    icon: <Lock className="w-6 h-6 text-[#FF00FF]" />,
  },
];

const SkillsSection = ({ skills = defaultSkills }: SkillsSectionProps) => {
  return (
    <section className="min-h-screen w-full bg-[#0A0A0A] py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-space-grotesk text-white mb-4 text-center">
          Skills & Expertise
        </h2>
        <p className="text-gray-400 text-center mb-12 font-jetbrains-mono max-w-2xl mx-auto">
          Crafting digital experiences with modern technologies and creative
          solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              description={skill.description}
              proficiency={skill.proficiency}
              tags={skill.tags}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>

      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00F0FF1A_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF1A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Animated light beam effects */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#00F0FF] opacity-20 blur-[100px] animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#FF00FF] opacity-20 blur-[100px] animate-pulse" />
    </section>
  );
};

export default SkillsSection;
