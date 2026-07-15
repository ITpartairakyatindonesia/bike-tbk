import { Linkedin, Twitter, Facebook, Instagram, Youtube, LucideIcon } from "lucide-react";
import type { LocalizedString } from "@/lib/types/sanity";

const localized = (en: string, id: string, zh: string): LocalizedString => ({
  en,
  id,
  zh,
});

export const FOOTER_SOCIAL_LINKS: { icon: LucideIcon; href: string; label: string }[] = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const FOOTER_COMPANY_LINKS: { href: string; label: LocalizedString }[] = [
  { href: "/about", label: localized("About", "Tentang", "关于我们") },
  { href: "/governance", label: localized("Governance", "Tata Kelola", "公司治理") },
  { href: "/business", label: localized("Business", "Bisnis", "业务") },
  { href: "/investor", label: localized("Investor Relations", "Hubungan Investor", "投资者关系") },
  { href: "/contact", label: localized("Contact", "Kontak", "联系我们") },
];

export const FOOTER_RESOURCE_LINKS: { href: string; label: LocalizedString }[] = [
  { href: "/sustainability", label: localized("Sustainability", "Keberlanjutan", "可持续发展") },
  { href: "/career", label: localized("Careers", "Karir", "人才招聘") },
  { href: "/news", label: localized("News", "Berita", "新闻") },
];

export const FOOTER_LEGAL_LINKS: { href: string; label: LocalizedString }[] = [
  { href: "#", label: localized("Privacy Policy", "Kebijakan Privasi", "隐私政策") },
  { href: "#", label: localized("Terms of Use", "Ketentuan Penggunaan", "使用条款") },
  { href: "#", label: localized("Whistleblowing", "Pelaporan Pelanggaran", "举报制度") },
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
