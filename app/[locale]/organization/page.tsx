import { getHomePage } from "@/lib/services/home-page";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('metadata.organization');
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const canonicalUrl = `${baseUrl}/${locale}/organization`;
  
  const locales = ['en', 'id'] as const;
  const alternates = locales.map(loc => ({
    hrefLang: loc,
    href: `${baseUrl}/${loc}/organization`,
  }));

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(alternates.map(a => [a.hrefLang, a.href])),
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: canonicalUrl,
      locale: locale === 'id' ? 'id_ID' : 'en_US',
    },
    twitter: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function BrandsPage() {
  const homePage = await getHomePage();

  return (
    <div>
      <BrandsSection brandsSection={homePage.brandsSection || {}} />
    </div>
  );
}
