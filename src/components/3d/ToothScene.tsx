"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const ToothModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const toothMeshRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const prefersReducedMotion = useReducedMotion();

  // Procedural Pearl Enamel Material
  const pearlMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#FAFCFC"),
      emissive: new THREE.Color("#051618"),
      roughness: 0.18,
      metalness: 0.04,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      transmission: 0.3,
      thickness: 1.5,
      ior: 1.52,
      specularIntensity: 1.0,
      specularColor: new THREE.Color("#FFFFFF"),
    });
  }, []);

  // Floating Micro Dust / Light Particles
  const particlesGeometry = useMemo(() => {
    const count = 45;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const turquoise = new THREE.Color("#17AEAB");
    const white = new THREE.Color("#FFFFFF");

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;

      const mixedColor = white.clone().lerp(turquoise, Math.random() * 0.7);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, []);

  const entranceProgress = useRef(0);

  // Frame Loop for Smooth Physics, Breathing, Mouse Parallax, and Scroll Depth
  useFrame((state, delta) => {
    if (prefersReducedMotion) return;

    const time = state.clock.getElapsedTime();

    // Smooth entrance scale interpolation
    if (entranceProgress.current < 1) {
      entranceProgress.current = THREE.MathUtils.lerp(
        entranceProgress.current,
        1,
        delta * 2.5
      );
    }

    // Scroll-tied depth movement
    if (groupRef.current) {
      const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
      const targetZ = -Math.min(scrollY * 0.003, 1.4);
      groupRef.current.position.z = THREE.MathUtils.lerp(
        groupRef.current.position.z,
        targetZ,
        delta * 3.0
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        scrollY * 0.0008,
        delta * 2.0
      );
    }

    if (toothMeshRef.current) {
      // Gentle vertical floating breathing motion (subtle 4–6px luxury float)
      toothMeshRef.current.position.y = Math.sin(time * 0.75) * 0.05;

      // Mouse-guided smooth tilt (weighted, low-intensity luxury inertia)
      const targetRotationY = state.pointer.x * 0.28;
      const targetRotationX = -state.pointer.y * 0.18;

      toothMeshRef.current.rotation.y = THREE.MathUtils.lerp(
        toothMeshRef.current.rotation.y,
        targetRotationY + Math.sin(time * 0.35) * 0.03,
        delta * 2.2
      );
      toothMeshRef.current.rotation.x = THREE.MathUtils.lerp(
        toothMeshRef.current.rotation.x,
        targetRotationX,
        delta * 2.2
      );

      // Settle entrance scale smoothly
      const currentScale = 1.35 * Math.max(0.2, entranceProgress.current);
      toothMeshRef.current.scale.set(currentScale, currentScale, currentScale);
    }

    // Slow ambient rotation for micro particles
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.02;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 3D Anatomical Molar Composition */}
      <group ref={toothMeshRef} scale={[1.35, 1.35, 1.35]}>
        {/* Crown Base Body */}
        <mesh position={[0, 0.25, 0]} material={pearlMaterial}>
          <cylinderGeometry args={[0.95, 0.75, 1.1, 32, 16]} />
        </mesh>

        {/* 4 Occlusal Cusps on Top */}
        <mesh position={[0.42, 0.8, 0.42]} material={pearlMaterial}>
          <sphereGeometry args={[0.48, 24, 24]} />
        </mesh>
        <mesh position={[-0.42, 0.8, 0.42]} material={pearlMaterial}>
          <sphereGeometry args={[0.48, 24, 24]} />
        </mesh>
        <mesh position={[0.42, 0.8, -0.42]} material={pearlMaterial}>
          <sphereGeometry args={[0.48, 24, 24]} />
        </mesh>
        <mesh position={[-0.42, 0.8, -0.42]} material={pearlMaterial}>
          <sphereGeometry args={[0.48, 24, 24]} />
        </mesh>

        {/* Central Fossa / Occlusal Blend */}
        <mesh position={[0, 0.82, 0]} material={pearlMaterial}>
          <boxGeometry args={[0.7, 0.2, 0.7]} />
        </mesh>

        {/* Cervical Margin / Neck */}
        <mesh position={[0, -0.32, 0]} material={pearlMaterial}>
          <cylinderGeometry args={[0.75, 0.65, 0.35, 32]} />
        </mesh>

        {/* Mesial Root (Left) */}
        <mesh
          position={[-0.32, -1.05, 0]}
          rotation={[0, 0, 0.12]}
          material={pearlMaterial}
        >
          <coneGeometry args={[0.32, 1.4, 24]} />
        </mesh>

        {/* Distal Root (Right) */}
        <mesh
          position={[0.32, -1.05, 0]}
          rotation={[0, 0, -0.12]}
          material={pearlMaterial}
        >
          <coneGeometry args={[0.32, 1.4, 24]} />
        </mesh>
      </group>

      {/* Floating Micro Dust Particles */}
      <points ref={particlesRef} geometry={particlesGeometry}>
        <pointsMaterial
          size={0.035}
          vertexColors
          transparent
          opacity={0.65}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
};

export const ToothScene = () => {
  return (
    <>
      {/* Studio Lighting Configuration */}
      <ambientLight color="#072023" intensity={1.2} />

      {/* Key Soft White Light from Top Left */}
      <directionalLight
        position={[-3, 4, 3]}
        color="#FFFFFF"
        intensity={2.2}
      />

      {/* Signature Turquoise Rim Light from Back Right */}
      <directionalLight
        position={[3.5, 2, -2.5]}
        color="#17AEAB"
        intensity={4.5}
      />

      {/* Soft Bottom-Up Teal Fill */}
      <directionalLight
        position={[0, -3, 2]}
        color="#0A5157"
        intensity={1.0}
      />

      {/* Accent Point Light for Specular Catchlight */}
      <pointLight
        position={[1.5, 1.5, 2.5]}
        color="#35D0CD"
        intensity={1.8}
        distance={8}
      />

      {/* The 3D Dental Model */}
      <ToothModel />
    </>
  );
};
