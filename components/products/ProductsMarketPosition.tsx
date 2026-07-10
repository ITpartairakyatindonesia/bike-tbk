import type { ProductMarketPositionSection } from "@/lib/types/sanity";
import { pickLocalized } from "@/lib/utils";

interface ProductsMarketPositionProps {
  marketPosition?: ProductMarketPositionSection;
  locale: string;
}

export function ProductsMarketPosition({ marketPosition, locale }: ProductsMarketPositionProps) {
  const heading = pickLocalized(marketPosition?.sectionHeader?.heading, locale) || "Market Position";
  const description = pickLocalized(marketPosition?.sectionHeader?.description, locale) || "PT Bike Tbk provides products covering every customer lifecycle, from first rides to professional competition.";
  const stages = marketPosition?.stages || [];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-4">
            {stages.length > 0 ? (
              stages.map((stage, index) => (
                <div key={index} className="relative">
                  <div className="rounded-2xl border border-border bg-card p-6 text-center hover:shadow-lg transition-shadow duration-200">
                    <div className="text-2xl font-bold text-primary mb-2">{pickLocalized(stage.title, locale)}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{pickLocalized(stage.description, locale)}</p>
                  </div>
                  {index < stages.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-primary text-2xl">
                      →
                    </div>
                  )}
                </div>
              ))
            ) : (
              <>
                <div className="relative">
                  <div className="rounded-2xl border border-border bg-card p-6 text-center hover:shadow-lg transition-shadow duration-200">
                    <div className="text-2xl font-bold text-primary mb-2">Children</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">First bikes and strollers for young riders</p>
                  </div>
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-primary text-2xl">→</div>
                </div>
                <div className="relative">
                  <div className="rounded-2xl border border-border bg-card p-6 text-center hover:shadow-lg transition-shadow duration-200">
                    <div className="text-2xl font-bold text-primary mb-2">Family</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">Bicycles for everyday family activities</p>
                  </div>
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-primary text-2xl">→</div>
                </div>
                <div className="relative">
                  <div className="rounded-2xl border border-border bg-card p-6 text-center hover:shadow-lg transition-shadow duration-200">
                    <div className="text-2xl font-bold text-primary mb-2">Daily Mobility</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">Transportation for work and school</p>
                  </div>
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-primary text-2xl">→</div>
                </div>
                <div className="relative">
                  <div className="rounded-2xl border border-border bg-card p-6 text-center hover:shadow-lg transition-shadow duration-200">
                    <div className="text-2xl font-bold text-primary mb-2">Sports</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">Performance bikes for athletes</p>
                  </div>
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-primary text-2xl">→</div>
                </div>
                <div className="relative">
                  <div className="rounded-2xl border border-border bg-card p-6 text-center hover:shadow-lg transition-shadow duration-200">
                    <div className="text-2xl font-bold text-primary mb-2">Professional</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">Competition-grade equipment</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
