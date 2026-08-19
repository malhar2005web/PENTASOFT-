import React, { useState } from 'react';
import { Cpu, Server, Bot, Workflow, Database, Cloud, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function WhatWeBuild() {
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      id: 'software',
      icon: Cpu,
      category: '01 / Intelligent Software',
      title: 'Custom High-Performance Application Suites',
      description: 'Bespoke software applications engineered for mission-critical enterprise workloads. Built with modular architectures, minimal latency, and resilient state management.',
      features: ['Micro-frontend & Hybrid Architectures', 'Sub-millisecond State Synchronization', 'Cross-Platform Enterprise Mobility', 'Offline-First Data Sync']
    },
    {
      id: 'enterprise',
      icon: Server,
      category: '02 / Enterprise Solutions',
      title: 'Legacy Modernization & Core Infrastructure',
      description: 'Refactoring fragile monolithic legacy codebases into modern, cloud-native service mesh architectures without system downtime.',
      features: ['Monolith-to-Microservices Migration', 'Zero-Downtime Database Refactoring', 'Enterprise API Gateways', 'Zero-Trust Role-Based Security']
    },
    {
      id: 'digital',
      icon: Workflow,
      category: '03 / Digital Products',
      title: 'Awwwards-Grade Web & Mobile Products',
      description: 'User-centric digital experiences crafted with cinematic visuals, fluid motion physics, and accessible design systems.',
      features: ['Liquid-Glass Design Systems', 'Framer/GSAP-Grade Motion Physics', 'PWA & Native Mobile Wrappers', 'WCAG 2.1 AAA Accessibility']
    },
    {
      id: 'automation',
      icon: Bot,
      category: '04 / Automation',
      title: 'Autonomous Process & Workflow Engines',
      description: 'Intelligent automation pipelines that eliminate manual repetitive tasks, reduce human error, and optimize operational velocity.',
      features: ['Event-Driven Workflow Automation', 'RPA & Headless Agent Loops', 'Automated QA & Deployment Orchestration', 'Real-Time Incident Mitigation']
    },
    {
      id: 'ai-data',
      icon: Database,
      category: '05 / AI & Data Pipelines',
      title: 'Enterprise AI & Vector Intelligence Systems',
      description: 'Integrating custom LLMs, RAG vector pipelines, and real-time streaming data analytics into your core enterprise applications.',
      features: ['Private On-Prem RAG Pipelines', 'Vector Indexing & Hybrid Search', 'Real-Time Streaming Analytics', 'Custom Model Fine-Tuning']
    },
    {
      id: 'cloud',
      icon: Cloud,
      category: '06 / Cloud Infrastructure',
      title: 'Multi-Cloud & Edge Computing Architectures',
      description: 'Resilient Kubernetes cluster orchestration, serverless execution, and multi-region failover designed for continuous uptime.',
      features: ['Kubernetes & Helm Infrastructure', 'Infrastructure-as-Code (Terraform)', 'Global Edge CDN Acceleration', 'Dynamic Auto-Scaling Policies']
    }
  ];

  return (
    <section id="solutions" className="py-24 relative bg-[#07090E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-white/10 text-xs font-mono text-[#00E5FF] mb-4">
              <span>Section 03 — What We Build</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Solutions engineered for <span className="text-gradient-cyan">scale & impact</span>.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-400 text-sm max-w-md font-mono">
            Modular software architectures built to withstand high concurrency and enterprise growth.
          </p>
        </div>

        {/* Interactive Solutions Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Tabs Column */}
          <div className="lg:col-span-5 space-y-3">
            {solutions.map((item, idx) => {
              const IconComp = item.icon;
              const isSelected = activeSolution === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSolution(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#00E5FF]/15 to-blue-600/10 border-[#00E5FF]/40 text-white shadow-[0_0_20px_rgba(0,229,255,0.15)]'
                      : 'glass-panel border-white/5 text-slate-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#00E5FF] text-black' : 'bg-white/5 text-slate-400'}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#00E5FF] tracking-wider">{item.category}</div>
                      <div className="text-sm font-semibold">{item.title.split(' ')[0]} {item.title.split(' ')[1]}</div>
                    </div>
                  </div>
                  <ArrowUpRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#00E5FF] translate-x-0.5 -translate-y-0.5' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Active Solution Showcase Card */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-[#00E5FF]/20 relative overflow-hidden flex flex-col justify-between min-h-[460px]">
            {/* Background Ambient Light */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#00E5FF]/10 blur-[80px] pointer-events-none"></div>

            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/30">
                  {solutions[activeSolution].category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {solutions[activeSolution].title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                {solutions[activeSolution].description}
              </p>

              <div className="space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Key Technical Deliverables</div>
                {solutions[activeSolution].features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center space-x-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex items-center justify-between mt-8">
              <span className="text-xs font-mono text-slate-400">PentaSoft Solution Framework</span>
              <a 
                href="#contact" 
                className="inline-flex items-center space-x-2 text-xs font-bold text-[#00E5FF] hover:underline"
              >
                <span>Request Architecture Review</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
