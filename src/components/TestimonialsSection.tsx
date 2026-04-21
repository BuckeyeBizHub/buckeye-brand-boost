import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ReviewCard from "@/components/ReviewCard";
import type { ReviewData } from "@/lib/structured-data";
import {
  reviewCollectionSchema,
  SITE_URL,
  DEFAULT_OG_IMAGE,
} from "@/lib/structured-data";
import {
  PHOTO_APPAREL_1, PHOTO_VEHICLE_1, PHOTO_VEHICLE_5, PHOTO_SIGNAGE_1, PHOTO_PRINT_2, PHOTO_PRINT_6,
} from "@/lib/photos";

/** Structured review data — role-based authors for credibility and safety */
export const testimonialReviews: (ReviewData & { image?: string })[] = [
  {
    author: "Office Manager",
    authorTitle: "Office Manager",
    authorCompany: "Multi-Location Dental Practice · Columbus, OH",
    reviewBody: "David sourced our staff polos and patient referral gift packages and made it completely painless. One call and everything was handled — I don't know why I waited so long to reach out.",
    ratingValue: 5,
    datePublished: "2025-11-15",
    image: PHOTO_PRINT_2,
  },
  {
    author: "Owner",
    authorTitle: "Owner",
    authorCompany: "Roofing Contractor · Central Ohio",
    reviewBody: "Our trucks look completely different on the road now. We started getting calls from homeowners who saw our van in the neighborhood before we even knocked on a door. The wraps have held up perfectly through an Ohio winter.",
    ratingValue: 5,
    datePublished: "2025-10-22",
    image: PHOTO_VEHICLE_1,
  },
  {
    author: "Practice Administrator",
    authorTitle: "Practice Administrator",
    authorCompany: "Specialty Dental Practice · Ohio",
    reviewBody: "The branded scrubs and holiday referral gift packages were exactly what we needed. David understood our practice immediately — felt like working with someone who already knew how dental offices operate.",
    ratingValue: 5,
    datePublished: "2025-09-08",
    image: PHOTO_APPAREL_1,
  },
  {
    author: "VP of Operations",
    authorTitle: "VP of Operations",
    authorCompany: "Logistics Company · Columbus, OH",
    reviewBody: "Consistent fleet branding across our trucks was something we'd been putting off for years. Buckeye Biz Hub made it straightforward — one partner, one process, everything matched.",
    ratingValue: 5,
    datePublished: "2025-08-14",
    image: PHOTO_VEHICLE_5,
  },
  {
    author: "Marketing Manager",
    authorTitle: "Marketing Manager",
    authorCompany: "Construction Company · Dublin, OH",
    reviewBody: "Trade show booth, branded folders, crew polos — all done in one order. Better quality than our previous vendor and the turnaround was faster than promised.",
    ratingValue: 5,
    datePublished: "2025-07-30",
    image: PHOTO_SIGNAGE_1,
  },
  {
    author: "Owner",
    authorTitle: "Owner",
    authorCompany: "Lawn Care & Landscaping · Westerville, OH",
    reviewBody: "Door hangers and yard signs that actually generate callbacks. First time a vendor asked me what I was trying to accomplish before recommending what to order.",
    ratingValue: 5,
    datePublished: "2025-06-19",
    image: PHOTO_PRINT_6,
  },
];

/** The entity being reviewed — shared across pages */
export const REVIEWED_ENTITY = {
  type: "LocalBusiness",
  name: "Buckeye Biz Hub",
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  description:
    "Ohio branding and promotional products concierge — printing, vehicle wraps, signage, and apparel for Columbus and Central Ohio businesses.",
} as const;

interface TestimonialsSectionProps {
  showAll?: boolean;
}

const TestimonialsSection = ({ showAll = false }: TestimonialsSectionProps) => {
  const items = showAll ? testimonialReviews : testimonialReviews.slice(0, 3);

  // Generate review collection JSON-LD with an aggregate rating that
  // matches the actual number of reviews emitted on the page (Google
  // flags mismatched/inflated review counts as structured-data errors).
  const avgRating =
    Math.round(
      (items.reduce((sum, r) => sum + r.ratingValue, 0) / items.length) * 10,
    ) / 10;

  const schemaData = reviewCollectionSchema({
    itemReviewed: REVIEWED_ENTITY,
    reviews: items,
    aggregateRating: {
      ratingValue: avgRating,
      ratingCount: items.length,
      reviewCount: items.length,
      bestRating: 5,
      worstRating: 1,
    },
  });

  return (
    <section
      className="py-14 lg:py-20 bg-ohio-grey-dark relative overflow-hidden"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,5%)] via-[hsl(0,30%,6%)] to-[hsl(220,25%,5%)]" />
      <div className="absolute top-[-200px] right-[-150px] w-[700px] h-[700px] bg-primary/[0.07] rounded-full blur-[200px]" />
      <div className="absolute bottom-[-200px] left-[-150px] w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[150px]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-6 bg-primary/[0.1] border border-primary/20 px-6 py-2.5 rounded-full shadow-[0_0_25px_hsl(0_85%_40%/0.12)]">
            <Sparkles className="w-3.5 h-3.5" />
            Testimonials
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[0.88] mb-6"
            style={{ textShadow: '0 0 60px rgba(255,255,255,0.2), 0 4px 20px rgba(0,0,0,0.8)' }}>
            What Our Clients{" "}
            <span className="text-primary text-glow-red">Say</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/40 max-w-2xl mx-auto font-medium">
            Don't take our word for it — hear from Ohio businesses we've helped grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <ReviewCard review={review} image={review.image} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-20"
        >
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-xl px-14 py-8 rounded-xl shadow-[0_0_50px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_80px_hsl(0_80%_42%/0.7)] transition-all duration-300 group uppercase tracking-wider" style={{ animation: 'pulse-glow 3s infinite' }}>
              <Phone className="w-6 h-6" />
              Join Our Happy Clients – Get Your Free Quote
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
