import type { Brand } from "@/lib/types";

export const BRANDS: Brand[] = [
  { name: "Genio", category: "Lifestyle Bicycle", initials: "GE", slug: "genio" },
  { name: "United", category: "Mountain • Road • Urban", initials: "UN", slug: "united" },
  { name: "Avand", category: "Everyday Mobility", initials: "AV", slug: "avand" },
];

export async function getBrands() {
  return BRANDS;
}
