import type { Stat } from "@/lib/types";

export const HERO_STATS: Stat[] = [
  { value: "42+", label: "Years of Excellence" },
  { value: "28", label: "Subsidiaries" },
  { value: "15", label: "Countries" },
  { value: "48K+", label: "Employees Worldwide" },
];

export async function getHeroStats() {
  return HERO_STATS;
}
