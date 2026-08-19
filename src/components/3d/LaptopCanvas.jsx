import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Ultra-Crisp Full-Screen Texture Display on Laptop Display Plane
function ScreenDisplay({ imageSrc }) {
  const texture = useTexture(imageSrc);
  
  useEffect(() => {
    if (texture) {
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.needsUpdate = true;
    }
  }, [texture]);

  return (
    <group position={[0, 1.35, 0.044]}>
      {/* 100% Full-Bleed Dashboard Screen Mesh */}
      <mesh>
        <planeGeometry args={[3.72, 2.52]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>

      {/* Glossy Ultra-Thin Glass Coating Reflection */}
      <mesh position={[0, 0, 0.002]}>
        <planeGeometry args={[3.72, 2.52]} />
        <meshPhysicalMaterial
          transparent
          opacity={0.08}
          roughness={0.02}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>
    </group>
  );
}

// 3D Laptop with 100% Edge-to-Edge Screen Display
function Fullscreen3DLaptop({ mousePos, imageSrc }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();

    // Subtle levitation float
    const floatY = Math.sin(time * 1.5) * 0.1;
    const floatRotZ = Math.sin(time * 1.0) * 0.012;

    // Smooth Cursor-Driven Spring Rotation
    const targetY = -0.18 + mousePos.x * 0.45;
    const targetX = 0.12 - mousePos.y * 0.2;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, delta * 3.5);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, delta * 3.5);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, floatRotZ, delta * 2.5);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, floatY, delta * 3.5);
  });

  return (
    <group ref={groupRef} position={[0, -0.45, 0]} rotation={[0.15, -0.18, 0]}>
      
      {/* ================= 1. BASE LOWER CHASSIS ================= */}
      {/* Bottom Aluminum Shell */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.8, 0.12, 2.6]} />
        <meshStandardMaterial 
          color="#1e293b" 
          metalness={0.8} 
          roughness={0.25} 
        />
      </mesh>

      {/* Silver Chamfered Base Edge */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[3.82, 0.02, 2.62]} />
        <meshStandardMaterial color="#64748b" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Trackpad */}
      <mesh position={[0, 0.065, 0.75]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.3, 0.85]} />
        <meshStandardMaterial 
          color="#334155" 
          metalness={0.85} 
          roughness={0.2} 
        />
      </mesh>

      {/* Keyboard Bed */}
      <group position={[0, 0.065, -0.25]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[3.4, 1.35]} />
          <meshStandardMaterial color="#090d16" roughness={0.6} />
        </mesh>

        {/* Illuminated Key Rows */}
        {[-0.5, -0.25, 0, 0.25, 0.5].map((z, rowIdx) => (
          <mesh key={rowIdx} position={[0, 0.02, z]}>
            <boxGeometry args={[3.3, 0.025, 0.19]} />
            <meshStandardMaterial 
              color="#0f172a" 
              emissive="#38bdf8" 
              emissiveIntensity={0.25} 
              roughness={0.3} 
            />
          </mesh>
        ))}
      </group>

      {/* Hinge Mechanism */}
      <mesh position={[0, 0.06, -1.28]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.07, 0.07, 3.4, 16]} />
        <meshStandardMaterial color="#475569" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* ================= 2. UPRIGHT 90° OPEN SCREEN LID ================= */}
      <group position={[0, 0.06, -1.28]} rotation={[-0.15, 0, 0]}>
        {/* Lid Back Aluminum Panel */}
        <mesh position={[0, 1.35, 0]} castShadow>
          <boxGeometry args={[3.8, 2.6, 0.08]} />
          <meshStandardMaterial 
            color="#1e293b" 
            metalness={0.85} 
            roughness={0.25} 
          />
        </mesh>

        {/* Glowing Logo on Back */}
        <mesh position={[0, 1.35, -0.045]} rotation={[0, Math.PI, 0]}>
          <circleGeometry args={[0.25, 32]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>

        {/* Screen Bezel Outer Frame */}
        <mesh position={[0, 1.35, 0.042]}>
          <planeGeometry args={[3.76, 2.56]} />
          <meshStandardMaterial color="#090d16" roughness={0.1} />
        </mesh>

        {/* 100% Full Edge-to-Edge Screen Display */}
        <Suspense fallback={
          <mesh position={[0, 1.35, 0.044]}>
            <planeGeometry args={[3.72, 2.52]} />
            <meshBasicMaterial color="#090d16" />
          </mesh>
        }>
          <ScreenDisplay imageSrc={imageSrc} />
        </Suspense>
      </group>
    </group>
  );
}

export default function LaptopCanvas({ imageSrc = '/images/dashboard-admin.png' }) {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[540px] sm:h-[640px] lg:h-[720px] select-none"
    >
      <Canvas gl={{ antialias: true, alpha: true }} className="w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 0.85, 4.5]} fov={45} />
        
        {/* High-Key Studio Lighting */}
        <ambientLight intensity={1.8} />
        <directionalLight position={[6, 10, 6]} intensity={3.0} color="#FFFFFF" />
        <directionalLight position={[-6, 4, -4]} intensity={1.8} color="#93c5fd" />
        <pointLight position={[0, 4, 3]} intensity={3.5} color="#ffffff" />
        <pointLight position={[0, -2, 3]} intensity={1.5} color="#D4F82C" />

        <Suspense fallback={null}>
          <Fullscreen3DLaptop 
            mousePos={mousePos} 
            imageSrc={imageSrc}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-black text-[#D4F82C] border border-black text-xs font-mono font-bold flex items-center space-x-2.5 pointer-events-none shadow-2xl">
        <span className="w-2.5 h-2.5 rounded-full bg-[#D4F82C] animate-ping"></span>
        <span>HOVER CURSOR TO ROTATE 3D LAPTOP</span>
      </div>
    </div>
  );
}
