import type { LocalizedString, LocalizedText } from '@/lib/types/sanity'

export const ensureLocalizedString = (
  value?: LocalizedString | string | null,
  fallback?: LocalizedString | null
) => {
  if (typeof value === 'string') {
    return { en: value, id: value }
  }
  return {
    en: value?.en ?? fallback?.en ?? '',
    id: value?.id ?? fallback?.id ?? '',
  }
}

export const ensureLocalizedText = (
  value?: LocalizedText | string | null,
  fallback?: LocalizedText | null
) => {
  if (typeof value === 'string') {
    return { en: value, id: value }
  }
  return {
    en: value?.en ?? fallback?.en ?? '',
    id: value?.id ?? fallback?.id ?? '',
  }
}

export const normalizeSectionHeader = (
  value?: { eyebrow?: LocalizedString | string; heading?: LocalizedString | string; description?: LocalizedText | string } | null,
  fallback?: { eyebrow?: LocalizedString; heading?: LocalizedString; description?: LocalizedText } | null
) => ({
  eyebrow: ensureLocalizedString(value?.eyebrow, fallback?.eyebrow),
  heading: ensureLocalizedString(value?.heading, fallback?.heading),
  description: ensureLocalizedText(value?.description, fallback?.description),
})

export const normalizeButton = (
  value?: { label?: LocalizedString | string; href?: string; external?: boolean } | null,
  fallback?: { label?: LocalizedString; href?: string; external?: boolean } | null
) => {
  if (!value && !fallback) return undefined
  const base = value ?? fallback
  return {
    label: ensureLocalizedString(base?.label, fallback?.label),
    href: base?.href ?? fallback?.href ?? '#',
    external: base?.external ?? fallback?.external,
  }
}
