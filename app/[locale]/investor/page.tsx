import { InvestorSection } from "@/components/sections/InvestorSection";
import { getTranslations } from 'next-intl/server';
import { getInvestorPage } from '@/lib/services/investor-page';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('metadata.investor');

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const canonicalUrl = `${baseUrl}/${locale}/investor`;

  const locales = ['en', 'id'] as const;
  const alternates = locales.map(loc => ({
    hrefLang: loc,
    href: `${baseUrl}/${loc}/investor`,
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

export default async function InvestorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const investorPage = await getInvestorPage();

  return (
    <div>
      <InvestorSection hero={investorPage.hero} cards={investorPage.cards} locale={locale} />
    </div>
  );
}
