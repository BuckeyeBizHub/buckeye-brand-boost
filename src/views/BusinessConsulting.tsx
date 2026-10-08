"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "@/lib/compat/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const davidHero = "/assets/david-stein-hero.jpg";
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
    title: "Strategy sessions",
    body: "One focused conversation about one decision. A marketing spend, a hire, how to position your brand, a new competitor, a pricing problem. You walk away with a clear recommendation and a next step. No retainer. No long-term commitment.",
    tagline: "Best for: I need to think through this one thing with someone who's been there.",
  },
  {
    title: "Marketing and business audits",
    body: "A full review of your marketing, brand and how you go to market. We look at competitors, your brand and every marketing channel. You get a written, ranked list: what to fix first, what to invest in next and what to stop doing.",
    tagline: "Best for: I'm not getting the results I should. Look at the whole picture and tell me what's broken.",
  },
  {
    title: "Ongoing advisory",
    body: "A monthly relationship. Regular check-ins, help with big decisions, oversight on brand and marketing, and the eye of someone who has built a company and sold it. This is the deepest option. It fits best when you're growing, scaling or going through a big change.",
    tagline: "Best for: I want someone I can call when something big comes up, who already knows my business.",
  },
];

const BusinessConsulting = () => {
  usePageSEO({
    title: "Business Consulting Columbus Ohio | Advice From an Operator",
    description:
      "Marketing and business consulting for Central Ohio companies from David Stein. He co-founded BeerTubes, grew it to $4.5M and sold it in 2017. Operator strategy for owners who make real decisions.",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-ohio-navy/90 via-ohio-grey-dark to-ohio-navy/80" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              <span className="inline-block bg-primary/20 border border-primary/40 text-primary text-xs font-bold px-5 py-2 rounded-full mb-6">
                Consulting for Central Ohio businesses
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.75rem] xl:text-6xl font-black leading-[1.05] mb-6 text-primary-foreground">
                Marketing strategy from an operator,{" "}
                <span className="text-primary text-glow-red">not an agency</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                Most consultants have never built a business. David Stein co-founded a patented product company, grew it from $79K to $4.5M and sold it. You get advice from someone who has lived the problems you're trying to solve.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-base md:text-lg px-9 py-7 rounded-2xl transition-all duration-300 group "
                  >
                    Schedule a consultation
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
                  alt="David Stein, co-founder of Buckeye Biz Hub, Columbus Ohio"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[hsl(220,30%,3%)/0.95] via-[hsl(220,30%,3%)/0.7] to-transparent pt-16 pb-4 px-5">
                  <p className="text-base font-black text-primary-foreground leading-tight">
                    David Stein
                  </p>
                  <p className="text-xs text-primary-foreground/75 font-semibold">
                    Co-founder, Buckeye Biz Hub · Columbus, Ohio
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: The problem */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
          >
            <span className="inline-block text-xs font-extrabold text-primary mb-3">
              The problem with most marketing advice
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              Why most marketing consultants{" "}
              <span className="text-primary">don't help</span>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Walk into any Columbus networking event and you'll meet a dozen marketing consultants. Most have never owned a business.
              </p>
              <p>
                They've worked at agencies, sold software and taken courses. Their advice sounds smart in a slide deck. It falls apart when you have to make payroll Friday.
              </p>
              <p>
                That's theory dressed up as expertise.
              </p>
              <p>
                You're spending real money on real decisions. You need someone who's been where you are and will tell you what moves the needle.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Who David is */}
      <section className="py-20 lg:py-24 bg-ohio-cream">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
          >
            <span className="inline-block text-xs font-extrabold text-primary mb-3">
              Who you're working with
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              Three businesses. One sold.{" "}
              <span className="text-primary">20+ years of operating.</span>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Before co-founding Buckeye Biz Hub, David worked in three industries:
              </p>
              <p>
                Clintonville Automotive Repair Service, 2001–2006. Service manager at his family's independent repair shop, a third-generation business. He learned customer service and how a trades business really runs.
              </p>
              <p>
                BeerTubes, 2005–2017. Co-founder, president and named inventor on its patents. He grew sales from $79K in year one to $4.5M, selling to Anheuser-Busch InBev, MillerCoors, Constellation Brands and 100+ distributors. He sold the company in 2017.
              </p>
              <p>
                SBC Hospitality Group, 2017–2023. Founder and president of Stein Brewing Co. in Mount Vernon, a Newark brewery and The Joint diner, plus co-owner of a Dave's Cosmic Subs franchise. More than 100 employees.
              </p>
              <p>
                That's an operator background. Some people tell you what should work. David has seen what does.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Who David works with */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
          >
            <span className="inline-block text-xs font-extrabold text-primary mb-3">
              Who benefits most
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              Who gets the most from{" "}
              <span className="text-primary">an operator's advice</span>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                The businesses David works with tend to look like this:
              </p>
              <p>
                Established Central Ohio businesses, usually $500K to $10M a year. You've outgrown DIY marketing but don't need a full agency.
              </p>
              <p>
                Owners who make their own decisions and want honest input.
              </p>
              <p>
                Companies at a turning point: scaling up, adding a service, coming back from a setback, getting ready to sell, or figuring out why marketing isn't working.
              </p>
              <p>
                Owners who also run the day to day. The advice has to be practical. You don't have time for a 90-day strategy deck.
              </p>
              <p>
                David's current advisory work covers Central Ohio businesses in moving, roofing and home services, health and wellness, and legal services. The industries change. The principles don't.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Three ways to work together (cards) */}
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
            <span className="inline-block text-xs font-extrabold text-primary mb-3">
              How we work
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-foreground leading-[1.1]">
              Three ways to{" "}
              <span className="text-primary">work together</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every engagement fits your situation. No fixed template. Most land in one of these three:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            Pricing depends on scope. Every engagement starts with a free conversation to see if it's a fit.
          </motion.p>
        </div>
      </section>

      {/* Section 6: The Buckeye Biz Hub difference */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
          >
            <span className="inline-block text-xs font-extrabold text-primary mb-3">
              Strategy plus execution
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              Strategy and execution{" "}
              <span className="text-primary">in one place</span>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Most consultants hand you a plan and leave. Then you're on your own, hunting for designers, printers, sign shops, promo vendors and wrap installers.
              </p>
              <p>
                That's where most marketing plans die. The plan is fine. The work gets split across vendors who don't talk to each other.
              </p>
              <p>
                At Buckeye Biz Hub, the advice can come with the work. Our branding concierge handles printing, promo products, vehicle graphics, embroidered apparel and signs. We coordinate it all through trusted Central Ohio partner shops, installers and print vendors.
              </p>
              <p>
                Use David for strategy only. Use the concierge for execution only. Or get both from one person who sees the whole picture.
              </p>
              <p className="text-foreground font-semibold">
                Few consultants in Central Ohio offer both.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Honest limitations */}
      <section className="py-20 lg:py-24 bg-ohio-cream">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
          >
            <span className="inline-block text-xs font-extrabold text-primary mb-3">
              What David doesn't do
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-foreground leading-[1.1]">
              The limits,{" "}
              <span className="text-primary">up front</span>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                You should know what you're not getting:
              </p>
              <p>
                David isn't an enterprise consultant. This isn't for Fortune 500 work or companies over $25M in revenue. It's built for the businesses he knows: Central Ohio operators with real revenue and real problems.
              </p>
              <p>
                David isn't a specialist agency. Need deep technical SEO, big paid media campaigns or specialized digital work? He'll tell you what to do and point you to the right specialists. He doesn't run paid ad accounts.
              </p>
              <p>
                David doesn't do everything. He brings operating experience and a clear plan to owners who need both. That's the lane.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
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
              Start with{" "}
              <span className="text-primary text-glow-red">a conversation</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg md:text-xl mb-10 leading-relaxed">
              We talk about what you're trying to do, what's working and what isn't. The first call is free. No pressure to commit. If David is the right fit, he'll tell you. If someone else would serve you better, he'll tell you that too.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-ohio-red-light font-black text-base md:text-lg px-9 py-7 rounded-2xl transition-all duration-300 group "
                >
                  Schedule a free call
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
                  Call (614) 561-3358
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
