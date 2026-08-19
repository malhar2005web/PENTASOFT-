import React from 'react';
import { Server, Smartphone, Activity, Database, ShieldCheck, Cloud, ArrowUpRight } from 'lucide-react';

export default function EngineeringDisciplines() {
  const disciplines = [
    {
      icon: Server,
      category: 'BACKEND ARCHITECTURE',
      title: 'High-Throughput .NET 8/9 & ASP.NET Core',
      description: 'Zero-allocation hot paths, memory-pinned buffers, and async Channel ring buffers engineered for >100k requests/second with sub-millisecond median response times.',
      tech: ['.NET 8 C#', 'ASP.NET Core Minimal APIs', 'EF Core / Dapper', 'Kestrel Socket Transport']
    },
    {
      icon: Smartphone,
      category: 'HYBRID MOBILE SYSTEMS',
      title: '.NET MAUI Blazor Hybrid Architecture',
      description: 'Single unified C# codebase deploying across Windows, macOS, iOS, and Android with direct native hardware interop and offline-first SQLite database synchronization.',
      tech: ['.NET MAUI', 'Blazor Hybrid', 'Native WebView IPC', 'SQLite WAL Sync']
    },
    {
      icon: Activity,
      category: 'STREAMING & PROTOCOLS',
      title: 'Event-Driven gRPC & Distributed Streaming',
      description: 'Binary protocol buffers, bi-directional gRPC telemetry streams, and event-driven consumer topologies built on Kafka and RabbitMQ message brokers.',
      tech: ['Protobuf / gRPC', 'Apache Kafka', 'RabbitMQ', 'Event Sourcing']
    },
    {
      icon: Database,
      category: 'DATA PERSISTENCE',
      title: 'PostgreSQL Optimization & Distributed Caching',
      description: 'High-concurrency database topology featuring connection pooling with PgBouncer, declarative table partitioning, and multi-layer Redis cluster caching.',
      tech: ['PostgreSQL 16', 'PgBouncer Pool', 'Redis Cluster', 'Time-Series Partitioning']
    },
    {
      icon: ShieldCheck,
      category: 'SECURITY ARCHITECTURE',
      title: 'Zero-Trust Authentication & Encryption',
      description: 'Enterprise OAuth2/OIDC token pipelines, strict RBAC/ABAC authorization policies, mutual TLS (mTLS) service mesh, and hardware security module integrations.',
      tech: ['OAuth2 / OIDC', 'mTLS Mesh', 'AES-256-GCM', 'OWASP Top 10 Auditing']
    },
    {
      icon: Cloud,
      category: 'INFRASTRUCTURE',
      title: 'Cloud-Native Kubernetes & Edge Gateways',
      description: 'Declarative Terraform infrastructure-as-code, Envoy proxy routing, automated blue/green canary deployments, and horizontal pod auto-scalers.',
      tech: ['Kubernetes / Helm', 'Terraform IaC', 'Envoy Gateway', 'Prometheus / Grafana']
    }
  ];

  return (
    <section id="engineering" className="py-28 relative bg-[#D4F82C] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="text-[11px] font-mono text-neutral-800 font-bold tracking-wider uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <span>01 // CORE ENGINEERING DISCIPLINES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
              Production architectures for mission-critical enterprise systems.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-neutral-800 text-sm max-w-sm font-medium leading-relaxed">
            Eliminating abstraction overhead. Every layer is built for predictable performance and clean maintainability.
          </p>
        </div>

        {/* 6 Disciplines Grid with Clean Contrast Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disciplines.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/95 rounded-3xl p-7 border border-black/10 shadow-sm hover-lift flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-[#D4F82C] group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-neutral-600 tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-neutral-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-700 leading-relaxed mb-6 font-medium">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/10">
                    {item.tech.map((t, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-neutral-100 text-black text-[10px] font-mono font-semibold border border-black/5">
                        {t}
                      </span>
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
