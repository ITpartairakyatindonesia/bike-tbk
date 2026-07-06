"use client";

import { CONTACT_FORM } from "@/lib/data/contact";

export function ContactForm() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
      <p className="text-muted-foreground mb-8">
        Fill out the form below and our team will get back to you within 24 hours.
      </p>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium mb-2">
            {CONTACT_FORM.fields.name.label}
          </label>
          <input
            type="text"
            placeholder={CONTACT_FORM.fields.name.placeholder}
            className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 hover:border-border/80"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            {CONTACT_FORM.fields.email.label}
          </label>
          <input
            type="email"
            placeholder={CONTACT_FORM.fields.email.placeholder}
            className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 hover:border-border/80"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            {CONTACT_FORM.fields.subject.label}
          </label>
          <input
            type="text"
            placeholder={CONTACT_FORM.fields.subject.placeholder}
            className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 hover:border-border/80"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            {CONTACT_FORM.fields.message.label}
          </label>
          <textarea
            rows={5}
            placeholder={CONTACT_FORM.fields.message.placeholder}
            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 hover:border-border/80 resize-none"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-deep hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 shadow-elegant"
        >
          {CONTACT_FORM.submitLabel}
        </button>
      </form>
    </div>
  );
}
