import { ArrowRight } from "lucide-react";
import { BRANDS } from "@/lib/data/brands";

export function BrandsSection() {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Our Brands
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Trusted Bicycle Brands for Every Lifestyle.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="group flex items-center gap-5 p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-card transition"
            >
              <div className="h-16 w-16 shrink-0 grid place-items-center rounded-xl gradient-hero text-primary-foreground font-display font-bold text-lg shadow-soft">
                {brand.initials}
              </div>
              <div className="min-w-0">
                <div className="font-bold text-foreground truncate">
                  {brand.name}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  {brand.category}
                </div>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
