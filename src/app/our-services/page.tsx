"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  ShieldCheck,
  Activity,
  Sparkles,
  Smile,
  HeartPulse,
  Gem,
  Cpu,
  ArrowRight,
  Filter,
} from "lucide-react";
import { servicesData, serviceCategories } from "@/data/services";

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || service.categorySlug === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="py-16 sm:py-24 bg-[#F7F8F3] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Page Hero Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#6F9B86] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#164A3A]" />
            <span>Clinical Treatments & Procedures</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-medium text-[#164A3A] tracking-tight">
            Comprehensive dental care in Decatur.
          </h1>
          <p className="text-[#59655E] text-base sm:text-lg leading-relaxed">
            From essential preventative wellness and periodontal stability to Invisalign® clear aligners and custom ceramic restorations, we partner with each patient for lifelong oral health.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#D8E4D7] shadow-sm w-full max-w-full min-w-0">
          {/* Search Input */}
          <div className="relative flex-1 min-w-0">
            <Search className="w-4 h-4 text-[#59655E] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services (e.g., cleanings, Invisalign, crowns)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#F7F8F3] border border-[#D8E4D7] text-[#18211D] text-sm placeholder:text-[#59655E] focus:border-[#164A3A] focus:outline-none transition-colors"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none text-xs w-full md:w-auto min-w-0 max-w-full">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedCategory === "all"
                  ? "bg-[#164A3A] text-white font-semibold"
                  : "bg-[#F7F8F3] text-[#59655E] hover:text-[#164A3A] hover:bg-[#E8EFE8]"
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setSelectedCategory("preventative")}
              className={`px-3.5 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedCategory === "preventative"
                  ? "bg-[#164A3A] text-white font-semibold"
                  : "bg-[#F7F8F3] text-[#59655E] hover:text-[#164A3A] hover:bg-[#E8EFE8]"
              }`}
            >
              Preventative
            </button>
            <button
              onClick={() => setSelectedCategory("periodontics")}
              className={`px-3.5 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedCategory === "periodontics"
                  ? "bg-[#164A3A] text-white font-semibold"
                  : "bg-[#F7F8F3] text-[#59655E] hover:text-[#164A3A] hover:bg-[#E8EFE8]"
              }`}
            >
              Periodontics
            </button>
            <button
              onClick={() => setSelectedCategory("orthodontics")}
              className={`px-3.5 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedCategory === "orthodontics"
                  ? "bg-[#164A3A] text-white font-semibold"
                  : "bg-[#F7F8F3] text-[#59655E] hover:text-[#164A3A] hover:bg-[#E8EFE8]"
              }`}
            >
              Invisalign®
            </button>
            <button
              onClick={() => setSelectedCategory("restorative")}
              className={`px-3.5 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedCategory === "restorative"
                  ? "bg-[#164A3A] text-white font-semibold"
                  : "bg-[#F7F8F3] text-[#59655E] hover:text-[#164A3A] hover:bg-[#E8EFE8]"
              }`}
            >
              Restorative
            </button>
            <button
              onClick={() => setSelectedCategory("comfort")}
              className={`px-3.5 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedCategory === "comfort"
                  ? "bg-[#164A3A] text-white font-semibold"
                  : "bg-[#F7F8F3] text-[#59655E] hover:text-[#164A3A] hover:bg-[#E8EFE8]"
              }`}
            >
              Comfort & Sedation
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl p-8 bg-white border border-[#D8E4D7] hover:border-[#164A3A]/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-[#6F9B86]">
                      {service.category}
                    </span>
                    {service.isFeatured && (
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-[#E8EFE8] text-[#164A3A] border border-[#D8E4D7]">
                        Featured
                      </span>
                    )}
                  </div>

                  <h2 className="font-display text-2xl font-medium text-[#164A3A] mb-3 group-hover:text-[#2E6B57] transition-colors">
                    {service.name}
                  </h2>

                  <p className="text-[#59655E] text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  <ul className="space-y-2 border-t border-[#D8E4D7] pt-4 mb-6">
                    {service.benefits.slice(0, 3).map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#59655E]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B57] flex-shrink-0 mt-1.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#D8E4D7] flex items-center justify-between">
                  <Link
                    href={`/our-services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#164A3A] hover:text-[#2E6B57] group-hover:underline"
                  >
                    <span>Read Treatment Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/make-appointment"
                    className="text-xs text-[#59655E] hover:text-[#164A3A] font-medium transition-colors"
                  >
                    Schedule
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-16 text-center rounded-2xl bg-white border border-[#D8E4D7] shadow-sm">
            <p className="text-[#59655E] text-base mb-4">
              No services matched your query &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-5 py-2.5 rounded-lg bg-[#164A3A] hover:bg-[#2E6B57] text-white font-semibold text-xs transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
