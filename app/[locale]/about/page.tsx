import { AboutHero } from "@/components/about/AboutHero";
import { AboutOverview } from "@/components/about/AboutOverview";
import { AboutInfo } from "@/components/about/AboutInfo";
import { AboutVisionMission } from "@/components/about/AboutVisionMission";
import { AboutCulture } from "@/components/about/AboutCulture";
import { AboutManagement } from "@/components/about/AboutManagement";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('metadata.about');
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const canonicalUrl = `${baseUrl}/${locale}/about`;
  
  const locales = ['en', 'id'] as const;
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
      locale: locale === 'id' ? 'id_ID' : 'en_US',
    },
    twitter: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutOverview />
      <AboutInfo />
      <AboutVisionMission />
      <AboutCulture />
      <AboutManagement />
    </div>
  );
}
