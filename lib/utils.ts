import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { LocalizedString, LocalizedText } from "@/lib/types/sanity";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function pickLocalized(value?: LocalizedString | LocalizedText | string | null, locale?: string): string {
  if (!value) return "";
  if (typeof value === 'string') {
    const trimmed = value.trim();
    return trimmed || "";
  }
  
  // Helper to check if a value is non-empty after trimming
  const hasValue = (val?: string): boolean => val != null && val.trim() !== "";
  
  // Fallback chain: locale → en → id → zh → ""
  if (locale === 'id' && hasValue(value.id)) return value.id.trim();
  if (locale === 'zh' && value.zh && hasValue(value.zh)) return value.zh.trim();
  if (hasValue(value.en)) return value.en.trim();
  if (hasValue(value.id)) return value.id.trim();
  if (value.zh && hasValue(value.zh)) return value.zh.trim();
  
  return "";
}

export function hasLocalizedContent(value?: LocalizedString | LocalizedText | null): boolean {
  if (!value) return false;
  if (typeof value === 'string') return (value as string).trim() !== "";
  
  const hasValue = (val?: string): boolean => val != null && val.trim() !== "";
  
  return hasValue(value.en) || hasValue(value.id) || Boolean(value.zh && hasValue(value.zh));
}
