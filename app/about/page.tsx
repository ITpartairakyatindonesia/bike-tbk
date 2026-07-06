import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { AboutOverviewSection } from "@/components/sections/AboutOverviewSection";
import { AboutInfoSection } from "@/components/sections/AboutInfoSection";
import { AboutVisionMissionSection } from "@/components/sections/AboutVisionMissionSection";
import { AboutCultureSection } from "@/components/sections/AboutCultureSection";
import { AboutManagementSection } from "@/components/sections/AboutManagementSection";

export const metadata = {
  title: "About Us - PT Sepeda Bersama Indonesia Tbk",
  description:
    "Learn about PT Sepeda Bersama Indonesia Tbk (SBI), Indonesia's leading bicycle distribution company, established in 2017 and committed to healthier, more active communities.",
};

export default function AboutPage() {
  return (
    <div>
      <AboutHeroSection />
      <AboutOverviewSection />
      <AboutInfoSection />
      <AboutVisionMissionSection />
      <AboutCultureSection />
      <AboutManagementSection />
    </div>
  );
}
