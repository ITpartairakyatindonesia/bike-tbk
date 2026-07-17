"use client";

import { pickLocalized } from "@/lib/utils";
import type { ShareholderStructureSection, ShareholderItem } from "@/lib/types/sanity";

interface ShareholderStructureProps {
  section?: ShareholderStructureSection;
  locale: string;
  bgClass?: string;
}

export function ShareholderStructure({ section, locale, bgClass = "bg-background" }: ShareholderStructureProps) {
  const eyebrow = pickLocalized(section?.sectionHeader?.eyebrow, locale);
  const heading = pickLocalized(section?.sectionHeader?.heading, locale);
  const description = pickLocalized(section?.sectionHeader?.description, locale);
  const items = section?.items || [];
  const note = pickLocalized(section?.note, locale);

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
          <div className="space-y-3">
            {items.map((item: ShareholderItem, index) => {
              const name = pickLocalized(item.name, locale);
              const role = pickLocalized(item.role, locale);
              const percentage = item.percentage;
              if (!name && !percentage) return null;

              return (
                <div
                  key={item._key ?? `sh-${index}`}
                  className="flex items-center justify-between p-5 rounded-xl border border-border bg-card"
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-foreground truncate">{name}</div>
                    {role && (
                      <div className="text-xs uppercase tracking-wider text-primary font-semibold mt-1">
                        {role}
                      </div>
                    )}
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <div className="text-2xl font-bold text-primary">{percentage}</div>
                  </div>
                </div>
              );
            })}
          </div>
          {note && (
            <p className="text-sm text-muted-foreground mt-6 leading-relaxed italic">
              {note}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
