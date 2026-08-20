import React from 'react';
import { ShieldCheck, Cpu, Terminal, Sparkles, Lock, RefreshCw, BarChart3 } from 'lucide-react';

export default function WhyPentaSoft() {
  const reasons = [
    {
      icon: Terminal,
      title: 'Zero-Bloat Engineering',
      desc: 'We do not add heavy 50MB frameworks when a lean 100-line script does the job cleanly. Lower bundle size, faster startup times, zero unnecessary server load.'
    },
    {
      icon: ShieldCheck,
      title: 'Defense-In-Depth Security',
      desc: 'Every endpoint is validated, sanitized, and audited against OWASP Top 10 vulnerabilities before deployment into production environment.'
    },
    {
      icon: RefreshCw,
      title: 'Predictable Scalability',
      desc: 'Our architectures scale horizontally with stateless service nodes, database read-replicas, and memory-efficient streaming routines.'
    },
    {
      icon: BarChart3,
      title: 'Measurable ROI',
      desc: 'We tie every technical initiative to tangible business metrics: operational throughput, latency reduction, infrastructure cost efficiency.'
    }
  ];

  return (
    <section className="py-24 relative bg-[#07090E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-white/10 text-xs font-mono text-[#00E5FF] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>Section 07 — Why Planex Software</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Built on discipline, <span className="text-gradient-cyan">not hype</span>.
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            We focus on software fundamentals: clean code, predictable state, strong types, low latency, and operational stability.
          </p>
        </div>

        {/* 4 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-8 rounded-3xl glass-panel-hover flex flex-col justify-between border border-white/10"
              >
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center">
                      <IconComp className="w-6 h-6 text-[#00E5FF]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500">PRINCIPLE 0{idx + 1}</span>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#00E5FF]">
                  <span>PLANEX STANDARD</span>
                  <span>✓ VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
