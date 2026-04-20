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
  PHOTO_APPAREL_1, PHOTO_VEHICLE_1, PHOTO_SIGNAGE_1,
} from "@/lib/photos";

/** Structured review data with author names and dates */
export const testimonialReviews: (ReviewData & { image?: string })[] = [
  {
    author: "Sarah Thompson",
    authorTitle: "Office Manager",
    authorCompany: "Columbus Family Dental, Columbus OH",
    reviewBody: "David made getting consistent branded scrubs across our team incredibly easy. The quality is excellent and the turnaround was fast. Highly recommend for any dental office.",
    ratingValue: 5,
    datePublished: "2025-11-12",
    image: PHOTO_APPAREL_1,
  },
  {
    author: "Mark Reynolds",
    authorTitle: "Owner",
    authorCompany: "Reynolds Roofing & Exteriors, Westerville OH",
    reviewBody: "The fleet wraps and crew polos look fantastic on our trucks and job sites. The whole process was smooth, and the pricing was better than expected. We'll definitely be using them again.",
    ratingValue: 5,
    datePublished: "2025-10-04",
    image: PHOTO_VEHICLE_1,
  },
  {
    author: "Jennifer Park",
    authorTitle: "Marketing Coordinator",
    authorCompany: "Central Ohio Construction Group, Columbus OH",
    reviewBody: "From yard signs to branded workwear, everything has been top quality. David really understands what looks professional on a job site. Great partner to work with.",
    ratingValue: 5,
    datePublished: "2025-09-18",
    image: PHOTO_SIGNAGE_1,
  },
];

/** The entity being reviewed — shared across pages */
export const REVIEWED_ENTITY = {
  type: "LocalBusiness",
  name: "Buckeye Biz Hub",
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
} as const;

interface TestimonialsSectionProps {
  showAll?: boolean;
}

const TestimonialsSection = ({ showAll = false }: TestimonialsSectionProps) => {
  const items = showAll ? testimonialReviews : testimonialReviews.slice(0, 6);

  // Generate review collection JSON-LD
  const schemaData = reviewCollectionSchema({
    itemReviewed: REVIEWED_ENTITY,
    reviews: items,
    aggregateRating: {
      ratingValue: 4.9,
      ratingCount: 500,
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
