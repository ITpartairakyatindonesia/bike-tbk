import Link from "next/link";

export function ProductsCTA() {
  const brands = [
    { name: "United Bike", website: "https://unitedbike.com" },
    { name: "Genio Bike", website: "https://genio.bike" },
    { name: "Avand Bike", website: "https://avandbike.com" },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-primary/10 p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our Complete Product Portfolio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Visit each brand website to discover the latest collections, specifications, and dealer information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {brands.map((brand, index) => (
              <Link
                key={index}
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-deep transition-colors duration-200 shadow-soft"
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
