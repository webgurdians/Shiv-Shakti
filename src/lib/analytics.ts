// Client-side analytics event telemetry helper

type AnalyticsEvent =
  | 'call_click'
  | 'whatsapp_click'
  | 'directions_click'
  | 'product_view'
  | 'offer_view'
  | 'emi_click'
  | 'product_enquiry'
  | 'promotion_click';

export function trackEvent(
  eventName: AnalyticsEvent,
  params: Record<string, string | number | boolean | undefined> = {}
) {
  if (typeof window === 'undefined') return;

  // Log in development
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Analytics Event] ${eventName}:`, params);
  }

  // Google Analytics 4
  if (typeof (window as unknown as { gtag?: Function }).gtag === 'function') {
    (window as unknown as { gtag: Function }).gtag('event', eventName, params);
  }

  // Meta Pixel
  if (typeof (window as unknown as { fbq?: Function }).fbq === 'function') {
    (window as unknown as { fbq: Function }).fbq('trackCustom', eventName, params);
  }
}
