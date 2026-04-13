import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  CreditCard, BookOpen, Gift, Shirt, Signpost, Car, Package, Monitor, Search,
  Flag, Sticker, Mail, BookMarked, FolderOpen, UtensilsCrossed, FileText, Maximize,
} from "lucide-react";

const allServices = [
  { label: "Business Cards & Stationery", href: "/business-cards", icon: CreditCard },
  { label: "Brochures & Business Printing", href: "/business-printing", icon: BookOpen },
  { label: "Postcards & Direct Mail", href: "/postcards", icon: Mail },
  { label: "Catalogs & Booklets", href: "/catalogs-and-booklets", icon: BookMarked },
  { label: "Presentation Folders", href: "/presentation-folders", icon: FolderOpen },
  { label: "Letterhead & Envelopes", href: "/letterhead-and-envelopes", icon: FileText },
  { label: "Large Format Printing", href: "/large-format-printing", icon: Maximize },
  { label: "Menus & Table Tents", href: "/menus-and-table-tents", icon: UtensilsCrossed },
  { label: "Promotional Products & Giveaways", href: "/promotional-products", icon: Gift },
  { label: "Branded Apparel & Uniforms", href: "/branded-apparel-and-uniforms", icon: Shirt },
  { label: "Banners & Flags", href: "/banners-and-flags", icon: Flag },
  { label: "Custom Decals", href: "/decals", icon: Sticker },
  { label: "Yard Signs & Custom Signage", href: "/yard-signs-and-signage", icon: Signpost },
  { label: "Vehicle Wraps & Fleet Branding", href: "/vehicle-wraps-and-fleet-branding", icon: Car },
  { label: "Full Rebrand Kits", href: "/full-rebrand-kits", icon: Package },
  { label: "Website Design & Development", href: "/website-design", icon: Monitor },
  { label: "Local SEO & Google Ranking", href: "/local-seo", icon: Search },
];

const RelatedServices = () => {
  const { pathname } = useLocation();
  const related = allServices.filter((s) => s.href !== pathname).slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            Explore More Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Grow your Ohio brand with our full suite of marketing and branding solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {related.map((service, i) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={service.href}
                className="group block bg-background rounded-2xl border border-border p-8 card-lift hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.label}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedServices;
