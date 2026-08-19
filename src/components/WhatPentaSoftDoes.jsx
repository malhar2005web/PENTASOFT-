import React from 'react';
import { Globe, Smartphone, Building2, Pill, Cloud, ShieldCheck, ArrowRight } from 'lucide-react';

export default function WhatPentaSoftDoes() {
  const stats = [
    { number: '15+', label: 'industry verticals powered across construction, pharma & enterprise' },
    { number: '100%', label: 'custom cloud-native architectures tailored to your workflow' },
    { number: '99.999%', label: 'verified cloud reliability & multi-region deployment uptime' }
  ];

  const cards = [
    {
      tag: '□ WEB & CLOUD PLATFORMS',
      title: 'Cloud-Based Web Systems & Portals',
      description: 'Modern, high-performance web platforms, enterprise SaaS portals, and secure API architectures. Complete cloud management on AWS and Azure engineered for scalability, speed, and 24/7 reliability.',
      features: ['Enterprise Web Applications', 'Full Cloud DevOps & Infrastructure', 'High-Security Client Portals', 'Automated Cloud Workflows'],
      icon: Globe
    },
    {
      tag: '□ MOBILE & CROSS-PLATFORM',
      title: 'Enterprise Mobile & Field Applications',
      description: 'High-speed iOS, Android, and Desktop applications built with cross-platform frameworks. Features offline-first database synchronization, biometric security, and direct hardware integration for on-field teams.',
      features: ['iOS & Android Native Performance', 'Offline-First SQLite Data Sync', 'Field Workforce Telemetry', 'Secure Biometric Authentication'],
      icon: Smartphone
    },
    {
      tag: '□ INDUSTRY DOMAIN SOLUTIONS',
      title: 'Pharma, Construction & Industry Systems',
      description: 'Deep domain-specific IT solutions: FDA/GMP-compliant batch tracking and laboratory data systems for Pharmaceuticals, alongside on-site project tracking, BIM integrations, and ERP management for Construction.',
      features: ['Pharma GMP & Batch Tracking', 'Construction Job-Site & Material ERP', 'Real-Time IoT & Asset Telemetry', 'Custom Regulatory Compliance'],
      icon: Building2
    }
  ];

  return (
    <section id="what-we-do" className="pt-16 pb-28 bg-[#D4F82C] text-[#101010] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Big Stat Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-b border-black/10 text-center">
          {stats.map((s, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-5xl sm:text-6xl font-black tracking-tight text-black font-mono">
                {s.number}
              </div>
              <div className="text-xs sm:text-sm text-neutral-800 max-w-[220px] mx-auto font-bold leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section Heading */}
        <div className="text-center pt-24 pb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-neutral-800 font-bold uppercase tracking-wider mb-4 px-3.5 py-1.5 rounded-full liquid-glass-pill">
            <span>□ FULL-SPECTRUM SOFTWARE & CLOUD SOLUTIONS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-black mb-6">
            What PentaSoft* Delivers
          </h2>
          <p className="text-neutral-800 text-base sm:text-lg font-medium leading-relaxed">
            From modern responsive web platforms and cross-platform mobile apps to complete cloud-based enterprise operations, we engineer custom software solutions tailored to complex industrial demands.
          </p>
        </div>

        {/* 3 Liquid Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                className="liquid-glass-card p-8 sm:p-10 flex flex-col justify-between group"
              >
                <div>
                  <div className="text-[11px] font-mono font-bold text-neutral-700 mb-6">
                    {card.tag}
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-black/90 flex items-center justify-center text-[#D4F82C] mb-6 shadow-md group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
                    {card.title}
                  </h3>

                  <p className="text-neutral-800 text-sm leading-relaxed font-medium mb-6">
                    {card.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 pt-2 border-t border-black/10">
                    {card.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-2 text-xs font-mono text-neutral-900 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0"></span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-black/10 flex items-center justify-between text-xs font-bold text-black">
                  <span>EXPLORE INDUSTRY CAPABILITIES</span>
                  <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
