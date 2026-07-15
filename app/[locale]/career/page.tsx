import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('metadata.career');

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const canonicalUrl = `${baseUrl}/${locale}/career`;

  const locales = ['en', 'id', 'zh'] as const;
  const alternates = locales.map(loc => ({
    hrefLang: loc,
    href: `${baseUrl}/${loc}/career`,
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

export default async function CareerPage() {
  const t = await getTranslations('career');

  return (
    <div>
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t('hero.eyebrow')}
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page">
          <div className="rounded-2xl border border-dashed border-border bg-muted/20 p-12 text-center">
            <p className="text-muted-foreground text-lg">
              {t('placeholder')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
