import Link from "next/link";
import { useTranslations } from 'next-intl';
import type { ProductBrandsSection } from "@/lib/types/sanity";
import { pickLocalized } from "@/lib/utils";

interface ProductsBrandsProps {
  brands?: ProductBrandsSection;
  locale: string;
}

export function ProductsBrands({ brands, locale }: ProductsBrandsProps) {
  const t = useTranslations('products.brands');
  const heading = pickLocalized(brands?.sectionHeader?.heading, locale) || "Our Brands";
  const description = pickLocalized(brands?.sectionHeader?.description, locale) || "Three distinctive brands serving different market segments with shared commitment to quality and innovation.";
  const brandCards = brands?.brandCards || [];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {brandCards.length > 0 ? (
            brandCards.map((brand, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
              >
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary">{brand.name?.charAt(0) || 'B'}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{brand.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {pickLocalized(brand.description, locale)}
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {(brand.highlights || []).map((highlight, idx) => (
                      <li key={idx} className="text-sm text-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {pickLocalized(highlight, locale)}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={brand.button?.href || '#'}
                  target={brand.button?.external ? '_blank' : '_self'}
                  rel={brand.button?.external ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-deep transition-colors duration-200 shadow-soft"
                >
                  {pickLocalized(brand.button?.label, locale) || t('visit')} {brand.name}
                </Link>
              </div>
            ))
          ) : (
            <>
              <div className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary">U</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">United Bike</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  Indonesia's leading bicycle brand recognized for quality, innovation, and performance.
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-foreground flex items-start"><span className="text-primary mr-2">•</span>Premium quality</li>
                    <li className="text-sm text-foreground flex items-start"><span className="text-primary mr-2">•</span>Professional & enthusiast market</li>
                    <li className="text-sm text-foreground flex items-start"><span className="text-primary mr-2">•</span>Sports & mobility</li>
                    <li className="text-sm text-foreground flex items-start"><span className="text-primary mr-2">•</span>Supports Indonesian athletes</li>
                    <li className="text-sm text-foreground flex items-start"><span className="text-primary mr-2">•</span>International competition achievements</li>
                  </ul>
                </div>
                <Link
                  href="https://unitedbike.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-deep transition-colors duration-200 shadow-soft"
                >
                  {t('visit')} United Bike
                </Link>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary">G</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Genio Bike</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  Excellent value-for-money products with reliable quality for every family member.
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-foreground flex items-start"><span className="text-primary mr-2">•</span>Family-oriented</li>
                    <li className="text-sm text-foreground flex items-start"><span className="text-primary mr-2">•</span>Baby stroller</li>
                    <li className="text-sm text-foreground flex items-start"><span className="text-primary mr-2">•</span>Kids bike</li>
                    <li className="text-sm text-foreground flex items-start"><span className="text-primary mr-2">•</span>Adult bicycles</li>
                    <li className="text-sm text-foreground flex items-start"><span className="text-primary mr-2">•</span>Daily transportation</li>
                    <li className="text-sm text-foreground flex items-start"><span className="text-primary mr-2">•</span>Fitness</li>
                  </ul>
                </div>
                <Link
                  href="https://genio.bike"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-deep transition-colors duration-200 shadow-soft"
                >
                  {t('visit')} Genio Bike
                </Link>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary">A</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Avand Bike</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  Designed for younger riders who value style, trends, and individuality.
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-foreground flex items-start"><span className="text-primary mr-2">•</span>Youth market</li>
                    <li className="text-sm text-foreground flex items-start"><span className="text-primary mr-2">•</span>Fashion-oriented</li>
                    <li className="text-sm text-foreground flex items-start"><span className="text-primary mr-2">•</span>Trendy design</li>
                    <li className="text-sm text-foreground flex items-start"><span className="text-primary mr-2">•</span>Competitive pricing</li>
                    <li className="text-sm text-foreground flex items-start"><span className="text-primary mr-2">•</span>Positive lifestyle</li>
                    <li className="text-sm text-foreground flex items-start"><span className="text-primary mr-2">•</span>Environmental awareness</li>
                  </ul>
                </div>
                <Link
                  href="https://avandbike.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-deep transition-colors duration-200 shadow-soft"
                >
                  {t('visit')} Avand Bike
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
