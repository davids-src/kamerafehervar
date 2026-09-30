export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;

  const safeParams = { ...params };
  delete safeParams.name;
  delete safeParams.phone;
  delete safeParams.email;
  delete safeParams.message;

  if (window.gtag) {
    window.gtag('event', eventName, safeParams);
  } else if (window.dataLayer) {
    window.dataLayer.push({ event: eventName, ...safeParams });
  }
}

export function trackPhoneClick(ctaLocation: string) {
  trackEvent('phone_click', {
    cta_location: ctaLocation,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
}

export function trackCtaClick(ctaLocation: string, label?: string) {
  trackEvent('cta_click', {
    cta_location: ctaLocation,
    cta_label: label || '',
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
}

export function trackFormStart(task?: string) {
  trackEvent('form_start', {
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    task: task || 'unknown',
  });
}

export function trackGenerateLead(params: { task: string; property?: string; location_region?: string }) {
  trackEvent('generate_lead', {
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    task: params.task,
    property: params.property || '',
    location_region: params.location_region || '',
  });
}

export function trackFormError(reason?: string) {
  trackEvent('form_error', {
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    reason: reason || 'unknown',
  });
}
