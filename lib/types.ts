import { LucideIcon } from "lucide-react";

export interface Stat {
  value: string;
  label: string;
}

export interface Sector {
  icon: LucideIcon;
  name: string;
  desc: string;
  img: string;
}

export interface Subsidiary {
  name: string;
  industry: string;
  initials: string;
}

export interface Project {
  img: string;
  title: string;
  client: string;
  year: string;
  category: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ContactItem {
  icon: LucideIcon;
  title: string;
  value: string;
}

export interface NavigationItem {
  href: string;
  label: string;
}
