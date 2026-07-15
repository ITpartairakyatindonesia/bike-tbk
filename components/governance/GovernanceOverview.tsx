"use client";

import { pickLocalized } from "@/lib/utils";
import { urlFor } from "@/lib/cms/image";
import type { GovernanceOverviewSection } from "@/lib/types/sanity";

interface GovernanceOverviewProps {
  overview?: GovernanceOverviewSection;
  locale: string;
}

export function GovernanceOverview({ overview, locale }: GovernanceOverviewProps) {
  const eyebrow = pickLocalized(overview?.sectionHeader?.eyebrow, locale);
  const heading = pickLocalized(overview?.sectionHeader?.heading, locale);
  const description = pickLocalized(overview?.sectionHeader?.description, locale);
  const paragraphs = overview?.paragraphs || [];
  const imageUrl = overview?.image?.asset ? urlFor(overview.image).url() : null;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            {eyebrow && (
              <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
                {eyebrow}
              </div>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {heading}
            </h2>
            {description && (
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {description}
              </p>
            )}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {paragraphs.map((para, index) => (
                <p key={index}>{pickLocalized(para, locale)}</p>
              ))}
            </div>
          </div>
          {imageUrl && (
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={imageUrl}
                alt={heading || "Governance overview"}
                className="w-full h-full object-cover"
                width={1200}
                height={800}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
