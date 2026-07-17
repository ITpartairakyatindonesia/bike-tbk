import { Phone, Mail, MapPin, User } from "lucide-react";
import type { ContactItem } from "@/lib/types";
import type { LucideIcon } from "lucide-react";

export interface ContactInfoCardData {
  icon: LucideIcon;
  title: string;
  lines: string[];
}

export const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: MapPin,
    title: "Visit our HQ",
    value: "Jl. Alam Sutera Boulevard Kav. 12A, Pakulonan, Serpong Utara, Tangerang Selatan, Banten 15325, Indonesia",
  },
  {
    icon: Phone,
    title: "Call us",
    value: "(021) 3005 2633",
  },
  {
    icon: Mail,
    title: "Email",
    value: "corsec@bike-tbk.co.id",
  },
  {
    icon: User,
    title: "Corporate Secretary",
    value: "Marina Pratiwi Sanjaya",
  },
];

export const CONTACT_INFO = {
  company: "PT Bike Tbk",
  address: "Jl. Alam Sutera Boulevard Kav. 12A, Pakulonan, Serpong Utara, Tangerang Selatan, Banten 15325, Indonesia",
  phone: "(021) 3005 2633",
  email: "corsec@bike-tbk.co.id",
  corporateSecretary: "Marina Pratiwi Sanjaya",
};

export const CONTACT_HERO = {
  eyebrow: "Contact",
  heading: "Let's Start a Conversation",
  description:
    "Whether you're a business partner, investor, media representative, dealer, or customer, our team is ready to assist you.",
};

export const CONTACT_FORM = {
  title: "Send Us a Message",
  description:
    "Have a question or business inquiry? Fill out the form below and our team will get back to you as soon as possible.",
  fields: {
    name: { label: "Your Name", placeholder: "Enter your name" },
    email: { label: "Email Address", placeholder: "Enter your email address" },
    subject: { label: "Subject", placeholder: "Enter message subject" },
    message: { label: "Message", placeholder: "Write your message here" },
  },
  submitLabel: "Send Message",
};

export const CONTACT_INFORMATION: ContactInfoCardData[] = [
  {
    icon: MapPin,
    title: "Head Office",
    lines: [
      "PT Bike Tbk, Jl. Alam Sutera Boulevard Kav. 12A, Pakulonan, Serpong Utara, Tangerang Selatan, Banten 15325, Indonesia",
      "Phone: (021) 3005 2633",
    ],
  },
  {
    icon: User,
    title: "Corporate Secretary",
    lines: [
      "Marina Pratiwi Sanjaya",
      "Phone: (021) 3005 2633",
      "Email: corsec@bike-tbk.co.id",
    ],
  },
];

export const CONTACT_MAP = {
  title: "Find Our Office",
  embedUrl: "",
};

export const CONTACT_CTA = {
  heading: "Looking for More Information?",
  description:
    "Learn more about PT Bike Tbk, our businesses, investor relations, and corporate governance.",
  buttons: [
    { label: "About Us", href: "/about" },
    { label: "Investor Relations", href: "/investor" },
  ],
};

export async function getContactItems() {
  return CONTACT_ITEMS;
}

export async function getContactInfo() {
  return CONTACT_INFO;
}

export async function getContactHero() {
  return CONTACT_HERO;
}

export async function getContactForm() {
  return CONTACT_FORM;
}

export async function getContactInformation() {
  return CONTACT_INFORMATION;
}

export async function getContactMap() {
  return CONTACT_MAP;
}

export async function getContactCTA() {
  return CONTACT_CTA;
}
