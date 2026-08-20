import React from 'react';
import { Target, Building, Calendar } from 'lucide-react';
import CoreValuesPond3D from './3d/CoreValuesPond3D';

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
            Established in 1994, Planex Software Consultancy has grown into a trusted software solutions provider, empowering industrial leaders, construction firms, and growing enterprises across India.
          </p>
        </div>

        {/* Company History & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-16">
          
          {/* History Card */}
          <div className="liquid-glass-card p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-neutral-700 mb-4 flex items-center space-x-2">
                <Building className="w-4 h-4 text-black" />
                <span>COMPANY HISTORY & HERITAGE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-black mb-6">
                Over 3 Decades of Reliable Engineering
              </h3>
              <div className="space-y-4 text-neutral-900 text-sm leading-relaxed font-medium">
                <p>
                  Established in <strong>1994</strong>, Planex Software Consultancy has evolved into a premier enterprise software provider specializing in <strong>Ready Mix Concrete (RMC), Crusher Plant Management, ERP, SCADA integration, Billing, E-Invoicing, and Custom Cloud Solutions</strong>.
                </p>
                <p>
                  Over the past 30+ years, we have continuously innovated our proprietary <strong>Penta Product Suite</strong> to meet the demanding requirements of construction, manufacturing, healthcare, and trading sectors across India.
                </p>
                <p>
                  Our unwavering commitment is to provide easy-to-use, robust, and cost-effective software solutions that simplify daily operations, eliminate manual errors, and maximize operational productivity.
                </p>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-black/10 flex items-center justify-between text-xs font-mono font-bold text-black">
              <span>FOUNDED: 1994 (MUMBAI, INDIA)</span>
              <span>GST: 27AABPJ2329N1ZM</span>
            </div>
          </div>

          {/* Mission & Vision Card */}
          <div className="liquid-glass-card p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-neutral-700 mb-4 flex items-center space-x-2">
                <Target className="w-4 h-4 text-black" />
                <span>OUR MISSION & VISION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-black mb-6">
                Empowering Businesses Through Smarter Technology
              </h3>
              
              <div className="space-y-5">
                <div className="p-5 rounded-2xl bg-black/5 border border-black/10">
                  <div className="text-xs font-mono text-black font-bold uppercase mb-2 flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-black"></span>
                    <span>OUR MISSION</span>
                  </div>
                  <p className="text-neutral-900 text-sm leading-relaxed font-medium">
                    To empower businesses with innovative, reliable, and user-friendly software solutions that enhance efficiency, accuracy, and productivity, while delivering continuous innovation and exceptional customer support.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-black/5 border border-black/10">
                  <div className="text-xs font-mono text-black font-bold uppercase mb-2 flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-black"></span>
                    <span>OUR VISION</span>
                  </div>
                  <p className="text-neutral-900 text-sm leading-relaxed font-medium">
                    To be the most trusted technology partner for industrial and commercial enterprises, building scalable software ecosystems that streamline operations and drive long-term business growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-black/10 flex items-center justify-between text-xs font-mono font-bold text-neutral-800">
              <span className="text-black font-bold">PAN-INDIA CLIENT BASE</span>
              <span>MIRA ROAD, MUMBAI HQ</span>
            </div>
          </div>

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
