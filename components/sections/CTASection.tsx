import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="relative mx-4 sm:mx-0 rounded-3xl gradient-hero p-10 md:p-16 text-primary-foreground overflow-hidden shadow-elegant">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent-gold/20 blur-3xl" />
          <div className="relative grid md:grid-cols-[1.5fr_auto] items-center gap-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
                Together We Move Indonesia Forward.
              </h2>
              <p className="mt-4 text-lg opacity-85 max-w-xl">
                We believe every partnership begins with a conversation. Whether you're a business partner, investor, media representative, or customer, our team is ready to connect with you.
              </p>
            </div>
            <div className="flex flex-col md:flex-col lg:flex-row flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-primary-foreground text-primary-deep font-semibold hover:bg-accent-gold transition"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition"
              >
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
