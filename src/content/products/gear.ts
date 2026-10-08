import type { ProductPage } from "../types";

// Apparel, promo products, packaging and rebrand kits. Order here is menu order.
export const GEAR_PAGES: ProductPage[] = [
  {
    slug: "embroidered-apparel",
    group: "gear",
    navLabel: "Embroidered apparel",
    blurb: "Embroidered polos, hats and jackets, screen printed tees and hi-vis for your crew.",
    metaTitle: "Custom Embroidery and Apparel in Columbus",
    metaDescription:
      "Custom embroidery in Columbus, Ohio for polos, hats, jackets and company hoodies, plus screen printed tees and hi-vis. Embroidered polos from $29 each.",
    eyebrow: "Apparel",
    h1: "Embroidered shirts, hats and jackets for your crew.",
    lede: "Custom embroidery for Columbus businesses: polos, hats, jackets and company hoodies with your logo stitched on. Screen printed tees and hi-vis safety wear too, so the whole crew matches.",
    hero: {
      src: "/assets/custom-apparel-polos-hoodies.jpg",
      alt: "Red and black polos, a navy T-shirt and a black hoodie, each with the Buckeye Biz Hub Ohio logo",
    },
    prices: ["embroidered-polos", "screen-printed-tees"],
    options: [
      {
        name: "Embroidered polos",
        detail: "A stitched left chest logo for the office, the showroom and customer visits. The standard work uniform for a reason.",
      },
      {
        name: "Embroidered hats and beanies",
        detail: "Structured caps, trucker hats and knit beanies with a stitched logo or a sewn-on patch.",
      },
      {
        name: "Jackets and company hoodies",
        detail: "Work jackets, soft shells, fleece and hoodies with your logo on the chest, and your name across the back if you want it.",
      },
      {
        name: "Screen printed T-shirts",
        detail: "The lowest cost per shirt for crews, events and giveaways. Big, bold designs on the front or back.",
      },
      {
        name: "Hi-vis safety wear",
        detail: "Safety vests and hi-vis shirts with your logo for road crews, job sites and anyone working near traffic.",
      },
      {
        name: "Work shirts and uniforms",
        detail: "Button-ups, work shirts and scrubs with your logo, so customers know who's at the door.",
      },
      {
        name: "Personalized names",
        detail: "Each person's name stitched under the logo. A good fit for service techs and front desk staff.",
      },
    ],
    uses: [
      "Roofing, HVAC and construction crews",
      "Lawn care and landscaping teams",
      "Dental and medical offices",
      "Restaurants, breweries and coffee shops",
      "Real estate teams",
      "Company events and team gifts",
      "New hire welcome kits",
    ],
    sections: [
      {
        heading: "Embroidery or screen printing: which one should you pick?",
        body: "Embroidery stitches your logo into the fabric with thread. It looks sharp on polos, hats and jackets, and it doesn't crack or peel. It's the right call for anything your team wears in front of customers.\n\nScreen printing puts ink on the fabric. It costs less per shirt on bigger runs and handles a big design on the back of a tee. It's the right call for crew shirts, events and giveaways.\n\nMost businesses use both. Embroidered polos and hats for the people customers see, screen printed tees for the field and the summer cookout. Embroidered polos start at $29 each and screen printed tees at $14 each. Send me your logo and I'll tell you which method fits each item.",
      },
      {
        heading: "Branded company hoodies, polos and hi-vis for the whole crew",
        body: "A crew in matching shirts looks like a real company. A crew in old concert tees looks like a few guys who showed up. Customers notice the difference before anyone says a word.\n\nI help Central Ohio businesses put together a simple uniform: a polo or work shirt for customer-facing staff, a tee for the field, a company hoodie and jacket for the cold months, and a hat that goes with all of it. Same logo, same colors, every piece.\n\nFor road work and job sites, hi-vis vests and shirts can carry your logo too. Tell me what the job calls for and I'll match the garment to it. When you hire someone, reorder a few pieces and they look like the rest of the crew on day one.",
        image: {
          src: "/assets/apparel-safety-hivis.jpg",
          alt: "Orange and yellow hi-vis safety vests with reflective stripes and a printed logo, hanging over a workbench",
        },
      },
      {
        heading: "Looking for embroidery near me? Here's how it works",
        body: "There's no walk-in shop. I come to you, or the whole job runs by phone and email. You send your logo and tell me the items, sizes and colors, and I quote it within 24 hours.\n\nBefore anything gets stitched, your logo is set up for embroidery and you approve a proof. Tiny text and thin lines don't always stitch clean, so I'll flag anything that needs a simpler version for thread. First order? Design and setup are free.\n\nI work with trusted print partners, and you deal with one person from start to finish. Small runs are fine. Ask and I'll tell you the minimum for your item. Reorders are easy because your logo is already set up. I serve Columbus, Dublin, Westerville, Hilliard, Grove City and the rest of Central Ohio.",
      },
    ],
    faqs: [
      {
        q: "How much do embroidered polos cost?",
        a: "Embroidered polos with a left chest logo start at $29 each. Screen printed tees start at $14 each. The garment, the quantity and the size of the logo set the final price, and the price per piece drops as quantity goes up.",
      },
      {
        q: "What's the minimum order for custom embroidery?",
        a: "Small runs are fine. Ask and I'll tell you the minimum for your item. Reorders get cheaper per piece because your logo is already set up.",
      },
      {
        q: "Is embroidery or screen printing better for work shirts?",
        a: "For polos, hats and jackets, embroidery. It looks more professional and holds up to washing. For T-shirts on bigger runs, screen printing costs less per shirt.",
      },
      {
        q: "Can you embroider my logo on hats?",
        a: "Yes. Caps, trucker hats and beanies, stitched directly or with a sewn-on patch. A very detailed logo sometimes needs a simpler version to fit a hat, and you see a proof first.",
      },
      {
        q: "Can I mix sizes and garments in one order?",
        a: "Yes. Polos for the office, tees for the crew and hats for everyone can go in one order. Send me a list of who needs what and I'll put the quote together.",
      },
      {
        q: "What logo file do you need for embroidery?",
        a: "Send whatever you have. A vector file (AI, EPS or PDF) is best, but a clear PNG works to start. Your logo gets set up for stitching and you approve the proof before anything is made.",
      },
    ],
    related: ["promotional-products", "full-rebrand-kits", "vehicle-lettering", "business-cards-printing"],
    industries: ["roofing", "construction", "lawn-care-landscaping", "dental", "food-and-beverage"],
  },
  {
    slug: "promotional-products",
    group: "gear",
    navLabel: "Promotional products",
    blurb: "Drinkware, pens, bags and client gifts with your logo, from 4,300+ vetted suppliers.",
    metaTitle: "Promotional Products and Swag in Central Ohio",
    metaDescription:
      "Promotional products for Columbus and Central Ohio businesses: drinkware, pens, bags, client gifts and trade show swag from 4,300+ vetted suppliers.",
    eyebrow: "Promotional products",
    h1: "Branded stuff people keep and use.",
    lede: "Promotional products for Central Ohio businesses, picked from 4,300+ vetted suppliers at wholesale pricing. Drinkware, pens, bags, giveaways and client gifts with your logo on them.",
    hero: {
      src: "/assets/branded-drinkware-tumblers.jpg",
      alt: "Black tumbler with a straw, a stainless tumbler and a white mug, each printed with the red Buckeye Biz Hub Ohio logo",
    },
    options: [
      {
        name: "Branded drinkware",
        detail: "Tumblers, mugs and water bottles. They sit on desks and in cup holders every day with your name on them.",
      },
      {
        name: "Custom pens and desk items",
        detail: "Pens, notebooks, sticky notes and mousepads. Low cost per piece and easy to hand out by the box.",
      },
      {
        name: "Custom tote bags and backpacks",
        detail: "Totes, drawstring bags and backpacks for events, farmers markets and welcome kits.",
      },
      {
        name: "Trade show giveaways",
        detail: "Small, useful items for the booth table: pens, keychains, lip balm, koozies and stress balls.",
      },
      {
        name: "Client and employee gifts",
        detail: "Better pieces for the people who matter most, like quality drinkware, jackets and holiday gift sets.",
      },
      {
        name: "Event and outdoor gear",
        detail: "Coolers, blankets, koozies and stadium cushions for tailgates, golf outings and community events.",
      },
      {
        name: "Welcome kits",
        detail: "A tote with a tumbler, notebook and pen inside, built as one kit for new hires, new clients or open houses.",
      },
    ],
    uses: [
      "Trade shows and home shows",
      "Client thank-you gifts",
      "New hire welcome kits",
      "Open houses and grand openings",
      "Golf outings and charity events",
      "Holiday gifts for customers and staff",
      "Referral partner drop-offs",
    ],
    sections: [
      {
        heading: "What promotional products actually get used?",
        body: "The best promo item is one people use every week. A good tumbler gets filled every morning. A decent pen lives in a truck console for a year. A cheap gadget nobody needs goes straight in the junk drawer, and your logo goes with it.\n\nMatch the item to the person. Contractors keep koozies, hats and tape measures. Office staff keep drinkware, notebooks and phone stands. Families at a community event grab totes and water bottles.\n\nSpend more per piece on the people who send you work, and less per piece on the crowd at a home show. Tell me who it's for and what you want to spend, and I'll pull a short list that fits.",
      },
      {
        heading: "Trade show swag and giveaways for Central Ohio events",
        body: "Home shows, job fairs, chamber events, school fundraisers and 5Ks all run on giveaways. Plan for the crowd: plenty of low-cost pieces for the table, plus a few better items for the people who stop and actually talk to you.\n\nPut your phone number or website on the item, not only the logo. Someone who picks up your pen in March should be able to call you in June without looking you up.\n\nOrder well ahead of the event. Most promo items are made to order, and some take longer than others. I'll give you a date with the quote so you're not opening boxes the morning of the show.",
        image: {
          src: "/assets/promo-giveaways-pens-keychains.jpg",
          alt: "Foam stress balls, metal pens and keychains printed with different logos",
        },
      },
      {
        heading: "4,300+ suppliers, one person to deal with",
        body: "I source promotional products from 4,300+ vetted suppliers at wholesale pricing. That means a wide range of items and price points without you digging through catalogs or chasing five vendors.\n\nYou tell me the occasion, the quantity and the budget. I come back with options and a quote within 24 hours, then a proof of your logo on the item. Nothing gets made until you approve it. First order? Design and setup are free.\n\nMixing items in one order is fine: drinkware for clients, pens for the front desk, totes for the fall festival. Minimums vary by item, and I'll tell you each one up front. If you're not happy with the result, we make it right.",
      },
    ],
    faqs: [
      {
        q: "What is the minimum order for promotional products?",
        a: "It depends on the item. Some products start small and some need bigger runs. I'll tell you the minimum for each item before you commit.",
      },
      {
        q: "How much do promotional products cost?",
        a: "It depends on the item, the quantity and how your logo goes on. Pens and small giveaways cost little per piece. Drinkware, bags and apparel cost more. Tell me your budget and I'll find items that fit it.",
      },
      {
        q: "How long do promotional products take?",
        a: "Most items are made to order, so timing varies by product. Your quote comes back within 24 hours with a date. If you have an event, tell me the date up front.",
      },
      {
        q: "Can I see a proof before you order?",
        a: "Yes. You see a proof of your logo on the item and approve it before anything is made.",
      },
      {
        q: "What file do you need for my logo?",
        a: "A vector file (AI, EPS or PDF) works best. A clear, high-resolution PNG works for a lot of items. If all you have is a fuzzy JPG, send it and I'll tell you what can be done.",
      },
      {
        q: "Do you work with businesses outside Columbus?",
        a: "Yes. I work with businesses all over Central Ohio, from Dublin and Westerville to Newark and Mount Vernon, in person or by phone and email.",
      },
    ],
    related: ["embroidered-apparel", "trade-show-displays", "banners-and-flags", "packaging"],
    industries: ["real-estate", "dental", "construction", "food-and-beverage"],
  },
  {
    slug: "packaging",
    group: "gear",
    navLabel: "Packaging",
    blurb: "Custom product boxes, mailer boxes, pouches, hang tags and branded tape.",
    metaTitle: "Custom Packaging and Product Boxes in Columbus",
    metaDescription:
      "Custom packaging for Columbus small businesses: product boxes, mailer boxes, stand-up pouches, hang tags, bag toppers and branded tape. Free quote in 24 hours.",
    eyebrow: "Packaging",
    h1: "Boxes, bags and tags that match your brand.",
    lede: "Custom packaging for Columbus businesses that sell a product. Product boxes, mailer boxes, stand-up pouches, hang tags and branded tape, made to work with your labels.",
    hero: {
      src: "/assets/service-promo.png",
      alt: "Red printed box with a logo, packed with matching T-shirts, a cap, mugs, a notebook and pens",
    },
    options: [
      {
        name: "Custom product boxes",
        detail: "Folding cartons for candles, cosmetics, sauces, baked goods and retail products, printed with your logo and product info.",
      },
      {
        name: "Custom mailer boxes",
        detail: "Corrugated boxes that ship well and open nicely. Print the outside, the inside or both for online orders and subscription boxes.",
      },
      {
        name: "Stand-up pouches",
        detail: "Resealable pouches for coffee, snacks, treats and dry goods. Fully printed, or stock pouches with your label on the front.",
      },
      {
        name: "Hang tags",
        detail: "Tags for apparel, gifts and products on a hook or string, with room for your logo, price and a line about the product.",
      },
      {
        name: "Bag toppers",
        detail: "Folded cards stapled over the top of a plain bag. A low-cost way to brand cookies, candy and bulk goods.",
      },
      {
        name: "Box sleeves",
        detail: "A printed band that slides over a plain box. Change the sleeve for each product or season and keep the same box.",
      },
      {
        name: "Branded packing tape",
        detail: "Tape printed with your logo, so every box that leaves your shop carries your name.",
      },
    ],
    uses: [
      "Bakeries, candy makers and coffee roasters",
      "Candle, soap and cosmetics makers",
      "Online shops and subscription boxes",
      "Boutiques and gift shops",
      "Farm market and pop-up vendors",
      "Specialty food and drink makers",
      "Corporate gift boxes",
    ],
    sections: [
      {
        heading: "Custom packaging and labels work best together",
        body: "The cheapest way to look custom is a stock box, bag or jar with a great label on it. You get a branded look without paying for fully printed packaging on day one. Add a bag topper or a box sleeve and it looks like it came off a store shelf.\n\nAs volume grows, fully printed boxes and pouches start to make sense. The cost per piece comes down with quantity, and reorders skip most of the setup.\n\nEither way, the labels and the packaging should match: same colors, same fonts, same logo placement. I handle both, so your label and your box come from one person and one approved design.",
      },
      {
        heading: "Which type of packaging fits your product?",
        body: "Start with what the package has to do. Ship across the country? A corrugated mailer box. Sit on a retail shelf? A folding carton, or a pouch that stands up on its own. Hang on a hook? A hang tag or a header card.\n\nThen think about what's inside. Coffee, snacks and treats do well in resealable pouches. Candles, soap and cosmetics look good in a printed box. Baked goods in plain bags get a clean upgrade from a bag topper or a sticker seal.\n\nSend me a photo of your product, its size and how you sell it. I'll suggest two or three options at different price points so you can pick.",
      },
      {
        heading: "Start small, reorder bigger when it sells",
        body: "Most small brands don't know their real volume yet. That's fine. Small first orders are welcome. Start with labels on stock packaging, or a short run of printed boxes or pouches where the item allows it, and see how it sells.\n\nYou see and approve a proof before anything prints, so the box or pouch looks the way you expect. Nothing gets made on a guess.\n\nWhen it's time to reorder, the price per piece drops and the file is already approved. Tell me what you're selling and where, and you'll have a quote within 24 hours. I work with makers, shops and food businesses across Columbus and Central Ohio, in person or by phone and email.",
      },
    ],
    faqs: [
      {
        q: "How much do custom boxes cost?",
        a: "It depends on the box style, size, material, print coverage and quantity. The price per box drops a lot as quantity goes up. Send me the size and how many you need and you'll have a number within 24 hours.",
      },
      {
        q: "What's the minimum order for custom packaging?",
        a: "It varies by item. Small first orders are welcome, and I'll tell you the minimum for the box, pouch or tag you pick. If a printed box minimum is too high to start, labels on stock boxes are a good first step.",
      },
      {
        q: "What's the difference between a mailer box and a product box?",
        a: "A mailer box is corrugated cardboard built to ship. A product box, or folding carton, is thinner paperboard built to sit on a shelf and look good. Some online sellers use both: a printed mailer with a product box inside.",
      },
      {
        q: "Can you print on stand-up pouches?",
        a: "Yes. You can print the whole pouch, or put a custom label on a stock pouch. A label on a stock pouch is the low-cost way to start.",
      },
      {
        q: "Can my packaging match my labels?",
        a: "Yes. I handle labels and packaging together so the colors, fonts and logo line up. You approve a proof for each piece.",
      },
      {
        q: "Do you help design packaging?",
        a: "Yes. Send your logo, your product info and anything that has to be on the package, and it gets laid out for the box, pouch or tag. First order? Design and setup are free.",
      },
    ],
    related: ["custom-labels", "decals-and-stickers", "promotional-products", "business-printing"],
    industries: ["food-and-beverage"],
  },
  {
    slug: "full-rebrand-kits",
    group: "gear",
    navLabel: "Full rebrand kits",
    blurb: "Your new logo on cards, signs, trucks, apparel and web, rolled out together.",
    metaTitle: "Full Rebrand Kits for Columbus Businesses",
    metaDescription:
      "Rebranding a Columbus business or opening a new location? Get cards, signs, vehicle lettering, apparel and your website updated in one coordinated rollout.",
    eyebrow: "Rebrand kits",
    h1: "Put the new logo on everything at once.",
    lede: "A full rebrand kit gets your new logo onto business cards, signs, trucks, shirts and your website in one coordinated rollout. Built for Columbus businesses with a new brand, a new name or a new location.",
    hero: {
      src: "/assets/product-collage-hero.jpg",
      alt: "Red polos, a white T-shirt, trucker hats, business cards and a car door all showing the same Buckeye Biz Hub Ohio logo",
    },
    options: [
      {
        name: "Business cards and stationery",
        detail: "Cards, letterhead, envelopes and folders with the new logo, so the first thing people hold is current.",
      },
      {
        name: "Signs and storefront graphics",
        detail: "Exterior signs, window lettering, yard signs and banners, all updated together.",
      },
      {
        name: "Vehicle lettering and wraps",
        detail: "Door lettering, partial wraps or full wraps so the trucks match the new brand.",
      },
      {
        name: "Uniforms and apparel",
        detail: "Embroidered polos, hats, jackets and crew tees with the new logo for the whole team.",
      },
      {
        name: "Website and Google profile",
        detail: "A refreshed website and an updated Google Business Profile, so what people see online matches the street.",
      },
      {
        name: "Promotional products",
        detail: "Drinkware, pens and giveaways that announce the new look to customers and referral partners.",
      },
      {
        name: "New location kits",
        detail: "What a new location needs to open: signs, window graphics, cards, apparel and print.",
      },
    ],
    uses: [
      "New logo or new company name",
      "Opening a second location",
      "Buying an existing business",
      "Merging two companies",
      "A brand that looks dated",
      "Launching a new division",
    ],
    sections: [
      {
        heading: "Why rebrand everything at the same time?",
        body: "Rebranding in pieces confuses people. The new logo is on the business cards, the trucks still carry the old one, and the website hasn't changed in three years. Customers start to wonder if they're dealing with the same company.\n\nDoing it together fixes that. One set of files, one set of colors, one set of fonts, used on every piece. Your truck, your shirt, your sign and your website all look like the same business at the same time.\n\nIt's also easier on you. Instead of chasing a sign shop, a printer, an embroiderer and a web person, you deal with me. I coordinate trusted print vendors, partner wrap shops and installers so it all runs on one plan.",
      },
      {
        heading: "What goes in a rebrand kit?",
        body: "Start with a list of everything that carries your name. Most businesses forget half of it: invoices, email signatures, the yard signs in the garage, the magnet on the owner's truck, the Google Business Profile.\n\nA typical kit covers business cards and stationery, exterior and window signs, vehicle lettering or wraps, staff apparel and your website. Promo items, folders and trade show displays get added if you use them.\n\nYou don't have to buy everything. I'll walk the list with you, mark what has to change before launch and what can wait, and price it as one job. You see and approve a proof of each piece before anything prints.",
        image: {
          src: "/assets/rebrand-kit-hero.jpg",
          alt: "Overhead view of a conference table covered with matching business cards, brochures, a polo shirt, mugs, a cap and a laptop",
        },
      },
      {
        heading: "Rolling out a rebrand or a new location without the chaos",
        body: "Pick a launch date and work backward from it. I'll give you a date for each piece with the quote. Vehicles get done one at a time so the trucks keep running. Apparel goes in once you send sizes. The website and Google profile change when the signs do, so nobody finds the old look online.\n\nOpening a new location in Dublin, Grove City or Delaware? Same idea. Signs, window graphics, cards and staff shirts get planned around your opening day.\n\nI keep your files after launch, so the next card order, the next van and the next hire's polo all match. If you're not happy with the result, we make it right.",
      },
    ],
    faqs: [
      {
        q: "What is included in a rebrand kit?",
        a: "Whatever carries your name. Most kits include business cards, signs, vehicle lettering or wraps, staff apparel and website updates. You pick the pieces, and I price them as one job.",
      },
      {
        q: "How long does a full rebrand take?",
        a: "It depends on how many pieces and how many vehicles. Your quote comes back within 24 hours with a date for each piece. Vehicle work gets scheduled around the days you can spare a truck.",
      },
      {
        q: "Can I rebrand in phases?",
        a: "Yes. Change the most visible pieces first, like signs, trucks and cards, and add the rest as the budget allows. I keep your files, so later pieces match.",
      },
      {
        q: "Do you help with the design?",
        a: "Yes. Send your new logo and I'll lay it out on every piece, from the business card to the van door. You approve a proof of each one. First order? Design and setup are free.",
      },
      {
        q: "Is it cheaper to rebrand everything at once?",
        a: "It's simpler, and it often saves money. The design gets set up once and reused on every piece, and you're not paying rush prices later to fix pieces that got missed. You see the whole cost up front in one quote.",
      },
      {
        q: "Can you handle branding for a new location?",
        a: "Yes. Signs, window graphics, cards, apparel and print for a new location, planned around your opening date.",
      },
    ],
    related: ["vehicle-lettering", "yard-signs-and-signage", "business-cards-printing", "website-design"],
    industries: ["roofing", "construction", "dental", "real-estate", "food-and-beverage"],
  },
];
