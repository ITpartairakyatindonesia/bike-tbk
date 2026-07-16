import Link from "next/link";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import { pickLocalized } from "@/lib/utils";
import type { JobOpeningsSection } from "@/lib/types/sanity";

interface JobOpeningsProps {
  section?: JobOpeningsSection;
  locale: string;
}

export function JobOpenings({ section, locale }: JobOpeningsProps) {
  const jobs = section?.jobs ?? [];
  const validJobs = jobs.filter((job) => pickLocalized(job.title, locale));
  const emptyMessage = pickLocalized(section?.emptyMessage, locale);

  if (validJobs.length === 0 && !emptyMessage) {
    return null;
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="container-page">
        {validJobs.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-background p-12 text-center">
            <p className="text-muted-foreground text-lg">
              {emptyMessage}
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {validJobs.map((job, index) => {
              const title = pickLocalized(job.title, locale);
              if (!title) return null;
              const department = pickLocalized(job.department, locale);
              const location = pickLocalized(job.location, locale);
              const type = pickLocalized(job.type, locale);
              const description = pickLocalized(job.description, locale);
              const applyButton = job.applyButton;

              return (
                <div
                  key={job._key ?? `job-${index}`}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-card transition"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    {department && (
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4" />
                        {department}
                      </span>
                    )}
                    {location && (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        {location}
                      </span>
                    )}
                    {type && (
                      <span className="inline-flex items-center gap-1.5">
                        {type}
                      </span>
                    )}
                  </div>
                  {description && (
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {description}
                    </p>
                  )}
                  {applyButton && pickLocalized(applyButton.label, locale) && applyButton.href && (
                    applyButton.external ? (
                      <a
                        href={applyButton.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                      >
                        {pickLocalized(applyButton.label, locale)} <ArrowRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <Link
                        href={`/${locale}${applyButton.href}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                      >
                        {pickLocalized(applyButton.label, locale)} <ArrowRight className="h-4 w-4" />
                      </Link>
                    )
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
