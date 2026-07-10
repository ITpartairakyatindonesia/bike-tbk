"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { ReactNode } from "react";

interface AnchorLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * Anchor link component that handles i18n routing correctly.
 * 
 * Behavior:
 * - On homepage (e.g., /en, /id): smooth scroll to section without reload
 * - On other pages (e.g., /en/news): navigate to homepage locale then scroll
 * - URLs are properly formatted with locale prefix (e.g., /en#business, /id#sustainability)
 */
export function AnchorLink({ href, children, className, onClick }: AnchorLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  // Get the pathname without locale prefix
  const pathnameWithoutLocale = pathname.replace(/^\/(en|id)/, '') || '/';

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }

    // Only handle anchor links
    if (!href.startsWith("#")) {
      return;
    }

    e.preventDefault();

    // If on homepage, smooth scroll
    if (pathnameWithoutLocale === "/") {
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // If on other page, navigate to homepage locale with anchor
      router.push(`/${locale}${href}`);
    }
  };

  // For anchor links, use href with locale prefix
  const fullHref = href.startsWith("#") ? `/${locale}${href}` : href;

  return (
    <Link href={fullHref} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
