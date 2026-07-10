"use client";

import Link from "next/link";
import { useTranslations } from 'next-intl';
import type { ProductCTASection } from "@/lib/types/sanity";
import { pickLocalized } from "@/lib/utils";

interface ProductsCTAProps {
  cta?: ProductCTASection;
  locale: string;
}

export function ProductsCTA({ cta, locale }: ProductsCTAProps) {
  const t = useTranslations('products.cta');

  const title = pickLocalized(cta?.title, locale) || t('title');
  const description = pickLocalized(cta?.description, locale) || t('description');
  const brandLinks = cta?.brandLinks || [];

  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-primary/10 p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {brandLinks.length > 0 ? (
              brandLinks.map((brand, index) => (
                <Link
                  key={index}
                  href={brand.website || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-deep transition-colors duration-200 shadow-soft"
                >
                  {brand.name}
                </Link>
              ))
            ) : (
              <>
                <Link
                  href="https://unitedbike.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-deep transition-colors duration-200 shadow-soft"
                >
                  United Bike
                </Link>
                <Link
                  href="https://genio.bike"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-deep transition-colors duration-200 shadow-soft"
                >
                  Genio Bike
                </Link>
                <Link
                  href="https://avandbike.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-deep transition-colors duration-200 shadow-soft"
                >
                  Avand Bike
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
