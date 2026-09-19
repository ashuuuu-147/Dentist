"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Smile,
  Activity,
  HeartPulse,
  Gem,
  Cpu,
  Clock,
  ExternalLink,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { cn } from "@/lib/utils";
import { initGSAP } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const BentoServices = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        ".services-header-elem",
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

      // Rows entrance
      gsap.fromTo(
        ".service-row-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-list-container",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white border-t border-[#D8E4D7] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header with Editorial Framing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[#D8E4D7]">
          <div className="max-w-2xl space-y-3">
            <div className="services-header-elem text-xs font-mono uppercase tracking-[0.25em] text-[#6F9B86] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#164A3A]" />
              <span>02 / CLINICAL DIRECTORY</span>
            </div>
            <h2 className="services-header-elem font-display text-3xl sm:text-5xl text-[#164A3A] font-semibold tracking-tight">
              Care designed for longevity.
            </h2>
            <p className="services-header-elem text-base sm:text-lg text-[#59655E] font-normal leading-relaxed">
              Every procedure is tailored around conservative dentistry, patient comfort, and long-term biological health in our Decatur office.
            </p>
          </div>

          <div className="services-header-elem">
            <Link
              href="/our-services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#164A3A] hover:text-[#2E6B57] pb-1 border-b-2 border-[#164A3A] transition-all group"
            >
              <span>Explore All 9 Treatments</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Editorial Service Directory List */}
        <div className="services-list-container divide-y divide-[#D8E4D7] border-b border-[#D8E4D7]">
          {servicesData.map((service, index) => {
            const formattedIndex = String(index + 1).padStart(2, "0");
            const isHovered = hoveredIdx === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIdx(index)}
                className={cn(
                  "service-row-item group transition-all duration-300 ease-out py-6 sm:py-8 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-2xl",
                  isHovered ? "bg-[#E8EFE8]/70" : "bg-transparent hover:bg-[#E8EFE8]/40"
                )}
              >
                <Link
                  href={`/our-services/${service.slug}`}
                  className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 block"
                >
                  {/* Left: Index & Name */}
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6 min-w-0 lg:w-5/12">
                    <span className="font-mono text-sm sm:text-base text-[#6F9B86] group-hover:text-[#164A3A] font-semibold flex-shrink-0 transition-colors">
                      {formattedIndex}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-semibold text-[#18211D] group-hover:text-[#164A3A] transition-colors leading-snug">
                        {service.name}
                      </h3>
                      <span className="inline-block mt-1 text-[11px] font-semibold text-[#59655E] uppercase tracking-wider">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Middle: Clinical Description */}
                  <div className="lg:w-5/12 text-sm text-[#59655E] leading-relaxed">
                    <p>{service.shortDescription}</p>
                    {isHovered && service.benefits && (
                      <div className="hidden sm:flex flex-wrap gap-2 mt-2 pt-2 border-t border-[#D8E4D7]/70">
                        {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                          <span
                            key={bIdx}
                            className="inline-flex items-center text-[11px] font-medium text-[#164A3A] bg-white px-2 py-0.5 rounded-md border border-[#D8E4D7]"
                          >
                            ✓ {benefit}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right: Architectural Arrow */}
                  <div className="lg:w-2/12 flex items-center justify-end">
                    <div className="w-10 h-10 rounded-full border border-[#D8E4D7] bg-white group-hover:border-[#164A3A] group-hover:bg-[#164A3A] flex items-center justify-center transition-all duration-200 shadow-sm">
                      <ArrowRight className="w-4 h-4 text-[#164A3A] group-hover:text-white transition-all duration-200 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Directory Footer Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#59655E]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2E6B57]" />
            <span>All procedures performed by Dr. Shikha M Amin, DMD</span>
          </div>
          <div className="text-[#59655E]">
            Verified Decatur Practice • 755 Commerce Dr, Suite 513
          </div>
        </div>
      </div>
    </section>
  );
};
