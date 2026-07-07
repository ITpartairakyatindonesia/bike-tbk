import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { draftMode } from "next/headers";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingActions } from "@/components/site/FloatingActions";
import { LayoutWrapper } from "@/components/site/LayoutWrapper";
import { VisualEditing } from "next-sanity/visual-editing";
import { SanityLive } from "@/sanity/lib/live";
import { DisableDraftMode } from "@/components/site/DisableDraftMode";
import { getSiteSettings } from "@/lib/services/site-settings";
import { getNavigation } from "@/lib/services/navigation";
import { urlFor } from "@/lib/cms/image";
import type { SanityImage, LocalizedString, LocalizedText, NavigationGroups } from "@/lib/types/sanity";

export const revalidate = 0;

function imageUrl(image?: SanityImage | null) {
  if (!image?.asset) return null;
  try {
    return urlFor(image).url();
  } catch {
    return null;
  }
}

const pickLocalized = (value?: LocalizedString | LocalizedText | null) => value?.en ?? "";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings();
  
  const faviconUrl = imageUrl(siteSettings.favicon);
  const ogImageUrl = imageUrl(siteSettings.defaultOgImage);
  const defaultTitle = pickLocalized(siteSettings.defaultSeoTitle) || siteSettings.companyName;
  const defaultDescription = pickLocalized(siteSettings.defaultSeoDescription) || pickLocalized(siteSettings.footerDescription);

  return {
    title: defaultTitle,
    description: defaultDescription,
    icons: {
      icon: faviconUrl ?? '/favicon.ico',
    },
    authors: [{ name: siteSettings.legalName ?? siteSettings.companyLegalName }],
    openGraph: {
      title: defaultTitle,
      description: defaultDescription,
      images: ogImageUrl ? [ogImageUrl] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      images: ogImageUrl ? [ogImageUrl] : [],
    },
  };
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [siteSettings, navigation] = await Promise.all([
    getSiteSettings(),
    getNavigation(),
  ]);
  
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <LayoutWrapper siteSettings={siteSettings} navigation={navigation as NavigationGroups}>
          {children}
        </LayoutWrapper>
        <SanityLive includeDrafts={isDraftMode} />
        {isDraftMode && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
      </body>
    </html>
  );
}
