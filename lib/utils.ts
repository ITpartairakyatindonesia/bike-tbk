import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { LocalizedString, LocalizedText } from "@/lib/types/sanity";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function pickLocalized(value?: LocalizedString | LocalizedText | string | null, locale?: string): string {
  if (!value) return "";
  if (typeof value === 'string') return value;
  if (locale === 'id' && value.id) return value.id;
  return value.en ?? "";
}
