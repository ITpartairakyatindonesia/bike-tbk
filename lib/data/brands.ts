import type { Brand } from "@/lib/types";

export const BRANDS: Brand[] = [
  { name: "Genio", category: "Lifestyle Bicycle", initials: "GE", slug: "genio", website: "https://genio.bike" },
  { name: "United", category: "Mountain • Road • Urban", initials: "UN", slug: "united", website: "https://www.unitedbike.com/" },
  { name: "Avand", category: "Everyday Mobility", initials: "AV", slug: "avand" },
];

export async function getBrands() {
  return BRANDS;
}
