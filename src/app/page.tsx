import { Hero } from "@/components/Hero";
import { PhilosophySection } from "@/components/PhilosophySection";
import { ClassPrograms } from "@/components/ClassPrograms";
import { ScheduleSection } from "@/components/ScheduleSection";
import { PricingSection } from "@/components/PricingSection";
import { InstructorRoster } from "@/components/InstructorRoster";
import { StudioAmenities } from "@/components/StudioAmenities";
import { TransformationStories } from "@/components/TransformationStories";
import { BookingConcierge } from "@/components/BookingConcierge";
import { LocationHours } from "@/components/LocationHours";
import { FaqSection } from "@/components/FaqSection";
import { CtaSection } from "@/components/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PhilosophySection />
      <ClassPrograms />
      <ScheduleSection />
      <PricingSection />
      <InstructorRoster />
      <StudioAmenities />
      <TransformationStories />
      <BookingConcierge />
      <LocationHours />
      <FaqSection />
      <CtaSection />
    </>
  );
}
