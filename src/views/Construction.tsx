"use client";
import { motion } from "framer-motion";
import { Link } from "@/lib/compat/router";
import {
  ArrowRight,
  CheckCircle2,
  HardHat,
  Truck,
  Award,
  Shield,
  Shirt,
  Megaphone,
  FileText,
  LayoutGrid,
  Gift,
  Users,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePageSEO } from "@/hooks/usePageTitle";
const constructionHero = "/assets/construction-hero.jpg";
const constructionTeam = "/assets/construction-team.jpg";
const constructionSafetyDecals = "/assets/construction-safety-decals.jpg";
const constructionHivisUniforms = "/assets/construction-hivis-uniforms.jpg";
const PHOTO_BASE = "/photos";
// Reusing existing job-site / fleet photos from the bucket: same crews, hard hats, vests, and trucks.
const HERO_IMG = constructionHero;
const JOBSITE_IMG = constructionHivisUniforms;
const FLEET_IMG = `${PHOTO_BASE}/roofing-fleet-briggs.jpg`;

const products = [
  {
    icon: Shirt,
    title: "Branded workwear and safety gear",
    description:
      "Embroidered polos, t-shirts, hoodies and hi-vis vests. Every crew member looks the same and is easy to spot on site.",
    image: `${PHOTO_BASE}/roofing-apparel-titan.jpg`,
    imageAlt: "Embroidered branded crew polo shirts packed for delivery to a construction company",
  },
  {
    icon: Truck,
    title: "Vehicle wraps and fleet graphics",
    description:
      "Full wraps, partial wraps and magnetic signs for trucks, vans, trailers and heavy equipment. Built to last through Ohio winters and job-site abuse.",
    image: `${PHOTO_BASE}/roofing-truck-wrap-bluepeaks.jpg`,
    imageAlt: "Construction contractor pickup truck with full branded vehicle wrap",
  },
  {
    icon: HardHat,
    title: "Hard hat wraps and safety decals",
    description:
      "Custom hard hat wraps and helmet graphics. Your crew stands out on a site full of other contractors.",
    image: constructionSafetyDecals,
    imageAlt: "Reflective First Aid CPR Trained and Safety Officer vinyl hard hat decals for construction crews",
  },
  {
    icon: Megaphone,
    title: "Jobsite banners and fence signs",
    description:
      "Weather-resistant banners, fence wraps and site signs. Every project becomes a billboard for your company.",
    image: `${PHOTO_BASE}/roofing-yard-sign-shingles.jpg`,
    imageAlt: "Large weather-resistant jobsite banner mounted on a construction fence",
  },
  {
    icon: Users,
    title: "Trade show booths and event displays",
    description:
      "Retractable banners, table throws and backdrops for home shows, builders expos and industry events.",
    image: `${PHOTO_BASE}/roofing-trade-show-shift.jpg`,
    imageAlt: "Construction company trade show booth with branded backdrop and retractable banners",
  },
  {
    icon: FileText,
    title: "Business cards, sales sheets and folders",
    description:
      "Business cards, proposal folders and leave-behinds. Your bids should look as sharp as your work.",
    image: `${PHOTO_BASE}/roofing-business-cards-american.jpg`,
    imageAlt: "Branded business cards and proposal folders for a construction contractor",
  },
  {
    icon: LayoutGrid,
    title: "Carbonless contracts and job-site forms",
    description:
      "Branded, numbered work orders, change orders and inspection forms built for the field.",
    image: `${PHOTO_BASE}/roofing-carbonless-form.jpg`,
    imageAlt: "Multi-part carbonless contract and work order forms for construction job sites",
  },
  {
    icon: Gift,
    title: "Promo products and employee gifts",
    description:
      "Branded drinkware, jackets and thank-you gifts. Your crew feels appreciated and your name stays in front of people.",
    image: `${PHOTO_BASE}/roofing-direct-mail-postcard.jpg`,
    imageAlt: "Branded promotional products and employee appreciation gifts for a construction crew",
  },
];

const faqs = [
  {
    q: "Do you work with both small construction crews and large multi-location operations?",
    a: "Yes. Small specialty contractors often start with polos, business cards and one truck wrap. Big general contractors and multi-location builders get full fleet graphics, bulk safety gear, jobsite sign programs and trade show materials.",
  },
  {
    q: "How quickly can you turn around branded workwear and fleet graphics?",
    a: "Most embroidered polos, t-shirts and hi-vis vests ship in 1–2 weeks. Full wraps and big fleet programs usually take 2–3 weeks, depending on the design and how many vehicles. Need crews outfitted before a project kicks off? Ask about rush options.",
  },
  {
    q: "Do you offer volume discounts for larger crews?",
    a: "Yes. Orders of 10+ embroidered polos, hoodies or safety vests get real discounts, and so do full fleet wrap packages. Send us your crew size and equipment list and we'll price the project.",
  },
  {
    q: "Can we order a small test batch before committing to a full crew rollout?",
    a: "Yes. Plenty of contractors start with a few polos, one hard hat wrap or one truck wrap to check the design and quality. Then they roll it out to the crew or fleet. We'd rather earn the bigger order than push it.",
  },
  {
    q: "Do you wrap heavy equipment like skid steers, excavators, and dump trucks?",
    a: "Yes. Equipment graphics and partial wraps turn every machine on your site into an ad. The design fits the curves, panels and wear points of each machine.",
  },
  {
    q: "Can you help with a full rebrand: new logo, uniforms, fleet, and signage all at once?",
    a: "Yes, and we like those jobs. We line up the logo, colors and fonts, wraps, crew apparel, business cards, jobsite signs and trade show materials so it all launches together and matches.",
  },
  {
    q: "How does the free cost comparison work?",
    a: "Send us a list or photos of what you buy now: uniforms, hard hat wraps, banners, business cards, forms. We'll send back a side-by-side showing what we can do at the same or better quality. Often for less.",
  },
  {
    q: "Do you support construction companies outside Columbus?",
    a: "Yes. We work with contractors across Central Ohio: Columbus, Dublin, Westerville, Marion, Delaware, Newark, Lancaster and about 50 miles around. Most orders ship straight to your office or job site.",
  },
];

const audiences = [
  "General contractors and construction managers",
  "Commercial and industrial builders",
  "Specialty trades and subcontractors",
  "Residential builders and remodelers",
  "Multi-location construction companies",
  "Design-build firms",
];

const Construction = () => {
  usePageSEO({
    title: "Workwear, Fleet Wraps and Jobsite Signs for Ohio Contractors",
    description:
      "Branded workwear, vehicle graphics, jobsite banners and trade show displays for Central Ohio contractors. We shop top vendors so you get the best price.",
  });

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Orange Road Work Ahead sign with Ohio construction crew in high-visibility vests and a dump truck on a road job site at golden hour"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[hsl(0,0%,2%/0.78)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(0,0%,2%/0.92)] via-[hsl(0,0%,2%/0.72)] to-[hsl(0,0%,2%/0.88)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0,0%,2%/0.65)] via-[hsl(0,0%,2%/0.55)] to-[hsl(0,0%,2%/0.98)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(0,0%,2%/0.55)_0%,_hsl(0,0%,2%/0.92)_80%)]" />
        </div>
        <div className="container relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-7 bg-primary/15 px-5 py-2 rounded-full border border-primary/30 backdrop-blur-sm"
          >
            <HardHat className="w-4 h-4" /> Ohio construction and general contractors
          </motion.div>
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[1.05] mb-6"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.98), 0 4px 16px rgba(0,0,0,0.95), 0 8px 40px rgba(0,0,0,0.85), 0 0 80px rgba(0,0,0,0.7)" }}
          >
            Make every job site and truck look like the{" "}
            <span
              className="text-primary text-glow-red inline-block"
              style={{
                WebkitTextStroke: "1.5px hsl(0 0% 100%)",
                textShadow:
                  "0 0 2px hsl(0 0% 100% / 0.9), 0 2px 8px rgba(0,0,0,0.95), 0 0 30px hsl(0 85% 40% / 0.7), 0 0 60px hsl(0 85% 40% / 0.4)",
                paintOrder: "stroke fill",
              }}
            >
              company you've built
            </span>
          </h1>
          <p
            className="text-lg md:text-xl text-primary-foreground font-medium leading-relaxed max-w-3xl mx-auto mb-10"
            style={{ textShadow: "0 2px 6px rgba(0,0,0,0.98), 0 4px 18px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7)" }}
          >
            Workwear, vehicle graphics, jobsite banners, trade show displays and safety gear for Ohio contractors. How your crew looks is part of your reputation.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.7)] transition-all duration-300 group uppercase tracking-wider"
            >
              Get a free construction branding quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Professional Courtesy Banner */}
      <section className="bg-primary/10 border-b border-primary/20 py-4">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-primary">
            Professional courtesy for Ohio businesses:{" "}
            <span className="font-semibold">20% off your first order</span>{" "}
            on top of wholesale pricing. No commitment.
          </p>
        </div>
      </section>

      {/* Section 1: Why construction companies choose us */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
                <Shield className="w-4 h-4" /> Why construction companies choose us
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
                Your crews are on Ohio job sites every day.{" "}
                <span className="text-primary">We make sure they look the part.</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                In construction, you build your reputation one project at a time. How your crew shows up on day one, before a nail goes in, tells the owner and the site manager a lot about you.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We help Central Ohio general contractors, commercial builders and specialty trades get their field teams looking sharp and matching on every site. The truck that pulls up, the crew on the ground, the banner on the fence. Each one tells people who you are.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden border-2 border-border shadow-[0_20px_60px_hsl(0_80%_42%/0.15)]"
            >
              <img
                src={JOBSITE_IMG}
                alt="Rack of high-visibility orange and yellow safety jackets with reflective striping for Ohio construction crews"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Our story */}
      <section className="py-20 lg:py-28 bg-ohio-grey-light">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-2"
            >
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
                <Award className="w-4 h-4" /> Our story
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
                We know what holds up{" "}
                <span className="text-primary">on a job site</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                I've helped build <span className="font-bold text-foreground">3 businesses</span> here in Central Ohio. In the last 20 months, I helped a local vehicle wrap company <span className="font-bold text-foreground">double their fleet branding division's revenue</span>. I worked directly with contractors on fleet graphics, wraps and crew gear that hold up on job sites.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                I've also spent <span className="font-bold text-foreground">15+ years</span> helping my wife, Dr. Kerry Stein, run Marion Endodontics in Marion, Ohio. I handle procurement, branding and materials for a busy practice. I know what it means to need things done right, on time, by someone who gets your world.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We bring that to Ohio construction companies. We know what holds up on a job site and what doesn't. Some vendors just print things. We get it.
              </p>
              <p className="mt-6 text-sm font-bold text-primary uppercase tracking-wider">
                David Stein, co-founder, Buckeye Biz Hub
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-1 relative rounded-2xl overflow-hidden border-2 border-border shadow-[0_20px_60px_hsl(0_80%_42%/0.15)]"
            >
              <img
                src={FLEET_IMG}
                alt="Fully branded construction company fleet pickup truck with full vehicle wrap"
                className="w-full h-full object-cover aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[hsl(0,0%,4%/0.95)] to-transparent">
                <p className="text-primary-foreground font-bold text-lg">Real fleet branding</p>
                <p className="text-primary-foreground/70 text-sm">A look that helps win the bid before you say a word</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Products and solutions */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <Sparkles className="w-4 h-4" /> Products and solutions
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
              What your crews, fleet and job sites need to{" "}
              <span className="text-primary">look professional</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The first truck that pulls up to the last banner on the fence. We handle all of it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-card border-2 border-border hover:border-primary/40 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-ohio-grey-light">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                    <p.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-black text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Who we serve */}
      <section className="py-20 lg:py-28 bg-ohio-grey-light">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <Users className="w-4 h-4" /> Who we serve
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
              Built for every kind of{" "}
              <span className="text-primary">Ohio construction company</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A 4-person specialty crew or a multi-location commercial builder. We fit how your team works.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-3"
          >
            {audiences.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-card border border-border rounded-xl px-5 py-4 hover:border-primary/40 hover:shadow-md transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-semibold text-foreground">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <HelpCircle className="w-4 h-4" /> Frequently asked questions
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
              Straight answers for{" "}
              <span className="text-primary">construction companies</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Questions we hear from Central Ohio contractors, answered like we would on the job site.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`faq-${i}`}
                  className="bg-card border-2 border-border rounded-2xl px-6 md:px-7 hover:border-primary/40 transition-all data-[state=open]:border-primary/50 data-[state=open]:shadow-md"
                >
                  <AccordionTrigger className="text-left font-display text-base md:text-lg font-black text-foreground hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Free Cost Comparison */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-card border border-border rounded-3xl p-10 shadow-sm">
            <h3 className="font-display text-3xl font-bold text-foreground mb-4">
              Free cost comparison. No commitment.
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Tell us what you spend now on workwear, fleet graphics, jobsite signs or print. We'll show you what we can do for less.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-foreground text-background font-semibold px-10 py-4 rounded-2xl hover:bg-foreground/85 transition-colors"
            >
              Get your free comparison
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/[0.12] to-primary/[0.04] border-2 border-primary/40 rounded-3xl p-10 md:p-14 text-center shadow-[0_20px_60px_hsl(0_80%_42%/0.15)]"
          >
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
              Ready for your crews and fleet to look like{" "}
              <span className="text-primary">the company you've built?</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Free quotes within 24 hours. A no-obligation cost comparison shows what our wholesale network can do next to what you pay now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.7)] transition-all duration-300 group uppercase tracking-wider"
                >
                  Get a free construction quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/industries">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-foreground/20 hover:border-primary/40 text-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl uppercase tracking-wider"
                >
                  See all industries we serve
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Construction;
