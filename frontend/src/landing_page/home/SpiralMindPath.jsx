import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const Spiral = () => {
  const spiralRef = useRef();
  const [hovered, setHover] = useState(false);
  
  // Create spiral geometry
  const points = [];
  const numPoints = 500;
  const radius = 2;
  const height = 5;
  
  for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * Math.PI * 10;
    const x = Math.cos(angle) * radius * (1 - i / numPoints);
    const y = Math.sin(angle) * radius * (1 - i / numPoints);
    const z = (i / numPoints) * height - height / 2;
    points.push(new THREE.Vector3(x, y, z));
  }
  
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  
  // Animation
  useFrame((state) => {
    if (spiralRef.current) {
      spiralRef.current.rotation.y += 0.002;
      spiralRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <line ref={spiralRef} geometry={lineGeometry}>
      <lineBasicMaterial 
        color={hovered ? "#ff7eb9" : "#7afcff"} 
        linewidth={2} 
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      />
    </line>
  );
};

const Portal = () => {
  return (
    <mesh position={[0, 0, -2.5]}>
      <circleGeometry args={[3, 32]} />
      <meshBasicMaterial color="#7afcff" side={THREE.DoubleSide} transparent opacity={0.5} />
    </mesh>
  );
};

const Particles = () => {
  const particlesRef = useRef();
  const count = 500;
  
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.0005;
      particlesRef.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        attach="material" 
        size={0.03} 
        color="#ffffff" 
        transparent 
        opacity={0.8} 
        sizeAttenuation={true} 
      />
    </points>
  );
};

const SpiralMindPath = () => {
  return (
    <div style={{ height: '100vh', width: '100%', background: '#0a0a1a' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Spiral />
        <Portal />
        <Particles />
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
          maxPolarAngle={Math.PI / 1.5} 
          minPolarAngle={Math.PI / 3} 
        />
      </Canvas>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Journey Into the Mind</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
          Explore your mental wellbeing through this interactive experience
        </p>
      </div>
    </div>
  );
};

export default SpiralMindPath;