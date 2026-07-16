import { notFound } from "next/navigation";
import { getTranslations } from 'next-intl/server';
import { ArticleHero } from "@/components/news/ArticleHero";
import { ArticleContent } from "@/components/news/ArticleContent";
import { RelatedNews } from "@/components/news/RelatedNews";
import { CTASection } from "@/components/sections/CTASection";
import { getNewsBySlug, getRelatedNews, getNewsPage } from '@/lib/services/news';
import { pickLocalized } from "@/lib/utils";

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

  const newsPage = await getNewsPage();
  const relatedArticles = await getRelatedNews(slug);

  return (
    <div>
      <ArticleHero
        article={news}
        backToNewsLabel={pickLocalized(newsPage.backToNewsLabel, locale)}
        locale={locale}
      />
      <ArticleContent article={news} locale={locale} />
      <RelatedNews
        articles={relatedArticles}
        readMoreLabel={pickLocalized(newsPage.readMoreLabel, locale)}
        locale={locale}
      />
      <CTASection cta={{}} locale={locale} />
    </div>
  );
}
