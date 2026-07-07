import Link from "next/link";
import { getHomePage } from "@/lib/services/home-page";
import { urlFor } from "@/lib/cms/image";

const FALLBACK_IMAGES = [
  "/business-energy.jpg",
  "/business-logistics.jpg",
  "/business-finance.jpg",
  "/project-1.jpg",
];

export async function BusinessSection() {
  const homePage = await getHomePage();
  const businessHighlights = homePage.businessHighlights;

  return (
    <section id="business" className="py-24 gradient-subtle">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            {businessHighlights?.sectionHeader?.eyebrow}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {businessHighlights?.sectionHeader?.heading}
          </h2>
          {businessHighlights?.sectionHeader?.description && (
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {businessHighlights.sectionHeader.description}
            </p>
          )}
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {businessHighlights?.cards?.map((card, index) => (
            <article
              key={card._key ?? `card-${index}`}
              className="group bg-card rounded-3xl overflow-hidden shadow-card border border-border hover:shadow-elegant transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={
                    card.image
                      ? urlFor(card.image).url()
                      : (FALLBACK_IMAGES[index] ?? "/project-1.jpg")
                  }
                  alt={card.title?.en}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                  loading="lazy"
                  width={1200}
                  height={800}
                />
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold">{card.title?.en}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {card.description?.en}
                </p>
                {card.button && (
                  <>
                    {card.button.external ? (
                      <a
                        href={card.button.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline"
                      >
                        {card.button.label}
                      </a>
                    ) : (
                      <Link
                        href={card.button.href}
                        className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline"
                      >
                        {card.button.label}
                      </Link>
                    )}
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
