import type { LocalizedString } from "@/lib/types/sanity";

const localized = (en: string, id: string, zh: string): LocalizedString => ({
  en,
  id,
  zh,
});

export const NAVIGATION = [
  { href: "/", label: localized("Home", "Beranda", "首页") },
  { href: "/about", label: localized("About", "Tentang", "关于我们") },
  { href: "/governance", label: localized("Governance", "Tata Kelola", "公司治理") },
  { href: "/business", label: localized("Business", "Bisnis", "业务") },
  { href: "/investor", label: localized("Investor", "Investor", "投资者") },
  { href: "/sustainability", label: localized("Sustainability", "Keberlanjutan", "可持续发展") },
  { href: "/news", label: localized("News", "Berita", "新闻") },
  { href: "/career", label: localized("Career", "Karir", "人才招聘") },
  { href: "/contact", label: localized("Contact", "Kontak", "联系我们") },
];

export async function getNavigation() {
  return NAVIGATION;
}
