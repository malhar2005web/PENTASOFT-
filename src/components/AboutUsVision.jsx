import React from 'react';
import { Calendar } from 'lucide-react';
import CoreValuesPond3D from './3d/CoreValuesPond3D';
import StoneTabletCanvas from './3d/StoneTabletCanvas';
import ModernTabletCanvas from './3d/ModernTabletCanvas';

export default function AboutUsVision() {
  return (
    <section id="about-us" className="py-28 bg-[#D4F82C] text-[#101010] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Blueprint Pill */}
        <div className="text-center pb-6">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-neutral-800 font-bold uppercase tracking-wider mb-4 px-3.5 py-1.5 rounded-full liquid-glass-pill">
            <Calendar className="w-3.5 h-3.5 text-black" />
            <span>ESTABLISHED 1994 // 30+ YEARS OF SOFTWARE EXCELLENCE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-black mb-6">
            Our Story, Vision & Heritage
          </h2>
          <p className="text-neutral-800 text-base sm:text-lg max-w-3xl mx-auto font-medium leading-relaxed">
            From our rock-solid foundational heritage in 1994 to cutting-edge cloud architectures — discover our 3-decade journey and our vision for empowering modern industry.
          </p>
        </div>

        {/* 3D Dual Tablet Showcase: Ancient 1994 Stone Tablet vs Modern Future Tablet */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-16">
          
          {/* Left: 3D Ancient Stone Tablet (1994 Heritage & History) */}
          <StoneTabletCanvas />

          {/* Right: 3D Modern Digital iPad / Tablet (Our Mission & Vision) */}
          <ModernTabletCanvas />

        </div>

        {/* 6 Core Values - Real 3D Rock Pond WebGL Showcase */}
        <div className="pt-10">
          <div className="text-center pb-4">
            <h3 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-3">
              Our Core Values
            </h3>
            <p className="text-neutral-800 text-sm max-w-xl mx-auto font-medium">
              The foundational principles that guide our product engineering, client partnerships, and continuous evolution.
            </p>
          </div>

          {/* Real 3D Rock WebGL Pond Component */}
          <CoreValuesPond3D />
        </div>

      </div>
    </section>
  );
}
