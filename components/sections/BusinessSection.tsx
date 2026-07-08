"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { urlFor } from "@/lib/cms/image";
import type { BusinessHighlightsSection } from "@/lib/types/sanity";

const FALLBACK_IMAGES = [
  "/business-energy.jpg",
  "/business-logistics.jpg",
  "/business-finance.jpg",
  "/project-1.jpg",
];

interface BusinessSectionProps {
  businessHighlights: BusinessHighlightsSection;
}

export function BusinessSection({ businessHighlights }: BusinessSectionProps) {
  const { language } = useLanguage();

  const validCards =
    businessHighlights?.cards?.filter((card) => card.title?.[language]) ?? [];

  if (validCards.length === 0) return null;

  return (
    <section id="business" className="py-24 gradient-subtle">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            {businessHighlights?.sectionHeader?.eyebrow?.[language]}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {businessHighlights?.sectionHeader?.heading?.[language]}
          </h2>
          {businessHighlights?.sectionHeader?.description && (
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {businessHighlights.sectionHeader.description[language]}
            </p>
          )}
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {validCards.map((card, index) => {
            const title = card.title?.[language];
            if (!title) return null;
            return (
              <article
                key={card._key ?? `card-${index}`}
                className="group bg-card rounded-3xl overflow-hidden shadow-card border border-border hover:shadow-elegant transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={
                      card.image
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
                <div className="p-7">
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {card.description?.[language]}
                  </p>
                  {card.button?.label?.[language] && card.button.href && (
                    <>
                      {card.button.external ? (
                        <a
                          href={card.button.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline"
                        >
                          {card.button.label[language]}
                        </a>
                      ) : (
                        <Link
                          href={card.button.href}
                          className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline"
                        >
                          {card.button.label[language]}
                        </Link>
                      )}
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
