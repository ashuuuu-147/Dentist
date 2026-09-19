"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Award, Stethoscope, ArrowRight, Quote } from "lucide-react";
import { doctorData } from "@/data/team";
import { initGSAP } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const DoctorSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitMaskRef = useRef<HTMLDivElement>(null);
  const portraitImgRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      // Cinematic image mask reveal (clip-path wipe + subtle scale settle)
      if (portraitMaskRef.current && portraitImgRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        });

        tl.fromTo(
          portraitMaskRef.current,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power4.out",
          }
        ).fromTo(
          portraitImgRef.current,
          { scale: 1.1, filter: "brightness(0.85)" },
          {
            scale: 1.0,
            filter: "brightness(1.02)",
            duration: 1.4,
            ease: "power3.out",
          },
          "-=1.1"
        );
      }

      // Editorial text and credentials stagger
      gsap.fromTo(
        ".doctor-reveal-elem",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#E8EFE8] border-t border-[#D8E4D7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Portrait with Editorial Frame (5 cols) */}
          <div className="lg:col-span-5">
            <div
              className="relative mx-auto max-w-md lg:max-w-none group"
            >
              {/* Portrait Container */}
              <div
                ref={portraitMaskRef}
                style={{ willChange: "clip-path" }}
                className="relative rounded-3xl overflow-hidden border border-[#D8E4D7] bg-white shadow-[0_20px_45px_-10px_rgba(22,74,58,0.08)] aspect-[4/5] sm:aspect-square lg:aspect-[4/5]"
              >
                <div ref={portraitImgRef} className="relative w-full h-full">
                  <Image
                    src={doctorData.headshotUrl}
                    alt="Dr. Shikha M Amin, DMD - Georgia Dental Center Dentist in Decatur GA"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-top filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>

                {/* Subtle bottom gradient overlay for name card contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#164A3A]/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Name Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D8E4D7] shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="font-display text-xl font-bold text-[#164A3A]">
                    {doctorData.name}
                  </div>
                  <div className="text-xs font-semibold text-[#2E6B57] tracking-wide mt-0.5">
                    Lead Dental Surgeon • Decatur, GA
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Biography & Credentials (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div className="space-y-4">
              <div className="doctor-reveal-elem inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#6F9B86] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#164A3A]" />
                <span>03 / CLINICAL LEADERSHIP</span>
              </div>

              <h2 className="doctor-reveal-elem font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#164A3A] tracking-tight">
                Dr. Shikha M Amin, DMD
              </h2>

              <p className="doctor-reveal-elem text-xl sm:text-2xl font-light text-[#2E6B57] font-display italic">
                &ldquo;Care that starts with listening.&rdquo;
              </p>
            </div>

            {/* Doctor's Verified Mission Quote */}
            <div className="doctor-reveal-elem relative p-6 sm:p-7 rounded-2xl bg-white border border-[#D8E4D7] shadow-sm transition-all duration-300 hover:border-[#6F9B86]">
              <Quote className="w-8 h-8 text-[#D8E4D7] absolute top-4 right-5 pointer-events-none" />
              <p className="text-[#18211D] text-sm sm:text-base leading-relaxed italic relative z-10">
                &ldquo;{doctorData.quote}&rdquo;
              </p>
            </div>

            {/* Verified Educational Credentials & Residency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="doctor-reveal-elem p-4 rounded-xl bg-white border border-[#D8E4D7] hover:border-[#6F9B86] transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-3.5 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-[#E8EFE8] border border-[#D8E4D7] flex items-center justify-center flex-shrink-0 text-[#164A3A]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#164A3A]">Doctor of Dental Medicine</div>
                  <div className="text-[11px] text-[#59655E] mt-0.5">
                    Medical University of South Carolina College of Dental Medicine
                  </div>
                </div>
              </div>

              <div className="doctor-reveal-elem p-4 rounded-xl bg-white border border-[#D8E4D7] hover:border-[#6F9B86] transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-3.5 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-[#E8EFE8] border border-[#D8E4D7] flex items-center justify-center flex-shrink-0 text-[#164A3A]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#164A3A]">General Practice Residency</div>
                  <div className="text-[11px] text-[#59655E] mt-0.5">
                    The Brooklyn Hospital Center — Brooklyn, New York
                  </div>
                </div>
              </div>
            </div>

            {/* Actions: Meet Full Team & Schedule */}
            <div className="doctor-reveal-elem flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/meet-our-team"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F7F8F3] border border-[#D8E4D7] text-sm font-semibold text-[#164A3A] transition-all active:scale-[0.98] shadow-sm group"
              >
                <span>Meet the Complete Dental Team</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#2E6B57]" />
              </Link>

              <Link
                href="/make-appointment"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#164A3A] hover:bg-[#2E6B57] text-sm font-semibold text-white transition-all active:scale-[0.98] shadow-sm hover:shadow-[0_4px_20px_rgba(22,74,58,0.22)]"
              >
                <span>Schedule with Dr. Amin</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
