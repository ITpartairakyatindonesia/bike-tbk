import type { ProductPage } from '@/lib/types/sanity'

export const PRODUCT_PAGE: ProductPage = {
  _id: 'product-page-fallback',
  _type: 'productPage',
  hero: {
    eyebrow: { en: 'Our Products', id: 'Produk Kami' },
    title: { en: 'Trusted Bicycle Brands for Every Journey.', id: 'Merek Sepeda Terpercaya untuk Setiap Perjalanan.' },
    subtitle: { en: 'PT Bike Tbk offers a diverse portfolio of bicycle brands designed to serve every market segment — from children to professionals — supporting healthier lifestyles and sustainable mobility across Indonesia.', id: 'PT Bike Tbk menawarkan portofolio merek sepeda yang beragam yang dirancang untuk melayani setiap segmen pasar — dari anak-anak hingga profesional — mendukung gaya hidup yang lebih sehat dan mobilitas berkelanjutan di seluruh Indonesia.' },
    backgroundImage: undefined,
  },
  introduction: {
    sectionHeader: {
      heading: { en: 'Competitive Across Every Market Segment', id: 'Kompetitif di Setiap Segmen Pasar' },
    },
    paragraphs: [
      { en: 'PT Bike Tbk offers one of Indonesia\'s most diverse bicycle portfolios, covering every age group from toddlers to adults.', id: 'PT Bike Tbk menawarkan salah satu portofolio sepeda paling beragam di Indonesia, mencakup setiap kelompok usia dari balita hingga orang dewasa.' },
      { en: 'Our products support transportation, sports, recreation, health, fashion, and modern lifestyles, positioning the Company to serve diverse customer needs.', id: 'Produk kami mendukung transportasi, olahraga, rekreasi, kesehatan, fashion, dan gaya hidup modern, memposisikan Perusahaan untuk melayani kebutuhan pelanggan yang beragam.' },
      { en: 'Indonesia\'s demographic bonus creates long-term opportunities for sustainable mobility, while growing environmental awareness increases demand for bicycles as part of the New Economy.', id: 'Bonus demografi Indonesia menciptakan peluang jangka panjang untuk mobilitas berkelanjutan, sementara kesadaran lingkungan yang meningkat meningkatkan permintaan sepeda sebagai bagian dari Ekonomi Baru.' },
      { en: 'Each brand is strategically positioned to serve different market segments with strong competitiveness and clear market identity.', id: 'Setiap merek diposisikan secara strategis untuk melayani segmen pasar yang berbeda dengan daya saing yang kuat dan identitas pasar yang jelas.' },
    ],
    statCards: [
      { value: { en: 'Product Categories', id: 'Kategori Produk' }, label: { en: '100+', id: '100+' } },
      { value: { en: 'All Ages', id: 'Semua Usia' }, label: { en: 'Toddlers to Adults', id: 'Balita hingga Orang Dewasa' } },
      { value: { en: 'Transport', id: 'Transportasi' }, label: { en: '& Lifestyle', id: '& Gaya Hidup' } },
      { value: { en: 'Sustainable', id: 'Berkelanjutan' }, label: { en: 'Mobility', id: 'Mobilitas' } },
    ],
  },
  why: {
    sectionHeader: {
      heading: { en: 'Why Our Products', id: 'Mengapa Produk Kami' },
      description: { en: 'Our brands are strategically positioned to serve diverse market segments with quality and innovation.', id: 'Merek-merek kami diposisikan secara strategis untuk melayani segmen pasar yang beragam dengan kualitas dan inovasi.' },
    },
    features: [
      {
        title: { en: 'Wide Product Portfolio', id: 'Portofolio Produk Luas' },
        description: { en: 'Serving customers from children to adults across multiple bicycle categories.', id: 'Melayani pelanggan dari anak-anak hingga orang dewasa di berbagai kategori sepeda.' },
      },
      {
        title: { en: 'Strong Brand Positioning', id: 'Posisi Merek yang Kuat' },
        description: { en: 'Each brand targets a unique market segment with a clear identity.', id: 'Setiap merek menargetkan segmen pasar yang unik dengan identitas yang jelas.' },
      },
      {
        title: { en: 'Growing Market Opportunity', id: 'Peluang Pasar yang Tumbuh' },
        description: { en: 'Increasing health awareness and environmentally friendly transportation continue driving demand.', id: 'Kesadaran kesehatan yang meningkat dan transportasi ramah lingkungan terus mendorong permintaan.' },
      },
    ],
  },
  brands: {
    sectionHeader: {
      heading: { en: 'Our Brands', id: 'Merek Kami' },
      description: { en: 'Three distinctive brands serving different market segments with shared commitment to quality and innovation.', id: 'Tiga merek khas yang melayani segmen pasar yang berbeda dengan komitmen bersama terhadap kualitas dan inovasi.' },
    },
    brandCards: [
      {
        name: 'United Bike',
        description: { en: 'Indonesia\'s leading bicycle brand recognized for quality, innovation, and performance.', id: 'Merek sepeda terkemuka Indonesia yang diakui untuk kualitas, inovasi, dan performa.' },
        highlights: [
          { en: 'Premium quality', id: 'Kualitas premium' },
          { en: 'Professional & enthusiast market', id: 'Pasar profesional & penggemar' },
          { en: 'Sports & mobility', id: 'Olahraga & mobilitas' },
          { en: 'Supports Indonesian athletes', id: 'Mendukung atlet Indonesia' },
          { en: 'International competition achievements', id: 'Pencapaian kompetisi internasional' },
        ],
        button: {
          label: { en: 'Visit', id: 'Kunjungi' },
          href: 'https://unitedbike.com',
          variant: 'primary',
          external: true,
        },
      },
      {
        name: 'Genio Bike',
        description: { en: 'Excellent value-for-money products with reliable quality for every family member.', id: 'Produk dengan nilai uang yang sangat baik dengan kualitas andal untuk setiap anggota keluarga.' },
        highlights: [
          { en: 'Family-oriented', id: 'Berorientasi keluarga' },
          { en: 'Baby stroller', id: 'Kereta bayi' },
          { en: 'Kids bike', id: 'Sepeda anak' },
          { en: 'Adult bicycles', id: 'Sepeda dewasa' },
          { en: 'Daily transportation', id: 'Transportasi harian' },
          { en: 'Fitness', id: 'Kebugaran' },
        ],
        button: {
          label: { en: 'Visit', id: 'Kunjungi' },
          href: 'https://genio.bike',
          variant: 'primary',
          external: true,
        },
      },
      {
        name: 'Avand Bike',
        description: { en: 'Designed for younger riders who value style, trends, and individuality.', id: 'Dirancang untuk pengendara muda yang menghargai gaya, tren, dan individualitas.' },
        highlights: [
          { en: 'Youth market', id: 'Pasar remaja' },
          { en: 'Fashion-oriented', id: 'Berorientasi fashion' },
          { en: 'Trendy design', id: 'Desain trendi' },
          { en: 'Competitive pricing', id: 'Harga kompetitif' },
          { en: 'Positive lifestyle', id: 'Gaya hidup positif' },
          { en: 'Environmental awareness', id: 'Kesadaran lingkungan' },
        ],
        button: {
          label: { en: 'Visit', id: 'Kunjungi' },
          href: 'https://avandbike.com',
          variant: 'primary',
          external: true,
        },
      },
    ],
  },
  featured: {
    sectionHeader: {
      heading: { en: 'Featured Products', id: 'Produk Unggulan' },
      description: { en: 'Explore our latest innovations across all brands, designed for performance, comfort, and style.', id: 'Jelajahi inovasi terbaru kami di semua merek, dirancang untuk performa, kenyamanan, dan gaya.' },
    },
    products: [
      { name: { en: 'UNITED STYGMA LITE', id: 'UNITED STYGMA LITE' }, description: { en: 'Performance bike', id: 'Sepeda performa' }, link: '' },
      { name: { en: 'GENIO VANGARD', id: 'GENIO VANGARD' }, description: { en: 'Family bike', id: 'Sepeda keluarga' }, link: '' },
      { name: { en: 'UNITED EPSILON', id: 'UNITED EPSILON' }, description: { en: 'Sports bike', id: 'Sepeda olahraga' }, link: '' },
      { name: { en: 'UNITED E-CLOVIS', id: 'UNITED E-CLOVIS' }, description: { en: 'Electric bike', id: 'Sepeda listrik' }, link: '' },
      { name: { en: 'UNITED IO', id: 'UNITED IO' }, description: { en: 'Urban bike', id: 'Sepeda urban' }, link: '' },
      { name: { en: 'UNITED E-TRIFOLD', id: 'UNITED E-TRIFOLD' }, description: { en: 'Electric bike', id: 'Sepeda listrik' }, link: '' },
      { name: { en: 'GENIO RUNES', id: 'GENIO RUNES' }, description: { en: 'Kids bike', id: 'Sepeda anak' }, link: '' },
      { name: { en: 'GENIO ZIPPY', id: 'GENIO ZIPPY' }, description: { en: 'Kids bike', id: 'Sepeda anak' }, link: '' },
    ],
  },
  marketPosition: {
    sectionHeader: {
      heading: { en: 'Market Position', id: 'Posisi Pasar' },
      description: { en: 'PT Bike Tbk provides products covering every customer lifecycle, from first rides to professional competition.', id: 'PT Bike Tbk menyediakan produk yang mencakup setiap siklus hidup pelanggan, dari perjalanan pertama hingga kompetisi profesional.' },
    },
    stages: [
      { title: { en: 'Children', id: 'Anak-anak' }, description: { en: 'First bikes and strollers for young riders', id: 'Sepeda pertama dan kereta bayi untuk pengendara muda' } },
      { title: { en: 'Family', id: 'Keluarga' }, description: { en: 'Bicycles for everyday family activities', id: 'Sepeda untuk aktivitas keluarga sehari-hari' } },
      { title: { en: 'Daily Mobility', id: 'Mobilitas Harian' }, description: { en: 'Transportation for work and school', id: 'Transportasi untuk bekerja dan sekolah' } },
      { title: { en: 'Sports', id: 'Olahraga' }, description: { en: 'Performance bikes for athletes', id: 'Sepeda performa untuk atlet' } },
      { title: { en: 'Professional', id: 'Profesional' }, description: { en: 'Competition-grade equipment', id: 'Perlengkapan kelas kompetisi' } },
    ],
  },
  cta: {
    title: { en: 'Explore Our Complete Product Portfolio', id: 'Jelajahi Portofolio Produk Lengkap Kami' },
    description: { en: 'Visit each brand website to discover the latest collections, specifications, and dealer information.', id: 'Kunjungi situs web setiap merek untuk menemukan koleksi terbaru, spesifikasi, dan informasi dealer.' },
    brandLinks: [
      { name: 'United Bike', website: 'https://unitedbike.com' },
      { name: 'Genio Bike', website: 'https://genio.bike' },
      { name: 'Avand Bike', website: 'https://avandbike.com' },
    ],
  },
}
