import type { ProductPage } from "../types";

// Promo products, packaging and rebrand kits. Apparel lives in apparel.ts. Order here is menu order.
export const GEAR_PAGES: ProductPage[] = [
  {
    slug: "promotional-products",
    group: "gear",
    navLabel: "Promotional products",
    blurb: "Drinkware, pens, bags and client gifts with your logo, from 4,300+ vetted suppliers.",
    metaTitle: "Promotional Products and Swag in Central Ohio",
    metaDescription:
      "Promotional products for Columbus and Central Ohio businesses: drinkware, pens, bags, client gifts and trade show swag from 4,300+ vetted suppliers.",
    eyebrow: "Promotional products",
    h1: "Promotional Products and Swag in Central Ohio",
    tagline: "Branded stuff people keep and use.",
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
    related: ["custom-apparel", "trade-show-displays", "banners-and-flags", "packaging"],
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
    h1: "Custom Packaging and Product Boxes in Columbus",
    tagline: "Boxes, bags and tags that match your brand.",
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
    related: ["custom-labels", "hang-tags", "decals-and-stickers", "promotional-products"],
    industries: ["food-and-beverage"],
  },
  {
    slug: "hang-tags",
    group: "gear",
    navLabel: "Hang tags and retail tags",
    blurb: "Printed hang tags, price tags, gift tags and bottle neck tags for retail products.",
    metaTitle: "Custom Hang Tags and Retail Tags in Columbus, Ohio",
    metaDescription:
      "Custom hang tags for Columbus boutiques, makers and gift shops: apparel tags, price tags, gift tags and neck tags in custom shapes. Free quote in 24 hours.",
    eyebrow: "Hang tags",
    h1: "Custom Hang Tags and Retail Tags in Columbus, Ohio",
    tagline: "A small tag that tells people whose product it is.",
    lede: "Printed hang tags for clothing, candles, gifts and bottles. Your logo on the front, your story or care details on the back, and a string or fastener that fits the product.",
    hero: {
      src: "/assets/hang-tags-hero.jpg",
      alt: "Folded sweaters and T-shirts on a shop table, each with a cream printed hang tag tied on with red string",
    },
    options: [
      {
        name: "Apparel hang tags",
        detail: "Tags for shirts, sweatshirts and hats, attached with a plastic fastener, a safety pin or string.",
        image: { src: "/assets/hangtag-opt-apparel.jpg", alt: "Folded charcoal T-shirt with a cream logo hang tag attached at the collar" },
      },
      {
        name: "Gift and product tags",
        detail: "Small tags tied on with twine or ribbon for candles, soap, baked goods and gift baskets.",
        image: { src: "/assets/hangtag-opt-gift.jpg", alt: "Amber glass candle jar with a round Your Shop gift tag tied on with twine" },
      },
      {
        name: "Price tags",
        detail: "Your logo with a blank spot for the price or a barcode. One design works for every item in the shop.",
        image: { src: "/assets/hangtag-opt-price.jpg", alt: "Handmade mug on a shelf with a price tag showing a logo, a blank price line and a barcode" },
      },
      {
        name: "Custom shapes",
        detail: "Circles, arches and scalloped edges cut to shape, so the tag looks like your brand.",
        image: { src: "/assets/hangtag-opt-shaped.jpg", alt: "Round, arched, rectangle and scalloped hang tags with logos and strings on a cream surface" },
      },
      {
        name: "Folded tags",
        detail: "A tag that opens like a small card, with room inside for care instructions, ingredients or your story.",
        image: { src: "/assets/hangtag-opt-folded.jpg", alt: "Open folded hang tag with a red logo on one side and care instructions on the other, lying on a wool scarf" },
      },
      {
        name: "Bottle neck tags",
        detail: "Tags that loop over the neck of a bottle or jar for sauces, oils, wine and gifts.",
        image: { src: "/assets/hangtag-opt-bottle.jpg", alt: "Olive oil bottle on a kitchen counter with a printed neck tag on a red string" },
      },
    ],
    uses: [
      "Boutiques and clothing brands",
      "Candle, soap and bath makers",
      "Gift shops and florists",
      "Bakeries and candy makers",
      "Sauce, oil and drink makers",
      "Farm market and craft fair vendors",
    ],
    sections: [
      {
        heading: "What goes on a hang tag",
        body: "Keep the front simple: your logo and your name, big enough to read from a step away. That's what people see on the rack or the shelf.\n\nThe back does the work. Use it for one line about the product, care instructions, your website or a QR code, and the price if you print it. A folded tag gives you more room when you need it, like for ingredients or a short story about how it's made.\n\nSend me what you want on each side and I'll lay it out. You see a proof before anything prints.",
        image: {
          src: "/assets/hang-tags-back-side.jpg",
          alt: "Two cream hang tags side by side, one showing a red logo on the front and one showing short text and a QR code on the back",
        },
      },
      {
        heading: "Paper, strings and fasteners",
        body: "Hang tags print on thick cardstock, so they stay flat and don't bend on the rack. Kraft looks natural and handmade. White makes colors bright. Black looks premium with white or metallic ink. If you write prices by hand, pick an uncoated paper. Pens smear on a glossy coating.\n\nThen pick how the tag attaches. String or twine for gifts and candles. A thin ribbon for something dressier. A plastic fastener or a safety pin for clothing. Tell me what the product is and I'll suggest the match.",
        image: {
          src: "/assets/hang-tags-paper-strings.jpg",
          alt: "Rows of blank kraft, white, black and cream hang tags beside red string, twine, ribbon, safety pins, eyelets and plastic fasteners",
        },
      },
      {
        heading: "Tags, labels and packaging that match",
        body: "A hang tag looks best when it matches the rest of what you sell: the label on the jar, the sticker on the bag, the box it ships in. I handle all of it, so the colors, fonts and logo line up from one approved design.\n\nSmall first orders are welcome. Order a short run, see how it looks on the product, and reorder bigger when it sells. Your file is already set up, so reorders are quick.\n\nTell me what you sell and how many tags you need, and you'll have a quote within 24 hours. I work with shops and makers across Columbus and Central Ohio, in person or by phone and email.",
      },
    ],
    faqs: [
      {
        q: "How much do custom hang tags cost?",
        a: "It depends on the size, paper, shape, finish and quantity. The price per tag drops as the quantity goes up. Send me what you need and you'll have a quote within 24 hours.",
      },
      {
        q: "What's the smallest hang tag order you'll do?",
        a: "Small first orders are welcome. Tell me how many you need and I'll quote it. A short first run is a smart way to see the tag on your product before you buy more.",
      },
      {
        q: "Do the tags come with string?",
        a: "Tell me how you want them attached: string, twine, ribbon, a safety pin or a plastic fastener. I'll include it in the quote, or you can attach your own.",
      },
      {
        q: "Can I write prices on the tag by hand?",
        a: "Yes. Pick an uncoated paper and a pen writes on it like regular paper. Glossy coatings look great but make ink smear.",
      },
      {
        q: "Can you design my hang tags?",
        a: "Yes. Send your logo and what you want on the front and back. You'll see and approve a proof before anything prints.",
      },
      {
        q: "Do you make hang tags for businesses outside Columbus?",
        a: "Yes. I work with businesses across Central Ohio, including Dublin, Westerville, Gahanna, Hilliard, Grove City, Delaware, Newark and Mount Vernon. You deal with me directly by phone, text or email from the quote to delivery.",
      },
    ],
    related: ["packaging", "custom-labels", "decals-and-stickers", "custom-apparel"],
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
    h1: "Full Rebrand Kits for Columbus Businesses",
    tagline: "Put the new logo on everything at once.",
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
