"use client";

import type { AboutVisionMissionSection } from "@/lib/types/sanity";
import { pickLocalized } from "@/lib/utils";

interface AboutVisionMissionProps {
  visionMission?: AboutVisionMissionSection;
  locale: string;
}

export function AboutVisionMission({ visionMission, locale }: AboutVisionMissionProps) {
  const eyebrow = pickLocalized(visionMission?.sectionHeader?.eyebrow, locale);
  const visionLabel = pickLocalized(visionMission?.vision?.label, locale);
  const visionStatement = pickLocalized(visionMission?.vision?.statement, locale);
  const missionTitle = pickLocalized(visionMission?.mission?.title, locale);
  const missionItems = visionMission?.mission?.items || [];

  return (
    <section className="py-16 md:py-24 bg-primary-deep text-primary-foreground">
      <div className="container-page">
        <div className="text-xs uppercase tracking-[0.25em] text-accent-gold font-semibold mb-4">
          {eyebrow}
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl shadow-soft p-8">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              {visionLabel}
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl font-display font-semibold leading-snug">
              {visionStatement}
            </p>
          </div>

          <div className="rounded-2xl shadow-soft p-8">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              {missionTitle}
            </h2>
            <ol className="space-y-6">
              {missionItems.map((item, index) => (
                <li
                  key={index}
                  className="group grid grid-cols-[auto_1fr] gap-5 items-start border-b border-primary-foreground/10 pb-6 last:border-0 last:pb-0"
                >
                  <span className="text-2xl md:text-3xl font-display font-bold text-accent-gold/80 group-hover:text-accent-gold transition w-10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-1">
                      {pickLocalized(item.title, locale)}
                    </h3>
                    <p className="text-sm md:text-base opacity-80 leading-relaxed">
                      {pickLocalized(item.description, locale)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
