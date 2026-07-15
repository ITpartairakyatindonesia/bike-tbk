"use client";

import { pickLocalized } from "@/lib/utils";
import { urlFor } from "@/lib/cms/image";
import type { CoreBusinessSection, CoreBusinessCard } from "@/lib/types/sanity";

export type { CoreBusinessSection, CoreBusinessCard };

interface CoreBusinessProps {
  data?: CoreBusinessSection;
  locale: string;
}

const FALLBACK_IMAGES = [
  "/business-energy.jpg",
  "/business-logistics.jpg",
  "/business-finance.jpg",
  "/project-1.jpg",
];

export function CoreBusiness({ data, locale }: CoreBusinessProps) {
  const eyebrow = pickLocalized(data?.sectionHeader?.eyebrow, locale);
  const heading = pickLocalized(data?.sectionHeader?.heading, locale);
  const description = pickLocalized(data?.sectionHeader?.description, locale);
  const cards = data?.cards || [];

  if (!heading) return null;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            {heading}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const title = pickLocalized(card.title, locale);
            if (!title) return null;
            return (
              <article
                key={card._key ?? `core-${index}`}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-200"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted/30">
                  <img
                    src={
                      card.image?.asset
                        ? urlFor(card.image).url()
                        : (FALLBACK_IMAGES[index] ?? "/project-1.jpg")
                    }
                    alt={title}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                    loading="lazy"
                    width={1200}
                    height={800}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {pickLocalized(card.description, locale)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
