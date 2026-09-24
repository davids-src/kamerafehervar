export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Log event helper with safety checks
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === 'undefined') return;

  // Sanitize to prevent accidental PII leakage
  const safeParams = { ...params };
  delete safeParams.name;
  delete safeParams.phone;
  delete safeParams.email;
  delete safeParams.message;
  delete safeParams.company;

  if (window.gtag) {
    window.gtag('event', eventName, safeParams);
  } else if (window.dataLayer) {
    window.dataLayer.push({ event: eventName, ...safeParams });
  } else {
    console.log(`[GA4 Event - ${eventName}]`, safeParams);
  }
}

// Phone click tracker
export function trackPhoneClick(ctaLocation: string) {
  trackEvent('phone_click', {
    cta_location: ctaLocation,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    location_region: 'Székesfehérvár és Fejér vármegye',
  });
}

// CTA click tracker
export function trackCtaClick(ctaLocation: string, label?: string) {
  trackEvent('cta_click', {
    cta_location: ctaLocation,
    cta_label: label || '',
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
}

// Form interaction trackers
export function trackFormStart(requestType?: string) {
  trackEvent('form_start', {
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    request_type: requestType || 'nem_meghatàrozott',
  });
}

export function trackRequestTypeSelect(requestType: string) {
  trackEvent('request_type_select', {
    request_type: requestType,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
}

export function trackCustomerTypeSelect(customerType: string) {
  trackEvent('customer_type_select', {
    customer_type: customerType,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
}

// Lead conversion tracker - ONLY AFTER SUCCESSFUL API RESPONSE
export function trackGenerateLead(params: {
  request_type: string;
  customer_type: string;
  location_region?: string;
  service?: string;
}) {
  trackEvent('generate_lead', {
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    request_type: params.request_type,
    customer_type: params.customer_type,
    location_region: params.location_region || 'Székesfehérvár',
    service: params.service || params.request_type,
  });
}

// Service page view tracker
export function trackServicePageView(serviceName: string, path: string) {
  trackEvent('service_page_view', {
    service: serviceName,
    page_path: path,
    location_region: 'Székesfehérvár és Fejér vármegye',
  });
}
