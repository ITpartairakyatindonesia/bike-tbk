import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LATEST_NEWS } from "@/lib/data/news";

export function NewsSection() {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Latest News
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Updates from SBI.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {LATEST_NEWS.map((article) => (
            <article
              key={article._id || article.slug}
              className="group bg-card rounded-3xl overflow-hidden shadow-card border border-border hover:shadow-elegant transition-all"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                  loading="lazy"
                  width={800}
                  height={450}
                />
              </div>
              <div className="p-7">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  {article.date}
                </div>
                <h3 className="text-xl font-bold leading-tight mb-4">
                  {article.title}
                </h3>
                <Link
                  href={article.url || "#"}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
