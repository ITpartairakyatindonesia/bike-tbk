import { getTranslations } from 'next-intl/server';
import { BusinessHero } from "@/components/business/BusinessHero";
import { BusinessIntroduction } from "@/components/business/BusinessIntroduction";
import { BusinessExtension } from "@/components/business/BusinessExtension";
import { BusinessDevelopment } from "@/components/business/BusinessDevelopment";
import { BusinessDiversification } from "@/components/business/BusinessDiversification";
import { SubHoldingStructure } from "@/components/business/SubHoldingStructure";
import { CoreBusiness } from "@/components/business/CoreBusiness";
import { ProjectExperience } from "@/components/business/ProjectExperience";
import { CTASection } from "@/components/sections/CTASection";
import { getBusinessPage } from '@/lib/services/business-page';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('metadata.business');

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const canonicalUrl = `${baseUrl}/${locale}/business`;

  const locales = ['en', 'id', 'zh'] as const;
  const alternates = locales.map(loc => ({
    hrefLang: loc,
    href: `${baseUrl}/${loc}/business`,
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

export default async function BusinessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const businessPage = await getBusinessPage();

  return (
    <div>
      <BusinessHero hero={businessPage.hero} locale={locale} />
      <BusinessIntroduction introduction={businessPage.introduction} locale={locale} />
      <BusinessExtension extension={businessPage.extension} locale={locale} />
      <BusinessDevelopment development={businessPage.development} locale={locale} />
      <BusinessDiversification diversification={businessPage.diversification} locale={locale} />
      <SubHoldingStructure data={businessPage.subHoldingStructure} locale={locale} />
      <CoreBusiness data={businessPage.coreBusiness} locale={locale} />
      <ProjectExperience data={businessPage.projectExperience} locale={locale} />
      <CTASection cta={businessPage.cta || {}} />
    </div>
  );
}
