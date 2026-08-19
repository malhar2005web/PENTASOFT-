import React, { useRef, useState } from 'react';

export default function GlowBorderCard({ 
  children, 
  className = '', 
  glowColor = 'rgba(204, 255, 0, 0.35)', 
  spotlightColor = 'rgba(204, 255, 0, 0.15)',
  alwaysGlow = false 
}) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-2xl p-[1px] transition-all duration-300 overflow-hidden ${className}`}
      style={{
        background: isHovered || alwaysGlow
          ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, rgba(204, 255, 0, 0.08) 40%, rgba(255, 255, 255, 0.05) 100%)`
          : 'rgba(204, 255, 0, 0.08)',
      }}
    >
      {/* Animated rotating border beam when hovered */}
      {(isHovered || alwaysGlow) && (
        <div 
          className="absolute -inset-[100%] animate-spin-slow opacity-60 pointer-events-none"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(204, 255, 0, 0.8) 60deg, rgba(16, 185, 129, 0.6) 120deg, transparent 180deg)`
          }}
        />
      )}

      {/* Card Inner Body */}
      <div className="relative z-10 w-full h-full rounded-[15px] bg-[#090e09] backdrop-blur-xl border border-white/[0.04]">
        {/* Spotlight overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[15px] opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 40%)`,
          }}
        />
        <div className="relative z-20 h-full">{children}</div>
      </div>
    </div>
  );
}
