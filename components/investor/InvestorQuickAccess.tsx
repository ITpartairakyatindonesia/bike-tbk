"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pickLocalized } from "@/lib/utils";
import type { InvestorQuickAccessSection, InvestorQuickAccessCard } from "@/lib/types/sanity";
import {
  FileText,
  BarChart3,
  Presentation,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  BarChart3,
  Presentation,
  ShieldCheck,
};

interface InvestorQuickAccessProps {
  section?: InvestorQuickAccessSection;
  locale: string;
}

export function InvestorQuickAccess({ section, locale }: InvestorQuickAccessProps) {
  const eyebrow = pickLocalized(section?.sectionHeader?.eyebrow, locale);
  const heading = pickLocalized(section?.sectionHeader?.heading, locale);
  const description = pickLocalized(section?.sectionHeader?.description, locale);
  const cards = section?.cards || [];

  if (!heading && cards.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-page">
        <div className="text-center mb-12">
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            {heading}
          </h2>
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card: InvestorQuickAccessCard, index) => {
            const Icon = iconMap[card.icon || ""] || FileText;
            const buttonLabel = pickLocalized(card.button?.label, locale);
            const buttonHref = card.button?.href || "#";
            return (
              <div
                key={card._key ?? `qa-${index}`}
                className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
              >
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-primary-soft text-primary mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{pickLocalized(card.title, locale)}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5 flex-1">
                  {pickLocalized(card.description, locale)}
                </p>
                {buttonLabel && (
                  buttonHref.startsWith("#") ? (
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      {buttonLabel} <ArrowRight className="h-4 w-4" />
                    </span>
                  ) : (
                    <Link
                      href={`/${locale}${buttonHref}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                    >
                      {buttonLabel} <ArrowRight className="h-4 w-4" />
                    </Link>
                  )
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
