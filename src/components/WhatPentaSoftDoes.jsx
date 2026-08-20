import React from 'react';
import { Truck, Factory, Users, Database, FileSpreadsheet, Code2 } from 'lucide-react';

export default function WhatPentaSoftDoes() {
  const stats = [
    { number: '1994', label: 'founded with 30+ years of software innovation & reliability' },
    { number: '6+', label: 'specialized Penta product modules for industrial operations' },
    { number: '100%', label: 'client-centric customization, training & dedicated AMC support' }
  ];

  const products = [
    {
      tag: '□ CONCRETE & BATCHING',
      title: 'Penta RMC — Ready Mix Concrete',
      description: 'Complete RMC software streamlining batching control, weighbridge integration, dispatch & delivery tracking, sales, billing, multi-plant cloud management, and automated Tally & E-Invoicing.',
      features: ['Plant & Batch Weighing Control', 'Vehicle & Delivery GPS Tracking', 'Automated Sales & GST Invoicing', 'Tally & SCADA Hardware Sync'],
      icon: Truck
    },
    {
      tag: '□ CRUSHER & MINING',
      title: 'Penta Crusher — Plant Management',
      description: 'End-to-end crusher plant management software designed for crushing production tracking, raw material stock, weighbridge integration, sales dispatch, and comprehensive MIS business reporting.',
      features: ['Crusher Production & Stock Tracking', 'Weighbridge Hardware Integration', 'Purchase, Sales & Billing Management', 'Automated E-Invoicing & E-Way Bill'],
      icon: Factory
    },
    {
      tag: '□ WORKFORCE & CUSTOMERS',
      title: 'Penta TeamPulse — Management Suite',
      description: 'All-in-one employee and customer management software covering call logs, WhatsApp integration, task assignment, daily follow-ups, GPS location tracking, and real-time productivity monitoring.',
      features: ['WhatsApp & Customer Call Records', 'Daily Task & Follow-up Tracking', 'Live Employee Location & Attendance', 'Productivity & MIS Reports'],
      icon: Users
    },
    {
      tag: '□ ENTERPRISE ERP',
      title: 'Penta ERP — Business Planning',
      description: 'Integrated business management software connecting finance, inventory, sales, purchase, production, HR, and multi-branch operations on a unified platform for smart, efficient growth.',
      features: ['Inventory & Stock Control', 'Multi-Branch & Multi-Company', 'Payroll & Employee HR Management', 'Centralized Operations Reporting'],
      icon: Database
    },
    {
      tag: '□ GST & COMPLIANCE',
      title: 'Penta Accounts & E-Invoice',
      description: 'Powerful accounting & automated e-invoicing solution with direct GST portal integration, IRN/QR code generation, E-Way bills, ledger accounts, and balance sheet financial reports.',
      features: ['Automated IRN & QR Code Generation', 'Direct GST Portal & Bulk Invoicing', 'Complete Receivables & Payables', 'Tally Accounting Integration'],
      icon: FileSpreadsheet
    },
    {
      tag: '□ BESPOKE DEVELOPMENT',
      title: 'Custom Software & Cloud Solutions',
      description: 'Tailored web platforms, native mobile applications, API integrations, data migration, and cloud infrastructure engineered to meet your exact operational requirements.',
      features: ['Custom Web & Mobile Apps', 'Cloud Server Architecture & APIs', 'Database Migration & Security', 'Comprehensive AMC & Technical Support'],
      icon: Code2
    }
  ];

  return (
    <section id="what-we-do" className="pt-16 pb-28 bg-[#F8F9FB] text-[#101010] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Big Stat Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-b border-neutral-200 text-center">
          {stats.map((s, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-5xl sm:text-6xl font-black tracking-tight text-black font-mono">
                {s.number}
              </div>
              <div className="text-xs sm:text-sm text-neutral-600 max-w-[240px] mx-auto font-bold leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section Heading */}
        <div className="text-center pt-24 pb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-neutral-800 font-bold uppercase tracking-wider mb-4 px-3.5 py-1.5 rounded-full liquid-glass-pill border border-neutral-200 shadow-sm">
            <span>□ PLANEX SOFTWARE // PRODUCT SUITE & SERVICES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-black mb-6">
            Software Solutions Built for Scale
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg font-medium leading-relaxed">
            From specialized Ready Mix Concrete (RMC) and Crusher plant software to enterprise ERP, TeamPulse workforce tracking, and bespoke cloud development.
          </p>
        </div>

        {/* 6 Liquid Glass Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div
                key={idx}
                className="liquid-glass-card p-8 sm:p-9 flex flex-col justify-between group"
              >
                <div>
                  <div className="text-[11px] font-mono font-bold text-[#1D4ED8] mb-5">
                    {p.tag}
                  </div>

                  <div className="w-12 h-12 rounded-2xl clay-btn-red flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] mb-3.5">
                    {p.title}
                  </h3>

                  <p className="text-neutral-700 text-xs leading-relaxed font-medium mb-6">
                    {p.description}
                  </p>

                  {/* 3D Clay Feature Pills */}
                  <div className="space-y-2.5 pt-2">
                    {p.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="px-3.5 py-2.5 rounded-xl text-xs font-mono text-blue-950 font-bold clay-pill-item flex items-center space-x-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0"></span>
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
