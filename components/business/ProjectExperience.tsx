"use client";

import { pickLocalized } from "@/lib/utils";
import { urlFor } from "@/lib/cms/image";
import type { ProjectExperienceSection, ProjectExperienceItem } from "@/lib/types/sanity";

export type { ProjectExperienceSection, ProjectExperienceItem };

interface ProjectExperienceProps {
  data?: ProjectExperienceSection;
  locale: string;
}

const FALLBACK_IMAGES = [
  "/project-1.jpg",
  "/project-2.jpg",
  "/project-3.jpg",
  "/project-4.jpg",
  "/project-5.jpg",
];

export function ProjectExperience({ data, locale }: ProjectExperienceProps) {
  const eyebrow = pickLocalized(data?.sectionHeader?.eyebrow, locale);
  const heading = pickLocalized(data?.sectionHeader?.heading, locale);
  const description = pickLocalized(data?.sectionHeader?.description, locale);
  const projects = data?.projects || [];

  if (!heading) return null;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            {heading}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const title = pickLocalized(project.title, locale);
            if (!title) return null;
            const location = pickLocalized(project.location, locale);
            const category = pickLocalized(project.category, locale);
            return (
              <article
                key={project._key ?? `project-${index}`}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-200"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted/30">
                  <img
                    src={
                      project.image?.asset
                        ? urlFor(project.image).url()
                        : (FALLBACK_IMAGES[index] ?? "/project-1.jpg")
                    }
                    alt={title}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                    loading="lazy"
                    width={1200}
                    height={800}
                  />
                </div>
                <div className="p-6">
                  {category && (
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full mb-3">
                      {category}
                    </span>
                  )}
                  <h3 className="text-xl font-bold">{title}</h3>
                  {location && (
                    <p className="mt-1 text-sm text-muted-foreground font-medium">
                      {location}
                    </p>
                  )}
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {pickLocalized(project.description, locale)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
