"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from 'next-intl';
import { type Locale } from '@/i18n/routing';
import { ShieldCheck, Leaf, Users, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { pickLocalized } from "@/lib/utils";
import type { SustainabilitySection as SustainabilitySectionType } from "@/lib/types/sanity";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Leaf,
  Users,
  TrendingUp,
};

interface SustainabilitySectionProps {
  sustainability: SustainabilitySectionType;
}

export function SustainabilitySection({ sustainability }: SustainabilitySectionProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations('sustainability');

  const heading = pickLocalized(sustainability?.sectionHeader?.heading, locale);
  const description = pickLocalized(sustainability?.description, locale);
  const validCards =
    sustainability?.cards?.filter((card) => pickLocalized(card.title, locale)) ?? [];

  if (!heading && !description && validCards.length === 0) return null;

  return (
    <section id="sustainability" className="py-24 md:py-32">
      <div className="container-page grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            {pickLocalized(sustainability?.sectionHeader?.eyebrow, locale)}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {pickLocalized(sustainability?.sectionHeader?.heading, locale)}
          </h2>
          {sustainability?.sectionHeader?.description && (
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {pickLocalized(sustainability.sectionHeader.description, locale)}
            </p>
          )}
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {pickLocalized(sustainability?.description, locale)}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {validCards.map((card, index) => {
            const title = pickLocalized(card.title, locale);
            if (!title) return null;
            const Icon = card.icon ? iconMap[card.icon] : ShieldCheck;
            if (!Icon) return null;
            return (
              <div
                key={card._key || index}
                className="flex items-center gap-4 p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-card transition"
              >
                <div className="h-11 w-11 shrink-0 grid place-items-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="font-semibold text-foreground">{title}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-span-full mt-10 flex justify-center">
        <Link
          href={`/${locale}/sustainability`}
          className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-deep transition shadow-soft"
        >
          {t('hero.title')} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
