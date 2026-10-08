import BlogCard from "@/components/blog/BlogCard";
import { ButtonLink, Section, SectionHead } from "@/components/site/ui";
import type { BlogPostSummary } from "@/lib/blog-utils";

interface LatestBlogSectionProps {
  /** Latest posts, loaded from content/blog by the server page. */
  posts?: BlogPostSummary[];
}

const LatestBlogSection = ({ posts = [] }: LatestBlogSectionProps) => {
  if (posts.length === 0) return null;

  return (
    <Section tone="white" bordered>
      <SectionHead eyebrow="From the blog" title="Guides and branding tips" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 6).map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      <div className="mt-10">
        <ButtonLink href="/blog" variant="outline">
          See all articles
        </ButtonLink>
      </div>
    </Section>
  );
};

export default LatestBlogSection;
