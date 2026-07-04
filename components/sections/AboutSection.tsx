import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ABOUT_FEATURES } from "@/lib/data/about";

export function AboutSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            About Bike
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Four decades of building industries that move nations forward.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From a single infrastructure firm in 1983 to a diversified super holding group with 28 subsidiaries, Bike has consistently delivered long-term value to shareholders, partners and the communities we serve.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {ABOUT_FEATURES.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="h-11 w-11 shrink-0 grid place-items-center rounded-xl bg-primary-soft text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-foreground">{feature.title}</div>
                  <p className="text-sm text-muted-foreground mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/about"
            className="mt-10 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Read our story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
            <img
              src="/about-team.jpg"
              alt="Bike leadership team"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1600}
              height={1024}
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-background rounded-2xl shadow-elegant p-6 max-w-xs border border-border">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Vision
            </div>
            <p className="font-display font-semibold text-lg leading-snug text-foreground">
              To be the most trusted holding group shaping tomorrow's economies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
