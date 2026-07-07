"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import type { CTASection as CTASectionType } from "@/lib/types/sanity";

interface CTASectionProps {
  cta: CTASectionType;
}

export function CTASection({ cta }: CTASectionProps) {
  const { language } = useLanguage();

  return (
    <section className="py-24">
      <div className="container-page">
        <div className="relative mx-4 sm:mx-0 rounded-3xl gradient-hero p-10 md:p-16 text-primary-foreground overflow-hidden shadow-elegant">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent-gold/20 blur-3xl" />
          <div className="relative grid md:grid-cols-[1.5fr_auto] items-center gap-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
                {cta?.title?.[language]}
              </h2>
              <p className="mt-4 text-lg opacity-85 max-w-xl">
                {cta?.description?.[language]}
              </p>
            </div>
            <div className="flex flex-col md:flex-col lg:flex-row flex-wrap gap-3">
              {cta?.primaryButton && (
                <>
                  {cta.primaryButton.external ? (
                    <a
                      href={cta.primaryButton.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-primary-foreground text-primary-deep font-semibold hover:bg-accent-gold transition"
                    >
                      {cta.primaryButton.label} <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link
                      href={cta.primaryButton.href}
                      className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-primary-foreground text-primary-deep font-semibold hover:bg-accent-gold transition"
                    >
                      {cta.primaryButton.label} <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </>
              )}
              {cta?.secondaryButton && (
                <>
                  {cta.secondaryButton.external ? (
                    <a
                      href={cta.secondaryButton.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition"
                    >
                      <MapPin className="h-4 w-4" /> {cta.secondaryButton.label}
                    </a>
                  ) : (
                    <Link
                      href={cta.secondaryButton.href}
                      className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition"
                    >
                      <MapPin className="h-4 w-4" /> {cta.secondaryButton.label}
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
