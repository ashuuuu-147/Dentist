import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  FileText,
  Clock,
  CheckCircle2,
  Calendar,
  Phone,
  HelpCircle,
  Download,
  AlertCircle,
} from "lucide-react";
import { patientJourneySteps } from "@/data/journey";
import { generalFAQs } from "@/data/faqs";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "What to Expect | Georgia Dental Center",
  description:
    "Learn what to expect during your first visit to Georgia Dental Center in Decatur, GA, including paperwork instructions and appointment FAQs.",
};

export default function WhatToExpectPage() {
  const appointmentFAQs = generalFAQs.filter((faq) => faq.category === "appointment" || faq.category === "first-visit");

  return (
    <div className="py-16 sm:py-24 bg-[#F7F8F3] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-20">
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#6F9B86] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#164A3A]" />
            <span>First Visit Guide & Protocol</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-medium text-[#164A3A] tracking-tight">
            What to expect from your visit.
          </h1>
          <p className="text-[#59655E] text-base sm:text-lg leading-relaxed">
            Finding a new dental home should be calming and straightforward. At Georgia Dental Center, we remove clinical ambiguity so you can focus on what matters: your health, your comfort, and your long-term smile vitality.
          </p>
        </div>

        {/* Step-by-Step Patient Walkthrough */}
        <div className="space-y-8">
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#164A3A]">
            Your Visit Step-by-Step
          </h2>

          <div className="space-y-6">
            {patientJourneySteps.map((step, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-[#D8E4D7] shadow-sm flex flex-col md:flex-row md:items-start gap-6"
              >
                <div className="w-14 h-14 rounded-xl bg-[#E8EFE8] border border-[#D8E4D7] flex items-center justify-center flex-shrink-0 font-mono text-xl font-semibold text-[#164A3A]">
                  {step.number}
                </div>

                <div className="space-y-3 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-display text-2xl font-medium text-[#164A3A]">
                      {step.title}
                    </h3>
                    <span className="text-xs font-mono text-[#6F9B86] uppercase tracking-wider">
                      {step.subtitle}
                    </span>
                  </div>

                  <p className="text-[#59655E] text-sm leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-[#D8E4D7]">
                    {step.details.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs text-[#59655E]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6B57] flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New Patient Paperwork Section */}
        <div
          id="patient-paperwork"
          className="p-8 sm:p-10 rounded-2xl bg-[#E8EFE8] border border-[#D8E4D7] shadow-sm space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#D8E4D7] flex items-center justify-center text-[#164A3A]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-medium text-[#164A3A]">
                New Patient Paperwork
              </h2>
              <span className="text-xs font-mono text-[#59655E]">
                Online intake or in-person arrival
              </span>
            </div>
          </div>

          <p className="text-[#59655E] text-sm leading-relaxed">
            Completing your medical history and registration paperwork online before arriving allows our clinical team to maximize your dedicated consultation time with Dr. Amin. If you prefer to fill out paperwork in person, we are glad to assist—please arrive 10 to 15 minutes prior to your appointment time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#D8E4D7] shadow-sm space-y-1">
              <div className="text-xs font-semibold text-[#164A3A]">What to Bring</div>
              <p className="text-xs text-[#59655E]">
                A valid government photo ID, active dental insurance card, and current medication list.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#D8E4D7] shadow-sm space-y-1">
              <div className="text-xs font-semibold text-[#164A3A]">Cancellation Notice</div>
              <p className="text-xs text-[#59655E]">
                Kindly notify us at least 48 hours in advance if you need to reschedule your visit.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/make-appointment"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#164A3A] hover:bg-[#2E6B57] text-white font-semibold text-xs transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4 text-[#D8E4D7]" />
              <span>Schedule Your Visit</span>
            </Link>

            <a
              href="https://res.cloudinary.com/heartland-dental/documents/smile_reminder_consent.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#F7F8F3] border border-[#D8E4D7] text-xs font-semibold text-[#164A3A] transition-colors"
            >
              <Download className="w-4 h-4 text-[#2E6B57]" />
              <span>Appointment Consent Form (PDF)</span>
            </a>
          </div>
        </div>

        {/* Appointment FAQs */}
        <div id="appointment-faqs" className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#164A3A] flex items-center gap-2.5">
              <HelpCircle className="w-6 h-6 text-[#2E6B57]" />
              Appointment FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#59655E]">
              Direct answers to common questions regarding scheduling, arrival, and appointment care.
            </p>
          </div>

          <div className="space-y-4">
            {appointmentFAQs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#D8E4D7] shadow-sm space-y-2"
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

        {/* Closing Conversion Card */}
        <div className="p-8 rounded-2xl bg-white border border-[#D8E4D7] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-display text-xl font-medium text-[#164A3A] mb-1">
              Have questions prior to your visit?
            </h3>
            <p className="text-xs text-[#59655E]">
              Our front desk team in Decatur is here to assist with benefits verification, scheduling, and paperwork.
            </p>
          </div>

          <a
            href={`tel:${siteConfig.contact.phoneFormatted}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F7F8F3] hover:bg-[#E8EFE8] border border-[#D8E4D7] text-[#164A3A] text-xs font-semibold whitespace-nowrap transition-colors"
          >
            <Phone className="w-4 h-4 text-[#2E6B57]" />
            <span>Call (404) 377-7711</span>
          </a>
        </div>
      </div>
    </div>
  );
}
