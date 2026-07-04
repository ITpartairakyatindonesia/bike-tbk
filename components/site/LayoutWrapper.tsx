"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { FloatingActions } from "./FloatingActions";

interface LayoutWrapperProps {
  siteSettings: {
    companyName: string;
    companyInitials: string;
    companyDescription: string;
    currentYear: number;
    legalName: string;
    logo: {
      asset: {
        _ref: string;
        _type: 'reference';
      };
    } | null;
  };
  children: React.ReactNode;
}

export function LayoutWrapper({ siteSettings, children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <main className="flex-1">{children}</main>;
  }

  return (
    <>
      <SiteHeader siteSettings={siteSettings} />
      <main className="flex-1">{children}</main>
      <SiteFooter siteSettings={siteSettings} />
      <FloatingActions />
    </>
  );
}
