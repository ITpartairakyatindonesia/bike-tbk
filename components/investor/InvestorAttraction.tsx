"use client";

import { pickLocalized } from "@/lib/utils";
import type { InvestorAttractionSection, InvestorAttractionCard } from "@/lib/types/sanity";
import { TrendingUp, Rocket, ShieldCheck, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Rocket,
  ShieldCheck,
};

interface InvestorAttractionProps {
  section?: InvestorAttractionSection;
  locale: string;
  bgClass?: string;
}

export function InvestorAttraction({ section, locale, bgClass = "bg-muted/30" }: InvestorAttractionProps) {
  const eyebrow = pickLocalized(section?.sectionHeader?.eyebrow, locale);
  const heading = pickLocalized(section?.sectionHeader?.heading, locale);
  const description = pickLocalized(section?.sectionHeader?.description, locale);
  const cards = section?.cards || [];

  if (!heading && cards.length === 0) return null;

  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
      <div className="container-page">
        <div className="text-center mb-12">
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            {heading}
          </h2>
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card: InvestorAttractionCard, index) => {
            const Icon = iconMap[card.icon ?? ""] ?? TrendingUp;
            const title = pickLocalized(card.title, locale);
            const desc = pickLocalized(card.description, locale);
            if (!title && !desc) return null;
            return (
              <div
                key={card._key ?? `attr-${index}`}
                className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 grid place-items-center mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                {title && (
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                )}
                {desc && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
