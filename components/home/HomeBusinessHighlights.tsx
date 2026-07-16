import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { urlFor } from "@/lib/cms/image";
import { pickLocalized } from "@/lib/utils";
import type { BusinessHighlightsSection } from "@/lib/types/sanity";

const FALLBACK_IMAGES = [
  "/business-energy.jpg",
  "/business-logistics.jpg",
  "/business-finance.jpg",
  "/project-1.jpg",
];

interface HomeBusinessHighlightsProps {
  businessHighlights?: BusinessHighlightsSection;
  locale: string;
}

export function HomeBusinessHighlights({ businessHighlights, locale }: HomeBusinessHighlightsProps) {
  const validCards =
    businessHighlights?.cards?.filter((card) => pickLocalized(card.title, locale)) ?? [];

  if (validCards.length === 0) return null;

  return (
    <section id="business" className="py-24 gradient-subtle">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            {pickLocalized(businessHighlights?.sectionHeader?.eyebrow, locale)}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {pickLocalized(businessHighlights?.sectionHeader?.heading, locale)}
          </h2>
          {businessHighlights?.sectionHeader?.description && (
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {pickLocalized(businessHighlights.sectionHeader.description, locale)}
            </p>
          )}
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {validCards.map((card, index) => {
            const title = pickLocalized(card.title, locale);
            if (!title) return null;
            return (
              <article
                key={card._key ?? `card-${index}`}
                className="group bg-card rounded-3xl overflow-hidden shadow-card border border-border hover:shadow-elegant transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
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
                <div className="p-7">
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {pickLocalized(card.description, locale)}
                  </p>
                  {(() => {
                    const button = card.button;
                    if (!button || !pickLocalized(button.label, locale) || !button.href) return null;
                    return (
                      <>
                        {button.external ? (
                          <a
                            href={button.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline"
                          >
                            {pickLocalized(button.label, locale)}
                          </a>
                        ) : (
                          <Link
                            href={button.href}
                            className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline"
                          >
                            {pickLocalized(button.label, locale)}
                          </Link>
                        )}
                      </>
                    );
                  })()}
                </div>
              </article>
            );
          })}
        </div>
        {(() => {
          const button = businessHighlights?.viewAllButton;
          if (!button || !pickLocalized(button.label, locale) || !button.href) return null;
          return (
            <div className="mt-10 flex justify-center">
              <Link
                href={`/${locale}${button.href}`}
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-deep transition shadow-soft"
              >
                {pickLocalized(button.label, locale)} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
