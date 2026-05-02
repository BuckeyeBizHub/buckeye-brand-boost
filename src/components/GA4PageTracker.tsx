import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA4_ID = "G-WY6SCF05ZZ";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a GA4 `page_view` event on every SPA route change.
 * The base gtag snippet in index.html sets `send_page_view: false`
 * so we control page views from here (avoids double-counting).
 */
const GA4PageTracker = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;

    const page_path = pathname + search;
    const page_location = window.location.href;
    const page_title = document.title;

    window.gtag("event", "page_view", {
      page_path,
      page_location,
      page_title,
      send_to: GA4_ID,
    });
  }, [pathname, search]);

  return null;
};

export default GA4PageTracker;
