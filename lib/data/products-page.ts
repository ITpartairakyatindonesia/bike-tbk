import { ArrowDown } from "lucide-react";

export const PRODUCTS_HERO = {
  eyebrow: "Our Products",
  headline: "Trusted Bicycle Brands for Every Journey.",
  description:
    "PT Bike Tbk offers a diverse portfolio of bicycle brands designed to serve every market segment — from children to professionals — supporting healthier lifestyles and sustainable mobility across Indonesia.",
  backgroundImage: "/business-logistics.jpg",
};

export async function getProductsHero() {
  return PRODUCTS_HERO;
}
