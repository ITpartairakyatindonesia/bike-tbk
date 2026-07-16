import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { urlFor } from "@/lib/cms/image";
import { pickLocalized } from "@/lib/utils";
import type { AboutPreviewSection } from "@/lib/types/sanity";

interface HomeAboutPreviewProps {
  aboutPreview?: AboutPreviewSection;
  locale: string;
}

export function HomeAboutPreview({ aboutPreview, locale }: HomeAboutPreviewProps) {
  const heading = pickLocalized(aboutPreview?.sectionHeader?.heading, locale);
  const description = pickLocalized(aboutPreview?.description, locale);
  const secondaryDescription = pickLocalized(aboutPreview?.secondaryDescription, locale);
  const image = aboutPreview?.image;

  if (!heading && !description && !secondaryDescription && !image) return null;

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-page grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            {pickLocalized(aboutPreview?.sectionHeader?.eyebrow, locale)}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {pickLocalized(aboutPreview?.sectionHeader?.heading, locale)}
          </h2>
          {aboutPreview?.sectionHeader?.description && (
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {pickLocalized(aboutPreview.sectionHeader.description, locale)}
            </p>
          )}
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {pickLocalized(aboutPreview?.description, locale)}
          </p>
          {pickLocalized(aboutPreview?.secondaryDescription, locale) && (
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {pickLocalized(aboutPreview?.secondaryDescription, locale)}
            </p>
          )}
          {(() => {
            const button = aboutPreview?.button;
            if (!button || !pickLocalized(button.label, locale) || !button.href) return null;
            return button.external ? (
              <a
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                {pickLocalized(button.label, locale)} <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <Link
                href={button.href}
                className="mt-10 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                {pickLocalized(button.label, locale)} <ArrowRight className="h-4 w-4" />
              </Link>
            );
          })()}
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
            <img
              src={aboutPreview?.image?.asset ? urlFor(aboutPreview.image).url() : "/about-team.jpg"}
              alt="SBI leadership team"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1600}
              height={1024}
            />
          </div>
          {(() => {
            const visionCard = aboutPreview?.visionCard;
            if (!visionCard || !pickLocalized(visionCard.label, locale) || !pickLocalized(visionCard.statement, locale)) return null;
            return (
              <div className="absolute -bottom-8 -left-8 bg-background rounded-2xl shadow-elegant p-6 max-w-xs border border-border">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  {pickLocalized(visionCard.label, locale)}
                </div>
                <p className="font-display font-semibold text-lg leading-snug text-foreground">
                  {pickLocalized(visionCard.statement, locale)}
                </p>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
