import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";

interface SkillCardProps {
  title?: string;
  description?: string;
  proficiency?: number;
  tags?: string[];
  icon?: React.ReactNode;
}

const SkillCard = ({
  title = "React Development",
  description = "Modern frontend development with React and its ecosystem",
  proficiency = 90,
  tags = ["Frontend", "JavaScript", "UI/UX"],
  icon = null,
}: SkillCardProps) => {
  return (
    <TooltipProvider>
      <Card className="w-[300px] h-[200px] bg-[#0A0A0A] border border-[#00F0FF]/20 overflow-hidden relative group transition-all duration-500 hover:border-[#00F0FF] hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF]/10 via-transparent to-[#FF00FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="p-6 relative z-10">
          <div className="flex items-center gap-3 mb-3">
            {icon}
            <h3 className="text-xl font-space-grotesk text-white">{title}</h3>
          </div>

          <p className="text-sm font-jetbrains-mono text-gray-300 mb-4">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Tooltip key={index}>
                <TooltipTrigger>
                  <Badge
                    variant="outline"
                    className="bg-[#0A0A0A]/80 border-[#00F0FF]/30 text-[#00F0FF] hover:border-[#00F0FF]"
                  >
                    {tag}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Skill: {tag}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0A0A0A]">
            <div
              className="h-full bg-gradient-to-r from-[#00F0FF] to-[#FF00FF] transition-all duration-500"
              style={{ width: `${proficiency}%` }}
            />
          </div>
        </div>
      </Card>
    </TooltipProvider>
  );
};

export default SkillCard;
