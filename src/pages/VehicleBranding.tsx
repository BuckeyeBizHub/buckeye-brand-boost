import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, Zap, Star, CheckCircle, Award, Truck, Shield, Eye, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import vehicleWrapBA from "@/assets/vehicle-wrap-before-after.jpg";
import vehicleDecal from "@/assets/vehicle-decal-closeup.jpg";
import vehicleFleet from "@/assets/branded-vehicle-fleet.jpg";
import { usePageTitle } from "@/hooks/usePageTitle";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7 },
};

const categories = [
  {
    image: vehicleWrapBA,
    title: "Full Vehicle Wraps",
    benefit: "Maximum brand impact on every road in Ohio",
    bullets: [
      "Premium 3M and Avery cast vinyl with 7+ year durability",
      "Professional installation by certified wrap technicians",
      "Custom design services to bring your brand vision to life",
      "Paint protection included — wraps shield your factory finish",
    ],
  },
  {
    image: vehicleWrapBA,
    title: "Partial Wraps & Graphics",
    benefit: "Big visual impact at a fraction of the cost",
    bullets: [
      "Cover key panels — doors, tailgate, hood, or rear window",
      "Same premium vinyl and professional installation quality",
      "Strategic placement for maximum visibility on Ohio roads",
      "Easy to expand to a full wrap as your business grows",
    ],
  },
  {
    image: vehicleDecal,
    title: "Decals, Lettering & Magnetic Signs",
    benefit: "Professional branding that's flexible and affordable",
    bullets: [
      "Die-cut vinyl, window graphics, and door lettering options",
      "Heavy-duty magnetic signs — brand on, remove when off duty",
      "UV-resistant inks that won't fade in Ohio weather",
      "Affordable branding starting under $200 per vehicle",
    ],
  },
  {
    image: vehicleFleet,
    title: "Fleet Branding & Truck Graphics",
    benefit: "Turn your entire fleet into a mobile marketing force",
    bullets: [
      "Volume pricing and significant discounts for multi-vehicle fleets",
      "Consistent branding across cars, vans, trucks, and trailers",
      "DOT number compliance and commercial lettering included",
      "On-site installation coordination for Central Ohio fleets",
    ],
  },
];

const trustPoints = [
  { icon: Truck, title: "Best Central Ohio Shops", desc: "We shop your job to the best Central Ohio shops for quality and price" },
  { icon: Award, title: "Trusted Installer Network", desc: "Trusted network of professional installers for one-offs and full fleets" },
  { icon: Shield, title: "Premium Without Premium Prices", desc: "Premium quality branding without the premium price tag" },
  { icon: Eye, title: "Full Cost Transparency", desc: "Full transparency on costs and options — you always know what you're paying" },
];

const VehicleBranding = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Buckeye Biz Hub – Vehicle Branding & Wraps",
    description: "Professional vehicle wraps, fleet branding, and custom decals for Central Ohio businesses. We shop your job to the best shops for premium quality at the best price.",
    url: "https://buckeye-brand-boost.lovable.app/vehicle-branding",
    areaServed: { "@type": "State", name: "Ohio" },
    address: { "@type": "PostalAddress", addressRegion: "OH", addressCountry: "US" },
  };

    usePageTitle("Vehicle Branding Columbus Ohio", "Professional vehicle branding services in Columbus Ohio. Custom wraps, decals, and fleet graphics that generate thousands of daily impressions for your business.");

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-48 pb-36 lg:pt-60 lg:pb-52 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0">
          <img src={vehicleFleet} alt="Branded vehicle fleet by Buckeye Biz Hub" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,30%,3%/0.45)] via-[hsl(0,40%,5%/0.55)] to-[hsl(0,60%,8%/0.92)]" />
          <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-[hsl(0,50%,6%)] via-[hsl(0,50%,6%/0.85)] to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_30px_hsl(0_80%_42%/0.5)]" />

        <div className="container relative text-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2.5 text-xs font-extrabold text-primary tracking-[0.35em] uppercase mb-12 bg-primary/[0.15] px-7 py-3 rounded-full border border-primary/35 shadow-[0_0_40px_hsl(0_80%_42%/0.2)]">
            <Sparkles className="w-4 h-4" /> Vehicle Branding & Wraps <Sparkles className="w-4 h-4" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-black text-primary-foreground leading-[0.88] mb-12"
            style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.7), 0 8px 30px rgba(0,0,0,0.9)' }}>
            Vehicle Branding That Looks Sharp and{" "}
            <span className="text-primary text-glow-red">Saves You Money</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/85 max-w-3xl mx-auto font-semibold leading-snug px-6"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
            We shop your job throughout Central Ohio to the best shops and have a trusted network of installers — so you get premium quality branding while protecting your wallet.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="mt-16 flex flex-wrap justify-center gap-10 md:gap-16">
            {[
              { num: "Best Shops", label: "Central Ohio Network" },
              { num: "Premium", label: "Quality Materials" },
              { num: "100%", label: "Cost Transparency" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-5xl font-black text-primary" style={{ textShadow: '0 0 25px hsl(0 80% 42% / 0.4)' }}>{stat.num}</div>
                <div className="text-xs font-bold text-primary-foreground/45 tracking-[0.2em] uppercase mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Body Copy */}
      <section className="py-20 lg:py-28 bg-ohio-grey-light">
        <div className="container">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
              Vehicle Branding <span className="text-primary">Done Differently</span>
            </h2>
            <div className="w-24 h-[4px] mx-auto rounded-full bg-gradient-to-r from-primary via-ohio-red-glow to-ohio-red-light" />
            <p className="text-base md:text-lg text-muted-foreground leading-[1.9] font-medium">
              At Buckeye Biz Hub we do vehicle branding differently. We have strong connections throughout Central Ohio and shop your job among the best places so you always get the highest quality materials and workmanship.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-[1.9] font-medium">
              We also maintain a network of professional installers who can handle both one-off projects and full fleet contracts. Whether you need a single vehicle wrap or an entire fleet branded, we handle the sourcing, quoting, and installation coordination so you don't have to.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-[1.9] font-medium">
              We focus on two things above everything else: exceptional quality branding and protecting your bottom line. Let us help your branding needs while looking out for your fleet's quality appearance — but most importantly, your wallet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4">
              <Car className="w-4 h-4" /> Our Vehicle Branding Services
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground">
              Premium Branding for <span className="text-primary">Every Vehicle</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-card rounded-2xl border-2 border-border hover:border-primary/40 overflow-hidden shadow-lg hover:shadow-[0_20px_60px_hsl(0_80%_42%/0.15)] transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={cat.image} alt={cat.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-extrabold text-primary-foreground tracking-[0.2em] uppercase bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                      <Zap className="w-3 h-3" />
                      Service {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-display text-xl md:text-2xl font-black text-foreground mb-1 group-hover:text-primary transition-colors">{cat.title}</h3>
                  <p className="text-sm font-semibold text-primary mb-4">{cat.benefit}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {cat.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground font-medium">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-bold text-base py-6 rounded-xl shadow-[0_0_20px_hsl(0_80%_42%/0.3)] hover:shadow-[0_0_40px_hsl(0_80%_42%/0.5)] transition-all duration-300 group/btn uppercase tracking-wider">
                      Get a Quote
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-ohio-grey-light">
        <div className="container">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
              Why Central Ohio Fleets Choose{" "}
              <span className="text-primary">Buckeye Biz Hub</span>
            </h2>
            <div className="w-24 h-[4px] mx-auto mt-6 rounded-full bg-gradient-to-r from-primary via-ohio-red-glow to-ohio-red-light" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((tp, i) => (
              <motion.div
                key={tp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl border-2 border-border p-8 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <tp.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-lg font-black text-foreground mb-3">{tp.title}</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{tp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 lg:py-44 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,92%,33%)] via-primary to-[hsl(0,78%,28%)]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-foreground/[0.06] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-foreground/[0.06] rounded-full blur-[180px]" />

        <div className="container relative text-center">
          <motion.h2 initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-10 leading-[0.9]"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.35), 0 6px 25px rgba(0,0,0,0.6)' }}>
            Ready to Brand Your Fleet{" "}<br className="hidden md:block" />
            <span className="text-glow-white">the Smart Way?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-primary-foreground/60 mb-16 font-semibold italic font-display max-w-3xl mx-auto">
            Premium quality. Best pricing. Full transparency. Let us handle the sourcing and installation so you can focus on growing your business.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Link to="/contact">
              <Button size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl md:text-2xl px-14 py-9 rounded-2xl shadow-[0_12px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_80px_rgba(255,255,255,0.25)] transition-all duration-400 group uppercase tracking-widest"
                style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}>
                <Phone className="w-6 h-6" />
                Get Your Custom Quote Today
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VehicleBranding;
