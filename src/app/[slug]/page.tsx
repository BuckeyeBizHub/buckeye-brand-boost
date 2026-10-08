import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INDUSTRIES, PRODUCTS, getIndustry, getProduct } from "@/content/catalog";
import { pageMetadata } from "@/lib/page-metadata";
import ProductPageView from "@/views/ProductPageView";
import IndustryPageView from "@/views/IndustryPageView";

// Every product and industry page is built from src/content at build time.
// Static folders (about, contact, blog...) win over this route.
export const dynamicParams = false;

export function generateStaticParams() {
  return [...PRODUCTS, ...INDUSTRIES].map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getProduct(slug) ?? getIndustry(slug);
  if (!page) return {};
  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/${slug}`,
    ogImage: `https://www.buckeyebizhub.com${page.hero.src}`,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (product) return <ProductPageView page={product} />;
  const industry = getIndustry(slug);
  if (industry) return <IndustryPageView page={industry} />;
  notFound();
}
