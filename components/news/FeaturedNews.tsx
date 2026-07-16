import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { urlFor } from "@/lib/cms/image";
import { pickLocalized } from "@/lib/utils";
import type { News } from "@/lib/types/sanity";

interface FeaturedNewsProps {
  article: News;
  readMoreLabel?: string;
  locale: string;
}

function formatDate(dateString: string | undefined, locale: string) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString(
    locale === "id" ? "id-ID" : locale === "zh" ? "zh-CN" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );
}

export function FeaturedNews({ article, readMoreLabel, locale }: FeaturedNewsProps) {
  const title = pickLocalized(article.title, locale);
  const excerpt = pickLocalized(article.excerpt, locale);
  const slug = article.slug?.current;

  if (!title || !slug) return null;

  const imageUrl = article.featuredImage?.asset
    ? urlFor(article.featuredImage).url()
    : "/project-1.jpg";

  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <Link
          href={`/${locale}/news/${slug}`}
          className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-card rounded-3xl overflow-hidden border border-border hover:shadow-elegant transition-all"
        >
          <div className="aspect-[16/9] lg:aspect-[4/3] overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
              loading="lazy"
              width={1200}
              height={800}
            />
          </div>
          <div className="p-8 lg:pr-12">
            {article.category && (
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-full mb-4">
                {article.category}
              </span>
            )}
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
              {formatDate(article.publishedAt, locale)}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4 group-hover:text-primary transition-colors">
              {title}
            </h2>
            {excerpt && (
              <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                {excerpt}
              </p>
            )}
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              {readMoreLabel} <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
