import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BusinessSection } from "@/components/sections/BusinessSection";
import { SustainabilitySection } from "@/components/sections/SustainabilitySection";
import { NewsSection } from "@/components/sections/NewsSection";
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

export default async function HomePage() {
  const homePage = await getHomePage();
  const newsItems = await getLatestNews(3);

  return (
    <div>
      <HeroSection hero={homePage.hero || {}} />
      <AboutSection aboutPreview={homePage.aboutPreview || {}} />
      <BusinessSection businessHighlights={homePage.businessHighlights || {}} />
      <SustainabilitySection sustainability={homePage.sustainability || {}} />
      <NewsSection latestNews={homePage.latestNews || {}} newsItems={newsItems} />
      <CTASection cta={homePage.cta || {}} />
    </div>
  );
}
