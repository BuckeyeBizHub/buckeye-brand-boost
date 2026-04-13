import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import BlogCard from "@/components/blog/BlogCard";
import { fetchPosts } from "@/lib/wordpress";

const LatestBlogSection = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["wp-latest-posts"],
    queryFn: () => fetchPosts(1, 4),
    staleTime: 5 * 60 * 1000,
  });

  if (error) return null;

  return (
    <section className="py-24 lg:py-32 bg-ohio-grey-light relative overflow-hidden">
      <div className="absolute top-[-200px] right-[-150px] w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[180px]" />
      <div className="container relative">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-6 bg-primary/[0.08] px-6 py-2.5 rounded-full border border-primary/20">
            <BookOpen className="w-4 h-4" /> Latest from the Blog
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
            Tips, Guides &{" "}
            <span className="text-primary">Branding Insights</span>
          </h2>
        </motion.div>

        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-3xl border-2 border-border overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-6 space-y-3">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data?.items.slice(0, 4).map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        )}

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-14">
          <Link to="/blog">
            <Button size="lg" className="font-black text-lg px-10 py-7 rounded-xl group">
              View All Articles <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestBlogSection;
