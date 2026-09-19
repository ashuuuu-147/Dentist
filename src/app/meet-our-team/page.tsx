import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  GraduationCap,
  Award,
  Heart,
  Calendar,
  Phone,
  Users,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { doctorData, teamMembers } from "@/data/team";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Meet the Team | Georgia Dental Center",
  description:
    "Meet Dr. Shikha M Amin, DMD and the compassionate clinical team at Georgia Dental Center in Decatur, Georgia.",
};

export default function MeetOurTeamPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#F7F8F3] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Page Hero Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#6F9B86] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#164A3A]" />
            <span>Dedicated Clinical Providers</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-medium text-[#164A3A] tracking-tight">
            Meet the clinical team.
          </h1>
          <p className="text-[#59655E] text-base sm:text-lg leading-relaxed">
            Our team delivers top-quality, compassionate care that prioritizes each patient&apos;s unique needs, oral wellness, and peace of mind in downtown Decatur, Georgia.
          </p>
        </div>

        {/* Doctor In-Depth Editorial Feature */}
        <div className="rounded-3xl bg-[#E8EFE8] border border-[#D8E4D7] p-8 sm:p-12 lg:p-16 mb-24 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Doctor Portrait (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#D8E4D7] bg-white shadow-sm aspect-[4/5]">
                <Image
                  src={doctorData.headshotUrl}
                  alt="Dr. Shikha M Amin, DMD - Georgia Dental Center"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#D8E4D7] shadow-sm">
                  <div className="font-display text-xl font-semibold text-[#164A3A]">
                    {doctorData.name}
                  </div>
                  <div className="text-xs font-mono font-medium text-[#2E6B57]">
                    Doctor of Dental Medicine • NPI: {doctorData.npi}
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Detailed Bio & Background (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#6F9B86]">
                  Lead Dental Surgeon
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#164A3A]">
                  {doctorData.name}
                </h2>
                <p className="text-[#18211D] text-base sm:text-lg leading-relaxed">
                  {doctorData.leadBio}
                </p>
              </div>

              {/* Verified Mission Quote */}
              <div className="relative p-6 sm:p-7 rounded-2xl bg-white border border-[#D8E4D7] shadow-sm">
                <Quote className="w-8 h-8 text-[#6F9B86]/30 absolute top-4 right-5 pointer-events-none" />
                <p className="text-[#59655E] text-xs sm:text-sm leading-relaxed italic relative z-10">
                  &ldquo;{doctorData.quote}&rdquo;
                </p>
              </div>

              {/* Education & Residency */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#164A3A] flex items-center gap-2 font-mono">
                  <GraduationCap className="w-4 h-4 text-[#2E6B57]" />
                  Clinical Education & Residency
                </h3>
                <div className="space-y-3">
                  {doctorData.education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-[#D8E4D7] shadow-sm flex items-start gap-3"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#2E6B57] flex-shrink-0 mt-2" />
                      <div>
                        <div className="text-xs font-semibold text-[#164A3A]">{edu.degree}</div>
                        <div className="text-xs text-[#59655E] mt-0.5">{edu.institution}</div>
                      </div>
                    </div>
                  ))}

                  <div className="p-4 rounded-xl bg-white border border-[#D8E4D7] shadow-sm flex items-start gap-3">
                    <Award className="w-4 h-4 text-[#2E6B57] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-xs font-semibold text-[#164A3A]">
                        General Practice Residency (GPR)
                      </div>
                      <div className="text-xs text-[#59655E] mt-0.5">
                        {doctorData.residency}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Life & Community */}
              <div className="space-y-2 pt-2 border-t border-[#D8E4D7]">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#164A3A] flex items-center gap-1.5 font-mono">
                  <Heart className="w-3.5 h-3.5 text-[#2E6B57]" />
                  Community & Life Outside Dentistry
                </h3>
                <p className="text-[#59655E] text-xs sm:text-sm leading-relaxed">
                  {doctorData.personalBio}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/make-appointment"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#164A3A] hover:bg-[#2E6B57] text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-[#D8E4D7]" />
                  <span>Schedule with Dr. Amin</span>
                </Link>

                <a
                  href={`tel:${siteConfig.contact.phoneFormatted}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F7F8F3] border border-[#D8E4D7] text-[#164A3A] text-sm font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#2E6B57]" />
                  <span>Call (404) 377-7711</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical & Operational Staff Directory */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#6F9B86]">
              <Users className="w-3.5 h-3.5 text-[#164A3A]" />
              <span>Dedicated Practice Team</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#164A3A]">
              The Georgia Dental Center Team
            </h2>
            <p className="text-[#59655E] text-sm sm:text-base leading-relaxed">
              Our registered hygienists, certified dental assistants, and practice coordinators are committed to providing you with an unhurried, comfortable dental experience at every visit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="p-6 rounded-2xl bg-white border border-[#D8E4D7] hover:border-[#164A3A]/40 transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E8EFE8] border border-[#D8E4D7] flex items-center justify-center font-display text-lg font-semibold text-[#164A3A] mb-4">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-base font-semibold text-[#164A3A] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-[#2E6B57] tracking-wide">
                    {member.title}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#D8E4D7] text-[11px] text-[#59655E] flex items-center justify-between">
                  <span>Decatur Office</span>
                  <span className="font-mono text-[#6F9B86]">Verified Staff</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
