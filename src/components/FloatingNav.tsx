import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { cn } from "../lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface FloatingNavProps {
  items?: NavItem[];
  className?: string;
}

const FloatingNav = ({
  items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  className,
}: FloatingNavProps) => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        "fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#0A0A0A]/80 backdrop-blur-lg rounded-full px-6 py-3 border border-[#00F0FF]/20",
        "hover:border-[#00F0FF]/40 transition-all duration-300",
        "shadow-[0_0_20px_rgba(0,240,255,0.1)]",
        className,
      )}
    >
      <NavigationMenu>
        <NavigationMenuList className="flex gap-6">
          {items.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={cn(
                  "text-gray-300 hover:text-[#00F0FF] transition-colors duration-300",
                  "font-jetbrains-mono text-sm relative group px-3 py-2",
                  "hover:shadow-[0_0_10px_rgba(0,240,255,0.3)]",
                )}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#00F0FF] to-[#FF00FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default FloatingNav;
