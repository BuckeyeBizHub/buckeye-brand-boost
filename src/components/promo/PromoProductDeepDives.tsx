import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, ShoppingBag, PenTool, Monitor, Coffee, Flag, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface DeepDive {
  id: string;
  icon: React.ElementType;
  badge: string;
  title: string;
  intro: string;
  columns: { heading: string; items: string[] }[];
  useCases: { who: string; how: string }[];
  tip: string;
}

const deepDives: DeepDive[] = [
  {
    id: "tote-bags",
    icon: ShoppingBag,
    badge: "Trade Show #1",
    title: "Custom Printed Tote Bags & Bags",
    intro:
      "Tote bags are one of the highest-ROI promotional items you can hand out. They're used repeatedly — at grocery stores, farmers markets, and gyms — generating thousands of impressions per bag. They also double as packaging: fill one with your other branded items for an instant 'swag kit.'",
    columns: [
      {
        heading: "Bag Types & Materials",
        items: [
          "Non-woven polypropylene — lightweight, from $1/unit",
          "Cotton canvas (4–12 oz) — premium, durable, reusable",
          "Recycled PET / RPET — eco-friendly, made from bottles",
          "Jute / burlap — rustic, natural look for organic brands",
          "Drawstring backpacks — popular with students & athletes",
          "Insulated cooler bags — great for food & beverage brands",
        ],
      },
      {
        heading: "Print Methods & Sizes",
        items: [
          "Screen print — best for 1–3 color logos at volume",
          "Full-color heat transfer — photo-quality, unlimited colors",
          "Standard tote: 15\" × 16\" (most popular grocery size)",
          "Large tote: 20\" × 15\" × 5\" with gusset for capacity",
          "Drawstring: 14\" × 18\" — compact and portable",
          "Print area typically 10\" × 10\" on front panel",
        ],
      },
      {
        heading: "Pricing & Volume Guide",
        items: [
          "Non-woven: $1.00–$2.50/unit (100+ qty)",
          "Cotton canvas: $3.00–$8.00/unit (50+ qty)",
          "Recycled PET: $2.50–$5.00/unit (100+ qty)",
          "Insulated cooler: $5.00–$12.00/unit (50+ qty)",
          "Setup fee: usually $50–$75 (waived at higher volumes)",
          "Production: 10–14 business days standard",
        ],
      },
    ],
    useCases: [
      { who: "Columbus Farmers Market vendor", how: "Custom canvas totes for loyal customers — they carry your brand through Short North every Saturday" },
      { who: "Real estate agency", how: "Welcome bags for new homeowners filled with local business coupons and branded items" },
      { who: "Trade show exhibitor", how: "Non-woven totes as booth giveaways — attendees carry your branding through the entire convention hall" },
    ],
    tip: "Order an extra 10% beyond your planned quantity — leftover totes never go to waste. Use them at charity events, community days, or as surprise bonuses for walk-in customers.",
  },
  {
    id: "notebooks",
    icon: PenTool,
    badge: "Executive Favorite",
    title: "Branded Notebooks & Journals",
    intro:
      "A branded notebook sits on your client's desk or in their bag for weeks or months — far longer than any digital ad stays in memory. They're perfect for executive gifts, conference swag, employee onboarding, and client welcome kits. Choose from debossed leather to full-color printed covers.",
    columns: [
      {
        heading: "Cover & Binding Options",
        items: [
          "Hardcover leatherette — debossed or foil-stamped logo",
          "Softcover cardstock — full-color printed wraparound",
          "Spiral-bound — lay-flat for easy writing",
          "Perfect-bound — clean, book-like finish",
          "Elastic closure & ribbon bookmark included on premium",
          "Pen loop built in (matches branded pen sets)",
        ],
      },
      {
        heading: "Interior & Size Options",
        items: [
          "A5 (5.5\" × 8.5\") — most popular portable size",
          "A4 (8.5\" × 11\") — full-page meeting notes",
          "Pocket size (3.5\" × 5.5\") — easy to carry anywhere",
          "Lined, dotted, grid, or blank pages available",
          "80–160 pages depending on binding style",
          "Custom interior headers possible (add your URL, tagline)",
        ],
      },
      {
        heading: "Pricing & Customization",
        items: [
          "Softcover printed: $3.00–$6.00/unit (50+ qty)",
          "Hardcover debossed: $6.00–$15.00/unit (25+ qty)",
          "Leatherette premium: $10.00–$25.00/unit (25+ qty)",
          "Full-color cover wrap: included in most softcover options",
          "Debossing/foil stamp: one-time setup $50–$100",
          "Production: 12–18 business days standard",
        ],
      },
    ],
    useCases: [
      { who: "Columbus law firm", how: "Debossed leather journals as client gifts after closing — classy touch that generates referrals" },
      { who: "Tech startup", how: "Custom notebooks in employee onboarding kits with company values printed inside the cover" },
      { who: "Conference organizer", how: "Branded A5 notebooks in attendee bags — sponsors love seeing their logo used for months" },
    ],
    tip: "Pair a branded notebook with a matching pen for a coordinated gift set. We can kit them together in a custom box or sleeve — it doubles the perceived value for just a few dollars more.",
  },
  {
    id: "desk-items",
    icon: Monitor,
    badge: "Daily Exposure",
    title: "Custom Mousepads, Desk Mats & Accessories",
    intro:
      "Desk accessories are the promotional products with the highest daily impression count — your logo sits in front of your client or employee for every minute of their workday. Mousepads, desk mats, and coasters deliver unmatched, quiet brand reinforcement.",
    columns: [
      {
        heading: "Product Types",
        items: [
          "Standard mousepad — 9\" × 7\" (classic size)",
          "Extended desk mat — 35\" × 16\" (covers keyboard + mouse)",
          "Coaster sets — round or square, cork-backed",
          "Desk organizers — printed or engraved",
          "Wireless charging mousepads — tech + branding combined",
          "Calendar mousepads — year-long daily exposure",
        ],
      },
      {
        heading: "Materials & Durability",
        items: [
          "Fabric top + rubber base — standard, comfortable",
          "Hard surface / plastic — ultra-smooth for gaming mice",
          "Cork base — eco-friendly, natural look",
          "Full-color sublimation — edge-to-edge vivid printing",
          "Machine-washable options for long-term use",
          "Anti-fray stitched edges on premium models",
        ],
      },
      {
        heading: "Pricing & Specs",
        items: [
          "Standard mousepad: $2.00–$5.00/unit (50+ qty)",
          "Extended desk mat: $8.00–$18.00/unit (25+ qty)",
          "Coaster sets (4-pack): $4.00–$8.00/set (50+ qty)",
          "Wireless charging pad: $15.00–$30.00/unit (25+ qty)",
          "Full-color printing included in most options",
          "Production: 10–14 business days standard",
        ],
      },
    ],
    useCases: [
      { who: "Insurance agency", how: "Branded mousepads mailed to clients after policy renewal — 8 hours of daily brand exposure" },
      { who: "Columbus coworking space", how: "Custom desk mats on every desk with sponsor logos — premium, functional branding" },
      { who: "IT company", how: "Wireless charging mousepads as holiday gifts to key accounts — high perceived value" },
    ],
    tip: "Extended desk mats are trending fast in 2025 — they look premium, cover the full workspace, and cost less than you'd think at volume. Great for impressing remote employees in home offices.",
  },
  {
    id: "drinkware-deep",
    icon: Coffee,
    badge: "Highest Retention",
    title: "Printed Drinkware: Tumblers, Bottles & Beyond",
    intro:
      "Drinkware consistently ranks as the #1 promotional product category for consumer retention — 78% of people keep a branded tumbler or bottle for over a year. From budget-friendly acrylic cups to premium stainless steel tumblers, drinkware delivers the best cost-per-impression of any promo item.",
    columns: [
      {
        heading: "Drinkware Types",
        items: [
          "Stainless steel tumblers (20 oz / 30 oz) — most popular",
          "Insulated water bottles — double-wall vacuum",
          "Ceramic coffee mugs — classic office staple",
          "Acrylic cups with straw — budget-friendly, colorful",
          "Stemless wine tumblers — event & hospitality favorite",
          "Can coolers / koozies — ultra-affordable awareness",
        ],
      },
      {
        heading: "Print & Branding Options",
        items: [
          "Full-color UV wrap printing — vivid, permanent",
          "Laser engraving — elegant on stainless steel",
          "Screen printing — cost-effective at high volume",
          "Pad printing — great for curved mugs",
          "Wrap-around designs for 360° brand exposure",
          "Individual gift boxing available for premium gifts",
        ],
      },
      {
        heading: "Pricing & Selection Guide",
        items: [
          "Can coolers: $0.75–$2.00/unit (100+ qty)",
          "Acrylic cups: $2.50–$5.00/unit (50+ qty)",
          "Ceramic mugs: $3.00–$7.00/unit (36+ qty)",
          "Stainless tumblers: $6.00–$18.00/unit (25+ qty)",
          "Premium bottles (name brands): $15.00–$35.00/unit",
          "Production: 10–14 business days standard",
        ],
      },
    ],
    useCases: [
      { who: "HVAC company", how: "Branded tumblers left at every service call — customers use them daily and think of you when they need service again" },
      { who: "Columbus brewery", how: "Custom pint glasses and can coolers for taproom merch — customers buy AND advertise for you" },
      { who: "Corporate HR team", how: "Premium insulated bottles in new-hire welcome kits — practical, appreciated, and used every day" },
    ],
    tip: "Stainless steel tumblers in the $8–$12 range hit the sweet spot: they look and feel premium, they're used constantly, and they deliver the best cost-per-impression of any item in your promo arsenal.",
  },
  {
    id: "banners-promo",
    icon: Flag,
    badge: "Event Essential",
    title: "Custom Banners & Flags as Promotional Items",
    intro:
      "Banners and flags aren't just signage — they're some of the most effective promotional products for events, trade shows, and retail spaces. A well-designed retractable banner or feather flag draws foot traffic, frames your booth, and creates a professional brand presence that builds immediate trust.",
    columns: [
      {
        heading: "Banner & Flag Types",
        items: [
          "Retractable / pull-up banners — portable, sets up in 30 seconds",
          "Vinyl banners — indoor/outdoor, grommeted or pole-pocketed",
          "Feather flags — tall, eye-catching, great for roadside",
          "Teardrop flags — compact, wind-resistant design",
          "Table throws / runners — branded tablecloths for events",
          "Step & repeat backdrops — photo-op branding walls",
        ],
      },
      {
        heading: "Materials & Durability",
        items: [
          "13 oz scrim vinyl — outdoor standard, weather-resistant",
          "Fabric / dye-sublimation — wrinkle-free, machine-washable",
          "Mesh banner — wind-resistant for outdoor use",
          "Retractable hardware — aluminum with padded carry case",
          "UV-resistant inks — no fading in direct sunlight",
          "Fire-retardant options for indoor venues",
        ],
      },
      {
        heading: "Sizes & Pricing Guide",
        items: [
          "Retractable banner: 33\" × 80\" (most popular) — $99–$175",
          "Vinyl banner (3' × 6'): $30–$60 per banner",
          "Feather flag (8–15 ft): $85–$200 with hardware",
          "Table throw (6 ft): $99–$175 — fitted or draped",
          "Step & repeat (8' × 8'): $200–$400",
          "Production: 5–10 business days standard",
        ],
      },
    ],
    useCases: [
      { who: "Columbus food truck", how: "Feather flags and a retractable banner at every location — visible from 200+ feet, easy to set up and tear down" },
      { who: "Nonprofit fundraiser", how: "Step & repeat backdrop for donor photos + table throws for registration — polished, professional look on a budget" },
      { who: "Real estate open house", how: "A-frame signs outside + retractable banner in the foyer — cohesive branding that builds buyer confidence" },
    ],
    tip: "The 'trade show starter kit' — one retractable banner + one 6ft table throw + 500 business cards — is the minimum for a professional booth presence. We bundle-price all three for significant savings over ordering separately.",
  },
];

const PromoProductDeepDives = () => (
  <div className="space-y-0">
    {deepDives.map((section, idx) => {
      const isEven = idx % 2 === 0;
      return (
        <section
          key={section.id}
          id={`promo-${section.id}`}
          className={`py-20 lg:py-28 ${isEven ? "bg-muted/30" : "bg-background"}`}
        >
          <div className="container max-w-7xl mx-auto px-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[10px] font-extrabold text-primary-foreground bg-primary px-3 py-1 rounded-full uppercase tracking-wider">
                  {section.badge}
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-foreground leading-tight mb-4">
                {section.title}
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-4xl">
                {section.intro}
              </p>
            </motion.div>

            {/* Three-column detail grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {section.columns.map((col, ci) => (
                <motion.div
                  key={col.heading}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.08 }}
                  className="bg-card rounded-2xl border border-border/50 p-6 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  <h3 className="font-display text-base font-black text-foreground mb-4">
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

            {/* Use cases for Columbus businesses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border/50 p-6 md:p-8 mb-6"
            >
              <h3 className="font-display text-lg font-black text-foreground mb-5 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                Real-World Use Cases for Ohio Businesses
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {section.useCases.map((uc) => (
                  <div key={uc.who} className="bg-muted/50 rounded-xl p-4">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5">{uc.who}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{uc.how}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Pro tip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border-l-4 border-primary bg-primary/[0.04] px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <p className="text-sm text-foreground leading-relaxed flex-1">
                <span className="font-black text-primary">💡 David's Tip:</span>{" "}
                {section.tip}
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

export default PromoProductDeepDives;
