"use client";

import { pickLocalized } from "@/lib/utils";
import type { InvestorStockInfoSection, InvestorStockInfoField } from "@/lib/types/sanity";

interface InvestorStockInfoProps {
  section?: InvestorStockInfoSection;
  locale: string;
  bgClass?: string;
}

function formatDate(dateString: string | undefined, locale: string) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString(
    locale === "id" ? "id-ID" : locale === "zh" ? "zh-CN" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );
}

export function InvestorStockInfo({ section, locale, bgClass = "bg-background" }: InvestorStockInfoProps) {
  const eyebrow = pickLocalized(section?.sectionHeader?.eyebrow, locale);
  const heading = pickLocalized(section?.sectionHeader?.heading, locale);
  const description = pickLocalized(section?.sectionHeader?.description, locale);
  const stockCode = section?.stockCode;
  const exchange = pickLocalized(section?.exchange, locale);
  const listingDate = formatDate(section?.listingDate, locale);
  const market = pickLocalized(section?.market, locale);
  const fields = section?.fields || [];

  if (!heading && !stockCode) return null;

  const primaryInfo = [
    { label: "Stock Code", value: stockCode },
    { label: "Exchange", value: exchange },
    { label: "Listing Date", value: listingDate },
    { label: "Market", value: market },
  ].filter((item) => item.value);

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

        {stockCode && (
          <div className="rounded-2xl bg-primary text-primary-foreground p-8 mb-8 flex items-center justify-between">
            <div>
              <div className="text-sm opacity-80 uppercase tracking-wider mb-1">
                {pickLocalized({ en: "Ticker Symbol", id: "Simbol Ticker", zh: "股票代码" }, locale)}
              </div>
              <div className="text-4xl font-bold">{stockCode}</div>
            </div>
            {exchange && (
              <div className="text-right">
                <div className="text-sm opacity-80 uppercase tracking-wider mb-1">
                  {pickLocalized({ en: "Exchange", id: "Bursa", zh: "交易所" }, locale)}
                </div>
                <div className="text-lg font-semibold">{exchange}</div>
              </div>
            )}
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {primaryInfo.map((item, index) => (
            <div
              key={`pi-${index}`}
              className="rounded-xl border border-border bg-card p-5"
            >
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                {item.label}
              </div>
              <div className="text-lg font-semibold">{item.value}</div>
            </div>
          ))}
          {fields.map((field: InvestorStockInfoField, index) => {
            const label = pickLocalized(field.label, locale);
            const value = pickLocalized(field.value, locale);
            if (!label && !value) return null;
            return (
              <div
                key={field._key ?? `sf-${index}`}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  {label}
                </div>
                <div className="text-lg font-semibold">{value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
