export interface InsuranceProvider {
  name: string;
  category: "PPO" | "Major Carrier" | "State / Regional";
  logoUrl?: string;
  isPopular?: boolean;
}

export const insuranceProviders: InsuranceProvider[] = [
  { name: "Aetna", category: "Major Carrier", isPopular: true },
  { name: "Delta Dental", category: "Major Carrier", isPopular: true },
  { name: "Cigna", category: "Major Carrier", isPopular: true },
  { name: "MetLife", category: "Major Carrier", isPopular: true },
  { name: "Guardian", category: "Major Carrier", isPopular: true },
  { name: "Humana", category: "Major Carrier", isPopular: true },
  { name: "Ameritas", category: "Major Carrier", isPopular: true },
  { name: "Assurant SunLife", category: "PPO", isPopular: true },
  { name: "United Concordia (UCCI)", category: "PPO", isPopular: false },
  { name: "Unum", category: "PPO", isPopular: false },
  { name: "GEHA Connection", category: "PPO", isPopular: false },
  { name: "DentaQuest", category: "State / Regional", isPopular: false },
  { name: "Careington", category: "PPO", isPopular: false },
  { name: "Aflac", category: "Major Carrier", isPopular: false },
];

export const insurancePolicyStatement =
  "We work with a range of dental insurance plans. While our office is in-network with many major providers, benefits can vary depending on your employer or individual policy. Contact our office to verify your specific coverage and discover how we help maximize your benefits.";

export const insuranceFAQs = [
  {
    question: "Do you accept dental insurance?",
    answer:
      "Yes! Our office accepts most major dental insurance plans. To verify your dental coverage and help you determine what your out-of-pocket cost may be, just call our office at (404) 377-7711. We look forward to hearing from you and seeing how we can help make your dental treatment journey as seamless as possible!",
  },
  {
    question: "Is my insurance going to cover all of my treatment?",
    answer:
      "If your insurance plan doesn't cover the full cost of your treatment plan, our team works with patients at all different budgets to get the care they need at a price they love. A member of our team will be more than happy to help you understand your insurance benefits and offer flexible solutions for treatment costs.",
  },
  {
    question: "I don’t see my insurance listed. Can I still use my insurance at your office?",
    answer:
      "Our office is in-network with most major insurance companies. Even if we are out-of-network with your specific insurance carrier, our team is proactive and works to help patients find ways to maximize their benefits to fit their budget.",
  },
  {
    question: "What if my insurance is out-of-network? Can you still help me use my benefits?",
    answer:
      "Our team is always here to help patients understand their benefits, whether their insurance carrier is in-network or out-of-network. Patients are often surprised that even with out-of-network plans, we are able to file claims directly on their behalf and maximize coverage.",
  },
  {
    question: "When do insurance benefits renew?",
    answer:
      "Insurance benefits typically expire at the end of the calendar year (December 31st) and renew on January 1st. Unused insurance benefits do not carry over to the new year. If you have remaining benefits, we recommend scheduling before year-end to maximize your available coverage.",
  },
  {
    question: "What if I don't have dental insurance?",
    answer:
      "We believe everyone deserves exceptional dental care regardless of insurance status. We offer our in-house VantageOne Dental Savings Plan, flexible installment financing via CareCredit, and transparent pricing before any procedure begins.",
  },
];
