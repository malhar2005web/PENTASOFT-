import React from 'react';
import { Cpu, ShieldCheck, Zap, Layers, Globe, Code2 } from 'lucide-react';

export default function WhoWeAre() {
  const pillars = [
    {
      icon: Cpu,
      title: 'Architectural Discipline',
      description: 'We eliminate technical debt before it starts. Our systems prioritize minimal bloat, high concurrency, and long-term maintainability.'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Security',
      description: 'Zero-trust architecture, encrypted data pipelines, and strict compliance engineered directly into every software component.'
    },
    {
      icon: Zap,
      title: 'High Velocity Execution',
      description: 'Streamlined development lifecycles that deliver production-grade enterprise software without sacrificing quality or performance.'
    },
    {
      icon: Layers,
      title: 'Scalable Ecosystems',
      description: 'Modular cloud architecture and microservices designed to scale seamlessly from thousands to millions of operations per second.'
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#07090E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-white/10 text-xs font-mono text-[#00E5FF] mb-4">
            <Code2 className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>Section 02 — Who We Are</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            We are engineering partners for organizations that <span className="text-gradient-cyan">refuse to settle</span> for template code.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Planex Software Consultancy brings deep technical domain expertise to build software systems that solve complex operational bottlenecks. We combine strategic design with clean, high-performance code to power enterprise digital transformation.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl glass-panel-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center mb-6 group-hover:bg-[#00E5FF] group-hover:text-black transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-[#00E5FF] group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 font-mono text-[10px] text-slate-500 flex items-center justify-between">
                  <span>PILLAR 0{idx + 1}</span>
                  <span className="text-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity">ACTIVE</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
