"use client";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, ShoppingBag, PenTool, Monitor, Coffee, Flag, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/compat/router";

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
      "Totes are one of the best returns in promo. People reuse them at the grocery store, the farmers market, the gym. Thousands of looks per bag. They also work as packaging. Fill one with your other branded items and you have a swag kit.",
    columns: [
      {
        heading: "Bag types and materials",
        items: [
          "Non-woven polypropylene: lightweight, from $1/unit",
          "Cotton canvas (4–12 oz): durable, reusable",
          "Recycled PET / RPET: made from bottles",
          "Jute / burlap: rustic look for natural brands",
          "Drawstring backpacks: popular with students and athletes",
          "Insulated cooler bags: good for food and drink brands",
        ],
      },
      {
        heading: "Print methods and sizes",
        items: [
          "Screen print: best for 1–3 color logos at volume",
          "Full-color heat transfer: photo quality, any number of colors",
          "Standard tote: 15\" × 16\" (most popular grocery size)",
          "Large tote: 20\" × 15\" × 5\" with gusset for capacity",
          "Drawstring: 14\" × 18\", compact",
          "Print area usually 10\" × 10\" on the front",
        ],
      },
      {
        heading: "Pricing and volume",
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
      { who: "Columbus Farmers Market vendor", how: "Custom canvas totes for loyal customers, they carry your brand through Short North every Saturday" },
      { who: "Real estate agency", how: "Welcome bags for new homeowners filled with local business coupons and branded items" },
      { who: "Trade show exhibitor", how: "Non-woven totes as booth giveaways, attendees carry your branding through the entire convention hall" },
    ],
    tip: "Order 10% more than you think you need. Leftover totes never go to waste. Use them at charity events, community days, or as a thank-you for good customers.",
  },
  {
    id: "notebooks",
    icon: PenTool,
    badge: "Executive Favorite",
    title: "Branded Notebooks & Journals",
    intro:
      "A branded notebook sits on a client's desk for weeks or months. No digital ad lasts that long. Good for executive gifts, conference swag, onboarding kits and client welcome kits. Debossed leather to full-color printed covers.",
    columns: [
      {
        heading: "Covers and binding",
        items: [
          "Hardcover leatherette: debossed or foil-stamped logo",
          "Softcover cardstock: full-color wraparound print",
          "Spiral-bound: lays flat for writing",
          "Perfect-bound: clean, book-like finish",
          "Elastic closure and ribbon bookmark on premium styles",
          "Pen loop built in (matches branded pen sets)",
        ],
      },
      {
        heading: "Pages and sizes",
        items: [
          "A5 (5.5\" × 8.5\"): the most popular size",
          "A4 (8.5\" × 11\"): full-page meeting notes",
          "Pocket size (3.5\" × 5.5\"): fits anywhere",
          "Lined, dotted, grid or blank pages",
          "80–160 pages depending on binding style",
          "Custom page headers (add your URL or tagline)",
        ],
      },
      {
        heading: "Pricing and customization",
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
      { who: "Columbus law firm", how: "Debossed leather journals as client gifts after closing, classy touch that generates referrals" },
      { who: "Tech startup", how: "Custom notebooks in employee onboarding kits with company values printed inside the cover" },
      { who: "Conference organizer", how: "Branded A5 notebooks in attendee bags, sponsors love seeing their logo used for months" },
    ],
    tip: "Pair a notebook with a matching pen. We can box or sleeve them together. It feels like a much bigger gift for a few dollars more.",
  },
  {
    id: "desk-items",
    icon: Monitor,
    badge: "Daily Exposure",
    title: "Custom Mousepads, Desk Mats & Accessories",
    intro:
      "Desk items get seen more than any other promo product. Your logo sits in front of a client or employee all day long. Mousepads, desk mats and coasters do quiet, steady work.",
    columns: [
      {
        heading: "Product types",
        items: [
          "Standard mousepad: 9\" × 7\"",
          "Extended desk mat: 35\" × 16\" (covers keyboard + mouse)",
          "Coaster sets: round or square, cork-backed",
          "Desk organizers: printed or engraved",
          "Wireless charging mousepads",
          "Calendar mousepads: seen every day for a year",
        ],
      },
      {
        heading: "Materials and durability",
        items: [
          "Fabric top + rubber base: the standard",
          "Hard plastic surface: smooth for gaming mice",
          "Cork base: natural look",
          "Full-color sublimation: printed edge to edge",
          "Machine-washable options",
          "Anti-fray stitched edges on premium models",
        ],
      },
      {
        heading: "Pricing and specs",
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
      { who: "Insurance agency", how: "Branded mousepads mailed to clients after policy renewal, 8 hours of daily brand exposure" },
      { who: "Columbus coworking space", how: "Custom desk mats on every desk with sponsor logos, premium, functional branding" },
      { who: "IT company", how: "Wireless charging mousepads as holiday gifts to key accounts, high perceived value" },
    ],
    tip: "Extended desk mats look high-end, cover the whole desk, and cost less than you'd think at volume. Good gift for remote employees.",
  },
  {
    id: "drinkware-deep",
    icon: Coffee,
    badge: "Highest Retention",
    title: "Printed Drinkware: Tumblers, Bottles & Beyond",
    intro:
      "Drinkware ranks #1 in promo for how long people keep it. 78% of people keep a branded tumbler or bottle for over a year. Cheap acrylic cups to stainless tumblers. Hard to beat on cost per impression.",
    columns: [
      {
        heading: "Drinkware types",
        items: [
          "Stainless steel tumblers (20 oz / 30 oz): most popular",
          "Insulated water bottles: double-wall vacuum",
          "Ceramic coffee mugs: the office classic",
          "Acrylic cups with straw: cheap and colorful",
          "Stemless wine tumblers: events and hospitality",
          "Can coolers / koozies: the cheapest way in",
        ],
      },
      {
        heading: "Print and branding",
        items: [
          "Full-color UV wrap printing: bright, permanent",
          "Laser engraving: sharp on stainless steel",
          "Screen printing: cheapest at high volume",
          "Pad printing: good for curved mugs",
          "Wrap-around designs, seen from every side",
          "Individual gift boxes available",
        ],
      },
      {
        heading: "Pricing guide",
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
      { who: "HVAC company", how: "Branded tumblers left at every service call, customers use them daily and think of you when they need service again" },
      { who: "Columbus brewery", how: "Custom pint glasses and can coolers for taproom merch, customers buy and advertise for you" },
      { who: "Corporate HR team", how: "Premium insulated bottles in new-hire welcome kits, practical, appreciated, and used every day" },
    ],
    tip: "Stainless tumblers in the $8–$12 range are the sweet spot. They feel high-end, people use them every day, and they beat almost anything on cost per impression.",
  },
  {
    id: "banners-promo",
    icon: Flag,
    badge: "Event Essential",
    title: "Custom Banners & Flags as Promotional Items",
    intro:
      "Banners and flags pull people in at events, trade shows and stores. A good retractable banner or feather flag draws foot traffic and frames your booth. People trust what looks professional.",
    columns: [
      {
        heading: "Banner and flag types",
        items: [
          "Retractable pull-up banners: portable, sets up in 30 seconds",
          "Vinyl banners: indoor or outdoor, grommets or pole pockets",
          "Feather flags: tall, good for roadside",
          "Teardrop flags: compact, handles wind",
          "Table throws and runners: branded tablecloths",
          "Step and repeat backdrops: photo walls",
        ],
      },
      {
        heading: "Materials and durability",
        items: [
          "13 oz scrim vinyl: the outdoor standard",
          "Fabric / dye-sublimation: wrinkle-free, machine-washable",
          "Mesh banner: lets wind through outdoors",
          "Retractable hardware: aluminum with padded carry case",
          "UV-resistant inks: hold color in direct sun",
          "Fire-retardant options for indoor venues",
        ],
      },
      {
        heading: "Sizes and pricing",
        items: [
          "Retractable banner: 33\" × 80\" (most popular), $99–$175",
          "Vinyl banner (3' × 6'): $30–$60 per banner",
          "Feather flag (8–15 ft): $85–$200 with hardware",
          "Table throw (6 ft): $99–$175, fitted or draped",
          "Step & repeat (8' × 8'): $200–$400",
          "Production: 5–10 business days standard",
        ],
      },
    ],
    useCases: [
      { who: "Columbus food truck", how: "Feather flags and a retractable banner at every location, visible from 200+ feet, easy to set up and tear down" },
      { who: "Nonprofit fundraiser", how: "Step & repeat backdrop for donor photos + table throws for registration, polished, professional look on a budget" },
      { who: "Real estate open house", how: "A-frame signs outside + retractable banner in the foyer, cohesive branding that builds buyer confidence" },
    ],
    tip: "The minimum trade show kit: one retractable banner, one 6 ft table throw, 500 business cards. We bundle all three for less than ordering them one at a time.",
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
                <span className="text-[10px] font-extrabold text-primary-foreground bg-primary px-3 py-1 rounded-full ">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
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
                Ideas for Ohio businesses
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {section.useCases.map((uc) => (
                  <div key={uc.who} className="bg-muted/50 rounded-xl p-4">
                    <p className="text-xs font-bold text-primary mb-1.5">{uc.who}</p>
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
