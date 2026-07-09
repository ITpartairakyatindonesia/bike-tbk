"use client";

import { useTranslations } from 'next-intl';
import { CONTACT_INFORMATION, CONTACT_MAP } from "@/lib/data/contact";

export function ContactInformation() {
  const t = useTranslations('contact.information');

  return (
    <div className="space-y-6">
      {CONTACT_INFORMATION.map((info, index) => (
        <div
          key={index}
          className="rounded-xl border border-border bg-muted/30 p-6 hover:bg-muted/50 transition-colors duration-200"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            {info.title === 'Head Office' ? t('headOffice') : info.title === 'Corporate Secretary' ? t('corporateSecretary') : info.title}
          </h3>
          <div className="space-y-2">
            {info.lines.map((line, lineIndex) => (
              <p key={lineIndex} className="text-foreground leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </div>
      ))}

      <div className="rounded-xl border border-border bg-muted/30 p-6 hover:bg-muted/50 transition-colors duration-200">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          {CONTACT_MAP.title}
        </h3>
        <div className="relative rounded-xl overflow-hidden border border-border bg-background h-64">
          {CONTACT_MAP.embedUrl ? (
            <iframe
              src={CONTACT_MAP.embedUrl}
              title="Office location"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center text-muted-foreground">
              <div className="text-center">
                <p className="font-semibold text-sm">Google Maps embed will appear here</p>
                <p className="text-xs mt-1">URL to be added later</p>
              </div>
            </div>
          )}
        </div>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-primary hover:text-primary/80 mt-4 transition-colors duration-200"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );
}
