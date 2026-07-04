import type { Subsidiary } from "@/lib/types";

export const SUBSIDIARIES: Subsidiary[] = [
  { name: "Bike Energi", industry: "Energy", initials: "BE" },
  { name: "TransMarine Logistics", industry: "Logistics", initials: "TM" },
  { name: "Meridian Capital", industry: "Finance", initials: "MC" },
  { name: "Bike Infra", industry: "Infrastructure", initials: "BI" },
  { name: "HealthOne Group", industry: "Healthcare", initials: "H1" },
  { name: "Aksara Digital", industry: "Technology", initials: "AD" },
];

export async function getSubsidiaries() {
  return SUBSIDIARIES;
}
