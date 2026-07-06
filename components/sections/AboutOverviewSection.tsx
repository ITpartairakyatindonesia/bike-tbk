import { ABOUT_OVERVIEW } from "@/lib/data/about-page";

export function AboutOverviewSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-page">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Company Overview
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-10">
            {ABOUT_OVERVIEW.title}
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            {ABOUT_OVERVIEW.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
