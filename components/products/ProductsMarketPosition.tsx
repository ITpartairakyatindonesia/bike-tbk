export function ProductsMarketPosition() {
  const stages = [
    { title: "Children", description: "First bikes and strollers for young riders" },
    { title: "Family", description: "Bicycles for everyday family activities" },
    { title: "Daily Mobility", description: "Transportation for work and school" },
    { title: "Sports", description: "Performance bikes for athletes" },
    { title: "Professional", description: "Competition-grade equipment" },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Market Position</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            PT Sepeda Bersama Indonesia Tbk provides products covering every customer lifecycle, from first rides to professional competition.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-4">
            {stages.map((stage, index) => (
              <div key={index} className="relative">
                <div className="rounded-2xl border border-border bg-card p-6 text-center hover:shadow-lg transition-shadow duration-200">
                  <div className="text-2xl font-bold text-primary mb-2">{stage.title}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{stage.description}</p>
                </div>
                {index < stages.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-primary text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
