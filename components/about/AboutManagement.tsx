import { ManagementCard } from "@/components/ManagementCard";
import { MANAGEMENT_EXECUTIVES } from "@/lib/data/management";

export function AboutManagement() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-page">
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Leadership
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Management Profile
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Meet the experienced leaders guiding PT Bike Tbk through strategic growth, innovation, and responsible corporate governance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {MANAGEMENT_EXECUTIVES.map((executive) => (
            <ManagementCard
              key={executive.slug}
              name={executive.name}
              position={executive.position}
              biography={executive.biography}
              slug={executive.slug}
              image={executive.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
