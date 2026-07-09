"use client";

import { useTranslations } from 'next-intl';

export function AboutOverview() {
  const t = useTranslations('about.overview');

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-page">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Company Overview
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-10">
            {t('title')}
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>{t('paragraph1')}</p>
            <p>{t('paragraph2')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
