import { getTranslations } from 'next-intl/server';
import { SustainabilityHero } from "@/components/sustainability/SustainabilityHero";
import { SustainabilityOverview } from "@/components/sustainability/SustainabilityOverview";
import { SustainabilityInitiatives } from "@/components/sustainability/SustainabilityInitiatives";
import { CTASection } from "@/components/sections/CTASection";
import { getSustainabilityPage } from '@/lib/services/sustainability-page';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('metadata.sustainability');

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const canonicalUrl = `${baseUrl}/${locale}/sustainability`;

  const locales = ['en', 'id', 'zh'] as const;
  const alternates = locales.map(loc => ({
    hrefLang: loc,
    href: `${baseUrl}/${loc}/sustainability`,
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

export default async function SustainabilityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const sustainabilityPage = await getSustainabilityPage();

  return (
    <div>
      <SustainabilityHero hero={sustainabilityPage.hero} locale={locale} />
      <SustainabilityOverview overview={sustainabilityPage.overview} locale={locale} />
      <SustainabilityInitiatives section={sustainabilityPage.esgCommitment} locale={locale} />
      <SustainabilityInitiatives section={sustainabilityPage.environmentalInitiatives} locale={locale} bgClass="bg-muted/30" />
      <SustainabilityInitiatives section={sustainabilityPage.socialResponsibility} locale={locale} />
      <SustainabilityInitiatives section={sustainabilityPage.governanceIntegration} locale={locale} bgClass="bg-muted/30" />
      <CTASection cta={sustainabilityPage.cta || {}} locale={locale} />
    </div>
  );
}
