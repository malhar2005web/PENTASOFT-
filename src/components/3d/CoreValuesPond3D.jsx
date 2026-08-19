import React, { useRef, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { Html, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { Zap, ShieldCheck, HeartHandshake, Award, Target, Users } from 'lucide-react';

const VALUES_DATA = [
  {
    id: 'innovation',
    title: 'Innovation',
    icon: Zap,
    desc: 'Continuously developing smarter, scalable, and modern software solutions for evolving industry needs.',
    position: [-1.55, 0.15, -2.1],
    rotation: [0.1, 0.3, -0.05],
    scale: 0.88,
    meshIdx: 0,
    badgePos: [0, 0.35, 0.8], // Place badge in front so it never shoots up towards navbar
    texture: '/models/rocks/RockSet/RockTexture1.JPG'
  },
  {
    id: 'quality',
    title: 'Quality & Reliability',
    icon: ShieldCheck,
    desc: 'Delivering secure, robust, and dependable software architectures that run mission-critical operations 24/7.',
    position: [1.55, 0.15, -2.1],
    rotation: [-0.1, -0.3, 0.05],
    scale: 0.88,
    meshIdx: 1,
    badgePos: [0, 0.35, 0.8], // Place badge in front so it never shoots up towards navbar
    texture: '/models/rocks/RockSet/RockTexture2.JPG'
  },
  {
    id: 'customer',
    title: 'Customer Focus',
    icon: HeartHandshake,
    desc: 'Understanding unique operational workflows and engineering the exact right solutions tailored for each client.',
    position: [2.7, 0.1, 0.0],
    rotation: [0.05, -0.6, 0.05],
    scale: 0.9,
    meshIdx: 3,
    badgePos: [0, 1.1, 0],
    texture: '/models/rocks/RockSet/Rock6.jpg'
  },
  {
    id: 'support',
    title: 'Dedicated Support',
    icon: Users,
    desc: 'Providing responsive, experienced technical support, training, and annual maintenance for our partners.',
    position: [1.5, 0.0, 1.95],
    rotation: [-0.15, -0.25, 0.05],
    scale: 0.9,
    meshIdx: 1,
    badgePos: [0, 1.1, 0],
    texture: '/models/rocks/RockSet/RockTexture2.JPG'
  },
  {
    id: 'improvement',
    title: 'Continuous Improvement',
    icon: Target,
    desc: 'Constantly upgrading our software suites with the latest cloud, mobile, and automation technologies.',
    position: [-1.5, 0.0, 1.95],
    rotation: [0.2, 0.2, 0.05],
    scale: 0.9,
    meshIdx: 4,
    badgePos: [0, 1.1, 0],
    texture: '/models/rocks/RockSet/RockTexture1.JPG'
  },
  {
    id: 'integrity',
    title: 'Integrity',
    icon: Award,
    desc: 'Building enduring client trust across 3 decades through honesty, transparency, and relentless commitment.',
    position: [-2.7, 0.1, 0.0],
    rotation: [0.15, 0.7, -0.05],
    scale: 0.9,
    meshIdx: 2,
    badgePos: [0, 1.1, 0],
    texture: '/models/rocks/RockSet/Rock5.jpg'
  }
];

// Individual 3D Interactive Rock
function SingleRock3D({ data, objModel, activeIdx, setActiveIdx, idx }) {
  const meshRef = useRef();
  const isHovered = activeIdx === idx;
  const IconComp = data.icon;

  const rockGeometry = useMemo(() => {
    if (!objModel || !objModel.children || objModel.children.length === 0) return null;
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
    
    const targetY = data.position[1] + (isHovered ? 0.65 : 0);
    const targetScale = data.scale * (isHovered ? 1.18 : 1.0);
    
    meshRef.current.position.y = THREE.MathUtils.damp(meshRef.current.position.y, targetY, 7, delta);
    meshRef.current.scale.setScalar(THREE.MathUtils.damp(meshRef.current.scale.x, targetScale, 7, delta));
    
    if (!isHovered) {
      meshRef.current.rotation.y = data.rotation[1] + Math.sin(state.clock.elapsedTime * 0.6 + idx) * 0.03;
    } else {
      meshRef.current.rotation.y = THREE.MathUtils.damp(meshRef.current.rotation.y, data.rotation[1] + 0.2, 7, delta);
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
          roughness={0.7}
          metalness={0.1}
          bumpScale={0.08}
          color={isHovered ? '#ffffff' : '#dcd4c6'}
          emissive={isHovered ? '#D4F82C' : '#000000'}
          emissiveIntensity={isHovered ? 0.45 : 0}
        />

        {/* Clean 3D Floating Value Badge */}
        <Html
          position={data.badgePos || [0, 1.1, 0]}
          center
          distanceFactor={11}
          zIndexRange={[10, 30]}
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          <div
            className={`transition-all duration-300 transform flex flex-col items-center text-center ${
              isHovered ? 'scale-105' : 'scale-95'
            }`}
            style={{ width: '210px' }}
          >
            {/* Title Pill (Always clean 1-2 words) */}
            <div
              className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-black transition-all shadow-xl ${
                isHovered
                  ? 'bg-black text-[#D4F82C] border-2 border-[#D4F82C] shadow-[0_0_20px_rgba(212,248,44,0.9)] scale-105'
                  : 'bg-black text-white border border-white/30 shadow-md'
              }`}
            >
              <IconComp className={`w-3.5 h-3.5 ${isHovered ? 'text-[#D4F82C]' : 'text-white'}`} />
              <span>{data.title}</span>
            </div>

            {/* Description (Smoothly reveals only when rock is hovered) */}
            {isHovered && (
              <div className="mt-2 p-3 rounded-2xl bg-black text-white text-[10.5px] leading-relaxed font-semibold border-2 border-[#D4F82C]/70 shadow-[0_16px_36px_rgba(0,0,0,0.85)] backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
                {data.desc}
              </div>
            )}
          </div>
        </Html>
      </mesh>
    </group>
  );
}

// Wide Open Crystal Blue Pond Basin with Live Wave Ripples & Lily Pads
function CrystalBluePondBasin() {
  const geometryRef = useRef();

  useFrame((state) => {
    if (!geometryRef.current) return;
    const pos = geometryRef.current.attributes.position;
    const time = state.clock.getElapsedTime() * 2.2;

    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i);
      const v = pos.getY(i);
      const dist = Math.sqrt(u * u + v * v);
      
      const z =
        Math.sin(dist * 3.8 - time) * 0.065 +
        Math.cos(u * 2.2 + time) * 0.025 +
        Math.sin(v * 2.2 + time) * 0.025;

      pos.setZ(i, z);
    }
    pos.needsUpdate = true;
    geometryRef.current.computeVertexNormals();
  });

  return (
    <group position={[0, -0.25, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      
      {/* Deep Pool Bed Basin */}
      <mesh position={[0, 0, -0.18]}>
        <circleGeometry args={[2.9, 64]} />
        <meshStandardMaterial color="#022a44" roughness={0.4} />
      </mesh>

      {/* Crystal Clear Blue Water Surface */}
      <mesh receiveShadow>
        <circleGeometry ref={geometryRef} args={[2.85, 64]} />
        <meshPhysicalMaterial
          color="#0284c7"
          emissive="#0369a1"
          emissiveIntensity={0.25}
          roughness={0.04}
          metalness={0.12}
          transmission={0.8}
          ior={1.333}
          thickness={1.5}
          reflectivity={0.95}
          clearcoat={1}
          clearcoatRoughness={0.02}
        />
      </mesh>

      {/* Radiant Caustic Water Edge Rim */}
      <mesh position={[0, 0, 0.04]}>
        <ringGeometry args={[2.65, 2.85, 64]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>

      {/* Center Glowing Water Core Emblem */}
      <mesh position={[0, 0, 0.08]}>
        <ringGeometry args={[0.3, 0.44, 32]} />
        <meshBasicMaterial color="#D4F82C" transparent opacity={0.85} side={THREE.DoubleSide} />
      </mesh>

      {/* Floating Water Lily Pads on the Pond Surface */}
      <group position={[-1.0, 0.7, 0.06]} rotation={[0, 0, 0.4]}>
        <mesh>
          <circleGeometry args={[0.3, 24, 0, Math.PI * 1.85]} />
          <meshStandardMaterial color="#2d6a1d" roughness={0.6} side={THREE.DoubleSide} />
        </mesh>
      </group>

      <group position={[1.1, -0.5, 0.06]} rotation={[0, 0, -0.8]}>
        <mesh>
          <circleGeometry args={[0.26, 24, 0, Math.PI * 1.85]} />
          <meshStandardMaterial color="#245a16" roughness={0.6} side={THREE.DoubleSide} />
        </mesh>
      </group>

      <group position={[0.4, 1.1, 0.06]} rotation={[0, 0, 1.2]}>
        <mesh>
          <circleGeometry args={[0.22, 24, 0, Math.PI * 1.85]} />
          <meshStandardMaterial color="#367d23" roughness={0.6} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  );
}

// DENSE Continuous River Pebble Embankment, Reeds & Wildflowers
function DensePebbleEmbankmentAndPlants() {
  const pebbles = useMemo(() => {
    const items = [];
    const colors = [
      '#7c7468', '#948d82', '#5e5850', '#a8a297', '#45403a',
      '#857d72', '#b3aba0', '#635e56', '#524d45', '#9e968b'
    ];

    for (let i = 0; i < 90; i++) {
      const angle = (i / 90) * Math.PI * 2 + (Math.random() * 0.05 - 0.025);
      const radius = 2.55 + Math.random() * 0.4;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * (radius * 0.88);
      const size = 0.14 + Math.random() * 0.18;
      items.push({
        position: [x, -0.28 + size * 0.4, z],
        scale: [size * (0.9 + Math.random() * 0.3), size * 0.65, size * (0.9 + Math.random() * 0.3)],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        color: colors[i % colors.length]
      });
    }

    for (let i = 0; i < 110; i++) {
      const angle = (i / 110) * Math.PI * 2 + (Math.random() * 0.06 - 0.03);
      const radius = 2.9 + Math.random() * 0.65;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * (radius * 0.88);
      const size = 0.11 + Math.random() * 0.22;
      items.push({
        position: [x, -0.32 + size * 0.4, z],
        scale: [size * (0.85 + Math.random() * 0.35), size * 0.6, size * (0.85 + Math.random() * 0.35)],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        color: colors[(i + 3) % colors.length]
      });
    }

    return items;
  }, []);

  const reeds = useMemo(() => {
    const items = [];
    const grassColors = ['#4d7c0f', '#65a30d', '#3f6212', '#84cc16'];
    for (let i = 0; i < 55; i++) {
      const angle = (i / 55) * Math.PI * 2 + Math.random() * 0.2;
      const radius = 3.3 + Math.random() * 0.7;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * (radius * 0.88);
      const height = 0.4 + Math.random() * 0.45;
      items.push({
        position: [x, -0.35 + height * 0.5, z],
        scale: [0.035, height, 0.035],
        rotation: [(Math.random() - 0.5) * 0.3, Math.random() * Math.PI * 2, (Math.random() - 0.5) * 0.3],
        color: grassColors[i % grassColors.length]
      });
    }
    return items;
  }, []);

  const flowers = useMemo(() => {
    const items = [];
    const petalColors = ['#ec4899', '#db2777', '#f43f5e', '#e11d48', '#fb7185'];
    for (let i = 0; i < 32; i++) {
      const angle = (i / 32) * Math.PI * 2 + Math.random() * 0.2;
      const radius = 3.35 + Math.random() * 0.75;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * (radius * 0.88);
      const stemHeight = 0.3 + Math.random() * 0.3;
      items.push({
        position: [x, -0.35, z],
        stemHeight,
        color: petalColors[i % petalColors.length],
        scale: 0.1 + Math.random() * 0.05,
        rotation: [(Math.random() - 0.5) * 0.2, Math.random() * Math.PI * 2, (Math.random() - 0.5) * 0.2]
      });
    }
    return items;
  }, []);

  return (
    <group>
      {pebbles.map((p, idx) => (
        <mesh key={`dense-peb-${idx}`} position={p.position} scale={p.scale} rotation={p.rotation} receiveShadow>
          <dodecahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color={p.color} roughness={0.82} metalness={0.06} />
        </mesh>
      ))}

      {reeds.map((r, idx) => (
        <mesh key={`reed-${idx}`} position={r.position} scale={r.scale} rotation={r.rotation}>
          <cylinderGeometry args={[0.3, 1, 1, 5]} />
          <meshStandardMaterial color={r.color} roughness={0.6} />
        </mesh>
      ))}

      {flowers.map((f, idx) => (
        <group key={`flow-${idx}`} position={f.position} rotation={f.rotation}>
          <mesh position={[0, f.stemHeight * 0.5, 0]}>
            <cylinderGeometry args={[0.015, 0.02, f.stemHeight, 6]} />
            <meshStandardMaterial color="#3f6212" roughness={0.8} />
          </mesh>
          <mesh position={[0, f.stemHeight, 0]} scale={[f.scale, f.scale * 0.35, f.scale]}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshStandardMaterial color={f.color} roughness={0.5} emissive={f.color} emissiveIntensity={0.25} />
          </mesh>
          <mesh position={[0, f.stemHeight + 0.03, 0]} scale={[f.scale * 0.45, f.scale * 0.6, f.scale * 0.45]}>
            <coneGeometry args={[1, 1.2, 8]} />
            <meshStandardMaterial color="#9a3412" emissive="#c2410c" emissiveIntensity={0.3} roughness={0.7} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// 3D Scene Root
function PondScene({ activeIdx, setActiveIdx }) {
  const obj = useLoader(OBJLoader, '/models/rocks/RockSet/RockSet.obj');

  return (
    <group position={[0, -0.3, 0]} scale={0.85}>
      <ambientLight intensity={1.6} />
      
      <directionalLight
        position={[6, 14, 6]}
        intensity={2.8}
        color="#ffffff"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-6, 6, -4]} intensity={1.2} color="#38bdf8" />
      <pointLight position={[0, 3, 0]} intensity={2.4} color="#38bdf8" distance={10} />
      <pointLight position={[0, 0.8, 0]} intensity={1.8} color="#D4F82C" distance={7} />

      {/* Wide Open Crystal Blue Pond */}
      <CrystalBluePondBasin />

      {/* DENSE Interlocking River Pebbles & Garden Plants */}
      <DensePebbleEmbankmentAndPlants />

      {/* 6 Proportional 3D Stepping Stones */}
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
    </group>
  );
}

export default function CoreValuesPond3D() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <div className="relative w-full max-w-5xl mx-auto my-4 select-none">
      
      {/* Pure WebGL 3D Canvas Stage with generous headroom */}
      <div className="relative w-full aspect-[16/10] max-h-[620px] min-h-[460px]">
        <Canvas
          shadows
          camera={{ position: [0, 8.4, 6.6], fov: 40 }}
          gl={{ antialias: true, alpha: true }}
          onPointerMissed={() => setActiveIdx(null)}
        >
          <Suspense fallback={null}>
            <PondScene activeIdx={activeIdx} setActiveIdx={setActiveIdx} />
          </Suspense>
        </Canvas>
      </div>

      {/* Subtitle helper */}
      <div className="text-center mt-2 text-xs font-mono font-bold text-neutral-800 flex items-center justify-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-black animate-ping"></span>
        <span>HOVER OVER ANY 3D ROCK TO ELEVATE IN 3D & REVEAL THE VALUE PRINCIPLE</span>
      </div>

    </div>
  );
}
