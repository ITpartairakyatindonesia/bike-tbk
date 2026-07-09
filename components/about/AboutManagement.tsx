"use client";

import { ManagementCard } from "@/components/ManagementCard";
import type { AboutManagementSection } from "@/lib/types/sanity";
import { urlFor } from "@/lib/cms/image";
import { useTranslations } from 'next-intl';
import { pickLocalized } from "@/lib/utils";

interface AboutManagementProps {
  management?: AboutManagementSection;
  locale: string;
}

export function AboutManagement({ management, locale }: AboutManagementProps) {
  const t = useTranslations('about.management');

  const introduction = pickLocalized(management?.introduction, locale) || t('introduction');
  const executives = management?.executives || [];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-page">
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            {t('sectionLabel')}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {introduction}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {executives.map((executive) => (
            <ManagementCard
              key={executive.slug?.current || executive.name}
              name={executive.name || ""}
              position={pickLocalized(executive.position, locale)}
              biography={pickLocalized(executive.biography, locale)}
              slug={executive.slug?.current || ""}
              image={executive.image?.url || (executive.image?.asset ? urlFor(executive.image).url() : undefined)}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
