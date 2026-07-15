/**
 * Script to add `zh` field to all existing localizedString and localizedText fields
 * 
 * This script:
 * - Adds `zh` field to all existing localizedString/localizedText objects
 * - Sets `zh` to the value from zh.json translations where available
 * - Falls back to `en` (English) value if translation not found
 * - Does not overwrite existing `zh` values if they already exist
 * - Does not delete any existing data
 * 
 * Usage:
 * npx tsx scripts/add-zh-to-documents.ts
 */

import { createClient } from '@sanity/client'
import { type LocalizedString, type LocalizedText } from '../lib/types/sanity'
import zhTranslations from '../messages/zh.json'

const client = createClient({
  projectId: '24opaw9z',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || '',
})

// Mapping of Sanity document paths to zh.json paths
// Format: { documentType: { sanityEnginePath: 'zh.json.path' } }
const translationMappings: Record<string, Record<string, string>> = {
  siteSettings: {
    'localizedContent.tagline': 'navigation.getInTouch',
    'localizedContent.footerDescription': 'footer.copyright',
  },
  navigation: {
    'mainNavigation[].label': 'navigation.getInTouch',
    'footerCompanyLinks[].label': 'footer.company',
    'footerResourceLinks[].label': 'footer.resources',
  },
  homePage: {
    'hero.eyebrow': 'common.loading',
    'hero.title': 'metadata.home.title',
    'hero.subtitle': 'metadata.home.description',
  },
  aboutPage: {
    'hero.eyebrow': 'about.hero.eyebrow',
    'hero.title': 'about.hero.headline',
    'hero.subtitle': 'about.hero.description',
  },
  contactPage: {
    'hero.eyebrow': 'contact.hero.eyebrow',
    'hero.title': 'contact.hero.heading',
    'hero.description': 'contact.hero.description',
  },
  productPage: {
    'hero.eyebrow': 'products.hero.eyebrow',
    'hero.title': 'products.hero.headline',
    'hero.subtitle': 'products.hero.description',
  },
  investorPage: {
    'hero.label': 'metadata.investor.title',
    'hero.title': 'metadata.investor.description',
  },
}

// Helper function to get value from nested object using dot notation
const getNestedValue = (obj: any, path: string): any => {
  return path.split('.').reduce((current, key) => current?.[key], obj)
}

// Helper function to set value in nested object using dot notation
const setNestedValue = (obj: any, path: string, value: any): void => {
  const keys = path.split('.')
  const lastKey = keys.pop()!
  const target = keys.reduce((current, key) => {
    if (!current[key]) current[key] = {}
    return current[key]
  }, obj)
  target[lastKey] = value
}

// Helper function to get Chinese translation from zh.json
const getChineseTranslation = (docType: string, fieldPath: string, enValue: string): string => {
  const mappings = translationMappings[docType]
  if (!mappings) return enValue
  
  // Try exact match first
  const exactPath = mappings[fieldPath]
  if (exactPath) {
    const translation = getNestedValue(zhTranslations, exactPath)
    if (translation && typeof translation === 'string') return translation
  }
  
  // Try array pattern match (e.g., 'mainNavigation[].label')
  for (const [pattern, jsonPath] of Object.entries(mappings)) {
    if (pattern.includes('[]')) {
      const patternWithoutArray = pattern.replace('[]', '')
      if (fieldPath.startsWith(patternWithoutArray)) {
        const translation = getNestedValue(zhTranslations, jsonPath)
        if (translation && typeof translation === 'string') return translation
      }
    }
  }
  
  // Fallback to English value
  return enValue
}

// Helper function to add zh field to localized objects
const addZhField = (obj: any, docType: string, currentPath: string = ''): any => {
  if (!obj || typeof obj !== 'object') return obj
  
  // If this is a localizedString or localizedText object
  if (obj.hasOwnProperty('en') && obj.hasOwnProperty('id')) {
    // If zh doesn't exist, add it with translation from zh.json or fallback to en
    if (!obj.hasOwnProperty('zh')) {
      const zhValue = getChineseTranslation(docType, currentPath, obj.en || '')
      return {
        ...obj,
        zh: zhValue
      }
    }
    return obj
  }
  
  // Recursively traverse nested objects
  if (Array.isArray(obj)) {
    return obj.map((item, index) => addZhField(item, docType, currentPath))
  }
  
  const result: any = {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newPath = currentPath ? `${currentPath}.${key}` : key
      result[key] = addZhField(obj[key], docType, newPath)
    }
  }
  
  return result
}

// Process a document
const processDocument = async (doc: any, docType: string) => {
  const updatedDoc = addZhField(doc, docType)
  
  // Check if any changes were made
  if (JSON.stringify(doc) !== JSON.stringify(updatedDoc)) {
    console.log(`Updating document: ${doc._id} (${doc._type})`)
    
    try {
      await client.createOrReplace({
        ...updatedDoc,
        _id: doc._id
      })
      console.log(`✓ Updated: ${doc._id}`)
    } catch (error) {
      console.error(`✗ Failed to update ${doc._id}:`, error)
    }
  }
}

// Main function
const main = async () => {
  console.log('Starting migration to add zh field to localized content...')
  
  const documentTypes = ['siteSettings', 'navigation', 'homePage', 'aboutPage', 'productPage', 'contactPage', 'investorPage', 'news']
  
  for (const docType of documentTypes) {
    console.log(`\nProcessing ${docType}...`)
    
    try {
      const documents = await client.fetch(`*[_type == "${docType}"]`)
      
      if (documents.length === 0) {
        console.log(`No ${docType} documents found`)
        continue
      }
      
      console.log(`Found ${documents.length} ${docType} document(s)`)
      
      for (const doc of documents) {
        await processDocument(doc, docType)
      }
    } catch (error) {
      console.error(`Error fetching ${docType}:`, error)
    }
  }
  
  console.log('\nMigration completed!')
}

main().catch(console.error)
