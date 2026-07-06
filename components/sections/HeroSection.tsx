import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getHero } from "@/lib/services/hero";
import { urlFor } from "@/lib/cms/image";
import { getHeroStats } from "@/lib/data/hero";

export async function HeroSection() {
  const hero = await getHero();
  const stats = await getHeroStats();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        {hero.backgroundImage ? (
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
            Established 2017 · Publicly Listed
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight">
            {hero.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl opacity-85 max-w-2xl leading-relaxed">
            {hero.subtitle}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-primary-foreground text-primary-deep font-semibold hover:bg-accent-gold hover:text-primary-deep transition shadow-elegant"
            >
              Discover SBI <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/investors"
              className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-primary-foreground/40 hover:bg-primary-foreground/10 font-semibold transition"
            >
              Investor Relations
            </Link>
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
