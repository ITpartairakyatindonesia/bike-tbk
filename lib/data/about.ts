import { ShieldCheck, Globe2, TrendingUp, Award } from "lucide-react";
import type { Feature } from "@/lib/types";

export const ABOUT_FEATURES: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Governance First",
    desc: "GCG-certified with an independent commissioner majority.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    desc: "Operating footprint spanning 15 countries.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Growth",
    desc: "12.4% CAGR over the last decade.",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    desc: "Forbes Global 2000 · Fortune SEA 500.",
  },
];

export const ABOUT_CLIENTS: string[] = [
  "ARAMCO",
  "SIEMENS",
  "MITSUBISHI",
  "SAMSUNG",
  "PERTAMINA",
  "TELKOM",
  "MANDIRI",
  "BCA",
];

export async function getAboutFeatures() {
  return ABOUT_FEATURES;
}

export async function getAboutClients() {
  return ABOUT_CLIENTS;
}
