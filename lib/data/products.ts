import { Zap, Ship, Landmark } from "lucide-react";
import type { Sector } from "@/lib/types";

export const PRODUCTS_SECTORS: Sector[] = [
  {
    icon: Zap,
    name: "Energy & Utilities",
    desc: "Renewable and conventional power generation across the region.",
    img: "/business-energy.jpg",
  },
  {
    icon: Ship,
    name: "Logistics & Ports",
    desc: "End-to-end supply chain, shipping and port operations.",
    img: "/business-logistics.jpg",
  },
  {
    icon: Landmark,
    name: "Financial Services",
    desc: "Banking, asset management and capital market services.",
    img: "/business-finance.jpg",
  },
];

export async function getProducts() {
  return PRODUCTS_SECTORS;
}
