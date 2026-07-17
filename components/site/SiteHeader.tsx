"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import { cn, pickLocalized, hasLocalizedContent } from "@/lib/utils";
import { urlFor } from "@/lib/cms/image";
import { AnchorLink } from "@/components/ui/AnchorLink";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
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
  const pathnameWithoutLocale = pathname.replace(/^\/(en|id|zh)/, '') || '/';

  const isDarkPage = pathnameWithoutLocale === "/contact" || pathnameWithoutLocale === "/investor" || pathnameWithoutLocale.startsWith("/organization") || pathnameWithoutLocale === "/governance" || pathnameWithoutLocale === "/business" || pathnameWithoutLocale === "/sustainability" || pathnameWithoutLocale === "/career" || pathnameWithoutLocale.startsWith("/news");

  // Handle language switch using next-intl routing
  const handleLanguageSwitch = (newLocale: string) => {
    const newPath = `/${newLocale}${pathnameWithoutLocale}`;
    router.push(newPath, { scroll: false });
  };

  const localeShortLabels: Record<string, string> = {
    en: 'EN',
    id: 'ID',
    zh: '中文',
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
    Boolean(item.href && hasLocalizedContent(item.label))
  );

  const isActive = (href: string) => {
    if (href.startsWith("#")) return pathnameWithoutLocale === "/";
    const cleanHref = href.replace(/^\//, "");
    const cleanPath = pathnameWithoutLocale.replace(/^\//, "");
    return cleanPath === cleanHref || cleanPath.startsWith(cleanHref + "/");
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
          {siteSettings.logo?.asset ? (
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
                {pickLocalized(siteSettings.tagline, locale)}
              </span>
            )}
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 mx-auto">
          {validNavigation.map((item) => (
            item.href.startsWith("#") ? (
              <AnchorLink
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors relative group min-w-[80px] text-center",
                  isActive(item.href)
                    ? isDarkPage || scrolled ? "text-primary" : "text-white"
                    : isDarkPage || scrolled ? "text-foreground/75 hover:text-primary" : "text-white/90 hover:text-white"
                )}
              >
                {pickLocalized(item.label, locale)}
                <span className={cn(
                  "absolute inset-x-3 -bottom-0.5 h-0.5 bg-primary transition-transform origin-left",
                  isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </AnchorLink>
            ) : (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors relative group min-w-[80px] text-center",
                  isActive(item.href)
                    ? isDarkPage || scrolled ? "text-primary" : "text-white"
                    : isDarkPage || scrolled ? "text-foreground/75 hover:text-primary" : "text-white/90 hover:text-white"
                )}
              >
                {pickLocalized(item.label, locale)}
                <span className={cn(
                  "absolute inset-x-3 -bottom-0.5 h-0.5 bg-primary transition-transform origin-left",
                  isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            )
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1 md:gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                aria-label="Switch language"
                className={cn(
                  "inline-flex items-center gap-1.5 h-9 px-2.5 rounded-md text-sm font-semibold transition",
                  isDarkPage || scrolled ? "text-foreground hover:bg-primary-soft" : "text-white hover:bg-white/10"
                )}
              >
                {localeShortLabels[locale] || locale}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[160px]">
              <DropdownMenuItem
                onClick={() => handleLanguageSwitch("id")}
                className={cn("cursor-pointer", locale === "id" && "font-bold")}
              >
                <span className="text-base leading-none">🇮🇩</span>
                Indonesia
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleLanguageSwitch("en")}
                className={cn("cursor-pointer", locale === "en" && "font-bold")}
              >
                <span className="text-base leading-none">🇺🇸</span>
                English
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleLanguageSwitch("zh")}
                className={cn("cursor-pointer", locale === "zh" && "font-bold")}
              >
                <span className="text-base leading-none">🇨🇳</span>
                中文
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
        <div className={cn(
          "lg:hidden border-t animate-fade-in",
          isDarkPage || scrolled
            ? "border-border bg-background/95 backdrop-blur-xl"
            : "border-white/10 bg-primary-deep/95 backdrop-blur-xl"
        )}>
          <nav className="container-page py-4 flex flex-col">
            {validNavigation.map((item) => (
              item.href.startsWith("#") ? (
                <AnchorLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "py-3 text-sm font-medium border-b last:border-0",
                    isActive(item.href)
                      ? isDarkPage || scrolled ? "text-primary font-semibold" : "text-white font-semibold"
                      : isDarkPage || scrolled
                        ? "text-foreground/80 hover:text-primary border-border/50"
                        : "text-white/80 hover:text-white border-white/10"
                  )}
                >
                  {pickLocalized(item.label, locale)}
                </AnchorLink>
              ) : (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "py-3 text-sm font-medium border-b last:border-0",
                    isActive(item.href)
                      ? isDarkPage || scrolled ? "text-primary font-semibold" : "text-white font-semibold"
                      : isDarkPage || scrolled
                        ? "text-foreground/80 hover:text-primary border-border/50"
                        : "text-white/80 hover:text-white border-white/10"
                  )}
                >
                  {pickLocalized(item.label, locale)}
                </Link>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
