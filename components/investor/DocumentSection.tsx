"use client";

import { Download, FileText, type LucideIcon } from "lucide-react";
import { pickLocalized } from "@/lib/utils";
import { urlFor } from "@/lib/cms/image";
import type { InvestorDocumentSection, InvestorDocumentItem } from "@/lib/types/sanity";

interface DocumentSectionProps {
  section?: InvestorDocumentSection;
  locale: string;
  bgClass?: string;
}

function formatFileSize(bytes?: number): string {
  if (!bytes) return "";
  const units = ["B", "KB", "MB", "GB"];
  let size = bytes;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  return `${size.toFixed(1)} ${units[unitIndex]}`;
}

export function DocumentSection({ section, locale, bgClass = "bg-background" }: DocumentSectionProps) {
  const eyebrow = pickLocalized(section?.sectionHeader?.eyebrow, locale);
  const heading = pickLocalized(section?.sectionHeader?.heading, locale);
  const description = pickLocalized(section?.sectionHeader?.description, locale);
  const documents = section?.documents || [];

  if (!heading && documents.length === 0) return null;

  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            {heading}
          </h2>
          {description && (
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc: InvestorDocumentItem, index) => {
            const title = pickLocalized(doc.title, locale);
            if (!title) return null;
            const category = pickLocalized(doc.category, locale);
            const docDescription = pickLocalized(doc.description, locale);
            const fileUrl = doc.file?.asset?.url || "#";
            const fileSize = formatFileSize(doc.file?.asset?.size);
            const thumbnailUrl = doc.thumbnail?.asset ? urlFor(doc.thumbnail).url() : null;
            const FileIcon: LucideIcon = FileText;

            return (
              <div
                key={doc._key ?? `doc-${index}`}
                className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
              >
                {thumbnailUrl ? (
                  <div className="aspect-[4/3] overflow-hidden bg-muted/30">
                    <img
                      src={thumbnailUrl}
                      alt={title}
                      className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] grid place-items-center bg-primary-soft/30">
                    <FileIcon className="h-16 w-16 text-primary/40" />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    {category && (
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {category}
                      </span>
                    )}
                    {doc.year && (
                      <span className="text-xs text-muted-foreground font-medium">
                        {doc.year}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{title}</h3>
                  {docDescription && (
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {docDescription}
                    </p>
                  )}
                  <a
                    href={fileUrl}
                    download
                    className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full bg-primary/10 text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Download className="h-4 w-4" />
                    {fileSize ? `${fileSize}` : ""}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
