import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  CreditCard, BookOpen, Gift, Shirt, Signpost, Car, Package, Monitor, Search,
  Flag, Sticker, Mail, BookMarked, FolderOpen, UtensilsCrossed, FileText, Maximize,
  type LucideIcon,
} from "lucide-react";

interface ServiceInfo {
  label: string;
  href: string;
  icon: LucideIcon;
  description: string;
}

const allServices: ServiceInfo[] = [
  { label: "Business Cards & Stationery", href: "/business-cards", icon: CreditCard, description: "Premium business cards with specialty finishes for a lasting first impression." },
  { label: "Brochures & Business Printing", href: "/brochures-and-business-printing", icon: BookOpen, description: "Professional brochures and printed materials to showcase your services." },
  { label: "Postcards & Direct Mail", href: "/postcards", icon: Mail, description: "Eye-catching postcards and direct mail campaigns that drive local response." },
  { label: "Catalogs & Booklets", href: "/catalogs-and-booklets", icon: BookMarked, description: "Multi-page catalogs and booklets to present your full product line." },
  { label: "Presentation Folders", href: "/presentation-folders", icon: FolderOpen, description: "Custom branded folders for professional client-facing documents." },
  { label: "Letterhead & Envelopes", href: "/letterhead-and-envelopes", icon: FileText, description: "Coordinated letterhead and envelopes reinforcing your brand identity." },
  { label: "Large Format Printing", href: "/large-format-printing", icon: Maximize, description: "Banners, posters, and large displays for events and storefronts." },
  { label: "Menus & Table Tents", href: "/menus-and-table-tents", icon: UtensilsCrossed, description: "Durable, attractive menus and table tents for restaurants and events." },
  { label: "Promotional Products", href: "/promotional-products", icon: Gift, description: "Branded giveaways and promotional items that keep your name top of mind." },
  { label: "Branded Apparel & Uniforms", href: "/branded-apparel-and-uniforms", icon: Shirt, description: "Custom apparel and uniforms to unify your team's professional look." },
  { label: "Banners & Flags", href: "/banners-and-flags", icon: Flag, description: "Weather-resistant banners and flags for outdoor visibility and events." },
  { label: "Custom Decals", href: "/decals", icon: Sticker, description: "Custom vinyl decals for vehicles, windows, and branded surfaces." },
  { label: "Yard Signs & Custom Signage", href: "/yard-signs-and-signage", icon: Signpost, description: "Corrugated yard signs and custom signage for maximum local visibility." },
  { label: "Vehicle Wraps & Fleet Branding", href: "/vehicle-wraps-and-fleet-branding", icon: Car, description: "Full and partial vehicle wraps turning your fleet into mobile billboards." },
  { label: "Full Rebrand Kits", href: "/full-rebrand-kits", icon: Package, description: "Complete branding packages with logo, stationery, and collateral." },
  { label: "Website Design & Development", href: "/website-design", icon: Monitor, description: "Modern, mobile-first websites designed to convert Ohio customers." },
  { label: "Local SEO & Google Ranking", href: "/local-seo", icon: Search, description: "Improve your Google visibility and attract more local Ohio customers." },
];

interface RelatedContentProps {
  /** Number of related items to show (default 3, max 5) */
  count?: number;
  /** Heading text */
  heading?: string;
  /** Sub-heading text */
  subheading?: string;
}

const RelatedContent = ({
  count = 3,
  heading = "Explore Related Services",
  subheading = "Grow your Ohio brand with our full suite of marketing and branding solutions.",
}: RelatedContentProps) => {
  const { pathname } = useLocation();
  const safeCount = Math.min(Math.max(count, 1), 5);
  const related = allServices.filter((s) => s.href !== pathname).slice(0, safeCount);

  return (
    <aside aria-label="Related services" className="py-20 lg:py-28 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            {heading}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subheading}
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
                className="group block bg-background rounded-2xl border border-border p-8 card-lift hover:border-primary/30 transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Explore {service.label.split(" ")[0]} Services
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
            View All Branding & Printing Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </aside>
  );
};

export default RelatedContent;
