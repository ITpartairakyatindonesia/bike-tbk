import { Linkedin, Twitter, Facebook, Instagram, Youtube, LucideIcon } from "lucide-react";

export const FOOTER_SOCIAL_LINKS: { icon: LucideIcon; href: string; label: string }[] = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const FOOTER_COMPANY_LINKS: { href: string; label: string }[] = [
  { href: "/about", label: "About Us" },
  { href: "/business", label: "Our Business" },
  { href: "/organization", label: "Organization" },
  { href: "/products", label: "Products & Services" },
];

export const FOOTER_RESOURCE_LINKS: { href: string; label: string }[] = [
  { href: "/investor", label: "Investor Relations" },
  { href: "#", label: "Sustainability" },
  { href: "#", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_LEGAL_LINKS: { href: string; label: string }[] = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Use" },
  { href: "#", label: "Whistleblowing" },
];

export async function getFooterSocialLinks() {
  return FOOTER_SOCIAL_LINKS;
}

export async function getFooterCompanyLinks() {
  return FOOTER_COMPANY_LINKS;
}

export async function getFooterResourceLinks() {
  return FOOTER_RESOURCE_LINKS;
}

export async function getFooterLegalLinks() {
  return FOOTER_LEGAL_LINKS;
}
