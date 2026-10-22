import type { ProductPage } from "../types";
import { HAT_STYLES, JACKET_STYLES, POLO_STYLES, PULLOVER_STYLES, T_SHIRT_STYLES } from "./apparel-styles";

// Custom apparel: the hub, how it's decorated, what it goes on, and team
// stores. Order here is menu order. Styles on garment pages come from the
// apparel distributor's catalog and never carry a price or a cost.
export const APPAREL_PAGES: ProductPage[] = [
  {
    slug: "custom-apparel",
    group: "gear",
    navLabel: "Custom apparel",
    blurb: "Shirts, polos, jackets, hats and hoodies with your logo, printed or embroidered.",
    metaTitle: "Custom Apparel with Your Logo in Columbus, Ohio",
    metaDescription:
      "Custom apparel for Columbus businesses, schools and teams: screen printing, embroidery and DTF on tees, polos, jackets, hats and hoodies. Tees from $14 each.",
    eyebrow: "Custom apparel",
    h1: "Custom Apparel and Logo Wear in Columbus, Ohio",
    tagline: "Your logo on what your crew actually wears.",
    lede: "T-shirts, polos, jackets, hats and hoodies with your logo, screen printed, embroidered or DTF printed. For Columbus businesses, schools, teams and events. You pick the garment, I match the decoration to it.",
    hero: {
      src: "/assets/custom-apparel-polos-hoodies.jpg",
      alt: "Red and black polos, a navy T-shirt and a black hoodie, each with the Buckeye Biz Hub Ohio logo",
    },
    prices: ["screen-printed-tees", "embroidered-polos"],
    children: [
      {
        heading: "How it's decorated",
        intro: "Three ways to put your logo on a garment. Each one fits a different job.",
        slugs: ["screen-printing", "embroidery", "dtf-printing"],
      },
      {
        heading: "What it goes on",
        intro: "The garments most businesses and teams order.",
        slugs: ["custom-t-shirts", "custom-polos", "custom-jackets", "custom-hats", "custom-hoodies-and-pullovers", "team-stores"],
      },
    ],
    options: [
      {
        name: "Crew and work T-shirts",
        detail: "Cotton, blends and heavyweight work tees, screen printed or DTF printed, front, back or both.",
      },
      {
        name: "Embroidered polos",
        detail: "A stitched chest logo for the office, the showroom and customer visits.",
      },
      {
        name: "Jackets and outerwear",
        detail: "Soft shells, work jackets, fleece and vests with an embroidered chest logo or a big print on the back.",
      },
      {
        name: "Ballcaps and beanies",
        detail: "Structured caps, trucker hats and winter knit beanies, stitched or with a patch.",
      },
      {
        name: "Hoodies and pullovers",
        detail: "Hooded sweatshirts, crewnecks and quarter-zips for the cold months and the company cookout.",
      },
      {
        name: "Team and spirit stores",
        detail: "An online store for your school, team or company, so everyone orders their own sizes.",
      },
      {
        name: "Hi-vis and safety wear",
        detail: "Safety vests and hi-vis shirts with your logo for road crews and job sites.",
      },
    ],
    uses: [
      "Roofing, HVAC and construction crews",
      "Lawn care and landscaping teams",
      "Dental and medical offices",
      "Restaurants, breweries and coffee shops",
      "Schools, booster clubs and youth teams",
      "Company events, 5Ks and team gifts",
      "New hire welcome kits",
    ],
    sections: [
      {
        heading: "Screen printing, embroidery or DTF: which one fits?",
        body: "Screen printing pushes ink through a screen, one screen per color. It costs the least per shirt on bigger runs and handles a bold design on a tee or hoodie. It's the pick for crew shirts, events and giveaways.\n\nEmbroidery stitches your logo into the fabric with thread. It looks sharp on polos, hats and jackets and holds up to years of washing. It's the pick for anything your team wears in front of customers.\n\nDTF prints your design on a film, then heat-presses it onto the garment. Full color, fine detail and no setup per color, so it works for small runs, photos and a different name on every shirt. Not sure which one you need? Send me your logo and the items, and I'll tell you which method fits each piece.",
      },
      {
        heading: "One person for the whole uniform",
        body: "Most businesses mix methods. Embroidered polos and hats for the people customers see. Screen printed tees for the field. A company hoodie and jacket for winter. Every piece carries the same logo and colors.\n\nYou send one list of who needs what. I put the quote together, source the garments, line up the decoration with trusted partners and get it to you. You deal with one person from start to finish.\n\nWhen you hire someone, reorder a few pieces. Your logo is already set up, so they look like the rest of the crew on day one.",
        image: {
          src: "/assets/apparel-safety-hivis.jpg",
          alt: "Orange and yellow hi-vis safety vests with reflective stripes and a printed logo, hanging over a workbench",
        },
      },
      {
        heading: "Hundreds of styles, a short list to start",
        body: "There are thousands of blank garments out there. Each garment page shows a short list of styles customers pick most, with the common colors. It's a starting point.\n\nIf you have a brand or style in mind, tell me and I'll find it. If you don't, tell me the job, the budget and how the shirts get worn, and I'll suggest two or three that fit. You see a proof of your logo on the garment before anything gets made.",
      },
    ],
    faqs: [
      {
        q: "What's the minimum order for custom apparel?",
        a: "It depends on the method and the garment. Small runs are fine, and DTF works well for very small orders. Ask and I'll tell you the minimum for your item before you commit.",
      },
      {
        q: "Can I mix garments and methods in one order?",
        a: "Yes. Embroidered polos for the office, screen printed tees for the crew and hats for everyone can go in one order. Send me a list of who needs what.",
      },
      {
        q: "Can I mix sizes?",
        a: "Yes. Send a size breakdown with your order. For a school or a big team, a team store lets everyone order their own size.",
      },
      {
        q: "What logo file do you need?",
        a: "Send whatever you have. A vector file (AI, EPS or PDF) is best, but a clear PNG works to start. Your logo gets set up for the method you pick, and you approve a proof first.",
      },
      {
        q: "Do you have a shop I can visit?",
        a: "No walk-in shop. I come to you, or the whole job runs by phone and email. I serve Columbus, Dublin, Westerville, Hilliard, Grove City and the rest of Central Ohio.",
      },
    ],
    related: ["promotional-products", "full-rebrand-kits", "decals-and-stickers", "vehicle-lettering"],
    industries: ["roofing", "construction", "lawn-care-landscaping", "dental", "food-and-beverage"],
  },
  {
    slug: "screen-printing",
    group: "gear",
    navLabel: "Screen printing",
    blurb: "Screen printed tees and hoodies. The lowest cost per shirt on bigger runs.",
    metaTitle: "Custom Screen Printing in Columbus, Ohio",
    metaDescription:
      "Custom screen printing in Columbus, Ohio for crew shirts, events, schools and giveaways. Bold prints on tees and hoodies. Screen printed tees from $14 each.",
    eyebrow: "Screen printing",
    h1: "Custom Screen Printing in Columbus, Ohio",
    tagline: "Bold prints that cost less the more you order.",
    lede: "Screen printed T-shirts, hoodies and tanks for Columbus businesses, schools, teams and events. The best value per shirt on bigger runs, and a print that lasts.",
    hero: {
      src: "/assets/apparel-tshirts-performance.jpg",
      alt: "Row of T-shirts on hangers in blue, green, yellow, orange, red and white",
    },
    prices: ["screen-printed-tees"],
    options: [
      {
        name: "Crew and work tees",
        detail: "Your logo on the chest and a big design on the back. The everyday shirt for field crews.",
      },
      {
        name: "Event and fundraiser shirts",
        detail: "5Ks, festivals, church events and fundraisers, one design across every size.",
      },
      {
        name: "School and team shirts",
        detail: "Spirit wear, team shirts and booster club gear in school colors.",
      },
      {
        name: "Hoodies and sweatshirts",
        detail: "A bold print on hoodies and crewnecks for winter and fan gear.",
      },
      {
        name: "Tanks and long sleeves",
        detail: "Summer tanks and long sleeve tees from the same screens as your T-shirts.",
      },
      {
        name: "Front, back and sleeve prints",
        detail: "Add a back print, a sleeve hit or a second location to make the shirt work harder.",
      },
    ],
    uses: [
      "Construction, roofing and lawn care crews",
      "Company events and family days",
      "5Ks, festivals and fundraisers",
      "Schools, booster clubs and youth teams",
      "Restaurants and breweries",
      "Giveaways and merch",
    ],
    sections: [
      {
        heading: "How screen printing works",
        body: "Each color in your design gets its own screen. Ink gets pushed through the screen onto the shirt, one color at a time, then cured with heat so it holds up in the wash.\n\nBecause every color needs its own screen, setup is the same whether you print a few shirts or a few hundred. That's why the price per shirt drops as the order grows, and why screen printing is the go-to for bigger runs.\n\nIt also keeps your colors bright and solid. A one or two color logo is the sweet spot. Full color photos and lots of gradients are better done with DTF.",
      },
      {
        heading: "Getting the most out of a screen printed shirt",
        body: "Fewer colors cost less. If your logo has six colors, a one or two color version often looks just as good on a shirt and saves money on every order.\n\nShirt color matters too. A light design on a dark shirt needs a white base layer under the ink, which adds a step. I'll flag that on your proof so there are no surprises.\n\nPut your phone number or website on crew shirts. A shirt on a job site is a small billboard, and people should be able to find you from it.",
        image: {
          src: "/assets/construction-team-apparel.jpg",
          alt: "Five workers in hard hats and orange hi-vis vests standing together in a warehouse",
        },
      },
      {
        heading: "Screen printing near me in Columbus",
        body: "There's no walk-in shop. Send me your design, the shirt you want, the colors and a size breakdown, and I'll send back a quote and a proof. Nothing prints until you approve it.\n\nPrinting runs through a trusted Central Ohio partner, and you deal with me from start to finish. Reorders are easy because your screens and art are already set up. I serve Columbus, Dublin, Westerville, Hilliard, Grove City and the rest of Central Ohio.",
      },
    ],
    faqs: [
      {
        q: "How much do screen printed shirts cost?",
        a: "Screen printed tees start at $14 each. The shirt, the number of colors, the number of print locations and the quantity set the final price. The price per shirt drops as quantity goes up.",
      },
      {
        q: "What's the minimum for screen printing?",
        a: "Screen printing has a minimum because of the setup for each color. Ask and I'll tell you the minimum for your job. For very small runs, DTF is often the better fit.",
      },
      {
        q: "Does the number of colors change the price?",
        a: "Yes. Each color needs its own screen, so more colors cost more. A one or two color version of your logo usually saves money.",
      },
      {
        q: "Will the print crack or fade?",
        a: "A properly cured screen print holds up to a lot of washing. Wash inside out in cold water and skip high heat in the dryer to keep it looking new longer.",
      },
      {
        q: "Can you print on hoodies and dark shirts?",
        a: "Yes. Dark shirts get a white base layer under the ink so the colors stay bright. You see it on the proof first.",
      },
    ],
    related: ["custom-t-shirts", "custom-hoodies-and-pullovers", "dtf-printing", "team-stores"],
    industries: ["construction", "roofing", "lawn-care-landscaping", "food-and-beverage"],
  },
  {
    slug: "embroidery",
    group: "gear",
    navLabel: "Embroidery",
    blurb: "Embroidered polos, hats and jackets. Stitched logos that look sharp for years.",
    metaTitle: "Custom Embroidery in Columbus, Ohio",
    metaDescription:
      "Custom embroidery in Columbus, Ohio for polos, hats, jackets and workwear. Stitched logos that hold up to years of washing. Embroidered polos from $29 each.",
    eyebrow: "Embroidery",
    h1: "Custom Embroidery in Columbus, Ohio",
    tagline: "Stitched logos for the people customers see.",
    lede: "Custom embroidery for Columbus businesses: polos, hats, jackets and work shirts with your logo stitched on. It looks professional, it doesn't crack or peel, and it lasts.",
    hero: {
      src: "/assets/apparel-polos-golf.jpg",
      alt: "Folded red, green and navy polo shirts with small chest logos on a table, with a navy polo standing behind them",
    },
    prices: ["embroidered-polos"],
    options: [
      {
        name: "Embroidered polos",
        detail: "A stitched left chest logo for the office, the showroom and customer visits.",
      },
      {
        name: "Hats and beanies",
        detail: "Structured caps, trucker hats and knit beanies with a stitched logo or a sewn-on patch.",
      },
      {
        name: "Jackets and vests",
        detail: "Soft shells, work jackets, fleece and vests with your logo on the chest.",
      },
      {
        name: "Work and button-up shirts",
        detail: "Work shirts, button-ups and scrubs with your logo, so customers know who's at the door.",
      },
      {
        name: "Quarter-zips and pullovers",
        detail: "A clean stitched logo on quarter-zips and crewnecks for sales teams and office staff.",
      },
      {
        name: "Personalized names",
        detail: "Each person's name stitched under the logo. A good fit for service techs and front desk staff.",
      },
      {
        name: "Sleeve and back logos",
        detail: "Add a second logo on the sleeve or a name across the back.",
      },
    ],
    uses: [
      "HVAC, plumbing and electrical techs",
      "Dental and medical offices",
      "Real estate teams",
      "Sales teams and front desks",
      "Restaurants and hospitality",
      "Corporate gifts and awards",
    ],
    sections: [
      {
        heading: "Why embroidery for work clothes",
        body: "Embroidery stitches your logo into the fabric with thread. It has texture and depth that ink doesn't, which is why polos, hats and jackets almost always get stitched.\n\nIt also lasts. A stitched logo doesn't crack, peel or fade the way a cheap print can. Your techs can wash their shirts every week and the logo still looks right.\n\nEmbroidery fits best on a left chest, a hat front or a sleeve. A huge design across the back of a T-shirt is a job for screen printing or DTF.",
      },
      {
        heading: "Getting your logo ready to stitch",
        body: "Before anything gets stitched, your logo is set up for embroidery. The machine follows a stitch file, not a picture, so the logo gets rebuilt for thread.\n\nTiny text and thin lines don't always stitch clean, especially on a hat. I'll flag anything that needs a simpler version and show you a proof. You approve it before the first garment gets sewn.\n\nOnce your logo is set up, reorders are easy. New hire? Order a few more polos and they match the rest of the crew.",
        image: {
          src: "/assets/custom-hats-headwear.jpg",
          alt: "Black, navy and gray ballcaps and black and red knit beanies, each with a stitched or patch logo",
        },
      },
      {
        heading: "Embroidery near me in Columbus",
        body: "There's no walk-in shop. I come to you, or the whole job runs by phone and email. Send your logo and tell me the items, sizes and colors, and I'll send a quote and a proof.\n\nStitching runs through a trusted Central Ohio embroidery partner, and you deal with one person from start to finish. Small runs are fine. Ask and I'll tell you the minimum for your item. I serve Columbus, Dublin, Westerville, Hilliard, Grove City and the rest of Central Ohio.",
      },
    ],
    faqs: [
      {
        q: "How much do embroidered polos cost?",
        a: "Embroidered polos with a left chest logo start at $29 each. The garment, the quantity, the size of the logo and any extra locations set the final price.",
      },
      {
        q: "What's the minimum order for embroidery?",
        a: "Small runs are fine. Ask and I'll tell you the minimum for your item. Reorders are easier because your logo is already set up.",
      },
      {
        q: "Can you embroider my logo on hats?",
        a: "Yes. Caps, trucker hats and beanies, stitched directly or with a sewn-on patch. A very detailed logo sometimes needs a simpler version to fit a hat, and you see a proof first.",
      },
      {
        q: "Can each shirt have a different name?",
        a: "Yes. Names under the logo are common for service techs and front desk staff. Send a list of names with the sizes.",
      },
      {
        q: "What logo file do you need for embroidery?",
        a: "A vector file (AI, EPS or PDF) is best, but a clear PNG works to start. Your logo gets set up for stitching and you approve the proof before anything is made.",
      },
    ],
    related: ["custom-polos", "custom-hats", "custom-jackets", "screen-printing"],
    industries: ["dental", "medical-specialty", "real-estate", "auto-dealers", "food-and-beverage"],
  },
  {
    slug: "dtf-printing",
    group: "gear",
    navLabel: "DTF printing",
    blurb: "Full color DTF prints for small runs, photos and a different name on every shirt.",
    metaTitle: "DTF Printing for Shirts and Apparel in Columbus",
    metaDescription:
      "DTF printing in Columbus, Ohio: full color designs, photos and names on tees, hoodies and hats, with no setup per color. A good fit for small apparel runs.",
    eyebrow: "DTF printing",
    h1: "DTF Printing for Shirts and Apparel in Columbus",
    tagline: "Full color, fine detail, small runs.",
    lede: "DTF (direct to film) prints your design on a film, then heat-presses it onto the garment. Full color, no setup per color, and it works on cotton, polyester and blends.",
    hero: {
      src: "/assets/printing-hoodies.jpg",
      alt: "Black hoodies hanging on wooden hangers against a dark background",
    },
    options: [
      {
        name: "Full color logos and art",
        detail: "Gradients, photos and lots of colors print in one pass, with no extra cost per color.",
      },
      {
        name: "Small runs",
        detail: "A good fit when you need a handful of shirts, not a few hundred.",
      },
      {
        name: "Names and numbers",
        detail: "A different name or number on every shirt, for teams, staff and families.",
      },
      {
        name: "Polyester and performance wear",
        detail: "Works on polyester, blends and performance shirts as well as cotton.",
      },
      {
        name: "Hoodies, hats and bags",
        detail: "Transfers go on hoodies, caps, totes and other items that are hard to screen print.",
      },
      {
        name: "Mixed designs in one order",
        detail: "Several designs or versions in one order without paying setup for each one.",
      },
    ],
    uses: [
      "Small business crews of a few people",
      "Youth teams and leagues with names and numbers",
      "Family reunions and events",
      "Full color logos and photos",
      "Test runs before a bigger order",
      "Performance and polyester shirts",
    ],
    sections: [
      {
        heading: "How DTF printing works",
        body: "Your design gets printed onto a special film with a layer of adhesive powder. Then the film is heat-pressed onto the garment and peeled away, leaving the print on the fabric.\n\nThere are no screens, so there's no setup for each color. A six color logo costs the same to print as a one color logo. That makes DTF the easy pick for small orders and full color art.\n\nThe print sits on top of the fabric with a smooth, flexible feel. It stretches with the shirt and holds up in the wash when you follow the care steps.",
      },
      {
        heading: "DTF, screen printing or embroidery?",
        body: "Pick DTF for small runs, full color art, photos, names and numbers, and polyester shirts.\n\nPick screen printing for bigger runs of one design in a few colors. The price per shirt drops faster as the order grows.\n\nPick embroidery for polos, hats and jackets your team wears in front of customers. Send me the design and the quantity, and I'll tell you which method fits.",
      },
    ],
    faqs: [
      {
        q: "What is DTF printing?",
        a: "DTF stands for direct to film. The design is printed on a film, then heat-pressed onto the garment. It prints full color with no setup per color.",
      },
      {
        q: "Is DTF good for small orders?",
        a: "Yes. With no screens to set up, DTF is often the best value for small runs and one-off designs.",
      },
      {
        q: "How long does a DTF print last?",
        a: "A good DTF print holds up to regular washing. Wash inside out in cold water and skip high heat in the dryer.",
      },
      {
        q: "Can DTF print on polyester?",
        a: "Yes. DTF works on cotton, polyester and blends, including performance shirts.",
      },
      {
        q: "How much does DTF printing cost?",
        a: "It depends on the garment, the print size and the quantity. Send me the design and the list of shirts and I'll put a quote together.",
      },
    ],
    related: ["screen-printing", "custom-t-shirts", "team-stores", "embroidery"],
  },
  {
    slug: "custom-t-shirts",
    group: "gear",
    navLabel: "T-shirts and work tees",
    blurb: "Custom T-shirts and heavyweight work tees for crews, events and teams.",
    metaTitle: "Custom T-Shirts and Work Shirts in Columbus, Ohio",
    metaDescription:
      "Custom T-shirts in Columbus, Ohio: crew shirts, heavyweight work tees and event shirts, screen printed or DTF printed. Screen printed tees from $14 each.",
    eyebrow: "T-shirts",
    h1: "Custom T-Shirts and Work Tees in Columbus, Ohio",
    tagline: "Shirts your crew will actually wear.",
    lede: "Custom T-shirts for Columbus crews, businesses, schools and events. Soft everyday tees, heavyweight work tees and pocket tees, screen printed or DTF printed with your logo.",
    hero: {
      src: "/assets/apparel-tshirts-performance.jpg",
      alt: "Row of T-shirts on hangers in blue, green, yellow, orange, red and white",
    },
    prices: ["screen-printed-tees"],
    styles: T_SHIRT_STYLES,
    options: [
      {
        name: "Everyday cotton tees",
        detail: "Classic crew necks for events, giveaways and staff shirts. The lowest cost per shirt.",
      },
      {
        name: "Soft blend tees",
        detail: "Lighter, softer shirts people like to wear on the weekend too.",
      },
      {
        name: "Heavyweight work tees",
        detail: "Thicker cotton that holds up on job sites, with pocket options.",
      },
      {
        name: "Performance tees",
        detail: "Moisture-wicking shirts for hot days outside, sports and 5Ks.",
      },
      {
        name: "Long sleeve tees",
        detail: "Sun protection in summer and a layer in spring and fall.",
      },
      {
        name: "Hi-vis tees",
        detail: "Safety green and orange shirts for crews near traffic.",
      },
    ],
    uses: [
      "Roofing, construction and lawn care crews",
      "Company events and family days",
      "Schools, teams and booster clubs",
      "5Ks, festivals and fundraisers",
      "Restaurants and breweries",
      "Merch and giveaways",
    ],
    sections: [
      {
        heading: "Picking the right shirt for the job",
        body: "Start with how the shirt gets worn. A crew working outside all summer needs something different from a giveaway at a festival.\n\nEveryday cotton tees cost the least and work for events and giveaways. Soft blends feel better and get worn more often, so your logo gets seen more. Heavyweight work tees hold up to job sites and a lot of washing. Performance tees keep crews cooler on hot days.\n\nTell me the job and the budget, and I'll suggest two or three shirts that fit.",
      },
      {
        heading: "Work shirts that do some advertising",
        body: "A crew in matching shirts looks like a real company. Customers notice before anyone says a word.\n\nPut your logo on the chest and your phone number or website on the back. Neighbors watching your crew work can find you without looking you up. Order a mix of short and long sleeves so the crew stays covered all year.",
        image: {
          src: "/assets/construction-team-apparel.jpg",
          alt: "Five workers in hard hats and orange hi-vis vests standing together in a warehouse",
        },
      },
    ],
    faqs: [
      {
        q: "How much do custom T-shirts cost?",
        a: "Screen printed tees start at $14 each. The shirt, the number of colors, the print locations and the quantity set the final price.",
      },
      {
        q: "What's the difference between screen printing and DTF on a T-shirt?",
        a: "Screen printing costs less per shirt on bigger runs of one design. DTF works better for small runs, full color art and different names on each shirt.",
      },
      {
        q: "Can I order different sizes and colors?",
        a: "Yes. Send a size breakdown. Mixing shirt colors is possible too, and I'll tell you if a design needs adjusting for a darker shirt.",
      },
      {
        q: "Do you have work tees with pockets?",
        a: "Yes. Heavyweight pocket tees are a common pick for crews. The logo can go on the pocket or above it.",
      },
    ],
    related: ["screen-printing", "dtf-printing", "custom-hoodies-and-pullovers", "custom-hats"],
    industries: ["construction", "roofing", "lawn-care-landscaping", "fleet-and-logistics"],
  },
  {
    slug: "custom-polos",
    group: "gear",
    navLabel: "Polos",
    blurb: "Embroidered polos for offices, techs and customer-facing staff.",
    metaTitle: "Custom Embroidered Polos in Columbus, Ohio",
    metaDescription:
      "Custom embroidered polo shirts in Columbus, Ohio for offices, service techs and sales teams. Snag-resistant, moisture-wicking and cotton options. From $29 each.",
    eyebrow: "Polos",
    h1: "Custom Embroidered Polos in Columbus, Ohio",
    tagline: "The work shirt that looks the part.",
    lede: "Embroidered polo shirts for Columbus businesses. Your logo stitched on the chest, in a fabric that fits the job: snag-resistant for techs, moisture-wicking for summer, cotton pique for the office.",
    hero: {
      src: "/assets/apparel-polos-golf.jpg",
      alt: "Folded red, green and navy polo shirts with small chest logos on a table, with a navy polo standing behind them",
    },
    prices: ["embroidered-polos"],
    styles: POLO_STYLES,
    options: [
      {
        name: "Snag-resistant polos",
        detail: "Tough fabric for techs who climb through attics and crawl spaces.",
      },
      {
        name: "Moisture-wicking polos",
        detail: "Performance polos that stay cooler and dry faster in summer.",
      },
      {
        name: "Cotton pique polos",
        detail: "The classic soft polo for the office and front desk.",
      },
      {
        name: "Women's cut polos",
        detail: "Matching styles in a women's fit, so the whole team looks the same.",
      },
      {
        name: "Long sleeve polos",
        detail: "Same look for cooler months.",
      },
      {
        name: "Names and sleeve logos",
        detail: "Each person's name under the logo, or a second logo on the sleeve.",
      },
    ],
    uses: [
      "HVAC, plumbing and electrical techs",
      "Dental and medical offices",
      "Real estate and insurance teams",
      "Auto dealers and service departments",
      "Sales teams and trade shows",
      "Golf outings and corporate gifts",
    ],
    sections: [
      {
        heading: "Which polo fits your team",
        body: "Techs who work in attics, basements and crawl spaces need a snag-resistant polo. It survives the job and still looks neat at the customer's door.\n\nCrews outside in summer do better in a moisture-wicking polo. Office and front desk staff usually like a soft cotton pique.\n\nMost polos come in men's and women's cuts and a wide run of sizes, so the whole team can match. Tell me who wears them and I'll suggest a few that fit.",
      },
      {
        heading: "Stitched logos that last",
        body: "Polos almost always get embroidered. A stitched logo looks more professional than ink on a collared shirt, and it holds up to weekly washing.\n\nYour logo gets set up for stitching once, and you approve a proof first. After that, reorders for new hires are quick and match the rest of the team.",
      },
    ],
    faqs: [
      {
        q: "How much do embroidered polos cost?",
        a: "Embroidered polos with a left chest logo start at $29 each. The polo, the quantity and any extra logos or names set the final price.",
      },
      {
        q: "Can I get matching men's and women's polos?",
        a: "Yes. Most popular polos come in men's and women's cuts in the same colors.",
      },
      {
        q: "Can polos be screen printed instead?",
        a: "They can, but embroidery looks better on a collared shirt and lasts longer. Most businesses choose embroidery for polos.",
      },
      {
        q: "Can you add each person's name?",
        a: "Yes. Send a list of names with the sizes and each one gets stitched under the logo.",
      },
    ],
    related: ["embroidery", "custom-hats", "custom-jackets", "custom-t-shirts"],
    industries: ["dental", "medical-specialty", "real-estate", "auto-dealers"],
  },
  {
    slug: "custom-jackets",
    group: "gear",
    navLabel: "Jackets",
    blurb: "Soft shells, work jackets, fleece and vests with your logo.",
    metaTitle: "Custom Jackets with Your Logo in Columbus, Ohio",
    metaDescription:
      "Custom jackets in Columbus, Ohio: soft shells, work jackets, fleece, puffers and vests with an embroidered logo or a big back print. Built for Ohio winters.",
    eyebrow: "Jackets",
    h1: "Custom Jackets and Outerwear in Columbus, Ohio",
    tagline: "Keep the logo on through winter.",
    lede: "Custom jackets for Columbus crews and teams. Soft shells, work jackets, fleece, puffers and vests with your logo stitched on the chest or printed across the back.",
    hero: {
      src: "/assets/apparel-jackets-outerwear.jpg",
      alt: "Navy and red jackets with chest logos hanging on a rack in a warehouse",
    },
    styles: JACKET_STYLES,
    options: [
      {
        name: "Soft shell jackets",
        detail: "Wind and water resistant, light enough for spring and fall. A favorite for office and sales staff.",
      },
      {
        name: "Work jackets",
        detail: "Heavy canvas and insulated jackets for crews outside in the cold.",
      },
      {
        name: "Fleece jackets",
        detail: "Warm, light and easy to layer.",
      },
      {
        name: "Puffer jackets",
        detail: "Insulated warmth for the coldest weeks.",
      },
      {
        name: "Vests",
        detail: "Puffer, fleece and soft shell vests over a polo or a hoodie.",
      },
      {
        name: "Rain jackets and windbreakers",
        detail: "Light shells for wet days on the job or at the field.",
      },
    ],
    uses: [
      "Roofing, construction and lawn care crews",
      "Sales teams and office staff",
      "Coaches and team staff",
      "Employee gifts and awards",
      "Delivery and fleet drivers",
      "Real estate teams",
    ],
    sections: [
      {
        heading: "Picking a jacket for an Ohio winter",
        body: "Match the jacket to the work. Crews outside all day need an insulated work jacket. Sales teams and office staff get more use out of a soft shell or fleece they can wear to a meeting.\n\nVests are the easy middle ground. They layer over a polo or a hoodie and keep the logo visible.\n\nJackets cost more per piece than shirts, so pick one style for the whole team and order it in a range of sizes.",
      },
      {
        heading: "Embroidered or printed?",
        body: "Most jackets get an embroidered logo on the chest. It looks sharp and holds up season after season.\n\nFor a big design or your company name across the back, a print works better. Some jackets have fabrics that are hard to print, so I'll tell you which decoration fits each style and show you a proof first.",
      },
    ],
    faqs: [
      {
        q: "Can you embroider on any jacket?",
        a: "Most jackets, yes. Some waterproof and puffy fabrics need special handling, so I'll confirm what works for the style you pick.",
      },
      {
        q: "Can you put a large logo on the back?",
        a: "Yes. A large back design is usually printed rather than stitched. You see a proof first.",
      },
      {
        q: "How much do custom jackets cost?",
        a: "It depends on the jacket, the decoration and the quantity. Send me the style and the sizes and I'll put a quote together.",
      },
      {
        q: "When should I order jackets for winter?",
        a: "Early. Jackets take longer to source in popular sizes once the cold hits. Order in the fall so they're ready when you need them.",
      },
    ],
    related: ["embroidery", "custom-hoodies-and-pullovers", "custom-hats", "custom-polos"],
    industries: ["construction", "roofing", "lawn-care-landscaping", "real-estate"],
  },
  {
    slug: "custom-hats",
    group: "gear",
    navLabel: "Hats and beanies",
    blurb: "Ballcaps, trucker hats and winter beanies with a stitched logo or patch.",
    metaTitle: "Custom Hats and Beanies in Columbus, Ohio",
    metaDescription:
      "Custom hats in Columbus, Ohio: embroidered ballcaps, trucker hats, patch hats and winter beanies with your logo. For crews, teams, schools and giveaways.",
    eyebrow: "Hats",
    h1: "Custom Hats and Beanies in Columbus, Ohio",
    tagline: "The item everybody keeps.",
    lede: "Custom ballcaps, trucker hats and winter beanies with your logo stitched on or sewn on as a patch. For Columbus crews, teams, schools and giveaways.",
    hero: {
      src: "/assets/custom-hats-headwear.jpg",
      alt: "Black, navy and gray ballcaps and black and red knit beanies, each with a stitched or patch logo",
    },
    styles: HAT_STYLES,
    options: [
      {
        name: "Structured ballcaps",
        detail: "Classic six panel caps that hold their shape and show off a front logo.",
      },
      {
        name: "Trucker hats",
        detail: "Mesh back caps that breathe on hot days. A crew favorite.",
      },
      {
        name: "Unstructured dad hats",
        detail: "Soft, relaxed caps with a low profile.",
      },
      {
        name: "Winter beanies",
        detail: "Knit beanies, cuffed or with a pom, for cold mornings on the job.",
      },
      {
        name: "Patch hats",
        detail: "A woven, embroidered or leather patch sewn on for a rugged look.",
      },
      {
        name: "Performance caps",
        detail: "Lightweight caps that wick sweat for summer crews and outdoor events.",
      },
    ],
    uses: [
      "Construction, roofing and lawn care crews",
      "Schools and sports teams",
      "Breweries, bars and restaurants",
      "Trade show and event giveaways",
      "Golf outings",
      "Customer and referral gifts",
    ],
    sections: [
      {
        heading: "Caps for summer, beanies for winter",
        body: "Hats are the item people keep. A good cap gets worn for years, on the job and off it.\n\nIn summer, crews like trucker hats and performance caps that breathe. In winter, a knit beanie with your logo keeps the crew warm and branded. Many businesses order both and hand them out by season.\n\nStructured caps hold their shape and show a front logo best. Unstructured caps look more relaxed. Tell me who wears them and I'll suggest a few styles.",
      },
      {
        heading: "Stitched logo or patch?",
        body: "A logo stitched straight onto the front of a cap is the classic look. It works best when the logo is simple, because a hat front is small and curved.\n\nA patch sewn onto the front gives a rugged look and handles more detail. Woven patches hold fine detail, embroidered patches have texture, and leather patches look sharp on trucker hats. You see a proof of your logo on the hat before anything gets made.",
      },
    ],
    faqs: [
      {
        q: "Can you embroider my logo on a hat?",
        a: "Yes. A very detailed logo sometimes needs a simpler version to fit a curved hat front, and you approve a proof first.",
      },
      {
        q: "What's the difference between structured and unstructured hats?",
        a: "Structured caps have a stiff front that holds its shape. Unstructured caps are soft and sit lower on the head.",
      },
      {
        q: "Do you make custom beanies?",
        a: "Yes. Cuffed beanies, pom beanies and fleece-lined knits, with a stitched logo or a patch.",
      },
      {
        q: "How much do custom hats cost?",
        a: "It depends on the hat, the decoration and the quantity. Send me your logo and the style and I'll put a quote together.",
      },
    ],
    related: ["embroidery", "custom-t-shirts", "custom-jackets", "promotional-products"],
    industries: ["construction", "roofing", "lawn-care-landscaping", "food-and-beverage"],
  },
  {
    slug: "custom-hoodies-and-pullovers",
    group: "gear",
    navLabel: "Hoodies and pullovers",
    blurb: "Hoodies, crewnecks and quarter-zips, printed or embroidered.",
    metaTitle: "Custom Hoodies and Pullovers in Columbus, Ohio",
    metaDescription:
      "Custom hoodies, crewnecks and quarter-zip pullovers in Columbus, Ohio, screen printed, embroidered or DTF printed. For crews, teams, schools and staff.",
    eyebrow: "Hoodies and pullovers",
    h1: "Custom Hoodies and Pullovers in Columbus, Ohio",
    tagline: "The shirt people grab when it gets cold.",
    lede: "Custom hoodies, crewneck sweatshirts and quarter-zip pullovers for Columbus crews, teams, schools and offices. Printed big on the back or stitched small on the chest.",
    hero: {
      src: "/assets/printing-hoodies.jpg",
      alt: "Black hoodies hanging on wooden hangers against a dark background",
    },
    styles: PULLOVER_STYLES,
    options: [
      {
        name: "Pullover hoodies",
        detail: "The classic hooded sweatshirt with a front pocket.",
      },
      {
        name: "Zip hoodies",
        detail: "Full zip hoodies that layer over a work shirt.",
      },
      {
        name: "Crewneck sweatshirts",
        detail: "A clean, simple sweatshirt for teams, schools and staff.",
      },
      {
        name: "Quarter-zip pullovers",
        detail: "A sharper layer for sales teams, offices and coaches, usually embroidered.",
      },
      {
        name: "Heavyweight and garment dyed",
        detail: "Thicker, softer sweatshirts people wear long after the event.",
      },
      {
        name: "Performance pullovers",
        detail: "Light, moisture-wicking layers for outdoor work and sports.",
      },
    ],
    uses: [
      "Crews working through the cold months",
      "Schools, booster clubs and spirit wear",
      "Sports teams and leagues",
      "Office staff and sales teams",
      "Company gifts and swag",
      "Merch for breweries and restaurants",
    ],
    sections: [
      {
        heading: "Hoodie, crewneck or quarter-zip?",
        body: "Hoodies are the go-to for crews, schools and fans. They take a big print on the back and a logo on the front.\n\nCrewnecks are cleaner and work well for teams and staff. Quarter-zips look sharper and fit offices, sales teams and coaches. They almost always get an embroidered chest logo.\n\nHeavier, softer sweatshirts cost a bit more and get worn a lot longer. If it's a gift, it's worth it.",
      },
      {
        heading: "Printed or embroidered?",
        body: "For a big design or a school logo across the front or back, screen printing or DTF is the pick. For a small chest logo on a quarter-zip or a crewneck, embroidery looks better.\n\nMany orders use both: a stitched chest logo on the front and a printed design on the back. Send me what you have in mind and you'll see a proof first.",
      },
    ],
    faqs: [
      {
        q: "Can you print on hoodies?",
        a: "Yes. Hoodies take screen printing, DTF and embroidery. Big designs get printed. Small chest logos often get stitched.",
      },
      {
        q: "What's a quarter-zip pullover?",
        a: "A pullover with a short zipper at the neck. It looks sharper than a hoodie and is popular with sales teams, offices and coaches.",
      },
      {
        q: "How much do custom hoodies cost?",
        a: "It depends on the hoodie, the decoration, the print locations and the quantity. Send me the style and sizes and I'll put a quote together.",
      },
      {
        q: "Can students and parents order their own sizes?",
        a: "Yes. A team or spirit store lets each person order and pay for their own hoodie.",
      },
    ],
    related: ["screen-printing", "embroidery", "custom-jackets", "team-stores"],
    industries: ["construction", "roofing", "lawn-care-landscaping"],
  },
  {
    slug: "team-stores",
    group: "gear",
    navLabel: "Team and spirit stores",
    blurb: "Online stores for schools, teams and companies. Everyone orders their own sizes.",
    metaTitle: "Team Stores and School Spirit Stores in Columbus",
    metaDescription:
      "Online team stores and school spirit stores for Columbus schools, teams and companies. Everyone picks their own items and sizes. Apparel, decals and more.",
    eyebrow: "Team and spirit stores",
    h1: "Team Stores and School Spirit Stores in Columbus",
    tagline: "No more collecting sizes on a clipboard.",
    lede: "An online store for your school, team or company. Each person picks their own items and sizes and pays when they order. Apparel, plus spirit items like car decals and magnets.",
    hero: {
      src: "/assets/printing-teamwear.jpg",
      alt: "Black, yellow and white polo shirts and a white cap, each with the same small logo",
    },
    options: [
      {
        name: "School spirit stores",
        detail: "Spirit wear in school colors for students, parents and staff.",
      },
      {
        name: "Team and league stores",
        detail: "Practice shirts, hoodies and fan gear for a team or a whole league.",
      },
      {
        name: "Booster club fundraisers",
        detail: "Spirit wear that raises money for the program.",
      },
      {
        name: "Company stores",
        detail: "A store for your staff to order uniforms and company gear on their own.",
      },
      {
        name: "Spirit decals and magnets",
        detail: "Car decals, window stickers and magnets sold right next to the apparel.",
      },
      {
        name: "Yard signs and banners",
        detail: "Senior night signs, team banners and player yard signs to round out the store.",
      },
    ],
    uses: [
      "Elementary, middle and high schools",
      "Youth sports teams and leagues",
      "Booster clubs and PTOs",
      "Churches and community groups",
      "Companies with remote or growing staff",
      "Reunions and family events",
    ],
    sections: [
      {
        heading: "How a team store works",
        body: "You tell me what to sell: the items, the colors and the designs. The store gets built with your logo and opens for a set window, usually around a season or an event.\n\nParents, players or staff shop online, pick their sizes and pay when they order. Nobody collects cash or chases sizes. When the store closes, the orders get made in one batch.\n\nYou don't buy extra stock up front or end up with a box of the wrong sizes.",
      },
      {
        heading: "More than shirts",
        body: "Spirit stores can carry more than apparel. Car decals, window stickers, magnets, yard signs and banners sell well next to the hoodies.\n\nI already make those items for Central Ohio businesses, so they match the apparel with the same logo and colors.",
        image: {
          src: "/assets/gallery/sports-yard-sign-football-2026.jpg",
          alt: "Sample football player yard sign with a photo, name, jersey number and team name, standing in a front yard",
        },
      },
      {
        heading: "Company stores for growing teams",
        body: "A company store gives your staff one place to order uniforms and company gear. New hires order their own sizes. Managers stop keeping spreadsheets.\n\nYou pick the approved items and colors so everything stays on brand. Tell me how your team orders today and I'll show you how a store would work for you.",
      },
    ],
    faqs: [
      {
        q: "Does a team store cost the school anything?",
        a: "Tell me your goals and I'll walk you through the options and any costs before anything gets built.",
      },
      {
        q: "Can a team store raise money?",
        a: "Yes. Many booster clubs and schools use a spirit store as a fundraiser. Ask and I'll explain how it can be set up.",
      },
      {
        q: "How do people get their orders?",
        a: "Orders get made after the store closes. They can be delivered together to the school or team, or shipped, depending on how the store is set up.",
      },
      {
        q: "Can the store sell decals and yard signs?",
        a: "Yes. Car decals, window stickers, magnets, yard signs and banners can sell alongside the apparel.",
      },
    ],
    related: ["custom-hoodies-and-pullovers", "decals-and-stickers", "yard-signs-and-signage", "screen-printing"],
  },
];
