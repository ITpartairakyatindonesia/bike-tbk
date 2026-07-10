import type { ProductFeaturedSection } from "@/lib/types/sanity";
import { pickLocalized } from "@/lib/utils";
import { urlFor } from "@/lib/cms/image";

interface ProductsFeaturedProps {
  featured?: ProductFeaturedSection;
  locale: string;
}

export function ProductsFeatured({ featured, locale }: ProductsFeaturedProps) {
  const heading = pickLocalized(featured?.sectionHeader?.heading, locale) || "Featured Products";
  const description = pickLocalized(featured?.sectionHeader?.description, locale) || "Explore our latest innovations across all brands, designed for performance, comfort, and style.";
  const products = featured?.products || [];

  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="aspect-square bg-muted/30 flex items-center justify-center group-hover:bg-muted/50 transition-colors duration-200">
                  {product.image?.asset ? (
                    <img
                      src={urlFor(product.image).url()}
                      alt={pickLocalized(product.name, locale)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-4xl font-bold text-muted-foreground/30">Product</div>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-4">{pickLocalized(product.name, locale)}</h3>
                  <button className="text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group">
                <div className="aspect-square bg-muted/30 flex items-center justify-center group-hover:bg-muted/50 transition-colors duration-200">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-muted-foreground/30">Product</div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full">United</span>
                    <span className="text-xs font-medium text-muted-foreground">Performance</span>
                  </div>
                  <h3 className="font-semibold mb-4">UNITED STYGMA LITE</h3>
                  <button className="text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-200">View Details</button>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group">
                <div className="aspect-square bg-muted/30 flex items-center justify-center group-hover:bg-muted/50 transition-colors duration-200">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-muted-foreground/30">Product</div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full">Genio</span>
                    <span className="text-xs font-medium text-muted-foreground">Family</span>
                  </div>
                  <h3 className="font-semibold mb-4">GENIO VANGARD</h3>
                  <button className="text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-200">View Details</button>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group">
                <div className="aspect-square bg-muted/30 flex items-center justify-center group-hover:bg-muted/50 transition-colors duration-200">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-muted-foreground/30">Product</div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full">United</span>
                    <span className="text-xs font-medium text-muted-foreground">Sports</span>
                  </div>
                  <h3 className="font-semibold mb-4">UNITED EPSILON</h3>
                  <button className="text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-200">View Details</button>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group">
                <div className="aspect-square bg-muted/30 flex items-center justify-center group-hover:bg-muted/50 transition-colors duration-200">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-muted-foreground/30">Product</div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full">United</span>
                    <span className="text-xs font-medium text-muted-foreground">Electric</span>
                  </div>
                  <h3 className="font-semibold mb-4">UNITED E-CLOVIS</h3>
                  <button className="text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-200">View Details</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
