"use client";

import { pickLocalized } from "@/lib/utils";
import type { SubHoldingStructureSection, SubHoldingCard } from "@/lib/types/sanity";
import { Cpu, Zap, Leaf, ShieldCheck, type LucideIcon } from "lucide-react";

export type { SubHoldingStructureSection, SubHoldingCard };

interface SubHoldingStructureProps {
  data?: SubHoldingStructureSection;
  locale: string;
}

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Zap,
  Leaf,
  ShieldCheck,
};

const ORG_CHART = {
  parent: "PT Penajam Makmur Jaya",
  parentRole: { en: "Parent Company", id: "Induk", zh: "母公司" },
  holding: "PT Sepeda Bersama Indonesia Tbk / BIKE",
  holdingRole: { en: "Super Holding", id: "Super Holding", zh: "超级控股" },
  subsidiaries: [
    "PT Ratu Karya",
    "PT Pertama Energi Global",
    "PT Fahreza Duta Perkasa",
    "PT Sentra Multi Karya Infrastruktur",
    "PT Laxo Global Akses",
    "PT Menn Teknologi Indonesia",
    "PT Karya Bersinar Indonesia",
  ],
};

export function SubHoldingStructure({ data, locale }: SubHoldingStructureProps) {
  const eyebrow = pickLocalized(data?.sectionHeader?.eyebrow, locale);
  const heading = pickLocalized(data?.sectionHeader?.heading, locale);
  const description = pickLocalized(data?.sectionHeader?.description, locale);
  const tagline = pickLocalized(data?.tagline, locale);
  const cards = data?.cards || [];

  if (!heading) return null;

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

        {/* Org Chart Tree */}
        <div className="mb-16 rounded-2xl border border-border bg-card p-6 md:p-10 overflow-x-auto">
          <div className="min-w-[700px]">
            {/* Parent */}
            <div className="flex flex-col items-center">
              <div className="rounded-xl bg-primary-deep px-6 py-4 text-center">
                <p className="text-sm md:text-base font-bold text-white">{ORG_CHART.parent}</p>
                <p className="text-xs text-accent-gold mt-1">{pickLocalized(ORG_CHART.parentRole, locale)}</p>
              </div>
              {/* Connector */}
              <div className="w-px h-8 bg-border" />
              {/* Super Holding */}
              <div className="rounded-xl bg-primary px-6 py-4 text-center">
                <p className="text-sm md:text-base font-bold text-white">{ORG_CHART.holding}</p>
                <p className="text-xs text-accent-gold mt-1">{pickLocalized(ORG_CHART.holdingRole, locale)}</p>
              </div>
              {/* Connector to subsidiaries */}
              <div className="w-px h-8 bg-border" />
            </div>

            {/* Subsidiaries with proper tree connectors */}
            <div className="relative pt-8">
              {/* Horizontal connector */}
              <div className="absolute top-0 left-[calc(100%/14)] right-[calc(100%/14)] h-px bg-border" />
              <div className="grid grid-cols-7 gap-3">
                {ORG_CHART.subsidiaries.map((sub, index) => (
                  <div key={index} className="relative">
                    {/* Vertical connector */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-border" />
                    <div className="rounded-lg border border-border bg-background p-4 text-center h-full flex items-center justify-center">
                      <p className="text-xs md:text-sm font-semibold leading-snug">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => {
            const Icon = iconMap[card.icon || ""] || Cpu;
            return (
              <div
                key={card._key ?? `subholding-${index}`}
                className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-primary-soft text-primary mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {pickLocalized(card.title, locale)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pickLocalized(card.description, locale)}
                </p>
              </div>
            );
          })}
        </div>
        {tagline && (
          <div className="text-center mt-12">
            <p className="text-xl md:text-2xl font-display font-bold text-primary">
              {tagline}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
