"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Phone, Calendar, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { HeroVisualCenterpiece } from "@/components/home/HeroVisualCenterpiece";
import { siteConfig } from "@/data/siteConfig";
import { initGSAP, EASINGS } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const { gsap, ScrollTrigger } = initGSAP();

    const ctx = gsap.context(() => {
      // 1. Initial Page Load Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: EASINGS.cinematic } });

      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.15 }
      )
        .fromTo(
          ".hero-headline-line",
          { yPercent: 105 },
          { yPercent: 0, duration: 0.9, stagger: 0.14, ease: "power4.out" },
          "-=0.35"
        )
        .fromTo(
          ".hero-desc",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, ease: EASINGS.ui },
          "-=0.45"
        )
        .fromTo(
          ".hero-cta-btn",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: EASINGS.ui },
          "-=0.4"
        )
        .fromTo(
          ".hero-badge-item",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: EASINGS.ui },
          "-=0.3"
        )
        .fromTo(
          rightColRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 1.1, ease: "power3.out" },
          "-=0.8"
        )
        .fromTo(
          ".hero-scroll-cue",
          { opacity: 0, y: -8 },
          { opacity: 0.7, y: 0, duration: 0.6, ease: EASINGS.ui },
          "-=0.4"
        );

      // 2. Subtle Scroll Parallax Depth
      if (leftColRef.current && rightColRef.current) {
        gsap.to(rightColRef.current, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        gsap.to(leftColRef.current, {
          yPercent: -6,
          opacity: 0.85,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-[#F7F8F3] pt-6 pb-16 lg:py-16"
    >
      {/* Subtle Warm Ivory & Sage Atmosphere */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#E8EFE8] blur-[100px] pointer-events-none opacity-60" />
      <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full bg-[#D8E4D7]/40 blur-[120px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Typography & Conversions (7 cols) */}
          <div
            ref={leftColRef}
            className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8"
          >
            {/* Eyebrow with verified Location Indicator */}
            <div className="hero-eyebrow inline-flex max-w-full items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#E8EFE8] border border-[#D8E4D7] text-[11px] sm:text-xs text-[#164A3A] font-semibold tracking-wide sm:tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#2E6B57] animate-pulseSubtle flex-shrink-0" />
              <span className="truncate">Georgia Dental Center</span>
              <span className="text-[#6F9B86]">•</span>
              <span className="text-[#59655E] font-medium">Decatur, GA</span>
            </div>

            {/* Dominant Editorial Headline with Line Mask Reveal */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-bold text-[#164A3A] tracking-tight leading-[1.05] break-words">
              <span className="block overflow-hidden py-1">
                <span className="hero-headline-line block">Smile with</span>
              </span>
              <span className="block overflow-hidden py-1">
                <span className="hero-headline-line block text-[#164A3A]">
                  confidence.
                </span>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="hero-desc text-base sm:text-xl text-[#59655E] font-normal leading-relaxed max-w-xl">
              Personalized dental care designed around your comfort, health, and smile goals in Decatur, Georgia.
            </p>

            {/* Primary & Secondary Conversion Buttons with Tactile Micro-Interactions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto pt-2">
              <Link
                href="/make-appointment"
                className="hero-cta-btn group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white bg-[#164A3A] hover:bg-[#2E6B57] rounded-xl transition-all shadow-sm hover:shadow-[0_4px_25px_rgba(22,74,58,0.22)] hover:-translate-y-0.5 active:scale-[0.98] duration-200"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Schedule an Appointment</span>
                <ArrowRight className="w-4 h-4 ml-0.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <a
                href={`tel:${siteConfig.contact.phoneFormatted}`}
                className="hero-cta-btn group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-[#164A3A] bg-transparent hover:bg-[#E8EFE8] border border-[#164A3A] rounded-xl transition-all duration-200 active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#2E6B57] transition-transform duration-200 group-hover:scale-110" />
                <span>Call the Office</span>
              </a>
            </div>

            {/* Trust Badges & Clinical Highlights */}
            <div className="pt-4 sm:pt-6 border-t border-[#D8E4D7] grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6 w-full max-w-xl text-xs text-[#59655E]">
              <div className="hero-badge-item flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#2E6B57] flex-shrink-0" />
                <div>
                  <div className="font-semibold text-[#18211D]">Selected by AARP®</div>
                  <div className="text-[11px] text-[#59655E]">Orahh Care Community</div>
                </div>
              </div>

              <div className="hero-badge-item flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#2E6B57] flex-shrink-0" />
                <div>
                  <div className="font-semibold text-[#18211D]">755 Commerce Dr</div>
                  <div className="text-[11px] text-[#59655E]">Suite 513, Decatur</div>
                </div>
              </div>

              <div className="hero-badge-item flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#2E6B57] flex-shrink-0" />
                <div>
                  <div className="font-semibold text-[#18211D]">Welcoming Patients</div>
                  <div className="text-[11px] text-[#59655E]">New & Existing</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Static Ceramic Centerpiece with Subtle Animation & Hover Tilt (5 cols) */}
          <div
            ref={rightColRef}
            className="lg:col-span-5 relative flex items-center justify-center w-full max-w-full py-4 lg:py-0"
          >
            <HeroVisualCenterpiece className="w-full" />
          </div>
        </div>
      </div>

      {/* Subtle Bottom Scroll Cue */}
      <div className="hero-scroll-cue absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] tracking-[0.25em] text-slate-400 uppercase font-medium">
          Scroll to Explore
        </span>
        <div className="w-4 h-7 rounded-full border border-slate-600 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-brand-aqua animate-pulse" />
        </div>
      </div>
    </section>
  );
};
