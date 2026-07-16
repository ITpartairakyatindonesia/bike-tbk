"use client";

import { pickLocalized } from "@/lib/utils";
import type { InvestorCorporateActionSection, InvestorCorporateActionItem } from "@/lib/types/sanity";

interface InvestorCorporateActionProps {
  section?: InvestorCorporateActionSection;
  locale: string;
  bgClass?: string;
}

function formatDate(dateString: string | undefined, locale: string) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString(
    locale === "id" ? "id-ID" : locale === "zh" ? "zh-CN" : "en-US",
    { year: "numeric", month: "short", day: "numeric" }
  );
}

export function InvestorCorporateAction({ section, locale, bgClass = "bg-muted/30" }: InvestorCorporateActionProps) {
  const eyebrow = pickLocalized(section?.sectionHeader?.eyebrow, locale);
  const heading = pickLocalized(section?.sectionHeader?.heading, locale);
  const description = pickLocalized(section?.sectionHeader?.description, locale);
  const actions = section?.actions || [];

  if (!heading && actions.length === 0) return null;

  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            {heading}
          </h2>
          {description && (
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="relative max-w-3xl">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-8">
            {actions.map((action: InvestorCorporateActionItem, index) => {
              const title = pickLocalized(action.title, locale);
              if (!title) return null;
              const actionType = pickLocalized(action.type, locale);
              const actionDescription = pickLocalized(action.description, locale);
              const formattedDate = formatDate(action.date, locale);

              return (
                <div
                  key={action._key ?? `ca-${index}`}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-1.5 h-8 w-8 rounded-full bg-primary-soft border-4 border-background grid place-items-center">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      {formattedDate && (
                        <time className="text-sm text-muted-foreground font-medium">
                          {formattedDate}
                        </time>
                      )}
                      {actionType && (
                        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {actionType}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{title}</h3>
                    {actionDescription && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {actionDescription}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
