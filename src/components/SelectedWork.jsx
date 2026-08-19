import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, CheckCircle, Code } from 'lucide-react';

export default function SelectedWork() {
  const [selectedConcept, setSelectedConcept] = useState(null);

  const conceptProjects = [
    {
      id: 'concept-1',
      title: 'AuraCloud — Autonomous Infrastructure Mesh',
      category: 'Concept Architecture // Cloud & DevOps',
      tag: 'Cloud Infrastructure',
      summary: 'A multi-cloud Kubernetes orchestration platform featuring zero-downtime micro-batch deployments and AI-driven node auto-scaling.',
      stack: ['React 18', 'Go Microservices', 'Kubernetes', 'Terraform', 'gRPC'],
      deliverables: [
        'Multi-region cluster failover mesh',
        'Sub-second telemetry monitoring dashboard',
        'Custom Helm chart automated release workflow'
      ]
    },
    {
      id: 'concept-2',
      title: 'VantageRAG — Enterprise Knowledge Memory Engine',
      category: 'Concept Architecture // AI & NLP',
      tag: 'AI & Data Pipelines',
      summary: 'On-premises vector indexing platform designed for confidential enterprise document retrieval with hybrid dense-sparse search math.',
      stack: ['Python FastAPI', 'Qdrant Vector DB', 'React', 'Tailwind CSS', 'Docker'],
      deliverables: [
        'Local LLM embedding chunker',
        'Role-based vector access control (RBAC)',
        'Real-time streaming citation drawer'
      ]
    },
    {
      id: 'concept-3',
      title: 'PulseOps — High-Frequency Financial Telemetry',
      category: 'Concept Architecture // FinTech Systems',
      tag: 'Intelligent Software',
      summary: 'Low-latency data processing system built to ingest, aggregate, and visualize high-frequency market transactions in real time.',
      stack: ['Rust Core', 'TypeScript', 'WebSockets', 'ClickHouse', 'Tailwind CSS'],
      deliverables: [
        '60fps WebGL real-time candlestick charts',
        'Sub-millisecond WebSocket data ingest',
        'Automated order book anomaly alerts'
      ]
    }
  ];

  return (
    <section id="work" className="py-24 relative bg-[#07090E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-white/10 text-xs font-mono text-[#00E5FF] mb-4">
              <Layers className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>Section 06 — Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Representative <span className="text-gradient-cyan">solution blueprints</span>.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-slate-400 text-xs font-mono max-w-xs">
            * Note: Displaying technical concept architectures & representative enterprise domain blueprints.
          </div>
        </div>

        {/* Concept Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {conceptProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl p-6 glass-panel-hover flex flex-col justify-between group relative border border-white/10"
            >
              <div>
                {/* Tag & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20">
                    {project.tag}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">CONCEPT BLUEPRINT</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded bg-white/5 text-slate-400 text-[10px] font-mono border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">PENTASOFT LABS</span>
                <button
                  onClick={() => setSelectedConcept(project)}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-[#00E5FF] hover:underline"
                >
                  <span>Inspect Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Concept Inspection Modal */}
      {selectedConcept && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-panel max-w-2xl w-full p-8 rounded-3xl border border-[#00E5FF]/40 relative space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-[#00E5FF]">{selectedConcept.category}</span>
              <button
                onClick={() => setSelectedConcept(null)}
                className="text-slate-400 hover:text-white text-sm font-mono px-2 py-1 rounded bg-white/5"
              >
                [CLOSE ESC]
              </button>
            </div>

            <h3 className="text-2xl font-bold text-white">{selectedConcept.title}</h3>
            <p className="text-slate-300 text-sm">{selectedConcept.summary}</p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase text-slate-400">Core Deliverables & Specifications:</h4>
              {selectedConcept.deliverables.map((item, dIdx) => (
                <div key={dIdx} className="flex items-center space-x-2 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-[#00E5FF]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex justify-end space-x-4">
              <button
                onClick={() => setSelectedConcept(null)}
                className="px-5 py-2 rounded-lg text-xs font-semibold glass-panel text-slate-300 hover:text-white"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedConcept(null)}
                className="px-5 py-2 rounded-lg text-xs font-bold bg-[#00E5FF] text-black hover:bg-[#00E5FF]/90"
              >
                Discuss Similar Build
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
