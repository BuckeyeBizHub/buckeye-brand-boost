import type { Metadata } from "next";
import Index from "@/views/Index";
import { getAllPostSummaries } from "@/lib/blog";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Custom Labels, Decals and Truck Lettering in Columbus, Ohio",
  description:
    "Custom labels, decals, truck lettering, signs and printing for Central Ohio businesses. Real starting prices, small first orders welcome, free quote in 24 hours.",
  path: "/",
});

export default function Page() {
  return <Index latestPosts={getAllPostSummaries().slice(0, 3)} />;
}
