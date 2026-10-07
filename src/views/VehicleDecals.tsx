"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, Clock, Award, MapPin, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/compat/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePageSEO } from "@/hooks/usePageTitle";

const trustItems = [
  { icon: Clock, label: "Free 24-Hour Quote" },
  { icon: Award, label: "Commercial-Grade Vinyl" },
  { icon: MapPin, label: "Serving Central Ohio" },
  { icon: TrendingUp, label: "Starting at $150" },
];

const decalCards = [
  {
    title: "Door decals",
    body: "The most popular and cheapest way to brand a vehicle. Your logo, phone number and website on the doors turns a plain car into a business vehicle. Seen from both sides, thousands of times a day.",
    cost: "$150–$300 for a set of door decals",
    best: "Company cars, real estate agents, property managers, small business owners",
  },
  {
    title: "Logo and brand graphics",
    body: "A full spot-graphic package: logo, brand colors, tagline, phone, website and service list on the doors, rear and back glass.",
    cost: "$250–$500 per vehicle",
    best: "Service businesses, contractors, professional services",
  },
  {
    title: "Rear window and tailgate graphics",
    body: "Perforated vinyl on the back glass. You can still see out, and everyone behind you sees full-color graphics.",
    cost: "$100–$300",
    best: "All business vehicles, especially delivery and service vehicles",
  },
  {
    title: "Custom cut vinyl lettering",
    body: "Vinyl lettering for your business name, phone, website, DOT numbers and license info. Dozens of colors.",
    cost: "$50–$200",
    best: "Work trucks, service vans, trailers, box trucks",
  },
  {
    title: "Magnetic signs",
    body: "On for work, off for the weekend. Any size, same print quality as permanent decals.",
    cost: "$75–$200 per pair",
    best: "Vehicles used for both personal and business purposes",
  },
  {
    title: "Trailer and box truck lettering",
    body: "Big graphics and lettering for trailers and box trucks. Lots of visibility for the money.",
    cost: "$300–$800 depending on coverage",
    best: "Landscaping trailers, construction, moving companies",
  },
];

const compareRows = [
  { f: "Coverage", s: "Logo and text", p: "Sides and doors", w: "Entire vehicle" },
  { f: "Starting price", s: "$150–$400", p: "$800–$1,800", w: "$2,800+" },
  { f: "Installation", s: "Hours", p: "1 day", w: "1–3 days" },
  { f: "Best for", s: "Budget branding and leased vehicles", p: "Mid-range visibility", w: "Maximum impact" },
  { f: "Removable", s: "Yes", p: "Yes", w: "Yes" },
];

const VehicleDecals = () => {
  usePageSEO({
    title: "Vehicle Decals and Spot Graphics Columbus Ohio | Business Vehicle Branding | Buckeye Biz Hub",
    description:
      "Custom vehicle decals and spot graphics for Columbus, Ohio businesses. Sourced from top local vinyl shops. Starting at $150. Free quote.",
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-32 lg:pt-52 lg:pb-44 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(216,14%,6%)] via-[hsl(216,14%,7%)] to-[hsl(216,14%,6%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[1200px] h-[1200px] rounded-full bg-primary/[0.18] hidden" />
        </div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[700px] h-[500px] rounded-full bg-ohio-red-glow/[0.12] hidden" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-transparent via-primary to-transparent " />

        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2.5 text-xs font-extrabold text-primary mb-10 bg-primary/[0.15] px-7 py-3 rounded-full border border-primary/35 "
          >
            <Sparkles className="w-4 h-4" /> Vehicle Decals <Sparkles className="w-4 h-4" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-primary-foreground leading-[0.95] mb-10"
            style={{ textShadow: "0 0 80px rgba(255,255,255,0.35), 0 6px 30px rgba(0,0,0,0.9)" }}
          >
            Vehicle Decals and Spot Graphics for{" "}
            <span className="text-primary text-glow-red relative">
              Columbus Ohio Businesses
              <motion.span
                className="absolute -bottom-3 left-0 w-full h-[5px] bg-gradient-to-r from-transparent via-ohio-red-glow to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg md:text-xl lg:text-2xl text-primary-foreground/60 max-w-4xl mx-auto font-semibold tracking-wide leading-relaxed"
          >
            Brand your vehicle without a full wrap. Starting at $150 per vehicle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-primary-foreground/[0.04] border border-primary-foreground/10 rounded-xl p-4 text-left"
              >
                <item.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-xs md:text-sm font-bold text-primary-foreground/85 leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-base md:text-lg px-10 py-7 rounded-2xl transition-all duration-300 group "
              >
                <CheckCircle2 className="w-5 h-5" />
                Get a Free Decal Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Not every vehicle needs a full wrap. For company cars, leased vehicles or fleets on a budget, spot decals do the job for a fraction of the cost.
            </p>
            <p>
              We coordinate custom decals for Columbus and Central Ohio businesses. One logo on a door, or a full package with your logo, phone, website, tagline and services. Everything goes on commercial-grade vinyl that handles Ohio weather all year.
            </p>
            <p>
              We shop your job across our Central Ohio partner shops. You get more options and better pricing than going to one shop yourself.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border">
        <div className="container max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-black text-center mb-12 text-foreground"
          >
            Spot Decals vs Full Wraps:{" "}
            <span className="text-primary">Which Is Right for Your Vehicle?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-border shadow-[0_10px_40px_rgba(0,0,0,0.08)] bg-card"
          >
            <div className="grid grid-cols-4 bg-ohio-navy text-primary-foreground text-xs md:text-sm font-bold ">
              <div className="p-4 md:p-5 border-r border-primary-foreground/10">Feature</div>
              <div className="p-4 md:p-5 border-r border-primary-foreground/10">Spot Decals</div>
              <div className="p-4 md:p-5 border-r border-primary-foreground/10">Partial Wrap</div>
              <div className="p-4 md:p-5 bg-primary">Full Wrap</div>
            </div>
            {compareRows.map((row, i) => (
              <div
                key={row.f}
                className={`grid grid-cols-4 ${i % 2 === 0 ? "bg-background" : "bg-muted/40"} border-t border-border text-sm md:text-base`}
              >
                <div className="p-4 md:p-5 font-bold text-foreground border-r border-border">{row.f}</div>
                <div className="p-4 md:p-5 text-muted-foreground border-r border-border">{row.s}</div>
                <div className="p-4 md:p-5 text-muted-foreground border-r border-border">{row.p}</div>
                <div className="p-4 md:p-5 text-foreground font-semibold bg-primary/[0.04]">{row.w}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Decal types */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-black text-center mb-14 text-foreground"
          >
            Our Vehicle Decal and{" "}
            <span className="text-primary">Graphic Options</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {decalCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="rounded-2xl p-7 bg-card border border-border hover:border-primary/40 hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all flex flex-col"
              >
                <div className="text-xs font-extrabold text-primary mb-3">
                  Card {i + 1}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-black text-foreground mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                  {card.body}
                </p>
                <div className="mt-auto space-y-2 pt-4 border-t border-border text-sm">
                  <div>
                    <span className="font-bold text-foreground">Typical cost:</span>{" "}
                    <span className="text-primary font-semibold">{card.cost}</span>
                  </div>
                  <div>
                    <span className="font-bold text-foreground">Best for:</span>{" "}
                    <span className="text-muted-foreground">{card.best}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Built by an operator: credibility callout, directly above CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mt-14 max-w-3xl mx-auto bg-ohio-cream rounded-2xl p-8 md:p-10 border border-border"
          >
            <span className="inline-block text-xs font-extrabold text-primary mb-3">
              Built by an operator
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-black mb-4 text-foreground leading-[1.15]">
              Built by{" "}
              <span className="text-primary">Someone Who's Done It</span>
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              David Stein co-founded and runs Buckeye Biz Hub. Before that he co-founded BeerTubes, a patented product company, grew it from $79K to $4.5M and sold it in 2017. Then he built a brewery and restaurant group with 100+ employees. The advice you get here comes from someone who spent his own money on marketing and knows what works.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:gap-2 transition-all"
            >
              Learn more about David
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="text-center mt-10">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-base md:text-lg px-10 py-7 rounded-2xl transition-all duration-300 group "
              >
                Get a Free Decal Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VehicleDecals;
