import { Link } from "react-router-dom";
import { Clock, Tag } from "lucide-react";
import { WPPost, getExcerpt, getFeaturedImage, getCategories } from "@/lib/wordpress";
import { format } from "date-fns";

interface BlogCardProps {
  post: WPPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const image = getFeaturedImage(post);
  const categories = getCategories(post);
  const excerpt = getExcerpt(post, featured ? 220 : 140);
  const date = format(new Date(post.date), "MMMM d, yyyy");

  if (featured) {
    return (
      <Link to={`/blog/${post.slug}`} className="block group">
        <div className="bg-card rounded-3xl border-2 border-border hover:border-primary/40 overflow-hidden card-lift shadow-sm hover:shadow-[0_35px_90px_-15px_hsl(0_85%_40%/0.22)] mb-12">
          <div className="grid md:grid-cols-2">
            <div className="relative h-72 md:h-full min-h-[320px] overflow-hidden">
              {image ? (
                <img src={image} alt={post.title.rendered.replace(/<[^>]*>/g, "")} loading="eager" fetchPriority="high" width={640} height={400} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">No Image</div>
              )}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-extrabold text-primary-foreground tracking-[0.2em] uppercase bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-[0_4px_20px_hsl(0_80%_42%/0.4)]">
                  ★ Featured
                </span>
              </div>
            </div>
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                {categories[0] && <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">{categories[0].name}</span>}
                <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{date}</span>
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-black text-card-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              <p className="text-muted-foreground leading-[1.8] mb-6">{excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <span key={c.id} className="text-[0.7rem] font-bold text-muted-foreground bg-muted border border-border rounded-full px-3 py-1.5">
                    <Tag className="w-3 h-3 inline mr-1 text-primary/60" />{c.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${post.slug}`} className="block group">
      <div className="bg-card rounded-3xl border-2 border-border hover:border-primary/40 overflow-hidden card-lift shadow-sm hover:shadow-[0_25px_70px_-15px_hsl(0_85%_40%/0.18)] h-full flex flex-col">
        <div className="relative h-52 overflow-hidden">
          {image ? (
            <img src={image} alt={post.title.rendered.replace(/<[^>]*>/g, "")} loading="lazy" width={400} height={225} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-sm">No Image</div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
          {categories[0] && (
            <div className="absolute top-4 left-4">
              <span className="text-[0.6rem] font-extrabold text-primary-foreground tracking-[0.15em] uppercase bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                {categories[0].name}
              </span>
            </div>
          )}
        </div>
        <div className="p-7 flex flex-col flex-1">
          <span className="text-xs text-muted-foreground mb-3 flex items-center gap-1"><Clock className="w-3 h-3" />{date}</span>
          <h3 className="font-display text-xl font-black text-card-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <p className="text-muted-foreground text-sm leading-[1.8] mb-5 line-clamp-3 flex-1">{excerpt}</p>
          <div className="flex flex-wrap gap-1.5">
            {categories.slice(0, 2).map((c) => (
              <span key={c.id} className="text-[0.65rem] font-bold text-muted-foreground bg-muted border border-border rounded-full px-2.5 py-1 group-hover:border-primary/20 transition-colors">{c.name}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
