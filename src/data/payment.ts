export interface PaymentOption {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  ctaLabel?: string;
  ctaLink?: string;
  isExternal?: boolean;
}

export const paymentOptions: PaymentOption[] = [
  {
    title: "CareCredit® Healthcare Financing",
    subtitle: "Flexible Monthly Installments",
    description:
      "Our office accepts CareCredit, a dedicated healthcare credit card designed to pay for out-of-pocket expenses not covered by dental insurance. CareCredit is subject to credit approval, but once accepted, you can use it again and again for preventive, restorative, and cosmetic procedures with convenient payment terms.",
    highlights: [
      "Interest-free promotional financing options available on qualifying purchases",
      "Pay for procedures over time in predictable monthly installments",
      "Immediate credit decision through secure online application",
      "Can be used for family members and repeat dental treatments",
    ],
    ctaLabel: "Apply for CareCredit",
    ctaLink: "https://www.carecredit.com/go/662KVR/",
    isExternal: true,
  },
  {
    title: "VantageOne Dental Savings Plan",
    subtitle: "In-House Membership For Uninsured Patients",
    description:
      "The VantageOne Dental Savings Plan allows you and your family to save on essential dental services like exams, cleanings, crowns, and fillings for one low annual fee. With no waiting periods, no deductibles, and no claim forms, your discounts kick in immediately upon enrollment.",
    highlights: [
      "Immediate savings with zero waiting period",
      "No deductibles to meet before discounts apply",
      "No claim forms, pre-authorizations, or insurance rejections",
      "Covers kids, teens, adults, and seniors with preexisting conditions",
    ],
    ctaLabel: "Inquire About Savings Plan",
    ctaLink: "/contact",
    isExternal: false,
  },
  {
    title: "Traditional Payment Methods",
    subtitle: "Cash, Personal Checks & Major Credit Cards",
    description:
      "To make getting the treatment you need as convenient as possible, we accept all major payment methods at the time of service. We provide detailed estimates before starting any care so you never encounter unexpected surprises.",
    highlights: [
      "Visa, MasterCard, American Express, and Discover",
      "Personal checks and cash payments",
      "HSA (Health Savings Account) and FSA (Flexible Spending Account) cards accepted",
      "Transparent fee schedules provided upfront",
    ],
    ctaLabel: "Contact Our Office",
    ctaLink: "/contact",
    isExternal: false,
  },
];

export const paymentFAQs = [
  {
    question: "How much will my dental visit cost?",
    answer:
      "We provide exact pricing information following your initial clinical examination. Because dental needs are unique to each individual, Dr. Amin first conducts a gentle assessment and discusses all recommended options with complete fee transparency before any treatment begins.",
  },
  {
    question: "Are there financing options available for extensive treatments?",
    answer:
      "Yes. We offer CareCredit financing and custom payment plans to break down comprehensive restorative or cosmetic treatments into manageable monthly payments. Please call our office at (404) 377-7711 to discuss your options.",
  },
  {
    question: "Does Medicare pay for routine dental care for seniors?",
    answer:
      "Traditional Medicare (Part A and Part B) generally does not cover routine dental cleanings, fillings, dentures, or exams. However, certain Medicare Advantage plans offer dental benefits, and our VantageOne Dental Savings Plan provides significant immediate discounts for seniors.",
  },
  {
    question: "Can I use the VantageOne Savings Plan if I have preexisting dental conditions?",
    answer:
      "Yes! Preexisting dental conditions do not disqualify you from enrolling in the VantageOne Dental Savings Plan. Everyone is eligible to sign up and immediately receive discounted rates on eligible treatments.",
  },
  {
    question: "Is there a deductible with the VantageOne Savings Plan?",
    answer:
      "Unlike traditional dental insurance, the VantageOne Dental Savings Plan has no deductible to meet. You receive immediate savings from the moment your membership begins.",
  },
];
