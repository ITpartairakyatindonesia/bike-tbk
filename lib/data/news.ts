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
    _id: "news-pmj-controlling-shareholder",
    _type: "news",
    title: {
      en: "PT Penajam Makmur Jaya Officially Becomes New Controlling Shareholder of Bike Tbk",
      id: "PT Penajam Makmur Jaya Resmi Jadi Pemegang Saham Pengendali Baru Bike Tbk",
      zh: "PT Penajam Makmur Jaya 正式成为 Bike Tbk 新控股股东",
    },
    slug: { _type: "slug", current: "pmj-pemegang-saham-pengendali-bike-tbk" },
    excerpt: {
      en: "PT Penajam Makmur Jaya (PMJ) officially becomes the new controlling shareholder of PT Bhineka Inovasi Ketahanan Energi Tbk (Bike Tbk), supporting the company's business transformation and expansion into strategic sectors with long-term growth prospects. PMJ plans to provide funding support of Rp 1 trillion in early 2026.",
      id: "PT Penajam Makmur Jaya (PMJ) resmi menjadi pemegang saham pengendali baru PT Bhineka Inovasi Ketahanan Energi Tbk (Bike Tbk), mendukung transformasi dan ekspansi bisnis perusahaan ke sektor-sektor strategis dengan prospek pertumbuhan jangka panjang. PMJ berencana menyediakan dukungan pendanaan senilai Rp 1 triliun pada awal 2026.",
      zh: "PT Penajam Makmur Jaya (PMJ) 正式成为 PT Bhineka Inovasi Ketahanan Energi Tbk (Bike Tbk) 的新控股股东，支持公司业务转型和向具有长期增长前景的战略领域扩张。PMJ 计划在2026年初提供1万亿印尼盾的资金支持。",
    },
    category: "Announcement",
    publishedAt: "2025-07-01T00:00:00.000Z",
    featured: true,
    author: "Bike Tbk",
    body: [
      {
        _type: "block",
        _key: "block-1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "span-1",
            text: "PT Penajam Makmur Jaya (PMJ) resmi menjadi pemegang saham pengendali baru PT Bhineka Inovasi Ketahanan Energi Tbk (Bike Tbk), mendukung transformasi dan ekspansi bisnis perusahaan ke sektor-sektor strategis dengan prospek pertumbuhan jangka panjang. Kehadiran PMJ diharapkan memperkuat permodalan, mempercepat pengembangan bisnis, dan memperluas jaringan usaha perusahaan.",
          },
        ],
      },
      {
        _type: "block",
        _key: "block-2",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "span-2",
            text: "Sebagai bagian dari komitmen ini, PMJ berencana menyediakan dukungan pendanaan berupa pinjaman modal senilai Rp 1 triliun pada awal 2026, yang akan digunakan untuk mendukung ekspansi bisnis perusahaan — khususnya di sektor energi terbarukan, teknologi, jaringan distribusi, dan berbagai proyek strategis nasional. Langkah ini meletakkan fondasi bagi transformasi Bike Tbk menjadi perusahaan yang lebih terdiversifikasi dan berorientasi masa depan.",
          },
        ],
      },
    ],
  },
];
