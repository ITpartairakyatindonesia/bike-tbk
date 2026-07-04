import { AboutSection } from "@/components/sections/AboutSection";
import { ClientsSection } from "@/components/sections/ClientsSection";

export const metadata = {
  title: "About Us - Bike",
  description: "Learn about Bike's four decades of building industries that move nations forward, from a single infrastructure firm to a diversified super holding group.",
};

export default function AboutPage() {
  return (
    <div>
      <AboutSection />
      <ClientsSection />
    </div>
  );
}
