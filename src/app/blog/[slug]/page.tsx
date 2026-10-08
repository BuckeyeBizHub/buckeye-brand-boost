import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPost from "@/views/BlogPost";
import { getAllPosts, getExcerpt, getPost, getRelatedPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/page-metadata";

// Posts are read from content/blog/*.json at build time. Every slug is
// pre-rendered; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return pageMetadata({ title: "Blog", path: `/blog/${slug}` });
  return pageMetadata({
    title: post.title,
    description: getExcerpt(post, 155),
    path: `/blog/${post.slug}`,
    ogImage: post.featuredImage || undefined,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return <BlogPost post={post} related={getRelatedPosts(post.slug, 3)} />;
}
