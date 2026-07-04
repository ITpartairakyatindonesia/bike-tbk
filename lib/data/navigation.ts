import type { NavigationItem } from "@/lib/types";

export const NAVIGATION: NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/business", label: "Business" },
  { href: "/organization", label: "Organization" },
  { href: "/products", label: "Products" },
  { href: "/investor", label: "Investor" },
  { href: "/contact", label: "Contact" },
];

export async function getNavigation() {
  return NAVIGATION;
}
