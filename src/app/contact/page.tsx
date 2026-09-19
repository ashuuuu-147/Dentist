"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Mail,
  Navigation,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  phone: z.string().min(10, "Please enter a valid telephone number."),
  email: z.string().email("Please enter a valid email address."),
  reason: z.string().min(1, "Please select an inquiry reason."),
  preferredMethod: z.enum(["phone", "email"], {
    required_error: "Please select your preferred contact method.",
  }),
  message: z.string().min(5, "Message must contain at least 5 characters."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must consent to be contacted." }),
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      reason: "general",
      preferredMethod: "phone",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          formType: "contact_inquiry",
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send inquiry. Please try again or call our office.");
      }

      setIsSuccess(true);
      reset();
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 sm:py-24 bg-[#F7F8F3] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#6F9B86] flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#164A3A]" />
            <span>Decatur Practice Location & Contact</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-medium text-[#164A3A] tracking-tight">
            Contact Georgia Dental Center.
          </h1>
          <p className="text-[#59655E] text-base sm:text-lg leading-relaxed">
            Have questions about dental coverage, treatments, or appointments? Connect directly with our clinical and administrative team in Decatur by phone or send us an inquiry below.
          </p>
        </div>

        {/* 2-Column Grid: Form & Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#D8E4D7] shadow-sm">
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#164A3A] mb-2">
                Send a Message
              </h2>
              <p className="text-xs sm:text-sm text-[#59655E] mb-8">
                Our front desk coordinators respond to all patient inquiries promptly during office hours.
              </p>

              {isSuccess ? (
                <div className="p-8 rounded-2xl bg-[#E8EFE8] border border-[#2E6B57]/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#2E6B57] text-[#2E6B57] flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl font-medium text-[#164A3A]">
                    Message Successfully Sent
                  </h3>
                  <p className="text-xs sm:text-sm text-[#59655E] max-w-md mx-auto">
                    Thank you for reaching out. A Georgia Dental Center representative will contact you via your preferred communication method.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="px-5 py-2.5 rounded-xl bg-white hover:bg-[#F7F8F3] border border-[#D8E4D7] text-xs font-semibold text-[#164A3A] transition-colors shadow-sm"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contactFullName" className="text-xs text-[#59655E] mb-1.5 block">Full Legal Name *</label>
                      <input
                        id="contactFullName"
                        type="text"
                        placeholder="Jane Doe"
                        {...register("fullName")}
                        className="w-full p-3 rounded-xl bg-[#F7F8F3] border border-[#D8E4D7] text-[#18211D] text-sm focus:border-[#164A3A] focus:outline-none"
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-600 mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contactPhone" className="text-xs text-[#59655E] mb-1.5 block">Telephone Number *</label>
                      <input
                        id="contactPhone"
                        type="tel"
                        placeholder="(404) 555-0123"
                        {...register("phone")}
                        className="w-full p-3 rounded-xl bg-[#F7F8F3] border border-[#D8E4D7] text-[#18211D] text-sm focus:border-[#164A3A] focus:outline-none"
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-600 mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contactEmail" className="text-xs text-[#59655E] mb-1.5 block">Email Address *</label>
                      <input
                        id="contactEmail"
                        type="email"
                        placeholder="jane@example.com"
                        {...register("email")}
                        className="w-full p-3 rounded-xl bg-[#F7F8F3] border border-[#D8E4D7] text-[#18211D] text-sm focus:border-[#164A3A] focus:outline-none"
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-600 mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contactReason" className="text-xs text-[#59655E] mb-1.5 block">Reason / Service *</label>
                      <select
                        id="contactReason"
                        {...register("reason")}
                        className="w-full p-3 rounded-xl bg-[#F7F8F3] border border-[#D8E4D7] text-[#18211D] text-sm focus:border-[#164A3A] focus:outline-none"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="insurance">Insurance Coverage Verification</option>
                        <option value="appointment">Appointment Questions</option>
                        <option value="invisalign">Invisalign® Aligners</option>
                        <option value="periodontics">Gum Disease Periodontics</option>
                        <option value="restorative">Crowns & Restorations</option>
                        <option value="savings-plan">VantageOne Savings Plan</option>
                      </select>
                      {errors.reason && (
                        <p className="text-xs text-rose-600 mt-1">{errors.reason.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-[#59655E] mb-1.5 block">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 text-xs text-[#18211D] cursor-pointer">
                        <input
                          type="radio"
                          value="phone"
                          {...register("preferredMethod")}
                          className="border-[#D8E4D7] bg-[#F7F8F3] text-[#164A3A] focus:ring-[#164A3A]"
                        />
                        <span>Phone Call</span>
                      </label>
                      <label className="flex items-center gap-2 text-xs text-[#18211D] cursor-pointer">
                        <input
                          type="radio"
                          value="email"
                          {...register("preferredMethod")}
                          className="border-[#D8E4D7] bg-[#F7F8F3] text-[#164A3A] focus:ring-[#164A3A]"
                        />
                        <span>Email</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contactMessage" className="text-xs text-[#59655E] mb-1.5 block">Your Message *</label>
                    <textarea
                      id="contactMessage"
                      rows={4}
                      placeholder="How can our clinical team help you today? Please do not include sensitive medical history."
                      {...register("message")}
                      className="w-full p-3 rounded-xl bg-[#F7F8F3] border border-[#D8E4D7] text-[#18211D] text-sm focus:border-[#164A3A] focus:outline-none"
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-600 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Consent */}
                  <div>
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#59655E]">
                      <input
                        type="checkbox"
                        {...register("consent")}
                        className="mt-0.5 rounded border-[#D8E4D7] bg-[#F7F8F3] text-[#164A3A] focus:ring-[#164A3A] w-4 h-4"
                      />
                      <span>
                        I consent to Georgia Dental Center contacting me at the phone number or email provided regarding this inquiry.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-xs text-rose-600 mt-1">{errors.consent.message}</p>
                    )}
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#164A3A] hover:bg-[#2E6B57] text-white text-xs font-semibold transition-all shadow-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Secure Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Address, Hours, & Google Map Embed (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-[#D8E4D7] shadow-sm space-y-6">
              <div className="space-y-4">
                <h3 className="font-display text-2xl font-medium text-[#164A3A]">
                  Decatur Office
                </h3>

                <div className="space-y-2 text-sm text-[#59655E]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#2E6B57] flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-[#164A3A]">{siteConfig.name}</div>
                      <div>{siteConfig.address.street1}, {siteConfig.address.suite}</div>
                      <div>{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Phone className="w-4 h-4 text-[#2E6B57] flex-shrink-0" />
                    <a
                      href={`tel:${siteConfig.contact.phoneFormatted}`}
                      className="text-[#164A3A] hover:text-[#2E6B57] font-semibold"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="pt-4 border-t border-[#D8E4D7] space-y-3">
                <div className="text-xs font-mono font-medium uppercase tracking-wider text-[#164A3A] flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#2E6B57]" />
                  Office Hours
                </div>
                <div className="space-y-1.5 text-xs">
                  {siteConfig.hours.map((h, i) => (
                    <div
                      key={i}
                      className="flex justify-between py-1 border-b border-[#D8E4D7]/50 text-[#59655E]"
                    >
                      <span className="text-[#164A3A] font-medium">{h.day}</span>
                      <span className={h.isClosed ? "text-[#59655E] italic" : "text-[#18211D] font-semibold"}>
                        {h.isClosed ? "Closed" : `${h.open} – ${h.close}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Driving Directions CTA */}
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#F7F8F3] hover:bg-[#E8EFE8] border border-[#D8E4D7] text-[#164A3A] text-xs font-semibold transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4 text-[#2E6B57]" />
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#59655E] ml-1" />
              </a>
            </div>

            {/* Embedded Google Map Frame */}
            <div className="rounded-2xl overflow-hidden border border-[#D8E4D7] bg-white shadow-sm h-64">
              <iframe
                title="Georgia Dental Center Decatur Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.382601955146!2d-84.29659192348508!3d33.77744943224716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f507159fb8802b%3A0xa4422d3c71330b46!2sGeorgia%20Dental%20Center!5e0!3m2!1sen!2sus!4v1710800000000!5m2!1sen!2sus"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
