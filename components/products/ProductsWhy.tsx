export function ProductsWhy() {
  const features = [
    {
      title: "Wide Product Portfolio",
      description: "Serving customers from children to adults across multiple bicycle categories.",
    },
    {
      title: "Strong Brand Positioning",
      description: "Each brand targets a unique market segment with a clear identity.",
    },
    {
      title: "Growing Market Opportunity",
      description: "Increasing health awareness and environmentally friendly transportation continue driving demand.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Our Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our brands are strategically positioned to serve diverse market segments with quality and innovation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
