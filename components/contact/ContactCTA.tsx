"use client";

import Link from 'next/link';
import { pickLocalized } from '@/lib/utils';
import type { ContactCTASection } from '@/lib/types/sanity';

interface ContactCTAProps {
  cta?: ContactCTASection;
  locale: string;
}

export function ContactCTA({ cta, locale }: ContactCTAProps) {
  if (!cta) return null;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-page text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {pickLocalized(cta.title, locale)}
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          {pickLocalized(cta.description, locale)}
        </p>
        {cta.button && (
          <Link
            href={cta.button.href || '#'}
            target={cta.button.external ? '_blank' : '_self'}
            rel={cta.button.external ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-deep hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 shadow-elegant"
          >
            {pickLocalized(cta.button.label, locale)}
          </Link>
        )}
      </div>
    </section>
  );
}
