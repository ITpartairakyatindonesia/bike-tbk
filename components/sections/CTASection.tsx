import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="relative rounded-3xl gradient-hero p-10 md:p-16 text-primary-foreground overflow-hidden shadow-elegant">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent-gold/20 blur-3xl" />
          <div className="relative grid md:grid-cols-[1.5fr_auto] items-center gap-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
                Ready to build the next chapter together?
              </h2>
              <p className="mt-4 text-lg opacity-85 max-w-xl">
                Partner with a group whose scale, discipline and integrity have been trusted for over four decades.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-primary-foreground text-primary-deep font-semibold hover:bg-accent-gold transition"
              >
                Start a conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
