import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BusinessSection } from "@/components/sections/BusinessSection";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { SustainabilitySection } from "@/components/sections/SustainabilitySection";
import { NewsSection } from "@/components/sections/NewsSection";
import { CTASection } from "@/components/sections/CTASection";
import { getHomePage } from "@/lib/services/home-page";
import { getHeroStats } from "@/lib/data/hero";

export const metadata = {
  title: "Bike - Shaping a Sustainable Future",
  description: "Bike is a diversified super holding company creating enduring value across energy, logistics, finance, healthcare and infrastructure — operating in 15 countries.",
};

export default async function HomePage() {
  const homePage = await getHomePage();
  const stats = await getHeroStats();

  return (
    <div>
      <HeroSection hero={homePage.hero || {}} stats={stats} />
      <AboutSection aboutPreview={homePage.aboutPreview || {}} />
      <BusinessSection businessHighlights={homePage.businessHighlights || {}} />
      <BrandsSection />
      <TimelineSection />
      <SustainabilitySection sustainability={homePage.sustainability || {}} />
      <NewsSection latestNews={homePage.latestNews || {}} />
      <CTASection cta={homePage.cta || {}} />
    </div>
  );
}
