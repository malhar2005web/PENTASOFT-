import React, { useState, useEffect } from 'react';
import { Terminal, Copy, Check, Play, Pause, Server, Smartphone, Activity } from 'lucide-react';

export default function HeroTerminal() {
  const [activeTab, setActiveTab] = useState('csharp');
  const [copied, setCopied] = useState(false);
  const [isStreaming, setIsStreaming] = useState(true);
  const [logs, setLogs] = useState([
    { time: '12:04:01.002', level: 'INFO', msg: 'Kernel initialized. Allocating memory buffer pools (64MB pinned).' },
    { time: '12:04:01.014', level: 'INFO', msg: 'Kestrel HTTP/3 & gRPC endpoints listening on tcp://0.0.0.0:5001' },
    { time: '12:04:01.045', level: 'SUCCESS', msg: 'PostgreSQL connection pool ready: 100 active, 0 queued (0.42ms)' },
    { time: '12:04:01.089', level: 'INFO', msg: 'MAUI Hybrid IPC channel established: Native WebView & C# Interop' },
    { time: '12:04:01.120', level: 'BENCH', msg: 'Throughput: 124,500 req/sec | Median Latency: 0.78ms | GC Gen0: 0.0%' }
  ]);

  useEffect(() => {
    if (!isStreaming) return;
    const streamInterval = setInterval(() => {
      const msgs = [
        { level: 'INFO', msg: 'Distributed lock acquired on key: partition_08_sync' },
        { level: 'SUCCESS', msg: 'gRPC streaming payload verified: 48,000 telemetry events/sec' },
        { level: 'BENCH', msg: 'P99 Latency: 1.12ms | Memory: 42.4MB RSS | CPU: 1.8%' },
        { level: 'INFO', msg: 'MAUI Blazor DOM patched via Native Interop channel' },
        { level: 'SUCCESS', msg: 'PostgreSQL WAL batch commit: 1,200 transactions in 0.31ms' }
      ];
      const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
      const now = new Date();
      const timeStr = `${now.toTimeString().split(' ')[0]}.${String(now.getMilliseconds()).padStart(3, '0')}`;

      setLogs((prev) => [...prev.slice(-4), { time: timeStr, level: randomMsg.level, msg: randomMsg.msg }]);
    }, 2800);

    return () => clearInterval(streamInterval);
  }, [isStreaming]);

  const snippets = {
    csharp: `// High-Throughput .NET 8 ASP.NET Core Engine
var builder = WebApplication.CreateSlimBuilder(args);
builder.Services.AddSingleton<IEventChannel, RingBufferChannel>();
builder.Services.AddPooledDbContextFactory<PentaDbContext>(opt => 
    opt.UseNpgsql(connStr).UseSnakeCaseNamingConvention());

var app = builder.Build();

app.MapPost("/api/v1/telemetry", async (
    [FromBody] TelemetryBatch batch, 
    [FromServices] IEventChannel channel) => 
{
    var written = channel.TryWrite(batch.Span);
    return written ? Results.Accepted() : Results.StatusCode(429);
}).RequireRateLimiting("EnterpriseTier");`,

    maui: `// .NET MAUI Blazor Hybrid Native Bridge
public sealed class NativeHardwareBridge : INativeBridge
{
    private readonly ISecureStorage _storage;
    private readonly IBiometricAuth _biometrics;

    public async ValueTask<AuthResult> AuthenticateHardwareKeyAsync()
    {
        var isEnrolled = await _biometrics.IsAvailableAsync();
        if (!isEnrolled) return AuthResult.FallbackToHwToken();

        var token = await _biometrics.AuthenticateWithBiometricsAsync(
            "Verify authorization for enterprise transaction");
        return AuthResult.Success(token.Signatures);
    }
}`,

    grpc: `// Distributed gRPC Telemetry Stream (.NET Core)
syntax = "proto3";
package pentasoft.telemetry.v1;

service TelemetryIngestService {
  rpc StreamEvents (stream TelemetryPacket) 
      returns (StreamSummaryResponse);
  rpc QueryNodeStatus (NodeStatusRequest) 
      returns (NodeMetricsPayload);
}

message TelemetryPacket {
  uint64 sequence_id = 1;
  int64 timestamp_ns = 2;
  bytes payload_buffer = 3;
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-3xl bg-[#101210] border border-black/20 shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden font-mono text-xs text-white">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-[#181C18] border-b border-white/[0.08]">
        {/* Terminal Controls */}
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]/90 border border-[#e0443e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/90 border border-[#dea123]"></div>
          <div className="w-3 h-3 rounded-full bg-[#D4F82C] border border-[#b5db18]"></div>
          <span className="text-[11px] text-slate-300 ml-2 font-mono flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D4F82C] animate-pulse"></span>
            <span className="text-white font-bold">pentasoft-runtime</span>
            <span className="text-[#D4F82C] font-mono">// v8.4.2</span>
          </span>
        </div>

        {/* Code Tabs */}
        <div className="flex items-center space-x-1 bg-black/60 p-1 rounded-xl border border-white/10 mt-2 sm:mt-0">
          <button
            onClick={() => setActiveTab('csharp')}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all flex items-center space-x-1.5 ${
              activeTab === 'csharp' 
                ? 'bg-[#D4F82C] text-black shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Server className="w-3 h-3" />
            <span>CoreEngine.cs</span>
          </button>
          <button
            onClick={() => setActiveTab('maui')}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all flex items-center space-x-1.5 ${
              activeTab === 'maui' 
                ? 'bg-[#D4F82C] text-black shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3 h-3" />
            <span>MauiBridge.cs</span>
          </button>
          <button
            onClick={() => setActiveTab('grpc')}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all flex items-center space-x-1.5 ${
              activeTab === 'grpc' 
                ? 'bg-[#D4F82C] text-black shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Activity className="w-3 h-3" />
            <span>telemetry.proto</span>
          </button>
        </div>

        {/* Copy Action */}
        <button
          onClick={handleCopy}
          className="text-slate-400 hover:text-[#D4F82C] transition-colors p-1.5 rounded hover:bg-white/5"
          title="Copy Code"
        >
          {copied ? <Check className="w-4 h-4 text-[#D4F82C]" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      {/* Code Editor Body */}
      <div className="p-5 bg-[#0D0F0D] text-slate-200 overflow-x-auto text-[11px] leading-relaxed max-h-[260px]">
        <pre className="font-mono">
          <code>{snippets[activeTab]}</code>
        </pre>
      </div>

      {/* Bottom Live Streaming Telemetry / Logs */}
      <div className="border-t border-white/[0.08] bg-[#131613] p-4">
        <div className="flex items-center justify-between mb-2.5 text-[10px] text-slate-400 pb-2 border-b border-white/5">
          <div className="flex items-center space-x-2">
            <Terminal className="w-3.5 h-3.5 text-[#D4F82C]" />
            <span className="text-[#D4F82C] font-bold uppercase tracking-wider">Live Telemetry & Deployment Stream</span>
          </div>
          <button
            onClick={() => setIsStreaming(!isStreaming)}
            className="flex items-center space-x-1 text-[10px] text-slate-300 hover:text-[#D4F82C] px-2 py-0.5 rounded bg-black/50 border border-white/10"
          >
            {isStreaming ? (
              <>
                <Pause className="w-2.5 h-2.5 text-amber-400" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-2.5 h-2.5 text-[#D4F82C]" />
                <span>Resume</span>
              </>
            )}
          </button>
        </div>

        <div className="space-y-1.5 text-[10px] font-mono">
          {logs.map((l, i) => (
            <div key={i} className="flex items-start space-x-2 text-slate-300">
              <span className="text-slate-500 select-none">[{l.time}]</span>
              <span
                className={`font-bold ${
                  l.level === 'SUCCESS'
                    ? 'text-[#D4F82C]'
                    : l.level === 'BENCH'
                    ? 'text-emerald-400'
                    : 'text-slate-400'
                }`}
              >
                [{l.level}]
              </span>
              <span className="truncate text-slate-200">{l.msg}</span>
            </div>
          ))}
          <div className="flex items-center text-[#D4F82C] text-[10px]">
            <span>$</span>
            <span className="inline-block w-1.5 h-3 bg-[#D4F82C] ml-1 cursor-blink"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
