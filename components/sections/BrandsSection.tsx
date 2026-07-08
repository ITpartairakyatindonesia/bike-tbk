"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { urlFor } from "@/lib/cms/image";
import type { BrandsSection as BrandsSectionType } from "@/lib/types/sanity";

interface BrandsSectionProps {
  brandsSection?: BrandsSectionType;
}

export function BrandsSection({ brandsSection = {} }: BrandsSectionProps) {
  const { language } = useLanguage();

  const eyebrow = brandsSection?.sectionHeader?.eyebrow?.[language];
  const heading = brandsSection?.sectionHeader?.heading?.[language];
  const description = brandsSection?.sectionHeader?.description?.[language];

  const validCards = brandsSection?.cards?.filter((card) => card.name?.[language]) || [];

  if (!eyebrow && !heading && !description && validCards.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              {eyebrow}
            </div>
          )}
          {heading && (
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {heading}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {validCards.map((card, index) => {
            const name = card.name?.[language];
            if (!name) return null;
            const description = card.description?.[language];
            const button = card.button;
            const logo = card.logo;

            return (
              <div
                key={card._key || index}
                className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
              >
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 overflow-hidden">
                  {logo ? (
                    <img
                      src={urlFor(logo).url()}
                      alt={name}
                      className="h-full w-full object-contain p-2"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-primary">
                      {name.charAt(0)}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-3">{name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {description}
                </p>
                {button && button.href && (
                  <Link
                    href={button.href}
                    target={button.external ? "_blank" : undefined}
                    rel={button.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-deep transition-colors duration-200 shadow-soft"
                  >
                    {button.label?.[language] || "Visit"}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
