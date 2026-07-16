import { getTranslations } from 'next-intl/server';
import { CareerHero } from "@/components/career/CareerHero";
import { JobOpenings } from "@/components/career/JobOpenings";
import { CTASection } from "@/components/sections/CTASection";
import { getCareerPage } from '@/lib/services/career-page';
import { pickLocalized } from "@/lib/utils";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const careerPage = await getCareerPage();
  const t = await getTranslations('metadata.career');

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const canonicalUrl = `${baseUrl}/${locale}/career`;

  const locales = ['en', 'id', 'zh'] as const;
  const alternates = locales.map(loc => ({
    hrefLang: loc,
    href: `${baseUrl}/${loc}/career`,
  }));

  const seoTitle = pickLocalized(careerPage.seo?.title, locale) || t('title');
  const seoDescription = pickLocalized(careerPage.seo?.description, locale) || t('description');

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(alternates.map(a => [a.hrefLang, a.href])),
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: canonicalUrl,
      locale: locale === 'id' ? 'id_ID' : locale === 'zh' ? 'zh_CN' : 'en_US',
    },
    twitter: {
      title: seoTitle,
      description: seoDescription,
    },
  };
}

export default async function CareerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const careerPage = await getCareerPage();

  return (
    <div>
      <CareerHero hero={careerPage.hero} locale={locale} />
      <JobOpenings section={careerPage.jobOpenings} locale={locale} />
      <CTASection cta={careerPage.cta || {}} locale={locale} />
    </div>
  );
}
