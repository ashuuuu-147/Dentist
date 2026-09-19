"use client";

import React, { useRef, useEffect } from "react";
import { initGSAP } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const EditorialStatement: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".statement-reveal",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#F7F8F3] border-t border-[#D8E4D7] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Section Marker */}
          <div className="lg:col-span-3 statement-reveal">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#6F9B86] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#164A3A]" />
              <span>01 / PRACTICE PHILOSOPHY</span>
            </div>
            <div className="mt-4 text-sm text-[#59655E] font-medium leading-relaxed">
              Dr. Shikha M Amin, DMD
              <br />
              <span className="text-xs text-[#6F9B86]">General & Restorative Dental Surgery</span>
            </div>
          </div>

          {/* Editorial Headline & Supporting Essay */}
          <div className="lg:col-span-9 space-y-8">
            <h2 className="statement-reveal font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] text-[#164A3A] font-medium tracking-tight leading-[1.15]">
              Dentistry should feel unhurried, transparent, and focused on preserving what is naturally yours.
            </h2>

            <div className="statement-reveal grid grid-cols-1 md:grid-cols-2 gap-8 text-[#59655E] text-base leading-relaxed pt-4 border-t border-[#D8E4D7]">
              <p>
                At Georgia Dental Center, we do not believe in aggressive treatment plans or corporate sales tactics. Serving Decatur and greater Atlanta from Commerce Drive, our practice is built on conservative clinical care—partnering with each patient to maintain oral vitality with minimal intervention.
              </p>
              <p>
                From routine preventative hygiene and periodontal stability to precision Invisalign® alignment and crown restorations, every recommendation is explained in plain terms before treatment begins. Your comfort, your questions, and your peace of mind come first.
              </p>
            </div>

            {/* 4 Pillars of Human Practice */}
            <div className="statement-reveal grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6">
              <div className="p-4 rounded-xl bg-white border border-[#D8E4D7] shadow-sm">
                <div className="text-xs font-mono text-[#6F9B86]">01</div>
                <div className="mt-1 font-semibold text-sm text-[#164A3A]">Conservative</div>
                <div className="text-xs text-[#59655E] mt-0.5">Preserve natural enamel</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D8E4D7] shadow-sm">
                <div className="text-xs font-mono text-[#6F9B86]">02</div>
                <div className="mt-1 font-semibold text-sm text-[#164A3A]">Transparent</div>
                <div className="text-xs text-[#59655E] mt-0.5">Clear treatment fees</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D8E4D7] shadow-sm">
                <div className="text-xs font-mono text-[#6F9B86]">03</div>
                <div className="mt-1 font-semibold text-sm text-[#164A3A]">Gentle</div>
                <div className="text-xs text-[#59655E] mt-0.5">Sedation & calm visits</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D8E4D7] shadow-sm">
                <div className="text-xs font-mono text-[#6F9B86]">04</div>
                <div className="mt-1 font-semibold text-sm text-[#164A3A]">Local</div>
                <div className="text-xs text-[#59655E] mt-0.5">Decatur community care</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

