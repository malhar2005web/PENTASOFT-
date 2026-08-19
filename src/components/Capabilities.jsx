import React from 'react';
import { Compass, Code, Brain, Workflow, Database, Layers, ShieldCheck } from 'lucide-react';

export default function Capabilities() {
  const capabilityList = [
    {
      icon: Compass,
      title: 'Technical Strategy',
      badge: 'Architecture',
      description: 'System design, stack selection, scalability modeling, and multi-year technical roadmap planning.'
    },
    {
      icon: Code,
      title: 'Full-Stack Engineering',
      badge: 'Core Tech',
      description: 'React, Node.js, Python, Go, and Rust enterprise microservices with high test coverage and CI/CD pipelines.'
    },
    {
      icon: Brain,
      title: 'Applied AI & ML',
      badge: 'Intelligence',
      description: 'LLM integration, RAG vector pipelines, agentic task loops, automated document processing, and NLP analytics.'
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      badge: 'Efficiency',
      description: 'Event-driven message queues, micro-batching, headless browser scraping, and automated reporting systems.'
    },
    {
      icon: Database,
      title: 'Data Architecture',
      badge: 'Infrastructure',
      description: 'PostgreSQL, Redis, ClickHouse, and Snowflake pipeline optimization with sub-second query performance.'
    },
    {
      icon: Layers,
      title: 'Product Design',
      badge: 'UX/UI',
      description: 'Design token creation, liquid-glass aesthetic components, micro-animations, and responsive accessibility.'
    }
  ];

  return (
    <section id="capabilities" className="py-24 relative bg-[#07090E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-white/10 text-xs font-mono text-[#00E5FF] mb-4">
            <span>Section 04 — Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            End-to-end engineering <span className="text-gradient-cyan">competence</span>.
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            From strategic advisory to high-concurrency code execution, our cross-functional team delivers software with absolute precision.
          </p>
        </div>

        {/* Capabilities Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilityList.map((cap, idx) => {
            const IconComponent = cap.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl glass-panel-hover flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Glow subtle background indicator */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00E5FF]/5 rounded-bl-full pointer-events-none group-hover:bg-[#00E5FF]/15 transition-all"></div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#00E5FF]/40 group-hover:text-[#00E5FF] transition-all">
                      <IconComponent className="w-5 h-5 text-slate-300 group-hover:text-[#00E5FF]" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/5 text-slate-400 border border-white/10">
                      {cap.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>CAPABILITY // 0{idx + 1}</span>
                  <span className="text-emerald-400">READY</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
