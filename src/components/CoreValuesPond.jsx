import React, { useState } from 'react';
import { Zap, ShieldCheck, HeartHandshake, Award, Target, Users, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CoreValuesPond() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const values = [
    {
      id: 'innovation',
      title: 'Innovation',
      icon: Zap,
      desc: 'Continuously developing smarter, scalable, and modern software solutions for evolving industry needs.',
      posDesktop: { top: '23%', left: '17%', width: '23%', height: '24%' },
      tag: '01 // VALUE'
    },
    {
      id: 'quality',
      title: 'Quality & Reliability',
      icon: ShieldCheck,
      desc: 'Delivering secure, robust, and dependable software architectures that run mission-critical operations 24/7.',
      posDesktop: { top: '23%', left: '59%', width: '23%', height: '24%' },
      tag: '02 // VALUE'
    },
    {
      id: 'integrity',
      title: 'Integrity',
      icon: Award,
      desc: 'Building enduring client trust across 3 decades through honesty, transparency, and relentless commitment.',
      posDesktop: { top: '48%', left: '6%', width: '22%', height: '26%' },
      tag: '03 // VALUE'
    },
    {
      id: 'customer',
      title: 'Customer Focus',
      icon: HeartHandshake,
      desc: 'Understanding unique operational workflows and engineering the exact right solutions tailored for each client.',
      posDesktop: { top: '47%', left: '72%', width: '23%', height: '26%' },
      tag: '04 // VALUE'
    },
    {
      id: 'improvement',
      title: 'Continuous Improvement',
      icon: Target,
      desc: 'Constantly upgrading our software suites with the latest cloud, mobile, and automation technologies.',
      posDesktop: { top: '69%', left: '19%', width: '25%', height: '25%' },
      tag: '05 // VALUE'
    },
    {
      id: 'support',
      title: 'Dedicated Support',
      icon: Users,
      desc: 'Providing responsive, experienced technical support, training, and annual maintenance for our partners.',
      posDesktop: { top: '70%', left: '57%', width: '24%', height: '25%' },
      tag: '06 // VALUE'
    }
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto my-12 select-none">
      
      {/* ================= DESKTOP INTERACTIVE ROCK POND ================= */}
      <div className="relative hidden md:block rounded-3xl overflow-hidden shadow-2xl border border-black/15 bg-black/5">
        
        {/* Base High-Resolution Nature Rock Pond Image */}
        <motion.img
          src="/images/core-values-pond.jpg"
          alt="PentaSoft Core Values Rock Pond"
          className="w-full h-auto object-cover transition-all duration-500"
          animate={{
            filter: hoveredIdx !== null ? 'brightness(0.85) blur(1px)' : 'brightness(1) blur(0px)',
            scale: hoveredIdx !== null ? 1.01 : 1,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Ambient Darkened Backdrop Dimmer when hovering */}
        <div 
          className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
            hoveredIdx !== null ? 'bg-black/25 backdrop-blur-[2px]' : 'bg-transparent'
          }`}
        />

        {/* Interactive Rock Hotspots */}
        {values.map((v, idx) => {
          const isHovered = hoveredIdx === idx;
          const IconComp = v.icon;

          return (
            <div
              key={v.id}
              style={{
                position: 'absolute',
                top: v.posDesktop.top,
                left: v.posDesktop.left,
                width: v.posDesktop.width,
                height: v.posDesktop.height,
              }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="z-30 cursor-pointer flex items-center justify-center p-2 group"
            >
              {/* Highlight Glow Border on Active Rock */}
              <motion.div
                className="w-full h-full rounded-2xl flex flex-col justify-center items-center text-center p-3 sm:p-4 transition-all"
                animate={{
                  scale: isHovered ? 1.12 : 1,
                  y: isHovered ? -8 : 0,
                  backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.01)',
                  borderColor: isHovered ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0)',
                  boxShadow: isHovered 
                    ? '0 24px 48px -12px rgba(0, 0, 0, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.9)' 
                    : 'none',
                }}
                transition={{ type: 'spring', damping: 18, stiffness: 350 }}
              >
                {isHovered ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-1.5"
                  >
                    <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-black text-[#D4F82C] text-[9px] font-mono font-bold mb-1">
                      <IconComp className="w-3 h-3" />
                      <span>{v.title}</span>
                    </div>
                    <p className="text-black font-extrabold text-xs leading-snug">
                      {v.desc}
                    </p>
                  </motion.div>
                ) : (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1 text-[10px] font-mono font-bold text-black bg-white/70 px-2 py-0.5 rounded-full backdrop-blur-sm shadow-sm">
                    <Sparkles className="w-3 h-3 text-black" />
                    <span>HOVER TO EXPLORE</span>
                  </div>
                )}
              </motion.div>
            </div>
          );
        })}

        {/* Center Ripple Water Core Badge */}
        <div className="absolute top-[48%] left-[46.5%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
          <div className="relative flex items-center justify-center">
            <span className="absolute w-14 h-14 rounded-full bg-[#D4F82C]/30 animate-ping"></span>
            <span className="w-9 h-9 rounded-full bg-black/80 text-[#D4F82C] flex items-center justify-center shadow-lg border border-[#D4F82C]/40">
              <Sparkles className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>

      {/* ================= MOBILE FALLBACK CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
        {values.map((v, idx) => {
          const IconComp = v.icon;
          return (
            <div key={idx} className="liquid-glass-card p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-black text-[#D4F82C] flex items-center justify-center mb-4 shadow-md">
                  <IconComp className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-black mb-2">{v.title}</h4>
                <p className="text-neutral-800 text-xs leading-relaxed font-medium">{v.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Subtitle helper */}
      <div className="text-center mt-4 text-xs font-mono font-bold text-neutral-800 hidden md:block">
        <span>✨ HOVER OVER ANY ROCK STONE TO REVEAL OUR VALUE PRINCIPLE</span>
      </div>

    </div>
  );
}
