"use client";

import { CONTACT_FORM } from "@/lib/data/contact";

export function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-sm font-medium mb-2">
          {CONTACT_FORM.fields.name.label}
        </label>
        <input
          type="text"
          placeholder={CONTACT_FORM.fields.name.placeholder}
          className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">
          {CONTACT_FORM.fields.email.label}
        </label>
        <input
          type="email"
          placeholder={CONTACT_FORM.fields.email.placeholder}
          className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">
          {CONTACT_FORM.fields.subject.label}
        </label>
        <input
          type="text"
          placeholder={CONTACT_FORM.fields.subject.placeholder}
          className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">
          {CONTACT_FORM.fields.message.label}
        </label>
        <textarea
          rows={5}
          placeholder={CONTACT_FORM.fields.message.placeholder}
          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition resize-none"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-deep transition shadow-soft"
      >
        {CONTACT_FORM.submitLabel}
      </button>
    </form>
  );
}
