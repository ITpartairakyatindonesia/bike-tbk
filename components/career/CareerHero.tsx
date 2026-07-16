import { pickLocalized } from "@/lib/utils";
import type { CareerHeroSection } from "@/lib/types/sanity";

interface CareerHeroProps {
  hero?: CareerHeroSection;
  locale: string;
}

export function CareerHero({ hero, locale }: CareerHeroProps) {
  const eyebrow = pickLocalized(hero?.eyebrow, locale);
  const title = pickLocalized(hero?.title, locale);
  const description = pickLocalized(hero?.description, locale);

  if (!title && !description) return null;

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container-page">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              {eyebrow}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
