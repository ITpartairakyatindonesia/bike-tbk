import Link from "next/link";
import { CONTACT_ITEMS } from "@/lib/data/contact";

export function ContactSection() {
  return (
    <section className="pb-24">
      <div className="container-page grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CONTACT_ITEMS.map((item) => (
          <Link
            href="/contact"
            key={item.title}
            className="group flex items-start gap-5 p-8 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-card transition"
          >
            <div className="h-12 w-12 shrink-0 grid place-items-center rounded-xl bg-primary-soft text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
              <item.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                {item.title}
              </div>
              <div className="mt-1.5 font-semibold text-foreground leading-snug">
                {item.value}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
