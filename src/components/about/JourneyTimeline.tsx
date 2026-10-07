"use client";
import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Beer,
  Fuel,
  Lightbulb,
  TrendingUp,
  Building2,
  Sparkles,
} from "lucide-react";

const milestones = [
  {
    year: "2001–2006",
    icon: Fuel,
    title: "Clintonville Automotive Repair Service",
    description:
      "Service manager at my family's independent repair shop, a third-generation business. I learned how a trades business runs: take care of the customer and keep the bays moving.",
  },
  {
    year: "2005",
    icon: Beer,
    title: "Co-founded BeerTubes",
    description:
      "Co-founder and president. I'm a named inventor on the company's patents.",
  },
  {
    year: "2005–2017",
    icon: TrendingUp,
    title: "Grew BeerTubes to $4.5M",
    description:
      "Sales went from $79K in year one to $4.5M. We sold to Anheuser-Busch InBev, MillerCoors, Constellation Brands and 100+ distributors. I sold the company in 2017.",
  },
  {
    year: "2017–2023",
    icon: UtensilsCrossed,
    title: "Built SBC Hospitality Group",
    description:
      "Founder and president. Stein Brewing Co. in Mount Vernon, a Newark brewery and The Joint diner, plus a Dave's Cosmic Subs franchise I co-owned. More than 100 employees.",
  },
  {
    year: "Today",
    icon: Building2,
    title: "Running Buckeye Biz Hub",
    description:
      "I co-founded Buckeye Biz Hub and run it day to day. I line up your branding, print and fleet graphics through trusted partner shops, installers and print vendors.",
  },
];

const JourneyTimeline = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block bg-ohio-gold/15 border border-ohio-gold/40 text-ohio-gold-dark text-xs font-black px-5 py-2 rounded-full mb-6">
            ★ 20+ years of building ★
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-4">
            20+ years of building.{" "}
            <span className="text-primary">Here's the road so far.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A family repair shop, a patented product company and a
            hospitality group. Every lesson goes to work for you.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-12 h-1 bg-primary rounded-full" />
            <div className="w-3 h-3 bg-ohio-gold rounded-full" />
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical center line (desktop) */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-primary/10 -translate-x-1/2"
            aria-hidden="true"
          />
          {/* Vertical left line (mobile) */}
          <div
            className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-primary/10"
            aria-hidden="true"
          />

          <ol className="space-y-10 md:space-y-16">
            {milestones.map((m, idx) => {
              const isLeft = idx % 2 === 0;
              const Icon = m.icon;
              return (
                <motion.li
                  key={m.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="relative md:grid md:grid-cols-2 md:gap-12 items-center"
                >
                  {/* Mobile layout */}
                  <div className="md:hidden relative pl-16">
                    <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg ring-4 ring-background">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="bg-ohio-cream border border-border rounded-2xl p-6">
                      <span className="inline-block text-xs font-black text-primary mb-2">
                        {m.year}
                      </span>
                      <h3 className="font-display text-xl font-black text-foreground mb-2 leading-tight">
                        {m.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {m.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop alternating layout */}
                  {isLeft ? (
                    <>
                      <div className="hidden md:block text-right pr-12">
                        <div className="bg-ohio-cream border border-border rounded-2xl p-7 inline-block text-left max-w-md">
                          <span className="inline-block text-xs font-black text-primary mb-2">
                            {m.year}
                          </span>
                          <h3 className="font-display text-xl lg:text-2xl font-black text-foreground mb-2 leading-tight">
                            {m.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {m.description}
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <div className="hidden md:block pl-12">
                        <div className="bg-ohio-cream border border-border rounded-2xl p-7 max-w-md">
                          <span className="inline-block text-xs font-black text-primary mb-2">
                            {m.year}
                          </span>
                          <h3 className="font-display text-xl lg:text-2xl font-black text-foreground mb-2 leading-tight">
                            {m.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {m.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Center icon node (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-primary text-primary-foreground items-center justify-center shadow-lg ring-4 ring-ohio-gold/40 z-10">
                    <Icon className="w-6 h-6" />
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
