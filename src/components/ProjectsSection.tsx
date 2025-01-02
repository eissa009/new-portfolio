import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/card";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

interface ProjectsSectionProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    title: "Luxury Chair E-commerce",
    description: "3D product viewer for high-end furniture shopping experience",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c",
    tags: ["React", "Three.js", "Commerce.js"],
  },
  {
    title: "Automotive Landing Page",
    description: "Premium car showcase with parallax scrolling effects",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
  },
  {
    title: "Currency Calculator",
    description: "Real-time currency conversion with interactive charts",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5",
    tags: ["Vue.js", "Chart.js", "Forex API"],
  },
  {
    title: "Financial Dashboard",
    description: "Enterprise-grade dashboard with dark mode support",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["React", "TypeScript", "D3.js"],
  },
];

const ProjectsSection = ({
  projects = defaultProjects,
}: ProjectsSectionProps) => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-[#0A0A0A] py-20 px-4 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-space-grotesk text-white mb-8 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group bg-[#0A0A0A] border border-[#00F0FF]/20 overflow-hidden hover:border-[#00F0FF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-space-grotesk text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-jetbrains-mono text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs font-jetbrains-mono text-[#00F0FF] border border-[#00F0FF]/30 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#00F0FF] transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#00F0FF] transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00F0FF1A_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF1A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
    </section>
  );
};

export default ProjectsSection;
