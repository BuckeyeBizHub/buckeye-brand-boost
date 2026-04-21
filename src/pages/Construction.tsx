import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
import { localBusinessSchema, BUCKEYE_LOCAL_BUSINESS_OPTS, breadcrumbFromPath } from "@/lib/structured-data";
import constructionHero from "@/assets/construction-hero.jpg";
import constructionTeam from "@/assets/construction-team.jpg";
import constructionSafetyDecals from "@/assets/construction-safety-decals.jpg";
import constructionHivisUniforms from "@/assets/construction-hivis-uniforms.jpg";

const PHOTO_BASE = "https://ustxmgctwrjdzcpsrewb.supabase.co/storage/v1/object/public/photos";
// Reusing existing job-site / fleet photos from the bucket — same crews, hard hats, vests, and trucks.
const HERO_IMG = constructionHero;
const JOBSITE_IMG = constructionHivisUniforms;
const FLEET_IMG = `${PHOTO_BASE}/roofing-fleet-briggs.jpg`;

const products = [
  {
    icon: Shirt,
    title: "Branded Workwear & Safety Gear",
    description:
      "Embroidered polos, t-shirts, hoodies, and high-visibility safety vests that keep every crew member looking consistent and identifiable on every job site.",
    image: `${PHOTO_BASE}/roofing-apparel-titan.jpg`,
    imageAlt: "Embroidered branded crew polo shirts packed for delivery to a construction company",
  },
  {
    icon: Truck,
    title: "Vehicle Wraps & Fleet Graphics",
    description:
      "Full wraps, partial wraps, and magnetic signs for trucks, vans, trailers, and heavy equipment that hold up through Ohio winters and job-site conditions.",
    image: `${PHOTO_BASE}/roofing-truck-wrap-bluepeaks.jpg`,
    imageAlt: "Construction contractor pickup truck with full branded vehicle wrap",
  },
  {
    icon: HardHat,
    title: "Hard Hat Wraps & Safety Decals",
    description:
      "Custom hard hat wraps and helmet graphics that keep your crew identified and branded on multi-contractor job sites.",
    image: constructionSafetyDecals,
    imageAlt: "Reflective First Aid CPR Trained and Safety Officer vinyl hard hat decals for construction crews",
  },
  {
    icon: Megaphone,
    title: "Jobsite Banners & Fence Signage",
    description:
      "Weather-resistant jobsite banners, construction fence wraps, and site signage that turn every project into a billboard for your company.",
    image: `${PHOTO_BASE}/roofing-yard-sign-shingles.jpg`,
    imageAlt: "Large weather-resistant jobsite banner mounted on a construction fence",
  },
  {
    icon: Users,
    title: "Trade Show Booths & Event Displays",
    description:
      "Retractable banners, table throws, branded backdrops, and materials for home shows, builders expos, and industry events.",
    image: `${PHOTO_BASE}/roofing-trade-show-shift.jpg`,
    imageAlt: "Construction company trade show booth with branded backdrop and retractable banners",
  },
  {
    icon: FileText,
    title: "Business Cards, Sales Sheets & Folders",
    description:
      "Professional business cards, proposal folders, and branded leave-behinds that make your bids look as polished as your work.",
    image: `${PHOTO_BASE}/roofing-business-cards-american.jpg`,
    imageAlt: "Branded business cards and proposal folders for a construction contractor",
  },
  {
    icon: LayoutGrid,
    title: "Carbonless Contract & Job-Site Forms",
    description:
      "Branded, numbered work orders, change orders, and inspection forms built for the field.",
    image: `${PHOTO_BASE}/roofing-carbonless-form.jpg`,
    imageAlt: "Multi-part carbonless contract and work order forms for construction job sites",
  },
  {
    icon: Gift,
    title: "Promotional Products & Employee Gifts",
    description:
      "Branded drinkware, jackets, and appreciation gifts that build team loyalty and keep your company name visible.",
    image: `${PHOTO_BASE}/roofing-direct-mail-postcard.jpg`,
    imageAlt: "Branded promotional products and employee appreciation gifts for a construction crew",
  },
];

const faqs = [
  {
    q: "Do you work with both small construction crews and large multi-location operations?",
    a: "Yes. We help small specialty contractors with starter packages — branded polos, business cards, and a single truck wrap — and we support large general contractors and multi-location builders with full fleet graphics, large-volume safety gear orders, jobsite signage programs, and trade show materials.",
  },
  {
    q: "How quickly can you turn around branded workwear and fleet graphics?",
    a: "Most embroidered polos, t-shirts, and high-vis vests ship within 1–2 weeks. Full vehicle wraps and large fleet branding programs typically take 2–3 weeks depending on the design and number of vehicles. Rush options are available when you need crews outfitted before a project kickoff.",
  },
  {
    q: "Do you offer volume discounts for larger crews?",
    a: "Yes. We provide meaningful discounts on orders of 10+ embroidered polos, hoodies, or safety vests, and on full fleet wrap packages. Tell us your crew size and the equipment list and we'll put together pricing tailored to the project.",
  },
  {
    q: "Can we order a small test batch before committing to a full crew rollout?",
    a: "Absolutely. Many contractors start with a handful of polos, a single hard hat wrap, or one truck wrap to confirm the design and quality before scaling up to the whole crew or fleet. We'd rather earn the bigger order than push it.",
  },
  {
    q: "Do you wrap heavy equipment like skid steers, excavators, and dump trucks?",
    a: "Yes. Heavy equipment graphics and partial wraps are a strong fit for construction companies — they turn every piece of machinery on the site into branded advertising. We design for the curves, panels, and wear patterns of the specific equipment.",
  },
  {
    q: "Can you help with a full rebrand — new logo, uniforms, fleet, and signage all at once?",
    a: "That's one of our favorite projects. We coordinate logo refinement, color and font systems, vehicle wraps, crew apparel, business cards, jobsite signage, and trade show materials so everything launches together with a consistent look.",
  },
  {
    q: "How does the free cost comparison work?",
    a: "Send us a list or photos of what you're currently buying — uniforms, hard hat wraps, jobsite banners, business cards, forms, and so on — and we'll provide a side-by-side breakdown showing what we can deliver for the same or better quality, often with noticeable savings.",
  },
  {
    q: "Do you support construction companies outside Columbus?",
    a: "Yes. We work with general contractors and specialty trades across Central Ohio — Columbus, Dublin, Westerville, Marion, Delaware, Newark, Lancaster, and the surrounding 50-mile radius. Most orders ship directly to your office or job site.",
  },
];

const audiences = [
  "General Contractors & Construction Managers",
  "Commercial & Industrial Builders",
  "Specialty & Subcontractors",
  "Residential Builders & Remodelers",
  "Multi-Location Construction Operations",
  "Design-Build Firms",
];

const Construction = () => {
  usePageSEO({
    title: "Branded Workwear, Fleet Wraps & Job Site Materials for Ohio Construction Companies",
    description:
      "Branded workwear, vehicle graphics, hard hat wraps, jobsite banners, trade show displays, and safety gear for Central Ohio general contractors and specialty contractors. Free 24-hour quotes.",
  });

  const localBusinessJsonLd = localBusinessSchema({
    ...BUCKEYE_LOCAL_BUSINESS_OPTS,
    name: "Buckeye Biz Hub – Construction Company Branding",
    url: "https://www.buckeyebizhub.com/construction",
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

  const breadcrumbJsonLd = breadcrumbFromPath("/construction");

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
            <HardHat className="w-4 h-4" /> 🏗️ Ohio Construction & General Contractors
          </motion.div>
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[1.05] mb-6"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.98), 0 4px 16px rgba(0,0,0,0.95), 0 8px 40px rgba(0,0,0,0.85), 0 0 80px rgba(0,0,0,0.7)" }}
          >
            Make Every Job Site and Every Truck Look Like the{" "}
            <span
              className="text-primary text-glow-red inline-block"
              style={{
                WebkitTextStroke: "1.5px hsl(0 0% 100%)",
                textShadow:
                  "0 0 2px hsl(0 0% 100% / 0.9), 0 2px 8px rgba(0,0,0,0.95), 0 0 30px hsl(0 85% 40% / 0.7), 0 0 60px hsl(0 85% 40% / 0.4)",
                paintOrder: "stroke fill",
              }}
            >
              Company You've Built
            </span>
          </h1>
          <p
            className="text-lg md:text-xl text-primary-foreground font-medium leading-relaxed max-w-3xl mx-auto mb-10"
            style={{ textShadow: "0 2px 6px rgba(0,0,0,0.98), 0 4px 18px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7)" }}
          >
            Branded workwear, vehicle graphics, jobsite banners, trade show displays, and safety gear — for Ohio construction companies that know their crew's appearance is part of their reputation.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.7)] transition-all duration-300 group uppercase tracking-wider"
            >
              Get Your Free Construction Branding Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Professional Courtesy Banner */}
      <section className="bg-primary/10 border-b border-primary/20 py-4">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-primary">
            Professional Courtesy for Ohio Businesses:{" "}
            <span className="font-semibold">20% off your first order</span>{" "}
            on our already wholesale pricing. No commitment required.
          </p>
        </div>
      </section>

      {/* Section 1 — Why Construction Companies Choose Us */}
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
                <Shield className="w-4 h-4" /> Why Construction Companies Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
                Your Crews Are On Job Sites Across Ohio Every Day.{" "}
                <span className="text-primary">We Make Sure They Look the Part.</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                In construction, your reputation is built one project at a time — and the way your crew shows up on that first day, before a single nail is driven, tells the owner and the site manager everything about your company.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We work with Central Ohio general contractors, commercial builders, and specialty contractors to make sure their field teams look consistent, professional, and identifiable on every job site. From the truck pulling up to the crew walking the site to the banner on the fence — every touchpoint is a chance to reinforce who you are.
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

      {/* Section 2 — Our Story */}
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
                <Award className="w-4 h-4" /> Our Story
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
                We Know Construction From the Inside —{" "}
                <span className="text-primary">Not Just From a Catalog</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                I've started <span className="font-bold text-foreground">3 businesses</span> from the ground up here in Central Ohio. In the last 20 months, I helped a local vehicle wrap company <span className="font-bold text-foreground">double their fleet branding division's revenue</span> — working directly with contractors on fleet graphics, vehicle wraps, and branded crew gear that actually hold up on job sites.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                I've also spent <span className="font-bold text-foreground">15+ years</span> helping my wife, Dr. Kerry Stein, run Marion Endodontics in Marion, Ohio — handling all the procurement, branding, and materials for a busy professional practice. That experience taught me what it means to need things done right, on time, and by someone who actually understands your world.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                At Buckeye Biz Hub, we bring that same inside knowledge to Ohio construction companies. We know what holds up on a job site and what doesn't. We know the difference between a vendor who prints things and a partner who actually gets it.
              </p>
              <p className="mt-6 text-sm font-bold text-primary uppercase tracking-wider">
                — David Stein, Your Buckeye Branding Concierge
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
                <p className="text-primary-foreground font-bold text-lg">Real Fleet Branding</p>
                <p className="text-primary-foreground/70 text-sm">The kind of look that wins bids before you say a word</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 — Products & Solutions */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <Sparkles className="w-4 h-4" /> Products & Solutions
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
              Everything Your Crews, Fleet, and Job Sites Need to{" "}
              <span className="text-primary">Look Professional</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From the first truck that pulls up to the last banner on the fence — we handle all of it.
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

      {/* Section 4 — Who We Serve */}
      <section className="py-20 lg:py-28 bg-ohio-grey-light">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <Users className="w-4 h-4" /> Who We Serve
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
              Built for Every Type of{" "}
              <span className="text-primary">Ohio Construction Operation</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From a 4-person specialty crew to a multi-location commercial builder — we scale to fit how your team actually works.
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
              <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
              Honest Answers for{" "}
              <span className="text-primary">Construction Companies</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Real questions we hear from Central Ohio contractors — answered the way we'd answer them on the job site.
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
              Free Cost Comparison — No Commitment
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Tell us what you're currently spending on branded workwear, fleet graphics, jobsite signage, or printed materials and we'll show you exactly what we can provide for less — often with significant savings.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-foreground text-background font-semibold px-10 py-4 rounded-2xl hover:bg-foreground/85 transition-colors"
            >
              Request Your Free Comparison
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
              Ready to Make Your Crews and Fleet Look Like{" "}
              <span className="text-primary">the Company You've Built?</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              We offer free 24-hour quotes and a no-obligation cost comparison showing exactly what our wholesale network can provide versus what you're currently paying.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.7)] transition-all duration-300 group uppercase tracking-wider"
                >
                  Get Your Free Construction Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/industries">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-foreground/20 hover:border-primary/40 text-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl uppercase tracking-wider"
                >
                  See All Industries We Serve
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
