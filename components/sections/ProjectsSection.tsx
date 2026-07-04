import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EXPERIENCES_PROJECTS } from "@/lib/data/experiences";

export function ProjectsSection() {
  return (
    <section className="py-24 bg-primary-deep text-primary-foreground">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-accent-gold font-semibold mb-4">
              Featured Projects
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Landmark work that redefines what's possible.
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all"
          >
            View portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {EXPERIENCES_PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <img
                src={project.img}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition duration-700"
                loading="lazy"
                width={1200}
                height={900}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-90 mb-2">
                  <span>{project.category}</span>·<span>{project.year}</span>
                </div>
                <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                <p className="mt-1.5 text-sm opacity-80">Client: {project.client}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
