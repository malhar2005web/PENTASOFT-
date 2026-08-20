import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Globe, Cpu, Sparkles } from 'lucide-react';

export default function WhoPentaSoftIsBuiltFor() {
  const [activeTab, setActiveTab] = useState(0);

  const personas = [
    {
      tab: 'ONLINE DIGITAL PRESENCE',
      badge: 'DIGITAL IDENTITY & WEB PLATFORMS',
      icon: Globe,
      title: 'For businesses ready to build a commanding online presence',
      subtitle: 'From modern corporate web platforms to high-impact customer portals, we give your business a polished digital presence that builds credibility, attracts high-value clients, and scales with your growth.',
      points: [
        'Modern, fast-loading responsive websites and interactive digital portals',
        'Intuitive client-facing experiences tailored to showcase your services',
        'Rock-solid cloud hosting with 99.999% uptime and zero maintenance headaches'
      ]
    },
    {
      tab: 'WORKFLOW & EFFICIENCY SYSTEMS',
      badge: 'OPERATIONAL SYSTEMS & AUTOMATION',
      icon: Cpu,
      title: 'For teams looking to simplify daily work and boost efficiency',
      subtitle: 'We build custom management dashboards, real-time tracking systems, and automated workflows that eliminate manual paperwork, remove operational bottlenecks, and make running your business effortless.',
      points: [
        'Centralized operations dashboards giving real-time visibility across all teams',
        'Automated daily workflows that eliminate repetitive manual data entry',
        'Seamless communication tools connecting field workers, staff, and management'
      ]
    },
    {
      tab: 'BESPOKE CUSTOM SOLUTIONS',
      badge: 'INDIVIDUAL-SPECIFIC SOFTWARE ENGINEERING',
      icon: Sparkles,
      title: 'For organizations needing software crafted for their exact needs',
      subtitle: 'Off-the-shelf software rarely fits unique business models. We engineer bespoke mobile apps, cloud architectures, and specialized tools designed from the ground up around your exact operational workflows.',
      points: [
        '100% custom software architecture tailored to your business rules and goals',
        'Cross-platform mobile and desktop applications with offline-first data sync',
        'Direct consultation with senior architects to continuously evolve your systems'
      ]
    }
  ];

  return (
    <section id="who-we-serve" className="py-28 bg-[#F8F9FB] text-[#101010] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center pb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-neutral-800 font-bold uppercase tracking-wider mb-4 px-3.5 py-1.5 rounded-full liquid-glass-pill border border-neutral-200 shadow-sm">
            <span>□ EMPOWERING BUSINESSES TO SCALE & SIMPLIFY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-black mb-6">
            Who Planex Software Is Built For
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg font-medium leading-relaxed">
            We help businesses establish a commanding online presence, build tailored software systems that simplify daily operations, and engineer custom solutions designed for maximum efficiency.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {personas.map((p, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#DC2626] text-white shadow-xl scale-105'
                  : 'liquid-glass-pill text-neutral-800 hover:bg-white border border-neutral-200'
              }`}
            >
              {p.tab}
            </button>
          ))}
        </div>

        {/* Active Persona Liquid Glass Card */}
        <div className="max-w-4xl mx-auto liquid-glass-card p-8 sm:p-12">
          <div className="flex items-center justify-between mb-6">
            <div className="text-xs font-mono font-bold text-[#1D4ED8]">
              {personas[activeTab].badge}
            </div>
            <div className="w-9 h-9 rounded-xl bg-[#DC2626] text-white flex items-center justify-center shadow-md">
              {React.createElement(personas[activeTab].icon, { className: 'w-4 h-4' })}
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] mb-4">
            {personas[activeTab].title}
          </h3>

          <p className="text-neutral-700 text-base leading-relaxed mb-6 font-medium">
            {personas[activeTab].subtitle}
          </p>

          {/* Light Blue Neumorphic Feature Points */}
          <div className="space-y-3 pt-2 mb-8">
            {personas[activeTab].points.map((point, pIdx) => (
              <div
                key={pIdx}
                className="px-4 py-3.5 rounded-2xl text-xs sm:text-sm font-mono text-blue-950 font-bold transition-all duration-200 hover:scale-[1.01] hover:bg-white flex items-center space-x-3"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  boxShadow: '3px 3px 8px rgba(30, 64, 175, 0.06), inset 1px 1px 2px rgba(255, 255, 255, 0.95)',
                  border: '1px solid #BFDBFE'
                }}
              >
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full text-xs font-bold bg-[#DC2626] text-white hover:bg-[#B91C1C] shadow-lg transition-all hover:scale-105"
          >
            <span>Consult on Your Business Requirements</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
