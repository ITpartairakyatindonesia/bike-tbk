"use client";

import Link from "next/link";
import { pickLocalized } from "@/lib/utils";
import type { LegacyBusinessSection, LegacyBrandCard } from "@/lib/types/sanity";

export type { LegacyBusinessSection, LegacyBrandCard };

interface LegacyBusinessProps {
  data?: LegacyBusinessSection;
  locale: string;
}

export function LegacyBusiness({ data, locale }: LegacyBusinessProps) {
  const eyebrow = pickLocalized(data?.sectionHeader?.eyebrow, locale);
  const heading = pickLocalized(data?.sectionHeader?.heading, locale);
  const description = pickLocalized(data?.sectionHeader?.description, locale);
  const brands = data?.brands || [];

  if (!heading) return null;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-page">
        <div className="text-center mb-12">
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div
              key={brand._key ?? `legacy-${index}`}
              className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
            >
              <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary">
                  {pickLocalized(brand.name, locale)?.charAt(0) || "B"}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">
                {pickLocalized(brand.name, locale)}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                {pickLocalized(brand.description, locale)}
              </p>
              {brand.highlights && brand.highlights.length > 0 && (
                <div className="mb-6">
                  <ul className="space-y-2">
                    {brand.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {pickLocalized(highlight, locale)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {brand.button && brand.button.href && (
                <Link
                  href={brand.button.href}
                  target={brand.button.external ? "_blank" : "_self"}
                  rel={brand.button.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-deep transition-colors duration-200 shadow-soft"
                >
                  {pickLocalized(brand.button.label, locale)}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
