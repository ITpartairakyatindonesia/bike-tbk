"use client";

import { ArrowDown } from "lucide-react";
import { useTranslations } from 'next-intl';
import type { AboutHeroSection } from "@/lib/types/sanity";
import { urlFor } from "@/lib/cms/image";
import { pickLocalized } from "@/lib/utils";

interface AboutHeroProps {
  hero?: AboutHeroSection;
  locale: string;
}

export function AboutHero({ hero, locale }: AboutHeroProps) {
  const t = useTranslations('about.hero');

  const eyebrow = pickLocalized(hero?.eyebrow, locale) || t('eyebrow');
  const headline = pickLocalized(hero?.title, locale) || t('headline');
  const description = pickLocalized(hero?.subtitle, locale) || t('description');
  const backgroundImage = hero?.backgroundImage ? urlFor(hero.backgroundImage).url() : "/business-logistics.jpg";

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="SBI distribution and operations"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/90 via-primary-deep/80 to-primary-deep/60" />
      </div>

      <div className="container-page relative z-10 pt-32 pb-20 text-center text-primary-foreground">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 backdrop-blur px-4 py-1.5 text-xs font-medium tracking-wider uppercase mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
          {eyebrow}
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl mx-auto">
          {headline}
        </h1>
        <p className="mt-8 text-lg md:text-xl opacity-85 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-bounce">
        <ArrowDown className="h-5 w-5" />
      </div>
    </section>
  );
}
