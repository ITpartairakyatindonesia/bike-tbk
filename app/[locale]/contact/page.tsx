import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInformation } from "@/components/contact/ContactInformation";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('metadata.contact');
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const canonicalUrl = `${baseUrl}/${locale}/contact`;
  
  const locales = ['en', 'id'] as const;
  const alternates = locales.map(loc => ({
    hrefLang: loc,
    href: `${baseUrl}/${loc}/contact`,
  }));

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(alternates.map(a => [a.hrefLang, a.href])),
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: canonicalUrl,
      locale: locale === 'id' ? 'id_ID' : 'en_US',
    },
    twitter: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default function ContactPage() {
  return (
    <div>
      <section className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container-page">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Contact Us
          </h1>
          <p className="text-center text-muted-foreground text-lg mb-14 max-w-2xl mx-auto">
            Get in touch with our team. We&apos;re here to help you with any questions about our business, investments, or partnership opportunities.
          </p>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-elegant">
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
              <div className="flex-1">
                <ContactForm />
              </div>
              <div className="flex-1">
                <ContactInformation />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
