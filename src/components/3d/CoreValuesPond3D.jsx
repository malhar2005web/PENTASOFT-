import React, { useRef, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { Html, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { Zap, ShieldCheck, HeartHandshake, Award, Target, Users, Sparkles } from 'lucide-react';

const VALUES_DATA = [
  {
    id: 'innovation',
    title: 'Innovation',
    icon: Zap,
    desc: 'Continuously developing smarter, scalable, and modern software solutions for evolving industry needs.',
    position: [-2.3, 0.35, -1.8],
    rotation: [0.15, 0.4, -0.05],
    scale: 0.95,
    meshIdx: 0,
    texture: '/models/rocks/RockSet/RockTexture1.JPG'
  },
  {
    id: 'quality',
    title: 'Quality & Reliability',
    icon: ShieldCheck,
    desc: 'Delivering secure, robust, and dependable software architectures that run mission-critical operations 24/7.',
    position: [2.3, 0.35, -1.8],
    rotation: [-0.1, -0.5, 0.1],
    scale: 0.95,
    meshIdx: 1,
    texture: '/models/rocks/RockSet/RockTexture2.JPG'
  },
  {
    id: 'integrity',
    title: 'Integrity',
    icon: Award,
    desc: 'Building enduring client trust across 3 decades through honesty, transparency, and relentless commitment.',
    position: [-3.3, 0.25, 0.2],
    rotation: [0.2, 0.8, -0.1],
    scale: 1.0,
    meshIdx: 2,
    texture: '/models/rocks/RockSet/Rock5.jpg'
  },
  {
    id: 'customer',
    title: 'Customer Focus',
    icon: HeartHandshake,
    desc: 'Understanding unique operational workflows and engineering the exact right solutions tailored for each client.',
    position: [3.3, 0.25, 0.2],
    rotation: [0.1, -0.7, 0.05],
    scale: 0.95,
    meshIdx: 3,
    texture: '/models/rocks/RockSet/Rock6.jpg'
  },
  {
    id: 'improvement',
    title: 'Continuous Improvement',
    icon: Target,
    desc: 'Constantly upgrading our software suites with the latest cloud, mobile, and automation technologies.',
    position: [-1.8, 0.15, 2.0],
    rotation: [0.3, 0.2, 0.1],
    scale: 0.95,
    meshIdx: 4,
    texture: '/models/rocks/RockSet/RockTexture1.JPG'
  },
  {
    id: 'support',
    title: 'Dedicated Support',
    icon: Users,
    desc: 'Providing responsive, experienced technical support, training, and annual maintenance for our partners.',
    position: [1.8, 0.15, 2.0],
    rotation: [-0.2, -0.3, 0.05],
    scale: 0.98,
    meshIdx: 1, // Use solid 3D rock geometry instead of plane
    texture: '/models/rocks/RockSet/RockTexture2.JPG'
  }
];

// Individual 3D Interactive Rock
function SingleRock3D({ data, objModel, activeIdx, setActiveIdx, idx }) {
  const meshRef = useRef();
  const isHovered = activeIdx === idx;
  const IconComp = data.icon;

  const rockGeometry = useMemo(() => {
    if (!objModel || !objModel.children || objModel.children.length === 0) return null;
    // Pick rock meshes (exclude index 5 which was the plane)
    const validIdx = data.meshIdx % Math.min(5, objModel.children.length);
    const child = objModel.children[validIdx];
    if (child && child.geometry) {
      const geom = child.geometry.clone();
      geom.center();
      geom.computeVertexNormals();
      return geom;
    }
    return null;
  }, [objModel, data.meshIdx]);

  const texture = useTexture(data.texture);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Elevate up in Y and scale on hover
    const targetY = data.position[1] + (isHovered ? 0.9 : 0);
    const targetScale = data.scale * (isHovered ? 1.25 : 1.0);
    
    meshRef.current.position.y = THREE.MathUtils.damp(meshRef.current.position.y, targetY, 7, delta);
    meshRef.current.scale.setScalar(THREE.MathUtils.damp(meshRef.current.scale.x, targetScale, 7, delta));
    
    if (!isHovered) {
      meshRef.current.rotation.y = data.rotation[1] + Math.sin(state.clock.elapsedTime * 0.7 + idx) * 0.04;
    } else {
      meshRef.current.rotation.y = THREE.MathUtils.damp(meshRef.current.rotation.y, data.rotation[1] + 0.25, 7, delta);
    }
  });

  if (!rockGeometry) return null;

  return (
    <group position={[data.position[0], data.position[1], data.position[2]]} rotation={data.rotation}>
      <mesh
        ref={meshRef}
        geometry={rockGeometry}
        castShadow
        receiveShadow
        onPointerOver={(e) => {
          e.stopPropagation();
          setActiveIdx(idx);
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
          roughness={0.65}
          metalness={0.1}
          bumpScale={0.08}
          color={isHovered ? '#ffffff' : '#dcd4c6'}
          emissive={isHovered ? '#D4F82C' : '#000000'}
          emissiveIntensity={isHovered ? 0.4 : 0}
        />

        {/* Clean 3D Floating Value Badge */}
        <Html
          position={[0, 1.2, 0]}
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
            {/* Title Pill (Always visible, single 1-2 words) */}
            <div
              className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-mono font-black transition-all shadow-xl ${
                isHovered
                  ? 'bg-black text-[#D4F82C] border-2 border-[#D4F82C] shadow-[0_0_25px_rgba(212,248,44,0.9)] scale-105'
                  : 'bg-black text-white border border-white/30 shadow-md hover:bg-neutral-900'
              }`}
            >
              <IconComp className={`w-3.5 h-3.5 ${isHovered ? 'text-[#D4F82C]' : 'text-white'}`} />
              <span>{data.title}</span>
            </div>

            {/* Detailed Description (ONLY visible when rock is hovered/elevated) */}
            {isHovered && (
              <div className="mt-2.5 p-3.5 rounded-2xl bg-black text-white text-[11px] leading-relaxed font-semibold border-2 border-[#D4F82C]/70 shadow-[0_20px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
                {data.desc}
              </div>
            )}
          </div>
        </Html>
      </mesh>
    </group>
  );
}

// 3D Circular Crystal Blue Pond with Real-Time Waves
function CrystalBluePondBasin() {
  const geometryRef = useRef();

  useFrame((state) => {
    if (!geometryRef.current) return;
    const pos = geometryRef.current.attributes.position;
    const time = state.clock.getElapsedTime() * 2.5;

    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i);
      const v = pos.getY(i);
      const dist = Math.sqrt(u * u + v * v);
      
      // Multi-frequency wave ripples
      const z =
        Math.sin(dist * 4.0 - time) * 0.09 +
        Math.cos(u * 2.5 + time) * 0.04 +
        Math.sin(v * 2.5 + time) * 0.04;

      pos.setZ(i, z);
    }
    pos.needsUpdate = true;
    geometryRef.current.computeVertexNormals();
  });

  return (
    <group position={[0, -0.35, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      
      {/* Circular Deep Pool Bed Basin */}
      <mesh position={[0, 0, -0.1]}>
        <circleGeometry args={[2.8, 64]} />
        <meshStandardMaterial color="#023859" roughness={0.3} />
      </mesh>

      {/* Crystal Clear Blue Water Surface */}
      <mesh receiveShadow>
        <circleGeometry ref={geometryRef} args={[2.75, 64]} />
        <meshPhysicalMaterial
          color="#0284c7"
          emissive="#0369a1"
          emissiveIntensity={0.25}
          roughness={0.06}
          metalness={0.12}
          transmission={0.75}
          ior={1.333}
          thickness={1.6}
          reflectivity={0.95}
          clearcoat={1}
          clearcoatRoughness={0.03}
        />
      </mesh>

      {/* Radiant Caustic Rim */}
      <mesh position={[0, 0, 0.05]}>
        <ringGeometry args={[2.5, 2.75, 64]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>

      {/* Center Glowing Penta Core Emblem */}
      <mesh position={[0, 0, 0.1]}>
        <ringGeometry args={[0.3, 0.42, 32]} />
        <meshBasicMaterial color="#D4F82C" transparent opacity={0.85} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

// 3D Scene Root
function PondScene({ activeIdx, setActiveIdx }) {
  const obj = useLoader(OBJLoader, '/models/rocks/RockSet/RockSet.obj');

  return (
    <>
      <ambientLight intensity={1.6} />
      
      {/* Sunlight & Atmospheric Lighting */}
      <directionalLight
        position={[6, 12, 6]}
        intensity={2.8}
        color="#ffffff"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-6, 6, -4]} intensity={1.2} color="#38bdf8" />
      <pointLight position={[0, 2.5, 0]} intensity={2.2} color="#38bdf8" distance={9} />
      <pointLight position={[0, 0.6, 0]} intensity={1.8} color="#D4F82C" distance={6} />

      {/* Circular Crystal Blue Water Pond */}
      <CrystalBluePondBasin />

      {/* 6 Circularly Interlocked 3D Stepping Stones */}
      {VALUES_DATA.map((val, idx) => (
        <SingleRock3D
          key={val.id}
          data={val}
          objModel={obj}
          idx={idx}
          activeIdx={activeIdx}
          setActiveIdx={setActiveIdx}
        />
      ))}
    </>
  );
}

export default function CoreValuesPond3D() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <div className="relative w-full max-w-5xl mx-auto my-6 select-none">
      
      {/* Pure WebGL 3D Canvas Stage */}
      <div className="relative w-full aspect-[16/10] max-h-[660px] min-h-[480px]">
        <Canvas
          shadows
          camera={{ position: [0, 5.8, 7.8], fov: 42 }}
          gl={{ antialias: true, alpha: true }}
          onPointerMissed={() => setActiveIdx(null)}
        >
          <Suspense fallback={null}>
            <PondScene activeIdx={activeIdx} setActiveIdx={setActiveIdx} />
          </Suspense>
        </Canvas>
      </div>

      {/* Subtitle helper */}
      <div className="text-center mt-3 text-xs font-mono font-bold text-neutral-800 flex items-center justify-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-black animate-ping"></span>
        <span>HOVER OVER ANY 3D ROCK TO ELEVATE IN 3D & REVEAL THE VALUE PRINCIPLE</span>
      </div>

    </div>
  );
}
