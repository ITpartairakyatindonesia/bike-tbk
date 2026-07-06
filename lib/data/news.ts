import type { NewsArticle } from "@/lib/types";

export const LATEST_NEWS: NewsArticle[] = [
  {
    _id: "news-1",
    title: "Public Expose PT Sepeda Bersama Indonesia Tbk",
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
