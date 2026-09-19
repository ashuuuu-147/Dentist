import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowLeft,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} in Decatur, GA | Georgia Dental Center`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.name} | Georgia Dental Center`,
      description: service.shortDescription,
    },
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-16 sm:py-24 bg-[#F7F8F3] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#59655E] mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#164A3A] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#D8E4D7]" />
          <Link href="/our-services" className="hover:text-[#164A3A] transition-colors">
            Our Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#D8E4D7]" />
          <span className="text-[#164A3A] font-semibold">{service.name}</span>
        </nav>

        {/* Header Hero Section */}
        <div className="space-y-6 pb-12 border-b border-[#D8E4D7]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EFE8] border border-[#D8E4D7] text-xs font-mono tracking-wider uppercase text-[#164A3A]">
            <span>{service.category}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-[#164A3A] tracking-tight">
            {service.name}
          </h1>

          <p className="text-[#59655E] text-lg sm:text-xl leading-relaxed max-w-3xl">
            {service.shortDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/make-appointment"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#164A3A] hover:bg-[#2E6B57] text-white font-semibold text-sm transition-all shadow-sm"
            >
              <Calendar className="w-4 h-4 text-[#D8E4D7]" />
              <span>Schedule This Treatment</span>
            </Link>

            <a
              href={`tel:${siteConfig.contact.phoneFormatted}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#E8EFE8] border border-[#D8E4D7] text-[#164A3A] text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-[#2E6B57]" />
              <span>Call (404) 377-7711</span>
            </a>
          </div>
        </div>

        {/* Content Section: Clinical Overview */}
        <div className="py-12 border-b border-[#D8E4D7] space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#164A3A]">
            Clinical Overview
          </h2>
          <p className="text-[#59655E] text-base sm:text-lg leading-relaxed">
            {service.overview}
          </p>
        </div>

        {/* Content Section: Key Clinical Benefits */}
        <div className="py-12 border-b border-[#D8E4D7] space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#164A3A]">
            Why Choose This Treatment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-[#D8E4D7] shadow-sm flex items-start gap-3.5"
              >
                <CheckCircle2 className="w-5 h-5 text-[#2E6B57] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#18211D] leading-snug">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Section: Step-by-Step Procedure */}
        {service.procedureSteps && service.procedureSteps.length > 0 && (
          <div className="py-12 border-b border-[#D8E4D7] space-y-8">
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#164A3A]">
              What to Expect During Your Visit
            </h2>
            <div className="space-y-4">
              {service.procedureSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white border border-[#D8E4D7] shadow-sm flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#E8EFE8] border border-[#D8E4D7] flex items-center justify-center font-mono font-bold text-[#164A3A] text-sm flex-shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#164A3A] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#59655E] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content Section: Procedure FAQs */}
        {service.faq && service.faq.length > 0 && (
          <div className="py-12 border-b border-[#D8E4D7] space-y-8">
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#164A3A] flex items-center gap-2.5">
              <HelpCircle className="w-6 h-6 text-[#2E6B57]" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service.faq.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white border border-[#D8E4D7] shadow-sm space-y-2.5"
                >
                  <h3 className="text-base font-semibold text-[#164A3A]">
                    {item.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#59655E] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back to All Services & Conversion Card */}
        <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/our-services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#164A3A] hover:text-[#2E6B57] hover:underline"
          >
            <ArrowLeft className="w-4 h-4 text-[#2E6B57]" />
            <span>Back to All Dental Services</span>
          </Link>

          <Link
            href="/make-appointment"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#164A3A] hover:bg-[#2E6B57] text-white font-semibold text-sm transition-colors shadow-sm"
          >
            <span>Reserve an Appointment in Decatur</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
