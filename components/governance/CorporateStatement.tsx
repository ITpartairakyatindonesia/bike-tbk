"use client";

import { pickLocalized } from "@/lib/utils";
import type { CorporateStatementSection } from "@/lib/types/sanity";

interface CorporateStatementProps {
  corporateStatement?: CorporateStatementSection;
  locale: string;
}

export function CorporateStatement({ corporateStatement, locale }: CorporateStatementProps) {
  const eyebrow = pickLocalized(corporateStatement?.sectionHeader?.eyebrow, locale);
  const heading = pickLocalized(corporateStatement?.sectionHeader?.heading, locale);
  const statement = pickLocalized(corporateStatement?.statement, locale);

  return (
    <section className="py-16 md:py-24 bg-primary-deep text-primary-foreground">
      <div className="container-page">
        <div className="max-w-3xl mx-auto text-center">
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.25em] text-accent-gold font-semibold mb-4">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
            {heading}
          </h2>
          <p className="text-lg md:text-xl opacity-85 leading-relaxed">
            {statement}
          </p>
        </div>
      </div>
    </section>
  );
}
