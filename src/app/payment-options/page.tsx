import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  HelpCircle,
  Phone,
  Calendar,
} from "lucide-react";
import { paymentOptions, paymentFAQs } from "@/data/payment";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Payment Options & Financing | Georgia Dental Center",
  description:
    "Explore dental payment options in Decatur, GA including CareCredit financing, VantageOne Dental Savings Plan, and credit cards.",
};

export default function PaymentOptionsPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#F7F8F3] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-20">
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#6F9B86] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#164A3A]" />
            <span>Financial Transparency & Options</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-medium text-[#164A3A] tracking-tight">
            Flexible payment & financing.
          </h1>
          <p className="text-[#59655E] text-base sm:text-lg leading-relaxed">
            You deserve affordable, reliable dental care without financial stress. We partner with patients across all budgets and offer structured payment solutions so you can achieve lifelong oral health with complete peace of mind.
          </p>
        </div>

        {/* Payment Options In-Depth Cards */}
        <div className="space-y-8">
          {paymentOptions.map((option, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-2xl bg-white border border-[#D8E4D7] shadow-sm space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#D8E4D7]">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#164A3A]">
                    {option.title}
                  </h2>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#6F9B86] mt-1 block">
                    {option.subtitle}
                  </span>
                </div>
                {option.isExternal ? (
                  <CreditCard className="w-6 h-6 text-[#2E6B57]" />
                ) : (
                  <ShieldCheck className="w-6 h-6 text-[#2E6B57]" />
                )}
              </div>

              <p className="text-[#59655E] text-sm sm:text-base leading-relaxed">
                {option.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono font-medium uppercase tracking-wider text-[#164A3A]">
                  Program Highlights
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {option.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-3.5 rounded-xl bg-[#F7F8F3] border border-[#D8E4D7] flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2E6B57] flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-[#18211D]">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {option.ctaLabel && (
                <div className="pt-4 border-t border-[#D8E4D7] flex items-center gap-4">
                  {option.isExternal ? (
                    <a
                      href={option.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#164A3A] hover:bg-[#2E6B57] text-white text-xs font-semibold transition-all shadow-sm"
                    >
                      <span>{option.ctaLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#D8E4D7]" />
                    </a>
                  ) : (
                    <Link
                      href={option.ctaLink || "/contact"}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F7F8F3] hover:bg-[#E8EFE8] border border-[#D8E4D7] text-[#164A3A] text-xs font-semibold transition-colors"
                    >
                      <span>{option.ctaLabel}</span>
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Payment FAQs */}
        <div id="payment-faqs" className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#164A3A] flex items-center gap-2.5">
              <HelpCircle className="w-6 h-6 text-[#2E6B57]" />
              Payment & Financing FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#59655E]">
              Clear answers regarding pricing transparency, financing approvals, and dental savings plans.
            </p>
          </div>

          <div className="space-y-4">
            {paymentFAQs.map((faq, idx) => (
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
        <div className="p-8 rounded-2xl bg-[#E8EFE8] border border-[#D8E4D7] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-display text-xl font-medium text-[#164A3A] mb-1">
              Ready to schedule your consultation?
            </h3>
            <p className="text-xs text-[#59655E]">
              Our team will review all estimates and payment options with you before any procedure starts.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/make-appointment"
              className="px-6 py-3 rounded-xl bg-[#164A3A] hover:bg-[#2E6B57] text-white text-xs font-semibold shadow-sm transition-colors"
            >
              Book an Appointment
            </Link>
            <a
              href={`tel:${siteConfig.contact.phoneFormatted}`}
              className="px-5 py-3 rounded-xl bg-white hover:bg-[#F7F8F3] border border-[#D8E4D7] text-[#164A3A] text-xs font-semibold transition-colors shadow-sm"
            >
              (404) 377-7711
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
