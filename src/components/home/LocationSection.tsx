"use client";

import React, { useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import { MapPin, Phone, Clock, ExternalLink, Navigation } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { initGSAP } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const LocationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Compute if currently open (simple helper)
  const isCurrentlyOpen = useMemo(() => {
    try {
      const now = new Date();
      const day = now.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      // Mon: 8:30 (510 min) to 17:00 (1020 min)
      if (day === 1 && totalMinutes >= 510 && totalMinutes <= 1020) return true;
      // Tue-Thu: 8:00 (480 min) to 17:00 (1020 min)
      if ((day === 2 || day === 3 || day === 4) && totalMinutes >= 480 && totalMinutes <= 1020)
        return true;
      // Fri: 8:00 (480 min) to 13:00 (780 min)
      if (day === 5 && totalMinutes >= 480 && totalMinutes <= 780) return true;

      return false;
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        ".location-header-elem",
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

      // Left Column Entrance
      gsap.fromTo(
        ".location-card-left",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".location-grid",
            start: "top 78%",
          },
        }
      );

      // Right Column (Map) Entrance
      gsap.fromTo(
        ".location-card-right",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".location-grid",
            start: "top 78%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#F7F8F3] border-t border-[#D8E4D7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="location-header-elem text-xs font-mono uppercase tracking-[0.25em] text-[#6F9B86] flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#164A3A]" />
            <span>07 / Practice Location & Access</span>
          </div>
          <h2 className="location-header-elem font-display text-4xl sm:text-5xl font-medium text-[#164A3A] tracking-tight">
            Find our practice in downtown Decatur.
          </h2>
          <p className="location-header-elem text-[#59655E] text-base sm:text-lg leading-relaxed">
            Conveniently located on the 5th floor of 755 Commerce Drive, with accessible elevator transit, dedicated visitor parking, and walking access from MARTA.
          </p>
        </div>

        {/* 2-Column Location Layout */}
        <div className="location-grid grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Building Imagery & Address Card (6 cols) */}
          <div className="location-card-left lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Building Exterior Card */}
            <div className="relative rounded-2xl overflow-hidden border border-[#D8E4D7] bg-white h-64 sm:h-72 shadow-sm group">
              <Image
                src="/assets/images/office-building.jpg"
                alt="755 Commerce Dr building in Decatur GA - Georgia Dental Center"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute bottom-4 left-5 right-5 flex justify-between items-end">
                <div>
                  <div className="text-xs font-mono font-medium text-[#D8E4D7] uppercase tracking-wider">
                    Physical Address
                  </div>
                  <div className="text-lg font-display font-semibold text-white">
                    755 Commerce Dr, Suite 513
                  </div>
                  <div className="text-xs text-white/80">Decatur, Georgia 30030</div>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#D8E4D7] text-xs shadow-sm">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isCurrentlyOpen ? "bg-[#2E6B57] animate-pulse" : "bg-slate-400"
                    }`}
                  />
                  <span className="text-[#164A3A] font-semibold">
                    {isCurrentlyOpen ? "Open Now" : "Closed"}
                  </span>
                </div>
              </div>
            </div>

            {/* Hours & Contact Card */}
            <div className="p-8 rounded-2xl bg-white border border-[#D8E4D7] shadow-sm space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#D8E4D7]">
                  <span className="text-xs font-semibold text-[#164A3A] uppercase tracking-wider flex items-center gap-2 font-mono">
                    <Clock className="w-4 h-4 text-[#2E6B57]" />
                    Office Hours
                  </span>
                  <span className="text-xs text-[#59655E] font-mono">Eastern Time (ET)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
                  {siteConfig.hours.map((h, i) => (
                    <div
                      key={i}
                      className="flex justify-between py-1.5 border-b border-[#D8E4D7]/50 text-[#59655E]"
                    >
                      <span className="text-[#164A3A] font-medium">{h.day}</span>
                      <span className={h.isClosed ? "text-[#59655E] italic" : "text-[#18211D] font-semibold"}>
                        {h.isClosed ? "Closed" : `${h.open} – ${h.close}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#164A3A] hover:bg-[#2E6B57] text-white text-xs font-semibold transition-all active:scale-[0.98] shadow-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Driving Directions</span>
                </a>

                <a
                  href={`tel:${siteConfig.contact.phoneFormatted}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#F7F8F3] hover:bg-[#E8EFE8] border border-[#D8E4D7] text-[#164A3A] text-xs font-semibold transition-all active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4 text-[#2E6B57]" />
                  <span>Call (404) 377-7711</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map Embed (6 cols) */}
          <div className="location-card-right lg:col-span-6 rounded-2xl overflow-hidden border border-[#D8E4D7] bg-white shadow-sm relative min-h-[440px] flex flex-col">
            <iframe
              title="Georgia Dental Center Location Map in Decatur GA"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.382601955146!2d-84.29659192348508!3d33.77744943224716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f507159fb8802b%3A0xa4422d3c71330b46!2sGeorgia%20Dental%20Center!5e0!3m2!1sen!2sus!4v1710800000000!5m2!1sen!2sus"
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
              allowFullScreen={false}
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute top-4 right-4 z-10">
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-white/95 backdrop-blur-md border border-[#D8E4D7] text-xs font-semibold text-[#164A3A] hover:text-[#2E6B57] hover:bg-[#F7F8F3] transition-all active:scale-[0.98] inline-flex items-center gap-1.5 shadow-sm"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#2E6B57]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
