"use client";
import { useMemo, useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import { ButtonLink } from "@/components/site/ui";
import { cn } from "@/lib/utils";
import { toPlainText, type BlogCategory, type BlogPostSummary } from "@/lib/blog-utils";

const PER_PAGE = 9;

interface BlogBrowserProps {
  /** All posts, newest first. */
  posts: BlogPostSummary[];
  categories: BlogCategory[];
}

/** Category filter, search and paging over the post list. All in the browser. */
export default function BlogBrowser({ posts: allPosts, categories }: BlogBrowserProps) {
  const [page, setPage] = useState(1);
  const [activeCat, setActiveCat] = useState<string | undefined>(undefined);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const filtered = useMemo(() => {
    const words = search.toLowerCase().split(/\s+/).filter(Boolean);
    return allPosts.filter((p) => {
      if (activeCat && !p.categories.some((c) => c.slug === activeCat)) return false;
      if (words.length === 0) return true;
      const haystack = [p.title, toPlainText(p.excerpt), ...p.categories.map((c) => c.name), ...p.tags.map((t) => t.name)]
        .join(" ")
        .toLowerCase();
      return words.every((w) => haystack.includes(w));
    });
  }, [allPosts, activeCat, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const posts = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const filtering = Boolean(search || activeCat);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    setSearch(searchInput);
    setPage(1);
  };

  const clearFilters = () => {
    setSearch("");
    setSearchInput("");
    setActiveCat(undefined);
    setPage(1);
  };

  const chip = (active: boolean) =>
    cn(
      "inline-flex min-h-[40px] items-center rounded-md border px-3.5 text-sm font-medium transition-colors",
      active ? "border-ink bg-ink text-paper" : "border-border bg-white text-ink hover:border-ink/40",
    );

  return (
    <>
      {/* Filter and search */}
      <div className="mb-10 flex flex-col gap-4 border-b border-border pb-8 lg:flex-row lg:items-center lg:justify-between">
        <ul className="flex flex-wrap gap-2" aria-label="Categories">
          <li>
            <button
              type="button"
              aria-pressed={!activeCat}
              onClick={() => {
                setActiveCat(undefined);
                setPage(1);
              }}
              className={chip(!activeCat)}
            >
              All posts
            </button>
          </li>
          {categories
            .filter((c) => c.slug !== "uncategorized")
            .map((cat) => (
              <li key={cat.slug}>
                <button
                  type="button"
                  aria-pressed={activeCat === cat.slug}
                  onClick={() => {
                    setActiveCat(cat.slug);
                    setPage(1);
                  }}
                  className={chip(activeCat === cat.slug)}
                >
                  {cat.name}
                </button>
              </li>
            ))}
        </ul>
        <form onSubmit={handleSearch} role="search" className="flex w-full gap-2 lg:w-auto lg:shrink-0">
          <label htmlFor="blog-search" className="sr-only">
            Search articles
          </label>
          <input
            id="blog-search"
            type="search"
            placeholder="Search articles"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="min-h-[44px] w-full min-w-0 rounded-md border border-border bg-white px-3.5 text-[0.975rem] text-ink placeholder:text-muted-foreground focus:border-ink focus:outline-none lg:w-64"
          />
          <button
            type="submit"
            aria-label="Search"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-ink/25 bg-white text-ink transition-colors hover:border-ink"
          >
            <Search className="h-4 w-4" aria-hidden />
          </button>
        </form>
      </div>

      {posts.length === 0 ? (
        <div className="mx-auto max-w-2xl py-12 text-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)]">{filtering ? "No articles found" : "New articles are on the way"}</h2>
          <p className="mt-4 text-lg text-body">
            {filtering
              ? "Nothing matched that search. Try a different word or browse all posts."
              : "Guides on printing, vehicle graphics and promo products for Ohio businesses are coming soon."}
          </p>
          {filtering && (
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 text-sm font-semibold text-brand underline-offset-4 hover:underline"
            >
              Clear filters and show all posts
            </button>
          )}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact">Get a free quote</ButtonLink>
            <ButtonLink href="/services" variant="outline">
              See what we make
            </ButtonLink>
          </div>
        </div>
      ) : (
        <>
          <BlogCard post={posts[0]} featured />

          {posts.length > 1 && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.slice(1).map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <nav aria-label="Pagination" className="mt-14 flex items-center justify-center gap-3">
              <button
                type="button"
                disabled={page <= 1}
                onClick={() => setPage((p) => p - 1)}
                className="inline-flex min-h-[44px] items-center rounded-md border border-ink/25 bg-white px-4 text-sm font-semibold text-ink transition-colors hover:border-ink disabled:pointer-events-none disabled:opacity-40"
              >
                Previous
              </button>
              <span className="text-sm text-muted-foreground">
                Page {page} of {totalPages}
              </span>
              <button
                type="button"
                disabled={page >= totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="inline-flex min-h-[44px] items-center rounded-md border border-ink/25 bg-white px-4 text-sm font-semibold text-ink transition-colors hover:border-ink disabled:pointer-events-none disabled:opacity-40"
              >
                Next
              </button>
            </nav>
          )}
        </>
      )}
    </>
  );
}
