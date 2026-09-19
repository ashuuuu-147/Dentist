import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Calendar, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] bg-[#F7F8F3] flex items-center justify-center py-20 px-4 sm:px-6 text-center">
      <div className="max-w-lg space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8EFE8] border border-[#D8E4D7] text-xs font-mono text-[#164A3A] tracking-widest uppercase">
          Error 404 • Page Not Found
        </div>

        <h1 className="font-display text-5xl sm:text-6xl font-medium text-[#164A3A] tracking-tight">
          Let&apos;s get you back on track.
        </h1>

        <p className="text-[#59655E] text-sm sm:text-base leading-relaxed">
          The dental clinical resource or page you are looking for may have moved or is no longer available. Please choose one of the options below.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#164A3A] hover:bg-[#2E6B57] text-white font-semibold text-xs shadow-sm transition-colors"
          >
            <Home className="w-4 h-4 text-[#D8E4D7]" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/our-services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#E8EFE8] border border-[#D8E4D7] text-[#164A3A] font-semibold text-xs transition-colors shadow-sm"
          >
            <span>View All Services</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-[#D8E4D7] text-xs text-[#59655E]">
          <span>Need immediate assistance? </span>
          <a
            href={`tel:${siteConfig.contact.phoneFormatted}`}
            className="text-[#164A3A] hover:underline font-semibold"
          >
            Call our Decatur office at (404) 377-7711
          </a>
        </div>
      </div>
    </div>
  );
}
