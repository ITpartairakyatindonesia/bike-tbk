import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { urlFor } from "@/lib/cms/image";
import { pickLocalized } from "@/lib/utils";
import type { News } from "@/lib/types/sanity";

interface NewsCardProps {
  article: News;
  readMoreLabel?: string;
  locale: string;
  fallbackImage?: string;
}

function formatDate(dateString: string | undefined, locale: string) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString(
    locale === "id" ? "id-ID" : locale === "zh" ? "zh-CN" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );
}

export function NewsCard({ article, readMoreLabel, locale, fallbackImage = "/project-1.jpg" }: NewsCardProps) {
  const title = pickLocalized(article.title, locale);
  const excerpt = pickLocalized(article.excerpt, locale);
  const slug = article.slug?.current;

  if (!title || !slug) return null;

  const imageUrl = article.featuredImage?.asset
    ? urlFor(article.featuredImage).url()
    : fallbackImage;

  return (
    <Link
      href={`/${locale}/news/${slug}`}
      className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-elegant transition-shadow"
    >
      <div className="aspect-[16/9] overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          width={800}
          height={450}
        />
      </div>
      <div className="p-6">
        {article.category && (
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-full mb-3">
            {article.category}
          </span>
        )}
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        {excerpt && (
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {excerpt}
          </p>
        )}
        <div className="flex items-center justify-between">
          {article.publishedAt && (
            <time className="text-xs text-muted-foreground" dateTime={article.publishedAt}>
              {formatDate(article.publishedAt, locale)}
            </time>
          )}
          {readMoreLabel && (
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
              {readMoreLabel} <ArrowRight className="h-3.5 w-3.5" />
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
