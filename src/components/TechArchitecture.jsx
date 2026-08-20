import React, { useState } from 'react';
import { Cpu, Server, Database, Shield, Radio, Activity, Network, ArrowRight } from 'lucide-react';

export default function TechArchitecture() {
  const [activeNode, setActiveNode] = useState('gateway');

  const nodes = [
    {
      id: 'gateway',
      title: 'API Security Gateway',
      type: 'Ingress Node',
      status: 'Active (0.4ms)',
      details: 'Zero-Trust SSL termination, token authentication, rate limiting, and DDoS protection.'
    },
    {
      id: 'mesh',
      title: 'Microservice Mesh',
      type: 'Core Compute',
      status: 'Scale Auto (99.99%)',
      details: 'Event-driven gRPC communications across Kubernetes pods with automatic failover.'
    },
    {
      id: 'vector',
      title: 'AI Vector Pipeline',
      type: 'Intelligence Engine',
      status: 'Chunking 1.2k/s',
      details: 'Hybrid dense/sparse embeddings, real-time context retrieval, and model fallback routing.'
    },
    {
      id: 'storage',
      title: 'Distributed Storage',
      type: 'Persistence Layer',
      status: 'Encrypted AES-256',
      details: 'Multi-region PostgreSQL with read-replicas, Redis caching, and automated snapshots.'
    }
  ];

  return (
    <section id="architecture" className="py-24 relative bg-[#07090E] border-t border-white/5 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-white/10 text-xs font-mono text-[#00E5FF] mb-4">
            <Network className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>Section 05 — Architecture & Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Connected enterprise <span className="text-gradient-cyan">infrastructure topology</span>.
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Click nodes below to inspect how Planex Software engineers connected data pipelines, microservices, and AI vector intelligence.
          </p>
        </div>

        {/* Node Topology Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Network Map */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-white/10 relative min-h-[400px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-[#00E5FF] animate-pulse" />
                <span className="text-xs font-mono text-white">LIVE_TOPOLOGY_VIEWER // V4</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                SYSTEM HEALTH 100%
              </span>
            </div>

            {/* Interactive Nodes Diagram */}
            <div className="my-8 grid grid-cols-2 gap-4">
              {nodes.map((node) => {
                const isActive = activeNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNode(node.id)}
                    className={`p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                      isActive
                        ? 'bg-[#00E5FF]/15 border-[#00E5FF] shadow-[0_0_25px_rgba(0,229,255,0.25)] scale-[1.02]'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono text-[#00E5FF]">{node.type}</span>
                      <span className="w-2 h-2 rounded-full bg-[#00E5FF]"></span>
                    </div>
                    <div className="font-bold text-white text-sm mb-1">{node.title}</div>
                    <div className="text-[11px] font-mono text-slate-400">{node.status}</div>
                  </button>
                );
              })}
            </div>

            {/* Data flow stream indicator */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>STREAM: Ingress → Mesh → AI Pipeline → Store</span>
              <span className="text-[#00E5FF]">0.4ms avg</span>
            </div>
          </div>

          {/* Node Inspector Panel */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-[#00E5FF]/30 space-y-6">
            {nodes.filter(n => n.id === activeNode).map(currentNode => (
              <div key={currentNode.id} className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/40">
                    {currentNode.type}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>ONLINE</span>
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {currentNode.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {currentNode.details}
                </p>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10 font-mono text-xs text-slate-300 space-y-1.5">
                  <p className="text-purple-400">$ pentasoft-ctl inspect node --id={currentNode.id}</p>
                  <p className="text-slate-400">[INFO] Memory utilization: 18.4%</p>
                  <p className="text-emerald-400">[OK] Encryption verification passed</p>
                  <p className="text-slate-400">[INFO] Cluster sync status: SYNCED</p>
                </div>

                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-[#00E5FF] hover:underline"
                  >
                    <span>Discuss Architecture Integration</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
