import { ProductsHero } from "@/components/products/ProductsHero";
import { ProductsIntroduction } from "@/components/products/ProductsIntroduction";
import { ProductsWhy } from "@/components/products/ProductsWhy";
import { ProductsBrands } from "@/components/products/ProductsBrands";
import { ProductsFeatured } from "@/components/products/ProductsFeatured";
import { ProductsMarketPosition } from "@/components/products/ProductsMarketPosition";
import { ProductsCTA } from "@/components/products/ProductsCTA";

export const metadata = {
  title: "Products - PT Bike Tbk",
  description: "Our portfolio of trusted bicycle brands designed to serve every market segment, from children to professionals, supporting healthier lifestyles and sustainable mobility.",
};

export default function ProductsPage() {
  return (
    <div>
      <ProductsHero />
      <ProductsIntroduction />
      <ProductsWhy />
      <ProductsBrands />
      <ProductsFeatured />
      <ProductsMarketPosition />
      <ProductsCTA />
    </div>
  );
}
