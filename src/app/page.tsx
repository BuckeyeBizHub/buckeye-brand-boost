import Index from "@/views/Index";
import { getAllPostSummaries } from "@/lib/blog";

export default function Page() {
  return <Index latestPosts={getAllPostSummaries().slice(0, 3)} />;
}
