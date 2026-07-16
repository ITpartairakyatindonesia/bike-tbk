"use client";

import { Calendar, Building2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { urlFor } from "@/lib/cms/image";
import { pickLocalized } from "@/lib/utils";
import type { MilestonesSection } from "@/lib/types/sanity";

import "swiper/css";

interface TimelineSectionProps {
  milestonesSection: MilestonesSection;
  locale: string;
}

export function TimelineSection({ milestonesSection, locale }: TimelineSectionProps) {

  const eyebrow = pickLocalized(milestonesSection?.sectionHeader?.eyebrow, locale);
  const heading = pickLocalized(milestonesSection?.sectionHeader?.heading, locale);
  const description = pickLocalized(milestonesSection?.sectionHeader?.description, locale);

  const validCards = milestonesSection?.cards?.filter((card) => card.year) || [];

  if (!eyebrow && !heading && !description && validCards.length === 0) return null;

  return (
    <section className="py-24 bg-primary-deep text-primary-foreground">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.25em] text-accent-gold font-semibold mb-4">
              {eyebrow}
            </div>
          )}
          {heading && (
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {heading}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-lg opacity-85 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="relative">
          {/* Horizontal timeline line behind the calendar icons */}
          <div className="hidden md:block absolute top-6 left-12 right-12 h-0.5 bg-accent-gold z-0" />

          <Swiper
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="timeline-swiper"
          >
            {validCards.map((card, index) => {
              const title = pickLocalized(card.title, locale);
              const description = pickLocalized(card.description, locale);
              if (!card.year) return null;

              return (
                <SwiperSlide key={card._key || `${card.year}-${index}`} className="h-auto flex">
                  <div className="relative h-full w-full flex flex-col pt-12">
                    {/* Calendar icon on the timeline line */}
                    <div className="flex justify-center mb-8">
                      <div className="relative z-10 h-12 w-12 rounded-full bg-accent-gold text-primary-deep grid place-items-center shadow-soft">
                        <Calendar className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Milestone card */}
                    <div className="relative flex-1 bg-primary-foreground text-foreground rounded-2xl p-7 text-center shadow-card hover:shadow-elegant transition">
                      {/* Upward triangle pointer */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-primary-foreground" />

                      {card.image?.asset ? (
                        <div className="h-16 w-16 mx-auto mb-4 grid place-items-center rounded-2xl bg-primary-soft overflow-hidden">
                          <img
                            src={urlFor(card.image).url()}
                            alt={card.year}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="h-16 w-16 mx-auto mb-4 grid place-items-center rounded-2xl bg-primary-soft text-primary">
                          <Building2 className="h-8 w-8" />
                        </div>
                      )}
                      <div className="text-2xl font-bold text-primary mb-3">
                        {card.year}
                      </div>
                      {title && (
                        <p className="text-sm font-semibold text-foreground mb-2">
                          {title}
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .timeline-swiper .swiper-wrapper {
          align-items: stretch !important;
        }
        .timeline-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </section>
  );
}
