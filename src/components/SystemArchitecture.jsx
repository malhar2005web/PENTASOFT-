import React, { useState } from 'react';
import { Server, Activity, Database, Smartphone, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SystemArchitecture() {
  const [selectedNode, setSelectedNode] = useState('kestrel');

  const nodes = {
    ingress: {
      name: 'Envoy Security Gateway & SSL Termination',
      protocol: 'TLS 1.3 / HTTP3 Ingress',
      throughput: '140k req/s',
      latency: '0.12 ms',
      memory: '24 MB RSS',
      config: `// Envoy Ingress Filter Configuration
static_resources:
  listeners:
  - name: https_ingress
    address: { socket_address: { address: 0.0.0.0, port_value: 443 } }
    filter_chains:
    - transport_socket:
        name: envoy.transport_sockets.tls
        typed_config:
          "@type": type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.DownstreamTlsContext
          common_tls_context:
            tls_certificates: [{ certificate_chain: { filename: "/etc/ssl/cert.pem" } }]`,
      features: ['mTLS service verification', 'DDoS rate limiting token bucket', 'Dynamic circuit breaking']
    },
    kestrel: {
      name: '.NET 8 Kestrel Microservice Engine',
      protocol: 'gRPC / Binary Protobuf & REST',
      throughput: '124.5k req/s',
      latency: '0.45 ms',
      memory: '42 MB RSS',
      config: `// .NET 8 Zero-Allocation Channel Processor
public sealed class TelemetryChannelEngine
{
    private readonly Channel<TelemetrySpan> _channel = 
        Channel.CreateBounded<TelemetrySpan>(new BoundedChannelOptions(50_000)
        {
            FullMode = BoundedChannelFullMode.Wait,
            SingleReader = true,
            SingleWriter = false
        });

    public ValueTask EnqueueAsync(in TelemetrySpan span) => 
        _channel.Writer.WriteAsync(span);
}`,
      features: ['Zero-allocation memory pools (Memory<T>)', 'Asynchronous bounded Channel pipelines', 'Pooled DbContext factory']
    },
    maui: {
      name: '.NET MAUI Blazor Hybrid Mobile Client',
      protocol: 'Native C# IPC Bridge / Offline SQLite',
      throughput: '60 FPS Native Render',
      latency: '0.04 ms IPC',
      memory: '38 MB RAM',
      config: `// Native Biometric & SQLite Offline Sync
public async Task SyncOfflineQueueAsync(CancellationToken ct)
{
    var pending = await _db.Table<SyncLogEntry>()
                           .Where(x => !x.IsSynced)
                           .Take(250)
                           .ToListAsync(ct);

    if (pending.Count == 0) return;
    await _grpcClient.BatchUploadAsync(pending, ct);
    await _db.ExecuteAsync("UPDATE SyncLogEntry SET IsSynced = 1 WHERE Id IN (?)", pending.Select(x => x.Id));
}`,
      features: ['Hardware-accelerated WebView2/WebKit', 'Native biometric authentication bridge', 'Local SQLite WAL database']
    },
    database: {
      name: 'PostgreSQL 16 High-Concurrency Persistence',
      protocol: 'PgBouncer Connection Pooling',
      throughput: '32k writes/s',
      latency: '0.38 ms',
      memory: '256 MB Shared Buffers',
      config: `// PostgreSQL Partitioned Timescale WAL
CREATE TABLE enterprise_telemetry_events (
    event_id UUID NOT NULL,
    organization_id UUID NOT NULL,
    recorded_at TIMESTAMPTZ NOT NULL,
    payload JSONB NOT NULL,
    CONSTRAINT pk_telemetry PRIMARY KEY (organization_id, recorded_at, event_id)
) PARTITION BY RANGE (recorded_at);

CREATE INDEX idx_telemetry_org_time ON enterprise_telemetry_events (organization_id, recorded_at DESC);`,
      features: ['Time-series table partitioning', 'PgBouncer transaction-level connection pooling', 'Automated synchronous replication']
    }
  };

  const active = nodes[selectedNode];

  return (
    <section id="architecture" className="py-28 relative bg-[#D4F82C] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[11px] font-mono text-neutral-800 font-bold tracking-wider uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black"></span>
            <span>02 // DISTRIBUTED ARCHITECTURE TOPOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
            End-to-end system topology & execution pipeline.
          </h2>
          <p className="mt-4 text-neutral-800 text-base font-medium leading-relaxed">
            Inspect the runtime architecture connecting edge ingress, .NET 8 high-performance compute, .NET MAUI hybrid clients, and PostgreSQL persistent storage.
          </p>
        </div>

        {/* Interactive Topology Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Topology Node Selector */}
          <div className="lg:col-span-5 space-y-3">
            {[
              { id: 'ingress', title: '01. Ingress & Edge Gateway', desc: 'Envoy mTLS & DDoS Protection', metric: '0.12ms' },
              { id: 'kestrel', title: '02. Compute & Microservices', desc: '.NET 8 ASP.NET Core & gRPC', metric: '0.45ms' },
              { id: 'maui', title: '03. Hybrid Mobile Clients', desc: '.NET MAUI Blazor Hybrid Shell', metric: '60 FPS' },
              { id: 'database', title: '04. Data Layer & Storage', desc: 'PostgreSQL 16 & Redis Cluster', metric: '0.38ms' }
            ].map((node) => {
              const isSelected = selectedNode === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-200 border flex items-center justify-between shadow-sm ${
                    isSelected
                      ? 'bg-black text-white border-black shadow-lg scale-[1.02]'
                      : 'bg-white/90 border-black/10 text-neutral-800 hover:bg-white'
                  }`}
                >
                  <div>
                    <div className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-black'}`}>{node.title}</div>
                    <div className={`text-xs mt-0.5 ${isSelected ? 'text-neutral-300' : 'text-neutral-600'}`}>{node.desc}</div>
                  </div>
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full ${
                    isSelected ? 'bg-[#D4F82C] text-black shadow-md' : 'bg-neutral-100 text-black'
                  }`}>
                    {node.metric}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Node Inspector Panel */}
          <div className="lg:col-span-7">
            <div className="bg-[#101210] rounded-3xl p-8 border border-black/20 text-white shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono text-[#D4F82C] font-bold uppercase tracking-wider block mb-1">
                    ACTIVE NODE INSPECTION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {active.name}
                  </h3>
                </div>
                <div className="flex items-center space-x-3 text-xs font-mono">
                  <span className="text-neutral-400">Memory: <strong className="text-white">{active.memory}</strong></span>
                  <span className="text-neutral-400">P50: <strong className="text-[#D4F82C]">{active.latency}</strong></span>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="rounded-2xl bg-[#080908] border border-white/10 p-4 overflow-x-auto mb-6 shadow-inner">
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 border-b border-white/5 pb-2 mb-3">
                  <span>SPECIFICATION / SOURCE</span>
                  <span className="text-[#D4F82C] font-bold">{active.protocol}</span>
                </div>
                <pre className="text-[11px] font-mono text-neutral-200 leading-relaxed">
                  <code>{active.config}</code>
                </pre>
              </div>

              {/* Verified Features Checklist */}
              <div className="space-y-2.5">
                <div className="text-[11px] font-mono uppercase text-[#D4F82C] tracking-wider font-bold">Architectural Invariants:</div>
                {active.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs text-neutral-200 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-[#D4F82C] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
