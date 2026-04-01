import { motion } from "framer-motion";
import { Star, Sparkles, ArrowRight, Phone, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  PHOTO_VEHICLE_1, PHOTO_PRINT_2, PHOTO_APPAREL_1,
  PHOTO_SIGNAGE_1, PHOTO_VEHICLE_5, PHOTO_PRINT_6,
} from "@/lib/photos";

export const testimonials = [
  {
    image: PHOTO_PRINT_2,
    quote: "Buckeye Biz Hub completely transformed our brand presence. The business cards and brochures they produced are absolutely stunning — our patients constantly compliment the quality. Best printing partner we've ever worked with in Columbus.",
    stars: 5,
  },
  {
    image: PHOTO_VEHICLE_1,
    quote: "We wrapped our entire fleet of service vans and the results have been incredible. Our phone calls increased significantly within the first two months. The wraps look phenomenal and have held up perfectly through Ohio winters.",
    stars: 5,
  },
  {
    image: PHOTO_APPAREL_1,
    quote: "The custom uniforms and branded merchandise program has been a game-changer. Consistent branding across all locations, and the reorder process is seamless.",
    stars: 5,
  },
  {
    image: PHOTO_SIGNAGE_1,
    quote: "Our trade show presence went from forgettable to show-stopping. The custom tent, retractable banners, and table throws made our booth the busiest at the expo.",
    stars: 5,
  },
  {
    image: PHOTO_VEHICLE_5,
    quote: "As a dealership, image is everything. Buckeye Biz Hub delivered premium signage, branded giveaways, and vehicle decals that elevated our showroom and customer experience.",
    stars: 5,
  },
  {
    image: PHOTO_PRINT_6,
    quote: "I've used Buckeye Biz Hub for yard signs, door hangers, and business cards for years now. Fast turnaround, wholesale pricing, and the quality never disappoints. They're my go-to for everything marketing-related.",
    stars: 5,
  },
];

interface TestimonialsSectionProps {
  showAll?: boolean;
}

const TestimonialsSection = ({ showAll = false }: TestimonialsSectionProps) => {
  const items = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <section className="py-32 lg:py-44 bg-ohio-grey-dark relative overflow-hidden">
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
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative bg-primary-foreground/[0.03] border-2 border-primary-foreground/[0.06] hover:border-primary/30 rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:bg-primary-foreground/[0.05] hover:shadow-[0_25px_70px_-15px_hsl(0_85%_40%/0.15)]"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-primary/[0.08] border border-primary/15 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                <Quote className="w-5 h-5 text-primary/60" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-primary-foreground/50 text-[0.9rem] leading-[1.85] mb-8 font-medium italic">
                "{t.quote}"
              </p>

              {/* Client info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300 flex-shrink-0">
                  <img src={t.image} alt={t.name} loading="lazy" width={56} height={56} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-display text-base font-black text-primary-foreground/80 group-hover:text-primary-foreground transition-colors duration-300">
                    {t.name}
                  </h4>
                  <p className="text-sm font-bold text-primary-foreground/40">{t.company}</p>
                  <span className="inline-block mt-1 text-[0.6rem] font-extrabold text-primary tracking-[0.15em] uppercase bg-primary/[0.1] px-2.5 py-1 rounded-full">
                    {t.tag}
                  </span>
                </div>
              </div>
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
