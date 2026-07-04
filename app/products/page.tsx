import { ProjectsSection } from "@/components/sections/ProjectsSection";

export const metadata = {
  title: "Products & Services - Bike",
  description: "View Bike's landmark projects and portfolio of products and services across infrastructure, technology, healthcare and more.",
};

export default function ProductsPage() {
  return (
    <div>
      <ProjectsSection />
    </div>
  );
}
