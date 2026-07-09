import {
  Users,
  HeartHandshake,
  Lightbulb,
  TreePine,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface AboutHighlight {
  label: string;
  value: string;
  subtext?: string;
}

export interface AboutInfoItem {
  label: string;
  value: string;
}

export interface CultureCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface MissionItem {
  title: string;
  description: string;
}

export const ABOUT_HERO = {
  eyebrow: "About Us",
  headline: "Building Healthier Communities Through Better Mobility.",
  description:
    "PT Bike Tbk (SBI) was established in Tangerang in 2017 and has grown into one of Indonesia's leading bicycle distribution companies. Through trusted brands, an extensive dealer network, and a commitment to sustainable business practices, SBI continues to support healthier and more active lifestyles across the country.",
  backgroundImage: "/business-logistics.jpg",
};

export const ABOUT_OVERVIEW = {
  title: "Who We Are",
  paragraphs: [
    "Established in Tangerang in 2017, PT Bike Tbk operates in the wholesale distribution of bicycles. As the brand owner of Genio Bike and the largest distributor of United Bike and Avand, SBI brings more than 100 bicycle models and over 300 variants to the Indonesian market every year.",
    "Our nationwide distribution network reaches across Java, Bali, Sumatra, Kalimantan, Sulawesi, Nusa Tenggara, Maluku, and Papua. We are committed to developing Indonesia's bicycle industry from upstream to downstream through a professional distribution network, integrated customer service, and a wide product portfolio that serves every market segment.",
  ],
};

export const ABOUT_HIGHLIGHTS: AboutHighlight[] = [
  { label: "Established", value: "2017" },
  { label: "Brands", value: "Genio • United • Avand" },
  { label: "Product Portfolio", value: "100+ Models", subtext: "300+ Variants" },
  { label: "Dealer Network", value: "578 Stores" },
  { label: "Employees", value: "16" },
  { label: "Business", value: "Bicycle Distribution" },
];

export const ABOUT_INFO: AboutInfoItem[] = [
  { label: "Company Name", value: "PT Bike Tbk" },
  { label: "Founded", value: "2017" },
  { label: "Head Office", value: "Jl. Boulevard Alam Sutera No.12A, Serpong Utara, Tangerang Selatan, Banten 15325, Indonesia" },
  { label: "Core Business", value: "Wholesale Bicycle Distribution" },
  { label: "Website", value: "www.bike-tbk.co.id" },
  { label: "Board of Commissioners", value: "Komisaris Utama & Anggota" },
  { label: "Board of Directors", value: "Direktur Utama & Anggota" },
  { label: "Dealer Network", value: "578 Stores" },
  { label: "Employees", value: "16" },
];

export const ABOUT_VISION = {
  eyebrow: "Our Direction",
  label: "Vision",
  statement:
    "Expanding market share throughout Indonesia by realizing customers' aspirations and offering affordable mobility and lifestyle solutions while delivering excellent after-sales service.",
};

export const ABOUT_MISSION: MissionItem[] = [
  {
    title: "Build Long-Term Relationships",
    description:
      "Build and maintain strong relationships with dealers and customers to protect existing market share while expanding into new markets.",
  },
  {
    title: "Maintain Customer Loyalty",
    description:
      "Maintain customer loyalty by continuously improving product quality and customer satisfaction.",
  },
  {
    title: "Quality Assurance",
    description:
      "Ensure every product passes consistent quality control before reaching customers.",
  },
  {
    title: "Customer Feedback",
    description:
      "Collect customer feedback through dealers and direct surveys to continuously improve products and services.",
  },
  {
    title: "Excellent After-Sales Service",
    description:
      "Deliver reliable after-sales service that supports long-term customer satisfaction.",
  },
];

export const ABOUT_CULTURE = {
  title: "Our Culture",
  subtitle: "Growing Together Through Human-Centered Values.",
  introduction:
    "At SBI, we believe that people are at the heart of every successful journey. Our culture is built on respect, integrity, and collaboration — empowering every individual to grow while contributing to a healthier and more sustainable Indonesia.",
  cards: [
    {
      icon: TreePine,
      title: "Human & Environment",
      description:
        "Promote honesty, responsibility, trust and environmental awareness.",
    },
    {
      icon: HeartHandshake,
      title: "Human & Customers",
      description:
        "Deliver beyond expectations through empathy and excellent service.",
    },
    {
      icon: Users,
      title: "Human & Partners",
      description:
        "Build long-term partnerships based on fairness and mutual growth.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & People",
      description:
        "Support continuous development of people, products, services and innovation.",
    },
  ] as CultureCard[],
};

export const ABOUT_DISTRIBUTION = {
  title: "Distribution Network",
  subtitle: "Reaching Every Corner of Indonesia",
  description:
    "SBI's distribution network spans the archipelago, ensuring that quality bicycles and after-sales service are accessible to communities nationwide.",
  regions: [
    "Java",
    "Bali",
    "Sumatra",
    "Kalimantan",
    "Sulawesi",
    "Nusa Tenggara",
    "Maluku",
    "Papua",
  ],
};

export const ABOUT_CLOSING = {
  headline: "Moving Indonesia Forward Together.",
  description:
    "With a commitment to innovation, responsible business practices, and trusted partnerships, PT Bike Tbk continues to strengthen Indonesia's bicycle industry while creating long-term value for customers, shareholders, employees, dealers, and communities.",
  primaryButton: { label: "Contact Us", href: "/contact" },
  secondaryButton: { label: "Investor Relations", href: "/investor" },
};

export async function getAboutHero() {
  return ABOUT_HERO;
}

export async function getAboutOverview() {
  return ABOUT_OVERVIEW;
}

export async function getAboutHighlights() {
  return ABOUT_HIGHLIGHTS;
}

export async function getAboutInfo() {
  return ABOUT_INFO;
}

export async function getAboutVision() {
  return ABOUT_VISION;
}

export async function getAboutMission() {
  return ABOUT_MISSION;
}

export async function getAboutCulture() {
  return ABOUT_CULTURE;
}

export async function getAboutDistribution() {
  return ABOUT_DISTRIBUTION;
}

export async function getAboutClosing() {
  return ABOUT_CLOSING;
}
