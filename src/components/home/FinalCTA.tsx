"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Phone, Calendar, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { initGSAP } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const FinalCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      // Climax ambient glow breathing float
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          scale: 1.12,
          opacity: 0.9,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Climax sequence timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.fromTo(
        ".cta-badge",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
      )
        .fromTo(
          ".cta-headline-line",
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.14,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .fromTo(
          ".cta-subcopy",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          ".cta-btn",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.1, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          ".cta-footer-info",
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 sm:py-36 bg-[#164A3A] border-t border-[#2E6B57] overflow-hidden text-center text-white"
    >
      {/* Immersive Deep Forest and Emerald Ambient Fields */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55rem] h-[55rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(46,107,87,0.45),rgba(22,74,58,0.2),transparent_70%)] blur-[100px] pointer-events-none origin-center"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
        <div className="cta-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E6B57]/50 border border-[#6F9B86]/40 text-xs text-[#E8EFE8] font-mono tracking-widest uppercase shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#6F9B86] animate-pulse" />
          <span>Decatur, Georgia • Accepting New Patients</span>
        </div>

        {/* Narrative Serif Headline */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-medium text-white tracking-tight leading-[1.15]">
          <span className="cta-headline-line block">Your smile deserves</span>
          <span className="cta-headline-line block italic font-normal text-[#D8E4D7] mt-1">
            thoughtful care.
          </span>
        </h2>

        {/* Subcopy */}
        <p className="cta-subcopy text-[#D8E4D7] text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
          Schedule your comprehensive exam or consultation with Dr. Shikha M Amin at Georgia Dental Center today.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/make-appointment"
            className="cta-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-[#164A3A] bg-white hover:bg-[#F7F8F3] rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] duration-200"
          >
            <Calendar className="w-5 h-5 text-[#164A3A]" />
            <span>Schedule an Appointment</span>
            <ArrowRight className="w-4 h-4 ml-0.5 text-[#164A3A]" />
          </Link>

          <a
            href={`tel:${siteConfig.contact.phoneFormatted}`}
            className="cta-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-medium text-white bg-[#2E6B57]/40 hover:bg-[#2E6B57]/70 border border-[#D8E4D7]/40 rounded-xl transition-all active:scale-[0.98] duration-200"
          >
            <Phone className="w-5 h-5 text-[#D8E4D7]" />
            <span>Call (404) 377-7711</span>
          </a>
        </div>

        {/* Office Quick Details */}
        <div className="cta-footer-info pt-8 text-xs text-[#D8E4D7]/80 flex flex-wrap justify-center items-center gap-6 font-mono">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#6F9B86]" />
            755 Commerce Dr, Ste 513, Decatur, GA 30030
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#6F9B86]" />
            Selected by AARP® • Orahh Care Community
          </span>
        </div>
      </div>
    </section>
  );
};
