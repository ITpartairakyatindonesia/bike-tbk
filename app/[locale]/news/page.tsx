import Link from "next/link";
import { pickLocalized } from "@/lib/utils";
import { urlFor } from "@/lib/cms/image";
import { getTranslations } from 'next-intl/server';
import { getNews } from '@/lib/services/news';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('metadata.news');

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const canonicalUrl = `${baseUrl}/${locale}/news`;

  const locales = ['en', 'id', 'zh'] as const;
  const alternates = locales.map(loc => ({
    hrefLang: loc,
    href: `${baseUrl}/${loc}/news`,
  }));

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(alternates.map(a => [a.hrefLang, a.href])),
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: canonicalUrl,
      locale: locale === 'id' ? 'id_ID' : locale === 'zh' ? 'zh_CN' : 'en_US',
    },
    twitter: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function NewsListPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('news');
  const newsItems = await getNews();

  return (
    <div>
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container-page">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t('title')}
            </h1>
          </div>

          {newsItems.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-muted/20 p-12 text-center">
              <p className="text-muted-foreground text-lg">
                {t('noNews')}
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {newsItems.map((news) => {
                const title = pickLocalized(news.title, locale);
                const excerpt = pickLocalized(news.excerpt, locale);
                const imageUrl = news.featuredImage?.asset
                  ? urlFor(news.featuredImage).url()
                  : undefined;

                const formattedDate = news.publishedAt
                  ? new Date(news.publishedAt).toLocaleDateString(
                      locale === 'id' ? 'id-ID' : locale === 'zh' ? 'zh-CN' : 'en-US',
                      { year: 'numeric', month: 'long', day: 'numeric' }
                    )
                  : '';

                return (
                  <Link
                    key={news._id}
                    href={`/${locale}/news/${news.slug?.current || ''}`}
                    className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-elegant transition-shadow"
                  >
                    {imageUrl && (
                      <div className="aspect-[16/9] overflow-hidden bg-muted">
                        <img
                          src={imageUrl}
                          alt={title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      {news.category && (
                        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-full mb-3">
                          {news.category}
                        </span>
                      )}
                      <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {title}
                      </h2>
                      {excerpt && (
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                          {excerpt}
                        </p>
                      )}
                      {formattedDate && (
                        <time className="text-xs text-muted-foreground" dateTime={news.publishedAt}>
                          {formattedDate}
                        </time>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
