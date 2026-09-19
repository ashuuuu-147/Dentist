"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, CreditCard, ArrowRight, ExternalLink } from "lucide-react";
import { insuranceProviders, insurancePolicyStatement } from "@/data/insurance";
import { siteConfig } from "@/data/siteConfig";
import { initGSAP } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const InsurancePaymentSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        ".insurance-header-elem",
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

      // Staggered insurance carrier badges
      gsap.fromTo(
        ".insurance-provider-badge",
        { opacity: 0, scale: 0.95, y: 14 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.03,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".insurance-grid",
            start: "top 82%",
          },
        }
      );

      // Financing Bento cards entrance
      gsap.fromTo(
        ".insurance-bento-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".insurance-bento-container",
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
      className="relative py-24 sm:py-32 bg-white border-t border-[#D8E4D7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="insurance-header-elem text-xs font-mono uppercase tracking-[0.25em] text-[#6F9B86] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#164A3A]" />
            <span>06 / FINANCIAL ACCESS</span>
          </div>
          <h2 className="insurance-header-elem font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#164A3A] tracking-tight">
            Making comprehensive care accessible.
          </h2>
          <p className="insurance-header-elem text-[#59655E] text-base sm:text-lg font-normal leading-relaxed">
            {insurancePolicyStatement}
          </p>
        </div>

        {/* 14 Verified Insurance Providers Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#D8E4D7]">
            <span className="text-xs font-semibold text-[#18211D] uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2E6B57]" />
              Verified Insurance Network Partners
            </span>
            <Link
              href="/insurance"
              className="text-xs font-semibold text-[#164A3A] hover:text-[#2E6B57] hover:underline inline-flex items-center gap-1 active:scale-[0.98]"
            >
              <span>Insurance Benefits Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="insurance-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {insuranceProviders.map((provider, idx) => (
              <div
                key={idx}
                className="insurance-provider-badge p-4 rounded-xl bg-[#F7F8F3] border border-[#D8E4D7] hover:border-[#6F9B86] text-center transition-all duration-300 hover:-translate-y-1 hover:bg-[#E8EFE8] flex flex-col items-center justify-center min-h-[85px] shadow-sm group cursor-default"
              >
                <span className="text-xs font-semibold text-[#18211D] group-hover:text-[#164A3A] transition-colors">
                  {provider.name}
                </span>
                <span className="text-[10px] text-[#59655E] mt-1 font-medium">
                  {provider.category}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 rounded-xl bg-[#E8EFE8]/70 border border-[#D8E4D7] text-xs text-[#59655E] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>
              Don&apos;t see your dental insurer listed? Call our team at (404) 377-7711 to check benefits.
            </span>
            <a
              href={`tel:${siteConfig.contact.phoneFormatted}`}
              className="text-[#164A3A] hover:text-[#2E6B57] font-semibold whitespace-nowrap active:scale-[0.98]"
            >
              Verify Benefits via Phone →
            </a>
          </div>
        </div>

        {/* Payment & Financing Bento Cards */}
        <div className="insurance-bento-container grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: CareCredit Healthcare Financing */}
          <div className="insurance-bento-card p-8 sm:p-10 rounded-2xl bg-[#F7F8F3] border border-[#D8E4D7] hover:border-[#6F9B86] transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-[0_16px_35px_-8px_rgba(22,74,58,0.10)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#6F9B86]">
                  Flexible Financing
                </span>
                <CreditCard className="w-5 h-5 text-[#2E6B57]" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#164A3A]">
                CareCredit® Financing
              </h3>
              <p className="text-[#59655E] text-xs sm:text-sm leading-relaxed">
                Pay for out-of-pocket dental treatments over time in flexible monthly installments. Interest-free promotional plans available on qualifying care.
              </p>

              <ul className="space-y-2 pt-2 text-xs text-[#18211D]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B57]" />
                  <span>Use for restorative, preventive, or cosmetic procedures</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B57]" />
                  <span>Instant credit decision via secure online portal</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-6 border-t border-[#D8E4D7] flex items-center justify-between">
              <a
                href={siteConfig.careCreditUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#164A3A] hover:bg-[#2E6B57] px-5 py-2.5 rounded-xl transition-all active:scale-[0.98] shadow-sm"
              >
                <span>Apply for CareCredit</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/payment-options"
                className="text-xs font-semibold text-[#59655E] hover:text-[#164A3A] transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* Card 2: VantageOne Dental Savings Plan */}
          <div className="insurance-bento-card p-8 sm:p-10 rounded-2xl bg-[#F7F8F3] border border-[#D8E4D7] hover:border-[#6F9B86] transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-[0_16px_35px_-8px_rgba(22,74,58,0.10)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#6F9B86]">
                  Savings Plan
                </span>
                <ShieldCheck className="w-5 h-5 text-[#2E6B57]" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#164A3A]">
                VantageOne Savings Plan
              </h3>
              <p className="text-[#59655E] text-xs sm:text-sm leading-relaxed">
                No insurance? No problem. The VantageOne Dental Savings Plan provides immediate discounts on cleanings, exams, and restorative care for one low annual fee.
              </p>

              <ul className="space-y-2 pt-2 text-xs text-[#18211D]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B57]" />
                  <span>Zero waiting periods & no annual deductibles</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B57]" />
                  <span>Preexisting conditions are fully eligible</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-6 border-t border-[#D8E4D7] flex items-center justify-between">
              <Link
                href="/payment-options"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#164A3A] bg-white hover:bg-[#E8EFE8] border border-[#D8E4D7] px-5 py-2.5 rounded-xl transition-all active:scale-[0.98] shadow-sm"
              >
                <span>Explore Plan Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#2E6B57]" />
              </Link>

              <Link
                href="/contact"
                className="text-xs font-semibold text-[#59655E] hover:text-[#164A3A] transition-colors"
              >
                Inquire With Front Desk →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
