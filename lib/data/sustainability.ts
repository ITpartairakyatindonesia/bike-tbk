import { ShieldCheck, Leaf, Users, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface FocusArea {
  icon: LucideIcon;
  title: string;
}

export const SUSTAINABILITY_FOCUS_AREAS: FocusArea[] = [
  { icon: ShieldCheck, title: "Responsible Business" },
  { icon: Leaf, title: "Environmental Awareness" },
  { icon: Users, title: "Community Development" },
  { icon: TrendingUp, title: "Long-Term Sustainability" },
];

export const SUSTAINABILITY_CONTENT = {
  heading: "Sustainability",
  subtitle: "Growing Responsibly for Indonesia.",
  body: "PT Sepeda Bersama Indonesia Tbk actively contributes to improving healthier lifestyles while maintaining fair, honest and sustainable business practices.",
};
