import { Star } from "lucide-react";
import { GOOGLE_RATING } from "@/content/reviews";

/** Star rating with the real review count, linking to the Google Business Profile. */
export function GoogleRating({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { rating, count, url } = GOOGLE_RATING;
  const full = Math.round(rating);
  const text = tone === "dark" ? "text-paper/85" : "text-body";
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 text-[0.95rem] ${text} hover:underline`}
      aria-label={`Rated ${rating.toFixed(1)} out of 5 on Google from ${count} reviews. Read them on Google.`}
    >
      <span className="flex" aria-hidden>
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < full ? "fill-[#F5B301] text-[#F5B301]" : "text-border"}`} />
        ))}
      </span>
      <span>
        <span className="font-semibold">{rating.toFixed(1)}</span> on Google ({count} {count === 1 ? "review" : "reviews"})
      </span>
    </a>
  );
}
