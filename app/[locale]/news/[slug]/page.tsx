import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PortableText } from '@portabletext/react';
import { pickLocalized } from "@/lib/utils";
import { urlFor } from "@/lib/cms/image";
import { getTranslations } from 'next-intl/server';
import { getNewsBySlug } from '@/lib/services/news';
import type { News } from '@/lib/types/sanity';

export async function generateStaticParams() {
  // Return empty array for now - news is dynamic
  // In production, you might want to fetch all slugs from Sanity
  return [];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const news = await getNewsBySlug(slug);

  if (!news) {
    return {
      title: "News Not Found",
    };
  }

  const title = pickLocalized(news.title, locale);
  const excerpt = pickLocalized(news.excerpt, locale);

  return {
    title: `${title} | PT Bike Tbk`,
    description: excerpt,
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const news = await getNewsBySlug(slug);

  if (!news) {
    notFound();
  }

  const t = await getTranslations('news');
  const title = pickLocalized(news.title, locale);
  const excerpt = pickLocalized(news.excerpt, locale);
  const category = news.category;
  const publishedAt = news.publishedAt;

  const imageUrl = news.featuredImage?.asset 
    ? urlFor(news.featuredImage).url() 
    : undefined;

  const formattedDate = publishedAt 
    ? new Date(publishedAt).toLocaleDateString(locale === 'id' ? 'id-ID' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  return (
    <div>
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container-page">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('backToHome')}
          </Link>

          <article className="max-w-4xl">
            {imageUrl && (
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-card border border-border mb-8">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="mb-6">
              {category && (
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-full mb-4">
                  {category}
                </span>
              )}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                {formattedDate && (
                  <time dateTime={publishedAt}>
                    {formattedDate}
                  </time>
                )}
              </div>
            </div>

            {excerpt && (
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {excerpt}
              </p>
            )}

            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
              {news.body && (
                <PortableText
                  value={news.body}
                  components={{
                    block: {
                      h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
                      normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
                    },
                    list: {
                      bullet: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
                      number: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
                    },
                    listItem: ({ children }) => <li className="text-muted-foreground">{children}</li>,
                  }}
                />
              )}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
