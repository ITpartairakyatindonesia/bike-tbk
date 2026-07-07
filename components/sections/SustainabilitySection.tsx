import Link from "next/link";
import { getHomePage } from "@/lib/services/home-page";
import {
  SUSTAINABILITY_CONTENT,
  SUSTAINABILITY_FOCUS_AREAS,
} from "@/lib/data/sustainability";

export async function SustainabilitySection() {
  const homePage = await getHomePage();
  const sustainability = homePage.sustainability;

  return (
    <section id="sustainability" className="py-24 md:py-32">
      <div className="container-page grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            {sustainability?.sectionHeader?.eyebrow}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {sustainability?.sectionHeader?.heading}
          </h2>
          {sustainability?.sectionHeader?.description && (
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {sustainability.sectionHeader.description}
            </p>
          )}
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {sustainability?.description?.en}
          </p>
          {sustainability?.button && (
            <>
              {sustainability.button.external ? (
                <a
                  href={sustainability.button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  {sustainability.button.label}
                </a>
              ) : (
                <Link
                  href={sustainability.button.href}
                  className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  {sustainability.button.label}
                </Link>
              )}
            </>
          )}
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {SUSTAINABILITY_FOCUS_AREAS.map((area) => (
            <div
              key={area.title}
              className="flex items-center gap-4 p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-card transition"
            >
              <div className="h-11 w-11 shrink-0 grid place-items-center rounded-xl bg-primary-soft text-primary">
                <area.icon className="h-5 w-5" />
              </div>
              <div className="font-semibold text-foreground">{area.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
