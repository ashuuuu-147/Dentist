import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  Phone,
  Calendar,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { insuranceProviders, insurancePolicyStatement, insuranceFAQs } from "@/data/insurance";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Dental Insurance & Benefits | Georgia Dental Center",
  description:
    "Learn about accepted dental insurance plans at Georgia Dental Center in Decatur, GA, including PPO plans and out-of-network benefits assistance.",
};

export default function InsurancePage() {
  return (
    <div className="py-16 sm:py-24 bg-[#F7F8F3] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-20">
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#6F9B86] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#164A3A]" />
            <span>Coverage & Benefits Guidance</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-medium text-[#164A3A] tracking-tight">
            Dental insurance accepted.
          </h1>
          <p className="text-[#59655E] text-base sm:text-lg leading-relaxed">
            {insurancePolicyStatement}
          </p>
        </div>

        {/* Qualified Coverage Alert Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#D8E4D7] flex items-start gap-4 shadow-sm">
          <ShieldCheck className="w-6 h-6 text-[#2E6B57] flex-shrink-0 mt-1" />
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-[#164A3A]">
              Maximizing Your Dental Benefits
            </h2>
            <p className="text-xs sm:text-sm text-[#59655E] leading-relaxed">
              Our administrative team is proactive in filing claims and helping you understand what your policy covers. Even if we are out-of-network with your specific insurer, we work diligently to help you maximize both in-network and out-of-network reimbursements.
            </p>
          </div>
        </div>

        {/* 14 Verified Insurance Providers */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#164A3A]">
              Verified Participating Insurance Providers
            </h2>
            <p className="text-xs sm:text-sm text-[#59655E]">
              Representative list of dental benefit plans and PPO networks we routinely file with:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {insuranceProviders.map((carrier, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-[#D8E4D7] shadow-sm flex flex-col justify-between min-h-[90px] hover:border-[#164A3A]/30 transition-colors"
              >
                <div className="text-sm font-semibold text-[#164A3A] mb-1">
                  {carrier.name}
                </div>
                <div className="text-[11px] text-[#6F9B86] font-mono">
                  {carrier.category}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#E8EFE8] border border-[#D8E4D7] text-xs text-[#59655E] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>
              Have a provider not listed above? Most PPO plans allow you to see any licensed dentist of your choice.
            </span>
            <a
              href={`tel:${siteConfig.contact.phoneFormatted}`}
              className="text-[#164A3A] hover:underline font-semibold whitespace-nowrap"
            >
              Call (404) 377-7711 to Verify →
            </a>
          </div>
        </div>

        {/* End-of-Year Benefits Renewal Alert */}
        <div className="p-8 rounded-2xl bg-[#E8EFE8] border border-[#D8E4D7] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#164A3A] uppercase tracking-wider">
              <AlertCircle className="w-4 h-4 text-[#2E6B57]" />
              <span>Annual Benefit Renewal</span>
            </div>
            <h3 className="font-display text-2xl font-medium text-[#164A3A]">
              Don&apos;t let your dental benefits expire.
            </h3>
            <p className="text-xs sm:text-sm text-[#59655E] max-w-xl">
              Most dental insurance benefits expire on December 31st and do not roll over. Schedule your hygiene exam or recommended care before year-end to maximize your hard-earned coverage.
            </p>
          </div>

          <Link
            href="/make-appointment"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#164A3A] hover:bg-[#2E6B57] text-white font-semibold text-xs whitespace-nowrap transition-colors shadow-sm"
          >
            Schedule Before Year-End
          </Link>
        </div>

        {/* Insurance FAQs */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#164A3A] flex items-center gap-2.5">
              <HelpCircle className="w-6 h-6 text-[#2E6B57]" />
              Dental Insurance FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#59655E]">
              Clear answers to questions regarding network status, copays, and deductibles.
            </p>
          </div>

          <div className="space-y-4">
            {insuranceFAQs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#D8E4D7] shadow-sm space-y-2.5"
              >
                <h3 className="text-base font-semibold text-[#164A3A]">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-[#59655E] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Footer */}
        <div className="pt-8 border-t border-[#D8E4D7] flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/payment-options"
            className="text-xs sm:text-sm font-semibold text-[#164A3A] hover:text-[#2E6B57] hover:underline"
          >
            Explore Payment & Financing Options (CareCredit / Savings Plan) →
          </Link>

          <a
            href={`tel:${siteConfig.contact.phoneFormatted}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#E8EFE8] border border-[#D8E4D7] text-[#164A3A] text-xs font-semibold shadow-sm transition-colors"
          >
            <Phone className="w-4 h-4 text-[#2E6B57]" />
            <span>Call Our Insurance Specialists</span>
          </a>
        </div>
      </div>
    </div>
  );
}
