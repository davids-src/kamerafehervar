'use client';

import { useState, type FormEvent } from 'react';
import { CheckIcon, ArrowRightIcon } from './icons';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      email: formData.get('email'),
      message: formData.get('message'),
      consent: formData.get('consent'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Hiba történt a küldés során.');
      }
      setState('success');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Ismeretlen hiba.');
    }
  };

  if (state === 'success') {
    return (
      <div className="bg-white rounded-xl p-8 border border-line shadow-sm text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
          <CheckIcon className="w-7 h-7" />
        </div>
        <h3 className="font-display font-bold text-lg text-navy mb-2">Köszönjük!</h3>
        <p className="font-body text-sm text-ink/70 mb-6">
          Megkaptuk az adatait, visszahívjuk a megadott számon.
        </p>
        <button
          onClick={() => setState('idle')}
          className="font-body text-sm text-accent hover:text-accent-hover transition-colors"
        >
          Új űrlap küldése
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl p-6 sm:p-7 border border-line shadow-sm space-y-4"
    >
      <div>
        <label htmlFor="name" className="block font-body text-sm font-medium text-ink mb-1.5">
          Név <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-line px-3.5 py-2.5 font-body text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block font-body text-sm font-medium text-ink mb-1.5">
          Telefonszám <span className="text-accent">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full rounded-lg border border-line px-3.5 py-2.5 font-body text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className="block font-body text-sm font-medium text-ink mb-1.5">
            Cég neve
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full rounded-lg border border-line px-3.5 py-2.5 font-body text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-body text-sm font-medium text-ink mb-1.5">
            E-mail cím
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-lg border border-line px-3.5 py-2.5 font-body text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block font-body text-sm font-medium text-ink mb-1.5">
          Mit szeretne?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Pl.: kellene 4 kamera az üzletbe."
          className="w-full rounded-lg border border-line px-3.5 py-2.5 font-body text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors resize-none"
        />
      </div>

      <div className="flex items-start gap-2.5">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          className="mt-1 w-4 h-4 rounded border-line text-accent focus:ring-accent/40"
        />
        <label htmlFor="consent" className="font-body text-xs text-ink/70 leading-relaxed">
          Hozzájárulok adataim kezeléséhez a visszahívás céljából.{' '}
          <a href="/adatkezeles" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
            Részletek
          </a>
          <span className="text-accent"> *</span>
        </label>
      </div>

      {state === 'error' && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3">
          <p className="font-body text-sm text-red-700">{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover disabled:opacity-60 text-white px-6 py-3.5 rounded-lg font-display font-bold text-base transition-colors"
      >
        {state === 'submitting' ? 'Küldés...' : 'Kérek visszahívást'}
        {state !== 'submitting' && <ArrowRightIcon className="w-4 h-4" />}
      </button>
    </form>
  );
}
