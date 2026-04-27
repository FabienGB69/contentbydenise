'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { trackFormSubmit } from '@/components/analytics';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function InquiryForm() {
  const t = useTranslations('contact.form');
  const [state, setState] = useState<FormState>('idle');

  const projectTypes: string[] = t.raw('projectTypes') as string[];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('loading');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setState('success');
        trackFormSubmit();
        form.reset();
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div className="card space-y-4 text-center py-10">
        <p className="text-2xl">✓</p>
        <p className="font-medium">{t('success')}</p>
      </div>
    );
  }

  return (
    <form className="card space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">{t('name')} *</label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-xl border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label htmlFor="brand" className="mb-2 block text-sm font-medium">{t('brand')}</label>
          <input
            id="brand"
            name="brand"
            className="w-full rounded-xl border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">{t('email')} *</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full rounded-xl border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="instagram" className="mb-2 block text-sm font-medium">{t('instagram')}</label>
        <input
          id="instagram"
          name="instagram"
          placeholder="@yourbrand or https://yourbrand.com"
          className="w-full rounded-xl border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="projectType" className="mb-2 block text-sm font-medium">{t('projectType')}</label>
          <select
            id="projectType"
            name="projectType"
            className="w-full rounded-xl border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date" className="mb-2 block text-sm font-medium">{t('date')}</label>
          <input
            id="date"
            name="date"
            placeholder="e.g. June 2026"
            className="w-full rounded-xl border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">{t('message')} *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      {state === 'error' && (
        <p className="text-sm text-red-600">{t('error')}</p>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="rounded-full bg-foreground px-5 py-3 text-sm text-white hover:bg-neutral-800 disabled:opacity-60 transition-colors"
      >
        {state === 'loading' ? t('sending') : t('submit')}
      </button>
    </form>
  );
}
