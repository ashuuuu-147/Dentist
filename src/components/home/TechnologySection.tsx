"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Cpu, Camera, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { initGSAP } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const TechnologySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        ".tech-header-elem",
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

      // Cards staggered reveal
      gsap.fromTo(
        ".tech-card",
        { opacity: 0, y: 35 },
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

      // Subtle multi-plane depth parallax on large screens
      if (window.innerWidth >= 1024) {
        gsap.to(".tech-card-0", {
          y: -18,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });

        gsap.to(".tech-card-2", {
          y: 18,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const techCards = [
    {
      icon: <Cpu className="w-6 h-6 text-[#164A3A]" />,
      title: "Digital Radiography",
      badge: "Ultra-Low Radiation",
      description:
        "Modern digital X-rays produce up to 80–90% less radiation than traditional dental film, providing instant, high-resolution diagnostic images displayed right at your chairside.",
      benefits: ["Instant chairside visualization", "Early micro-cavity detection", "No chemical developing agents"],
    },
    {
      icon: <Camera className="w-6 h-6 text-[#164A3A]" />,
      title: "Intraoral Cameras",
      badge: "Clinical Transparency",
      description:
        "Miniature pen-sized diagnostic cameras allow you to see exactly what Dr. Amin sees. High-definition magnification ensures complete transparency before any treatment is decided.",
      benefits: ["Live high-definition monitor view", "Clear co-diagnosis with Dr. Amin", "Tracks changes over time"],
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#164A3A]" />,
      title: "Nitrous Oxide Sedation",
      badge: "Anxiety-Free Comfort",
      description:
        "Safe, fast-acting conscious sedation that melts away dental anxiety while you remain fully alert and comfortable. Effects clear within 5 minutes, allowing you to drive home normally.",
      benefits: ["Immediate calm and relaxation", "Adjustable depth of comfort", "Zero post-visit grogginess"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#E8EFE8] border-t border-[#D8E4D7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="tech-header-elem inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#6F9B86] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#164A3A]" />
            <span>05 / DIAGNOSTIC PRECISION</span>
          </div>

          <h2 className="tech-header-elem font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#164A3A] tracking-tight">
            Modern technology. <br />
            <span className="text-[#2E6B57] font-light italic">Thoughtful comfort.</span>
          </h2>

          <p className="tech-header-elem text-[#59655E] text-base sm:text-lg font-normal leading-relaxed">
            We integrate proven diagnostic technology and gentle comfort protocols to make every appointment accurate, conservative, and stress-free.
          </p>
        </div>

        {/* 3 Floating Tech Cards with multi-plane parallax depth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {techCards.map((card, idx) => (
            <div
              key={idx}
              className={`tech-card tech-card-${idx} rounded-2xl p-8 bg-white border border-[#D8E4D7] hover:border-[#6F9B86] transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-[0_16px_35px_-8px_rgba(22,74,58,0.10)] flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F8F3] border border-[#D8E4D7] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    {card.icon}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#E8EFE8] text-[#164A3A] border border-[#D8E4D7]">
                    {card.badge}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#18211D] mb-3 group-hover:text-[#164A3A] transition-colors">
                  {card.title}
                </h3>

                <p className="text-[#59655E] text-xs sm:text-sm leading-relaxed mb-6">
                  {card.description}
                </p>

                <ul className="space-y-2 border-t border-[#D8E4D7] pt-4 mb-6">
                  {card.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2 text-xs text-[#18211D]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6B57] flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#D8E4D7]">
                <Link
                  href="/our-services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#164A3A] group-hover:text-[#2E6B57]"
                >
                  <span>Learn more about this technology</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
