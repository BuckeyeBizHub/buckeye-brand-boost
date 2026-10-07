"use client";
import { motion } from "framer-motion";
import { Link } from "@/lib/compat/router";
import { ArrowRight, Truck, CheckCircle2, Award, Users, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { usePageSEO } from "@/hooks/usePageTitle";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" as const },
  }),
};

const FleetAndLogistics = () => {
  // TODO: replace SEO title/description with finalized copy
  // TODO: remove noindex once placeholder TODO content is populated
  usePageSEO({
    title: "Fleet & Logistics Branding | Columbus Ohio | Buckeye Biz Hub",
    description:
      "TODO: Final SEO description for Ohio fleet and logistics companies: fleet wraps, driver uniforms, safety vests, branded materials.",
    noindex: true,
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-ohio-navy/90 via-ohio-grey-dark to-ohio-navy/80" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-7 bg-primary/15 px-5 py-2 rounded-full border border-primary/30">
              <Truck className="w-4 h-4" /> Ohio fleet and logistics
            </span>
            {/* TODO: finalize H1 + subheadline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.75rem] xl:text-6xl font-black leading-[1.05] mb-6 text-primary-foreground">
              One look across{" "}
              <span className="text-primary text-glow-red">every truck and every driver</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed max-w-2xl mx-auto mb-8">
              TODO: Hero subheadline: fleet wraps, driver uniforms, safety vests, and branded materials for Ohio fleet operators.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-base md:text-lg px-9 py-7 rounded-2xl transition-all duration-300 group "
              >
                Get a free fleet quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Why Ohio Fleet Operators Choose Us */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} custom={0} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-3">
              <Award className="w-4 h-4" /> Why fleet operators trust Buckeye Biz Hub
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              TODO: Section 1 headline:{" "}
              <span className="text-primary">value prop for fleet operators.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              TODO: Section 1 body: why we get fleet operations (vehicle downtime cost, phased installation, brand consistency across a growing fleet).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Products & Solutions */}
      <section className="py-20 lg:py-24 bg-ohio-cream">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} custom={0} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-3">
              <Sparkles className="w-4 h-4" /> What we do for fleets
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              TODO: Section 2 headline: products grid intro.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              TODO: Replace with product cards (full wraps, spot graphics, decal kits, driver polos/jackets, safety vests, trailer graphics, branded ID badges).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Who We Serve */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} custom={0} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-3">
              <Users className="w-4 h-4" /> Who we serve
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              TODO: Fleet audiences:{" "}
              <span className="text-primary">delivery, moving, service-fleet, trucking.</span>
            </h2>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /> TODO: Audience 1</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /> TODO: Audience 2</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /> TODO: Audience 3</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Section 4: The Buckeye Biz Hub Difference */}
      <section className="py-20 lg:py-24 bg-ohio-cream">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} custom={0} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary mb-3">
              <Award className="w-4 h-4" /> The Buckeye Biz Hub difference
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              TODO: Differentiator headline.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              TODO: 4–5 differentiator cards (wholesale pricing, fast turnaround, concierge service, phased rollout for active fleets, local Ohio install).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Operator credibility insert, above final CTA */}
      <section className="py-16 lg:py-20 bg-ohio-cream">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-extrabold text-primary mb-3">
              Built by an operator
            </span>
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-black mb-6 text-foreground leading-[1.15]">
              Run by someone who's{" "}
              <span className="text-primary">been in your seat.</span>
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              David Stein co-founded Buckeye Biz Hub and runs it day to day. Before that, he co-founded BeerTubes, was named inventor on its patents, grew it from $79K in year one to $4.5M and sold it in 2017. Then he built SBC Hospitality Group to 100+ employees. He's spent his own money on marketing. He knows what works and what doesn't.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:gap-2 transition-all"
            >
              Learn more about David
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-ohio-grey-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ohio-navy/60 via-ohio-grey-dark to-ohio-navy/40" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-5 leading-tight">
              TODO: Final CTA headline for{" "}
              <span className="text-primary text-glow-red">fleet and logistics.</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg md:text-xl mb-10 leading-relaxed">
              TODO: Final CTA body: invitation to start a conversation.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-base md:text-lg px-9 py-7 rounded-2xl transition-all duration-300 group "
              >
                Get a free fleet quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FleetAndLogistics;
