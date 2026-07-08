import { getHomePage } from "@/lib/services/home-page";
import { BrandsSection } from "@/components/sections/BrandsSection";

export const metadata = {
  title: "Brands - Bike",
  description: "Discover SBI's trusted bicycle brands: Genio, United, and Avand, supporting every lifestyle from everyday mobility to road and mountain cycling.",
};

export default async function BrandsPage() {
  const homePage = await getHomePage();

  return (
    <div>
      <BrandsSection brandsSection={homePage.brandsSection || {}} />
    </div>
  );
}
