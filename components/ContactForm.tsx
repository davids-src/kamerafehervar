'use client';

import { useState, useEffect, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckIcon } from './icons';
import { trackFormStart, trackGenerateLead, trackFormError } from '@/lib/gtag';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export const TASK_OPTIONS = [
  'Új kamerarendszer',
  'Meglévő rendszer bővítése',
  'Kamerarendszer javítása',
  'Karbantartás',
] as const;

export type TaskOption = (typeof TASK_OPTIONS)[number];

const PROPERTY_OPTIONS = [
  'Családi ház',
  'Nyaraló',
  'Lakás',
  'Üzlet / iroda',
  'Telephely / műhely / raktár',
  'Egyéb',
];

const BRAND_OPTIONS = ['Hikvision', 'Dahua', 'VideoSec', 'Más', 'Nem tudom'];

const EXISTING_TASKS: TaskOption[] = [
  'Meglévő rendszer bővítése',
  'Kamerarendszer javítása',
  'Karbantartás',
];

function taskFromTipus(tipus: string | null): TaskOption {
  switch (tipus) {
    case 'javitas':
      return 'Kamerarendszer javítása';
    case 'bovites':
      return 'Meglévő rendszer bővítése';
    case 'karbantartas':
      return 'Karbantartás';
    case 'uj':
    default:
      return 'Új kamerarendszer';
  }
}

interface ContactFormProps {
  defaultTask?: TaskOption;
  className?: string;
}

export function ContactForm({ defaultTask, className = '' }: ContactFormProps) {
  const searchParams = useSearchParams();
  const initialTask = defaultTask ?? taskFromTipus(searchParams.get('tipus'));

  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [task, setTask] = useState<TaskOption>(initialTask);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!defaultTask) {
      setTask(taskFromTipus(searchParams.get('tipus')));
    }
  }, [searchParams, defaultTask]);

  const showExistingFields = EXISTING_TASKS.includes(task);

  const handleStart = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackFormStart(task);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const locationVal = (formData.get('location') as string) || '';
    const propertyVal = (formData.get('property') as string) || '';

    const data = {
      task,
      property: propertyVal,
      location: locationVal,
      brand: showExistingFields ? formData.get('brand') : undefined,
      camera_count: showExistingFields ? formData.get('camera_count') : undefined,
      name: formData.get('name'),
      phone: formData.get('phone'),
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

      trackGenerateLead({
        task,
        property: propertyVal,
        location_region: locationVal,
      });

      setState('success');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Ismeretlen hiba.';
      trackFormError(msg);
      setState('error');
      setErrorMsg(msg);
    }
  };

  if (state === 'success') {
    return (
      <div className={`bg-white rounded-xl p-8 border border-line text-center ${className}`}>
        <div className="w-14 h-14 rounded-full bg-mist text-accent flex items-center justify-center mx-auto mb-4">
          <CheckIcon className="w-7 h-7" />
        </div>
        <h3 className="font-bold text-xl text-navy mb-2">Megkaptuk a megkeresését</h3>
        <p className="text-sm text-muted mb-6 leading-relaxed">
          Köszönjük, hogy írt a Kamera Fehérvár oldalán. A feladat részleteinek egyeztetéséhez a megadott
          elérhetőségen jelentkezünk.
        </p>
        <button
          onClick={() => setState('idle')}
          className="text-sm text-accent hover:text-accent-hover font-semibold transition-colors"
        >
          Új megkeresés küldése
        </button>
      </div>
    );
  }

  const fieldClass =
    'w-full rounded-lg border border-line px-3.5 py-2.5 text-sm text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors';

  return (
    <form
      onSubmit={handleSubmit}
      onFocus={handleStart}
      className={`bg-white rounded-xl p-6 sm:p-7 border border-line space-y-4 ${className}`}
    >
      <div>
        <label htmlFor="task" className="block text-sm font-medium text-ink mb-1.5">
          Miben segíthetünk? <span className="text-accent">*</span>
        </label>
        <select
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value as TaskOption)}
          className={fieldClass}
          required
        >
          {TASK_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="property" className="block text-sm font-medium text-ink mb-1.5">
          Ingatlan <span className="text-accent">*</span>
        </label>
        <select id="property" name="property" required className={fieldClass} defaultValue="">
          <option value="" disabled>
            Válasszon…
          </option>
          {PROPERTY_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-ink mb-1.5">
          Település <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          required
          placeholder="Székesfehérvár"
          className={fieldClass}
        />
      </div>

      {showExistingFields && (
        <>
          <div>
            <label htmlFor="brand" className="block text-sm font-medium text-ink mb-1.5">
              Meglévő rendszer gyártója, ha ismert
            </label>
            <select id="brand" name="brand" className={fieldClass} defaultValue="Nem tudom">
              {BRAND_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="camera_count" className="block text-sm font-medium text-ink mb-1.5">
              Jelenlegi kamerák száma, ha ismert
            </label>
            <input type="number" id="camera_count" name="camera_count" min={0} className={fieldClass} />
          </div>
        </>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
            Név <span className="text-accent">*</span>
          </label>
          <input type="text" id="name" name="name" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1.5">
            Telefonszám <span className="text-accent">*</span>
          </label>
          <input type="tel" id="phone" name="phone" required className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
          E-mail
        </label>
        <input type="email" id="email" name="email" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
          Rövid leírás <span className="text-accent">*</span>
        </label>
        <textarea id="message" name="message" rows={4} required className={`${fieldClass} resize-none`} />
      </div>

      <div className="flex items-start gap-2.5 pt-1">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          className="mt-1 w-4 h-4 rounded border-line text-accent focus:ring-accent/40"
        />
        <label htmlFor="consent" className="text-xs text-muted leading-relaxed">
          Hozzájárulok adataim kezeléséhez a kapcsolatfelvétel céljából (SIROTECH Kft.).{' '}
          <a href="/adatvedelem" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
            Adatvédelmi tájékoztató
          </a>
          <span className="text-accent"> *</span>
        </label>
      </div>

      <p className="text-xs text-muted leading-relaxed">
        Az űrlap elküldése kapcsolatfelvételi / ajánlatkérési megkeresés, önmagában nem minősül megrendelésnek.
      </p>

      {state === 'error' && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3">
          <p className="text-sm text-red-700">{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover disabled:opacity-60 text-white px-6 py-3.5 rounded-lg font-semibold text-base transition-colors"
      >
        {state === 'submitting' ? 'Küldés folyamatban...' : 'Ajánlatkérés elküldése'}
      </button>
    </form>
  );
}
