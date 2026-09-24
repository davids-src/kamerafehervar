'use client';

import { useState, type FormEvent } from 'react';
import { CheckIcon, ArrowRightIcon } from './icons';
import {
  trackFormStart,
  trackRequestTypeSelect,
  trackCustomerTypeSelect,
  trackGenerateLead,
} from '@/lib/gtag';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

interface ContactFormProps {
  defaultRequestType?: string;
  defaultCustomerType?: string;
  className?: string;
}

const CUSTOMER_TYPES = ['Vállalkozás / intézmény', 'Magánszemély'];

const REQUEST_TYPES = [
  'Új kamerarendszer',
  'Javítás',
  'Bővítés',
  'Korszerűsítés / csere',
  'Riasztó / beléptetés',
  'Nem tudom pontosan',
];

export function ContactForm({
  defaultRequestType = 'Új kamerarendszer',
  defaultCustomerType = 'Vállalkozás / intézmény',
  className = '',
}: ContactFormProps) {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [customerType, setCustomerType] = useState(defaultCustomerType);
  const [requestType, setRequestType] = useState(defaultRequestType);
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackFormStart(requestType);
    }
  };

  const handleCustomerTypeChange = (type: string) => {
    setCustomerType(type);
    trackCustomerTypeSelect(type);
  };

  const handleRequestTypeChange = (type: string) => {
    setRequestType(type);
    trackRequestTypeSelect(type);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const locationVal = (formData.get('location') as string) || 'Székesfehérvár';

    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      email: formData.get('email'),
      message: formData.get('message'),
      customer_type: customerType,
      request_type: requestType,
      location: locationVal,
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

      // ONLY track generate_lead on success response
      trackGenerateLead({
        request_type: requestType,
        customer_type: customerType,
        location_region: locationVal,
      });

      setState('success');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Ismeretlen hiba.');
    }
  };

  if (state === 'success') {
    return (
      <div className={`bg-white rounded-xl p-8 border border-line shadow-sm text-center ${className}`}>
        <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
          <CheckIcon className="w-7 h-7" />
        </div>
        <h3 className="font-display font-bold text-xl text-navy mb-2">Köszönjük megkeresését!</h3>
        <p className="font-body text-sm text-ink/70 mb-6 leading-relaxed">
          Megkaptuk az adatait ({requestType} — {customerType}). Munkatársunk rövidesen visszahívja a megadott telefonszámon a részletek egyeztetéséhez.
        </p>
        <button
          onClick={() => setState('idle')}
          className="font-body text-sm text-accent hover:text-accent-hover font-semibold transition-colors"
        >
          Új ajánlatkérés küldése
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocus={handleStart}
      className={`bg-white rounded-xl p-6 sm:p-7 border border-line shadow-sm space-y-4 ${className}`}
    >
      {/* Customer Type Selector */}
      <div>
        <label className="block font-body text-xs font-semibold uppercase tracking-wider text-ink/70 mb-2">
          Ügyfél típusa <span className="text-accent">*</span>
        </label>
        <div className="grid grid-cols-2 gap-2">
          {CUSTOMER_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => handleCustomerTypeChange(type)}
              className={`py-2 px-3 text-xs sm:text-sm font-body font-medium rounded-lg border transition-all ${
                customerType === type
                  ? 'bg-navy text-white border-navy font-bold shadow-sm'
                  : 'bg-mist/50 text-ink/80 border-line hover:border-navy/40'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Request Type Selector */}
      <div>
        <label htmlFor="request_type" className="block font-body text-xs font-semibold uppercase tracking-wider text-ink/70 mb-1.5">
          Feladat jellege <span className="text-accent">*</span>
        </label>
        <select
          id="request_type"
          value={requestType}
          onChange={(e) => handleRequestTypeChange(e.target.value)}
          className="w-full rounded-lg border border-line px-3.5 py-2.5 font-body text-sm text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
        >
          {REQUEST_TYPES.map((req) => (
            <option key={req} value={req}>
              {req}
            </option>
          ))}
        </select>
      </div>

      {/* Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block font-body text-sm font-medium text-ink mb-1.5">
            Név <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Kovács János"
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
            placeholder="+36 30 123 4567"
            className="w-full rounded-lg border border-line px-3.5 py-2.5 font-body text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
          />
        </div>
      </div>

      {/* Location & Email / Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="location" className="block font-body text-sm font-medium text-ink mb-1.5">
            Település <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            defaultValue="Székesfehérvár"
            placeholder="Székesfehérvár, Gárdony, stb."
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
            placeholder="nev@domain.hu"
            className="w-full rounded-lg border border-line px-3.5 py-2.5 font-body text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
          />
        </div>
      </div>

      {customerType === 'Vállalkozás / intézmény' && (
        <div>
          <label htmlFor="company" className="block font-body text-sm font-medium text-ink mb-1.5">
            Cég / Intézmény neve
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Minta Kft."
            className="w-full rounded-lg border border-line px-3.5 py-2.5 font-body text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
          />
        </div>
      )}

      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-body text-sm font-medium text-ink mb-1.5">
          Rövid leírás / megjegyzés
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Pl.: 4 db IP kamerát szeretnénk az üzletbe, ingyenes felméréssel."
          className="w-full rounded-lg border border-line px-3.5 py-2.5 font-body text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors resize-none"
        />
      </div>

      {/* Consent */}
      <div className="flex items-start gap-2.5 pt-1">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          className="mt-1 w-4 h-4 rounded border-line text-accent focus:ring-accent/40"
        />
        <label htmlFor="consent" className="font-body text-xs text-ink/70 leading-relaxed">
          Hozzájárulok adataim kezeléséhez a visszahívás céljából (SIROTECH Kft.).{' '}
          <a href="/adatkezeles" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
            Adatkezelési tájékoztató
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
        className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover disabled:opacity-60 text-white px-6 py-3.5 rounded-lg font-display font-bold text-base transition-colors shadow-sm"
      >
        {state === 'submitting' ? 'Küldés folyamatban...' : 'Kérek visszahívást / felmérést'}
        {state !== 'submitting' && <ArrowRightIcon className="w-4 h-4" />}
      </button>
    </form>
  );
}
