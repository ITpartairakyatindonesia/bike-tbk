"use client";

import { useTranslations } from 'next-intl';
import { pickLocalized } from '@/lib/utils';
import type { ContactInformationSection, ContactMapSection } from '@/lib/types/sanity';

interface ContactInformationProps {
  contactInformation?: ContactInformationSection;
  map?: ContactMapSection;
  locale: string;
}

function isValidGoogleMapsEmbedUrl(url: string): boolean {
  return url.startsWith('https://www.google.com/maps/embed?pb=');
}

export function ContactInformation({ contactInformation, map, locale }: ContactInformationProps) {
  const t = useTranslations('contact.information');

  const isValidEmbedUrl = map?.embedUrl && isValidGoogleMapsEmbedUrl(map.embedUrl);

  return (
    <div className="space-y-6">
      {contactInformation && (
        <div className="rounded-xl border border-border bg-muted/30 p-6 hover:bg-muted/50 transition-colors duration-200">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            {pickLocalized(contactInformation.title, locale) || t('headOffice')}
          </h3>
          <div className="space-y-2">
            <p className="text-foreground leading-relaxed">
              {pickLocalized(contactInformation.address, locale)}
            </p>
            {contactInformation.phone && (
              <p className="text-foreground leading-relaxed">
                Phone: {contactInformation.phone}
              </p>
            )}
            {contactInformation.email && (
              <p className="text-foreground leading-relaxed">
                Email: {contactInformation.email}
              </p>
            )}
            {contactInformation.contactPerson && (
              <p className="text-foreground leading-relaxed">
                {t('corporateSecretary')}: {contactInformation.contactPerson}
              </p>
            )}
          </div>
        </div>
      )}

      {map && (
        <div className="rounded-xl border border-border bg-muted/30 p-6 hover:bg-muted/50 transition-colors duration-200">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            {pickLocalized(map.title, locale)}
          </h3>
          <div className="relative rounded-xl overflow-hidden border border-border bg-background aspect-square">
            {isValidEmbedUrl ? (
              <iframe
                src={map.embedUrl}
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
        </div>
      )}
    </div>
  );
}
