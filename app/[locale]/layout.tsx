import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { LayoutWrapper } from "@/components/site/LayoutWrapper";
import { VisualEditing } from "next-sanity/visual-editing";
import { SanityLive } from "@/sanity/lib/live";
import { DisableDraftMode } from "@/components/site/DisableDraftMode";
import { LocaleHtml } from "@/components/LocaleHtml";
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

const pickLocalized = (value?: LocalizedString | LocalizedText | null, locale?: string) => {
  if (!value) return "";
  if (locale === 'id' && value.id) return value.id;
  return value.en ?? "";
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const siteSettings = await getSiteSettings();
  
  const faviconUrl = imageUrl(siteSettings.favicon);
  const ogImageUrl = imageUrl(siteSettings.defaultOgImage);
  const defaultTitle = pickLocalized(siteSettings.defaultSeoTitle, locale) || siteSettings.companyName;
  const defaultDescription = pickLocalized(siteSettings.defaultSeoDescription, locale) || pickLocalized(siteSettings.footerDescription, locale);
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const canonicalUrl = `${baseUrl}/${locale}`;
  
  const locales = ['en', 'id'] as const;
  const alternates = locales.map(loc => ({
    hrefLang: loc,
    href: `${baseUrl}/${loc}`,
  }));

  return {
    title: defaultTitle,
    description: defaultDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(alternates.map(a => [a.hrefLang, a.href])),
    },
    icons: {
      icon: faviconUrl ?? '/favicon.ico',
    },
    authors: [{ name: siteSettings.legalName ?? siteSettings.companyLegalName }],
    openGraph: {
      title: defaultTitle,
      description: defaultDescription,
      url: canonicalUrl,
      siteName: siteSettings.companyName,
      images: ogImageUrl ? [{ url: ogImageUrl, width: 1200, height: 630, alt: defaultTitle }] : [],
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      images: ogImageUrl ? [ogImageUrl] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const [siteSettings, navigation, messages] = await Promise.all([
    getSiteSettings(),
    getNavigation(),
    getMessages(),
  ]);
  
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <NextIntlClientProvider messages={messages}>
      <LocaleHtml />
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
    </NextIntlClientProvider>
  );
}
