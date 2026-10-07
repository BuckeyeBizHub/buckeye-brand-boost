import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPost from "@/views/BlogPost";
import { fetchPost, fetchPosts, getFeaturedImage, type WPPost } from "@/lib/wordpress";
import { pageMetadata } from "@/lib/page-metadata";

// Posts still live in WordPress (buckeyebizhub.blog). They are fetched on the
// server now, so each post's text is in the HTML, and refreshed hourly.
export const revalidate = 3600;

const stripTags = (html: string) => html.replace(/<[^>]*>/g, "").trim();

async function loadPost(slug: string): Promise<WPPost | null | undefined> {
  try {
    return await fetchPost(slug);
  } catch {
    // WordPress unreachable: let the page fetch it in the browser instead.
    return undefined;
  }
}

export async function generateStaticParams() {
  try {
    const { items } = await fetchPosts(1, 100);
    return items.map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) return pageMetadata({ title: "Blog", path: `/blog/${slug}` });
  return pageMetadata({
    title: stripTags(post.title.rendered),
    description: stripTags(post.excerpt.rendered).slice(0, 155),
    path: `/blog/${post.slug}`,
    ogImage: getFeaturedImage(post) || undefined,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (post === null) notFound();
  return <BlogPost initialPost={post} />;
}
