import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, ArrowRight, Calendar, User, Phone } from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { usePageSEO } from "@/hooks/usePageTitle";
import { fetchPost, fetchRelatedPosts, getFeaturedImage, getCategories, getAuthor, WPPost } from "@/lib/wordpress";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ["wp-post", slug],
    queryFn: () => fetchPost(slug!),
    enabled: !!slug,
  });

  const { data: related = [] } = useQuery({
    queryKey: ["wp-related", post?.id],
    queryFn: () => fetchRelatedPosts(post!),
    enabled: !!post,
  });

  const title = post ? post.title.rendered.replace(/<[^>]*>/g, "") : "Loading…";
  const excerpt = post ? post.excerpt.rendered.replace(/<[^>]*>/g, "").slice(0, 155) : undefined;
  const ogImage = post ? (getFeaturedImage(post) || undefined) : undefined;

  usePageSEO({
    title,
    description: excerpt,
    canonical: post ? `https://www.buckeyebizhub.com/blog/${post.slug}` : undefined,
    ogImage,
    ogType: "article",
  });

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 container max-w-4xl">
          <Skeleton className="h-10 w-3/4 mb-6" />
          <Skeleton className="h-80 w-full mb-8 rounded-2xl" />
          <Skeleton className="h-4 w-full mb-3" />
          <Skeleton className="h-4 w-full mb-3" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-40 pb-20 container text-center">
          <h1 className="text-4xl font-black text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">Sorry, we couldn't find that article.</p>
          <Link to="/blog"><Button variant="default">← Back to Blog</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const image = getFeaturedImage(post);
  const categories = getCategories(post);
  const author = getAuthor(post);
  const date = format(new Date(post.date), "MMMM d, yyyy");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    ...(image && { image }),
    datePublished: post.date,
    dateModified: post.modified,
    author: { "@type": "Person", name: author?.name || "David Stein" },
    publisher: { "@type": "Organization", name: "Buckeye Biz Hub" },
    url: `https://www.buckeyebizhub.com/blog/${post.slug}`,
    description: excerpt,
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-28 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,2%)] via-[hsl(0,50%,7%)] to-[hsl(0,0%,2%)]" />
        {image && <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center", filter: "blur(40px)" }} />}
        <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_30px_hsl(0_80%_42%/0.5)]" />
        <div className="container relative max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {categories.map((c) => (
              <span key={c.id} className="text-[0.65rem] font-extrabold text-primary-foreground tracking-[0.15em] uppercase bg-primary/90 px-4 py-1.5 rounded-full">{c.name}</span>
            ))}
          </div>
          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight mb-6"
            style={{ textShadow: "0 0 60px rgba(255,255,255,0.2), 0 4px 20px rgba(0,0,0,0.8)" }}
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div className="flex items-center gap-6 text-primary-foreground/50 text-sm">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {date}</span>
            {author && <span className="flex items-center gap-2"><User className="w-4 h-4" /> {author.name}</span>}
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24 bg-background">
        <div className="container max-w-3xl">
          {image && (
            <img
              src={image} alt={post.title.rendered.replace(/<[^>]*>/g, "")}
              className="w-full rounded-2xl mb-12 shadow-lg"
              loading="eager"
              fetchPriority="high"
              width={960}
              height={540}
            />
          )}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-display prose-headings:font-black prose-headings:text-foreground
              prose-p:text-muted-foreground prose-p:leading-[1.9]
              prose-a:text-primary prose-a:font-semibold hover:prose-a:underline
              prose-img:rounded-xl prose-img:shadow-md
              prose-strong:text-foreground
              prose-blockquote:border-l-primary prose-blockquote:bg-muted/30 prose-blockquote:rounded-r-xl prose-blockquote:py-1 prose-blockquote:px-6"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* Service cross-links */}
          <div className="mt-12 p-8 rounded-2xl bg-muted/40 border border-border">
            <h3 className="font-display text-xl font-black text-foreground mb-4">Explore Our Services</h3>
            <p className="text-muted-foreground text-sm mb-5">Looking for help with your next project? Browse our most popular services:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { to: "/promotional-products", label: "Promotional Products" },
                { to: "/business-cards", label: "Business Cards" },
                { to: "/vehicle-wraps-and-fleet", label: "Vehicle Wraps" },
                { to: "/branded-apparel", label: "Branded Apparel" },
                { to: "/banners-and-flags", label: "Banners & Flags" },
                { to: "/yard-signs-and-signage", label: "Signage" },
              ].map((s) => (
                <Link key={s.to} to={s.to} className="text-sm font-bold text-primary bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-full transition-colors">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-10 rounded-3xl bg-gradient-to-br from-primary to-[hsl(0,78%,28%)] text-center">
            <h3 className="font-display text-3xl font-black text-primary-foreground mb-4">Need Help With Your Project?</h3>
            <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">David Stein · Your Buckeye Branding Concierge is ready to help you bring your ideas to life.</p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-lg px-10 py-7 rounded-xl">
                <Phone className="w-5 h-5" /> Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-20 bg-ohio-grey-light">
          <div className="container">
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-12 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((r) => <BlogCard key={r.id} post={r} />)}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
