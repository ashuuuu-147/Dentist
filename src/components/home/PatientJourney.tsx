"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  FileCheck,
  Building2,
  Sparkles,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { patientJourneySteps } from "@/data/journey";
import { cn } from "@/lib/utils";
import { initGSAP } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const iconMap: Record<string, React.ReactNode> = {
  Calendar: <Calendar className="w-5 h-5 text-[#164A3A]" />,
  FileCheck: <FileCheck className="w-5 h-5 text-[#164A3A]" />,
  Building2: <Building2 className="w-5 h-5 text-[#164A3A]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#164A3A]" />,
};

export const PatientJourney = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const { gsap, ScrollTrigger } = initGSAP();

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        ".journey-header-elem",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Staggered cards entrance
      gsap.fromTo(
        ".journey-card",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 85%",
          },
        }
      );

      // Progressive line drawing tied to scroll
      if (lineFillRef.current && cardsContainerRef.current) {
        gsap.fromTo(
          lineFillRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: "top 72%",
              end: "bottom 65%",
              scrub: 0.4,
              onUpdate: (self: { progress: number }) => {
                const step = Math.min(
                  patientJourneySteps.length - 1,
                  Math.floor(self.progress * patientJourneySteps.length)
                );
                setActiveStep(step);
              },
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#F7F8F3] border-t border-[#D8E4D7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="journey-header-elem text-xs font-mono uppercase tracking-[0.25em] text-[#6F9B86] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#164A3A]" />
            <span>04 / PATIENT PATHWAY</span>
          </div>
          <h2 className="journey-header-elem font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#164A3A] tracking-tight">
            From first call to confident smile.
          </h2>
          <p className="journey-header-elem text-[#59655E] text-base sm:text-lg font-normal leading-relaxed">
            Visiting the dentist should feel effortless, transparent, and completely comfortable. Here is what you can anticipate from your visit to Georgia Dental Center.
          </p>
        </div>

        {/* 4-Step Interactive Timeline */}
        <div ref={cardsContainerRef} className="relative">
          {/* Desktop Connecting Line with Scroll Progress Fill */}
          <div className="hidden lg:block absolute top-14 left-10 right-10 h-0.5 bg-[#D8E4D7] z-0 overflow-hidden rounded-full">
            <div
              ref={lineFillRef}
              className="h-full w-full bg-gradient-to-r from-[#164A3A] via-[#2E6B57] to-[#6F9B86] origin-left"
              style={{
                transform: prefersReducedMotion
                  ? `scaleX(${(activeStep / (patientJourneySteps.length - 1))})`
                  : undefined,
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {patientJourneySteps.map((step, idx) => {
              const isSelected = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={cn(
                    "journey-card rounded-2xl p-7 relative transition-all duration-300 cursor-pointer flex flex-col justify-between group",
                    isSelected
                      ? "bg-white border-2 border-[#164A3A] shadow-[0_16px_35px_-8px_rgba(22,74,58,0.12)] -translate-y-1.5"
                      : "bg-white border border-[#D8E4D7] hover:border-[#6F9B86] hover:bg-[#E8EFE8]/30 hover:-translate-y-0.5 shadow-sm"
                  )}
                >
                  <div>
                    {/* Step Icon & Number Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300",
                          isSelected
                            ? "bg-[#E8EFE8] border-[#164A3A] text-[#164A3A] scale-105"
                            : "bg-[#F7F8F3] border-[#D8E4D7] text-[#59655E] group-hover:border-[#6F9B86]"
                        )}
                      >
                        {iconMap[step.iconName]}
                      </div>

                      <span
                        className={cn(
                          "font-display text-2xl font-bold transition-colors duration-300",
                          isSelected ? "text-[#164A3A]" : "text-[#D8E4D7]"
                        )}
                      >
                        {step.number}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono tracking-widest text-[#6F9B86] uppercase mb-1">
                      {step.step}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#18211D] mb-2 group-hover:text-[#164A3A] transition-colors duration-200">
                      {step.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#2E6B57] mb-4">
                      {step.subtitle}
                    </div>

                    <p className="text-[#59655E] text-xs sm:text-sm leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Step highlights checklist */}
                    <ul className="space-y-2 border-t border-[#D8E4D7] pt-4">
                      {step.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-[#18211D]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6B57] flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#D8E4D7] flex justify-between items-center text-xs">
                    <span className="text-[#59655E] font-medium">
                      {isSelected ? "Active Step" : "Hover to inspect"}
                    </span>
                    <span className="text-[#164A3A] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                      Step {step.number} →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Link to Full Experience & New Patient Forms */}
        <div className="journey-card mt-16 p-6 sm:p-8 rounded-2xl bg-white border border-[#D8E4D7] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-xl font-bold text-[#164A3A]">
              Planning your first visit to Decatur?
            </h4>
            <p className="text-xs sm:text-sm text-[#59655E]">
              Download our new patient paperwork guidelines and view answers to common appointment questions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/what-to-expect"
              className="px-5 py-2.5 rounded-xl bg-[#F7F8F3] hover:bg-[#E8EFE8] border border-[#D8E4D7] text-xs font-semibold text-[#164A3A] transition-all active:scale-[0.98]"
            >
              What to Expect Guide
            </Link>
            <Link
              href="/make-appointment"
              className="px-5 py-2.5 rounded-xl bg-[#164A3A] hover:bg-[#2E6B57] text-xs font-semibold text-white transition-all active:scale-[0.98] shadow-sm"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
