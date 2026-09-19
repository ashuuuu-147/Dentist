"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Calendar,
  Menu,
  X,
  ChevronDown,
  Clock,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 25);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/our-services",
      hasDropdown: true,
    },
    { name: "Meet the Team", href: "/meet-our-team" },
    { name: "What to Expect", href: "/what-to-expect" },
    { name: "Insurance", href: "/insurance" },
    { name: "Payment Options", href: "/payment-options" },
    { name: "Contact", href: "/contact" },
  ];

  const quickServices = [
    { name: "Preventative Oral Health", href: "/our-services/dental-cleanings-checkups" },
    { name: "Invisalign® Clear Aligners", href: "/our-services/invisalign-treatment" },
    { name: "Periodontics & Gum Care", href: "/our-services/gum-disease-treatment" },
    { name: "Restorative Dentistry & Crowns", href: "/our-services/restorative-dentistry" },
    { name: "Root Canal Therapy", href: "/our-services/root-canal-treatment" },
    { name: "Sedation & Comfort Care", href: "/our-services/nitrous-oxide" },
    { name: "View All Treatments →", href: "/our-services" },
  ];

  return (
    <>
      {/* Top micro-bar for Decatur Office indicator & Direct Phone */}
      <div className="hidden lg:block bg-[#E8EFE8] text-[#59655E] text-xs border-b border-[#D8E4D7] py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-[#18211D]">
              <MapPin className="w-3.5 h-3.5 text-[#164A3A]" />
              755 Commerce Dr, Ste 513, Decatur, GA 30030
            </span>
            <span className="inline-flex items-center gap-1.5 text-[#59655E]">
              <Clock className="w-3.5 h-3.5 text-[#2E6B57]" />
              Mon: 8:30 AM–5 PM | Tue–Thu: 8 AM–5 PM | Fri: 8 AM–1 PM
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-[#59655E]">
              Selected by AARP® • Orahh Care Community
            </span>
            <a
              href={`tel:${siteConfig.contact.phoneFormatted}`}
              className="inline-flex items-center gap-1.5 text-[#164A3A] hover:text-[#2E6B57] font-semibold transition-colors"
            >
              <Phone className="w-3 h-3" />
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Primary Sticky Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500 ease-out",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[#D8E4D7] shadow-[0_10px_35px_rgba(22,74,58,0.05)] py-3"
            : "bg-[#F7F8F3]/90 backdrop-blur-md border-b border-transparent py-4 sm:py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo with smooth scale */}
          <Logo className={cn("transition-transform duration-500", isScrolled ? "scale-95" : "scale-100")} />

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors inline-flex items-center gap-1",
                        isActive
                          ? "text-[#164A3A] font-semibold bg-[#E8EFE8]/70"
                          : "text-[#18211D] hover:text-[#164A3A] hover:bg-[#E8EFE8]/50"
                      )}
                    >
                      {link.name}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-[#2E6B57]" />
                    </Link>

                    {/* Services Dropdown Menu */}
                    <div
                      className={cn(
                        "absolute top-full left-0 w-72 pt-2 transition-all duration-200",
                        servicesDropdownOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      )}
                    >
                      <div className="bg-white border border-[#D8E4D7] rounded-xl p-3 shadow-xl backdrop-blur-xl">
                        <div className="text-[11px] font-semibold text-[#164A3A] tracking-wider uppercase px-3 py-1.5 border-b border-[#D8E4D7] mb-1.5">
                          Clinical Treatments
                        </div>
                        {quickServices.map((service, idx) => (
                          <Link
                            key={idx}
                            href={service.href}
                            className="block px-3 py-2 text-xs text-[#59655E] hover:text-[#164A3A] hover:bg-[#E8EFE8] rounded-lg transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors relative",
                    isActive
                      ? "text-[#164A3A] font-semibold bg-[#E8EFE8]/70"
                      : "text-[#18211D] hover:text-[#164A3A] hover:bg-[#E8EFE8]/50"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#164A3A] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Phone + Schedule CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phoneFormatted}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#59655E] hover:text-[#164A3A] transition-colors px-2 py-1"
            >
              <Phone className="w-4 h-4 text-[#2E6B57]" />
              <span>(404) 377-7711</span>
            </a>

            <Link
              href="/make-appointment"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#164A3A] hover:bg-[#2E6B57] rounded-xl transition-all shadow-sm hover:shadow-[0_4px_20px_rgba(22,74,58,0.2)] hover:-translate-y-0.5 active:translate-y-0 duration-200"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#18211D] hover:text-[#164A3A] hover:bg-[#E8EFE8] rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-[#164A3A]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm xl:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-out Drawer */}
      <aside
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#F7F8F3] border-l border-[#D8E4D7] p-6 flex-col justify-between shadow-2xl xl:hidden transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "flex translate-x-0" : "hidden translate-x-full"
        )}
        aria-label="Mobile Navigation"
      >
        <div className="flex flex-col">
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#D8E4D7]">
            <Logo variant="compact" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#59655E] hover:text-[#18211D] rounded-lg hover:bg-[#E8EFE8] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Nav Links */}
          <nav className="flex flex-col gap-1 py-6 overflow-y-auto max-h-[calc(100vh-260px)]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-xl transition-colors flex items-center justify-between",
                    isActive
                      ? "bg-[#E8EFE8] text-[#164A3A] font-semibold"
                      : "text-[#18211D] hover:bg-[#E8EFE8]/60 hover:text-[#164A3A]"
                  )}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#164A3A]" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Bottom Actions */}
        <div className="pt-6 border-t border-[#D8E4D7] flex flex-col gap-3">
          <a
            href={`tel:${siteConfig.contact.phoneFormatted}`}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-[#D8E4D7] text-[#164A3A] font-medium hover:bg-[#E8EFE8] transition-colors text-sm shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#2E6B57]" />
            <span>Call (404) 377-7711</span>
          </a>

          <Link
            href="/make-appointment"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#164A3A] text-white font-semibold hover:bg-[#2E6B57] transition-colors text-sm shadow-md"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Appointment</span>
          </Link>

          <p className="text-center text-[11px] text-[#59655E] pt-2">
            755 Commerce Dr, Ste 513 • Decatur, GA
          </p>
        </div>
      </aside>
    </>
  );
};
