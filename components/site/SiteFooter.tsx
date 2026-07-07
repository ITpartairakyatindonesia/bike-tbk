import Link from "next/link";
import { Facebook, Linkedin, Twitter, Instagram, Youtube, Mail, Phone, MapPin, type LucideIcon } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data";
import { urlFor } from "@/lib/cms/image";

interface SiteFooterProps {
  siteSettings: {
    companyName: string;
    companyInitials: string;
    footerDescription: string;
    currentYear: number;
    legalName: string;
    logo: {
      asset: {
        _ref: string;
        _type: 'reference';
      };
    } | null;
    contactInfo: {
      address: string;
      phone: string;
      email: string;
    };
    socialLinks: { platform: string; href: string; label?: string }[];
  };
  navigation: {
    footerCompanyLinks: { label: string; href: string; external?: boolean }[];
    footerResourceLinks: { label: string; href: string; external?: boolean }[];
    footerLegalLinks: { label: string; href: string; external?: boolean }[];
  };
}

const PLATFORM_ICONS: Record<string, LucideIcon> = {
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
};

export function SiteFooter({ siteSettings, navigation }: SiteFooterProps) {
  return (
    <footer className="mt-24 bg-primary-deep text-primary-foreground">
      <div className="container-page py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1 space-y-5">
          <div className="flex items-center gap-2.5">
            {siteSettings.logo ? (
              <img
                src={urlFor(siteSettings.logo).url()}
                alt={siteSettings.companyName}
                className="h-10 w-10 rounded-lg object-cover"
              />
            ) : (
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary-foreground/10 backdrop-blur">
                <span className="font-display font-bold text-sm">{siteSettings.companyInitials}</span>
              </div>
            )}
            <div className="leading-tight">
              <div className="font-display font-bold tracking-tight">{siteSettings.companyName}</div>
            </div>
          </div>
          <p className="text-sm opacity-75 leading-relaxed">
            {siteSettings.footerDescription}
          </p>
          <div className="flex gap-2">
            {siteSettings.socialLinks.map((link, i) => {
              const Icon = PLATFORM_ICONS[link.platform] || Linkedin;
              return (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 grid place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition"
                  aria-label={link.label || link.platform}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] opacity-70 mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            {navigation.footerCompanyLinks.map((link, index) => (
              <li key={`${link.href}-${index}`}>
                {link.href.startsWith('#') ? (
                  <a href={link.href} className="opacity-85 hover:opacity-100">{link.label}</a>
                ) : (
                  <Link href={link.href} className="opacity-85 hover:opacity-100">{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] opacity-70 mb-4">Resources</h4>
          <ul className="space-y-2.5 text-sm">
            {navigation.footerResourceLinks.map((link, index) => (
              <li key={`${link.href}-${index}`}>
                {link.href.startsWith('#') ? (
                  <a href={link.href} className="opacity-85 hover:opacity-100">{link.label}</a>
                ) : (
                  <Link href={link.href} className="opacity-85 hover:opacity-100">{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] opacity-70 mb-4">Head Office</h4>
          <ul className="space-y-3 text-sm opacity-85">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0" />{siteSettings.contactInfo.address || CONTACT_INFO.address}</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0" />{siteSettings.contactInfo.phone || CONTACT_INFO.phone}</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0" />{siteSettings.contactInfo.email || CONTACT_INFO.email}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-70">
          <p>© {siteSettings.currentYear} {siteSettings.legalName}. All rights reserved.</p>
          <div className="flex gap-5">
            {navigation.footerLegalLinks.map((link, index) => (
              <a key={index} href={link.href} className="hover:opacity-100">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
