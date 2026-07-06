export function ProductsIntroduction() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Competitive Across Every Market Segment
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                PT Sepeda Bersama Indonesia Tbk offers one of Indonesia's most diverse bicycle portfolios, covering every age group from toddlers to adults.
              </p>
              <p>
                Our products support transportation, sports, recreation, health, fashion, and modern lifestyles, positioning the Company to serve diverse customer needs.
              </p>
              <p>
                Indonesia's demographic bonus creates long-term opportunities for sustainable mobility, while growing environmental awareness increases demand for bicycles as part of the New Economy.
              </p>
              <p>
                Each brand is strategically positioned to serve different market segments with strong competitiveness and clear market identity.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="text-3xl font-bold text-primary mb-2">Multiple</div>
              <div className="text-sm text-muted-foreground">Product Categories</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="text-3xl font-bold text-primary mb-2">All Ages</div>
              <div className="text-sm text-muted-foreground">Toddlers to Adults</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="text-3xl font-bold text-primary mb-2">Transport</div>
              <div className="text-sm text-muted-foreground">& Lifestyle</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="text-3xl font-bold text-primary mb-2">Sustainable</div>
              <div className="text-sm text-muted-foreground">Mobility</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
