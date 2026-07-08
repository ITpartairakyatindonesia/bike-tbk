"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { urlFor } from "@/lib/cms/image";
import type { LatestNewsSection, News } from "@/lib/types/sanity";

const FALLBACK_IMAGES = ["/project-1.jpg", "/project-2.jpg", "/project-3.jpg"];

interface NewsSectionProps {
  latestNews: LatestNewsSection;
  newsItems: News[];
}

function formatDate(dateString: string | undefined, language: string) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString(language === "id" ? "id-ID" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function NewsSection({ latestNews, newsItems }: NewsSectionProps) {
  const { language } = useLanguage();

  const validArticles = newsItems.filter(
    (article) => article.title?.[language] && article.slug?.current
  );

  if (validArticles.length === 0) return null;

  return (
    <section className="py-24">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            {latestNews?.sectionHeader?.eyebrow?.[language]}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {latestNews?.sectionHeader?.heading?.[language]}
          </h2>
          {latestNews?.description && (
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {latestNews.description[language]}
            </p>
          )}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {validArticles.map((article, index) => {
            const title = article.title?.[language];
            const slug = article.slug?.current;
            if (!title || !slug) return null;
            return (
              <article
                key={article._id}
                className="group bg-card rounded-3xl overflow-hidden shadow-card border border-border hover:shadow-elegant transition-all"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={
                      article.featuredImage
                        ? urlFor(article.featuredImage).url()
                        : (FALLBACK_IMAGES[index] ?? "/project-1.jpg")
                    }
                    alt={title}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                    loading="lazy"
                    width={800}
                    height={450}
                  />
                </div>
                <div className="p-7">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    {formatDate(article.publishedAt, language)}
                  </div>
                  <h3 className="text-xl font-bold leading-tight mb-4">
                    {title}
                  </h3>
                  <Link
                    href={`/news/${slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
        {(() => {
          const button = latestNews?.viewAllButton;
          if (!button?.label?.[language] || !button.href) return null;
          return (
            <div className="mt-10 flex justify-center">
              {button.external ? (
                <a
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-deep transition shadow-soft"
                >
                  {button.label[language]}
                </a>
              ) : (
                <Link
                  href={button.href}
                  className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-deep transition shadow-soft"
                >
                  {button.label[language]}
                </Link>
              )}
            </div>
          );
        })()}
      </div>
    </section>
  );
}
