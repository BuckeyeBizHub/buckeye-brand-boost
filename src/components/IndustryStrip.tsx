import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    emoji: "🦷",
    title: "Dental Practices",
    description:
      "Branded scrubs, patient referral gifts, office signage, and printed materials — from someone who's run a dental practice from the inside for 15+ years.",
    cta: "See Dental Solutions",
    href: "/dental",
    available: true,
  },
  {
    emoji: "🏠",
    title: "Roofing Contractors",
    description:
      "Fleet wraps, crew apparel, door hangers, yard signs, and marketing materials — built for the spring busy season.",
    cta: "See Roofing Solutions",
    href: "/roofing",
    available: true,
  },
  {
    emoji: "🏗️",
    title: "Construction & GCs",
    description:
      "Branded workwear, vehicle graphics, jobsite banners, and safety gear — for crews that represent you on every job site.",
    cta: "See Construction Solutions",
    href: "/construction",
    available: true,
  },
  {
    emoji: "🚛",
    title: "Fleet & Logistics",
    description:
      "Fleet wraps, driver uniforms, safety vests, and branded materials that keep a growing fleet looking consistent.",
    cta: "Get a Quote",
    href: "/contact",
    available: false,
  },
  {
    emoji: "🏡",
    title: "Real Estate",
    description:
      "Business cards, yard signs, branded notepads, closing gifts, and postcards — everything to look sharp and stay top of mind.",
    cta: "Get a Quote",
    href: "/contact",
    available: false,
  },
  {
    emoji: "🌿",
    title: "Lawn Care & Landscaping",
    description:
      "Fleet graphics, crew shirts, door hangers, yard signs, and seasonal marketing materials — for companies where every truck is a rolling billboard.",
    cta: "Get a Quote",
    href: "/contact",
    available: false,
  },
  {
    emoji: "🏥",
    title: "Medical & Specialty Practices",
    description:
      "Branded scrubs, patient gift packages, office signage, and printed materials — for practices where professionalism matters.",
    cta: "Get a Quote",
    href: "/contact",
    available: false,
  },
  {
    emoji: "🚗",
    title: "Auto Dealers",
    description:
      "Fleet graphics, lot signage, employee polos, and branded customer gifts — for dealers where every detail of the customer experience matters.",
    cta: "Get a Quote",
    href: "/contact",
    available: false,
  },
];

const IndustryStrip = () => {
  return (
    <section
      id="industries-strip"
      className="py-16 lg:py-24 bg-background relative overflow-hidden scroll-mt-24"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-extrabold text-primary tracking-[0.25em] uppercase bg-primary/10 border border-primary/20 px-5 py-2 rounded-full mb-5">
            Industries We Specialize In
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-[1.05] mb-4">
            We specialize in your industry —{" "}
            <span className="text-primary">not just your order.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            We've built dedicated programs for the industries that depend on professional branding to win business, retain clients, and keep crews looking sharp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {industries.map((ind, i) => {
            const inner = (
              <div
                className="group relative h-full bg-card border-2 border-border rounded-2xl p-6 lg:p-7 flex flex-col transition-all duration-300 hover:border-primary/60 hover:shadow-[0_15px_45px_-15px_hsl(0_85%_40%/0.35)] hover:-translate-y-1"
              >
                {!ind.available && (
                  <span className="absolute top-3 right-3 text-[10px] font-extrabold tracking-[0.15em] uppercase bg-muted text-muted-foreground px-2.5 py-1 rounded-full border border-border">
                    Coming Soon
                  </span>
                )}
                <div className="text-4xl mb-3" aria-hidden="true">
                  {ind.emoji}
                </div>
                <h3 className="font-display text-lg lg:text-xl font-black text-foreground mb-3 group-hover:text-primary transition-colors">
                  {ind.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                  {ind.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-2.5 transition-all">
                  {ind.cta}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            );

            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                {ind.href ? (
                  <Link to={ind.href} className="block h-full">
                    {inner}
                  </Link>
                ) : (
                  inner
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-10 text-base text-muted-foreground"
        >
          Don't see your industry? We work with Ohio businesses across dozens of sectors.{" "}
          <Link
            to="/contact"
            className="text-primary font-bold hover:underline underline-offset-4"
          >
            Get a free 24-hour quote →
          </Link>
        </motion.p>
      </div>
    </section>
  );
};

export default IndustryStrip;
