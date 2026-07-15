"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pickLocalized } from "@/lib/utils";
import type { BusinessDiversificationSection } from "@/lib/types/sanity";

interface BusinessDiversificationProps {
  diversification?: BusinessDiversificationSection;
  locale: string;
}

export function BusinessDiversification({ diversification, locale }: BusinessDiversificationProps) {
  const eyebrow = pickLocalized(diversification?.sectionHeader?.eyebrow, locale);
  const heading = pickLocalized(diversification?.sectionHeader?.heading, locale);
  const description = pickLocalized(diversification?.sectionHeader?.description, locale);
  const paragraph = pickLocalized(diversification?.paragraph, locale);
  const ctaLabel = pickLocalized(diversification?.ctaLabel, locale);
  const ctaHref = diversification?.ctaHref || `/${locale}/about`;

  return (
    <section className="py-16 md:py-24 bg-primary-deep text-primary-foreground">
      <div className="container-page">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-accent-gold font-semibold mb-4">
            {eyebrow}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            {heading}
          </h2>
          <p className="text-lg md:text-xl opacity-85 leading-relaxed mb-8">
            {description}
          </p>
          <p className="text-base opacity-75 leading-relaxed mb-10">
            {paragraph}
          </p>
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-accent-gold text-primary-deep font-semibold hover:bg-accent-gold/90 transition-colors duration-200 shadow-soft"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
