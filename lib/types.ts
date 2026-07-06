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

export interface Brand {
  name: string;
  category: string;
  initials: string;
  logo?: string;
  image?: string;
  slug?: string;
}

export interface Project {
  img: string;
  title: string;
  client: string;
  year: string;
  category: string;
}

export interface Highlight {
  img: string;
  title: string;
  description: string;
  year?: string;
}

export interface Milestone {
  year: string;
  title?: string;
  description: string;
  icon?: LucideIcon;
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

export interface NewsArticle {
  _id?: string;
  title: string;
  slug?: string;
  date: string;
  image: string;
  excerpt?: string;
  url?: string;
}

export interface InvestorDocument {
  _id?: string;
  title: string;
  fileUrl?: string;
  file?: {
    asset?: {
      url?: string;
    };
  };
}

export interface InvestorResource {
  title: string;
  description: string;
  documents: InvestorDocument[];
}
