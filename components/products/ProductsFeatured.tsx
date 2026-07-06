export function ProductsFeatured() {
  const products = [
    { name: "UNITED STYGMA LITE", brand: "United", category: "Performance" },
    { name: "GENIO VANGARD", brand: "Genio", category: "Family" },
    { name: "UNITED EPSILON", brand: "United", category: "Sports" },
    { name: "UNITED E-CLOVIS", brand: "United", category: "Electric" },
    { name: "UNITED IO", brand: "United", category: "Urban" },
    { name: "UNITED E-TRIFOLD", brand: "United", category: "Electric" },
    { name: "GENIO RUNES", brand: "Genio", category: "Kids" },
    { name: "GENIO ZIPPY", brand: "Genio", category: "Kids" },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our latest innovations across all brands, designed for performance, comfort, and style.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="aspect-square bg-muted/30 flex items-center justify-center group-hover:bg-muted/50 transition-colors duration-200">
                <div className="text-center">
                  <div className="text-4xl font-bold text-muted-foreground/30">Product</div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {product.brand}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {product.category}
                  </span>
                </div>
                <h3 className="font-semibold mb-4">{product.name}</h3>
                <button className="text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
