/**
 * Client-side redirect map and 404 error tracking.
 *
 * Redirect map: handles old/moved URLs by redirecting before the 404 page renders.
 * 404 tracking: logs missed URLs to console and optionally to analytics.
 */

// ── Redirect Map ───────────────────────────────────────────
// key: old path (lowercase, no trailing slash)
// value: { to: new path, permanent: true = 301-equivalent }

interface RedirectEntry {
  to: string;
  permanent: boolean;
}

const REDIRECT_MAP: Record<string, RedirectEntry> = {
  // Redirect duplicate/noindexed pages to main hub pages
  "/brochures-and-business-printing": { to: "/business-printing", permanent: true },
  "/large-format-printing": { to: "/banners-and-flags", permanent: true },
  "/vehicle-branding": { to: "/vehicle-wraps-and-fleet-branding", permanent: true },
  "/promo-products": { to: "/promotional-products", permanent: true },
  "/promo": { to: "/promotional-products", permanent: true },
  "/wraps": { to: "/vehicle-wraps-and-fleet-branding", permanent: true },
  "/cards": { to: "/business-cards", permanent: true },
  "/seo": { to: "/local-seo", permanent: true },
  "/apparel": { to: "/branded-apparel-and-uniforms", permanent: true },
  "/signs": { to: "/yard-signs-and-signage", permanent: true },
  "/signage": { to: "/yard-signs-and-signage", permanent: true },
  "/rebrand": { to: "/full-rebrand-kits", permanent: true },
  "/web-design": { to: "/website-design", permanent: true },
};

/**
 * Check if the current path has a redirect.
 * Returns the target path or null.
 */
export function getRedirect(pathname: string): { to: string; permanent: boolean } | null {
  const normalised = pathname.toLowerCase().replace(/\/+$/, "") || "/";
  return REDIRECT_MAP[normalised] || null;
}

// ── 404 Tracking ───────────────────────────────────────────

interface NotFoundEvent {
  path: string;
  referrer: string;
  timestamp: string;
  userAgent: string;
}

/** In-memory log of 404s for the session */
const notFoundLog: NotFoundEvent[] = [];

/**
 * Track a 404 event. Logs to console, stores in memory,
 * and sends to GA4 if available.
 */
export function track404(path: string, referrer: string = "") {
  const event: NotFoundEvent = {
    path,
    referrer,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
  };

  notFoundLog.push(event);

  console.warn(
    `[404 Tracker] Page not found: ${path}` +
    (referrer ? ` (referred from: ${referrer})` : "")
  );

  // Send to GA4
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "page_not_found", {
      event_category: "Error",
      event_label: path,
      page_referrer: referrer,
      non_interaction: true,
    });
  }
}

/** Get all tracked 404s for this session (useful for debugging) */
export function getNotFoundLog(): readonly NotFoundEvent[] {
  return notFoundLog;
}
