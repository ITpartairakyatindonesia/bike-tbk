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
import { urlFor } from "@/lib/cms/image";
import type { SanityImage } from "@/lib/types/sanity";

function imageUrl(image?: SanityImage | null) {
  if (!image?.asset) return null;
  try {
    return urlFor(image).url();
  } catch {
    return null;
  }
}

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

  return {
    title: siteSettings.defaultSeoTitle,
    description: siteSettings.defaultSeoDescription,
    icons: {
      icon: faviconUrl ?? '/favicon.ico',
    },
    authors: [{ name: siteSettings.legalName }],
    openGraph: {
      title: siteSettings.defaultSeoTitle,
      description: siteSettings.defaultSeoDescription,
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
  const siteSettings = await getSiteSettings();
  
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <LayoutWrapper siteSettings={siteSettings}>
          {children}
        </LayoutWrapper>
        <SanityLive />
        {(await draftMode()).isEnabled && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
      </body>
    </html>
  );
}
