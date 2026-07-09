"use client";

import { useTranslations } from 'next-intl';
import type { AboutCultureSection } from "@/lib/types/sanity";
import { TreePine, HeartHandshake, Users, Lightbulb, LucideIcon } from "lucide-react";
import { pickLocalized } from "@/lib/utils";

interface AboutCultureProps {
  culture?: AboutCultureSection;
  locale: string;
}

const iconMap: Record<string, LucideIcon> = {
  TreePine,
  HeartHandshake,
  Users,
  Lightbulb,
};

export function AboutCulture({ culture, locale }: AboutCultureProps) {
  const t = useTranslations('about.culture');

  const title = pickLocalized(culture?.sectionHeader?.heading, locale) || t('title');
  const subtitle = pickLocalized(culture?.sectionHeader?.heading, locale) || t('subtitle');
  const introduction = pickLocalized(culture?.introduction, locale) || t('introduction');
  const cards = culture?.cards || [];

  return (
    <section className="py-24 md:py-32 bg-primary-soft/30">
      <div className="container-page">
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            {title}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            {subtitle}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {introduction}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = iconMap[card.icon || ''] || Users;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-card transition"
              >
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-primary-soft text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {pickLocalized(card.title, locale)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pickLocalized(card.description, locale)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
