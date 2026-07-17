"use client";

import { Scale } from "lucide-react";
import { pickLocalized } from "@/lib/utils";
import type { LegalBasisSection } from "@/lib/types/sanity";

interface LegalBasisProps {
  legalBasis?: LegalBasisSection;
  locale: string;
}

export function LegalBasis({ legalBasis, locale }: LegalBasisProps) {
  const eyebrow = pickLocalized(legalBasis?.sectionHeader?.eyebrow, locale);
  const heading = pickLocalized(legalBasis?.sectionHeader?.heading, locale);
  const description = pickLocalized(legalBasis?.sectionHeader?.description, locale);
  const items = legalBasis?.items || [];

  if (items.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-page">
        <div className="max-w-3xl mx-auto">
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            {heading}
          </h2>
          {description && (
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {description}
            </p>
          )}
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item._key || pickLocalized(item.regulation, locale)}
                className="flex gap-4 p-5 rounded-xl border border-border/60 bg-card hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Scale className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground leading-tight mb-1">
                    {pickLocalized(item.regulation, locale)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pickLocalized(item.description, locale)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
