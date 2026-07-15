"use client";

import type { AboutInfoSection } from "@/lib/types/sanity";
import { pickLocalized } from "@/lib/utils";

interface AboutInfoProps {
  info?: AboutInfoSection;
  locale: string;
}

export function AboutInfo({ info, locale }: AboutInfoProps) {
  const eyebrow = pickLocalized(info?.sectionHeader?.eyebrow, locale);
  const title = pickLocalized(info?.sectionHeader?.heading, locale);
  const items = info?.items || [];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-page">
        <div className="max-w-4xl mx-auto">
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-12">
            {title}
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 md:p-8 hover:bg-primary-soft/30 transition"
              >
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  {pickLocalized(item.label, locale)}
                </div>
                <div className="font-semibold text-foreground leading-snug">
                  {pickLocalized(item.value, locale)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
