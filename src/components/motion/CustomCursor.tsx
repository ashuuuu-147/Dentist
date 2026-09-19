"use client";

import React, { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Only enable on fine pointer (mouse/trackpad, not touch) and desktop viewports
    if (prefersReducedMotion) return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isDesktop = window.innerWidth >= 1024;

    if (!isFinePointer || !isDesktop) return;

    setEnabled(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check for interactive targets under pointer
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest("a, button, input, textarea, select, [role='button'], [data-cursor], label, .interactive-target")
        );
        setIsHovered(isInteractive);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => {
      setIsVisible(false);
      setIsHovered(false);
      setIsClicking(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Ultra-smooth lerp loop for follower halo
    const render = () => {
      const ease = 0.16;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [prefersReducedMotion]);

  if (!enabled || prefersReducedMotion) return null;

  return (
    <>
      {/* Precision Core Dot (1:1 instant response) */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-[#164A3A] shadow-[0_0_8px_rgba(22,74,58,0.4)] pointer-events-none z-[9999] transition-transform duration-100 ease-out will-change-transform ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isClicking ? "scale-75" : isHovered ? "scale-125" : "scale-100"}`}
        aria-hidden="true"
      />

      {/* Smooth Ambient Follower Halo */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] will-change-transform transition-[width,height,margin,border-color,background-color,box-shadow,transform] duration-250 ease-out flex items-center justify-center ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isHovered
            ? "w-11 h-11 -ml-[22px] -mt-[22px] border border-[#164A3A]/70 bg-[#2E6B57]/[0.10] shadow-[0_0_20px_rgba(22,74,58,0.18)] backdrop-blur-[1px]"
            : "w-7 h-7 -ml-3.5 -mt-3.5 border border-[#2E6B57]/40 bg-[#2E6B57]/[0.03] shadow-[0_0_8px_rgba(22,74,58,0.06)]"
        } ${isClicking ? "scale-85" : "scale-100"}`}
        aria-hidden="true"
      />
    </>
  );
};

