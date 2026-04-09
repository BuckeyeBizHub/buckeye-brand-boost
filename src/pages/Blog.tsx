import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowRight, Phone, BookOpen, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { usePageTitle } from "@/hooks/usePageTitle";
import { fetchPosts, fetchCategories, WPCategory } from "@/lib/wordpress";

const Blog = () => {
  const [page, setPage] = useState(1);
  const [activeCat, setActiveCat] = useState<number | undefined>(undefined);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  usePageTitle(
    "Blog - Ohio Business Branding Tips & News",
    "Expert tips on business branding, printing, promotional products, vehicle wraps, and marketing strategies for Ohio small businesses."
  );

  const { data: categories = [] } = useQuery({
    queryKey: ["wp-categories"],
    queryFn: fetchCategories,
    staleTime: 10 * 60 * 1000,
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["wp-posts", page, activeCat, search],
    queryFn: () => fetchPosts(page, 9, activeCat, search || undefined),
    staleTime: 2 * 60 * 1000,
  });

  const posts = data?.items || [];
  const totalPages = data?.totalPages || 1;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(searchInput);
    setPage(1);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Buckeye Biz Hub – Resources & Insights",
    description: "Ohio business tips, printing guides, promotional product ideas, and vehicle branding strategies from Buckeye Biz Hub.",
    url: "https://buckeye-brand-boost.lovable.app/blog",
    publisher: { "@type": "Organization", name: "Buckeye Biz Hub" },
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-28 lg:pt-52 lg:pb-36 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,2%)] via-[hsl(0,50%,7%)] to-[hsl(0,0%,2%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[1000px] h-[1000px] rounded-full bg-primary/[0.15] blur-[200px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)", backgroundSize: "52px 52px" }} />
        <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_30px_hsl(0_80%_42%/0.5)]" />
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2.5 text-xs font-extrabold text-primary tracking-[0.35em] uppercase mb-10 bg-primary/[0.15] px-7 py-3 rounded-full border border-primary/35 shadow-[0_0_40px_hsl(0_80%_42%/0.2)]">
            <BookOpen className="w-4 h-4" /> Resources & Insights <BookOpen className="w-4 h-4" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-[0.88] mb-10"
            style={{ textShadow: "0 0 80px rgba(255,255,255,0.35), 0 6px 30px rgba(0,0,0,0.9)" }}>
            Ohio Business Tips,{" "}<br className="hidden md:block" />
            <span className="text-primary text-glow-red">Printing Guides</span>{" "}<br className="hidden md:block" />
            & Branding Strategies
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl md:text-2xl text-primary-foreground/50 max-w-3xl mx-auto font-semibold tracking-wide leading-relaxed">
            Expert insights to help Columbus and Ohio businesses grow through smart printing, branding, and promotional strategies.
          </motion.p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="relative py-8 bg-ohio-grey-light border-b border-border/50 sticky top-[72px] z-30 backdrop-blur-xl bg-ohio-grey-light/95">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => { setActiveCat(undefined); setPage(1); }}
                className={`text-sm font-black uppercase tracking-[0.12em] px-5 py-2.5 rounded-full border-2 transition-all duration-300 ${
                  !activeCat ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_hsl(0_80%_42%/0.3)]" : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-primary"
                }`}>
                All
              </button>
              {categories.filter((c) => c.count > 0 && c.slug !== "uncategorized").map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCat(cat.id); setPage(1); }}
                  className={`text-sm font-black uppercase tracking-[0.12em] px-5 py-2.5 rounded-full border-2 transition-all duration-300 ${
                    activeCat === cat.id ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_hsl(0_80%_42%/0.3)]" : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-primary"
                  }`}>
                  {cat.name}
                </button>
              ))}
            </div>
            <form onSubmit={handleSearch} className="flex gap-2 w-full md:w-auto">
              <Input
                placeholder="Search articles…"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full md:w-64"
              />
              <Button type="submit" size="icon" variant="outline"><Search className="w-4 h-4" /></Button>
            </form>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 lg:py-32 bg-ohio-grey-light relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-150px] w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[180px]" />
        <div className="absolute bottom-[-200px] left-[-150px] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px]" />

        <div className="container relative">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-3xl border-2 border-border overflow-hidden">
                  <Skeleton className="h-52 w-full" />
                  <div className="p-7 space-y-3">
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-black text-foreground mb-4">Unable to Load Posts</h2>
              <p className="text-muted-foreground mb-6">We're having trouble connecting to our blog. Please try again later.</p>
              <Button onClick={() => window.location.reload()}>Retry</Button>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-black text-foreground mb-4">No Posts Found</h2>
              <p className="text-muted-foreground">Try a different category or search term.</p>
            </div>
          ) : (
            <>
              {/* Featured first post */}
              <BlogCard post={posts[0]} featured />

              {/* Grid of remaining */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.slice(1).map((post, i) => (
                  <motion.div key={post.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.06, duration: 0.5 }}>
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-3 mt-16">
                  <Button variant="outline" disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>← Previous</Button>
                  <span className="text-sm font-bold text-muted-foreground">Page {page} of {totalPages}</span>
                  <Button variant="outline" disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>Next →</Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 lg:py-44 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,92%,33%)] via-primary to-[hsl(0,78%,28%)]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-foreground/[0.06] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-foreground/[0.06] rounded-full blur-[180px]" />
        <div className="container relative text-center">
          <motion.h2 initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-10 leading-[0.88]"
            style={{ textShadow: "0 0 80px rgba(255,255,255,0.35), 0 6px 25px rgba(0,0,0,0.6)" }}>
            Ready to Grow{" "}<br className="hidden md:block" />Your Ohio Brand?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/60 mb-16 font-semibold italic font-display max-w-3xl mx-auto">
            Put these strategies into action. Get a free quote for printing, promotional products, or vehicle branding today.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Link to="/contact">
              <Button size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-2xl px-16 py-10 rounded-2xl shadow-[0_12px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_80px_rgba(255,255,255,0.25)] transition-all duration-400 group uppercase tracking-widest">
                <Phone className="w-7 h-7" /> Get Your Free Quote Today
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2.5 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
