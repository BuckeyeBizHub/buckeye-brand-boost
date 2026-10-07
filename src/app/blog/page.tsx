import { pageMetadata } from "@/lib/page-metadata";
import { getAllPostSummaries, getCategories } from "@/lib/blog";
import Blog from "@/views/Blog";

export const metadata = pageMetadata({
  title: "Blog - Ohio Business Branding Tips & News",
  description:
    "Expert tips on business branding, printing, promotional products, vehicle wraps, and marketing strategies for Ohio small businesses.",
  path: "/blog",
});

// Posts come from content/blog/*.json, read at build time.
export default function Page() {
  return <Blog posts={getAllPostSummaries()} categories={getCategories()} />;
}
