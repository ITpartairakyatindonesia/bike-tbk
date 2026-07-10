"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { useLocale } from 'next-intl';
import type { CTASection as CTASectionType } from "@/lib/types/sanity";

interface CTASectionProps {
  cta: CTASectionType;
}

export function CTASection({ cta }: CTASectionProps) {
  const locale = useLocale() as "en" | "id";

  const title = cta?.title?.[locale];
  const description = cta?.description?.[locale];
  const primaryButton = cta?.primaryButton?.label?.[locale] && cta?.primaryButton?.href ? cta.primaryButton : null;
  const secondaryButton = cta?.secondaryButton?.label?.[locale] && cta?.secondaryButton?.href ? cta.secondaryButton : null;

  if (!title && !description && !primaryButton && !secondaryButton) return null;

  return (
    <section id="cta" className="py-24">
      <div className="container-page">
        <div className="relative mx-4 sm:mx-0 rounded-3xl gradient-hero p-10 md:p-16 text-primary-foreground overflow-hidden shadow-elegant">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent-gold/20 blur-3xl" />
          <div className="relative grid md:grid-cols-[1.5fr_auto] items-center gap-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
                {title}
              </h2>
              <p className="mt-4 text-lg opacity-85 max-w-xl">
                {description}
              </p>
            </div>
            <div className="flex flex-col md:flex-col lg:flex-row flex-wrap gap-3">
              {primaryButton && (
                <>
                  {primaryButton.external ? (
                    <a
                      href={primaryButton.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-primary-foreground text-primary-deep font-semibold hover:bg-accent-gold transition"
                    >
                      {primaryButton.label[locale]} <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link
                      href={primaryButton.href}
                      className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-primary-foreground text-primary-deep font-semibold hover:bg-accent-gold transition"
                    >
                      {primaryButton.label[locale]} <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </>
              )}
              {secondaryButton && (
                <>
                  {secondaryButton.external ? (
                    <a
                      href={secondaryButton.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition"
                    >
                      <MapPin className="h-4 w-4" /> {secondaryButton.label[locale]}
                    </a>
                  ) : (
                    <Link
                      href={secondaryButton.href}
                      className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition"
                    >
                      <MapPin className="h-4 w-4" /> {secondaryButton.label[locale]}
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
