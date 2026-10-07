"use client";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Layers, Palette, Ruler, Sparkles, FileText, FolderOpen, Maximize, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/compat/router";

const businessCardsImg = "/assets/luxury-gold-foil-cards.jpg";
const brochuresImg = "/assets/trifold-brochure-sample.png";
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
  extraColumns?: {
    heading: string;
    items: string[];
  }[];
  useCases?: { who: string; how: string }[];
  tip: string;
}

const sections: DetailSection[] = [
  {
    id: "business-cards",
    icon: Layers,
    badge: "Best Seller",
    title: "Business Cards & Stationery",
    intro:
      "Your card is often the first thing a customer holds. Make it count. Heavy stocks, real finishes, details people notice.",
    image: businessCardsImg,
    imageAlt: "Gold foil business cards",
    href: "/business-cards-printing",
    columns: [
      {
        heading: "Popular paper stocks",
        items: [
          "16pt gloss or matte: the everyday workhorse",
          "18pt cotton or linen: textured feel",
          "32pt ultra-thick: heavy and rigid",
          "Kraft or recycled: eco-friendly",
          "Clear frosted plastic: modern and waterproof",
        ],
      },
      {
        heading: "Finishes and upgrades",
        items: [
          "Gold, silver or rose gold foil",
          "Spot UV: glossy accents on matte cards",
          "Embossed or debossed lettering",
          "Rounded corners or custom die-cut shapes",
          "Edge painting (colored card edges)",
          "Soft-touch lamination: velvet feel",
        ],
      },
      {
        heading: "How many to order",
        items: [
          "Standard: 250 – 500 cards (solopreneurs)",
          "Growth: 1,000 – 2,500 (sales teams)",
          "Enterprise: 5,000+ (franchise rollouts)",
          "Turnaround: 5–7 business days standard",
          "Rush available: 2–3 business days",
        ],
      },
    ],
    extraColumns: [
      {
        heading: "When to pick each finish",
        items: [
          "Foil stamping → luxury brands, real estate, law",
          "Spot UV → modern brands that want contrast",
          "Embossing → quiet class for professional services",
          "Die-cut → creative agencies and designers",
          "Edge painting → bold brand colors",
          "Soft-touch → a high-end feel people hang on to",
        ],
      },
      {
        heading: "Matching stationery",
        items: [
          "Letterhead: same stock, matching header",
          "Envelopes: #10 or A7 with your return address",
          "Notecards: branded thank-you and follow-up notes",
          "Presentation folders: the full brand kit",
          "Bundle all 4 for 15–20% savings over individual orders",
        ],
      },
      {
        heading: "Design tips",
        items: [
          "Keep it clean: name, title, phone, email, website",
          "One side for branding, one for contact info",
          "Add a QR code to your Google profile or booking page",
          "Skip the clutter. White space looks confident.",
          "Match colors to your wraps and signs",
        ],
      },
    ],
    useCases: [
      { who: "Columbus real estate agent", how: "32pt with gold foil and spot UV, the card prospects keep in their wallet, not the trash" },
      { who: "HVAC service company", how: "16pt matte with QR code to schedule service, left at every job for referral leads" },
      { who: "Wedding photographer", how: "Die-cut cards on cotton stock: creative, tactile, instantly memorable at bridal shows" },
    ],
    tip: "A 32pt card with spot UV and soft-touch costs pennies more per card. It looks a lot more professional. Easy upgrade.",
  },
  {
    id: "brochures",
    icon: FileText,
    badge: "Most Versatile",
    title: "Brochures & Business Printing",
    intro:
      "Handing something to a prospect, mailing a campaign, stocking a lobby. A printed brochure builds trust in a way a screen can't. Every fold, every stock, every finish. You get the piece that fits.",
    image: brochuresImg,
    imageAlt: "Tri-fold brochure samples",
    href: "/business-printing",
    columns: [
      {
        heading: "Fold types and when to use them",
        items: [
          "Tri-fold (letter fold): the most popular. Service menus, overviews.",
          "Bi-fold (half fold): simple. Event programs, invitations.",
          "Gate-fold: a big reveal. Product launches, luxury brands.",
          "Z-fold: accordion. Maps, step-by-step guides, timelines.",
          "Roll fold: one panel at a time. Multi-service overviews.",
          "Flat flyers and sell sheets: one side. Door hangers, inserts.",
        ],
      },
      {
        heading: "Paper and finish",
        items: [
          "80 lb gloss text: bright, light mailers",
          "100 lb gloss cover: sturdy handouts",
          "80 lb matte: easy to write on",
          "Uncoated or linen: textured feel",
          "Aqueous coating: resists scuffs",
          "UV coating: high gloss",
        ],
      },
      {
        heading: "Sizes",
        items: [
          "8.5\" × 11\" (letter): standard tri-fold or bi-fold",
          "8.5\" × 14\" (legal): more room on each panel",
          "11\" × 17\": large format for detailed menus",
          "5.5\" × 8.5\" (half-letter): rack cards, small handouts",
          "Custom sizes available",
          "We handle bleed, crop marks and safe zones",
        ],
      },
    ],
    extraColumns: [
      {
        heading: "Picking the right fold",
        items: [
          "Tri-fold → 6 panels, good for service overviews",
          "Bi-fold → 4 panels, clean event programs",
          "Gate-fold → center reveal for launches",
          "Z-fold → all panels visible at once, good for comparisons",
          "Roll fold → each panel builds on the last",
          "Not sure? Send us your content and we'll tell you",
        ],
      },
      {
        heading: "Common uses",
        items: [
          "Service menus and product catalogs",
          "Trade show handouts and leave-behinds",
          "Real estate property sheets and open house materials",
          "Restaurant and salon menus",
          "Nonprofit mailers and annual reports",
          "New patient or client welcome packets",
        ],
      },
      {
        heading: "Pricing quick reference",
        items: [
          "250 tri-fold brochures (100lb gloss): ~$0.30–$0.50/ea",
          "500 flyers (80lb gloss text): ~$0.15–$0.25/ea",
          "1,000+ brochures: lower cost per piece",
          "Gang-run pricing available. Ask about batch savings.",
          "Design help included with every order",
          "Production: 5–7 business days standard",
        ],
      },
    ],
    useCases: [
      { who: "Columbus dental practice", how: "Tri-fold brochures in the waiting room explaining services, insurance, and new patient specials" },
      { who: "Landscaping company", how: "Gate-fold brochure with dramatic before/after portfolio, handed out at home & garden shows" },
      { who: "Nonprofit organization", how: "Bi-fold programs for fundraising galas + flat flyers for community event outreach" },
    ],
    tip: "Ordering 500+ brochures? Ask about gang-run pricing. We run your job with others on the same stock. Same quality, lower price.",
  },
  {
    id: "presentation-folders",
    icon: FolderOpen,
    badge: "Closer's Choice",
    title: "Presentation Folders & Marketing Kits",
    intro:
      "Sitting across from a decision-maker? Your folder is doing half the selling. Your logo in foil, inserts in order. It tells them you're serious.",
    image: PHOTO_PRINT_1,
    imageAlt: "Presentation folder with foil stamped logo",
    href: "/presentation-folders",
    columns: [
      {
        heading: "Folder styles",
        items: [
          "Standard 9×12 two-pocket: fits letter inserts",
          "Legal-size: for attorneys and real estate",
          "Reinforced tab folders: extra durable",
          "Custom die-cut shapes",
          "Expansion pocket: holds thick stacks",
        ],
      },
      {
        heading: "Finishes",
        items: [
          "Foil-stamped logo (gold, silver, copper)",
          "Spot UV on the logo or key elements",
          "Embossing or debossing",
          "Soft-touch or silk lamination",
          "Full-color inside",
          "Business card slits: left, right or both",
        ],
      },
      {
        heading: "What goes inside",
        items: [
          "Company overview one-pager",
          "Service menu or pricing sheet",
          "Case studies or testimonials",
          "Business card in the slit",
          "Proposal or contract",
          "Branded notepad or pen (we can source those too)",
        ],
      },
    ],
    extraColumns: [
      {
        heading: "Pockets and capacity",
        items: [
          "Standard pocket: 25–30 sheets",
          "Expansion pocket: 50+ pages, contracts, catalogs",
          "CD/USB pocket: for digital portfolios",
          "Stepped inserts: staggered pages, easy to flip",
          "Velcro or elastic closures for thick sets",
          "Right pocket, left pocket or both",
        ],
      },
      {
        heading: "Marketing kits",
        items: [
          "We design, print and assemble the whole kit",
          "Folder + brochure + business card + sell sheet",
          "Volume discounts on full kits",
          "Individual poly-bagging for mailing",
          "Inserts designed to match the folder",
          "Same turnaround as a folder order",
        ],
      },
      {
        heading: "Pricing and volume",
        items: [
          "250 standard folders (14pt, 2-pocket): ~$1.50–$3.00/ea",
          "Foil stamp add-on: ~$0.25–$0.50/folder",
          "Spot UV add-on: ~$0.15–$0.30/folder",
          "Complete marketing kits (folder + 3 inserts): ~$3–$6/kit",
          "1,000+ folders: lower cost per piece",
          "Production: 7–10 business days standard",
        ],
      },
    ],
    useCases: [
      { who: "Insurance agency", how: "Foil-stamped folders with policy summaries, business card, and branded pen, closes more renewals" },
      { who: "Architecture firm", how: "Die-cut folders with project portfolio inserts, every proposal feels premium and considered" },
      { who: "Columbus school district", how: "Branded enrollment folders for new student families with forms, calendar, and welcome letter" },
    ],
    tip: "Pair a foil-stamped folder with matching letterhead and business cards. That's a brand kit that wins proposals. Ask us to bundle the price.",
  },
  {
    id: "large-format",
    icon: Maximize,
    badge: "Go Big",
    title: "Large Format Printing & Signage",
    intro:
      "2-foot posters to 20-foot wall murals. Trade show displays to outdoor banners. When you need to be seen from across the lot, this is how. We print on almost any material with UV-resistant inks that hold their color for years.",
    image: PHOTO_SIGNAGE_1,
    imageAlt: "Large format banner and signage",
    href: "/large-format-printing",
    columns: [
      {
        heading: "Products",
        items: [
          "Retractable pull-up banners: portable",
          "Vinyl banners, indoor and outdoor: affordable",
          "Trade show backdrops and displays: reusable",
          "Wall graphics and custom wallpaper: office branding",
          "Floor graphics (slip-resistant): retail, events",
          "Window clings and perforated vinyl: storefronts",
          "Posters, canvas wraps and mounted prints",
        ],
      },
      {
        heading: "Materials",
        items: [
          "13 oz scrim vinyl: the outdoor standard",
          "Fabric / dye-sub: wrinkle-free, washable",
          "Coroplast: light rigid signs (yard signs, A-frames)",
          "Foam board / Gatorboard: light display boards",
          "Acrylic and aluminum composite: permanent signs",
          "Adhesive vinyl: walls, windows, floors, vehicles",
        ],
      },
      {
        heading: "Sizes and finishing",
        items: [
          "Standard banners: 2×4 ft to 4×8 ft",
          "Retractable: 33×80 in (most popular booth size)",
          "Custom sizes up to 16 ft wide in one piece",
          "Grommets, pole pockets or hemmed edges",
          "UV lamination for outdoor durability (3–5 year life)",
          "Rush turnaround available (3–5 business days)",
        ],
      },
    ],
    extraColumns: [
      {
        heading: "Yard signs and outdoor signs",
        items: [
          "18\" × 24\" corrugated: real estate, political, events",
          "24\" × 36\": job site signs, directional signs",
          "Custom shapes: arrows, houses, circles, state outlines",
          "Single or double-sided",
          "H-stakes or ground stakes included",
          "Weather-resistant for 6–12+ months outdoor use",
        ],
      },
      {
        heading: "Table tents and counter displays",
        items: [
          "4\" × 6\" table tents: restaurants, salons, front desks",
          "5\" × 7\": more room for content",
          "Double-sided: two messages per tent",
          "Laminated so you can wipe and reuse them",
          "Counter cards and easel-back displays",
          "Custom sizes and shapes for retail displays",
        ],
      },
      {
        heading: "Wall and floor graphics",
        items: [
          "Removable wall vinyl: office branding you can move",
          "Permanent wall graphics: murals, wayfinding, decor",
          "Floor graphics: slip-resistant laminate required",
          "Perforated window vinyl: see-through from inside",
          "Custom wallpaper: a full branded wall",
          "Installation coordination available in Columbus area",
        ],
      },
    ],
    useCases: [
      { who: "Columbus restaurant", how: "Custom wall mural + window graphics + table tents, complete interior branding package" },
      { who: "Trade show exhibitor", how: "Retractable banner + backdrop + table throw, the 'booth in a box' that sets up in 5 minutes" },
      { who: "Retail store", how: "Floor graphics for seasonal promotions + window clings for storefront, easy to swap, high impact" },
    ],
    tip: "For a trade show, the minimum kit is a retractable banner, a matching table throw and business cards. We bundle all three for less than ordering them one at a time.",
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
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-primary-foreground bg-primary px-3.5 py-1.5 rounded-full shadow-lg">
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
                <div className="flex flex-wrap gap-3">
                  <Link
                    to={s.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-ohio-red-light transition-colors group"
                  >
                    View full {s.title.split("&")[0].trim()} page
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/pricing"
                    className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
                  >
                    See pricing details →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Three-column detail grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

            {/* Extra columns - expanded educational content */}
            {s.extraColumns && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {s.extraColumns.map((col, ci) => (
                  <motion.div
                    key={col.heading}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.08 }}
                    className="bg-card rounded-2xl border border-border/50 p-6 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                  >
                    <h3 className="font-display text-base font-black text-foreground mb-4 flex items-center gap-2">
                      <Ruler className="w-4 h-4 text-primary" />
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
            )}

            {/* Use cases */}
            {s.useCases && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 bg-card rounded-2xl border border-border/50 p-6 md:p-8"
              >
                <h3 className="font-display text-lg font-black text-foreground mb-5 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  How Columbus businesses use this
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {s.useCases.map((uc) => (
                    <div key={uc.who} className="bg-muted/50 rounded-xl p-4">
                      <p className="text-xs font-bold text-primary mb-1.5">{uc.who}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{uc.how}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Pro tip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 rounded-2xl border-l-4 border-primary bg-primary/[0.04] px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <p className="text-sm text-foreground leading-relaxed flex-1">
                <span className="font-black text-primary">💡 David's Tip:</span>{" "}
                {s.tip}
              </p>
              <Link to="/contact" className="shrink-0">
                <Button className="font-bold rounded-xl group">
                  Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      );
    })}
  </div>
);

export default ServiceDetailSections;
