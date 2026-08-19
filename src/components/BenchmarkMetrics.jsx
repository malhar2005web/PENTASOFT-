import React from 'react';
import { Activity, ShieldCheck, Cpu, Zap, Check } from 'lucide-react';

export default function BenchmarkMetrics() {
  const benchmarks = [
    {
      metric: '0.78 ms',
      label: 'Median HTTP/3 Ingress Latency',
      subtext: 'Measured on Kestrel socket engine with zero-allocation Span<T> buffer parsing.'
    },
    {
      metric: '124,500 req/s',
      label: 'Single-Node Throughput (P99 < 2ms)',
      subtext: 'Sustained load testing with wrk2 on 8-core Linux host with ASP.NET Core Minimal APIs.'
    },
    {
      metric: '42.4 MB',
      label: 'Production Working Set Memory',
      subtext: 'Optimized Native AOT & trimmed assemblies with zero heap fragmentation.'
    },
    {
      metric: '99.999%',
      label: 'Multi-Region SLA Uptime',
      subtext: 'Automated Kubernetes pod failover with active-passive PostgreSQL synchronous replication.'
    }
  ];

  const standards = [
    'Zero unmonitored external dependencies or heavy abstraction wrappers',
    'Strict OWASP Top 10 security scanning on every pull request CI build',
    'Memory-pinned ring buffer concurrency model to eliminate GC pauses',
    'Deterministic database indexes with zero table-lock migrations'
  ];

  return (
    <section id="benchmarks" className="py-28 relative bg-[#D4F82C] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[11px] font-mono text-neutral-800 font-bold tracking-wider uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black"></span>
            <span>04 // PERFORMANCE BENCHMARKS & SLA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
            Engineered for deterministic performance.
          </h2>
          <p className="mt-4 text-neutral-800 text-base font-medium leading-relaxed">
            We evaluate every technical choice through empirical performance metrics: CPU cycles, memory allocations, network round-trips, and database contention.
          </p>
        </div>

        {/* 4 Metrics Clean Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benchmarks.map((b, idx) => (
            <div key={idx} className="bg-white/95 rounded-3xl p-7 border border-black/10 shadow-sm hover-lift">
              <div className="text-3xl font-black text-black font-mono tracking-tight mb-2">
                {b.metric}
              </div>
              <div className="text-xs font-bold text-neutral-800 font-mono mb-2">
                {b.label}
              </div>
              <div className="text-xs text-neutral-600 leading-relaxed font-medium">
                {b.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Standards Clean Container */}
        <div className="bg-black text-white rounded-3xl p-8 sm:p-10 border border-black shadow-2xl">
          <div className="text-xs font-mono uppercase text-[#D4F82C] tracking-wider mb-6 font-bold flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#D4F82C]" />
            <span>MANDATORY ARCHITECTURAL INVARIANTS</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {standards.map((std, sIdx) => (
              <div key={sIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-neutral-200 font-mono">
                <div className="w-5 h-5 rounded-full bg-[#D4F82C] text-black flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{std}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
