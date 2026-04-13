import { useEffect } from "react";

/**
 * Development-only hook that warns about heading hierarchy violations:
 * - Multiple H1 elements on the page
 * - Skipped heading levels (e.g. H1 → H3 without H2)
 *
 * Only runs in development mode; no-op in production builds.
 */
export function useHeadingHierarchy() {
  useEffect(() => {
    if (import.meta.env.PROD) return;

    // Delay to let the page render fully
    const timer = setTimeout(() => {
      const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
      const levels: number[] = [];

      headings.forEach((h) => {
        levels.push(parseInt(h.tagName[1], 10));
      });

      // Check for multiple H1s
      const h1Count = levels.filter((l) => l === 1).length;
      if (h1Count === 0) {
        console.warn("[HeadingHierarchy] No H1 found on this page. Every page should have exactly one H1.");
      } else if (h1Count > 1) {
        console.warn(
          `[HeadingHierarchy] Found ${h1Count} H1 elements. Each page should have exactly one H1.`
        );
      }

      // Check for skipped levels
      for (let i = 1; i < levels.length; i++) {
        if (levels[i] > levels[i - 1] + 1) {
          const el = headings[i];
          console.warn(
            `[HeadingHierarchy] Skipped heading level: H${levels[i - 1]} → H${levels[i]}. ` +
            `Text: "${(el as HTMLElement).textContent?.slice(0, 60)}"`
          );
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
}
