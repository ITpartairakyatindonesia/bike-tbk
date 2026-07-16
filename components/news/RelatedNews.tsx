import { pickLocalized } from "@/lib/utils";
import type { News } from "@/lib/types/sanity";
import { NewsCard } from "./NewsCard";

const FALLBACK_IMAGES = ["/project-1.jpg", "/project-2.jpg", "/project-3.jpg"];

interface RelatedNewsProps {
  articles: News[];
  readMoreLabel?: string;
  locale: string;
}

export function RelatedNews({ articles, readMoreLabel, locale }: RelatedNewsProps) {
  const validArticles = articles.filter(
    (article) => pickLocalized(article.title, locale) && article.slug?.current
  );

  if (validArticles.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-page">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          {pickLocalized({ en: "Related Articles", id: "Artikel Terkait", zh: "相关文章" }, locale)}
        </h2>
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
      </div>
    </section>
  );
}
