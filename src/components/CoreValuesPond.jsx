import React, { useRef, useEffect, useState } from 'react';
import { Zap, ShieldCheck, HeartHandshake, Award, Target, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CoreValuesPond() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [hoveredRock, setHoveredRock] = useState(null);
  const dropRef = useRef(null);

  const values = [
    {
      id: 'innovation',
      title: 'Innovation',
      icon: Zap,
      desc: 'Continuously developing smarter, scalable, and modern software solutions for evolving industry needs.',
      pos: { top: '22%', left: '16.5%', width: '24%', height: '24%' },
      pondRippleOrigin: { x: 300, y: 190 },
    },
    {
      id: 'quality',
      title: 'Quality & Reliability',
      icon: ShieldCheck,
      desc: 'Delivering secure, robust, and dependable software architectures that run mission-critical operations 24/7.',
      pos: { top: '22%', left: '59.5%', width: '24%', height: '24%' },
      pondRippleOrigin: { x: 400, y: 190 },
    },
    {
      id: 'integrity',
      title: 'Integrity',
      icon: Award,
      desc: 'Building enduring client trust across 3 decades through honesty, transparency, and relentless commitment.',
      pos: { top: '48%', left: '6%', width: '23%', height: '26%' },
      pondRippleOrigin: { x: 260, y: 250 },
    },
    {
      id: 'customer',
      title: 'Customer Focus',
      icon: HeartHandshake,
      desc: 'Understanding unique operational workflows and engineering the exact right solutions tailored for each client.',
      pos: { top: '48%', left: '71%', width: '23%', height: '26%' },
      pondRippleOrigin: { x: 440, y: 250 },
    },
    {
      id: 'improvement',
      title: 'Continuous Improvement',
      icon: Target,
      desc: 'Constantly upgrading our software suites with the latest cloud, mobile, and automation technologies.',
      pos: { top: '70%', left: '20%', width: '25%', height: '24%' },
      pondRippleOrigin: { x: 310, y: 310 },
    },
    {
      id: 'support',
      title: 'Dedicated Support',
      icon: Users,
      desc: 'Providing responsive, experienced technical support, training, and annual maintenance for our partners.',
      pos: { top: '71%', left: '56%', width: '25%', height: '24%' },
      pondRippleOrigin: { x: 390, y: 310 },
    },
  ];

  // ================= REAL-TIME WATER RIPPLE ENGINE =================
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = (canvas.width = 700);
    const height = (canvas.height = 500);

    const size = width * (height + 2) * 2;
    let buffer1 = new Int16Array(size);
    let buffer2 = new Int16Array(size);
    let tempBuffer;
    let imgData = ctx.createImageData(width, height);
    let data = imgData.data;

    let animId;
    const damping = 0.965;

    // Disturbance / Ripple generator
    const dropAt = (dx, dy, radius = 5, strength = 400) => {
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

    dropRef.current = dropAt;

    // Ambient automatic gentle water pulses
    let frameCount = 0;
    const render = () => {
      frameCount++;
      if (frameCount % 75 === 0) {
        dropAt(350 + (Math.random() * 40 - 20), 250 + (Math.random() * 30 - 15), 4, 250);
      }

      // Wave physics
      let i = width;
      for (let y = 1; y < height - 1; y++) {
        for (let x = 0; x < width; x++) {
          let val =
            ((buffer1[i - 1] + buffer1[i + 1] + buffer1[i - width] + buffer1[i + width]) >> 1) -
            buffer2[i];
          val = (val * damping) | 0;
          buffer2[i] = val;

          // Water Caustic Highlight (Cyan-Lime water shimmers)
          let pixelIndex = (y * width + x) * 4;
          let light = val >> 2;

          if (light > 0) {
            data[pixelIndex] = Math.min(255, 212 + light * 2);      // Red
            data[pixelIndex + 1] = Math.min(255, 248 + light * 2);  // Green
            data[pixelIndex + 2] = Math.min(255, 100 + light * 3);  // Blue
            data[pixelIndex + 3] = Math.min(180, Math.abs(light) * 12); // Semi-transparent overlay
          } else {
            data[pixelIndex + 3] = 0;
          }

          i++;
        }
      }

      tempBuffer = buffer1;
      buffer1 = buffer2;
      buffer2 = tempBuffer;

      ctx.putImageData(imgData, 0, 0);
      animId = requestAnimationFrame(render);
    };

    render();

    // Mouse movement water disturbance
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = width / rect.width;
      const scaleY = height / rect.height;
      const x = (e.clientX - rect.left) * scaleX;
      const y = (e.clientY - rect.top) * scaleY;
      if (x >= 180 && x <= 520 && y >= 140 && y <= 360) {
        dropAt(x, y, 4, 320);
      }
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

  const handleRockHover = (idx) => {
    setHoveredRock(idx);
    if (idx !== null && dropRef.current && values[idx]) {
      const origin = values[idx].pondRippleOrigin;
      dropRef.current(origin.x, origin.y, 6, 500);
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto my-8 select-none">
      
      {/* ================= BORDERLESS PHOTOREALISTIC 3D POND ================= */}
      <div 
        ref={containerRef}
        className="relative w-full aspect-[16/11] max-h-[680px] flex items-center justify-center"
      >
        
        {/* Base Photorealistic 3D Nature Pond Image */}
        <img
          src="/images/core-values-pond.jpg"
          alt="PentaSoft 3D Core Values Pond"
          className="w-full h-full object-contain pointer-events-none drop-shadow-2xl transition-transform duration-500"
        />

        {/* Live Interactive Water Ripple Canvas Overlay directly on the water pool */}
        <div className="absolute top-[28%] left-[28%] w-[44%] h-[44%] rounded-full overflow-hidden pointer-events-none mix-blend-screen">
          <canvas 
            ref={canvasRef} 
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* ================= 6 INTERACTIVE 3D POPUP ROCKS ================= */}
        {values.map((v, idx) => {
          const isHovered = hoveredRock === idx;
          const IconComp = v.icon;

          return (
            <div
              key={v.id}
              style={{
                position: 'absolute',
                top: v.pos.top,
                left: v.pos.left,
                width: v.pos.width,
                height: v.pos.height,
                zIndex: isHovered ? 40 : 20,
              }}
              onMouseEnter={() => handleRockHover(idx)}
              onMouseLeave={() => handleRockHover(null)}
              className="cursor-pointer group flex items-center justify-center p-1"
            >
              {/* Natural Elevating Stone Aura */}
              <motion.div
                className="w-full h-full rounded-2xl flex flex-col justify-center items-center text-center p-3 sm:p-4 transition-all"
                animate={{
                  scale: isHovered ? 1.08 : 1,
                  y: isHovered ? -10 : 0,
                  filter: isHovered 
                    ? 'drop-shadow(0 20px 30px rgba(0,0,0,0.6))' 
                    : 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
                }}
                transition={{
                  type: 'spring',
                  damping: 18,
                  stiffness: 350,
                  mass: 0.35,
                }}
              >
                {/* Active Glowing Rim highlight on hover */}
                {isHovered && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-2xl border-2 border-[#D4F82C]/80 shadow-[0_0_25px_#D4F82C] pointer-events-none bg-black/15 backdrop-blur-[1px]"
                  />
                )}

                {/* Subtle Interactive Prompt on Hover */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-black text-[#D4F82C] text-[9px] font-mono font-black shadow-lg flex items-center space-x-1 whitespace-nowrap z-50"
                  >
                    <IconComp className="w-2.5 h-2.5" />
                    <span>ACTIVE PRINCIPLE</span>
                  </motion.div>
                )}
              </motion.div>
            </div>
          );
        })}

      </div>

      {/* Subtitle helper */}
      <div className="text-center mt-4 text-xs font-mono font-bold text-neutral-800 flex items-center justify-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-black animate-ping"></span>
        <span>HOVER OVER ANY STONE TO POP UP THE ROCK & GENERATE WATER RIPPLES</span>
      </div>

    </div>
  );
}
