"use client";

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ToothModel() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Custom SMOOTH profile for the tooth crown
  const crownPoints = useMemo(() => {
    const curve = new THREE.SplineCurve([
      new THREE.Vector2(0.001, -0.2), // close bottom
      new THREE.Vector2(0.2, -0.2),   // neck constriction
      new THREE.Vector2(0.45, 0.1),   // crown base
      new THREE.Vector2(0.55, 0.4),   // crown widest
      new THREE.Vector2(0.5, 0.7),    // crown upper
      new THREE.Vector2(0.35, 0.95),  // crown near top
      new THREE.Vector2(0.15, 1.05),  // crown top
      new THREE.Vector2(0.001, 1.1),  // very top center
    ]);
    return curve.getPoints(64); // 64 points for silky smooth vertical curve
  }, []);

  // Custom SMOOTH profile for the roots
  const rootPoints = useMemo(() => {
    const curve = new THREE.SplineCurve([
      new THREE.Vector2(0.001, -1.0), // root tip (sharp/rounded)
      new THREE.Vector2(0.05, -0.9),  // tip taper
      new THREE.Vector2(0.12, -0.5),  // mid root
      new THREE.Vector2(0.16, -0.2),  // root base approaching neck
      new THREE.Vector2(0.001, -0.2), // close top
    ]);
    return curve.getPoints(40);
  }, []);

  // Ultra-premium ceramic/porcelain material
  const toothMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    roughness: 0.15,
    metalness: 0.1,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    transmission: 0.2, // slight translucency like real teeth
    ior: 1.5,
    thickness: 2.0,
    envMapIntensity: 2.0, // High reflection from environment
    emissive: new THREE.Color(0xfffdfa), 
    emissiveIntensity: 0.05,
    side: THREE.DoubleSide
  }), []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Auto-rotate the tooth slowly
    groupRef.current.rotation.y += 0.25 * delta;
    
    // Subtle mouse-follow interaction (tilt)
    const targetX = (state.pointer.x * Math.PI) / 6;
    const targetY = (state.pointer.y * Math.PI) / 6;
    
    // Smoothly interpolate rotation for tilt effect
    groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.z += (-targetX - groupRef.current.rotation.z) * 0.05;
  });

  return (
    <group ref={groupRef} dispose={null} position={[0, 0.2, 0]}>
      {/* Crown */}
      {/* Scaled slightly on Z to make it look naturally flatter like an incisor/premolar */}
      <mesh material={toothMaterial} scale={[1, 1, 0.75]}>
        <latheGeometry args={[crownPoints, 128]} />
      </mesh>
      
      {/* Left Root */}
      <mesh material={toothMaterial} position={[-0.18, -0.05, 0]} rotation={[0, 0, -0.15]} scale={[1, 1, 0.8]}>
        <latheGeometry args={[rootPoints, 64]} />
      </mesh>
      
      {/* Right Root */}
      <mesh material={toothMaterial} position={[0.18, -0.05, 0]} rotation={[0, 0, 0.15]} scale={[1, 1, 0.8]}>
        <latheGeometry args={[rootPoints, 64]} />
      </mesh>
    </group>
  );
}
