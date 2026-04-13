import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  /** Rating value (0-5) */
  rating: number;
  /** Maximum rating (default 5) */
  max?: number;
  /** Star size class (default "w-4 h-4") */
  size?: string;
  /** Show numeric value next to stars */
  showValue?: boolean;
  /** Show review count */
  reviewCount?: number;
  /** Additional className */
  className?: string;
}

/**
 * Accessible star rating display.
 * - Visual filled/half/empty stars
 * - Screen reader text with exact rating
 * - Schema-compliant data attributes
 */
const StarRating = ({
  rating,
  max = 5,
  size = "w-4 h-4",
  showValue = false,
  reviewCount,
  className,
}: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.25 && rating - fullStars < 0.75;
  const emptyStars = max - fullStars - (hasHalf ? 1 : 0);

  return (
    <div
      className={cn("inline-flex items-center gap-1", className)}
      role="img"
      aria-label={`Rated ${rating} out of ${max} stars${reviewCount ? `, based on ${reviewCount} reviews` : ""}`}
      itemProp="aggregateRating"
      itemScope
      itemType="https://schema.org/AggregateRating"
    >
      <meta itemProp="ratingValue" content={String(rating)} />
      <meta itemProp="bestRating" content={String(max)} />
      <meta itemProp="worstRating" content="1" />
      {reviewCount !== undefined && (
        <meta itemProp="reviewCount" content={String(reviewCount)} />
      )}

      <span className="flex gap-0.5" aria-hidden="true">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`full-${i}`} className={cn(size, "text-primary fill-primary")} />
        ))}
        {hasHalf && <StarHalf className={cn(size, "text-primary fill-primary")} />}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star key={`empty-${i}`} className={cn(size, "text-muted-foreground/30")} />
        ))}
      </span>

      {showValue && (
        <span className="text-sm font-bold text-foreground ml-1">
          {rating.toFixed(1)}
        </span>
      )}

      {reviewCount !== undefined && (
        <span className="text-sm text-muted-foreground ml-0.5">
          ({reviewCount} reviews)
        </span>
      )}

      {/* Screen reader text */}
      <span className="sr-only">
        {rating} out of {max} stars
        {reviewCount ? `, ${reviewCount} reviews` : ""}
      </span>
    </div>
  );
};

export default StarRating;
