import { pageMetadata } from "@/lib/page-metadata";
import { getAllPostSummaries, getCategories } from "@/lib/blog";
import Blog from "@/views/Blog";

export const metadata = pageMetadata({
  title: "Printing and Branding Guides for Ohio Businesses",
  description:
    "Guides on labels, signs, vehicle wraps, business printing and promo products for Columbus and Central Ohio businesses, from Buckeye Biz Hub.",
  path: "/blog",
});

// Posts come from content/blog/*.json, read at build time.
export default function Page() {
  return <Blog posts={getAllPostSummaries()} categories={getCategories()} />;
}
