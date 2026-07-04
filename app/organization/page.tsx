import { SubsidiariesSection } from "@/components/sections/SubsidiariesSection";

export const metadata = {
  title: "Organization - Bike",
  description: "Discover Bike's 28 operating companies and organizational structure, unified by a shared purpose of building sustainable value.",
};

export default function OrganizationPage() {
  return (
    <div>
      <SubsidiariesSection />
    </div>
  );
}
