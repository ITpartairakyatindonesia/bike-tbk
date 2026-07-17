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
    _id: "news-rupslb-2-juli-2026",
    _type: "news",
    title: {
      en: "RUPSLB 2 July 2026: PT Sepeda Bersama Indonesia Tbk Transforms into PT Bhineka Inovasi Ketahanan Energi Tbk (BIKE)",
      id: "RUPSLB 2 Juli 2026: PT Sepeda Bersama Indonesia Tbk Bertransformasi Menjadi PT Bhineka Inovasi Ketahanan Energi Tbk (BIKE)",
      zh: "2026年7月2日临时股东大会：PT Sepeda Bersama Indonesia Tbk 正式更名为 PT Bhineka Inovasi Ketahanan Energi Tbk (BIKE)",
    },
    slug: { _type: "slug", current: "rupslb-2-juli-2026-transformasi-bike-tbk" },
    excerpt: {
      en: "Through the Extraordinary General Meeting of Shareholders on 2 July 2026, shareholders approved a comprehensive transformation of the Company: change of name to PT Bhineka Inovasi Ketahanan Energi Tbk, change of corporate logo, new composition of the Board of Directors and Board of Commissioners, as well as the approval of new business lines and funding facilities to accelerate the Company's development.",
      id: "Melalui Rapat Umum Pemegang Saham Luar Biasa pada 2 Juli 2026, para pemegang saham menyetujui transformasi menyeluruh Perseroan: perubahan nama menjadi PT Bhineka Inovasi Ketahanan Energi Tbk, perubahan logo perusahaan, susunan baru Direksi dan Dewan Komisaris, serta persetujuan penambahan bidang usaha baru dan fasilitas pendanaan untuk mempercepat pengembangan Perseroan.",
      zh: "通过2026年7月2日的临时股东大会，股东们批准了公司的全面转型：更名为 PT Bhineka Inovasi Ketahanan Energi Tbk、更换企业标志、新的董事会和监事会组成，以及批准新增业务领域和融资安排以加速公司发展。",
    },
    category: "Announcement",
    publishedAt: "2026-07-02T00:00:00.000Z",
    featured: true,
    author: "PT Bhineka Inovasi Ketahanan Energi Tbk",
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
            text: "Pada 2 Juli 2026, PT Sepeda Bersama Indonesia Tbk mengadakan Rapat Umum Pemegang Saham Luar Biasa (RUPSLB) yang menandai babak baru dalam perjalanan Perseroan. Dalam rapat tersebut, para pemegang saham menyetujui transformasi menyeluruh yang mencakup perubahan nama Perseroan dari PT Sepeda Bersama Indonesia Tbk menjadi PT Bhineka Inovasi Ketahanan Energi Tbk (BIKE), serta perubahan logo dan identitas korporat sebagai cerminan arah strategis yang baru.",
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
            text: "RUPSLB juga menyetujui perubahan susunan Direksi dan Dewan Komisaris. Susunan kepemimpinan yang baru diharapkan membawa visi segar dan kapabilitas yang diperlukan untuk mengarahkan Perseroan dalam fase pertumbuhan berikutnya. Perubahan susunan organ perseroan ini telah disesuaikan dengan ketentuan tata kelola perusahaan yang berlaku dan terdaftar di Bursa Efek Indonesia.",
          },
        ],
      },
      {
        _type: "block",
        _key: "block-3",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "span-3",
            text: "Selain perubahan nama dan susunan kepengurusan, RUPSLB juga menyetujui penambahan bidang usaha baru bagi Perseroan, mencakup investasi ketahanan di bidang teknologi, kelautan, pangan, infrastruktur, dan data. Perseroan tetap berpijak pada fondasi bisnis distribusi sepeda yang telah dibangun sejak 2017, sambil membuka jalan menuju diversifikasi bisnis yang lebih luas.",
          },
        ],
      },
      {
        _type: "block",
        _key: "block-4",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "span-4",
            text: "Untuk mempercepat pengembangan Perseroan, RUPSLB turut menyetujui fasilitas pendanaan yang akan digunakan untuk mendukung ekspansi ke sektor-sektor strategis baru. Fasilitas pendanaan ini diharapkan memperkuat permodalan Perseroan dan memungkinkan eksekusi rencana strategis secara lebih agresif dan berkelanjutan.",
          },
        ],
      },
      {
        _type: "block",
        _key: "block-5",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "span-5",
            text: "Transformasi ini didukung oleh PT Penajam Makmur Jaya yang kini menguasai 74,90% saham Perseroan sebagai pemegang saham pengendali baru. Dengan identitas baru sebagai PT Bhineka Inovasi Ketahanan Energi Tbk (BIKE), Perseroan siap melangkah ke masa depan dengan portofolio bisnis yang lebih terdiversifikasi, didukung tata kelola yang baik dan komitmen untuk menciptakan nilai tambah bagi seluruh pemegang saham dan pemangku kepentingan.",
          },
        ],
      },
    ],
  },
];
