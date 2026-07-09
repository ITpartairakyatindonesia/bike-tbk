import { ProductsHero } from "@/components/products/ProductsHero";
import { ProductsIntroduction } from "@/components/products/ProductsIntroduction";
import { ProductsWhy } from "@/components/products/ProductsWhy";
import { ProductsBrands } from "@/components/products/ProductsBrands";
import { ProductsFeatured } from "@/components/products/ProductsFeatured";
import { ProductsMarketPosition } from "@/components/products/ProductsMarketPosition";
import { ProductsCTA } from "@/components/products/ProductsCTA";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('metadata.products');
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const canonicalUrl = `${baseUrl}/${locale}/products`;
  
  const locales = ['en', 'id'] as const;
  const alternates = locales.map(loc => ({
    hrefLang: loc,
    href: `${baseUrl}/${loc}/products`,
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
      locale: locale === 'id' ? 'id_ID' : 'en_US',
    },
    twitter: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default function ProductsPage() {
  return (
    <div>
      <ProductsHero />
      <ProductsIntroduction />
      <ProductsWhy />
      <ProductsBrands />
      <ProductsFeatured />
      <ProductsMarketPosition />
      <ProductsCTA />
    </div>
  );
}
