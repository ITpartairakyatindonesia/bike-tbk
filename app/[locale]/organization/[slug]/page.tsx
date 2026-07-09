import { notFound } from "next/navigation";
import { getAboutPage } from "@/lib/services/about-page";
import { ABOUT_PAGE } from "@/lib/data/about-page";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { pickLocalized } from "@/lib/utils";
import { urlFor } from "@/lib/cms/image";
import { getTranslations } from 'next-intl/server';

export async function generateStaticParams() {
  // Use static data for generateStaticParams since it runs at build time
  // and cannot use draftMode/sanityFetch
  return ABOUT_PAGE.management?.executives?.map((executive) => ({
    slug: executive.slug?.current,
  })) || [];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const aboutPage = await getAboutPage();
  const executive = aboutPage.management?.executives?.find((e) => e.slug?.current === slug);

  if (!executive) {
    return {
      title: "Executive Not Found",
    };
  }

  const position = pickLocalized(executive.position, locale);
  const biography = pickLocalized(executive.biography, locale);

  return {
    title: `${executive.name} - ${position} | PT Bike Tbk`,
    description: biography,
  };
}

export default async function ExecutiveDetailPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const aboutPage = await getAboutPage();
  const executive = aboutPage.management?.executives?.find((e) => e.slug?.current === slug);

  if (!executive) {
    notFound();
  }

  const t = await getTranslations('about.management');
  const position = pickLocalized(executive.position, locale);
  const biography = pickLocalized(executive.biography, locale);
  const imageUrl = executive.image?.url || (executive.image?.asset ? urlFor(executive.image).url() : undefined);

  return (
    <div>
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container-page">
          <Link
            href={`/${locale}/about`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('backToAbout')}
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {imageUrl ? (
                <div className="w-full md:w-64 h-64 md:h-80 rounded-2xl overflow-hidden bg-card border border-border">
                  <img
                    src={imageUrl}
                    alt={executive.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full md:w-64 h-64 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-border">
                  <span className="text-6xl font-bold text-primary">
                    {executive.name?.charAt(0) || '?'}
                  </span>
                </div>
              )}

              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-3">
                  {t('managementProfile')}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {executive.name}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {position}
                </p>

                <div className="prose prose-lg max-w-none">
                  <h3 className="text-lg font-semibold mb-3">{t('biography')}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {biography}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
