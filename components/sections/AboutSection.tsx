import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOME_ABOUT } from "@/lib/data/home-about";

export function AboutSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            {HOME_ABOUT.eyebrow}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {HOME_ABOUT.heading}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {HOME_ABOUT.description}
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {HOME_ABOUT.secondaryDescription}
          </p>
          <Link
            href={HOME_ABOUT.buttonLink}
            className="mt-10 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            {HOME_ABOUT.buttonLabel} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
            <img
              src="/about-team.jpg"
              alt="SBI leadership team"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1600}
              height={1024}
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-background rounded-2xl shadow-elegant p-6 max-w-xs border border-border">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
              {HOME_ABOUT.visionCard.label}
            </div>
            <p className="font-display font-semibold text-lg leading-snug text-foreground">
              {HOME_ABOUT.visionCard.statement}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
