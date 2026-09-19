"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

export const initGSAP = () => {
  if (typeof window !== "undefined" && !isRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    isRegistered = true;
  }
  return { gsap, ScrollTrigger };
};

/**
 * Standard Motion Easing Curves
 */
export const EASINGS = {
  micro: "power2.out",
  ui: "power3.out",
  standard: "power3.out",
  cinematic: "power4.out",
  editorial: "expo.out",
} as const;

/**
 * Creates a scoped GSAP context that cleans up automatically on unmount.
 */
export const createMotionContext = (
  scopeRef: React.RefObject<HTMLElement>,
  setup: (context: gsap.Context) => void
) => {
  initGSAP();
  const ctx = gsap.context(() => {
    if (scopeRef.current) {
      setup(ctx);
    }
  }, scopeRef);

  return () => ctx.revert();
};
