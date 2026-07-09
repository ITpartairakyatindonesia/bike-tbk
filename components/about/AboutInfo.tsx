"use client";

import { useTranslations } from 'next-intl';
import { ABOUT_INFO } from "@/lib/data/about-page";

export function AboutInfo() {
  const t = useTranslations('about.info');

  const getLabelKey = (label: string): string => {
    const keyMap: Record<string, string> = {
      'Company Name': 'companyName',
      'Founded': 'founded',
      'Head Office': 'headOffice',
      'Core Business': 'coreBusiness',
      'Website': 'website',
      'Board of Commissioners': 'boardOfCommissioners',
      'Board of Directors': 'boardOfDirectors',
      'Dealer Network': 'dealerNetwork',
      'Employees': 'employees',
    };
    return keyMap[label] || label;
  };

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-page">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Corporate Information
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-12">
            Company Information
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {ABOUT_INFO.map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 md:p-8 hover:bg-primary-soft/30 transition"
              >
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  {t(getLabelKey(item.label))}
                </div>
                <div className="font-semibold text-foreground leading-snug">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
