"use client";

import { useLocale } from 'next-intl';

interface LocalizedHighlight {
  en: { value: string; label: string };
  id: { value: string; label: string };
  zh: { value: string; label: string };
}

const HIGHLIGHTS: LocalizedHighlight[] = [
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

export function CompanyHighlightsSection() {
  const locale = useLocale() as "en" | "id" | "zh";

  return (
    <section id="company-highlights" className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-primary-foreground/15 rounded-2xl overflow-hidden backdrop-blur border border-primary-foreground/15">
        {HIGHLIGHTS.map((highlight, index) => {
          const { value, label } = highlight[locale];

          return (
            <div
              key={index}
              className="bg-primary-deep/60 p-6 md:p-8"
            >
              <div className="text-xl font-display font-bold text-accent-gold md:whitespace-nowrap">
                {value}
              </div>
              <div className="mt-2 text-xs md:text-sm opacity-80 uppercase tracking-wider">
                {label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
