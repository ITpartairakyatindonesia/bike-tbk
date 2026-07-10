"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface ContactFormProps {
  recipientEmail?: string;
}

export function ContactForm({ recipientEmail }: ContactFormProps) {
  const t = useTranslations('contact.form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validate recipient email
    if (!recipientEmail) {
      setErrorMessage('Recipient email is not configured. Please contact support.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Generate mailto URL
    const subject = encodeURIComponent(formData.subject);
  const body = encodeURIComponent(
`Name
${formData.name}

Reply Email
${formData.email}

Message

${formData.message}`
);

    const mailtoUrl = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Open mail client
    window.location.href = mailtoUrl;

    // Clear form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{t('title')}</h2>
      <p className="text-muted-foreground mb-8">
        {t('description')}
      </p>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800">
          <p className="font-semibold">Error</p>
          <p className="text-sm">{errorMessage}</p>
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-2">
            {t('fields.name.label')}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t('fields.name.placeholder')}
            required
            className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 hover:border-border/80"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            {t('fields.email.label')}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t('fields.email.placeholder')}
            required
            className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 hover:border-border/80"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            {t('fields.subject.label')}
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t('fields.subject.placeholder')}
            required
            className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 hover:border-border/80"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            {t('fields.message.label')}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder={t('fields.message.placeholder')}
            required
            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 hover:border-border/80 resize-none"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-deep hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 shadow-elegant"
        >
          {t('submit')}
        </button>
      </form>
    </div>
  );
}
