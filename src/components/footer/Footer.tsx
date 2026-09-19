"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/data/siteConfig";
import { initGSAP } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      // Staggered column entrance
      gsap.fromTo(
        ".footer-col",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <footer
      ref={footerRef}
      className="bg-[#164A3A] text-[#E8EFE8] border-t border-[#2E6B57] pt-16 pb-28 sm:pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#2E6B57]">
          {/* Column 1: Brand & Practice Identity (4 cols) */}
          <div className="footer-col lg:col-span-4 space-y-6">
            <Logo inverted={true} />
            <p className="text-sm text-[#D8E4D7] leading-relaxed max-w-sm">
              Personalized, conservative dental care designed around your comfort, health, and smile vitality in downtown Decatur, Georgia.
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-xs uppercase tracking-widest text-[#6F9B86] font-mono font-medium">
                Practice Headquarters
              </div>
              <p className="text-sm text-[#E8EFE8] flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#6F9B86] flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address.full}</span>
              </p>
              <p className="text-sm text-[#E8EFE8] flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#6F9B86] flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phoneFormatted}`}
                  className="hover:text-white transition-colors font-medium inline-block"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
            </div>

            {/* AARP Selection Badge */}
            <div className="p-3.5 rounded-xl bg-[#2E6B57]/40 border border-[#6F9B86]/40 text-xs text-[#E8EFE8] flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white text-[#164A3A] flex items-center justify-center flex-shrink-0 font-bold text-xs">
                AARP
              </div>
              <div>
                <span className="font-semibold text-white block">Selected by AARP®</span>
                <span className="text-[#D8E4D7] text-[11px]">
                  Orahh Care Dental Community Provider
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="footer-col lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-medium tracking-widest text-white uppercase">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-[#D8E4D7] hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/our-services" className="text-[#D8E4D7] hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/meet-our-team" className="text-[#D8E4D7] hover:text-white transition-colors">
                  Meet Dr. Amin
                </Link>
              </li>
              <li>
                <Link href="/what-to-expect" className="text-[#D8E4D7] hover:text-white transition-colors">
                  What to Expect
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="text-[#D8E4D7] hover:text-white transition-colors">
                  Dental Insurance
                </Link>
              </li>
              <li>
                <Link href="/payment-options" className="text-[#D8E4D7] hover:text-white transition-colors">
                  Payment & Financing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#D8E4D7] hover:text-white transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Services (3 cols) */}
          <div className="footer-col lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-medium tracking-widest text-white uppercase">
              Clinical Care
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/our-services/dental-cleanings-checkups"
                  className="text-[#D8E4D7] hover:text-white transition-colors"
                >
                  Cleanings & Checkups
                </Link>
              </li>
              <li>
                <Link
                  href="/our-services/invisalign-treatment"
                  className="text-[#D8E4D7] hover:text-white transition-colors"
                >
                  Invisalign® Clear Aligners
                </Link>
              </li>
              <li>
                <Link
                  href="/our-services/gum-disease-treatment"
                  className="text-[#D8E4D7] hover:text-white transition-colors"
                >
                  Gum Disease Periodontics
                </Link>
              </li>
              <li>
                <Link
                  href="/our-services/restorative-dentistry"
                  className="text-[#D8E4D7] hover:text-white transition-colors"
                >
                  Ceramic Crowns & Fillings
                </Link>
              </li>
              <li>
                <Link
                  href="/our-services/root-canal-treatment"
                  className="text-[#D8E4D7] hover:text-white transition-colors"
                >
                  Root Canal Treatment
                </Link>
              </li>
              <li>
                <Link
                  href="/our-services/dentures"
                  className="text-[#D8E4D7] hover:text-white transition-colors"
                >
                  Dentures & Partials
                </Link>
              </li>
              <li>
                <Link
                  href="/our-services/nitrous-oxide"
                  className="text-[#D8E4D7] hover:text-white transition-colors"
                >
                  Sedation & Nitrous Oxide
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Office Hours (3 cols) */}
          <div className="footer-col lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-medium tracking-widest text-white uppercase flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#6F9B86]" />
              Office Hours
            </h3>
            <div className="space-y-1.5 text-xs">
              {siteConfig.hours.map((h, i) => (
                <div
                  key={i}
                  className="flex justify-between py-1.5 border-b border-[#2E6B57] text-[#D8E4D7]"
                >
                  <span className="font-medium text-[#E8EFE8]">{h.day}</span>
                  <span className={h.isClosed ? "text-[#6F9B86] italic" : "text-white font-medium"}>
                    {h.isClosed ? "Closed" : `${h.open} – ${h.close}`}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <Link
                href="/make-appointment"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-[#164A3A] text-xs font-semibold hover:bg-[#F7F8F3] transition-colors duration-200 shadow-sm active:scale-[0.98]"
              >
                <span>Schedule an Appointment</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#164A3A]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Legal & Medical Disclaimers */}
        <div className="footer-col py-8 border-b border-[#2E6B57] text-xs text-[#D8E4D7]/80 space-y-3 leading-relaxed">
          <p>
            *Dental services are provided by independent dentists. Orahh Care Dental Community is a brand owned by Heartland Dental LLC, which is a dental support organization that provides administrative and business support services to dental practices. AARP and its affiliates do not employ the dentists and staff in the dental practices and are not responsible for the services provided by them. Heartland Dental pays a royalty fee to AARP for the use of its intellectual property. These fees are used for the general purposes of AARP.
          </p>
          <p>
            Legal Entity: {siteConfig.legalName}. All clinical diagnoses and treatments are conducted by licensed dental professionals.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="footer-col pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8E4D7]">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">
              Directions & Map
            </Link>
            <a
              href="https://facebook.com/155836567814729"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/georgiadentalcenter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/GeorgiaDental"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/user/GeorgiaDentalCenter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
