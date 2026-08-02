"use client";

import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, ContactShadows, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { ToothModel } from './ToothModel';

function Sparkles() {
  const pointsRef = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(30 * 3);
    for (let i = 0; i < 30; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.04}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-full border-4 border-primary-200 border-t-accent-500 animate-spin"></div>
      </div>
    </Html>
  );
}

export function SceneCanvas() {
  return (
    <div className="w-full h-full relative z-10">
      <Canvas camera={{ position: [0, 0.5, 4], fov: 45 }} gl={{ alpha: true }}>
        <Suspense fallback={<Loader />}>
          <Environment preset="city" />
          
          <Float
            speed={2} 
            rotationIntensity={0.2} 
            floatIntensity={0.5}
            floatingRange={[-0.2, 0.2]}
          >
            <ToothModel />
          </Float>

          <Sparkles />

          <ContactShadows 
            position={[0, -1.8, 0]} 
            opacity={0.3} 
            scale={10} 
            blur={2.5} 
            far={4} 
            color="#0f172a"
          />

          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />

        </Suspense>
      </Canvas>
    </div>
  );
}
