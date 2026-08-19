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
    <section id="who-we-serve" className="py-28 bg-[#D4F82C] text-[#101010] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center pb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-neutral-800 font-bold uppercase tracking-wider mb-4 px-3.5 py-1.5 rounded-full liquid-glass-pill">
            <span>□ EMPOWERING BUSINESSES TO SCALE & SIMPLIFY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-black mb-6">
            Who PentaSoft Is Built For
          </h2>
          <p className="text-neutral-800 text-base sm:text-lg font-medium leading-relaxed">
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
                  ? 'bg-black text-[#D4F82C] shadow-xl scale-105'
                  : 'liquid-glass-pill text-black hover:bg-white/60'
              }`}
            >
              {p.tab}
            </button>
          ))}
        </div>

        {/* Active Persona Liquid Glass Card */}
        <div className="max-w-4xl mx-auto liquid-glass-card p-8 sm:p-12">
          <div className="flex items-center justify-between mb-6">
            <div className="text-xs font-mono font-bold text-neutral-700">
              {personas[activeTab].badge}
            </div>
            <div className="w-9 h-9 rounded-xl bg-black text-[#D4F82C] flex items-center justify-center shadow-md">
              {React.createElement(personas[activeTab].icon, { className: 'w-4 h-4' })}
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-black mb-4">
            {personas[activeTab].title}
          </h3>

          <p className="text-neutral-800 text-base leading-relaxed mb-6 font-medium">
            {personas[activeTab].subtitle}
          </p>

          {/* Neumorphic Feature Points */}
          <div className="space-y-3 pt-2 mb-8">
            {personas[activeTab].points.map((point, pIdx) => (
              <div
                key={pIdx}
                className="px-4 py-3.5 rounded-2xl text-xs sm:text-sm font-mono text-neutral-900 font-bold transition-all duration-200 hover:scale-[1.01] flex items-center space-x-3"
                style={{
                  background: 'rgba(255, 255, 255, 0.65)',
                  boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.06), -3px -3px 8px rgba(255, 255, 255, 0.95), inset 1px 1px 2px rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.7)'
                }}
              >
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full text-xs font-bold bg-black text-[#D4F82C] hover:bg-neutral-900 shadow-md transition-all hover:scale-105"
          >
            <span>Consult on Your Business Requirements</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
