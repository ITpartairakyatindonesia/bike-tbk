"use client";

import { pickLocalized } from "@/lib/utils";
import type { InvestorHighlightsSection, InvestorHighlightCard } from "@/lib/types/sanity";

interface InvestorHighlightsProps {
  section?: InvestorHighlightsSection;
  locale: string;
  bgClass?: string;
}

export function InvestorHighlights({ section, locale, bgClass = "bg-background" }: InvestorHighlightsProps) {
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card: InvestorHighlightCard, index) => (
            <div
              key={card._key ?? `highlight-${index}`}
              className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {pickLocalized(card.value, locale)}
              </div>
              <div className="text-sm font-semibold mb-2">
                {pickLocalized(card.label, locale)}
              </div>
              {card.description && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pickLocalized(card.description, locale)}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
