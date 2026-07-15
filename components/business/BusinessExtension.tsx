"use client";

import { pickLocalized } from "@/lib/utils";
import type { BusinessExtensionSection, BusinessInfoCard } from "@/lib/types/sanity";
import { TrendingUp, Globe, Building2, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Globe,
  Building2,
};

interface BusinessExtensionProps {
  extension?: BusinessExtensionSection;
  locale: string;
}

export function BusinessExtension({ extension, locale }: BusinessExtensionProps) {
  const eyebrow = pickLocalized(extension?.sectionHeader?.eyebrow, locale);
  const heading = pickLocalized(extension?.sectionHeader?.heading, locale);
  const description = pickLocalized(extension?.sectionHeader?.description, locale);
  const cards = extension?.cards || [];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-page">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            {eyebrow}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            {heading}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card: BusinessInfoCard, index) => {
            const Icon = iconMap[card.icon || ""] || TrendingUp;
            return (
              <div
                key={card._key ?? `ext-${index}`}
                className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-primary-soft text-primary mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{pickLocalized(card.title, locale)}</h3>
                <p className="text-muted-foreground leading-relaxed">{pickLocalized(card.description, locale)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
