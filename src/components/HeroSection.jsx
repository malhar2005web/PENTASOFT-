import React, { useState } from 'react';
import { ChevronDown, EyeOff, LayoutDashboard, ShieldCheck, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LaptopCanvas from './3d/LaptopCanvas';

export default function HeroSection() {
  const [showLaptop, setShowLaptop] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDemoIndex, setSelectedDemoIndex] = useState(0);

  const demoOptions = [
    {
      name: 'Enterprise Admin Suite',
      desc: 'Live administrative governance, analytics & workstation logs',
      imageSrc: '/images/dashboard-admin.png',
      icon: ShieldCheck
    },
    {
      name: 'Field Operations Portal',
      desc: 'Real-time job-site tracking, attendance & operational modules',
      imageSrc: '/images/dashboard-field.png',
      icon: LayoutDashboard
    }
  ];

  const handleSelectDemo = (idx) => {
    setSelectedDemoIndex(idx);
    setShowLaptop(true);
    setDropdownOpen(false);
  };

  return (
    <section id="home" className="relative min-h-[90vh] pt-32 pb-16 flex flex-col justify-center overflow-visible bg-[#F8F9FB] text-black">
      {/* Subtle ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-40 w-full pt-4">
        
        {/* Top Industry Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full liquid-glass-pill text-xs font-mono text-neutral-800 font-bold mb-8 hover:bg-white transition-colors cursor-pointer shadow-sm border border-neutral-200">
          <span className="w-2 h-2 rounded-sm bg-[#DC2626]"></span>
          <span>ENTERPRISE IT SOLUTIONS // PHARMA • CONSTRUCTION • CLOUD</span>
          <span className="text-[#DC2626] font-bold">»</span>
        </div>

        {/* Huge Clean Centered Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-[66px] font-black text-black leading-[1.06] tracking-tight mb-6 max-w-4xl mx-auto">
          Custom software, applications & <br className="hidden sm:inline" />
          cloud operations for modern industry.
        </h1>

        {/* Clean Subtitle */}
        <p className="text-neutral-700 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed mb-8">
          Planex Software delivers end-to-end software solutions — from cross-platform mobile apps and high-performance websites to complete cloud operations tailored for Construction, Pharma, and Enterprise industries.
        </p>

        {/* Action Buttons with High Z-Index Dropdown */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 relative z-50">
          
          {/* Main Dropdown Button for Demo */}
          <div className="relative w-full sm:w-auto">
            <div className="inline-flex rounded-full clay-btn-red p-1">
              <button
                type="button"
                onClick={() => {
                  if (!showLaptop) {
                    setShowLaptop(true);
                  } else {
                    setDropdownOpen(!dropdownOpen);
                  }
                }}
                className="px-7 py-3 rounded-full font-bold text-xs text-white transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{showLaptop ? `LIVE: ${demoOptions[selectedDemoIndex].name}` : 'SEE LIVE DEMO'}</span>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdownOpen((prev) => !prev);
                }}
                className="px-3.5 py-3 rounded-full text-white hover:bg-white/20 transition-all flex items-center justify-center cursor-pointer border-l border-white/30"
                title="Select Web App Demo"
              >
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-[#0A0E17] border border-white/20 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] p-2.5 z-[100] text-left font-mono backdrop-blur-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-[10px] text-neutral-400 font-bold px-3 py-1.5 uppercase tracking-wider">
                  SELECT ENTERPRISE WEB APP
                </div>
                
                {demoOptions.map((opt, idx) => {
                  const IconComp = opt.icon;
                  const isSelected = selectedDemoIndex === idx && showLaptop;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectDemo(idx)}
                      className={`w-full text-left p-3 rounded-xl transition-all flex items-start space-x-3 cursor-pointer my-1 ${
                        isSelected 
                          ? 'clay-btn-red text-white font-bold' 
                          : 'text-white hover:bg-white/15'
                      }`}
                    >
                      <IconComp className="w-4 h-4 mt-0.5 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold truncate">{opt.name}</div>
                        <div className={`text-[10px] truncate mt-0.5 ${isSelected ? 'text-white font-medium' : 'text-neutral-400'}`}>
                          {opt.desc}
                        </div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 shrink-0 mt-0.5 text-white" />}
                    </button>
                  );
                })}

                {showLaptop && (
                  <div className="pt-2 mt-2 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => { setShowLaptop(false); setDropdownOpen(false); }}
                      className="w-full text-left px-3 py-2 rounded-lg text-[11px] font-bold text-red-400 hover:bg-red-500/20 transition-colors flex items-center space-x-2 cursor-pointer"
                    >
                      <EyeOff className="w-3.5 h-3.5" />
                      <span>Close 3D Display</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-xs clay-btn-blue flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span className="font-mono">⌘</span>
            <span>REQUEST A CONSULTATION</span>
          </a>
        </div>

      </div>

      {/* 3D Fullscreen Laptop Container */}
      <AnimatePresence>
        {showLaptop && (
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, height: 'auto', scale: 1, y: 0 }}
            exit={{ opacity: 0, height: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl mx-auto z-10 overflow-visible mt-2"
          >
            <LaptopCanvas imageSrc={demoOptions[selectedDemoIndex].imageSrc} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
