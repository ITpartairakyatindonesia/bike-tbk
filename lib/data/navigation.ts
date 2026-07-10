import type { LocalizedString } from "@/lib/types/sanity";

const localized = (en: string, id?: string): LocalizedString => ({
  en,
  id: id ?? en,
});

export const NAVIGATION = [
  { href: "/", label: localized("Home", "Beranda") },
  { href: "/about", label: localized("About Us", "Tentang Kami") },
  { href: "#business", label: localized("Business", "Bisnis") },
  { href: "/products", label: localized("Products", "Produk") },
  { href: "/investor", label: localized("Investor", "Investor") },
  { href: "/contact", label: localized("Contact", "Kontak") },
];

export async function getNavigation() {
  return NAVIGATION;
}
