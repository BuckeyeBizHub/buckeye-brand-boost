import { useState, useRef, useEffect, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "onLoad"> {
  /** Image source URL */
  src: string;
  /** Alt text (required for accessibility & SEO) */
  alt: string;
  /** Explicit width to prevent CLS */
  width: number;
  /** Explicit height to prevent CLS */
  height: number;
  /** Priority loading for LCP images – sets loading="eager" + fetchPriority="high" */
  priority?: boolean;
  /** CSS blur placeholder color (default: muted background) */
  placeholderColor?: string;
}

/**
 * SEO-optimized image component:
 * - Explicit width/height to prevent CLS
 * - Native lazy loading (unless priority)
 * - fetchpriority="high" for LCP images
 * - CSS fade-in on load with placeholder
 * - Proper alt text enforcement
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  priority = false,
  placeholderColor,
  className,
  style,
  ...props
}: OptimizedImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // If image already cached, mark loaded immediately
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        aspectRatio: `${width}/${height}`,
        backgroundColor: placeholderColor || "hsl(var(--muted))",
        ...style,
      }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        {...(priority && { fetchPriority: "high" } as any)}
        onLoad={() => setLoaded(true)}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0"
        )}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
