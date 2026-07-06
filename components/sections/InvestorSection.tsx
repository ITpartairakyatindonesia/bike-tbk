import { Download } from "lucide-react";
import {
  INVESTOR_CARDS,
  INVESTOR_CONTENT,
} from "@/lib/data/investor";

export function InvestorSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            {INVESTOR_CONTENT.label}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {INVESTOR_CONTENT.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {INVESTOR_CONTENT.description}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INVESTOR_CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-card rounded-3xl p-7 border border-border shadow-card hover:shadow-elegant transition"
            >
              <div className="h-12 w-12 grid place-items-center rounded-2xl bg-primary-soft text-primary mb-5">
                <card.icon className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-sm text-muted-foreground mb-5">
                {card.description}
              </p>
              <ul className="space-y-2">
                {card.documents.map((doc) => (
                  <li key={doc._id || doc.title}>
                    <a
                      href={doc.fileUrl || doc.file?.asset?.url || "#"}
                      download
                      className="group flex items-center justify-between gap-3 p-3 rounded-xl bg-secondary hover:bg-primary/10 transition"
                    >
                      <span className="text-sm font-medium line-clamp-1">
                        {doc.title}
                      </span>
                      <Download className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
