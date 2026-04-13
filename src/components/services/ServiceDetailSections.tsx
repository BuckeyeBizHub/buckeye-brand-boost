import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Layers, Palette, Ruler, Sparkles, FileText, FolderOpen, Maximize, Lightbulb } from "lucide-react";
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
    extraColumns: [
      {
        heading: "When to Choose Each Finish",
        items: [
          "Foil stamping → premium/luxury brands, real estate, law",
          "Spot UV → modern brands wanting contrast & texture",
          "Embossing → subtle elegance for professional services",
          "Die-cut → creative agencies, designers, unique brands",
          "Edge painting → bold brand colors, memorable touch",
          "Soft-touch → high-end feel that makes people hold on",
        ],
      },
      {
        heading: "Matching Stationery Suite",
        items: [
          "Letterhead — matching paper stock & header design",
          "Envelopes — #10 or A7 with printed return address",
          "Notecards — branded thank-you and follow-up notes",
          "Presentation folders — coordinated brand kit",
          "Bundle all 4 for 15–20% savings over individual orders",
        ],
      },
      {
        heading: "Design Tips for Maximum Impact",
        items: [
          "Keep it clean — name, title, phone, email, website",
          "Use one side for branding, one for contact info",
          "QR code linking to your Google profile or scheduling page",
          "Avoid clutter — white space communicates confidence",
          "Match colors to your vehicle wraps & signage for cohesion",
        ],
      },
    ],
    useCases: [
      { who: "Columbus real estate agent", how: "32pt with gold foil and spot UV — the card prospects keep in their wallet, not the trash" },
      { who: "HVAC service company", how: "16pt matte with QR code to schedule service — left at every job for referral leads" },
      { who: "Wedding photographer", how: "Die-cut cards on cotton stock — creative, tactile, instantly memorable at bridal shows" },
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
        heading: "Fold Types & When to Use Each",
        items: [
          "Tri-fold (letter fold) — most popular; service menus, overviews",
          "Bi-fold (half fold) — simple, elegant; event programs, invitations",
          "Gate-fold — dramatic reveal; product launches, luxury brands",
          "Z-fold — accordion; maps, step-by-step guides, timelines",
          "Roll fold — layered storytelling; multi-service overviews",
          "Flat flyers & sell sheets — one-sided impact; door hangers, inserts",
        ],
      },
      {
        heading: "Paper & Finish Options",
        items: [
          "80 lb Gloss Text — vibrant, lightweight mailers",
          "100 lb Gloss Cover — sturdy, professional handouts",
          "80 lb Matte — sophisticated, easy to write on",
          "Uncoated / Linen — textured, premium feel",
          "Aqueous coating — scuff-resistant protection",
          "UV coating — ultra-glossy, eye-popping shine",
        ],
      },
      {
        heading: "Size & Layout Options",
        items: [
          "8.5\" × 11\" (letter) — standard tri-fold or bi-fold",
          "8.5\" × 14\" (legal) — extra panel space for content",
          "11\" × 17\" — large format for detailed service menus",
          "5.5\" × 8.5\" — half-letter; rack cards, compact handouts",
          "Custom sizes available for unique applications",
          "Bleed, crop marks, and safe zones handled by our team",
        ],
      },
    ],
    extraColumns: [
      {
        heading: "Choosing the Right Fold",
        items: [
          "Tri-fold → 6 panels, great for service/product overviews",
          "Bi-fold → 4 panels, clean layouts for event programs",
          "Gate-fold → dramatic center reveal, ideal for unveilings",
          "Z-fold → panels visible simultaneously, great for comparisons",
          "Roll fold → sequential storytelling, each panel builds on the last",
          "Not sure? Send us your content and we'll recommend the best option",
        ],
      },
      {
        heading: "Common Use Cases",
        items: [
          "Service menus & product catalogs",
          "Trade show handouts & leave-behinds",
          "Real estate property sheets & open house materials",
          "Restaurant & salon service menus",
          "Nonprofit fundraising mailers & annual reports",
          "New patient / client welcome packets",
        ],
      },
      {
        heading: "Pricing Quick Reference",
        items: [
          "250 tri-fold brochures (100lb gloss): ~$0.30–$0.50/ea",
          "500 flyers (80lb gloss text): ~$0.15–$0.25/ea",
          "1,000+ brochures: significant per-unit savings",
          "Gang-run pricing available — ask us about batch savings",
          "Design assistance included with every order",
          "Production: 5–7 business days standard",
        ],
      },
    ],
    useCases: [
      { who: "Columbus dental practice", how: "Tri-fold brochures in the waiting room explaining services, insurance, and new patient specials" },
      { who: "Landscaping company", how: "Gate-fold brochure with dramatic before/after portfolio — handed out at home & garden shows" },
      { who: "Nonprofit organization", how: "Bi-fold programs for fundraising galas + flat flyers for community event outreach" },
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
    extraColumns: [
      {
        heading: "Pocket & Capacity Options",
        items: [
          "Standard pocket — holds 25–30 sheets comfortably",
          "Expansion pocket — holds 50+ pages, contracts, catalogs",
          "CD/USB pocket — for digital portfolios and media",
          "Stepped inserts — staggered pages for easy browsing",
          "Velcro or elastic closures for thick document sets",
          "Right-pocket, left-pocket, or both configurations",
        ],
      },
      {
        heading: "Marketing Kit Assembly",
        items: [
          "We design, print, AND assemble complete kits for you",
          "Folder + brochure + business card + sell sheet bundles",
          "Volume discounts on complete marketing kit packages",
          "Individual poly-bagging available for mailing",
          "Custom inserts designed to match folder branding",
          "Same turnaround as individual folder orders",
        ],
      },
      {
        heading: "Pricing & Volume Guide",
        items: [
          "250 standard folders (14pt, 2-pocket): ~$1.50–$3.00/ea",
          "Foil stamp add-on: ~$0.25–$0.50/folder",
          "Spot UV add-on: ~$0.15–$0.30/folder",
          "Complete marketing kits (folder + 3 inserts): ~$3–$6/kit",
          "1,000+ folders: significant per-unit savings",
          "Production: 7–10 business days standard",
        ],
      },
    ],
    useCases: [
      { who: "Insurance agency", how: "Foil-stamped folders with policy summaries, business card, and branded pen — closes more renewals" },
      { who: "Architecture firm", how: "Die-cut folders with project portfolio inserts — every proposal feels premium and considered" },
      { who: "Columbus school district", how: "Branded enrollment folders for new student families with forms, calendar, and welcome letter" },
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
          "Retractable / pull-up banners — portable, professional",
          "Vinyl banners (indoor & outdoor) — versatile, affordable",
          "Trade show backdrops & displays — modular, reusable",
          "Wall graphics & custom wallpaper — office branding",
          "Floor graphics (slip-resistant) — retail, events",
          "Window clings & perforated vinyl — storefront marketing",
          "Posters, canvas wraps & mounted prints — decor & display",
        ],
      },
      {
        heading: "Materials & Substrates",
        items: [
          "13 oz scrim vinyl — outdoor standard, weather-resistant",
          "Fabric / dye-sub — wrinkle-free, portable, washable",
          "Coroplast — lightweight rigid signs (yard signs, A-frames)",
          "Foam board / Gatorboard — display-grade, lightweight",
          "Acrylic & aluminum composite — premium, permanent",
          "Adhesive vinyl — walls, windows, floors, vehicles",
        ],
      },
      {
        heading: "Size & Finishing Guide",
        items: [
          "Standard banners: 2×4 ft to 4×8 ft",
          "Retractable: 33×80 in (most popular booth size)",
          "Custom sizes up to 16 ft wide (seamless)",
          "Grommets, pole pockets, or hem finishes",
          "UV lamination for outdoor durability (3–5 year life)",
          "Rush turnaround available (3–5 business days)",
        ],
      },
    ],
    extraColumns: [
      {
        heading: "Yard Signs & Outdoor Signage",
        items: [
          "18\" × 24\" corrugated — real estate, political, events",
          "24\" × 36\" — job site branding, directional signs",
          "Custom shapes — arrows, houses, circles, state outlines",
          "Single or double-sided printing available",
          "H-stakes or ground stakes included",
          "Weather-resistant for 6–12+ months outdoor use",
        ],
      },
      {
        heading: "Table Tents & POP Displays",
        items: [
          "4\" × 6\" table tents — restaurants, salons, reception desks",
          "5\" × 7\" — larger format for more content",
          "Double-sided printing — two messages per tent",
          "Laminated for wipeable, reusable durability",
          "Counter cards & easel-back displays",
          "Custom sizes and shapes for retail POP displays",
        ],
      },
      {
        heading: "Wall & Floor Graphics",
        items: [
          "Removable wall vinyl — office branding, repositionable",
          "Permanent wall graphics — murals, wayfinding, decor",
          "Floor graphics — slip-resistant laminate required",
          "Window perforated vinyl — see-through from inside",
          "Custom wallpaper — full-wall branding for showrooms",
          "Installation coordination available in Columbus area",
        ],
      },
    ],
    useCases: [
      { who: "Columbus restaurant", how: "Custom wall mural + window graphics + table tents — complete interior branding package" },
      { who: "Trade show exhibitor", how: "Retractable banner + backdrop + table throw — the 'booth in a box' that sets up in 5 minutes" },
      { who: "Retail store", how: "Floor graphics for seasonal promotions + window clings for storefront — easy to swap, high impact" },
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

            {/* Extra columns - expanded educational content */}
            {s.extraColumns && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
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
                  How Columbus Businesses Use This
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {s.useCases.map((uc) => (
                    <div key={uc.who} className="bg-muted/50 rounded-xl p-4">
                      <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5">{uc.who}</p>
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
