"use client";

import { Building2 } from "lucide-react";
import { pickLocalized } from "@/lib/utils";
import type { CapitalMarketInstitutionsSection, CapitalMarketInstitutionItem } from "@/lib/types/sanity";

interface CapitalMarketInstitutionsProps {
  section?: CapitalMarketInstitutionsSection;
  locale: string;
  bgClass?: string;
}

export function CapitalMarketInstitutions({ section, locale, bgClass = "bg-muted/30" }: CapitalMarketInstitutionsProps) {
  const eyebrow = pickLocalized(section?.sectionHeader?.eyebrow, locale);
  const heading = pickLocalized(section?.sectionHeader?.heading, locale);
  const description = pickLocalized(section?.sectionHeader?.description, locale);
  const items = section?.items || [];

  if (!heading && items.length === 0) return null;

  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
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
          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((item: CapitalMarketInstitutionItem, index) => {
              const label = pickLocalized(item.label, locale);
              const value = pickLocalized(item.value, locale);
              if (!label && !value) return null;

              return (
                <div
                  key={item._key ?? `cmi-${index}`}
                  className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      {label}
                    </div>
                    <div className="font-semibold text-foreground leading-tight">
                      {value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
