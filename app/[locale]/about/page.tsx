import { AboutHero } from "@/components/about/AboutHero";
import { AboutOverview } from "@/components/about/AboutOverview";
import { AboutInfo } from "@/components/about/AboutInfo";
import { AboutVisionMission } from "@/components/about/AboutVisionMission";
import { AboutManagement } from "@/components/about/AboutManagement";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { CTASection } from "@/components/sections/CTASection";
import { getTranslations } from 'next-intl/server';
import { getAboutPage } from '@/lib/services/about-page';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('metadata.about');
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const canonicalUrl = `${baseUrl}/${locale}/about`;
  
  const locales = ['en', 'id', 'zh'] as const;
  const alternates = locales.map(loc => ({
    hrefLang: loc,
    href: `${baseUrl}/${loc}/about`,
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

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const aboutPage = await getAboutPage();

  return (
    <div>
      <AboutHero hero={aboutPage.hero} locale={locale} />
      <AboutOverview overview={aboutPage.overview} locale={locale} />
      <TimelineSection milestonesSection={aboutPage.milestonesSection || {}} locale={locale} />
      <AboutInfo info={aboutPage.info} locale={locale} />
      <AboutVisionMission visionMission={aboutPage.visionMission} locale={locale} />
      <AboutManagement management={aboutPage.management} locale={locale} />
      <CTASection cta={aboutPage.cta || {}} locale={locale} />
    </div>
  );
}
