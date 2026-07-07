import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getHomePage } from "@/lib/services/home-page";
import { urlFor } from "@/lib/cms/image";
import { HOME_ABOUT } from "@/lib/data/home-about";

export async function AboutSection() {
  const homePage = await getHomePage();
  const aboutPreview = homePage.aboutPreview;

  return (
    <section className="py-24 md:py-32">
      <div className="container-page grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            {aboutPreview?.sectionHeader?.eyebrow}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {aboutPreview?.sectionHeader?.heading}
          </h2>
          {aboutPreview?.sectionHeader?.description && (
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {aboutPreview.sectionHeader.description}
            </p>
          )}
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {aboutPreview?.description?.en}
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {HOME_ABOUT.secondaryDescription}
          </p>
          {aboutPreview?.button && (
            <>
              {aboutPreview.button.external ? (
                <a
                  href={aboutPreview.button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  {aboutPreview.button.label} <ArrowRight className="h-4 w-4" />
                </a>
              ) : (
                <Link
                  href={aboutPreview.button.href}
                  className="mt-10 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  {aboutPreview.button.label} <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </>
          )}
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
            <img
              src={aboutPreview?.image ? urlFor(aboutPreview.image).url() : "/about-team.jpg"}
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
