import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Layers, Palette, Ruler, Sparkles, FileText, FolderOpen, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import businessCardsImg from "@/assets/luxury-gold-foil-cards.jpg";
import brochuresImg from "@/assets/trifold-brochure-sample.png";
import { PHOTO_PRINT_1, PHOTO_PRINT_3, PHOTO_SIGNAGE_1, PHOTO_SIGNAGE_3 } from "@/lib/photos";

/* ─── Data ────────────────────────────────────────────────────────────── */

interface DetailSection {
  id: string;
  icon: React.ElementType;
  badge: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  href: string;
  columns: {
    heading: string;
    items: string[];
  }[];
  tip: string;
}

const sections: DetailSection[] = [
  {
    id: "business-cards",
    icon: Layers,
    badge: "Best Seller",
    title: "Business Cards & Stationery",
    intro:
      "Your business card is often the very first thing a potential customer holds in their hand. We help you make that moment count with premium stocks, luxurious finishes, and eye-catching details that say 'I mean business.'",
    image: businessCardsImg,
    imageAlt: "Premium gold foil business cards printed by Buckeye Biz Hub",
    href: "/business-cards",
    columns: [
      {
        heading: "Popular Paper Stocks",
        items: [
          "16pt Glossy or Matte — the industry workhorse",
          "18pt Cotton / Linen — textured, sophisticated feel",
          "32pt Ultra-Thick — heavy, rigid, unforgettable",
          "Kraft / Recycled — eco-friendly with character",
          "Clear Frosted Plastic — modern and waterproof",
        ],
      },
      {
        heading: "Finishes & Upgrades",
        items: [
          "Gold / Silver / Rose Gold foil stamping",
          "Spot UV — glossy accents on matte cards",
          "Embossed or debossed lettering",
          "Rounded corners or custom die-cut shapes",
          "Edge painting (colored card edges)",
          "Soft-touch lamination — velvety feel",
        ],
      },
      {
        heading: "Practical Ordering Guide",
        items: [
          "Standard: 250 – 500 cards (solopreneurs)",
          "Growth: 1,000 – 2,500 (sales teams)",
          "Enterprise: 5,000+ (franchise rollouts)",
          "Turnaround: 5–7 business days standard",
          "Rush available: 2–3 business days",
        ],
      },
    ],
    tip: "A 32pt card with spot UV and soft-touch lamination costs just pennies more per card but creates a dramatically more professional impression. It's one of the highest-ROI upgrades we offer.",
  },
  {
    id: "brochures",
    icon: FileText,
    badge: "Most Versatile",
    title: "Brochures & Business Printing",
    intro:
      "Whether you're handing materials to a prospect, mailing a campaign, or stocking a lobby, professionally printed brochures communicate trust and competence in ways digital can't replicate. We offer every fold, every stock, and every finish — so you get exactly the piece your brand deserves.",
    image: brochuresImg,
    imageAlt: "Tri-fold brochure samples printed on premium stock",
    href: "/brochures-and-business-printing",
    columns: [
      {
        heading: "Fold Types & Formats",
        items: [
          "Tri-fold (letter fold) — most popular",
          "Bi-fold (half fold) — simple & elegant",
          "Gate-fold — dramatic reveal panels",
          "Z-fold — accordion-style, great for maps",
          "Roll fold — layered storytelling",
          "Flat flyers, sell sheets, and rack cards",
        ],
      },
      {
        heading: "Paper & Finish Options",
        items: [
          "80 lb Gloss Text — vibrant, lightweight",
          "100 lb Gloss Cover — sturdy & professional",
          "80 lb Matte — sophisticated, easy to write on",
          "Uncoated / Linen — textured, premium feel",
          "Aqueous coating — scuff-resistant gloss",
          "UV coating — ultra-glossy, eye-popping",
        ],
      },
      {
        heading: "Common Use Cases",
        items: [
          "Service menus & product catalogs",
          "Trade show handouts & leave-behinds",
          "Real estate property sheets",
          "Restaurant & salon menus",
          "Nonprofit fundraising mailers",
          "New patient / client welcome packets",
        ],
      },
    ],
    tip: "Ordering 500+ brochures? Ask about our gang-run pricing — we batch your job with others on the same stock to pass along significant savings without any quality trade-off.",
  },
  {
    id: "presentation-folders",
    icon: FolderOpen,
    badge: "Closer's Choice",
    title: "Presentation Folders & Marketing Kits",
    intro:
      "When you're sitting across from a decision-maker, your presentation folder is doing half the selling. A premium folder with your branding, foil logo, and perfectly organized inserts tells your prospect: 'We're serious, professional, and worth your investment.'",
    image: PHOTO_PRINT_1,
    imageAlt: "Custom presentation folder with foil stamped logo",
    href: "/presentation-folders",
    columns: [
      {
        heading: "Folder Styles",
        items: [
          "Standard 9×12 two-pocket — fits letter inserts",
          "Legal-size folders — for attorneys, real estate",
          "Reinforced tab folders — extra durability",
          "Custom die-cut shapes — unique brand statement",
          "Expansion pocket — holds thick insert stacks",
        ],
      },
      {
        heading: "Premium Finishes",
        items: [
          "Foil-stamped logo (gold, silver, copper)",
          "Spot UV on logo or key design elements",
          "Embossing / debossing for tactile impact",
          "Soft-touch or silk lamination",
          "Interior full-color printing",
          "Business card slits — left, right, or both",
        ],
      },
      {
        heading: "What to Include Inside",
        items: [
          "Company overview one-pager",
          "Service menu or pricing sheet",
          "Case studies or testimonials",
          "Business card in the slit",
          "Proposal or contract documents",
          "Branded notepad or pen (we can source those too!)",
        ],
      },
    ],
    tip: "Pair a foil-stamped folder with a matching letterhead and business card for a coordinated 'brand kit' that wins proposals. We can bundle-price these for significant savings.",
  },
  {
    id: "large-format",
    icon: Maximize,
    badge: "Go Big",
    title: "Large Format Printing & Signage",
    intro:
      "From 2-foot posters to 20-foot wall murals, trade show displays to outdoor banners — when you need to make a BIG statement, large format is how you do it. We print on virtually any substrate with UV-resistant, fade-proof inks that look stunning for years.",
    image: PHOTO_SIGNAGE_1,
    imageAlt: "Large format banner and signage printed by Buckeye Biz Hub",
    href: "/large-format-printing",
    columns: [
      {
        heading: "Products & Applications",
        items: [
          "Retractable / pull-up banners",
          "Vinyl banners (indoor & outdoor)",
          "Trade show backdrops & displays",
          "Wall graphics & custom wallpaper",
          "Floor graphics (slip-resistant)",
          "Window clings & perforated vinyl",
          "Posters, canvas wraps & mounted prints",
        ],
      },
      {
        heading: "Materials & Substrates",
        items: [
          "13 oz scrim vinyl — outdoor standard",
          "Fabric / dye-sub — wrinkle-free, portable",
          "Coroplast — lightweight rigid signs",
          "Foam board / Gatorboard — display-grade",
          "Acrylic & aluminum composite — premium",
          "Adhesive vinyl — walls, windows, floors",
        ],
      },
      {
        heading: "Size & Finishing Guide",
        items: [
          "Standard banners: 2×4 ft to 4×8 ft",
          "Retractable: 33×80 in (most popular)",
          "Custom sizes up to 16 ft wide",
          "Grommets, pole pockets, or hem finishes",
          "UV lamination for outdoor durability",
          "Rush turnaround available",
        ],
      },
    ],
    tip: "For trade shows, a retractable banner + matching table throw + business cards is the minimum 'booth kit.' We bundle all three at a package price that beats ordering separately.",
  },
];

/* ─── Component ───────────────────────────────────────────────────────── */

const ServiceDetailSections = () => (
  <div className="space-y-0">
    {sections.map((s, idx) => {
      const isEven = idx % 2 === 0;

      return (
        <section
          key={s.id}
          id={s.id}
          className={`py-20 lg:py-28 ${isEven ? "bg-background" : "bg-secondary/30"}`}
        >
          <div className="container max-w-7xl mx-auto px-6">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 mb-14"
            >
              {/* Image */}
              <div className={`w-full lg:w-[45%] flex-shrink-0 ${!isEven ? "lg:order-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-primary-foreground bg-primary px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      {s.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-black text-foreground leading-tight">
                    {s.title}
                  </h2>
                </div>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                  {s.intro}
                </p>
                <Link
                  to={s.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-ohio-red-light transition-colors group"
                >
                  View full {s.title.split("&")[0].trim()} page
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Three-column detail grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {s.columns.map((col, ci) => (
                <motion.div
                  key={col.heading}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.08 }}
                  className="bg-card rounded-2xl border border-border/50 p-6 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  <h3 className="font-display text-base font-black text-foreground mb-4 flex items-center gap-2">
                    <Palette className="w-4 h-4 text-primary" />
                    {col.heading}
                  </h3>
                  <ul className="space-y-2.5">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-primary/70 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Pro tip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 rounded-2xl border-l-4 border-primary bg-primary/[0.04] px-6 py-5"
            >
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-black text-primary">💡 David's Tip:</span>{" "}
                {s.tip}
              </p>
            </motion.div>
          </div>
        </section>
      );
    })}
  </div>
);

export default ServiceDetailSections;
