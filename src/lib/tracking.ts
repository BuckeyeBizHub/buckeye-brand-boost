// Ad and analytics events. Event names only: never send names, emails,
// phone numbers or form answers to Meta or Google.

/** Meta Pixel ("Buckeye Biz Hub Website" dataset). Public ID, not a secret. */
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "2501560067000271";

/** Meta domain verification for buckeyebizhub.com, rendered as a <meta> tag in <head>. */
export const META_DOMAIN_VERIFICATION = "tcjahrrztjnf3l9yha8ub0un33rf8i";

type Fbq = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: Fbq;
    gtag?: (...args: unknown[]) => void;
  }
}

function fbq(...args: unknown[]) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") window.fbq(...args);
}

function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") window.gtag(...args);
}

/** A page load or a client-side route change. */
export function trackPageView() {
  fbq("track", "PageView");
}

/** The quote form was sent successfully. Call only from the form's success callback. */
export function trackQuoteLead() {
  fbq("track", "Lead", { content_name: "Quote Request" });
  gtag("event", "generate_lead", { form_name: "Quote Request" });
}

/** Someone tapped or clicked a phone number link. */
export function trackPhoneContact() {
  fbq("track", "Contact");
  gtag("event", "phone_click");
}
