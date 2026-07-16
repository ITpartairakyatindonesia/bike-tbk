import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { pickLocalized } from "@/lib/utils";
import type { News } from "@/lib/types/sanity";

interface ArticleHeroProps {
  article: News;
  backToNewsLabel?: string;
  locale: string;
}

function formatDate(dateString: string | undefined, locale: string) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString(
    locale === "id" ? "id-ID" : locale === "zh" ? "zh-CN" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );
}

export function ArticleHero({ article, backToNewsLabel, locale }: ArticleHeroProps) {
  const title = pickLocalized(article.title, locale);
  const excerpt = pickLocalized(article.excerpt, locale);
  const formattedDate = formatDate(article.publishedAt, locale);

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container-page">
        <Link
          href={`/${locale}/news`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {pickLocalized(backToNewsLabel, locale)}
        </Link>

        <article className="max-w-4xl">
          <div className="mb-6">
            {article.category && (
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-full mb-4">
                {article.category}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {formattedDate && (
                <time dateTime={article.publishedAt}>
                  {formattedDate}
                </time>
              )}
              {article.author && (
                <span>{article.author}</span>
              )}
            </div>
          </div>

          {excerpt && (
            <p className="text-xl text-muted-foreground leading-relaxed">
              {excerpt}
            </p>
          )}
        </article>
      </div>
    </section>
  );
}
