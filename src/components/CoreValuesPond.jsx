import React, { useRef, useEffect, useState } from 'react';
import { Zap, ShieldCheck, HeartHandshake, Award, Target, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CoreValuesPond() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [hoveredRock, setHoveredRock] = useState(null);

  const values = [
    {
      id: 'innovation',
      title: 'Innovation',
      icon: Zap,
      desc: 'Continuously developing smarter, scalable, and modern software solutions for evolving industry needs.',
      pos: { top: '8%', left: '16%' },
      shape: 'rounded-[45%_55%_60%_40%/50%_45%_55%_50%]',
      bgAngle: '135deg',
    },
    {
      id: 'quality',
      title: 'Quality & Reliability',
      icon: ShieldCheck,
      desc: 'Delivering secure, robust, and dependable software architectures that run mission-critical operations 24/7.',
      pos: { top: '8%', right: '16%' },
      shape: 'rounded-[55%_45%_50%_50%/45%_55%_45%_55%]',
      bgAngle: '225deg',
    },
    {
      id: 'integrity',
      title: 'Integrity',
      icon: Award,
      desc: 'Building enduring client trust across 3 decades through honesty, transparency, and relentless commitment.',
      pos: { top: '42%', left: '4%' },
      shape: 'rounded-[50%_50%_45%_55%/60%_40%_60%_40%]',
      bgAngle: '90deg',
    },
    {
      id: 'customer',
      title: 'Customer Focus',
      icon: HeartHandshake,
      desc: 'Understanding unique operational workflows and engineering the exact right solutions tailored for each client.',
      pos: { top: '42%', right: '4%' },
      shape: 'rounded-[45%_55%_55%_45%/50%_60%_40%_50%]',
      bgAngle: '270deg',
    },
    {
      id: 'improvement',
      title: 'Continuous Improvement',
      icon: Target,
      desc: 'Constantly upgrading our software suites with the latest cloud, mobile, and automation technologies.',
      pos: { bottom: '8%', left: '18%' },
      shape: 'rounded-[60%_40%_50%_50%/45%_55%_55%_45%]',
      bgAngle: '45deg',
    },
    {
      id: 'support',
      title: 'Dedicated Support',
      icon: Users,
      desc: 'Providing responsive, experienced technical support, training, and annual maintenance for our partners.',
      pos: { bottom: '8%', right: '18%' },
      shape: 'rounded-[50%_50%_60%_40%/55%_45%_45%_55%]',
      bgAngle: '315deg',
    },
  ];

  // ================= 2D FLUID WATER RIPPLE ENGINE =================
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = (canvas.width = 700);
    const height = (canvas.height = 500);

    const halfWidth = width >> 1;
    const halfHeight = height >> 1;
    const size = width * (height + 2) * 2;

    let buffer1 = new Int16Array(size);
    let buffer2 = new Int16Array(size);
    let tempBuffer;
    let imgData = ctx.createImageData(width, height);
    let data = imgData.data;

    let animId;
    const damping = 0.97;

    // Disturbance / Ripple generator
    const dropAt = (dx, dy, radius = 6, strength = 450) => {
      dx = Math.floor(dx);
      dy = Math.floor(dy);
      for (let j = dy - radius; j < dy + radius; j++) {
        for (let k = dx - radius; k < dx + radius; k++) {
          if (j >= 0 && j < height && k >= 0 && k < width) {
            buffer1[width * j + k] += strength;
          }
        }
      }
    };

    // Ambient automatic drops in center pond
    let frameCount = 0;
    const render = () => {
      frameCount++;
      if (frameCount % 60 === 0) {
        dropAt(halfWidth + (Math.random() * 60 - 30), halfHeight + (Math.random() * 40 - 20), 4, 300);
      }

      // Ripple Wave equation
      let i = width;
      for (let y = 1; y < height - 1; y++) {
        for (let x = 0; x < width; x++) {
          let val =
            ((buffer1[i - 1] + buffer1[i + 1] + buffer1[i - width] + buffer1[i + width]) >> 1) -
            buffer2[i];
          val = (val * damping) | 0;
          buffer2[i] = val;

          // Water Shader Shading (Deep Jade/Emerald Water with Caustics)
          let pixelIndex = (y * width + x) * 4;
          let light = (val >> 2);

          // Deep Pond Colors: Emerald Dark Blue (#081d1a to #12382e)
          data[pixelIndex] = Math.min(255, Math.max(0, 10 + light * 2));     // Red
          data[pixelIndex + 1] = Math.min(255, Math.max(0, 48 + light * 3)); // Green
          data[pixelIndex + 2] = Math.min(255, Math.max(0, 42 + light * 2)); // Blue
          data[pixelIndex + 3] = 230;                                       // Alpha

          i++;
        }
      }

      // Swap buffers
      tempBuffer = buffer1;
      buffer1 = buffer2;
      buffer2 = tempBuffer;

      ctx.putImageData(imgData, 0, 0);
      animId = requestAnimationFrame(render);
    };

    render();

    // Mouse Move listener over the pond
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = width / rect.width;
      const scaleY = height / rect.height;
      const x = (e.clientX - rect.left) * scaleX;
      const y = (e.clientY - rect.top) * scaleY;
      dropAt(x, y, 4, 320);
    };

    const targetEl = containerRef.current;
    if (targetEl) {
      targetEl.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      cancelAnimationFrame(animId);
      if (targetEl) {
        targetEl.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto my-12 select-none">
      
      {/* ================= 3D NATURE POND STAGE ================= */}
      <div 
        ref={containerRef}
        className="relative w-full aspect-[16/11] max-h-[720px] rounded-[40px] overflow-hidden bg-[#D4F82C] border border-black/15 shadow-2xl flex items-center justify-center p-6 sm:p-10"
        style={{ perspective: 1200 }}
      >
        
        {/* Lush Greenery & Moss Bed Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#bde422] via-[#D4F82C] to-[#aed41c] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#1f3807_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        {/* Central Organic Water Pond Basin */}
        <div className="relative w-[65%] h-[68%] rounded-[48%_52%_55%_45%/45%_55%_45%_55%] overflow-hidden shadow-[inset_0_20px_50px_rgba(0,0,0,0.8),0_16px_40px_rgba(0,0,0,0.25)] border-4 border-[#3c501e] bg-[#061815]">
          
          {/* Live Interactive Water Canvas */}
          <canvas 
            ref={canvasRef} 
            className="w-full h-full object-cover cursor-crosshair opacity-95 transition-opacity"
          />

          {/* Central Water Caustic Glow & Lime Core Emblem */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center">
              <span className="absolute w-20 h-20 rounded-full bg-[#D4F82C]/20 animate-ping"></span>
              <span className="w-12 h-12 rounded-2xl bg-black/80 text-[#D4F82C] flex items-center justify-center shadow-[0_0_30px_#D4F82C] border border-[#D4F82C]/60 backdrop-blur-md">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#D4F82C] font-black uppercase tracking-widest mt-2 drop-shadow-md">
              PentaSoft Core
            </span>
          </div>

          {/* Pebble Ring around Water Edge */}
          <div className="absolute inset-0 rounded-[48%_52%_55%_45%/45%_55%_45%_55%] border-8 border-[#2d3a14]/60 pointer-events-none shadow-inner" />
        </div>

        {/* ================= 6 INTERACTIVE 3D POPUP ROCKS ================= */}
        {values.map((v, idx) => {
          const isHovered = hoveredRock === idx;
          const IconComp = v.icon;

          return (
            <motion.div
              key={v.id}
              style={{
                position: 'absolute',
                ...v.pos,
                width: '28%',
                maxWidth: '280px',
                zIndex: isHovered ? 40 : 20,
              }}
              onMouseEnter={() => setHoveredRock(idx)}
              onMouseLeave={() => setHoveredRock(null)}
              animate={{
                scale: isHovered ? 1.15 : 1,
                y: isHovered ? -16 : 0,
                rotateX: isHovered ? -4 : 0,
                rotateY: isHovered ? (idx % 2 === 0 ? 5 : -5) : 0,
              }}
              transition={{
                type: 'spring',
                damping: 18,
                stiffness: 320,
                mass: 0.4,
              }}
              className="cursor-pointer group select-none"
            >
              {/* Natural Stone Slab Geometry */}
              <div 
                className={`w-full p-5 sm:p-6 transition-all duration-300 relative ${v.shape} ${
                  isHovered 
                    ? 'shadow-[0_30px_60px_rgba(0,0,0,0.5),0_0_35px_rgba(212,248,44,0.6)] border-2 border-[#D4F82C]' 
                    : 'shadow-[0_16px_32px_rgba(0,0,0,0.25),inset_0_2px_4px_rgba(255,255,255,0.4)] border border-black/20'
                }`}
                style={{
                  background: isHovered
                    ? 'linear-gradient(145deg, #2a2e37, #131720)'
                    : 'linear-gradient(145deg, #d3cbbe, #b5aa9b)',
                }}
              >
                {/* Natural Stone Texture Highlight Overlay */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:6px_6px] pointer-events-none rounded-inherit" />

                {/* Content Inside the Stone */}
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 mb-2">
                    <div 
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shadow-md transition-colors ${
                        isHovered ? 'bg-[#D4F82C] text-black' : 'bg-black text-[#D4F82C]'
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span 
                      className={`text-sm sm:text-base font-black tracking-tight transition-colors ${
                        isHovered ? 'text-white drop-shadow-md' : 'text-neutral-900'
                      }`}
                    >
                      {v.title}
                    </span>
                  </div>

                  <p 
                    className={`text-xs leading-relaxed font-medium transition-colors ${
                      isHovered ? 'text-slate-200' : 'text-neutral-800 font-semibold'
                    }`}
                  >
                    {v.desc}
                  </p>
                </div>

                {/* Subtle Rock Rim Specular Highlight */}
                <div className="absolute top-1 left-2 right-2 h-[2px] bg-white/40 rounded-full blur-[0.5px] pointer-events-none" />
              </div>
            </motion.div>
          );
        })}

      </div>

      {/* Subtitle helper */}
      <div className="text-center mt-6 text-xs font-mono font-bold text-neutral-800 flex items-center justify-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-black animate-ping"></span>
        <span>HOVER OR MOVE CURSOR OVER WATER POND & ROCKS TO GENERATE LIVE RIPPLES</span>
      </div>

    </div>
  );
}
