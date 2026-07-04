import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS_SECTORS } from "@/lib/data/products";

export function BusinessSection() {
  return (
    <section className="py-24 gradient-subtle">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              Our Business
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Portfolio anchored in essential industries.
            </h2>
          </div>
          <Link
            href="/business"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Explore all sectors <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTS_SECTORS.map((sector) => (
            <article
              key={sector.name}
              className="group bg-card rounded-3xl overflow-hidden shadow-card border border-border hover:shadow-elegant transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={sector.img}
                  alt={sector.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                  loading="lazy"
                  width={1200}
                  height={800}
                />
              </div>
              <div className="p-7">
                <div className="h-10 w-10 grid place-items-center rounded-xl bg-primary-soft text-primary mb-4">
                  <sector.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">{sector.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {sector.desc}
                </p>
                <Link
                  href="/business"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
