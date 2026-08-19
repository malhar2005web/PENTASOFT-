import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle, Code, Layers, FileCode } from 'lucide-react';

export default function EngineeringBlueprints() {
  const [activeBlueprint, setActiveBlueprint] = useState(null);

  const blueprints = [
    {
      id: 'aurastream',
      code: 'BP-01-NET8',
      title: 'High-Throughput Telemetry Ingestion Pipeline',
      type: 'Distributed Backend Architecture',
      description: 'Zero-allocation C# ASP.NET Core ingestion gateway processing 150,000 telemetry events per second with bounded channels and batch inserts into partitioned PostgreSQL tables.',
      stack: ['.NET 8 C#', 'ASP.NET Core Minimal APIs', 'System.Threading.Channels', 'PostgreSQL 16 Partitioning', 'PgBouncer'],
      specs: [
        'Bounded channel in-memory queue with 50,000 capacity per worker pod',
        'Bulk COPY streaming directly to PostgreSQL WAL with 0.35ms median commit',
        'Zero garbage collection allocations on request hot path (Span<T> and Memory<T>)'
      ]
    },
    {
      id: 'sentinel',
      code: 'BP-02-MAUI',
      title: 'Cross-Platform Enterprise Mobile Hybrid Suite',
      type: '.NET MAUI Blazor Hybrid System',
      description: 'Single codebase enterprise field operations client running on iOS, Android, and Windows with offline-first SQLite synchronization and biometric security token storage.',
      stack: ['.NET MAUI 8', 'Blazor Hybrid', 'SQLite Encryption Extension (SEE)', 'gRPC Interop', 'Tailwind CSS'],
      specs: [
        'Bidirectional offline delta-sync protocol with Conflict-Free Replicated Data Types (CRDT)',
        'Biometric authentication with Android Keystore & Apple Secure Enclave hardware binding',
        'Native IPC bridge maintaining 60 FPS UI rendering with zero bridge overhead'
      ]
    },
    {
      id: 'omnimesh',
      code: 'BP-03-GRPC',
      title: 'Distributed Multi-Region Service Mesh',
      type: 'Microservices & Infrastructure',
      description: 'Resilient event-driven microservices topology communicating over mTLS gRPC with automatic circuit breaking, distributed tracing, and zero-downtime canary updates.',
      stack: ['gRPC Protobuf', 'Envoy Proxy', 'OpenTelemetry', 'Kubernetes Helm', 'Terraform'],
      specs: [
        'Sub-millisecond serialization overhead using Protocol Buffers v3',
        'Distributed W3C TraceContext propagation across all service boundaries',
        'Automated blue/green deployment orchestration with health-check rollback gates'
      ]
    }
  ];

  return (
    <section id="blueprints" className="py-28 relative bg-[#D4F82C] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="text-[11px] font-mono text-neutral-800 font-bold tracking-wider uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <span>03 // ARCHITECTURAL BLUEPRINTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
              Production-tested architectural blueprints.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-neutral-800 text-xs font-mono font-medium max-w-sm">
            Concrete architectural patterns applied across enterprise clients and high-concurrency systems.
          </div>
        </div>

        {/* 3 Blueprints Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blueprints.map((bp) => (
            <div
              key={bp.id}
              className="bg-white/95 rounded-3xl p-7 border border-black/10 shadow-sm hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-black text-[#D4F82C] text-[10px] font-mono font-bold shadow-sm">
                    {bp.code}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-neutral-600">{bp.type}</span>
                </div>

                <h3 className="text-xl font-bold text-black mb-3 leading-snug">
                  {bp.title}
                </h3>

                <p className="text-xs text-neutral-700 leading-relaxed mb-6 font-medium">
                  {bp.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {bp.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-800 text-[10px] font-mono font-semibold border border-black/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-neutral-500">PENTASOFT LABS</span>
                <button
                  onClick={() => setActiveBlueprint(bp)}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-black hover:text-neutral-700 transition-colors"
                >
                  <span>Inspect Specs</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Blueprint Detail Modal */}
      {activeBlueprint && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="bg-[#101210] border border-white/10 text-white max-w-2xl w-full p-8 rounded-3xl shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-[#D4F82C] font-bold">{activeBlueprint.code} // {activeBlueprint.type}</span>
              <button
                onClick={() => setActiveBlueprint(null)}
                className="text-neutral-400 hover:text-white text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/10"
              >
                [ESC CLOSE]
              </button>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{activeBlueprint.title}</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">{activeBlueprint.description}</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-[#D4F82C] tracking-wider font-bold">Engineered Architectural Specifications:</h4>
              {activeBlueprint.specs.map((item, dIdx) => (
                <div key={dIdx} className="flex items-start space-x-2.5 text-xs text-neutral-200 font-mono">
                  <CheckCircle className="w-4 h-4 text-[#D4F82C] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end space-x-3">
              <button
                onClick={() => setActiveBlueprint(null)}
                className="px-5 py-2.5 rounded-full text-xs font-mono bg-white/10 text-white hover:bg-white/20"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setActiveBlueprint(null)}
                className="px-5 py-2.5 rounded-full text-xs font-bold bg-[#D4F82C] text-black hover:bg-[#bce01c]"
              >
                Schedule Technical Review
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
