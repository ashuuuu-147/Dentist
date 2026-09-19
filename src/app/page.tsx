import { Hero } from "@/components/home/Hero";
import { EditorialStatement } from "@/components/home/EditorialStatement";
import { BentoServices } from "@/components/home/BentoServices";
import { DoctorSection } from "@/components/home/DoctorSection";
import { PatientJourney } from "@/components/home/PatientJourney";
import { TechnologySection } from "@/components/home/TechnologySection";
import { InsurancePaymentSection } from "@/components/home/InsurancePaymentSection";
import { LocationSection } from "@/components/home/LocationSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EditorialStatement />
      <BentoServices />
      <DoctorSection />
      <PatientJourney />
      <TechnologySection />
      <InsurancePaymentSection />
      <LocationSection />
      <FinalCTA />
    </>
  );
}
