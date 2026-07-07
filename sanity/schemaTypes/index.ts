import { type SchemaTypeDefinition } from 'sanity'
import siteSettings from './siteSettings'
import navigation from './navigation'
import homePage from './homePage'
import button from './objects/button'
import link from './objects/link'
import seo from './objects/seo'
import imageBlock from './objects/imageBlock'
import heroSection from './objects/heroSection'
import aboutPreviewSection from './objects/aboutPreviewSection'
import businessHighlightCard from './objects/businessHighlightCard'
import businessHighlightsSection from './objects/businessHighlightsSection'
import sustainabilitySection from './objects/sustainabilitySection'
import latestNewsSection from './objects/latestNewsSection'
import ctaSection from './objects/ctaSection'
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
    button,
    link,
    seo,
    imageBlock,
    heroSection,
    aboutPreviewSection,
    businessHighlightCard,
    businessHighlightsSection,
    sustainabilitySection,
    latestNewsSection,
    ctaSection,
    sectionHeader,
    socialLink,
    localizedString,
    localizedText,
    localizedSiteSettingsContent,
  ],
}
