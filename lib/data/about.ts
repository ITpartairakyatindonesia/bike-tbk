import { ShieldCheck, Globe2, TrendingUp, Award } from "lucide-react";
import type { Feature } from "@/lib/types";

export const ABOUT_FEATURES: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Good Corporate Governance",
    desc: "Conducting business with transparency, accountability, responsibility, independence, and fairness.",
  },
  {
    icon: Globe2,
    title: "Nationwide Distribution",
    desc: "Strengthening bicycle distribution across Indonesia through trusted retail and business partners.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Growth",
    desc: "Creating long-term value through responsible and sustainable business development.",
  },
  {
    icon: Award,
    title: "Customer Commitment",
    desc: "Providing innovative bicycle products that meet the needs of every market segment.",
  },
];

export async function getAboutFeatures() {
  return ABOUT_FEATURES;
}
