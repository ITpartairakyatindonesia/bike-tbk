import { getTranslations } from 'next-intl/server';
import { GovernanceHero } from "@/components/governance/GovernanceHero";
import { GovernanceOverview } from "@/components/governance/GovernanceOverview";
import { GovernancePrinciples } from "@/components/governance/GovernancePrinciples";
import { RiskManagement } from "@/components/governance/RiskManagement";
import { CorporateStatement } from "@/components/governance/CorporateStatement";
import { LegalBasis } from "@/components/governance/LegalBasis";
import { CTASection } from "@/components/sections/CTASection";
import { getGovernancePage } from '@/lib/services/governance-page';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('metadata.governance');

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const canonicalUrl = `${baseUrl}/${locale}/governance`;

  const locales = ['en', 'id', 'zh'] as const;
  const alternates = locales.map(loc => ({
    hrefLang: loc,
    href: `${baseUrl}/${loc}/governance`,
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

export default async function GovernancePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const governancePage = await getGovernancePage();

  return (
    <div>
      <GovernanceHero hero={governancePage.hero} locale={locale} />
      <GovernanceOverview overview={governancePage.overview} locale={locale} />
      <GovernancePrinciples principles={governancePage.principles} locale={locale} />
      <RiskManagement riskManagement={governancePage.riskManagement} locale={locale} />
      <CorporateStatement corporateStatement={governancePage.corporateStatement} locale={locale} />
      <LegalBasis legalBasis={governancePage.legalBasis} locale={locale} />
      <CTASection cta={governancePage.cta || {}} locale={locale} />
    </div>
  );
}
