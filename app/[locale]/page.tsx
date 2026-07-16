import { HomeHero } from "@/components/home/HomeHero";
import { HomeAboutPreview } from "@/components/home/HomeAboutPreview";
import { HomeBusinessHighlights } from "@/components/home/HomeBusinessHighlights";
import { HomeSustainability } from "@/components/home/HomeSustainability";
import { HomeLatestNews } from "@/components/home/HomeLatestNews";
import { CTASection } from "@/components/sections/CTASection";
import { getHomePage } from "@/lib/services/home-page";
import { getLatestNews } from "@/lib/services/news";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('metadata.home');
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const canonicalUrl = `${baseUrl}/${locale}`;
  
  const locales = ['en', 'id', 'zh'] as const;
  const alternates = locales.map(loc => ({
    hrefLang: loc,
    href: `${baseUrl}/${loc}`,
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
      locale: locale === 'id' ? 'id_ID' : locale === 'zh' ? 'zh_CN' : 'en_US',
    },
    twitter: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const homePage = await getHomePage();
  const newsItems = await getLatestNews(3);

  return (
    <div>
      <HomeHero hero={homePage.hero || {}} locale={locale} />
      <HomeAboutPreview aboutPreview={homePage.aboutPreview || {}} locale={locale} />
      <HomeBusinessHighlights businessHighlights={homePage.businessHighlights || {}} locale={locale} />
      <HomeSustainability sustainability={homePage.sustainability || {}} locale={locale} />
      <HomeLatestNews latestNews={homePage.latestNews || {}} newsItems={newsItems} locale={locale} />
      <CTASection cta={homePage.cta || {}} locale={locale} />
    </div>
  );
}
