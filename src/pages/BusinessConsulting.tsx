import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import davidHero from "@/assets/david-stein-hero.jpg";
import { usePageSEO } from "@/hooks/usePageTitle";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" as const },
  }),
};

const engagementTypes = [
  {
    title: "Strategy Sessions",
    body: "A single focused conversation about a specific challenge or decision you're facing. Best for business owners who need an experienced outside perspective on a particular issue — a marketing investment, a hiring decision, a brand positioning question, a competitive threat, a pricing problem. You leave with clarity, a specific recommendation, and a clear path forward. No retainer, no long-term commitment.",
    tagline: "Best for: I need to think through this one thing with someone who's been there.",
  },
  {
    title: "Marketing & Business Audits",
    body: "A comprehensive review of your current marketing, brand positioning, and go-to-market strategy. Includes competitive analysis, brand audit, marketing channel evaluation, and a written set of prioritized recommendations. You leave with a clear roadmap of what to fix first, what to invest in next, and what to stop doing.",
    tagline: "Best for: I'm not getting the results I should be getting. I need someone to look at the whole picture and tell me what's actually broken.",
  },
  {
    title: "Ongoing Advisory Relationships",
    body: "Monthly engagement for business owners who want a strategic partner walking alongside them. Includes regular check-ins, decision support, brand and marketing oversight, and the operational eye of someone who's built and sold companies. This is the deepest engagement and works best for businesses navigating growth, scaling decisions, or significant transitions.",
    tagline: "Best for: I want someone I can call when something important comes up — and who actually knows my business.",
  },
];

const BusinessConsulting = () => {
  usePageSEO({
    title: "Business Consulting Columbus Ohio | Strategic Guidance From a 3-Time Founder",
    description:
      "Marketing and business consulting for Central Ohio companies from David Stein — third-generation operator and three-time founder including a patented product company sold to industry leaders. Operator-level strategy, not agency theory.",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-ohio-navy/90 via-ohio-grey-dark to-ohio-navy/80" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              <span className="inline-block bg-primary/20 border border-primary/40 text-primary text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
                Strategic Consulting for Central Ohio Businesses
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.75rem] xl:text-6xl font-black leading-[1.05] mb-6 text-primary-foreground">
                Marketing Strategy From an Operator,{" "}
                <span className="text-primary text-glow-red">Not an Agency</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                Most consultants have never built a business. David Stein has built three — including a patented product company sold to industry leaders. Buckeye Biz Hub offers Central Ohio business owners something rare: strategic guidance from someone who's actually lived the problems they're trying to solve.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-base md:text-lg px-9 py-7 rounded-2xl shadow-[0_0_40px_hsl(0_80%_42%/0.45)] hover:shadow-[0_0_70px_hsl(0_80%_42%/0.65)] transition-all duration-300 group uppercase tracking-wider"
                  >
                    Schedule a Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="lg:col-span-5 relative w-full max-w-[340px] mx-auto"
            >
              <div className="relative rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl aspect-[4/5]">
                <img
                  src={davidHero}
                  alt="David Stein, 3-time business founder and Columbus Ohio operator"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[hsl(220,30%,3%)/0.95] via-[hsl(220,30%,3%)/0.7] to-transparent pt-16 pb-4 px-5">
                  <p className="text-base font-black text-primary-foreground leading-tight">
                    David Stein
                  </p>
                  <p className="text-xs text-primary-foreground/75 font-semibold">
                    3-Time Business Founder · Columbus, Ohio
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 — The Problem */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
          >
            <span className="inline-block text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-3">
              The Problem With Most Marketing Advice
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              Why Most Marketing Consultants{" "}
              <span className="text-primary">Don't Actually Help</span>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Walk into any networking event in Columbus and you'll meet a dozen marketing consultants. Most of them have one thing in common: they've never owned a business.
              </p>
              <p>
                They've worked at agencies. They've sold software. They've taken courses. They give advice that sounds smart in a presentation but falls apart when you have to make payroll Friday.
              </p>
              <p>
                That's not strategic guidance. That's theory dressed up as expertise.
              </p>
              <p>
                When you're running a real business — making real decisions with real money — you don't need theory. You need someone who's been where you are and can tell you what actually moves the needle.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3 — Who David Is */}
      <section className="py-20 lg:py-24 bg-ohio-cream">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
          >
            <span className="inline-block text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-3">
              Who You're Working With
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              Three Companies Built. One Sold.{" "}
              <span className="text-primary">Decades of Real Operating Experience.</span>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                David Stein has founded three companies across three industries before launching Buckeye Biz Hub:
              </p>
              <p>
                Clintonville Automotive Repair (2001-2006) — Third-generation family service business. Operations, customer service, and the realities of running a trades business in Central Ohio.
              </p>
              <p>
                BeerTubes (2005-2017) — A patented product company David started from his basement and built into a category-defining brand. 28 patents. B2B sales to InBev, Anheuser-Busch, MillerCoors, and Constellation Brands. Featured in their on-premise catalogs nationally. Sold to industry in 2017.
              </p>
              <p>
                SBC Hospitality Group (2018-2024) — Three restaurants in one year: an independent classic diner (The Joint), a Dave's Cosmic Subs franchise in Mount Vernon Ohio, and Stein Brewing Company. Multi-concept operations at the same time.
              </p>
              <p>
                That's not a marketing background. That's an operator background. It's the difference between someone telling you what should work and someone showing you what actually does.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 — Who David Works With */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
          >
            <span className="inline-block text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-3">
              Who Benefits Most
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              Who Benefits Most From{" "}
              <span className="text-primary">Operator-Level Consulting</span>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                The businesses David works with share a few common traits:
              </p>
              <p>
                Established Central Ohio businesses typically doing $500K to $10M in annual revenue who have outgrown DIY marketing but aren't ready for a full agency engagement.
              </p>
              <p>
                Owner-operators who make their own decisions and want strategic input from someone they can trust to be honest.
              </p>
              <p>
                Companies stuck at a transition point — scaling up, launching a new service line, recovering from a setback, preparing for a sale, or trying to figure out why marketing isn't working.
              </p>
              <p>
                Businesses where the owner is also the operator — meaning the advice has to be practical, not theoretical. You don't have time for a 90-day strategy deck.
              </p>
              <p>
                David's current advisory work includes Central Ohio businesses in moving and relocation services, roofing and home services, health and wellness, and legal services. The industries vary. The strategic principles don't.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5 — Three Ways to Work Together (cards) */}
      <section className="py-20 lg:py-24 bg-ohio-cream">
        <div className="container max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
            className="max-w-3xl mb-12"
          >
            <span className="inline-block text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-3">
              Engagement Formats
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-foreground leading-[1.1]">
              Three Ways to{" "}
              <span className="text-primary">Work Together</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every consulting engagement is built around your specific situation. There's no fixed template. That said, most engagements fall into one of three formats:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {engagementTypes.map((card, idx) => (
              <motion.div
                key={card.title}
                custom={idx + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                className="flex"
              >
                <div className="flex flex-col h-full bg-background border border-border rounded-2xl p-6 md:p-7 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-display text-xl md:text-2xl font-black text-foreground mb-4 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-5 flex-grow">
                    {card.body}
                  </p>
                  <div className="pt-4 border-t border-primary/15">
                    <p className="text-sm text-primary font-bold italic leading-relaxed">
                      {card.tagline}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-10 text-center text-base text-muted-foreground italic max-w-3xl mx-auto"
          >
            Pricing is customized for each engagement based on scope and depth. Every consulting relationship starts with a free conversation to determine fit and approach.
          </motion.p>
        </div>
      </section>

      {/* Section 6 — The Buckeye Biz Hub Difference */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
          >
            <span className="inline-block text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-3">
              Strategy Plus Execution
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              Strategy and Execution{" "}
              <span className="text-primary">Under One Roof</span>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Most consultants give you strategy and leave. You're then on your own to execute — finding designers, printers, signage companies, promotional product vendors, and vehicle wrap installers.
              </p>
              <p>
                That's where most marketing strategies die. The plan is good but the execution is fragmented across vendors who don't talk to each other.
              </p>
              <p>
                Buckeye Biz Hub is different. Strategic guidance comes with the option of full execution through our branding concierge service — printing, promotional products, vehicle graphics, embroidered apparel, signage, all coordinated under one roof through our Central Ohio vendor network.
              </p>
              <p>
                You can use David for strategy only. You can use the concierge service for execution only. Or you can have both — strategy and execution from the same partner who understands the whole picture.
              </p>
              <p className="text-foreground font-semibold">
                Few consultants offer this. None at this scale in Central Ohio.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7 — Honest Limitations */}
      <section className="py-20 lg:py-24 bg-ohio-cream">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
          >
            <span className="inline-block text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-3">
              What David Doesn't Do
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              Honest Limitations{" "}
              <span className="text-primary">Worth Knowing About</span>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Operator-level consulting comes with some honest limits worth being upfront about:
              </p>
              <p>
                David isn't an enterprise consultant. This isn't for Fortune 500 strategy work or businesses with revenue above $25M. The advice is built for the businesses David actually understands — Central Ohio operators with real businesses, real revenue, and real challenges.
              </p>
              <p>
                David isn't a specialist agency. If you need deep technical SEO work, paid media campaigns at scale, or specialized digital marketing execution, you'll get strategic guidance on what to do and recommendations on specialists to execute — but David isn't running paid ad accounts.
              </p>
              <p>
                David doesn't do everything. What he does well is bring operating experience and strategic clarity to business owners who need both. That's the lane.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 8 — Final CTA */}
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
              Start With{" "}
              <span className="text-primary text-glow-red">a Conversation</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg md:text-xl mb-10 leading-relaxed">
              Every engagement starts the same way: a real conversation about what you're trying to do, what's working, and what isn't. There's no charge for the initial call. There's no pressure to commit to anything. If David is the right fit for what you need, he'll tell you. If you'd be better served by someone else or some other approach, he'll tell you that too.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-base md:text-lg px-9 py-7 rounded-2xl shadow-[0_0_40px_hsl(0_80%_42%/0.45)] hover:shadow-[0_0_70px_hsl(0_80%_42%/0.65)] transition-all duration-300 group uppercase tracking-wider"
                >
                  Schedule a Free Consultation Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <a href="tel:+16145613358">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/40 text-primary-foreground hover:bg-primary/10 font-bold text-base md:text-lg px-9 py-7 rounded-2xl gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call 614-561-3358
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessConsulting;
