import { AboutHero } from "@/components/about/AboutHero";
import { AboutOverview } from "@/components/about/AboutOverview";
import { AboutInfo } from "@/components/about/AboutInfo";
import { AboutVisionMission } from "@/components/about/AboutVisionMission";
import { AboutCulture } from "@/components/about/AboutCulture";
import { AboutManagement } from "@/components/about/AboutManagement";

export const metadata = {
  title: "About Us - PT Sepeda Bersama Indonesia Tbk",
  description:
    "Learn about PT Sepeda Bersama Indonesia Tbk (SBI), Indonesia's leading bicycle distribution company, established in 2017 and committed to healthier, more active communities.",
};

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutOverview />
      <AboutInfo />
      <AboutVisionMission />
      <AboutCulture />
      <AboutManagement />
    </div>
  );
}
