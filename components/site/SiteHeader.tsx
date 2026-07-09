"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import { cn } from "@/lib/utils";
import { urlFor } from "@/lib/cms/image";
import type { LocalizedString } from "@/lib/types/sanity";

interface SiteHeaderProps {
  siteSettings: {
    companyName: string;
    companyInitials: string;
    tagline?: LocalizedString | null;
    logo: {
      asset: {
        _ref: string;
        _type: 'reference';
      };
    } | null;
  };
  navigation: { label: LocalizedString; href: string; external?: boolean }[];
}

export function SiteHeader({ siteSettings, navigation }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = useTranslations('navigation');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Get the pathname without locale prefix
  const pathnameWithoutLocale = pathname.replace(/^\/(en|id)/, '') || '/';

  const isDarkPage = pathnameWithoutLocale === "/contact" || pathnameWithoutLocale === "/investor" || pathnameWithoutLocale.startsWith("/organization");

  // Handle language switch using next-intl routing
  const handleLanguageSwitch = (newLocale: string) => {
    const newPath = `/${newLocale}${pathnameWithoutLocale}`;
    router.push(newPath);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [pathname]);

  const validNavigation = navigation.filter((item) =>
    Boolean(item.href && (item.label?.en || item.label?.id))
  );

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      if (pathname === "/") {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        router.push(href);
      }
      setOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isDarkPage || scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent"
      )}
    >
      <div className="container-page flex h-16 md:h-20 items-center gap-6">
        <Link href={`/${locale}`} className="flex items-center gap-2.5 shrink-0">
          {siteSettings.logo ? (
            <img
              src={urlFor(siteSettings.logo).url()}
              alt={siteSettings.companyName}
              className="h-14 w-14 rounded-sm object-cover border border-primary-foreground/20 bg-primary-foreground/70 shadow-sm p-1"
            />
          ) : (
            <div className="grid h-14 w-14 place-items-center rounded-sm border border-primary-foreground/20 bg-primary-foreground/70 shadow-sm p-1">
              <span className="font-display font-bold text-lg text-primary-deep">{siteSettings.companyInitials}</span>
            </div>
          )}
          <div className="hidden sm:flex flex-col leading-tight">
            <span className={cn("font-display font-bold text-sm tracking-tight", isDarkPage || scrolled ? "text-foreground" : "text-white")}>{siteSettings.companyName}</span>
            {siteSettings.tagline && (
              <span className={cn("text-[10px] uppercase tracking-wider", isDarkPage || scrolled ? "text-foreground/60" : "text-white/70")}>
                {siteSettings.tagline[locale as keyof LocalizedString]}
              </span>
            )}
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 mx-auto">
          {validNavigation.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              onClick={handleNavClick(item.href)}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors relative group min-w-[80px] text-center",
                isDarkPage || scrolled ? "text-foreground/75 hover:text-primary" : "text-white/90 hover:text-white"
              )}
            >
              {item.label[locale as keyof LocalizedString]}
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1 md:gap-2">
          <button
            onClick={() => handleLanguageSwitch(locale === "en" ? "id" : "en")}
            aria-label={`Switch language to ${locale === "en" ? "Indonesian" : "English"}`}
            className={cn(
              "inline-flex items-center justify-center h-9 w-9 rounded-md transition",
              isDarkPage || scrolled ? "hover:bg-primary-soft" : "hover:bg-white/10"
            )}
          >
            {locale === "en" ? (
              <svg viewBox="0 0 20 14" className="h-5 w-auto rounded-[3px] shadow-sm">
                <rect width="20" height="14" fill="#012169" />
                <path d="M0,0 L20,14 M20,0 L0,14" stroke="#FFFFFF" strokeWidth="2" />
                <path d="M10,0 V14 M0,7 H20" stroke="#FFFFFF" strokeWidth="3" />
                <path d="M10,0 V14 M0,7 H20" stroke="#C8102E" strokeWidth="1.5" />
                <path d="M0,0 L20,14 M20,0 L0,14" stroke="#C8102E" strokeWidth="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 20 14" className="h-5 w-auto rounded-[3px] shadow-sm">
                <rect width="20" height="7" fill="#FF0000" />
                <rect y="7" width="20" height="7" fill="#FFFFFF" />
              </svg>
            )}
          </button>
          <Link
            href={`/${locale}/contact`}
            className="hidden md:inline-flex items-center h-10 px-5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-deep transition shadow-soft"
          >
            {t('getInTouch')}
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "lg:hidden h-10 w-10 grid place-items-center rounded-full transition",
              isDarkPage || scrolled ? "text-foreground hover:bg-primary-soft" : "text-white hover:bg-white/10"
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <nav className="container-page py-4 flex flex-col">
            {validNavigation.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                onClick={handleNavClick(item.href)}
                className="py-3 text-sm font-medium text-foreground/80 hover:text-primary border-b border-border/50 last:border-0"
              >
                {item.label[locale as keyof LocalizedString]}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
