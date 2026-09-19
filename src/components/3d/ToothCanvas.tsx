"use client";

import React, { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { ToothScene } from "./ToothScene";
import { ToothStaticFallback } from "./ToothStaticFallback";

function checkWebGLSupport(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export const ToothCanvasInternal = ({ className = "" }: { className?: string }) => {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const supported = checkWebGLSupport();
    setHasWebGL(supported);
  }, []);

  if (hasWebGL === false) {
    return <ToothStaticFallback className={className} />;
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Background radial turquoise glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(23,174,171,0.18),transparent_70%)] pointer-events-none" />

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 42 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        onCreated={() => setIsLoaded(true)}
        className={`transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Suspense fallback={null}>
          <ToothScene />
        </Suspense>
      </Canvas>

      {/* Shimmer loading placeholder while Three.js initializes */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <ToothStaticFallback className="animate-pulseSubtle" />
        </div>
      )}
    </div>
  );
};

// Export dynamic client-only canvas with fallback
export const ToothCanvas = dynamic(
  () => Promise.resolve(ToothCanvasInternal),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <ToothStaticFallback />
      </div>
    ),
  }
);
