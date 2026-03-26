import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import promoApparel from "@/assets/promo-apparel.jpg";
import promoDrinkware from "@/assets/promo-drinkware.jpg";
import promoOutdoor from "@/assets/promo-outdoor.jpg";
import promoVehicle from "@/assets/promo-vehicle.jpg";
import promoOffice from "@/assets/promo-office.jpg";

const categories = [
  {
    image: promoApparel,
    title: "Apparel",
    subtitle: "Wear Your Brand Everywhere",
    description: "Custom shirts, embroidered hats, hoodies, polos, and jackets — premium branded apparel that turns your team and customers into walking billboards.",
    items: ["T-Shirts & Polos", "Embroidered Caps", "Hoodies & Fleece", "Jackets & Outerwear"],
  },
  {
    image: promoDrinkware,
    title: "Drinkware & Bar Items",
    subtitle: "Sip, Pour & Promote",
    description: "Custom tumblers, coffee mugs, bar rail mats, branded coasters, and water bottles your audience will use daily — keeping your logo front and center.",
    items: ["Insulated Tumblers", "Coffee Mugs", "Bar Rail Mats", "Custom Coasters"],
  },
  {
    image: promoOutdoor,
    title: "Outdoor & Events",
    subtitle: "Own Every Event",
    description: "Branded pop-up tents, table throws, retractable banners, yard signs, and event displays that make your booth or storefront impossible to miss.",
    items: ["Pop-Up Tents", "Table Throws", "Retractable Banners", "Yard Signs"],
  },
  {
    image: promoVehicle,
    title: "Vehicle Branding",
    subtitle: "Turn Miles Into Marketing",
    description: "Full wraps, partial wraps, decals, and magnetic signs that transform your fleet into a rolling advertisement seen by thousands every day.",
    items: ["Full Vehicle Wraps", "Partial Wraps", "Vinyl Decals", "Magnetic Signs"],
  },
  {
    image: promoOffice,
    title: "Office & Giveaways",
    subtitle: "Small Items, Big Impact",
    description: "Branded notebooks, pens, tote bags, USB drives, lanyards, and keychains — the everyday giveaways that keep your brand in your customer's hands.",
    items: ["Notebooks & Pads", "Branded Pens", "Tote Bags", "Keychains & Lanyards"],
  },
];

const PromotionalProducts = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-28 lg:pt-48 lg:pb-40 overflow-hidden bg-ohio-grey-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,3%)] via-[hsl(0,40%,8%)] to-[hsl(220,25%,3%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[1100px] h-[1100px] rounded-full bg-primary/[0.15] blur-[200px]" />
        </div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[600px] h-[400px] rounded-full bg-ohio-red-glow/[0.1] blur-[120px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-8 bg-primary/[0.12] px-6 py-2.5 rounded-full border border-primary/30 shadow-[0_0_30px_hsl(0_80%_42%/0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Branded Merch
            <Sparkles className="w-3.5 h-3.5" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] font-black text-primary-foreground leading-[0.9] mb-8"
            style={{ textShadow: '0 0 60px rgba(255,255,255,0.3), 0 4px 20px rgba(0,0,0,0.8)' }}
          >
            Promotional Products{" "}
            <br className="hidden lg:block" />
            That Get{" "}
            <span className="text-primary text-glow-red">Noticed</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-2xl text-primary-foreground/55 max-w-3xl mx-auto font-semibold tracking-wide"
          >
            Custom shirts, hats, drinkware, bar rails, tents, and high-impact swag that turns every day into{" "}
            <span className="text-primary font-black">marketing</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-14"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-8 h-14 mx-auto border-2 border-primary-foreground/20 rounded-full flex items-start justify-center pt-2"
            >
              <div className="w-1.5 h-3 bg-primary rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-24 lg:py-36 bg-ohio-grey-light relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[150px]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block text-xs font-extrabold text-primary tracking-[0.25em] uppercase mb-4 bg-primary/[0.08] px-4 py-1.5 rounded-full">
              Browse Categories
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
              Everything Your Brand{" "}
              <span className="text-primary relative">
                Needs
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-primary/60 via-primary to-primary/60 rounded-full" />
              </span>
            </h2>
          </motion.div>

          {/* Top row: 3 cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {categories.slice(0, 3).map((cat, i) => (
              <CategoryCard key={cat.title} cat={cat} index={i} />
            ))}
          </div>

          {/* Bottom row: 2 cards centered */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {categories.slice(3).map((cat, i) => (
              <CategoryCard key={cat.title} cat={cat} index={i + 3} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-28 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,90%,35%)] via-primary to-[hsl(0,75%,30%)]" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary-foreground/[0.05] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-foreground/[0.05] rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container relative text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-primary-foreground mb-8 leading-[0.9]"
            style={{ textShadow: '0 0 60px rgba(255,255,255,0.3), 0 4px 20px rgba(0,0,0,0.5)' }}
          >
            Ready to Get Your Brand{" "}
            <br className="hidden md:block" />
            Out There?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/65 mb-14 font-semibold italic font-display"
          >
            Rooted in Ohio. Built to Grow Your Business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xl px-14 py-9 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_70px_rgba(255,255,255,0.2)] transition-all duration-400 group uppercase tracking-widest"
              style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}
            >
              <Phone className="w-6 h-6" />
              Get Your Free Quote Today
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

interface CategoryCardProps {
  cat: (typeof categories)[number];
  index: number;
}

const CategoryCard = ({ cat, index }: CategoryCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay: index * 0.1 }}
    className="group bg-card rounded-3xl border border-border hover:border-primary/30 overflow-hidden card-lift"
  >
    {/* Image */}
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={cat.image}
        alt={cat.title}
        loading="lazy"
        width={800}
        height={600}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
      {/* Floating title on image */}
      <div className="absolute bottom-4 left-5 right-5">
        <span className="inline-block text-[0.65rem] font-extrabold text-primary-foreground tracking-[0.25em] uppercase bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full">
          {cat.subtitle}
        </span>
      </div>
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    {/* Content */}
    <div className="p-7 lg:p-8 space-y-5">
      <h3 className="font-display text-2xl lg:text-3xl font-black text-card-foreground leading-tight">
        {cat.title}
      </h3>
      <p className="text-muted-foreground text-[0.92rem] leading-[1.7]">
        {cat.description}
      </p>

      {/* Item pills */}
      <div className="flex flex-wrap gap-2">
        {cat.items.map((item) => (
          <span
            key={item}
            className="text-[0.7rem] font-bold text-muted-foreground bg-muted px-3 py-1.5 rounded-full border border-border group-hover:border-primary/20 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 pt-2">
        <Button className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black shadow-[0_0_20px_hsl(0_80%_42%/0.25)] hover:shadow-[0_0_35px_hsl(0_80%_42%/0.45)] transition-all duration-300 group/btn">
          <ShoppingBag className="w-4 h-4" />
          Shop Category
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </Button>
        <Button variant="outline" className="font-bold border-border hover:border-primary/40 hover:text-primary transition-all duration-300">
          Request Samples
        </Button>
      </div>
    </div>
  </motion.div>
);

export default PromotionalProducts;
