import React, { useState, useEffect } from "react";

interface CustomCursorProps {
  color?: string;
  size?: number;
  trailLength?: number;
  trailOpacity?: number;
}

interface TrailDot {
  x: number;
  y: number;
  opacity: number;
}

const CustomCursor = ({
  color = "#00F0FF",
  size = 20,
  trailLength = 8,
  trailOpacity = 0.5,
}: CustomCursorProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      setTrail((prevTrail) => {
        const newTrail = [
          { x: e.clientX, y: e.clientY, opacity: trailOpacity },
          ...prevTrail.slice(0, trailLength - 1),
        ];

        return newTrail.map((dot, index) => ({
          ...dot,
          opacity: trailOpacity * (1 - index / trailLength),
        }));
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [trailLength, trailOpacity]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 bg-transparent">
      {trail.map((dot, index) => (
        <div
          key={index}
          className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
          style={{
            left: dot.x,
            top: dot.y,
            width: size * (1 - index / (trailLength * 2)),
            height: size * (1 - index / (trailLength * 2)),
            backgroundColor: color,
            opacity: dot.opacity,
            boxShadow: `0 0 ${size / 2}px ${color}`,
          }}
        />
      ))}
      <div
        className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{
          left: position.x,
          top: position.y,
          width: size,
          height: size,
          backgroundColor: color,
          boxShadow: `0 0 ${size}px ${color}`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
