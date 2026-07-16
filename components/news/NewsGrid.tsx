import { pickLocalized } from "@/lib/utils";
import type { News } from "@/lib/types/sanity";
import { NewsCard } from "./NewsCard";

const FALLBACK_IMAGES = ["/project-1.jpg", "/project-2.jpg", "/project-3.jpg"];

interface NewsGridProps {
  articles: News[];
  readMoreLabel?: string;
  noNewsMessage?: string;
  loadMoreLabel?: string;
  locale: string;
}

export function NewsGrid({ articles, readMoreLabel, noNewsMessage, loadMoreLabel, locale }: NewsGridProps) {
  const validArticles = articles.filter(
    (article) => pickLocalized(article.title, locale) && article.slug?.current
  );

  if (validArticles.length === 0) {
    return (
      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="rounded-2xl border border-dashed border-border bg-muted/20 p-12 text-center">
            <p className="text-muted-foreground text-lg">
              {pickLocalized(noNewsMessage, locale)}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {validArticles.map((article, index) => (
            <NewsCard
              key={article._id}
              article={article}
              readMoreLabel={readMoreLabel}
              locale={locale}
              fallbackImage={FALLBACK_IMAGES[index % FALLBACK_IMAGES.length]}
            />
          ))}
        </div>
        {loadMoreLabel && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-border bg-card text-foreground font-semibold hover:bg-muted transition"
            >
              {pickLocalized(loadMoreLabel, locale)}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
