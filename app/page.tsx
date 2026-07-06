import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BusinessSection } from "@/components/sections/BusinessSection";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { SustainabilitySection } from "@/components/sections/SustainabilitySection";
import { NewsSection } from "@/components/sections/NewsSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
  title: "Bike - Shaping a Sustainable Future",
  description: "Bike is a diversified super holding company creating enduring value across energy, logistics, finance, healthcare and infrastructure — operating in 15 countries.",
};

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <BusinessSection />
      <BrandsSection />
      <TimelineSection />
      <SustainabilitySection />
      <NewsSection />
      <CTASection />
    </div>
  );
}
