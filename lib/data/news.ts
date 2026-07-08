import type { NewsArticle } from "@/lib/types";
import type { News } from "@/lib/types/sanity";

export const LATEST_NEWS: NewsArticle[] = [
  {
    _id: "news-1",
    title: "Public Expose PT Bike Tbk",
    slug: "public-expose-2023",
    date: "November 23, 2023",
    image: "/project-1.jpg",
    url: "#",
  },
  {
    _id: "news-2",
    title: "BIKE Annual Public Expose 2022",
    slug: "annual-public-expose-2022",
    date: "October 31, 2022",
    image: "/project-2.jpg",
    url: "#",
  },
];

export async function getLatestNews() {
  return LATEST_NEWS;
}

export const FALLBACK_NEWS: News[] = [
  {
    _id: "news-1",
    _type: "news",
    title: {
      en: "Public Expose PT Bike Tbk",
      id: "Public Expose PT Bike Tbk",
    },
    slug: {
      current: "public-expose-2023",
    },
    excerpt: {
      en: "Highlights from the PT Bike Tbk public expose event covering business performance and future direction.",
      id: "Highlights dari acara public expose PT Bike Tbk yang mencakup kinerja bisnis dan arah masa depan.",
    },
    category: "Public Expose",
    publishedAt: "2023-11-23T00:00:00.000Z",
    featured: true,
  },
  {
    _id: "news-2",
    _type: "news",
    title: {
      en: "BIKE Annual Public Expose 2022",
      id: "Public Expose Tahunan BIKE 2022",
    },
    slug: {
      current: "annual-public-expose-2022",
    },
    excerpt: {
      en: "Key takeaways from the 2022 annual public expose of PT Bike Tbk.",
      id: "Poin-poin penting dari public expose tahunan PT Bike Tbk 2022.",
    },
    category: "Public Expose",
    publishedAt: "2022-10-31T00:00:00.000Z",
    featured: false,
  },
  {
    _id: "news-3",
    _type: "news",
    title: {
      en: "SBI Expands Distribution Network Nationwide",
      id: "SBI Perluas Jaringan Distribusi Nasional",
    },
    slug: {
      current: "expands-distribution-network",
    },
    excerpt: {
      en: "PT Bike Tbk continues to grow its dealer and retail presence across Indonesia.",
      id: "PT Bike Tbk terus memperluas kehadiran dealer dan ritelnya di seluruh Indonesia.",
    },
    category: "Announcement",
    publishedAt: "2023-08-15T00:00:00.000Z",
    featured: false,
  },
];
