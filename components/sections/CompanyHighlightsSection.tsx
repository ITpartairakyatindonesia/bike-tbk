"use client";

import { useLanguage } from "@/lib/contexts/LanguageContext";

interface LocalizedHighlight {
  en: { value: string; label: string };
  id: { value: string; label: string };
}

const HIGHLIGHTS: LocalizedHighlight[] = [
  {
    en: { value: "2017", label: "Established" },
    id: { value: "2017", label: "Didirikan" },
  },
  {
    en: { value: "Bicycle Distribution", label: "Core Business" },
    id: { value: "Distribusi Sepeda", label: "Bisnis Utama" },
  },
  {
    en: { value: "Listed on IDX", label: "Public Company" },
    id: { value: "Tercatat di BEI", label: "Perusahaan Publik" },
  },
  {
    en: { value: "Genio • United • Avand", label: "Brands" },
    id: { value: "Genio • United • Avand", label: "Merek" },
  },
];

export function CompanyHighlightsSection() {
  const { language } = useLanguage();

  return (
    <section id="company-highlights" className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-primary-foreground/15 rounded-2xl overflow-hidden backdrop-blur border border-primary-foreground/15">
        {HIGHLIGHTS.map((highlight, index) => {
          const { value, label } = highlight[language];

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
