import type { NewsArticle } from "@/lib/types";
import type { News, NewsPage } from "@/lib/types/sanity";

export const LATEST_NEWS: NewsArticle[] = [
  {
    _id: "news-1",
    title: "Article Placeholder",
    slug: "article-placeholder",
    date: "January 1, 2025",
    image: "/project-1.jpg",
    url: "#",
  },
  {
    _id: "news-2",
    title: "News Placeholder",
    slug: "news-placeholder",
    date: "January 1, 2025",
    image: "/project-2.jpg",
    url: "#",
  },
];

export async function getLatestNews() {
  return LATEST_NEWS;
}

export const NEWS_PAGE_FALLBACK: NewsPage = {
  _id: "newsPageFallback",
  _type: "newsPage",
  seo: {
    title: { en: "News - Bike", id: "Berita - Bike", zh: "新闻 - Bike" },
    description: {
      en: "Latest news and updates from Bike.",
      id: "Berita dan pembaruan terbaru dari Bike.",
      zh: "Bike 最新新闻和动态。",
    },
  },
  hero: {
    eyebrow: { en: "News & Updates", id: "Berita & Pembaruan", zh: "新闻与动态" },
    title: { en: "News", id: "Berita", zh: "新闻" },
    description: {
      en: "Stay informed with the latest announcements and updates from Bike.",
      id: "Tetap terinformasi dengan pengumuman dan pembaruan terbaru dari Bike.",
      zh: "随时了解 Bike 的最新公告和动态。",
    },
  },
  noNewsMessage: {
    en: "No news available yet",
    id: "Belum ada berita",
    zh: "暂无新闻",
  },
  readMoreLabel: { en: "Read More", id: "Baca Selengkapnya", zh: "阅读更多" },
  backToNewsLabel: { en: "Back to News", id: "Kembali ke Berita", zh: "返回新闻" },
  loadMoreLabel: { en: "Load More", id: "Muat Lebih Banyak", zh: "加载更多" },
};

export const FALLBACK_NEWS: News[] = [
  {
    _id: "news-1",
    _type: "news",
    title: {
      en: "Article Placeholder",
      id: "Article Placeholder",
      zh: "文章占位",
    },
    slug: { current: "article-placeholder" },
    excerpt: {
      en: "This is a placeholder article. Content will be available soon.",
      id: "Ini adalah artikel placeholder. Konten akan segera tersedia.",
      zh: "这是一篇占位文章。内容即将上线。",
    },
    category: "Announcement",
    publishedAt: "2025-01-01T00:00:00.000Z",
    featured: true,
  },
  {
    _id: "news-2",
    _type: "news",
    title: {
      en: "News Placeholder",
      id: "News Placeholder",
      zh: "新闻占位",
    },
    slug: { current: "news-placeholder" },
    excerpt: {
      en: "This is a placeholder news item. Content will be available soon.",
      id: "Ini adalah item berita placeholder. Konten akan segera tersedia.",
      zh: "这是一条占位新闻。内容即将上线。",
    },
    category: "Announcement",
    publishedAt: "2025-01-01T00:00:00.000Z",
    featured: false,
  },
  {
    _id: "news-3",
    _type: "news",
    title: {
      en: "Latest Update",
      id: "Pembaruan Terbaru",
      zh: "最新更新",
    },
    slug: { current: "latest-update" },
    excerpt: {
      en: "This is a placeholder for the latest update. Content will be available soon.",
      id: "Ini adalah placeholder untuk pembaruan terbaru. Konten akan segera tersedia.",
      zh: "这是最新更新的占位。内容即将上线。",
    },
    category: "Update",
    publishedAt: "2025-01-01T00:00:00.000Z",
    featured: false,
  },
  {
    _id: "news-4",
    _type: "news",
    title: {
      en: "Company Announcement",
      id: "Pengumuman Perusahaan",
      zh: "公司公告",
    },
    slug: { current: "company-announcement" },
    excerpt: {
      en: "This is a placeholder for a company announcement. Content will be available soon.",
      id: "Ini adalah placeholder untuk pengumuman perusahaan. Konten akan segera tersedia.",
      zh: "这是公司公告的占位。内容即将上线。",
    },
    category: "Announcement",
    publishedAt: "2025-01-01T00:00:00.000Z",
    featured: false,
  },
];
