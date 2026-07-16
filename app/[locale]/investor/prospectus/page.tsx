import { getTranslations } from 'next-intl/server';
import { DocumentSection } from "@/components/investor/DocumentSection";
import { CTASection } from "@/components/sections/CTASection";
import { getInvestorPage } from '@/lib/services/investor-page';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('metadata.investor');

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const canonicalUrl = `${baseUrl}/${locale}/investor/prospectus`;

  const locales = ['en', 'id', 'zh'] as const;
  const alternates = locales.map(loc => ({
    hrefLang: loc,
    href: `${baseUrl}/${loc}/investor/prospectus`,
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

export default async function ProspectusPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const investorPage = await getInvestorPage();

  return (
    <div>
      <DocumentSection section={investorPage.prospectus} locale={locale} />
      <CTASection cta={investorPage.cta || {}} locale={locale} />
    </div>
  );
}
