import type { Metric } from "web-vitals";

/**
 * Core Web Vitals reporting.
 * Logs to console in dev; sends to analytics in production.
 */

const THRESHOLDS: Record<string, [number, number]> = {
  // [good, needs-improvement] — above second value is poor
  LCP: [2500, 4000],
  FID: [100, 300],
  INP: [200, 500],
  CLS: [0.1, 0.25],
  FCP: [1800, 3000],
  TTFB: [800, 1800],
};

function getRating(name: string, value: number): "good" | "needs-improvement" | "poor" {
  const t = THRESHOLDS[name];
  if (!t) return "good";
  if (value <= t[0]) return "good";
  if (value <= t[1]) return "needs-improvement";
  return "poor";
}

function sendToAnalytics(metric: Metric) {
  const rating = getRating(metric.name, metric.value);

  // Console logging (dev + prod for visibility)
  const color =
    rating === "good" ? "#0cce6b" : rating === "needs-improvement" ? "#ffa400" : "#ff4e42";

  console.log(
    `%c[Web Vitals] ${metric.name}: ${metric.value.toFixed(metric.name === "CLS" ? 4 : 0)}ms (${rating})`,
    `color: ${color}; font-weight: bold;`
  );

  // Send to GA4 if available
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", metric.name, {
      event_category: "Web Vitals",
      event_label: metric.id,
      value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
      non_interaction: true,
      metric_rating: rating,
    });
  }

  // Alert in dev for poor values
  if (import.meta.env.DEV && rating === "poor") {
    console.warn(
      `⚠️ [Web Vitals] POOR ${metric.name}: ${metric.value.toFixed(2)}. ` +
      `Threshold: ≤${THRESHOLDS[metric.name]?.[0]}. Check performance.`
    );
  }
}

export async function reportWebVitals() {
  const { onLCP, onFID, onCLS, onINP, onFCP, onTTFB } = await import("web-vitals");

  onLCP(sendToAnalytics);
  onFID(sendToAnalytics);
  onCLS(sendToAnalytics);
  onINP(sendToAnalytics);
  onFCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
}
