import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Hammer,
  Truck,
  Award,
  Shield,
  Shirt,
  Palette,
  Megaphone,
  FileText,
  LayoutGrid,
  Mail,
  Users,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { usePageSEO } from "@/hooks/usePageTitle";

const PHOTO_BASE = "https://ustxmgctwrjdzcpsrewb.supabase.co/storage/v1/object/public/photos";
const ROOFING_HERO = `${PHOTO_BASE}/roofing-truck-wrap-castles.jpg`;
const ROOFING_JOBSITE = `${PHOTO_BASE}/roofing-van-wrap-titan.jpg`;
const ROOFING_BEFORE_AFTER = `${PHOTO_BASE}/roofing-truck-wrap-maspeth.jpg`;

const galleryPhotos = [
  { src: `${PHOTO_BASE}/roofing-van-wrap-titan.jpg`, alt: "Full roofing company van wrap with bold mascot graphics", label: "Full Van Wrap" },
  { src: `${PHOTO_BASE}/roofing-truck-wrap-castles.jpg`, alt: "Red roofing contractor pickup truck with full vehicle graphics", label: "Pickup Truck Wrap" },
  { src: `${PHOTO_BASE}/roofing-truck-wrap-maspeth.jpg`, alt: "Roofing pickup truck shown from multiple angles with branded graphics", label: "Multi-Angle Truck Wrap" },
  { src: `${PHOTO_BASE}/roofing-yard-sign-fair.jpg`, alt: "Roofing yard signs staked in lawn for storm restoration marketing", label: "Yard Signs" },
  { src: `${PHOTO_BASE}/roofing-yard-sign-spartan.jpg`, alt: "Large roofing contractor yard sign in residential lawn", label: "Large Format Yard Sign" },
  { src: `${PHOTO_BASE}/roofing-yard-sign-contractors.jpg`, alt: "Stack of roofing contractor free estimates yard signs", label: "Bulk Yard Signs" },
  { src: `${PHOTO_BASE}/roofing-door-hanger-knock.jpg`, alt: "Roofing company door hanger with services and free estimate offer", label: "Door Hangers" },
  { src: `${PHOTO_BASE}/roofing-door-hanger-baker.jpg`, alt: "Front and back of professional roofing contractor door hanger", label: "Premium Door Hangers" },
  { src: `${PHOTO_BASE}/roofing-carbonless-form.jpg`, alt: "Multi-part carbonless contract forms for roofing job sites", label: "Carbonless Contract Forms" },
  { src: `${PHOTO_BASE}/roofing-pull-up-banners.jpg`, alt: "Retractable roofing trade show banners with services and offers", label: "Retractable Banners" },
];

const products = [
  {
    icon: Truck,
    title: "Full Vehicle Wraps & Fleet Graphics",
    description:
      "Turn every truck, van, and trailer into a 24/7 rolling billboard — designed for visibility, durability, and Ohio weather.",
  },
  {
    icon: Shirt,
    title: "Crew Apparel & Safety Wear",
    description:
      "Embroidered polos, t-shirts, hoodies, and high-vis safety vests built for the job site — comfortable, branded, and long-lasting.",
  },
  {
    icon: Palette,
    title: "Logo Design & Complete Branding Refresh",
    description:
      "From logo refinement to full visual identity systems — give your roofing company the polished look established competitors have.",
  },
  {
    icon: Megaphone,
    title: "Door Hangers, Yard Signs & Fertilizer Signs",
    description:
      "High-impact neighborhood marketing that drives leads while you're on a job — printed weather-tough for outdoor use.",
  },
  {
    icon: FileText,
    title: "Sales Sheets, Folders, Cards & QR Stickers",
    description:
      "Sales sheets, presentation folders, business cards, and QR code stickers that close more bids and put your brand in every customer's hands.",
  },
  {
    icon: LayoutGrid,
    title: "Carbonless Contract & Job-Site Forms",
    description:
      "Estimates, work orders, invoices, inspection forms, and contracts — branded, numbered, and built for the field.",
  },
  {
    icon: Users,
    title: "Trade Show Booths & Event Displays",
    description:
      "Retractable banners, table throws, branded backdrops, and giveaways for home shows, expos, and community events.",
  },
  {
    icon: Mail,
    title: "Postcards & Direct-Mail Campaigns",
    description:
      "Targeted neighborhood postcard campaigns and direct-mail programs that fill your pipeline before storm season ramps up.",
  },
];

const audiences = [
  "Residential Roofers",
  "Commercial Roofing Contractors",
  "Industrial Roofing Contractors",
  "Storm Restoration Specialists",
  "Multi-Location Roofing Operations",
  "Exterior & Siding Contractors",
];

const Roofing = () => {
  usePageSEO({
    title: "Fleet, Crew & Marketing Solutions for Central Ohio Roofing Contractors | Buckeye Biz Hub",
    description:
      "Vehicle wraps, durable crew apparel, door hangers, yard signs, carbonless forms, and full marketing materials for Central Ohio roofing contractors. Real-world experience helping 9 local roofing operations.",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Buckeye Biz Hub – Roofing Contractor Branding",
    description:
      "Vehicle wraps, fleet graphics, crew apparel, door hangers, yard signs, carbonless forms, and full marketing materials for Central Ohio roofing contractors.",
    url: "https://www.buckeyebizhub.com/roofing",
    areaServed: { "@type": "State", name: "Ohio" },
    address: { "@type": "PostalAddress", addressRegion: "OH", addressCountry: "US" },
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ROOFING_HERO}
            alt="Branded red roofing contractor pickup truck with full vehicle wrap on residential job site"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0,0%,4%/0.7)] via-[hsl(0,0%,4%/0.8)] to-[hsl(0,0%,4%/0.95)]" />
        </div>
        <div className="container relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-7 bg-primary/15 px-5 py-2 rounded-full border border-primary/30 backdrop-blur-sm"
          >
            <Hammer className="w-4 h-4" /> Central Ohio Roofing Contractors
          </motion.div>
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[1.05] mb-6"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}
          >
            Make Your Trucks, Crews, and Brand{" "}
            <span className="text-primary text-glow-red">Stand Out on Every Ohio Job Site</span>
          </h1>
          <p
            className="text-lg md:text-xl text-primary-foreground/85 font-medium leading-relaxed max-w-3xl mx-auto mb-10"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
          >
            Vehicle wraps, durable crew apparel, door hangers, yard signs, and full marketing materials built for busy roofing companies.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.7)] transition-all duration-300 group uppercase tracking-wider"
            >
              Get Your Free Roofing Branding Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Section 1 — Why Roofing Contractors Choose Us */}
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
                <Shield className="w-4 h-4" /> Why Roofing Contractors Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
                Built for Crews That Work Hard{" "}
                <span className="text-primary">All Season Long</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                Spring and summer are your busiest months. You need materials that survive the field, look professional on the road, and actually help generate leads — without chasing multiple vendors.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                One trusted point of contact for wraps, apparel, signage, print, and marketing. We move fast because we know your season won't wait.
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
                src={ROOFING_JOBSITE}
                alt="Fully wrapped roofing service van with bold branding parked at job site"
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
                Real Experience with{" "}
                <span className="text-primary">Fleet-Heavy, Crew-Based Businesses</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                In the last 20 months I helped a local vehicle wrap company <span className="font-bold text-foreground">double their sales</span> through their fleet branding division. I've also started <span className="font-bold text-foreground">3 businesses</span> from the ground up in Central Ohio. Combined with 15+ years supporting my wife Dr. Kerry Stein's endodontics practice, I've learned exactly what fleet-heavy, crew-based businesses need to look sharp every single day.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We've already helped <span className="font-bold text-foreground">9 different Central Ohio roofing companies</span> with the products they need during peak season — from full truck wraps to last-minute door hangers before a neighborhood blitz.
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
                src={ROOFING_BEFORE_AFTER}
                alt="Professional fleet branding shown from multiple angles on roofing contractor pickup truck"
                className="w-full h-full object-cover aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[hsl(0,0%,4%/0.95)] to-transparent">
                <p className="text-primary-foreground font-bold text-lg">Real Fleet Branding</p>
                <p className="text-primary-foreground/70 text-sm">The kind of look that stops traffic</p>
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
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight">
              Everything a Roofing Crew Needs to{" "}
              <span className="text-primary">Win More Work</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-card border-2 border-border hover:border-primary/40 rounded-2xl p-7 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-black text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
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
              Trusted by Roofing Contractors{" "}
              <span className="text-primary">Across Central Ohio</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Residential roofers, commercial and industrial roofing contractors, storm restoration specialists, and growing multi-location operations across Central Ohio.
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
              Spring is here — make sure your brand looks{" "}
              <span className="text-primary">as strong as your workmanship.</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Let's talk fleet wraps, crew apparel, door hangers, yard signs, or a complete marketing rollout. Free consultation, honest pricing, no pressure.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-base md:text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(0_80%_42%/0.5)] hover:shadow-[0_0_60px_hsl(0_80%_42%/0.7)] transition-all duration-300 group uppercase tracking-wider"
              >
                Start Your Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-6">
              Or browse{" "}
              <Link to="/industries" className="text-primary font-bold hover:underline">
                all industries we serve
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Roofing;
