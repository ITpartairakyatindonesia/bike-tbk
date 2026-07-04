import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BusinessSection } from "@/components/sections/BusinessSection";
import { SubsidiariesSection } from "@/components/sections/SubsidiariesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";

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
      <SubsidiariesSection />
      <ProjectsSection />
      <ClientsSection />
      <CTASection />
      <ContactSection />
    </div>
  );
}
