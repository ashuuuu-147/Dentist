"use client";

import React, { useRef, useState, useCallback } from "react";
import { Sparkles, ShieldCheck, Award } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const HeroVisualCenterpiece: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || !cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Mouse position within card
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Calculate tilt degrees (range -6 to +6 degrees)
      const xPct = (mouseX / width) - 0.5;
      const yPct = (mouseY / height) - 0.5;

      const rotX = -yPct * 12;
      const rotY = xPct * 12;

      setRotate({ x: rotX, y: rotY });
      setGlare({
        x: Math.round((mouseX / width) * 100),
        y: Math.round((mouseY / height) * 100),
        opacity: 0.35,
      });
    },
    [prefersReducedMotion]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      className={`relative w-full max-w-[480px] mx-auto flex items-center justify-center select-none ${className}`}
      style={{ perspective: "1000px" }}
    >
      {/* Outer Breathing Levitation Wrapper */}
      <div className="w-full animate-float-subtle">
        {/* Interactive 3D Glare Card */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`relative w-full rounded-3xl p-6 sm:p-8 bg-white/95 border transition-all duration-300 ease-out cursor-default overflow-hidden ${
            isHovered
              ? "border-[#6F9B86]/60 shadow-[0_30px_70px_-15px_rgba(22,74,58,0.12)] scale-[1.02]"
              : "border-[#D8E4D7] shadow-[0_20px_50px_-12px_rgba(22,74,58,0.06)]"
          }`}
          style={{
            transform: prefersReducedMotion
              ? "none"
              : `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            transformStyle: "preserve-3d",
          }}
          aria-label="Georgia Dental Center ceramic care centerpiece"
        >
        {/* Dynamic Glare Overlay tracking cursor */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-3xl z-30"
          style={{
            background: `radial-gradient(circle 280px at ${glare.x}% ${glare.y}%, rgba(111, 155, 134, ${glare.opacity * 0.35}), transparent 70%)`,
          }}
        />

        {/* Ambient Soft Sage Glow Behind Centerpiece */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#E8EFE8] blur-3xl pointer-events-none opacity-80 animate-pulse-glow" />

        {/* Top Feature Floating Badge (Top Right) */}
        <div className="relative z-20 flex items-center justify-between gap-3 mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8EFE8] border border-[#D8E4D7] text-[11px] font-semibold text-[#164A3A] uppercase tracking-wider shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B57] animate-pulse" />
            <span>Clinical Precision</span>
          </div>

          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-[#D8E4D7] text-[11px] font-semibold text-[#164A3A] shadow-sm">
            <Sparkles className="w-3 h-3 text-[#2E6B57]" />
            <span>Enamel Care</span>
          </div>
        </div>

        {/* Center Static Sculpture Container */}
        <div className="relative z-10 w-full py-4 flex flex-col items-center justify-center">
          {/* Subtle Rotating Accent Ring */}
          <div className="absolute w-56 h-56 rounded-full border border-dashed border-[#6F9B86]/25 pointer-events-none opacity-50 animate-[spin_60s_linear_infinite]" />

          {/* Premium Static Tooth Artwork */}
          <div className="relative w-48 sm:w-56 h-56 sm:h-64 flex items-center justify-center filter drop-shadow-[0_12px_24px_rgba(22,74,58,0.10)]">
            <svg
              viewBox="0 0 200 240"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Multi-Stop Ceramic Pearl Enamel Gradient */}
                <linearGradient
                  id="ceramicPearl"
                  x1="25"
                  y1="20"
                  x2="185"
                  y2="225"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="30%" stopColor="#F9FCFA" />
                  <stop offset="65%" stopColor="#EBF2ED" />
                  <stop offset="85%" stopColor="#D8E4DC" />
                  <stop offset="100%" stopColor="#C0D1C6" />
                </linearGradient>

                {/* Refined Emerald/Sage Rim Glow Gradient */}
                <linearGradient
                  id="rimLightTurquoise"
                  x1="150"
                  y1="25"
                  x2="195"
                  y2="200"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#2E6B57" stopOpacity="0.8" />
                  <stop offset="40%" stopColor="#6F9B86" stopOpacity="0.5" />
                  <stop offset="75%" stopColor="#D8E4D7" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#E8EFE8" stopOpacity="0" />
                </linearGradient>

                {/* Specular Glaze Highlight */}
                <linearGradient
                  id="enamelGlaze"
                  x1="45"
                  y1="25"
                  x2="125"
                  y2="110"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>

                {/* Subtle Inner Occlusal Shadow */}
                <linearGradient
                  id="occlusalShadow"
                  x1="100"
                  y1="35"
                  x2="100"
                  y2="120"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#164A3A" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#2E6B57" stopOpacity="0.04" />
                </linearGradient>
              </defs>

              {/* Base Anatomical Ceramic Tooth (Crown & Bifurcated Roots) */}
              <path
                d="M 60 25 
                   C 80 18, 120 18, 140 25 
                   C 165 32, 176 65, 173 105 
                   C 170 135, 156 155, 146 175 
                   C 139 190, 134 215, 130 230 
                   C 127 236, 120 235, 117 225 
                   C 112 205, 107 175, 100 160 
                   C 93 175, 88 205, 83 225 
                   C 80 235, 73 236, 70 230 
                   C 66 215, 61 190, 54 175 
                   C 44 155, 30 135, 27 105 
                   C 24 65, 35 32, 60 25 Z"
                fill="url(#ceramicPearl)"
              />

              {/* Occlusal Fissures & Developmental Groove Anatomy */}
              <path
                d="M 65 35 
                   C 85 45, 115 45, 135 35 
                   M 100 42 
                   C 100 68, 100 95, 100 120"
                stroke="url(#occlusalShadow)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Fine Sculpted Secondary Grooves */}
              <path
                d="M 78 48 C 88 58, 94 68, 98 75
                   M 122 48 C 112 58, 106 68, 102 75"
                stroke="rgba(22, 74, 58, 0.14)"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Luminous Subtle Rim Light (Right Flank) */}
              <path
                d="M 140 25 
                   C 165 32, 176 65, 173 105 
                   C 170 135, 156 155, 146 175 
                   C 139 190, 134 215, 130 230"
                stroke="url(#rimLightTurquoise)"
                strokeWidth="4.5"
                strokeLinecap="round"
              />

              {/* Delicate Soft Left Accent Light */}
              <path
                d="M 60 25 
                   C 35 32, 24 65, 27 105 
                   C 30 135, 44 155, 54 175"
                stroke="rgba(255, 255, 255, 0.7)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Primary Glaze Reflection Sheen (Upper Left Crown) */}
              <path
                d="M 45 45 
                   C 50 32, 68 26, 80 30 
                   C 70 55, 58 85, 54 112
                   C 50 100, 43 65, 45 45 Z"
                fill="url(#enamelGlaze)"
              />

              {/* Micro Glaze Point Highlights */}
              <circle cx="68" cy="36" r="2.5" fill="#FFFFFF" opacity="0.95" />
              <circle cx="132" cy="38" r="2" fill="#FFFFFF" opacity="0.85" />
            </svg>

            {/* Diagonal Ambient Light Sheen Sweep */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-sheen pointer-events-none" />
            </div>
          </div>

          {/* Under-Base Soft Natural Shadow */}
          <div className="w-36 h-3 rounded-full bg-[#164A3A]/10 blur-md mt-2 pointer-events-none" />
        </div>

        {/* Bottom Floating Interactive Strip */}
        <div className="relative z-20 pt-4 mt-2 border-t border-[#D8E4D7] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#2E6B57]" />
            <span className="font-semibold text-[#164A3A]">Dr. Shikha M Amin</span>
          </div>

          <div className="flex items-center gap-1.5 text-[#59655E] font-medium text-[11px]">
            <Award className="w-3.5 h-3.5 text-[#2E6B57]" />
            <span>Decatur, GA</span>
          </div>
        </div>

        {/* Brand Tagline */}
        <div className="mt-3 text-center">
          <span className="text-[10px] uppercase tracking-widest text-[#59655E]">
            Gentle • Conservative • Restorative
          </span>
        </div>
      </div>
    </div>
  </div>
);
};

