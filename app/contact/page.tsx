import { ContactSection } from "@/components/sections/ContactSection";
import { CONTACT_INFO } from "@/lib/data/contact";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Contact - Bike",
  description: "Get in touch with Bike. Visit our headquarters, call us, or send an email to start a conversation.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="py-24">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Let's start a conversation.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Whether you're interested in partnership opportunities, investment inquiries, or just want to learn more about Bike, we'd love to hear from you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-5 p-8 rounded-2xl bg-card border border-border">
              <div className="h-12 w-12 shrink-0 grid place-items-center rounded-xl bg-primary-soft text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Visit our HQ
                </div>
                <div className="mt-1.5 font-semibold text-foreground leading-snug">
                  {CONTACT_INFO.address}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-5 p-8 rounded-2xl bg-card border border-border">
              <div className="h-12 w-12 shrink-0 grid place-items-center rounded-xl bg-primary-soft text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Call us
                </div>
                <div className="mt-1.5 font-semibold text-foreground leading-snug">
                  {CONTACT_INFO.phone}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-5 p-8 rounded-2xl bg-card border border-border">
              <div className="h-12 w-12 shrink-0 grid place-items-center rounded-xl bg-primary-soft text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </div>
                <div className="mt-1.5 font-semibold text-foreground leading-snug">
                  {CONTACT_INFO.email}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
