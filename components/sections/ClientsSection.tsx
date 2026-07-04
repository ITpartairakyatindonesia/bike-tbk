import { ABOUT_CLIENTS } from "@/lib/data/about";

export function ClientsSection() {
  return (
    <section className="py-16 border-y border-border">
      <div className="container-page">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
          Trusted by leading organizations worldwide
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {ABOUT_CLIENTS.map((client) => (
            <div
              key={client}
              className="text-center font-display font-bold text-muted-foreground/70 hover:text-primary transition tracking-wider text-sm"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
