import { ABOUT_CULTURE } from "@/lib/data/about-page";

export function AboutCulture() {
  return (
    <section className="py-24 md:py-32 bg-primary-soft/30">
      <div className="container-page">
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            {ABOUT_CULTURE.title}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            {ABOUT_CULTURE.subtitle}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {ABOUT_CULTURE.introduction}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_CULTURE.cards.map((card, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-card transition"
            >
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-primary-soft text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
