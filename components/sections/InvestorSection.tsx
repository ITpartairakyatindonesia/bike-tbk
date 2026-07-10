import { Download, FileText, BarChart3, ShieldCheck, Presentation } from "lucide-react";
import { pickLocalized } from '@/lib/utils';
import type { InvestorHeroSection, InvestorCard } from '@/lib/types/sanity';

interface InvestorSectionProps {
  hero?: InvestorHeroSection;
  cards?: InvestorCard[];
  locale: string;
}

const iconMap: Record<string, any> = {
  FileText,
  BarChart3,
  ShieldCheck,
  Presentation,
};

export function InvestorSection({ hero, cards, locale }: InvestorSectionProps) {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            {pickLocalized(hero?.label, locale)}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {pickLocalized(hero?.title, locale)}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {pickLocalized(hero?.description, locale)}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards?.map((card, index) => {
            const Icon = iconMap[card.iconKey || 'FileText'] || FileText;
            return (
              <div
                key={index}
                className="bg-card rounded-3xl p-7 border border-border shadow-card hover:shadow-elegant transition"
              >
                <div className="h-12 w-12 grid place-items-center rounded-2xl bg-primary-soft text-primary mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold mb-2">{pickLocalized(card.title, locale)}</h2>
                <p className="text-sm text-muted-foreground mb-5">
                  {pickLocalized(card.description, locale)}
                </p>
                <ul className="space-y-2">
                  {card.documents?.map((doc) => (
                    <li key={doc.title}>
                      <a
                        href={doc.file?.asset?.url || "#"}
                        download
                        className="group flex items-center justify-between gap-3 p-3 rounded-xl bg-secondary hover:bg-primary/10 transition"
                      >
                        <span className="text-sm font-medium line-clamp-1">
                          {doc.title}
                        </span>
                        <Download className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
