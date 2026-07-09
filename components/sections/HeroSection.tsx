"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLocale } from 'next-intl';
import { urlFor } from "@/lib/cms/image";
import { CompanyHighlightsSection } from "./CompanyHighlightsSection";
import type { Button, HeroSection as HeroSectionType } from "@/lib/types/sanity";

interface HeroSectionProps {
  hero: HeroSectionType;
}

function getValidButton(
  button: Button | undefined | null,
  locale: "en" | "id"
): Button | null {
  return button && button.label?.[locale] && button.href ? button : null;
}

function buttonClassName(variant?: Button["variant"]) {
  const base =
    "inline-flex items-center gap-2 h-12 px-7 rounded-full font-semibold transition";
  if (variant === "primary") {
    return `${base} bg-primary-foreground text-primary-deep hover:bg-accent-gold hover:text-primary-deep shadow-elegant`;
  }
  if (variant === "secondary") {
    return `${base} bg-primary text-primary-foreground hover:bg-primary-deep shadow-soft`;
  }
  return `${base} border border-primary-foreground/40 hover:bg-primary-foreground/10`;
}

function buttonContent(label: string, variant?: Button["variant"]) {
  return (
    <>
      {label}
      {variant === "primary" && <ArrowRight className="h-4 w-4" />}
    </>
  );
}

export function HeroSection({ hero }: HeroSectionProps) {
  const locale = useLocale() as "en" | "id";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        {hero?.backgroundImage ? (
          <img
            src={urlFor(hero.backgroundImage).url()}
            alt=""
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
        ) : (
          <img
            src="/hero-tower.jpg"
            alt=""
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 via-primary-deep/75 to-primary-deep/40" />
      </div>
      <div className="container-page relative pt-24 pb-16 text-primary-foreground">
        <div className="max-w-3xl reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 backdrop-blur px-4 py-1.5 text-xs font-medium tracking-wider uppercase mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
            {hero?.eyebrow?.[locale]}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight">
            {hero?.title?.[locale]}
          </h1>
          <p className="mt-6 text-lg md:text-xl opacity-85 max-w-2xl leading-relaxed">
            {hero?.subtitle?.[locale]}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {(() => {
              const button = getValidButton(hero?.primaryButton, locale);
              if (!button) return null;
              return button.external ? (
                <a
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClassName(button.variant)}
                >
                  {buttonContent(button.label?.[locale], button.variant)}
                </a>
              ) : (
                <Link href={button.href} className={buttonClassName(button.variant)}>
                  {buttonContent(button.label?.[locale], button.variant)}
                </Link>
              );
            })()}
            {(() => {
              const button = getValidButton(hero?.secondaryButton, locale);
              if (!button) return null;
              return button.external ? (
                <a
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClassName(button.variant)}
                >
                  {buttonContent(button.label?.[locale], button.variant)}
                </a>
              ) : (
                <Link href={button.href} className={buttonClassName(button.variant)}>
                  {buttonContent(button.label?.[locale], button.variant)}
                </Link>
              );
            })()}
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <CompanyHighlightsSection />
        </div>
      </div>
    </section>
  );
}
