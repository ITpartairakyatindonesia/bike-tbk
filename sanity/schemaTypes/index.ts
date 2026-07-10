import { type SchemaTypeDefinition } from 'sanity'
import siteSettings from './siteSettings'
import navigation from './navigation'
import homePage from './homePage'
import aboutPage from './aboutPage'
import productPage from './productPage'
import contactPage from './contactPage'
import news from './news'
import button from './objects/button'
import link from './objects/link'
import seo from './objects/seo'
import imageBlock from './objects/imageBlock'
import heroSection from './objects/heroSection'
import aboutPreviewSection from './objects/aboutPreviewSection'
import businessHighlightCard from './objects/businessHighlightCard'
import businessHighlightsSection from './objects/businessHighlightsSection'
import sustainabilitySection from './objects/sustainabilitySection'
import sustainabilityCard from './objects/sustainabilityCard'
import brandCard from './objects/brandCard'
import productCard from './objects/productCard'
import milestoneCard from './objects/milestoneCard'
import latestNewsSection from './objects/latestNewsSection'
import ctaSection from './objects/ctaSection'
import brandsSection from './objects/brandsSection'
import milestonesSection from './objects/milestonesSection'
import sectionHeader from './objects/sectionHeader'
import socialLink from './objects/socialLink'
import localizedString from './objects/localizedString'
import localizedText from './objects/localizedText'
import localizedSiteSettingsContent from './objects/localizedSiteSettingsContent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    navigation,
    homePage,
    aboutPage,
    productPage,
    contactPage,
    news,
    button,
    link,
    seo,
    imageBlock,
    heroSection,
    aboutPreviewSection,
    businessHighlightCard,
    businessHighlightsSection,
    sustainabilitySection,
    sustainabilityCard,
    brandCard,
    productCard,
    milestoneCard,
    latestNewsSection,
    ctaSection,
    brandsSection,
    milestonesSection,
    sectionHeader,
    socialLink,
    localizedString,
    localizedText,
    localizedSiteSettingsContent,
  ],
}
