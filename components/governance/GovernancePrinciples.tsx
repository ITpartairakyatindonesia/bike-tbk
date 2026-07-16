"use client";

import { pickLocalized } from "@/lib/utils";
import type { GovernancePrinciplesSection, GovernancePrinciple } from "@/lib/types/sanity";
import {
  Eye,
  Scale,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Eye,
  Scale,
  ShieldCheck,
  Users,
};

interface GovernancePrinciplesProps {
  principles?: GovernancePrinciplesSection;
  locale: string;
}

export function GovernancePrinciples({ principles, locale }: GovernancePrinciplesProps) {
  const eyebrow = pickLocalized(principles?.sectionHeader?.eyebrow, locale);
  const heading = pickLocalized(principles?.sectionHeader?.heading, locale);
  const description = pickLocalized(principles?.sectionHeader?.description, locale);
  const items = principles?.principles || [];

  return (
    <section className="py-16 md:py-24 bg-background">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((principle: GovernancePrinciple, index) => {
            const Icon = iconMap[principle.icon || ""] || Eye;
            return (
              <div
                key={principle._key ?? `principle-${index}`}
                className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-primary-soft text-primary mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{pickLocalized(principle.title, locale)}</h3>
                <p className="text-muted-foreground leading-relaxed">{pickLocalized(principle.description, locale)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
