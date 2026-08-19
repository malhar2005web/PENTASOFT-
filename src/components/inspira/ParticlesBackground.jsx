import React, { useMemo } from 'react';

export default function ParticlesBackground() {
  const particles = useMemo(() => {
    return Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.1,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Ambient Large Lime Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#CCFF00]/[0.06] blur-[150px]" />
      <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-[#10B981]/[0.06] blur-[150px]" />
      <div className="absolute -bottom-40 left-1/4 w-[600px] h-[600px] rounded-full bg-[#CCFF00]/[0.05] blur-[160px]" />

      {/* Floating Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-[#CCFF00] animate-float"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            boxShadow: `0 0 ${p.size * 3}px rgba(204, 255, 0, 0.8)`
          }}
        />
      ))}
    </div>
  );
}
