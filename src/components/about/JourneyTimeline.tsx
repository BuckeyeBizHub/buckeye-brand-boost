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
    year: "1990s",
    icon: UtensilsCrossed,
    title: "Hospitality Beginnings",
    description:
      "Launched my first company from scratch in the hospitality industry — learning the fundamentals of operations, service, and what it really takes to make customers happy.",
  },
  {
    year: "Early 2000s",
    icon: Beer,
    title: "Entered the Beverage Industry",
    description:
      "Pivoted into beverage, building a second company from the ground up while mastering product development, sales, and distribution.",
  },
  {
    year: "Mid 2000s",
    icon: Lightbulb,
    title: "Co-Invented the Beer Tube",
    description:
      "From a basement prototype to bars and restaurants nationwide — co-invented the iconic beer tube dispenser that changed how people share drinks.",
  },
  {
    year: "Late 2000s",
    icon: TrendingUp,
    title: "Scaled to $5M / Year",
    description:
      "Grew the beer tube company into a $5 million-a-year business — proving I could turn an idea into a real, scalable operation while keeping quality high.",
  },
  {
    year: "2010s",
    icon: Fuel,
    title: "Built a Gasoline Industry Company",
    description:
      "Started a third company in the gasoline industry — adding manufacturing, large-scale operations, and B2B leadership to my experience.",
  },
  {
    year: "2020s",
    icon: Building2,
    title: "Founded Buckeye Biz Hub",
    description:
      "After 30+ years of building businesses, I created Buckeye Biz Hub as a true concierge service for Columbus and Central Ohio small and medium businesses.",
  },
  {
    year: "Today",
    icon: Sparkles,
    title: "Your Buckeye Branding Concierge",
    description:
      "Helping hundreds of local Ohio businesses look professional, save time, and grow — with honesty, transparency, and personal care on every project.",
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
          <span className="inline-block bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
            30+ Years of Building
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-4">
            David's Entrepreneurial{" "}
            <span className="text-primary">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Three companies built from scratch. One iconic invention. Decades
            of lessons — all working for you.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
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
                      <span className="inline-block text-xs font-black uppercase tracking-wider text-primary mb-2">
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
                          <span className="inline-block text-xs font-black uppercase tracking-wider text-primary mb-2">
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
                          <span className="inline-block text-xs font-black uppercase tracking-wider text-primary mb-2">
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
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-primary text-primary-foreground items-center justify-center shadow-lg ring-4 ring-background z-10">
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
