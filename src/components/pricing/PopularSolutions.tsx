import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import pricingVehicle from "@/assets/pricing-vehicle-wrap.jpg";
import pricingApparel from "@/assets/pricing-apparel.jpg";
import pricingSignage from "@/assets/pricing-signage.jpg";
import pricingRebrand from "@/assets/pricing-rebrand.jpg";

const solutions: { image: string; title: string; price: string | null; popular?: boolean; bullets: string[] }[] = [
  {
    image: pricingVehicle,
    title: "Vehicle Wraps & Fleet Branding",
    price: null,
    bullets: [
      "Full-color wraps & partial wraps",
      "Magnetic signs & vehicle lettering",
      "Fleet consistency across all vehicles",
      "All fees shown upfront",
    ],
  },
  {
    image: pricingApparel,
    title: "Branded Apparel & Promo Products",
    price: null,
    popular: true,
    bullets: [
      "Custom polos, hoodies & tees",
      "Drinkware, hats & embroidery",
      "Promotional giveaways & merch",
      "Transparent pricing, no surprises",
    ],
  },
  {
    image: pricingSignage,
    title: "Signage & Yard Signs",
    price: null,
    bullets: [
      "Coroplast & metal yard signs",
      "Banners & job-site signage",
      "A-frames & directional signs",
      "12x12, 12x18, 18x24 and more sizes",
      "Every cost disclosed at quote",
    ],
  },
  {
    image: pricingRebrand,
    title: "Business Branding Packages",
    price: null,
    bullets: [
      "Vehicle wraps + apparel + signage",
      "Business cards & marketing materials",
      "Website creation & design",
      "Google Business Profile optimization",
      "SEO to boost your online visibility",
      "Everything bundled with big savings",
      "100% transparent – nothing hidden",
    ],
  },
];

const PopularSolutions = () => (
  <section className="py-20 lg:py-28 bg-ohio-cream">
    <div className="container max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
          Popular Solutions &{" "}
          <span className="text-primary">Starting Prices</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Every quote includes full pricing transparency — all fees disclosed up
          front so you know exactly what you're paying.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
        {solutions.map((sol, i) => (
          <motion.div
            key={sol.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`relative bg-card rounded-2xl overflow-hidden border-2 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 flex flex-col ${
              sol.popular
                ? "border-primary ring-2 ring-primary/20 scale-[1.02]"
                : "border-border"
            }`}
          >
            {sol.popular && (
              <span className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                Most Popular
              </span>
            )}

            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={sol.image}
                alt={`${sol.title} - Buckeye Biz Hub Ohio`}
                loading="lazy"
                width={800}
                height={640}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-display text-xl font-black text-foreground mb-2 leading-tight">
                {sol.title}
              </h3>

              {sol.price && (
                <div className="mb-4">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    From
                  </span>
                  <p className="text-3xl font-black text-primary">{sol.price}</p>
                </div>
              )}

              {/* Bullets */}
              <ul className="space-y-2 mb-6 flex-1">
                {sol.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <CheckCircle className="w-4 h-4 text-ohio-forest flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link to="/contact">
                <Button className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-bold text-sm py-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
                  Get My Exact Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PopularSolutions;
