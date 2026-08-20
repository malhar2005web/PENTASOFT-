import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Building, Calendar, Users, ShieldCheck } from 'lucide-react';

function StoneTabletModel({ mousePos }) {
  const { scene } = useGLTF('/models/stone_tablet.glb');
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    // Interactive subtle mouse parallax tilt
    const targetRotX = 0.05 + mousePos.current.y * 0.15;
    const targetRotY = -0.1 + mousePos.current.x * 0.2;
    
    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotX, 4, delta);
    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotY, 4, delta);
  });

  return (
    <group ref={groupRef} position={[0, -0.4, 0]}>
      {/* 3D Stone Tablet GLB */}
      <primitive 
        object={scene} 
        scale={2.2} 
        position={[0, -0.6, 0]}
        rotation={[0, 0, 0]}
      />

      {/* Engraved Ancient Stone Inscription UI */}
      <Html
        position={[0, 0.4, 0.45]}
        center
        distanceFactor={6.2}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >
        <div className="w-[310px] sm:w-[330px] p-5 rounded-2xl bg-black/75 backdrop-blur-md border border-amber-900/40 shadow-2xl text-[#f3ede2] space-y-4">
          
          {/* 1994 Heritage */}
          <div className="border-b border-amber-100/15 pb-3">
            <div className="flex items-center space-x-2 text-amber-300 font-mono font-black text-xs tracking-wider uppercase mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>ESTD. 1994 // PLANEX SOFTWARE</span>
            </div>
            <p className="text-[11px] leading-relaxed text-amber-50/90 font-medium">
              Established in 1994, Planex Software / PentaSoft has grown into a trusted software leader across India.
            </p>
          </div>

          {/* 30+ Years */}
          <div className="border-b border-amber-100/15 pb-3">
            <div className="flex items-center space-x-2 text-amber-300 font-mono font-black text-xs tracking-wider uppercase mb-1">
              <Users className="w-3.5 h-3.5" />
              <span>30+ YEARS OF EXCELLENCE</span>
            </div>
            <p className="text-[11px] leading-relaxed text-amber-50/90 font-medium">
              3 decades of continuous innovation across RMC, Crusher, ERP, SCADA integration, and Custom Cloud.
            </p>
          </div>

          {/* Our Commitment */}
          <div>
            <div className="flex items-center space-x-2 text-amber-300 font-mono font-black text-xs tracking-wider uppercase mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>OUR ROCK-SOLID COMMITMENT</span>
            </div>
            <p className="text-[11px] leading-relaxed text-amber-50/90 font-medium">
              Providing dependable, accurate, and cost-effective software solutions that drive real operational growth.
            </p>
          </div>

        </div>
      </Html>
    </group>
  );
}

useGLTF.preload('/models/stone_tablet.glb');

export default function StoneTabletCanvas() {
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
      className="relative w-full h-[520px] sm:h-[560px] rounded-3xl overflow-hidden liquid-glass-card p-4 sm:p-6 flex flex-col justify-between group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card Header */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-black/10">
        <div className="flex items-center space-x-2 text-xs font-mono font-bold text-neutral-800 uppercase tracking-wider">
          <Building className="w-4 h-4 text-black" />
          <span>COMPANY HISTORY & HERITAGE</span>
        </div>
        <span className="text-[10px] font-mono font-black px-2.5 py-1 rounded-full bg-black text-[#D4F82C]">
          1994 // 3D TABLET
        </span>
      </div>

      {/* 3D WebGL Canvas */}
      <div className="absolute inset-0 top-12 bottom-12">
        <Canvas
          camera={{ position: [0, 0.4, 5.2], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={1.8} />
          <directionalLight position={[5, 8, 5]} intensity={2.5} color="#fff6e5" castShadow />
          <directionalLight position={[-5, 4, -3]} intensity={1.0} color="#ffd79a" />
          <pointLight position={[0, 2, 3]} intensity={1.5} color="#fff" />
          
          <Suspense fallback={null}>
            <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
              <StoneTabletModel mousePos={mousePos} />
            </Float>
          </Suspense>
        </Canvas>
      </div>

      {/* Card Footer */}
      <div className="relative z-10 pt-2 border-t border-black/10 flex items-center justify-between text-xs font-mono font-bold text-neutral-900">
        <span>FOUNDED: 1994 (MUMBAI, INDIA)</span>
        <span>GST: 27AABPJ2329N1ZM</span>
      </div>
    </div>
  );
}
