import { Users, Flag, Layers, Building2 } from "lucide-react";
import type { Milestone } from "@/lib/types";

export const COMPANY_MILESTONES: Milestone[] = [
  {
    year: "2017",
    description:
      "Company established in October 2017 as PT Sepeda Bersama Indonesia.",
    icon: Users,
  },
  {
    year: "2021",
    description:
      "Partnering with 319 dealers spread across Indonesia.",
    icon: Flag,
  },
  {
    year: "2021",
    description:
      "Largest distributor for Genio, United and Avand bicycles.",
    icon: Layers,
  },
  {
    year: "2022",
    description:
      "Initial Public Offering (IPO) with stock code BIKE.",
    icon: Building2,
  },
];

export async function getMilestones() {
  return COMPANY_MILESTONES;
}
