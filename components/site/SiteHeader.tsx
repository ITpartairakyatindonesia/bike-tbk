"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAVIGATION } from "@/lib/data/navigation";
import { urlFor } from "@/lib/cms/image";

interface SiteHeaderProps {
  siteSettings: {
    companyName: string;
    companyInitials: string;
    companyTagline?: string;
    logo: {
      asset: {
        _ref: string;
        _type: 'reference';
      };
    } | null;
  };
}

export function SiteHeader({ siteSettings }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "ID">("EN");
  const router = useRouter();
  const pathname = usePathname();

  const isDarkPage = pathname === "/contact" || pathname === "/investor" || pathname.startsWith("/organization");

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
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          {siteSettings.logo ? (
            <img
              src={urlFor(siteSettings.logo).url()}
              alt={siteSettings.companyName}
              className="h-9 w-9 rounded-lg object-cover"
            />
          ) : (
            <div className="grid h-9 w-9 place-items-center rounded-lg gradient-hero shadow-elegant">
              <span className="text-primary-foreground font-display font-bold text-sm">{siteSettings.companyInitials}</span>
            </div>
          )}
          <div className="hidden sm:flex flex-col leading-tight">
            <span className={cn("font-display font-bold text-sm tracking-tight", isDarkPage || scrolled ? "text-foreground" : "text-white")}>{siteSettings.companyName}</span>
            {siteSettings.companyTagline && (
              <span className={cn("text-[10px] uppercase tracking-wider", isDarkPage || scrolled ? "text-foreground/60" : "text-white/70")}>
                {siteSettings.companyTagline}
              </span>
            )}
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 mx-auto">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleNavClick(item.href)}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors relative group",
                isDarkPage || scrolled ? "text-foreground/75 hover:text-primary" : "text-white/90 hover:text-white"
              )}
            >
              {item.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1 md:gap-2">
          <button
            onClick={() => setLang(lang === "EN" ? "ID" : "EN")}
            className={cn(
              "hidden sm:inline-flex items-center gap-1 h-9 px-2.5 rounded-full text-xs font-semibold transition",
              isDarkPage || scrolled ? "text-foreground/80 hover:text-primary hover:bg-primary-soft" : "text-white/90 hover:text-white hover:bg-white/10"
            )}
          >
            <Globe className="h-3.5 w-3.5" />
            {lang}
            <ChevronDown className="h-3 w-3" />
          </button>
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center h-10 px-5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-deep transition shadow-soft"
          >
            Get in Touch
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
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick(item.href)}
                className="py-3 text-sm font-medium text-foreground/80 hover:text-primary border-b border-border/50 last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
