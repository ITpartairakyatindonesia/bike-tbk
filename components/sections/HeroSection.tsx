import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getHomePage } from "@/lib/services/home-page";
import { urlFor } from "@/lib/cms/image";
import { getHeroStats } from "@/lib/data/hero";
import type { Button } from "@/lib/types/sanity";

function buttonClassName(variant?: Button["variant"]) {
  const base =
    "inline-flex items-center gap-2 h-12 px-7 rounded-full font-semibold transition";
  if (variant === "primary") {
    return `${base} bg-primary-foreground text-primary-deep hover:bg-accent-gold hover:text-primary-deep shadow-elegant`;
  }
  if (variant === "secondary") {
    return `${base} bg-primary text-primary-foreground hover:bg-primary-deep shadow-soft`;
  }
  return `${base} border border-primary-foreground/40 hover:bg-primary-foreground/10`;
}

function buttonContent(label: string, variant?: Button["variant"]) {
  return (
    <>
      {label}
      {variant === "primary" && <ArrowRight className="h-4 w-4" />}
    </>
  );
}

export async function HeroSection() {
  const homePage = await getHomePage();
  const hero = homePage.hero;
  const stats = await getHeroStats();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        {hero?.backgroundImage ? (
          <img
            src={urlFor(hero.backgroundImage).url()}
            alt=""
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
        ) : (
          <img
            src="/hero-tower.jpg"
            alt=""
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 via-primary-deep/75 to-primary-deep/40" />
      </div>
      <div className="container-page relative pt-24 pb-16 text-primary-foreground">
        <div className="max-w-3xl reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 backdrop-blur px-4 py-1.5 text-xs font-medium tracking-wider uppercase mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
            {hero?.eyebrow?.en}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight">
            {hero?.title?.en}
          </h1>
          <p className="mt-6 text-lg md:text-xl opacity-85 max-w-2xl leading-relaxed">
            {hero?.subtitle?.en}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {hero?.primaryButton && (
              <>
                {hero.primaryButton.external ? (
                  <a
                    href={hero.primaryButton.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClassName(hero.primaryButton.variant)}
                  >
                    {buttonContent(hero.primaryButton.label, hero.primaryButton.variant)}
                  </a>
                ) : (
                  <Link
                    href={hero.primaryButton.href}
                    className={buttonClassName(hero.primaryButton.variant)}
                  >
                    {buttonContent(hero.primaryButton.label, hero.primaryButton.variant)}
                  </Link>
                )}
              </>
            )}
            {hero?.secondaryButton && (
              <>
                {hero.secondaryButton.external ? (
                  <a
                    href={hero.secondaryButton.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClassName(hero.secondaryButton.variant)}
                  >
                    {buttonContent(hero.secondaryButton.label, hero.secondaryButton.variant)}
                  </a>
                ) : (
                  <Link
                    href={hero.secondaryButton.href}
                    className={buttonClassName(hero.secondaryButton.variant)}
                  >
                    {buttonContent(hero.secondaryButton.label, hero.secondaryButton.variant)}
                  </Link>
                )}
              </>
            )}
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-primary-foreground/15 rounded-2xl overflow-hidden backdrop-blur border border-primary-foreground/15">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-primary-deep/60 p-6 md:p-8">
              <div className="text-xl md:text-xl font-display font-bold text-accent-gold">
                {stat.value}
              </div>
              <div className="mt-2 text-xs md:text-sm opacity-80 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
