export interface FAQItem {
  question: string;
  answer: string;
  category: "appointment" | "general" | "first-visit";
}

export const generalFAQs: FAQItem[] = [
  {
    question: "When should I arrive for my appointment?",
    answer:
      "Please arrive 15 minutes before your scheduled appointment time. This allows our team to review your paperwork and verify your insurance information so you receive maximum clinical time with Dr. Amin and your hygienist. If you are running late, simply give our office a call at (404) 377-7711.",
    category: "appointment",
  },
  {
    question: "Can new patient paperwork be completed in the office instead of online?",
    answer:
      "While completing your paperwork online prior to arrival optimizes your appointment schedule, we are always happy to accommodate you in person. Please arrive 10 to 15 minutes early so our front office team can assist you with your intake forms.",
    category: "appointment",
  },
  {
    question: "What is your appointment cancellation policy?",
    answer:
      "If you need to reschedule or cancel your visit, please provide us with at least 48 hours' notice so that we may offer the reserved time slot to another patient awaiting care.",
    category: "appointment",
  },
  {
    question: "Where is Georgia Dental Center located?",
    answer:
      "We are located at 755 Commerce Dr, Ste 513, Decatur, GA 30030. Our modern suite features elevator access and convenient on-site building parking in the Commerce Drive corridor.",
    category: "general",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Please bring a valid government-issued photo ID, your current dental insurance card (if applicable), a list of any medications you are currently taking, and any recent dental X-rays from your previous dentist if available.",
    category: "first-visit",
  },
  {
    question: "Do you offer emergency dental appointments for severe toothaches?",
    answer:
      "Yes. If you are experiencing sudden dental trauma, a cracked tooth, severe tooth pain, or swollen gums, call our office immediately at (404) 377-7711. We prioritize urgent cases during our regular clinical hours.",
    category: "general",
  },
];
