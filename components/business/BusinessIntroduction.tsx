"use client";

import { pickLocalized } from "@/lib/utils";
import type { BusinessIntroductionSection } from "@/lib/types/sanity";

interface BusinessIntroductionProps {
  introduction?: BusinessIntroductionSection;
  locale: string;
}

export function BusinessIntroduction({ introduction, locale }: BusinessIntroductionProps) {
  const title = pickLocalized(introduction?.title, locale);
  const paragraphs = introduction?.paragraphs || [];
  const statCards = introduction?.statCards || [];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {title}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {paragraphs.map((para, index) => (
                <p key={index}>{pickLocalized(para, locale)}</p>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {statCards.map((card, index) => (
              <div key={card._key ?? `stat-${index}`} className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="text-3xl font-bold text-primary mb-2">{pickLocalized(card.value, locale)}</div>
                <div className="text-sm text-muted-foreground">{pickLocalized(card.label, locale)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
