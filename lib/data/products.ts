import { Bike, BadgeCheck, Network, TrendingUp } from "lucide-react";
import type { Sector } from "@/lib/types";

export const PRODUCTS_SECTORS: Sector[] = [
  {
    icon: Bike,
    name: "Wholesale Bicycle Distribution",
    desc: "Supplying bicycles through nationwide dealer and retail networks.",
    img: "/business-energy.jpg",
  },
  {
    icon: BadgeCheck,
    name: "Brand Distribution",
    desc: "Official distributor of Genio, United and Avand bicycles.",
    img: "/business-logistics.jpg",
  },
  {
    icon: Network,
    name: "Distribution Network",
    desc: "Supporting traditional, modern and digital sales channels throughout Indonesia.",
    img: "/business-finance.jpg",
  },
  {
    icon: TrendingUp,
    name: "Business Development",
    desc: "Continuously expanding distribution capabilities and creating long-term business growth.",
    img: "/project-1.jpg",
  },
];

export async function getProducts() {
  return PRODUCTS_SECTORS;
}
