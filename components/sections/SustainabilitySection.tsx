"use client";

import { useLanguage } from "@/lib/contexts/LanguageContext";
import { ShieldCheck, Leaf, Users, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { SustainabilitySection as SustainabilitySectionType } from "@/lib/types/sanity";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Leaf,
  Users,
  TrendingUp,
};

interface SustainabilitySectionProps {
  sustainability: SustainabilitySectionType;
}

export function SustainabilitySection({ sustainability }: SustainabilitySectionProps) {
  const { language } = useLanguage();

  const heading = sustainability?.sectionHeader?.heading?.[language];
  const description = sustainability?.description?.[language];
  const validCards =
    sustainability?.cards?.filter((card) => card.title?.[language]) ?? [];

  if (!heading && !description && validCards.length === 0) return null;

  return (
    <section id="sustainability" className="py-24 md:py-32">
      <div className="container-page grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            {sustainability?.sectionHeader?.eyebrow?.[language]}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {sustainability?.sectionHeader?.heading?.[language]}
          </h2>
          {sustainability?.sectionHeader?.description && (
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {sustainability.sectionHeader.description[language]}
            </p>
          )}
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {sustainability?.description?.[language]}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {validCards.map((card, index) => {
            const title = card.title?.[language];
            if (!title) return null;
            const Icon = card.icon ? iconMap[card.icon] : ShieldCheck;
            if (!Icon) return null;
            return (
              <div
                key={card._key || index}
                className="flex items-center gap-4 p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-card transition"
              >
                <div className="h-11 w-11 shrink-0 grid place-items-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="font-semibold text-foreground">{title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
