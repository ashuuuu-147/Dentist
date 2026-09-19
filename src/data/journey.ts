export interface JourneyStep {
  step: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  iconName: string;
}

export const patientJourneySteps: JourneyStep[] = [
  {
    step: "Step 01",
    number: "01",
    title: "Schedule Your Visit",
    subtitle: "Effortless Appointment Booking",
    description:
      "Select an appointment time that aligns with your schedule by phone or through our secure online scheduling workflow. Our team confirms details and prepares for your arrival.",
    details: [
      "Immediate telephone confirmation at (404) 377-7711",
      "Flexible morning and afternoon appointment slots",
      "Advance insurance pre-check before you walk through the door",
    ],
    iconName: "Calendar",
  },
  {
    step: "Step 02",
    number: "02",
    title: "Prepare With Ease",
    subtitle: "Seamless Online Paperwork",
    description:
      "Complete your registration and medical history comfortably online from your phone or computer prior to your visit, eliminating paperwork delays in the waiting lounge.",
    details: [
      "Encrypted digital intake forms sent prior to appointment",
      "Bring photo ID and your dental insurance card",
      "Option to complete forms in-office if preferred (arrive 15 mins early)",
    ],
    iconName: "FileCheck",
  },
  {
    step: "Step 03",
    number: "03",
    title: "Arrive in Decatur",
    subtitle: "Welcoming & Comfortable Suite",
    description:
      "Visit us at 755 Commerce Dr, Ste 513 in Decatur. Enjoy convenient parking and a serene, modern clinical environment designed to immediately put you at ease.",
    details: [
      "Convenient parking in the 755 Commerce Dr building complex",
      "Comfortable reception lounge with friendly team greeting",
      "Zero-wait policy prioritizing your scheduled time",
    ],
    iconName: "Building2",
  },
  {
    step: "Step 04",
    number: "04",
    title: "Personalized Care",
    subtitle: "Transparent Clinical Partnership",
    description:
      "Dr. Shikha M Amin and our clinical team listen carefully to your goals, perform a gentle comprehensive exam with low-dose digital imaging, and review transparent care options.",
    details: [
      "High-definition chairside image review with Dr. Amin",
      "Conservative, health-first treatment recommendations",
      "Clear, upfront financial breakdown before any care begins",
    ],
    iconName: "Sparkles",
  },
];
