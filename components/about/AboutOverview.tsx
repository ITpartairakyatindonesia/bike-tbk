"use client";

import type { AboutOverviewSection } from "@/lib/types/sanity";
import { pickLocalized } from "@/lib/utils";

interface AboutOverviewProps {
  overview?: AboutOverviewSection;
  locale: string;
}

export function AboutOverview({ overview, locale }: AboutOverviewProps) {
  const eyebrow = pickLocalized(overview?.sectionHeader?.eyebrow, locale);
  const title = pickLocalized(overview?.sectionHeader?.heading, locale);
  const paragraphs = overview?.paragraphs || [];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-page">
        <div className="max-w-3xl mx-auto">
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-10">
            {title}
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            {paragraphs.map((para, index) => (
              <p key={index}>{pickLocalized(para, locale)}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
