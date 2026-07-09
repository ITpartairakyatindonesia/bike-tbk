"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { FloatingActions } from "./FloatingActions";
import type { SiteSettings as SiteSettingsType, NavigationLink, LocalizedString, NavigationGroups } from "@/lib/types/sanity";

type NavigationItemForComponent = {
  _key?: string;
  label: LocalizedString;
  href: string;
  external?: boolean;
};

interface LayoutWrapperProps {
  siteSettings: SiteSettingsType;
  navigation: NavigationGroups;
  children: React.ReactNode;
}

const mapNavigation = (links: NavigationLink[] = []): NavigationItemForComponent[] =>
  links.map((link) => ({
    ...link,
    label: link.label,
  }));

export function LayoutWrapper({ siteSettings, navigation, children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  const siteSettingsForComponents = {
    companyName: siteSettings.companyName,
    companyInitials: siteSettings.companyInitials ?? siteSettings.companyName?.slice(0, 1) ?? "",
    tagline: siteSettings.tagline,
    footerDescription: siteSettings.footerDescription,
    currentYear: siteSettings.currentYear,
    legalName: siteSettings.legalName ?? siteSettings.companyLegalName,
    logo: siteSettings.logo ?? null,
    contactInfo: {
      address: siteSettings.contactInfo?.address ?? "",
      phone: siteSettings.contactInfo?.phone ?? "",
      email: siteSettings.contactInfo?.email ?? "",
      corporateSecretary: siteSettings.contactInfo?.corporateSecretary ?? "",
    },
    socialLinks: siteSettings.socialLinks ?? [],
  };

  const navigationForComponents = {
    mainNavigation: mapNavigation(navigation.mainNavigation),
    footerCompanyLinks: mapNavigation(navigation.footerCompanyLinks),
    footerResourceLinks: mapNavigation(navigation.footerResourceLinks),
    footerLegalLinks: mapNavigation(navigation.footerLegalLinks),
  };

  if (isStudio) {
    return <main className="flex-1">{children}</main>;
  }

  return (
    <>
      <SiteHeader siteSettings={siteSettingsForComponents} navigation={navigationForComponents.mainNavigation} />
      <main className="flex-1">{children}</main>
      <SiteFooter siteSettings={siteSettingsForComponents} navigation={navigationForComponents} />
      <FloatingActions />
    </>
  );
}
