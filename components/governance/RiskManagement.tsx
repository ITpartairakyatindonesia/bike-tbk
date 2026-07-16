"use client";

import { pickLocalized } from "@/lib/utils";
import type { RiskManagementSection, GovernancePrinciple } from "@/lib/types/sanity";
import {
  Users,
  TrendingUp,
  ClipboardCheck,
  Leaf,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Users,
  TrendingUp,
  ClipboardCheck,
  Leaf,
};

interface RiskManagementProps {
  riskManagement?: RiskManagementSection;
  locale: string;
}

export function RiskManagement({ riskManagement, locale }: RiskManagementProps) {
  const eyebrow = pickLocalized(riskManagement?.sectionHeader?.eyebrow, locale);
  const heading = pickLocalized(riskManagement?.sectionHeader?.heading, locale);
  const description = pickLocalized(riskManagement?.sectionHeader?.description, locale);
  const subtitle = pickLocalized(riskManagement?.subtitle, locale);
  const cards = riskManagement?.cards || [];

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
          {subtitle && (
            <p className="text-xl font-semibold text-primary mb-4">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card: GovernancePrinciple, index) => {
            const Icon = iconMap[card.icon || ""] || Users;
            return (
              <div
                key={card._key ?? `risk-${index}`}
                className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-primary-soft text-primary mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{pickLocalized(card.title, locale)}</h3>
                <p className="text-muted-foreground leading-relaxed">{pickLocalized(card.description, locale)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
