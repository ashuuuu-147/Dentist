"use client";

import React from "react";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const MobileActionBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-lg border-t border-[#D8E4D7] px-3 py-2 shadow-[0_-8px_25px_rgba(22,74,58,0.06)]">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href={`tel:${siteConfig.contact.phoneFormatted}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-xl bg-[#F7F8F3] border border-[#D8E4D7] text-[#164A3A] text-[11px] font-semibold tracking-wider uppercase active:scale-[0.98] transition-transform min-w-0 shadow-sm"
          aria-label="Call Georgia Dental Center at (404) 377-7711"
        >
          <Phone className="w-3.5 h-3.5 text-[#2E6B57] flex-shrink-0" />
          <span className="truncate">Call Us</span>
        </a>

        <Link
          href="/make-appointment"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-xl bg-[#164A3A] text-white text-[11px] font-bold tracking-wider uppercase active:scale-[0.98] transition-transform shadow-sm min-w-0"
          aria-label="Schedule an appointment"
        >
          <Calendar className="w-3.5 h-3.5 text-white flex-shrink-0" />
          <span className="truncate">Schedule</span>
        </Link>
      </div>
    </div>
  );
};
