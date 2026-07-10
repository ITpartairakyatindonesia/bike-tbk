import { useTranslations } from 'next-intl';
import type { ProductIntroductionSection } from "@/lib/types/sanity";
import { pickLocalized } from "@/lib/utils";

interface ProductsIntroductionProps {
  introduction?: ProductIntroductionSection;
  locale: string;
}

export function ProductsIntroduction({ introduction, locale }: ProductsIntroductionProps) {
  const t = useTranslations('products.introduction');

  const title = pickLocalized(introduction?.sectionHeader?.heading, locale) || t('title');
  const paragraphs = introduction?.paragraphs || [];
  const statCards = introduction?.statCards || [];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {title}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {paragraphs.length > 0 ? (
                paragraphs.map((para, index) => (
                  <p key={index}>
                    {pickLocalized(para, locale)}
                  </p>
                ))
              ) : (
                <>
                  <p>{t('paragraph1')}</p>
                  <p>{t('paragraph2')}</p>
                  <p>{t('paragraph3')}</p>
                  <p>{t('paragraph4')}</p>
                </>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {statCards.length > 0 ? (
              statCards.map((card, index) => (
                <div key={index} className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="text-3xl font-bold text-primary mb-2">{pickLocalized(card.value, locale)}</div>
                  <div className="text-sm text-muted-foreground">{pickLocalized(card.label, locale)}</div>
                </div>
              ))
            ) : (
              <>
                <div className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="text-3xl font-bold text-primary mb-2">{t('productCategories')}</div>
                  <div className="text-sm text-muted-foreground">{t('productCategories')}</div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="text-3xl font-bold text-primary mb-2">{t('allAges')}</div>
                  <div className="text-sm text-muted-foreground">{t('toddlersToAdults')}</div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="text-3xl font-bold text-primary mb-2">{t('transport')}</div>
                  <div className="text-sm text-muted-foreground">{t('lifestyle')}</div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="text-3xl font-bold text-primary mb-2">{t('sustainable')}</div>
                  <div className="text-sm text-muted-foreground">{t('mobility')}</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
