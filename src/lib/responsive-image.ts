// Phones download an 800px copy of large photos instead of the full file.
// The list is every photo that has a "-800w" copy in /public; anything not
// on it renders the normal way. Regenerate with scripts/make-image-variants.py
// after adding big photos.
import WIDTHS from "./responsive-images.json";

const FULL_WIDTH = WIDTHS as Record<string, number>;

export const SIZES = {
  full: "100vw",
  hero: "(min-width: 768px) 45vw, 100vw",
  card: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
} as const;

/** srcSet and sizes for an <img>, or nothing when the photo has no small copy. */
export function responsive(src: string, sizes: string): { srcSet?: string; sizes?: string } {
  const full = FULL_WIDTH[src];
  if (!full) return {};
  const small = src.replace(/(\.[a-z]+)$/i, "-800w$1");
  return { srcSet: `${small} 800w, ${src} ${full}w`, sizes };
}
