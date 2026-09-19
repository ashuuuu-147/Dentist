"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Calendar,
  Phone,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Send,
  Loader2,
  MapPin,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const appointmentRequestSchema = z.object({
  patientType: z.enum(["new", "existing"], {
    required_error: "Please select if you are a new or existing patient.",
  }),
  reason: z.string().min(1, "Please select an appointment reason."),
  preferredDay: z.string().min(1, "Please select your preferred day of the week."),
  preferredTime: z.string().min(1, "Please select your preferred time of day."),
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  phone: z.string().min(10, "Please provide a valid telephone number."),
  email: z.string().email("Please provide a valid email address."),
  insurance: z.string().optional(),
  notes: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must consent to be contacted regarding your appointment." }),
  }),
});

type AppointmentFormData = z.infer<typeof appointmentRequestSchema>;

export default function MakeAppointmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    fullName: string;
    phone: string;
    reason: string;
  } | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentRequestSchema),
    defaultValues: {
      patientType: "new",
      reason: "cleanings",
      preferredDay: "any",
      preferredTime: "morning",
    },
  });

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          formType: "appointment_request",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to transmit appointment request. Please try again or call our office.");
      }

      setSubmittedData({
        fullName: data.fullName,
        phone: data.phone,
        reason: data.reason,
      });
      reset();
    } catch (err: any) {
      setSubmitError(err.message || "An unexpected error occurred. Please call (404) 377-7711.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 sm:py-24 bg-[#F7F8F3] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Header Hero */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#6F9B86] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#164A3A]" />
            <span>Appointment Scheduling & Reservations</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-medium text-[#164A3A] tracking-tight">
            Schedule your appointment.
          </h1>
          <p className="text-[#59655E] text-base sm:text-lg leading-relaxed">
            Reserve your visit with Dr. Shikha M Amin at Georgia Dental Center in Decatur, GA. Submit your appointment preferences below or contact our practice directly.
          </p>
        </div>

        {/* Immediate Call Notice Bar */}
        <div className="p-6 rounded-2xl bg-white border border-[#D8E4D7] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#E8EFE8] border border-[#D8E4D7] flex items-center justify-center text-[#164A3A] flex-shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#164A3A]">Prefer to schedule immediately by phone?</div>
              <div className="text-xs text-[#59655E]">
                Call our Decatur front desk directly at (404) 377-7711 during office hours.
              </div>
            </div>
          </div>

          <a
            href={`tel:${siteConfig.contact.phoneFormatted}`}
            className="w-full sm:w-auto text-center inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#F7F8F3] hover:bg-[#E8EFE8] border border-[#D8E4D7] text-[#164A3A] text-xs font-semibold whitespace-nowrap transition-colors"
          >
            Call (404) 377-7711
          </a>
        </div>

        {/* Form or Submitted Success State */}
        {submittedData ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#2E6B57]/40 text-center space-y-6 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-[#E8EFE8] border border-[#2E6B57] text-[#2E6B57] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-lg mx-auto">
              <h2 className="font-display text-3xl font-medium text-[#164A3A]">
                Appointment Request Received
              </h2>
              <p className="text-[#59655E] text-sm leading-relaxed">
                Thank you, <span className="text-[#164A3A] font-semibold">{submittedData.fullName}</span>. Your request has been transmitted directly to our Decatur front desk team.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F7F8F3] border border-[#D8E4D7] max-w-md mx-auto text-xs text-[#59655E] text-left space-y-2">
              <div className="font-semibold text-[#164A3A] uppercase tracking-wider text-[11px] pb-1 border-b border-[#D8E4D7]">
                Next Steps
              </div>
              <p>
                • Our scheduling coordinator will contact you at <span className="text-[#164A3A] font-mono font-medium">{submittedData.phone}</span> to confirm your exact visit time.
              </p>
              <p>
                • We will verify your dental insurance benefits in advance to provide upfront fee transparency.
              </p>
            </div>

            <div className="pt-4 flex justify-center gap-4">
              <button
                type="button"
                onClick={() => setSubmittedData(null)}
                className="px-6 py-2.5 rounded-xl bg-white hover:bg-[#F7F8F3] border border-[#D8E4D7] text-xs font-semibold text-[#164A3A] transition-colors"
              >
                Submit Another Request
              </button>

              <Link
                href="/what-to-expect"
                className="px-6 py-2.5 rounded-xl bg-[#164A3A] hover:bg-[#2E6B57] text-white text-xs font-semibold transition-colors shadow-sm"
              >
                What to Expect on Your Visit
              </Link>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-8 sm:p-12 rounded-3xl bg-white border border-[#D8E4D7] shadow-sm space-y-10"
            noValidate
          >
            {/* Step 1: Patient Status */}
            <div className="space-y-4">
              <label className="text-xs font-mono font-medium uppercase tracking-wider text-[#164A3A] block">
                1. Are you a new or existing patient?
              </label>
              <div className="grid grid-cols-2 gap-4 max-w-md">
                <label className="relative flex items-center justify-center p-4 rounded-xl border border-[#D8E4D7] bg-[#F7F8F3] cursor-pointer has-[:checked]:border-[#164A3A] has-[:checked]:bg-[#E8EFE8] transition-colors">
                  <input
                    type="radio"
                    value="new"
                    {...register("patientType")}
                    className="sr-only"
                  />
                  <span className="text-sm font-semibold text-[#164A3A]">New Patient</span>
                </label>

                <label className="relative flex items-center justify-center p-4 rounded-xl border border-[#D8E4D7] bg-[#F7F8F3] cursor-pointer has-[:checked]:border-[#164A3A] has-[:checked]:bg-[#E8EFE8] transition-colors">
                  <input
                    type="radio"
                    value="existing"
                    {...register("patientType")}
                    className="sr-only"
                  />
                  <span className="text-sm font-semibold text-[#164A3A]">Existing Patient</span>
                </label>
              </div>
              {errors.patientType && (
                <p className="text-xs text-rose-600">{errors.patientType.message}</p>
              )}
            </div>

            {/* Step 2: Reason for Visit */}
            <div className="space-y-4">
              <label htmlFor="reasonSelect" className="text-xs font-mono font-medium uppercase tracking-wider text-[#164A3A] block">
                2. Reason for Appointment
              </label>
              <select
                id="reasonSelect"
                {...register("reason")}
                className="w-full p-3.5 rounded-xl bg-[#F7F8F3] border border-[#D8E4D7] text-[#18211D] text-sm focus:border-[#164A3A] focus:outline-none transition-colors"
              >
                <option value="cleanings">Routine Dental Cleaning & Comprehensive Exam</option>
                <option value="toothache">Toothache / Dental Emergency Care</option>
                <option value="gum-disease">Periodontics / Gum Health Care</option>
                <option value="invisalign">Invisalign® Clear Aligners Consultation</option>
                <option value="restorative">Crown, Bridge, or Filling</option>
                <option value="dentures">Dentures / Partial Dentures</option>
                <option value="cosmetic">Cosmetic Dentistry / Smile Evaluation</option>
                <option value="other">Other Consultation</option>
              </select>
              {errors.reason && (
                <p className="text-xs text-rose-600">{errors.reason.message}</p>
              )}
            </div>

            {/* Step 3: Preferred Day & Time */}
            <div className="space-y-4">
              <label className="text-xs font-mono font-medium uppercase tracking-wider text-[#164A3A] block">
                3. Preferred Timing
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredDaySelect" className="text-xs text-[#59655E] mb-1.5 block">Preferred Day</label>
                  <select
                    id="preferredDaySelect"
                    {...register("preferredDay")}
                    className="w-full p-3 rounded-xl bg-[#F7F8F3] border border-[#D8E4D7] text-[#18211D] text-sm focus:border-[#164A3A] focus:outline-none"
                  >
                    <option value="any">First Available (Any Weekday)</option>
                    <option value="monday">Monday (8:30 AM – 5:00 PM)</option>
                    <option value="tuesday">Tuesday (8:00 AM – 5:00 PM)</option>
                    <option value="wednesday">Wednesday (8:00 AM – 5:00 PM)</option>
                    <option value="thursday">Thursday (8:00 AM – 5:00 PM)</option>
                    <option value="friday">Friday (8:00 AM – 1:00 PM)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredTimeSelect" className="text-xs text-[#59655E] mb-1.5 block">Preferred Time of Day</label>
                  <select
                    id="preferredTimeSelect"
                    {...register("preferredTime")}
                    className="w-full p-3 rounded-xl bg-[#F7F8F3] border border-[#D8E4D7] text-[#18211D] text-sm focus:border-[#164A3A] focus:outline-none"
                  >
                    <option value="morning">Morning (8:00 AM – 12:00 PM)</option>
                    <option value="afternoon">Afternoon (12:00 PM – 5:00 PM)</option>
                    <option value="anytime">Any Time of Day</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 4: Contact Information */}
            <div className="space-y-4 pt-4 border-t border-[#D8E4D7]">
              <label className="text-xs font-mono font-medium uppercase tracking-wider text-[#164A3A] block">
                4. Your Contact Details
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullNameInput" className="text-xs text-[#59655E] mb-1.5 block">Full Legal Name *</label>
                  <input
                    id="fullNameInput"
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
                  <label htmlFor="phoneInput" className="text-xs text-[#59655E] mb-1.5 block">Mobile Telephone Number *</label>
                  <input
                    id="phoneInput"
                    type="tel"
                    placeholder="(404) 555-0123"
                    {...register("phone")}
                    className="w-full p-3 rounded-xl bg-[#F7F8F3] border border-[#D8E4D7] text-[#18211D] text-sm focus:border-[#164A3A] focus:outline-none"
                  />
                  {errors.phone && (
                    <p className="text-xs text-rose-600 mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="emailInput" className="text-xs text-[#59655E] mb-1.5 block">Email Address *</label>
                  <input
                    id="emailInput"
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
                  <label htmlFor="insuranceInput" className="text-xs text-[#59655E] mb-1.5 block">Dental Insurance Provider (Optional)</label>
                  <input
                    id="insuranceInput"
                    type="text"
                    placeholder="e.g., Delta, Cigna, Aetna, or None"
                    {...register("insurance")}
                    className="w-full p-3 rounded-xl bg-[#F7F8F3] border border-[#D8E4D7] text-[#18211D] text-sm focus:border-[#164A3A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="notesInput" className="text-xs text-[#59655E] mb-1.5 block">Additional Clinical Notes or Questions (Optional)</label>
                <textarea
                  id="notesInput"
                  rows={3}
                  placeholder="Share any specific dental symptoms, concerns, or accommodations..."
                  {...register("notes")}
                  className="w-full p-3 rounded-xl bg-[#F7F8F3] border border-[#D8E4D7] text-[#18211D] text-sm focus:border-[#164A3A] focus:outline-none"
                />
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="space-y-2 pt-2 border-t border-[#D8E4D7]">
              <label className="flex items-start gap-3 cursor-pointer text-xs text-[#59655E]">
                <input
                  type="checkbox"
                  {...register("consent")}
                  className="mt-0.5 rounded border-[#D8E4D7] bg-[#F7F8F3] text-[#164A3A] focus:ring-[#164A3A] w-4 h-4"
                />
                <span>
                  I authorize Georgia Dental Center to contact me at the phone number and email provided regarding my appointment request and healthcare reminders.
                </span>
              </label>
              {errors.consent && (
                <p className="text-xs text-rose-600">{errors.consent.message}</p>
              )}
            </div>

            {submitError && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#164A3A] hover:bg-[#2E6B57] text-white text-sm font-semibold transition-all shadow-sm disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Request...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Appointment Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Practice Suite Information Card */}
        <div className="p-8 rounded-2xl bg-white border border-[#D8E4D7] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#59655E]">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-[#2E6B57] flex-shrink-0" />
            <span>755 Commerce Dr, Ste 513, Decatur, GA 30030</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#2E6B57] flex-shrink-0" />
            <span>Office Hours: Mon–Thu 8 AM–5 PM | Fri 8 AM–1 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
