import { getTranslations } from 'next-intl/server';
import { InvestorHero } from "@/components/investor/InvestorHero";
import { InvestorOverview } from "@/components/investor/InvestorOverview";
import { InvestorHighlights } from "@/components/investor/InvestorHighlights";
import { InvestorQuickAccess } from "@/components/investor/InvestorQuickAccess";
import { InvestorStockInfo } from "@/components/investor/InvestorStockInfo";
import { InvestorAttraction } from "@/components/investor/InvestorAttraction";
import { InvestorCorporateAction } from "@/components/investor/InvestorCorporateAction";
import { ShareholderStructure } from "@/components/investor/ShareholderStructure";
import { CapitalMarketInstitutions } from "@/components/investor/CapitalMarketInstitutions";
import { CTASection } from "@/components/sections/CTASection";
import { getInvestorPage } from '@/lib/services/investor-page';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('metadata.investor');

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const canonicalUrl = `${baseUrl}/${locale}/investor`;

  const locales = ['en', 'id', 'zh'] as const;
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
      locale: locale === 'id' ? 'id_ID' : locale === 'zh' ? 'zh_CN' : 'en_US',
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
      <InvestorHero hero={investorPage.hero} locale={locale} />
      <InvestorOverview overview={investorPage.overview} locale={locale} />
      <InvestorHighlights section={investorPage.investmentHighlights} locale={locale} />
      <InvestorHighlights section={investorPage.financialHighlights} locale={locale} bgClass="bg-muted/30" />
      <InvestorQuickAccess section={investorPage.quickAccess} locale={locale} />
      <InvestorStockInfo section={investorPage.stockInfo} locale={locale} />
      <InvestorCorporateAction section={investorPage.corporateAction} locale={locale} />
      <ShareholderStructure section={investorPage.shareholderStructure} locale={locale} />
      <CapitalMarketInstitutions section={investorPage.capitalMarketInstitutions} locale={locale} />
      <InvestorAttraction section={investorPage.attraction} locale={locale} />
      <CTASection cta={investorPage.cta || {}} locale={locale} />
    </div>
  );
}
