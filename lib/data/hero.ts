import type { Stat } from "@/lib/types";

export const HERO_STATS: Stat[] = [
  { value: "2017", label: "Established" },
  { value: "Bicycle Distribution", label: "Core Business" },
  { value: "Listed on IDX", label: "Public Company" },
  { value: "Genio • United • Avand", label: "Brands" },
];

export async function getHeroStats() {
  return HERO_STATS;
}
