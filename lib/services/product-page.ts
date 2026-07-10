import { sanityFetch } from '@/sanity/lib/live'
import { PRODUCT_PAGE_QUERY } from '@/lib/cms/queries'
import { PRODUCT_PAGE } from '@/lib/data/product-page'
import { ensureLocalizedString, ensureLocalizedText, normalizeSectionHeader, normalizeButton } from '@/lib/utils/localization'
import type {
  ProductPage,
  LocalizedString,
  LocalizedText,
  ProductHeroSection,
  ProductIntroductionSection,
  ProductWhySection,
  ProductBrandsSection,
  ProductFeaturedSection,
  ProductMarketPositionSection,
  ProductCTASection,
  SanityImage,
} from '@/lib/types/sanity'

export async function getProductPage(): Promise<ProductPage> {
  let cmsProductPage

  try {
    const result = await sanityFetch({
      query: PRODUCT_PAGE_QUERY,
      tags: ['product-page'],
    })
    cmsProductPage = result.data
  } catch (error) {
    console.warn('Failed to fetch Product Page from Sanity, using fallback values:', error)
    return PRODUCT_PAGE
  }

  if (!cmsProductPage) {
    console.warn('No Product Page document found in Sanity, using fallback values')
    return PRODUCT_PAGE
  }

  const page = cmsProductPage as ProductPage

  const hero: ProductHeroSection = {
    eyebrow: ensureLocalizedString(page.hero?.eyebrow, PRODUCT_PAGE.hero?.eyebrow),
    title: ensureLocalizedString(page.hero?.title, PRODUCT_PAGE.hero?.title),
    subtitle: ensureLocalizedText(page.hero?.subtitle, PRODUCT_PAGE.hero?.subtitle),
    backgroundImage: page.hero?.backgroundImage ?? PRODUCT_PAGE.hero?.backgroundImage,
    primaryButton: normalizeButton(page.hero?.primaryButton, PRODUCT_PAGE.hero?.primaryButton),
    secondaryButton: normalizeButton(page.hero?.secondaryButton, PRODUCT_PAGE.hero?.secondaryButton),
  }

  const introduction: ProductIntroductionSection = {
    sectionHeader: normalizeSectionHeader(
      page.introduction?.sectionHeader,
      PRODUCT_PAGE.introduction?.sectionHeader
    ),
    paragraphs: (page.introduction?.paragraphs || PRODUCT_PAGE.introduction?.paragraphs || []).map((para: LocalizedText | string) =>
      ensureLocalizedText(para)
    ),
    statCards: (page.introduction?.statCards || PRODUCT_PAGE.introduction?.statCards || []).map((card: { value?: LocalizedString | string; label?: LocalizedString | string }) => ({
      value: ensureLocalizedString(card.value),
      label: ensureLocalizedString(card.label),
    })),
  }

  const why: ProductWhySection = {
    sectionHeader: normalizeSectionHeader(
      page.why?.sectionHeader,
      PRODUCT_PAGE.why?.sectionHeader
    ),
    features: (page.why?.features || PRODUCT_PAGE.why?.features || []).map((feature: { title?: LocalizedString | string; description?: LocalizedText | string }) => ({
      title: ensureLocalizedString(feature.title),
      description: ensureLocalizedText(feature.description),
    })),
  }

  const brands: ProductBrandsSection = {
    sectionHeader: normalizeSectionHeader(
      page.brands?.sectionHeader,
      PRODUCT_PAGE.brands?.sectionHeader
    ),
    brandCards: (page.brands?.brandCards || PRODUCT_PAGE.brands?.brandCards || []).map((brand: { name?: string; description?: LocalizedText | string; highlights?: (LocalizedString | string)[]; button?: any }) => ({
      name: brand.name,
      description: ensureLocalizedText(brand.description),
      highlights: (brand.highlights || []).map((highlight: LocalizedString | string) => ensureLocalizedString(highlight)),
      button: normalizeButton(brand.button, PRODUCT_PAGE.brands?.brandCards?.[0]?.button),
    })),
  }

  const featured: ProductFeaturedSection = {
    sectionHeader: normalizeSectionHeader(
      page.featured?.sectionHeader,
      PRODUCT_PAGE.featured?.sectionHeader
    ),
    products: (page.featured?.products || PRODUCT_PAGE.featured?.products || []).map((product: { image?: SanityImage | null; name?: LocalizedString | string; description?: LocalizedText | string; link?: string }) => ({
      image: product.image || undefined,
      name: ensureLocalizedString(product.name),
      description: ensureLocalizedText(product.description),
      link: product.link,
    })),
  }

  const marketPosition: ProductMarketPositionSection = {
    sectionHeader: normalizeSectionHeader(
      page.marketPosition?.sectionHeader,
      PRODUCT_PAGE.marketPosition?.sectionHeader
    ),
    stages: (page.marketPosition?.stages || PRODUCT_PAGE.marketPosition?.stages || []).map((stage: { title?: LocalizedString | string; description?: LocalizedText | string }) => ({
      title: ensureLocalizedString(stage.title),
      description: ensureLocalizedText(stage.description),
    })),
  }

  const cta: ProductCTASection = {
    title: ensureLocalizedString(page.cta?.title, PRODUCT_PAGE.cta?.title),
    description: ensureLocalizedText(page.cta?.description, PRODUCT_PAGE.cta?.description),
    brandLinks: (page.cta?.brandLinks || PRODUCT_PAGE.cta?.brandLinks || []).map((link: { name?: string; website?: string }) => ({
      name: link.name,
      website: link.website,
    })),
  }

  return {
    ...PRODUCT_PAGE,
    _id: page._id ?? PRODUCT_PAGE._id,
    _type: page._type ?? PRODUCT_PAGE._type,
    seo: page.seo ?? PRODUCT_PAGE.seo,
    hero,
    introduction,
    why,
    brands,
    featured,
    marketPosition,
    cta,
  }
}
