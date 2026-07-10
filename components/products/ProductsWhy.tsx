import type { ProductWhySection } from "@/lib/types/sanity";
import { pickLocalized } from "@/lib/utils";

interface ProductsWhyProps {
  why?: ProductWhySection;
  locale: string;
}

export function ProductsWhy({ why, locale }: ProductsWhyProps) {
  const heading = pickLocalized(why?.sectionHeader?.heading, locale) || "Why Our Products";
  const description = pickLocalized(why?.sectionHeader?.description, locale) || "Our brands are strategically positioned to serve diverse market segments with quality and innovation.";
  const features = why?.features || [];

  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.length > 0 ? (
            features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <h3 className="text-xl font-bold mb-3">{pickLocalized(feature.title, locale)}</h3>
                <p className="text-muted-foreground leading-relaxed">{pickLocalized(feature.description, locale)}</p>
              </div>
            ))
          ) : (
            <>
              <div className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-xl font-bold mb-3">Wide Product Portfolio</h3>
                <p className="text-muted-foreground leading-relaxed">Serving customers from children to adults across multiple bicycle categories.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-xl font-bold mb-3">Strong Brand Positioning</h3>
                <p className="text-muted-foreground leading-relaxed">Each brand targets a unique market segment with a clear identity.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-xl font-bold mb-3">Growing Market Opportunity</h3>
                <p className="text-muted-foreground leading-relaxed">Increasing health awareness and environmentally friendly transportation continue driving demand.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
