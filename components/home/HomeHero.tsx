import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { urlFor } from "@/lib/cms/image";
import { pickLocalized } from "@/lib/utils";
import type { Button, HeroSection as HeroSectionType } from "@/lib/types/sanity";

interface HomeHeroProps {
  hero?: HeroSectionType;
  locale: string;
}

const HIGHLIGHTS = [
  {
    en: { value: "319", label: "Stores" },
    id: { value: "319", label: "Toko" },
    zh: { value: "319", label: "家门店" },
  },
  {
    en: { value: "9", label: "Business Sectors" },
    id: { value: "9", label: "Sektor Bisnis" },
    zh: { value: "9", label: "个业务领域" },
  },
  {
    en: { value: "Listed on IDX", label: "Public Company" },
    id: { value: "Tercatat di BEI", label: "Perusahaan Publik" },
    zh: { value: "在印尼证券交易所上市", label: "上市公司" },
  },
  {
    en: { value: "Super Holding", label: "Group Structure" },
    id: { value: "Holding Super", label: "Struktur Grup" },
    zh: { value: "超级控股", label: "集团架构" },
  },
];

function getValidButton(
  button: Button | undefined | null,
  locale: string
): Button | null {
  return button && pickLocalized(button.label, locale) && button.href ? button : null;
}

function primaryButtonClassName() {
  return "inline-flex items-center gap-2 h-12 px-7 rounded-full bg-primary-foreground text-primary-deep font-semibold hover:bg-accent-gold hover:text-primary-deep transition shadow-elegant";
}

function secondaryButtonClassName() {
  return "inline-flex items-center gap-2 h-12 px-7 rounded-full border border-primary-foreground/40 bg-transparent text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition";
}

function buttonContent(label: string, showIcon = true) {
  return (
    <>
      {label}
      {showIcon && <ArrowRight className="h-4 w-4" />}
    </>
  );
}

export function HomeHero({ hero, locale }: HomeHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        {hero?.backgroundImage?.asset ? (
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
            {pickLocalized(hero?.eyebrow, locale)}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight">
            {pickLocalized(hero?.title, locale)}
          </h1>
          <p className="mt-6 text-lg md:text-xl opacity-85 max-w-2xl leading-relaxed">
            {pickLocalized(hero?.subtitle, locale)}
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
                  className={primaryButtonClassName()}
                >
                  {buttonContent(pickLocalized(button.label, locale) || '')}
                </a>
              ) : (
                <Link href={button.href} className={primaryButtonClassName()}>
                  {buttonContent(pickLocalized(button.label, locale) || '')}
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
                  className={secondaryButtonClassName()}
                >
                  {buttonContent(pickLocalized(button.label, locale) || '', false)}
                </a>
              ) : (
                <Link href={button.href} className={secondaryButtonClassName()}>
                  {buttonContent(pickLocalized(button.label, locale) || '', false)}
                </Link>
              );
            })()}
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <section id="company-highlights" className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-primary-foreground/15 rounded-2xl overflow-hidden backdrop-blur border border-primary-foreground/15">
              {HIGHLIGHTS.map((highlight, index) => {
                const hl = highlight[locale as "en" | "id" | "zh"] || highlight.en;
                return (
                  <div
                    key={index}
                    className="bg-primary-deep/60 p-6 md:p-8"
                  >
                    <div className="text-xl font-display font-bold text-accent-gold md:whitespace-nowrap">
                      {hl.value}
                    </div>
                    <div className="mt-2 text-xs md:text-sm opacity-80 uppercase tracking-wider">
                      {hl.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
