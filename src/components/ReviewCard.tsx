import { Quote } from "lucide-react";
import StarRating from "@/components/StarRating";
import { cn } from "@/lib/utils";
import type { ReviewData } from "@/lib/structured-data";

interface ReviewCardProps {
  review: ReviewData;
  /** Optional image URL */
  image?: string;
  className?: string;
}

/**
 * Individual review card with proper microdata markup.
 */
const ReviewCard = ({ review, image, className }: ReviewCardProps) => {
  return (
    <div
      className={cn(
        "group relative bg-primary-foreground/[0.03] border-2 border-primary-foreground/[0.06] hover:border-primary/30 rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:bg-primary-foreground/[0.05] hover:shadow-[0_25px_70px_-15px_hsl(0_85%_40%/0.15)]",
        className
      )}
      itemProp="review"
      itemScope
      itemType="https://schema.org/Review"
    >
      {/* Quote icon */}
      <div className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-primary/[0.08] border border-primary/15 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
        <Quote className="w-5 h-5 text-primary/60" aria-hidden="true" />
      </div>

      {/* Rating */}
      <div className="mb-5" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
        <meta itemProp="ratingValue" content={String(review.ratingValue)} />
        <meta itemProp="bestRating" content="5" />
        <meta itemProp="worstRating" content="1" />
        <StarRating rating={review.ratingValue} />
      </div>

      {/* Review body */}
      <blockquote
        className="text-primary-foreground/50 text-[0.9rem] leading-[1.85] mb-6 font-medium italic"
        itemProp="reviewBody"
      >
        "{review.reviewBody}"
      </blockquote>

      {/* Author */}
      <div
        className="flex items-center gap-3"
        itemProp="author"
        itemScope
        itemType="https://schema.org/Person"
      >
        {image && (
          <img
            src={image}
            alt={`Review by ${review.author}`}
            className="w-10 h-10 rounded-full object-cover border border-primary/20"
            loading="lazy"
            width={40}
            height={40}
          />
        )}
        <div>
          <span className="text-sm font-bold text-primary-foreground/70" itemProp="name">
            {review.author}
          </span>
          {review.datePublished && (
            <time
              className="block text-xs text-primary-foreground/30"
              dateTime={review.datePublished}
              itemProp="datePublished"
            >
              {new Date(review.datePublished).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
