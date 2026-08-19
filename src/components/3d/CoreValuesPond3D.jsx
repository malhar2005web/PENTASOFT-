import React, { useRef, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { Float, Html, useTexture, Center } from '@react-three/drei';
import * as THREE from 'three';
import { Zap, ShieldCheck, HeartHandshake, Award, Target, Users, Sparkles } from 'lucide-react';

const VALUES_DATA = [
  {
    id: 'innovation',
    title: 'Innovation',
    icon: Zap,
    desc: 'Continuously developing smarter, scalable, and modern software solutions for evolving industry needs.',
    position: [-3.4, 0.2, -1.6],
    rotation: [0.15, 0.4, -0.05],
    scale: 0.85,
    meshIdx: 0,
    texture: '/models/rocks/RockSet/RockTexture1.JPG'
  },
  {
    id: 'quality',
    title: 'Quality & Reliability',
    icon: ShieldCheck,
    desc: 'Delivering secure, robust, and dependable software architectures that run mission-critical operations 24/7.',
    position: [3.4, 0.2, -1.6],
    rotation: [-0.1, -0.5, 0.1],
    scale: 0.9,
    meshIdx: 1,
    texture: '/models/rocks/RockSet/RockTexture2.JPG'
  },
  {
    id: 'integrity',
    title: 'Integrity',
    icon: Award,
    desc: 'Building enduring client trust across 3 decades through honesty, transparency, and relentless commitment.',
    position: [-4.2, -0.2, 0.8],
    rotation: [0.2, 0.8, -0.1],
    scale: 0.95,
    meshIdx: 2,
    texture: '/models/rocks/RockSet/Rock5.jpg'
  },
  {
    id: 'customer',
    title: 'Customer Focus',
    icon: HeartHandshake,
    desc: 'Understanding unique operational workflows and engineering the exact right solutions tailored for each client.',
    position: [4.2, -0.2, 0.8],
    rotation: [0.1, -0.7, 0.05],
    scale: 0.88,
    meshIdx: 3,
    texture: '/models/rocks/RockSet/Rock6.jpg'
  },
  {
    id: 'improvement',
    title: 'Continuous Improvement',
    icon: Target,
    desc: 'Constantly upgrading our software suites with the latest cloud, mobile, and automation technologies.',
    position: [-2.2, -0.5, 2.6],
    rotation: [0.3, 0.2, 0.1],
    scale: 0.92,
    meshIdx: 4,
    texture: '/models/rocks/RockSet/RockTexture1.JPG'
  },
  {
    id: 'support',
    title: 'Dedicated Support',
    icon: Users,
    desc: 'Providing responsive, experienced technical support, training, and annual maintenance for our partners.',
    position: [2.2, -0.5, 2.6],
    rotation: [-0.2, -0.3, 0.05],
    scale: 0.9,
    meshIdx: 5,
    texture: '/models/rocks/RockSet/RockTexture2.JPG'
  }
];

// Individual 3D Interactive Rock Component
function SingleRock3D({ data, objModel, activeIdx, setActiveIdx, idx, setWaveTrigger }) {
  const meshRef = useRef();
  const isHovered = activeIdx === idx;
  const IconComp = data.icon;

  // Extract individual rock geometry from the loaded OBJ
  const rockGeometry = useMemo(() => {
    if (!objModel || !objModel.children || objModel.children.length === 0) return null;
    const child = objModel.children[data.meshIdx % objModel.children.length];
    if (child && child.geometry) {
      const geom = child.geometry.clone();
      geom.center();
      geom.computeVertexNormals();
      return geom;
    }
    return null;
  }, [objModel, data.meshIdx]);

  // Load rock texture
  const texture = useTexture(data.texture);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  // Smooth Hover Animation in 3D Space
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Target position (lifts up in Y when hovered)
    const targetY = data.position[1] + (isHovered ? 0.75 : 0);
    const targetScale = data.scale * (isHovered ? 1.18 : 1.0);
    
    meshRef.current.position.y = THREE.MathUtils.damp(meshRef.current.position.y, targetY, 6, delta);
    meshRef.current.scale.setScalar(THREE.MathUtils.damp(meshRef.current.scale.x, targetScale, 6, delta));
    
    // Slight organic floating motion
    if (!isHovered) {
      meshRef.current.rotation.y = data.rotation[1] + Math.sin(state.clock.elapsedTime * 0.8 + idx) * 0.04;
    } else {
      meshRef.current.rotation.y = THREE.MathUtils.damp(meshRef.current.rotation.y, data.rotation[1] + 0.15, 6, delta);
    }
  });

  if (!rockGeometry) return null;

  return (
    <group
      position={[data.position[0], data.position[1], data.position[2]]}
      rotation={data.rotation}
    >
      <mesh
        ref={meshRef}
        geometry={rockGeometry}
        castShadow
        receiveShadow
        onPointerOver={(e) => {
          e.stopPropagation();
          setActiveIdx(idx);
          setWaveTrigger((prev) => prev + 1);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setActiveIdx(null);
        }}
        onClick={(e) => {
          e.stopPropagation();
          setActiveIdx(isHovered ? null : idx);
        }}
      >
        <meshStandardMaterial
          map={texture}
          roughness={0.7}
          metalness={0.15}
          bumpScale={0.05}
          color={isHovered ? '#ffffff' : '#e0d8c8'}
          emissive={isHovered ? '#D4F82C' : '#000000'}
          emissiveIntensity={isHovered ? 0.25 : 0}
        />

        {/* Floating Seamless HTML Value Badge directly on the 3D Rock */}
        <Html
          position={[0, 1.1, 0]}
          center
          distanceFactor={11}
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          <div
            className={`transition-all duration-300 transform flex flex-col items-center text-center ${
              isHovered ? 'scale-110 -translate-y-2' : 'scale-95'
            }`}
            style={{ width: '220px' }}
          >
            {/* Value Title Pill */}
            <div
              className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold transition-all shadow-lg ${
                isHovered
                  ? 'bg-black text-[#D4F82C] border-2 border-[#D4F82C] shadow-[0_0_20px_rgba(212,248,44,0.6)]'
                  : 'bg-black/80 text-white backdrop-blur-md border border-white/20'
              }`}
            >
              <IconComp className={`w-3.5 h-3.5 ${isHovered ? 'text-[#D4F82C]' : 'text-white'}`} />
              <span>{data.title}</span>
            </div>

            {/* Description (reveals crisp and readable on hover) */}
            <div
              className={`mt-2 p-2.5 rounded-xl text-[11px] leading-relaxed font-semibold transition-all duration-200 ${
                isHovered
                  ? 'bg-black/90 text-white border border-[#D4F82C]/50 shadow-2xl backdrop-blur-lg opacity-100'
                  : 'bg-black/40 text-slate-200 backdrop-blur-sm opacity-75'
              }`}
            >
              {data.desc}
            </div>
          </div>
        </Html>
      </mesh>
    </group>
  );
}

// 3D Procedural Live Interactive Water Surface
function DynamicWaterSurface({ waveTrigger }) {
  const waterRef = useRef();
  const geometryRef = useRef();

  useFrame((state) => {
    if (!geometryRef.current) return;
    const pos = geometryRef.current.attributes.position;
    const time = state.clock.getElapsedTime() * 2.2;

    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i);
      const v = pos.getY(i);
      const dist = Math.sqrt(u * u + v * v);
      
      // Multi-frequency organic water ripples & waves
      const z =
        Math.sin(dist * 3.5 - time) * 0.08 +
        Math.cos(u * 2.5 + time * 0.8) * 0.04 +
        Math.sin(v * 2.5 + time * 0.8) * 0.04;

      pos.setZ(i, z);
    }
    pos.needsUpdate = true;
    geometryRef.current.computeVertexNormals();
  });

  return (
    <group position={[0, -0.6, 0.4]} rotation={[-Math.PI / 2.2, 0, 0]}>
      {/* Deep Pond Basin Glow */}
      <mesh position={[0, 0, -0.1]}>
        <circleGeometry args={[3.2, 48]} />
        <meshBasicMaterial color="#061814" />
      </mesh>

      {/* 3D Dynamic Animated Water Mesh */}
      <mesh ref={waterRef} receiveShadow>
        <planeGeometry ref={geometryRef} args={[6.2, 4.8, 48, 48]} />
        <meshPhysicalMaterial
          color="#0d3b33"
          roughness={0.1}
          metalness={0.1}
          transmission={0.65}
          ior={1.333}
          thickness={1.2}
          reflectivity={0.9}
          clearcoat={1}
          clearcoatRoughness={0.05}
          wireframe={false}
        />
      </mesh>

      {/* Central Glowing Core Water Emblem */}
      <mesh position={[0, 0, 0.15]}>
        <ringGeometry args={[0.3, 0.42, 32]} />
        <meshBasicMaterial color="#D4F82C" transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

// 3D Scene Root with Lighting
function PondScene({ activeIdx, setActiveIdx, waveTrigger, setWaveTrigger }) {
  const obj = useLoader(OBJLoader, '/models/rocks/RockSet/RockSet.obj');

  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight
        position={[6, 10, 8]}
        intensity={2.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0001}
      />
      <directionalLight position={[-6, 8, -4]} intensity={0.8} color="#D4F82C" />
      <pointLight position={[0, 2, 0]} intensity={1.5} color="#D4F82C" distance={8} />

      {/* 3D Dynamic Water Surface */}
      <DynamicWaterSurface waveTrigger={waveTrigger} />

      {/* 6 Real 3D Stepping Rocks */}
      {VALUES_DATA.map((val, idx) => (
        <SingleRock3D
          key={val.id}
          data={val}
          objModel={obj}
          idx={idx}
          activeIdx={activeIdx}
          setActiveIdx={setActiveIdx}
          setWaveTrigger={setWaveTrigger}
        />
      ))}
    </>
  );
}

export default function CoreValuesPond3D() {
  const [activeIdx, setActiveIdx] = useState(null);
  const [waveTrigger, setWaveTrigger] = useState(0);

  return (
    <div className="relative w-full max-w-6xl mx-auto my-6 select-none">
      
      {/* WebGL 3D Canvas Stage */}
      <div className="relative w-full aspect-[16/10] max-h-[700px] min-h-[480px]">
        
        {/* Photorealistic Nature Pond Background */}
        <img
          src="/images/core-values-pond.jpg"
          alt="PentaSoft Nature Pond"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-xl"
        />

        {/* Real-Time Three.js 3D WebGL Canvas for 3D Rocks & 3D Dynamic Water */}
        <div className="absolute inset-0 z-20">
          <Canvas
            shadows
            camera={{ position: [0, 6, 8.5], fov: 42 }}
            gl={{ antialias: true, alpha: true }}
            onPointerMissed={() => setActiveIdx(null)}
          >
            <Suspense fallback={null}>
              <PondScene
                activeIdx={activeIdx}
                setActiveIdx={setActiveIdx}
                waveTrigger={waveTrigger}
                setWaveTrigger={setWaveTrigger}
              />
            </Suspense>
          </Canvas>
        </div>

      </div>

      {/* Interaction Guide */}
      <div className="text-center mt-4 text-xs font-mono font-bold text-neutral-800 flex items-center justify-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-black animate-ping"></span>
        <span>HOVER OVER ANY 3D ROCK TO ELEVATE IN 3D & GENERATE LIVE WATER WAVES</span>
      </div>

    </div>
  );
}
