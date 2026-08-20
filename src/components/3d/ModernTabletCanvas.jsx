import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Target, Sparkles, TrendingUp, Cpu, Award } from 'lucide-react';

function ModernTablet3DModel({ mousePos }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    // Interactive mouse parallax tilt
    const targetRotX = 0.08 + mousePos.current.y * 0.18;
    const targetRotY = 0.12 + mousePos.current.x * 0.22;
    
    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotX, 4, delta);
    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotY, 4, delta);
  });

  return (
    <group ref={groupRef} position={[0, -0.1, 0]}>
      
      {/* Sleek Modern iPad Aluminum Body Chassis */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 4.4, 0.12]} />
        <meshStandardMaterial
          color="#1e2430"
          metalness={0.88}
          roughness={0.25}
        />
      </mesh>

      {/* Screen Front Glass Bezel */}
      <mesh position={[0, 0, 0.065]} receiveShadow>
        <planeGeometry args={[2.95, 4.15]} />
        <meshPhysicalMaterial
          color="#06090e"
          metalness={0.1}
          roughness={0.05}
          reflectivity={0.95}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>

      {/* iPad Top Camera Dot */}
      <mesh position={[0, 1.95, 0.07]}>
        <circleGeometry args={[0.03, 16]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* Modern High-Tech iPad Screen Interface (Mission & Vision) */}
      <Html
        position={[0, 0, 0.08]}
        center
        distanceFactor={5.2}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >
        <div className="w-[305px] sm:w-[325px] p-4.5 rounded-2xl bg-[#090d16]/95 border border-cyan-500/30 text-white shadow-2xl space-y-3.5 backdrop-blur-xl">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="font-mono text-[10px] text-cyan-400 font-bold tracking-widest uppercase">
                PentaSoft OS // Cloud Suite
              </span>
            </div>
            <span className="text-[9px] font-mono text-slate-400 font-semibold">v3.8 LIVE</span>
          </div>

          {/* Our Mission */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <div className="flex items-center space-x-1.5 text-cyan-300 font-mono font-bold text-[10.5px]">
              <Target className="w-3.5 h-3.5" />
              <span>OUR MISSION</span>
            </div>
            <p className="text-[10px] leading-relaxed text-slate-300 font-medium">
              Empowering businesses with reliable, user-friendly software that maximizes operational productivity and accuracy.
            </p>
          </div>

          {/* Our Vision */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <div className="flex items-center space-x-1.5 text-[#D4F82C] font-mono font-bold text-[10.5px]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR VISION</span>
            </div>
            <p className="text-[10px] leading-relaxed text-slate-300 font-medium">
              To be the most trusted technology partner for industrial and commercial enterprises across India.
            </p>
          </div>

          {/* Live Metrics Widget */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-center">
              <div className="text-[9px] font-mono text-cyan-400 font-bold">SYSTEM UPTIME</div>
              <div className="text-sm font-mono font-black text-white">99.999%</div>
            </div>
            <div className="p-2 rounded-lg bg-lime-950/40 border border-[#D4F82C]/20 text-center">
              <div className="text-[9px] font-mono text-[#D4F82C] font-bold">CLIENT SATISFACTION</div>
              <div className="text-sm font-mono font-black text-white">100%</div>
            </div>
          </div>

        </div>
      </Html>
    </group>
  );
}

export default function ModernTabletCanvas() {
  const mousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mousePos.current = { x, y };
  };

  const handleMouseLeave = () => {
    mousePos.current = { x: 0, y: 0 };
  };

  return (
    <div 
      className="relative w-full h-[520px] sm:h-[560px] rounded-3xl overflow-hidden liquid-glass-card p-4 sm:p-6 flex flex-col justify-between group bg-black text-white border-black/20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card Header */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#D4F82C] uppercase tracking-wider">
          <Target className="w-4 h-4 text-[#D4F82C]" />
          <span>OUR MISSION & VISION</span>
        </div>
        <span className="text-[10px] font-mono font-black px-2.5 py-1 rounded-full bg-[#D4F82C] text-black">
          FUTURE // 3D TABLET
        </span>
      </div>

      {/* 3D WebGL Canvas */}
      <div className="absolute inset-0 top-12 bottom-12">
        <Canvas
          camera={{ position: [0, 0, 5.0], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[6, 8, 6]} intensity={2.6} color="#ffffff" />
          <directionalLight position={[-6, -4, 4]} intensity={1.2} color="#06b6d4" />
          <pointLight position={[0, 1, 3]} intensity={1.8} color="#38bdf8" />
          <pointLight position={[0, -2, 2]} intensity={1.2} color="#D4F82C" />

          <Suspense fallback={null}>
            <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.35}>
              <ModernTablet3DModel mousePos={mousePos} />
            </Float>
          </Suspense>
        </Canvas>
      </div>

      {/* Card Footer */}
      <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold text-slate-400">
        <span className="text-[#D4F82C]">PAN-INDIA CLIENT BASE</span>
        <span>MIRA ROAD, MUMBAI HQ</span>
      </div>
    </div>
  );
}
