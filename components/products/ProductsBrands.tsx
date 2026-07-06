import Link from "next/link";

export function ProductsBrands() {
  const brands = [
    {
      name: "United Bike",
      description: "Indonesia's leading bicycle brand recognized for quality, innovation, and performance.",
      highlights: [
        "Premium quality",
        "Professional & enthusiast market",
        "Sports & mobility",
        "Supports Indonesian athletes",
        "International competition achievements",
      ],
      website: "https://unitedbike.com",
    },
    {
      name: "Genio Bike",
      description: "Excellent value-for-money products with reliable quality for every family member.",
      highlights: [
        "Family-oriented",
        "Baby stroller",
        "Kids bike",
        "Adult bicycles",
        "Daily transportation",
        "Fitness",
      ],
      website: "https://genio.bike",
    },
    {
      name: "Avand Bike",
      description: "Designed for younger riders who value style, trends, and individuality.",
      highlights: [
        "Youth market",
        "Fashion-oriented",
        "Trendy design",
        "Competitive pricing",
        "Positive lifestyle",
        "Environmental awareness",
      ],
      website: "https://avandbike.com",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Brands</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three distinctive brands serving different market segments with shared commitment to quality and innovation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
            >
              <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary">{brand.name.charAt(0)}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{brand.name}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                {brand.description}
              </p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {brand.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-deep transition-colors duration-200 shadow-soft"
              >
                Visit {brand.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
