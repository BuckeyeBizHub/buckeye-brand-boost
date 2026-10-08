import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { getExcerpt, type BlogPostSummary } from "@/lib/blog-utils";

interface BlogCardProps {
  post: BlogPostSummary;
  featured?: boolean;
}

/** Blog post card. No hooks, so it renders on the server or inside client lists. */
const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const image = post.featuredImage;
  const category = post.categories[0];
  const excerpt = getExcerpt(post, featured ? 220 : 140);
  const date = format(new Date(post.date), "MMMM d, yyyy");

  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="card-lift group mb-10 grid grid-cols-1 overflow-hidden rounded-xl border border-border bg-white md:grid-cols-2"
      >
        <div className="aspect-[16/10] overflow-hidden bg-cream md:aspect-auto md:min-h-[320px]">
          {image && (
            <img
              src={image}
              alt={post.featuredAlt || post.title}
              loading="eager"
              fetchPriority="high"
              width={640}
              height={400}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          )}
        </div>
        <div className="flex flex-col justify-center p-6 md:p-10">
          <p className="eyebrow mb-3">
            {category ? `${category.name} · ` : ""}
            {date}
          </p>
          <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] text-ink">{post.title}</h2>
          <p className="mt-4 text-body">{excerpt}</p>
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
            Read the article
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card-lift group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white"
    >
      <div className="aspect-[16/10] overflow-hidden bg-cream">
        {image && (
          <img
            src={image}
            alt={post.featuredAlt || post.title}
            loading="lazy"
            decoding="async"
            width={400}
            height={250}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow mb-2">
          {category ? `${category.name} · ` : ""}
          {date}
        </p>
        <h3 className="font-display text-[1.45rem] leading-tight text-ink">{post.title}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-[0.95rem] text-muted-foreground">{excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
          Read more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
