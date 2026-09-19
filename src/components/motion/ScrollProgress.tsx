"use client";

import React, { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const currentProgress = (window.scrollY / totalHeight) * 100;
            setProgress(Math.min(100, Math.max(0, currentProgress)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion || progress <= 0.5) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] pointer-events-none origin-left"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-[#164A3A] via-[#2E6B57] to-[#6F9B86] transition-all duration-75 ease-out shadow-[0_0_8px_rgba(22,74,58,0.3)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
