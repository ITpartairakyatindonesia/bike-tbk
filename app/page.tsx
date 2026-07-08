import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BusinessSection } from "@/components/sections/BusinessSection";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { SustainabilitySection } from "@/components/sections/SustainabilitySection";
import { NewsSection } from "@/components/sections/NewsSection";
import { CTASection } from "@/components/sections/CTASection";
import { getHomePage } from "@/lib/services/home-page";
import { getLatestNews } from "@/lib/services/news";

export const metadata = {
  title: "Bike - Shaping a Sustainable Future",
  description: "Bike is a diversified super holding company creating enduring value across energy, logistics, finance, healthcare and infrastructure — operating in 15 countries.",
};

export default async function HomePage() {
  const homePage = await getHomePage();
  const newsItems = await getLatestNews(3);

  return (
    <div>
      <HeroSection hero={homePage.hero || {}} />
      <AboutSection aboutPreview={homePage.aboutPreview || {}} />
      <BusinessSection businessHighlights={homePage.businessHighlights || {}} />
      <BrandsSection brandsSection={homePage.brandsSection || {}} />
      <TimelineSection milestonesSection={homePage.milestonesSection || {}} />
      <SustainabilitySection sustainability={homePage.sustainability || {}} />
      <NewsSection latestNews={homePage.latestNews || {}} newsItems={newsItems} />
      <CTASection cta={homePage.cta || {}} />
    </div>
  );
}
