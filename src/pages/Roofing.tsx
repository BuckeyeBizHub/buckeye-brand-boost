import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Hammer, Truck, Award, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { usePageSEO } from "@/hooks/usePageTitle";

import industryConstruction from "@/assets/industry-construction.jpg";

const offerings = [
  {
    title: "Full & Partial Fleet Wraps",
    description:
      "Turn every truck, van, and trailer into a 24/7 rolling billboard — designed for visibility, durability, and Ohio weather.",
  },
  {
    title: "Durable Crew Apparel",
    description:
      "Embroidered hoodies, hi-vis shirts, hats, and jackets built for the job site — comfortable, branded, and long-lasting.",
  },
  {
    title: "Door Hangers & Yard Signs",
    description:
      "High-impact neighborhood marketing that drives leads while you're on a job — printed weather-tough for outdoor use.",
  },
  {
    title: "Carbonless Forms & Paperwork",
    description:
      "Estimates, work orders, invoices, and inspection forms — all branded and built for the field.",
  },
  {
    title: "Marketing Collateral",
    description:
      "Brochures, business cards, presentation folders, and proposal kits that close more roofing bids.",
  },
  {
    title: "Job-Site Signage & Banners",
    description:
      "A-frames, banners, and lawn signs that build instant credibility every time you're on a project.",
  },
];

const Roofing = () => {
  usePageSEO({
    title: "Roofing Contractor Branding & Marketing | Buckeye Biz Hub",
    description:
      "Fleet wraps, crew apparel, door hangers, yard signs, and marketing materials for Central Ohio roofing contractors. Real-world experience helping 9 local roofing operations.",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={industryConstruction}
            alt="Professional roofing crew with branded truck on a job site"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0,0%,4%/0.7)] via-[hsl(0,0%,4%/0.8)] to-[hsl(0,0%,4%/0.95)]" />
        </div>
        <div className="container relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-7 bg-primary/15 px-5 py-2 rounded-full border border-primary/30 backdrop-blur-sm">
            <Hammer className="w-4 h-4" /> Roofing & Exterior Contractors
          </div>
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[1.05] mb-6"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}
          >
            Branding That Books More{" "}
            <span className="text-primary text-glow-red">Roofing Jobs</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 font-medium leading-relaxed max-w-3xl mx-auto">
            Fleet wraps, crew apparel, door hangers, yard signs, carbonless forms, and full marketing materials — built for Central Ohio roofing companies that want to look like the most professional crew on every job.
          </p>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 lg:py-20 bg-ohio-grey-light">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border-2 border-primary/20 rounded-2xl p-8 md:p-10 shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-3">
                  Hands-On Roofing Industry Experience
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  We've personally helped <span className="font-bold text-foreground">9 local roofing operations</span> across Central Ohio elevate their brand — and we doubled sales for a vehicle wrap company that served the roofing trade. We understand the rhythm of the season, the wear-and-tear demands of crew gear, and the marketing channels that actually generate roofing leads in this market.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <Truck className="w-4 h-4" /> What We Provide
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground">
              Everything a Roofing Crew Needs to{" "}
              <span className="text-primary">Win More Work</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-card border-2 border-border hover:border-primary/40 rounded-2xl p-7 hover:shadow-lg transition-all duration-300"
              >
                <Shield className="w-7 h-7 text-primary mb-4" />
                <h3 className="font-display text-lg font-black text-foreground mb-2">{o.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{o.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-ohio-grey-light">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/[0.12] to-primary/[0.04] border-2 border-primary/40 rounded-3xl p-10 md:p-14 text-center shadow-[0_20px_60px_hsl(0_80%_42%/0.15)]">
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4 leading-tight">
              Ready to Brand Your <span className="text-primary">Roofing Business?</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              From wrapping your first truck to outfitting your entire crew, we'll build you a quote in 24 hours. No pressure, just honest pricing and expert guidance.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.7)] transition-all duration-300 group uppercase tracking-wider"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-6">
              Or browse <Link to="/industries" className="text-primary font-bold hover:underline">all industries we serve</Link>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Roofing;
