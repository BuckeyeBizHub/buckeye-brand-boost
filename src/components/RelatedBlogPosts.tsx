"use client";
import { Link } from "@/lib/compat/router";
import { ArrowRight, BookOpen } from "lucide-react";
import { getExcerpt, type BlogPostSummary } from "@/lib/blog-utils";

interface Props {
  /** Heading text */
  heading?: string;
  /** Number of posts to show */
  count?: number;
  /** Posts to show, chosen on the server (e.g. searchPosts() from "@/lib/blog") */
  posts?: BlogPostSummary[];
}

const RelatedBlogPosts = ({
  heading = "Related Articles from Our Blog",
  count = 3,
  posts: allPosts = [],
}: Props) => {
  const posts = allPosts.slice(0, count);

  if (posts.length === 0) return null;

  return (
    <section className="py-16 lg:py-20 bg-ohio-grey-light">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-primary" />
            <h2 className="font-display text-2xl md:text-3xl font-black text-foreground">
              {heading}
            </h2>
          </div>
          <Link
            to="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => {
            const image = post.featuredImage;
            const title = post.title;
            const excerpt = getExcerpt(post, 120);
            const cats = post.categories;

            return (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {image && (
                  <div className="h-44 overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-5 flex flex-col flex-grow">
                  {cats.length > 0 && (
                    <span className="text-[0.6rem] font-extrabold text-primary mb-2">
                      {cats[0].name}
                    </span>
                  )}
                  <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-primary mt-3 opacity-60 group-hover:opacity-100 transition-opacity">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogPosts;
