import type { ProductPage } from "../types";

// Business printing: cards, mail, flyers, stationery, folders, catalogs, menus.
// Order here is menu order.
export const PRINT_PAGES: ProductPage[] = [
  {
    slug: "business-printing",
    group: "print",
    navLabel: "Business printing",
    blurb: "Cards, postcards, flyers, door hangers, stationery, folders, catalogs and menus.",
    metaTitle: "Business Printing Services in Columbus, Ohio",
    metaDescription:
      "Business printing in Columbus, Ohio: cards, postcards, flyers, door hangers, letterhead and more. 500 business cards from $29. Free quote in 24 hours.",
    eyebrow: "Business printing",
    h1: "Business Printing Services in Columbus, Ohio",
    tagline: "Everything your business hands out, printed and handled by one person.",
    lede: "Business printing in Columbus for cards, mailers, flyers, forms, folders, catalogs and menus. I match the paper and finish to the job, send you a proof, and get it printed by trusted print partners at wholesale pricing.",
    hero: {
      src: "/assets/business-cards-letterhead-stack.jpg",
      alt: "Stacks of white business cards printed with a red Ohio-shaped Buckeye Biz Hub logo",
    },
    prices: ["business-cards", "postcards", "flyers"],
    options: [
      {
        name: "Business cards",
        detail: "Standard, thick, foil and rounded-corner cards for you and your whole team.",
      },
      {
        name: "Postcards and direct mail",
        detail: "Mailers for your customer list, appointment reminders and leave-behind cards.",
      },
      {
        name: "EDDM postcards",
        detail: "Every Door Direct Mail. Pick USPS carrier routes and reach every home on them, no mailing list needed.",
      },
      {
        name: "Flyers and brochures",
        detail: "Flyers, sell sheets, tri-fold and bi-fold brochures and rack cards.",
      },
      {
        name: "Door hangers",
        detail: "Hand-delivered to the exact streets you work, with an optional tear-off card or coupon.",
      },
      {
        name: "Letterhead, envelopes and forms",
        detail: "Matching letterhead and envelopes, carbonless work order forms and logo notepads.",
      },
      {
        name: "Presentation folders",
        detail: "Two-pocket folders with business card slits for proposals and welcome packets.",
      },
      {
        name: "Catalogs, booklets and menus",
        detail: "Saddle-stitched and perfect-bound books, plus laminated menus and table tents.",
      },
    ],
    uses: [
      "Roofers, contractors and home service companies",
      "Real estate agents and brokerages",
      "Dental and medical offices",
      "Restaurants, cafes and breweries",
      "Law, insurance and accounting offices",
      "Trade shows and events",
      "New businesses ordering their first set",
    ],
    sections: [
      {
        heading: "Commercial printing in Columbus without the runaround",
        body: "Most businesses buy print from three or four places: cards online, flyers at a copy shop, forms from whoever printed them last time. Nothing quite matches, and nobody checks the file before it prints.\n\nI run it differently. You tell me what you need and how you'll use it. I pick the paper, size and finish, send a proof, and get it printed through trusted print partners at wholesale pricing. You deal with one person start to finish.\n\nThere's no walk-in shop. I'm home-based in Central Ohio, so I come to you or we handle it by phone and email. That works for businesses across Columbus, Dublin, Westerville, Hilliard, Grove City, Delaware, Newark and Mount Vernon.",
      },
      {
        heading: "Which paper and finish should you pick?",
        body: "Print paper comes in two families. Text weight is thinner and folds easily, so it's used for flyers, brochures and catalog pages. Cover stock and cardstock are stiffer, so they're used for business cards, postcards, door hangers and folders. Cardstock is usually listed in points (14pt, 16pt). Text paper is listed in pounds (80lb, 100lb).\n\nGloss makes photos and bright colors pop. Matte cuts the glare and reads easier when there's a lot of text. Uncoated paper is the one to pick if people need to write on it, like appointment cards or forms.\n\nFinishes are the extras: foil, spot UV, soft-touch and rounded corners. They cost more, so I'll tell you where they're worth it and where they aren't.",
        image: {
          src: "/assets/luxury-gold-foil-cards.jpg",
          alt: "Stack of dark business cards with raised gold foil lettering and a gold dot pattern",
        },
      },
      {
        heading: "Order small, then reorder for less",
        body: "Small first orders are welcome. If you're testing a new flyer or a new offer, start with a short run and see what happens before you buy thousands.\n\nReorders get cheaper per piece. Your files are already set up and approved, so the next run moves faster and costs less. I keep your layouts on file, which means a new hire's business cards match everyone else's and next year's mailer looks like it came from the same company.\n\nOrder pieces together when you can. Cards, letterhead, envelopes and folders printed as a set share the same colors and logo, and that's what makes a small company look established.",
      },
    ],
    faqs: [
      {
        q: "How much does business printing cost?",
        a: "500 business cards start at $29. 500 postcards at 4 x 6 start at $55, and 500 flyers at 8.5 x 11 start at $119. Paper, size, finish and quantity change the price, and every quote comes back within 24 hours.",
      },
      {
        q: "Do you have a print shop I can walk into?",
        a: "No. I'm home-based and coordinate every job through trusted print partners. I come to you, or we handle it by phone and email. You still deal with one person from quote to delivery.",
      },
      {
        q: "Will I see a proof before it prints?",
        a: "Yes. You see and approve a proof before anything prints. I check it for low-resolution logos, colors that will shift and text too close to the trim.",
      },
      {
        q: "Can you design it for me?",
        a: "Yes. Send your logo and what you want it to say, and I'll lay it out. First order? Design and setup are free.",
      },
      {
        q: "What file should I send for printing?",
        a: "A print-ready PDF with bleed is best. If you don't have one, send your logo and your text and I'll build the file. Photos pulled from a website are usually too small to print well.",
      },
      {
        q: "How fast can I get my printing?",
        a: "It depends on the product, the paper and the finish. Your quote comes back within 24 hours, and I'll give you a date with it.",
      },
    ],
    related: ["business-cards-printing", "postcards", "flyers-and-brochures", "door-hangers"],
    industries: ["roofing", "construction", "real-estate", "dental"],
  },
  {
    slug: "business-cards-printing",
    group: "print",
    navLabel: "Business cards",
    blurb: "Standard, premium, foil, thick and rounded-corner business cards.",
    metaTitle: "Business Card Printing in Columbus, Ohio",
    metaDescription:
      "Business card printing in Columbus, Ohio. Standard, premium, foil, thick and rounded-corner cards. 500 cards from $29. Proof first. Free quote in 24 hours.",
    eyebrow: "Business cards",
    h1: "Business Card Printing in Columbus, Ohio",
    tagline: "Local business cards that are worth handing out.",
    lede: "Business card printing in Columbus for contractors, agents, offices and anyone who still shakes hands. Standard, thick, foil or rounded corners. 500 full-color cards start at $29.",
    hero: {
      src: "/assets/luxury-gold-foil-cards.jpg",
      alt: "Stack of dark business cards with raised gold foil lettering and a gold dot pattern",
    },
    prices: ["business-cards"],
    options: [
      {
        name: "Standard business cards",
        detail: "3.5 x 2 on 14pt stock, full color on both sides, gloss or matte. The everyday card.",
      },
      {
        name: "Premium business cards",
        detail: "Thicker stock with a matte or soft-touch finish. Noticeably better in the hand.",
      },
      {
        name: "Foil business cards",
        detail: "Gold, silver or other metallic foil on your logo or name. It catches the light.",
      },
      {
        name: "Thick business cards",
        detail: "Heavy, stiff stock for a card that feels substantial. Add painted edges for a pop of color.",
      },
      {
        name: "Rounded corner business cards",
        detail: "Softer corners that look a little different and hold up better in a wallet.",
      },
      {
        name: "Spot UV business cards",
        detail: "A clear gloss coat on just your logo or one detail, against a matte background.",
      },
      {
        name: "Appointment cards",
        detail: "A writable back side for the next visit. Common for dental, medical and salon offices.",
      },
      {
        name: "QR code business cards",
        detail: "A code that opens your website, booking page or contact card when someone scans it.",
      },
    ],
    uses: [
      "Real estate agents",
      "Roofers, contractors and estimators",
      "Dental and medical offices",
      "Sales reps and account managers",
      "Lawyers, accountants and insurance agents",
      "New hires and growing teams",
      "Trade show booths and networking events",
    ],
    sections: [
      {
        heading: "Local business card printing, done right the first time",
        body: "A business card has one job: help someone find you later. That means your name, what you do, and a phone number big enough to read without glasses. Most bad cards have too much on them.\n\nUse the back. It's a good spot for your services, a QR code, a review link or an appointment line. The front stays clean and easy to read.\n\nBefore anything prints, you'll see and approve a proof. I check it for a fuzzy logo, text too close to the edge and colors that will print darker than they look on screen. Those are the problems that cause reprints. If you're in Columbus or anywhere in Central Ohio, I can meet you or handle it all by phone and email.",
      },
      {
        heading: "Standard, premium, foil or thick: which card is right?",
        body: "Standard 14pt cards with gloss or matte are the right call for most businesses. They look professional and keep the cost low, which matters when you hand out a lot of them. 500 start at $29.\n\nPremium and thick cards cost more and feel it. They make sense when the card is part of the pitch: real estate, law, financial services, high-end contractors. Soft-touch gives a smooth, velvety feel. Painted edges add color on the sides of a thick card.\n\nFoil and spot UV are for when you want the logo to stand out. Use them on one or two details, like your logo or name. Covering the whole card in foil usually looks busy and costs more than it's worth.",
      },
      {
        heading: "Ordering business cards for a whole team",
        body: "Teams need cards that match. I set up one layout and change the name, title, phone and email for each person, so every card looks like it came from the same company.\n\nYour file stays on file. When you hire someone, send me their details and their cards print from the same layout. Reorders get cheaper per piece, and there's no setup to redo.\n\nIf you also need letterhead, envelopes or presentation folders, order them with the cards. Printing them as a set keeps your colors consistent across every piece.",
        image: {
          src: "/assets/business-cards-letterhead-stack.jpg",
          alt: "Stacks of white business cards printed with a red Ohio-shaped Buckeye Biz Hub logo",
        },
      },
    ],
    faqs: [
      {
        q: "How much do business cards cost?",
        a: "500 full-color business cards, 3.5 x 2 on 14pt stock and printed on both sides, start at $29. Thicker stock, foil, spot UV, rounded corners and bigger quantities change the price.",
      },
      {
        q: "What's the smallest business card order?",
        a: "Small runs are fine. Tell me the quantity you need and I'll quote it. Reorders get cheaper per piece once your file is set up.",
      },
      {
        q: "What's the best thickness for a business card?",
        a: "14pt is the standard and works for most people. Go thicker if the card is part of your pitch and you want it to feel premium. I can show you the difference before you order.",
      },
      {
        q: "Should my business card be gloss or matte?",
        a: "Gloss makes photos and bright colors pop. Matte looks cleaner and is easier to write on. If you ever jot notes on the back of your cards, pick matte.",
      },
      {
        q: "Can you design my business card?",
        a: "Yes. Send your logo and your info, and you'll get a proof to approve before anything prints. First order? Design and setup are free.",
      },
      {
        q: "Do you print business cards for a whole office?",
        a: "Yes. One layout, with each person's name and contact info swapped in. New hires get cards that match everyone else's.",
      },
    ],
    related: ["letterhead-and-envelopes", "presentation-folders", "business-printing", "flyers-and-brochures"],
    industries: ["real-estate", "roofing", "dental", "construction"],
  },
  {
    slug: "postcards",
    group: "print",
    navLabel: "Postcards",
    blurb: "Postcard printing, direct mail postcards, reminders and leave-behind cards.",
    metaTitle: "Postcard Printing and Direct Mail in Columbus",
    metaDescription:
      "Postcard printing and direct mail postcards for Columbus businesses. 500 full-color 4 x 6 postcards from $55. Proof before print. Free quote in 24 hours.",
    eyebrow: "Postcards",
    h1: "Postcard Printing and Direct Mail in Columbus",
    tagline: "Postcards that end up on the kitchen counter.",
    lede: "Postcard printing in Columbus for direct mail, reminders and leave-behinds. Mail them to your own list or every door on a route. 500 full-color 4 x 6 postcards start at $55.",
    hero: {
      src: "/assets/diecut-postcards-sample.jpg",
      alt: "Fanned stack of rounded-corner photo postcards on a black surface",
    },
    prices: ["postcards", "door-hangers"],
    options: [
      {
        name: "4 x 6 postcards",
        detail: "The standard size. Full color on both sides, and the lowest cost per card.",
      },
      {
        name: "Jumbo postcards",
        detail: "Bigger cards like 6 x 9 and 6 x 11 that stand out in a stack of mail.",
      },
      {
        name: "Direct mail postcards",
        detail: "Mailed to your customer list, past clients or a list you buy.",
      },
      {
        name: "EDDM postcards",
        detail: "Every Door Direct Mail. Pick carrier routes and reach every home on them, no list needed.",
      },
      {
        name: "Appointment reminder cards",
        detail: "Reminders patients and customers stick on the fridge. A writable back is easy to add.",
      },
      {
        name: "Thank-you postcards",
        detail: "An uncoated back you can sign or write a short note on by hand.",
      },
      {
        name: "Rounded corner and die-cut postcards",
        detail: "Softer corners or a custom shape for a card that feels different in the hand.",
      },
      {
        name: "Leave-behind cards",
        detail: "Handed out after an estimate, left at the counter or tucked into a bag.",
      },
    ],
    uses: [
      "Roofing, HVAC and home service companies",
      "Real estate just-listed and just-sold cards",
      "Dental and medical appointment reminders",
      "Restaurant openings and specials",
      "Event and open house invitations",
      "Thank-you cards to customers",
      "Seasonal service reminders",
    ],
    sections: [
      {
        heading: "Direct mail postcards: your list or every door?",
        body: "There are two ways to mail a postcard. The first is to mail it to a list: your past customers, your patients, or a list you buy for a certain area. Each card has a name and address on it, so it goes exactly where you want.\n\nThe second is Every Door Direct Mail, or EDDM. You pick USPS carrier routes, and every address on those routes gets a card. No list to buy and no addresses to print. It's built for reaching whole neighborhoods, and I cover it in detail on the EDDM page.\n\nFor direct mail marketing in Columbus, a lot of businesses do both: EDDM to reach new neighborhoods, and list mail to stay in front of people who already know them. USPS sets the postage rates, and I'll keep your card within its rules.",
        image: {
          src: "/assets/gallery/direct-mail-deli-postcard.jpg",
          alt: "Row of colorful mailboxes with a free sandwich postcard sticking out of each one",
        },
      },
      {
        heading: "What makes a postcard get a call",
        body: "You get a few seconds between the mailbox and the trash can. Use them on one headline and one offer. A card that tries to list every service you do usually says nothing.\n\nMake the next step obvious. Put your phone number big, add a QR code that goes straight to a booking or quote page, and give people a reason to act now, like a deadline or a seasonal offer.\n\nThe back of the card matters as much as the front. Half the people who pick it up see the address side first. Put your headline and phone number there too.",
      },
      {
        heading: "Picking a postcard size and paper",
        body: "4 x 6 is the cheapest to print and works well for reminders, thank-you cards and leave-behinds. 500 start at $55. Bigger cards, like 6 x 9, cost more but are harder to miss in a stack of mail. Postage changes with size, so tell me how you plan to mail before you design something huge.\n\nFor paper, 14pt gloss is the usual choice. It's stiff enough to survive the mail and makes photos look good. Pick matte or uncoated if anyone needs to write on the card, like an appointment time or a handwritten thank-you.\n\nRounded corners and custom shapes are available when you want the card to feel a little different.",
      },
    ],
    faqs: [
      {
        q: "How much does postcard printing cost?",
        a: "500 full-color 4 x 6 postcards on 14pt stock start at $55. Bigger sizes, special finishes and mailing change the price. Postage is separate and set by USPS.",
      },
      {
        q: "What size postcard is best for direct mail?",
        a: "4 x 6 is the cheapest to print and mail. Bigger cards stand out more in the mailbox. If the card has to compete with a lot of other mail, go bigger.",
      },
      {
        q: "Can you mail the postcards for me?",
        a: "Yes. I can coordinate mailing to your list through my print partners, or set you up with Every Door Direct Mail if you want to reach whole neighborhoods. Or I'll print them and you mail them yourself.",
      },
      {
        q: "What's the difference between direct mail and EDDM?",
        a: "Direct mail goes to a list of names and addresses. EDDM goes to every address on the carrier routes you pick, with no list needed. Lists are more targeted. EDDM covers whole neighborhoods.",
      },
      {
        q: "How many times should I mail the same area?",
        a: "More than once. People who need you today might not be the ones who saw your first card. Mailing the same homes a few times usually beats one big drop.",
      },
      {
        q: "Can you design my postcard?",
        a: "Yes. Tell me the offer and the audience, and I'll lay it out with a proof for you to approve. First order? Design and setup are free.",
      },
    ],
    related: ["eddm-postcards", "door-hangers", "flyers-and-brochures", "business-cards-printing"],
    industries: ["roofing", "real-estate", "dental", "food-and-beverage"],
  },
  {
    slug: "eddm-postcards",
    group: "print",
    navLabel: "EDDM postcards",
    blurb: "Every Door Direct Mail: pick carrier routes and reach every home, no list needed.",
    metaTitle: "EDDM Postcards and Printing in Columbus, Ohio",
    metaDescription:
      "EDDM printing in Columbus, Ohio. Pick USPS carrier routes and mail to every door with no mailing list. Postcards from $55. Free EDDM quote in 24 hours.",
    eyebrow: "Every Door Direct Mail",
    h1: "EDDM Postcards and Printing in Columbus, Ohio",
    tagline: "Reach every house on the route without buying a mailing list.",
    lede: "EDDM printing in Columbus for businesses that work neighborhood by neighborhood. You pick the USPS carrier routes, and every address on them gets your postcard. No mailing list, no addresses to print.",
    hero: {
      src: "/assets/gallery/direct-mail-deli-postcard.jpg",
      alt: "Row of colorful mailboxes with a free sandwich postcard sticking out of each one",
    },
    prices: ["postcards"],
    options: [
      {
        name: "Carrier route planning",
        detail: "I'll help you pick routes around your shop, your service area or your best customers.",
      },
      {
        name: "Oversized EDDM postcards",
        detail: "Large, full-color cards printed and trimmed to fit the USPS rules for EDDM.",
      },
      {
        name: "Home service mailers",
        detail: "Roofing, HVAC, lawn care and remodeling offers sent to whole neighborhoods.",
      },
      {
        name: "Restaurant and takeout mailers",
        detail: "Menus, specials and coupons for the homes within driving distance of your door.",
      },
      {
        name: "Grand opening mailers",
        detail: "Tell the neighborhoods around a new location that you're open.",
      },
      {
        name: "Repeat route mailings",
        detail: "The same routes mailed more than once, so your name shows up again and again.",
      },
    ],
    uses: [
      "Roofers and storm response",
      "Lawn care and landscaping companies",
      "HVAC, plumbing and remodeling",
      "Restaurants, pizza shops and cafes",
      "Real estate agents farming a neighborhood",
      "Dental and medical offices near home",
      "Grand openings and new locations",
    ],
    sections: [
      {
        heading: "How Every Door Direct Mail works",
        body: "EDDM is a USPS program. Every mail route has a carrier, and the carrier visits every address on it. With EDDM, you pick the routes and the carrier delivers your postcard to every home on them. You don't need anyone's name or address.\n\nThe post office has an online map that shows each route, how many homes are on it, and general info about the area, like age and household income ranges. You can usually choose homes only or include businesses too.\n\nEDDM pieces have their own rules for size and postage. USPS sets the postage rate and size rules, and I'll keep your piece within them. I get the cards printed, trimmed and bundled the way the post office wants them, and I'll walk you through the drop-off.",
      },
      {
        heading: "Picking carrier routes in Columbus and Central Ohio",
        body: "Start with where your customers already are. A roofer might pick the routes around last month's jobs. A pizza shop might pick every route within its delivery area. A dentist might pick the neighborhoods closest to the office.\n\nRoutes follow ZIP codes, but they don't line up with subdivision names or city limits. A route in Hilliard or Westerville can cover a few streets or a big chunk of a neighborhood. Look at the map before you decide, and skip routes that are mostly businesses if you sell to homeowners.\n\nIf you're not sure where to start, send me your address, your service area and who your best customers are. I'll help you sort the routes before anything prints.",
      },
      {
        heading: "EDDM or a mailing list?",
        body: "EDDM sends your card to everyone on the route, whether they're a good fit or not. In return, there's no list to buy and no addresses to print. That makes it a good fit for businesses that sell to almost every household: food, home services, lawn care, dental.\n\nA mailing list targets exactly who you choose, like homeowners, a certain age, or your past customers. Each card costs more to address, but none go to the wrong house.\n\nWhichever you choose, mail more than once. People who need a new roof or a new dentist this month aren't the same people who needed one last month. Showing up again keeps your name in front of them when they're ready.",
      },
    ],
    faqs: [
      {
        q: "What is EDDM?",
        a: "EDDM stands for Every Door Direct Mail. It's a USPS program that delivers your mail piece to every address on the carrier routes you pick. You don't need a mailing list.",
      },
      {
        q: "How much does EDDM printing cost?",
        a: "Standard 4 x 6 postcards start at $55 for 500, but EDDM pieces have to be larger than that, so they cost more to print. Postage is separate and set by USPS. Tell me how many homes you want to reach and I'll quote it within 24 hours.",
      },
      {
        q: "Do I need a mailing list for EDDM?",
        a: "No. That's the point of EDDM. The carrier delivers to every address on the routes you pick, so no names or addresses go on the card.",
      },
      {
        q: "Can I pick specific neighborhoods?",
        a: "You pick by carrier route. Routes cover groups of streets inside a ZIP code, so they won't match a subdivision exactly. The USPS map shows where each route runs.",
      },
      {
        q: "What size are EDDM postcards?",
        a: "EDDM pieces have to be bigger than a regular postcard. USPS sets the postage rate and size rules, and I'll keep your piece within them.",
      },
      {
        q: "Who takes the postcards to the post office?",
        a: "I get them printed, trimmed and bundled the way the post office wants them. Then I'll walk you through the drop-off so it goes smoothly.",
      },
      {
        q: "Can you design my EDDM postcard?",
        a: "Yes. A big headline, one offer and your phone number in plain sight. First order? Design and setup are free.",
      },
    ],
    related: ["postcards", "door-hangers", "flyers-and-brochures", "business-printing"],
    industries: ["roofing", "lawn-care-landscaping", "food-and-beverage", "real-estate"],
  },
  {
    slug: "flyers-and-brochures",
    group: "print",
    navLabel: "Flyers and brochures",
    blurb: "Flyers, sell sheets, tri-fold and bi-fold brochures and rack cards.",
    metaTitle: "Flyer and Brochure Printing in Columbus, Ohio",
    metaDescription:
      "Flyer and brochure printing in Columbus, Ohio: flyers, sell sheets, tri-fold and bi-fold brochures and rack cards. 500 flyers from $119. Free quote in 24 hours.",
    eyebrow: "Flyers and brochures",
    h1: "Flyer and Brochure Printing in Columbus, Ohio",
    tagline: "Flyers, brochures and sell sheets that explain what you do.",
    lede: "Flyer and brochure printing in Columbus for handouts, sales visits, counters and trade shows. Flyers, sell sheets, tri-folds, bi-folds and rack cards. 500 full-color flyers start at $119.",
    hero: {
      src: "/assets/brochures-flyers-layou.jpg",
      alt: "Folded brochures, booklets and cards printed with a red Ohio-shaped Buckeye logo",
    },
    prices: ["flyers"],
    options: [
      {
        name: "Flyers",
        detail: "8.5 x 11 and other sizes, full color on one or both sides. Good for handouts, events and bulletin boards.",
      },
      {
        name: "Sell sheets",
        detail: "A one-page summary of a product or service, built for sales calls and leave-behinds.",
      },
      {
        name: "Tri-fold brochures",
        detail: "Three panels that walk the reader through your services in order. The most common brochure.",
      },
      {
        name: "Bi-fold brochures",
        detail: "Folded once into four pages. A clean format for a menu of services or a short company overview.",
      },
      {
        name: "Z-fold and gate-fold brochures",
        detail: "Z-folds open like an accordion. Gate-folds open from the middle for a big reveal inside.",
      },
      {
        name: "Rack cards",
        detail: "Tall, narrow cards on stiff stock for display racks, front counters and hotel lobbies.",
      },
      {
        name: "Folder and mailer inserts",
        detail: "Single sheets sized to slip into a presentation folder or an envelope.",
      },
    ],
    uses: [
      "Sales visits and estimates",
      "Front desks and waiting rooms",
      "Trade show booths",
      "Real estate open houses",
      "Restaurant takeout and catering menus",
      "Community events and fundraisers",
      "Folder and welcome packet inserts",
    ],
    sections: [
      {
        heading: "Flyer, sell sheet or brochure?",
        body: "A flyer announces one thing: an event, a sale, a new service. It's quick to read and cheap to print, so you can hand out a lot of them. 500 full-color 8.5 x 11 flyers start at $119.\n\nA sell sheet is a flyer with a sales job. It sums up one product or service with the key details, a few reasons to buy and how to order. Contractors, distributors and manufacturers leave them behind after a meeting.\n\nA brochure tells the bigger story. The folds give you panels to cover several services, show photos and answer common questions. Use a brochure when someone needs to understand your whole business before they call you.",
      },
      {
        heading: "Tri-fold or bi-fold: picking a brochure fold",
        body: "A tri-fold is a letter-size sheet folded into three panels. It fits in a standard envelope and a brochure rack, and it walks people through your content in order: cover, the inside spread, then the back panel with your contact info. It's the safe pick for most businesses.\n\nA bi-fold is folded once in the middle. It gives you bigger panels, which works well for photos, a service menu or a price list.\n\nZ-folds and gate-folds are for when you want a bigger reveal. If you're not sure, tell me what goes inside and I'll suggest a fold before you write a word.",
        image: {
          src: "/assets/trifold-brochure-sample.png",
          alt: "Open tri-fold brochure with a lion on the cover and photos on the inside panels",
        },
      },
      {
        heading: "Paper that matches how it gets used",
        body: "Flyers handed out at events are usually on 100lb gloss text. It's sturdy enough to hold without flopping and makes color look sharp. Lighter paper costs less and works for big runs that get tossed fast.\n\nBrochures fold better on text weight paper. Rack cards and sell sheets that sit on a counter for weeks do better on heavier cover stock.\n\nPick matte when there's a lot of reading, or when someone might write on it. Pick gloss when photos sell the product. I work with businesses all over Columbus and Central Ohio, and the right paper is part of every quote.",
      },
    ],
    faqs: [
      {
        q: "How much does flyer printing cost?",
        a: "500 full-color flyers, 8.5 x 11 on 100lb gloss and printed on both sides, start at $119. Size, paper, folding and quantity change the price. Brochures cost a little more because of the folding.",
      },
      {
        q: "What's the difference between a flyer and a brochure?",
        a: "A flyer is a flat sheet with one message. A brochure is folded into panels and covers more ground. Use a flyer for an event or offer, and a brochure to explain your business.",
      },
      {
        q: "What size is a tri-fold brochure?",
        a: "Most tri-folds start as an 8.5 x 11 sheet folded into three panels. That size fits a standard envelope and a brochure rack. Bigger sheets work too if you have more to say.",
      },
      {
        q: "What paper is best for brochures?",
        a: "Gloss text paper is the common pick. It folds cleanly and makes photos look good. Matte reads easier when there's a lot of text.",
      },
      {
        q: "What's a sell sheet?",
        a: "A one-page piece that sums up one product or service for a buyer. It covers what it is, why it's better and how to order. Sales reps leave it behind after a meeting.",
      },
      {
        q: "Can you design my flyer or brochure?",
        a: "Yes. Send your logo, your photos and what you want it to say, and I'll lay it out with a proof for you to approve. First order? Design and setup are free.",
      },
    ],
    related: ["postcards", "presentation-folders", "catalogs-and-booklets", "trade-show-displays"],
    industries: ["real-estate", "food-and-beverage", "medical-specialty", "construction"],
  },
  {
    slug: "door-hangers",
    group: "print",
    navLabel: "Door hangers",
    blurb: "Door hangers with tear-off cards for roofers, lawn crews and restaurants.",
    metaTitle: "Door Hanger Printing in Columbus, Ohio",
    metaDescription:
      "Door hanger printing in Columbus, Ohio for roofers, lawn care and restaurants. 500 full-color door hangers from $179. Proof first. Free quote in 24 hours.",
    eyebrow: "Door hangers",
    h1: "Door Hanger Printing in Columbus, Ohio",
    tagline: "Door hangers for the streets you already work.",
    lede: "Custom door hangers in Columbus for roofers, lawn crews, restaurants and anyone who works neighborhood by neighborhood. 500 full-color door hangers, with the hole and slit, start at $179.",
    hero: {
      src: "/photos/roofing-door-hanger-knock.jpg",
      alt: "Front and back of a sample red roofing door hanger with a knock knock headline and a services list",
    },
    prices: ["door-hangers", "postcards"],
    options: [
      {
        name: "Standard door hangers",
        detail: "4.25 x 11 on 14pt stock, full color on both sides, with the hole and slit for the knob.",
      },
      {
        name: "Door hangers with tear-off cards",
        detail: "A perforated coupon or business card at the bottom that people can keep.",
      },
      {
        name: "Neighbor notice door hangers",
        detail: "Let the neighbors know you're working next door, and leave your number while you're there.",
      },
      {
        name: "Sorry we missed you hangers",
        detail: "For estimates, service calls and deliveries when nobody answers the door.",
      },
      {
        name: "Restaurant menu door hangers",
        detail: "A takeout menu or delivery coupon for the homes around your kitchen.",
      },
      {
        name: "Lawn care and seasonal service hangers",
        detail: "Spring cleanup, aeration, gutter cleaning or snow removal, timed to the season.",
      },
      {
        name: "Writable door hangers",
        detail: "A matte or uncoated area for a handwritten note, a quote or a service date.",
      },
    ],
    uses: [
      "Roofers and storm restoration crews",
      "Lawn care and landscaping companies",
      "Pizza shops and takeout restaurants",
      "HVAC, plumbing and pest control",
      "Painters, remodelers and window cleaners",
      "Real estate agents farming a neighborhood",
      "Political and community campaigns",
    ],
    sections: [
      {
        heading: "Door hangers or postcards?",
        body: "Door hangers are delivered by hand, so there's no postage. You pick the exact streets, even the exact houses, and your crew can drop them on the way to a job. They hang at eye level on the front door, where people have to touch them to get inside.\n\nPostcards go through the mail, so nobody has to walk the street. They reach more homes with less effort, but you pay postage on every card.\n\n500 door hangers start at $179. 500 postcards start at $55, plus postage. Plenty of Columbus businesses use both: postcards to cover a wide area, and door hangers for the streets around a current job.",
      },
      {
        heading: "The neighbor door hanger for roofers and contractors",
        body: "When your crew is on a roof, every neighbor on the street sees the truck and hears the work. That's the best time to introduce yourself.\n\nA neighbor door hanger says you're working on a house nearby and gives people your number. Some contractors offer a free inspection while the crew is already on the street. Leave room on the hanger to write the address of the job or a short note.\n\nAdd a tear-off card at the bottom. The hanger goes in the recycling, but the card goes on the fridge or in a junk drawer, and that's where people look when they need you.",
      },
      {
        heading: "How to hand out door hangers the right way",
        body: "Hang them on the knob or the handle of the front door. Never put them in a mailbox. Federal law reserves the mailbox for postage-paid mail.\n\nRespect no-soliciting signs, and check your city's rules before a big drop. Some communities in Central Ohio have their own rules about leaving materials at the door. A quick call to the city or township office saves headaches.\n\nPlan the route before you print. Count the homes on the streets you want, add a few extra, and order that number. Leftovers make good leave-behinds for estimates and service calls.",
      },
    ],
    faqs: [
      {
        q: "How much do door hangers cost?",
        a: "500 full-color door hangers, 4.25 x 11 on 14pt stock with the hole and slit, start at $179. Tear-off cards, special finishes and bigger quantities change the price.",
      },
      {
        q: "Can I put door hangers in mailboxes?",
        a: "No. Federal law reserves the mailbox for postage-paid mail. Hang them on the front door knob or handle instead.",
      },
      {
        q: "What size is a standard door hanger?",
        a: "4.25 x 11 is the common size. It's big enough for a headline, a photo, a list of services and a tear-off card at the bottom.",
      },
      {
        q: "Can door hangers have a tear-off coupon?",
        a: "Yes. A perforated card at the bottom can be a coupon, an appointment card or a mini business card. People keep the card after the hanger is gone.",
      },
      {
        q: "Are door hangers better than postcards?",
        a: "Neither is always better. Door hangers skip postage and let you pick exact houses, but someone has to walk the route. Postcards cover more ground with no walking.",
      },
      {
        q: "Can you design my door hanger?",
        a: "Yes. Send your logo, your offer and your phone number, and I'll lay it out with a proof to approve. First order? Design and setup are free.",
      },
    ],
    related: ["postcards", "eddm-postcards", "yard-signs-and-signage", "business-cards-printing"],
    industries: ["roofing", "lawn-care-landscaping", "food-and-beverage", "real-estate"],
  },
  {
    slug: "letterhead-and-envelopes",
    group: "print",
    navLabel: "Letterhead and envelopes",
    blurb: "Letterhead, envelopes, carbonless forms and notepads that match your brand.",
    metaTitle: "Letterhead and Envelope Printing in Columbus",
    metaDescription:
      "Letterhead, envelope, carbonless form and notepad printing in Columbus, Ohio. Matched to your business cards, from $29 for 500. Free quote in 24 hours.",
    eyebrow: "Letterhead, envelopes and forms",
    h1: "Letterhead and Envelope Printing in Columbus",
    tagline: "Letterhead, envelopes and forms that match your business card.",
    lede: "Letterhead and envelope printing in Columbus for offices that still send paper. Add carbonless forms and logo notepads, and every piece carries the same logo and colors.",
    hero: {
      src: "/assets/gallery/custom-design-envelope.jpg",
      alt: "White business envelope with a pink flower graphic and logo in the corner and a printed inside flap",
    },
    prices: ["business-cards"],
    options: [
      {
        name: "Letterhead",
        detail: "8.5 x 11 with your logo, address and contact info. Made to run through your office printer.",
      },
      {
        name: "#10 business envelopes",
        detail: "The standard business envelope, printed with your logo and return address.",
      },
      {
        name: "Window envelopes",
        detail: "For invoices and statements, so the address on the letter shows through.",
      },
      {
        name: "Large catalog envelopes",
        detail: "9 x 12 envelopes for contracts, proposals and anything that shouldn't be folded.",
      },
      {
        name: "Carbonless (NCR) forms",
        detail: "Two-part and three-part forms for work orders, estimates, invoices and receipts.",
      },
      {
        name: "Custom notepads",
        detail: "Logo notepads in memo and letter sizes for the office, client gifts and trade shows.",
      },
      {
        name: "Note cards and envelopes",
        detail: "Folded or flat cards for thank-you notes and short letters to clients.",
      },
    ],
    uses: [
      "Law, accounting and insurance offices",
      "Dental and medical practices",
      "Contractors writing estimates and work orders",
      "Service companies invoicing on the job",
      "Real estate and property management",
      "Nonprofits and associations",
      "New businesses setting up an office",
    ],
    sections: [
      {
        heading: "Will printed letterhead work in my office printer?",
        body: "Yes, when the paper is right. Most letterhead is printed in color ahead of time, then your letters print on top in your office laser or inkjet printer. The logo and footer are already there, and you type the letter as usual.\n\nTell me what printer you use. I'll pick a paper that feeds through it cleanly and leave enough margin for your printer to work around the design.\n\nKeep the design simple. Logo at the top, contact info at the top or bottom, and plenty of white space. A letter that's hard to read because of the letterhead defeats the purpose.",
      },
      {
        heading: "Carbonless forms for work orders, estimates and invoices",
        body: "Carbonless forms, also called NCR forms, make copies without carbon paper. Write on the top sheet and the copy appears on the sheets underneath. NCR stands for no carbon required.\n\nTwo-part forms give you a copy for you and one for the customer. Three-part forms add one for the office. The copies usually come in different colors, like white, yellow and pink, so everyone knows which copy is theirs.\n\nForms can be numbered in order so none go missing, and bound into books or sets that tear out cleanly. Contractors and service companies across Central Ohio use them for estimates, work orders and receipts on the job. Send me the form you use now, even a photo of it, and I'll rebuild it with your logo.",
        image: {
          src: "/photos/roofing-carbonless-form.jpg",
          alt: "White, yellow and pink pages of a three-part carbonless application form fanned out",
        },
      },
      {
        heading: "Order your stationery as a set",
        body: "Letterhead, envelopes, business cards and notepads should look like they came from the same company. When they're ordered at different times from different places, the colors drift and the logo changes size.\n\nOrder them together and I'll set up all the pieces from one design. Your colors match, your contact info is the same everywhere, and everything is on file for reorders.\n\nFor offices in Columbus with a few people, that usually means cards for everyone, one letterhead, #10 envelopes and a notepad for the front desk. Add carbonless forms if you write estimates or invoices by hand.",
      },
    ],
    faqs: [
      {
        q: "How much does letterhead cost?",
        a: "It depends on the paper, the quantity and how many colors print. Matching business cards start at $29 for 500. Send me what you need and I'll quote the whole set within 24 hours.",
      },
      {
        q: "What paper is best for letterhead?",
        a: "A smooth, bright white paper that runs well through office printers is the right call for most businesses. Law and financial offices sometimes prefer a heavier or textured paper. I'll match it to your printer.",
      },
      {
        q: "What does NCR mean on forms?",
        a: "NCR stands for no carbon required. The paper is coated so writing on the top sheet shows up on the sheets below. It's how two-part and three-part forms work.",
      },
      {
        q: "Can carbonless forms be numbered?",
        a: "Yes. Forms can be numbered in order so you can track every estimate, work order or receipt. Tell me the starting number when you order.",
      },
      {
        q: "Can I get custom notepads with my logo?",
        a: "Yes. Logo notepads come in memo and letter sizes with a backing board. They're handy at the front desk and make good client gifts.",
      },
      {
        q: "Can you design my letterhead and envelopes?",
        a: "Yes. I'll build them from your logo and your business card so the whole set matches. First order? Design and setup are free.",
      },
    ],
    related: ["business-cards-printing", "presentation-folders", "business-printing", "full-rebrand-kits"],
    industries: ["dental", "medical-specialty", "construction", "real-estate"],
  },
  {
    slug: "presentation-folders",
    group: "print",
    navLabel: "Presentation folders",
    blurb: "Pocket folders with business card slits for proposals and welcome packets.",
    metaTitle: "Presentation Folder Printing in Columbus, Ohio",
    metaDescription:
      "Presentation folders in Columbus, Ohio. Two-pocket folders with business card slits, foil, spot UV and soft-touch. Proof before print. Free quote in 24 hours.",
    eyebrow: "Presentation folders",
    h1: "Presentation Folder Printing in Columbus, Ohio",
    tagline: "Pocket folders that make a proposal look finished.",
    lede: "Custom presentation folders in Columbus for proposals, welcome packets and listing presentations. Two pockets, a slit for your business card, and your logo on the front.",
    hero: {
      src: "/assets/business-cards-letterhead-stack.jpg",
      alt: "Stacks of white business cards printed with a red Ohio-shaped Buckeye Biz Hub logo",
    },
    options: [
      {
        name: "Two-pocket folders",
        detail: "The standard 9 x 12 folder with two inside pockets. Letter-size paper fits with room to spare.",
      },
      {
        name: "Single pocket folders",
        detail: "One pocket for a short proposal or a few handouts. Clean and simple.",
      },
      {
        name: "Capacity folders",
        detail: "An expanding spine for thick proposals, onboarding kits and training packets.",
      },
      {
        name: "Business card slits",
        detail: "Slits cut into one or both pockets so your card stays with the paperwork.",
      },
      {
        name: "Foil and spot UV folders",
        detail: "Metallic foil or a clear gloss coat on your logo for a folder that catches the light.",
      },
      {
        name: "Soft-touch folders",
        detail: "A smooth, velvety coating people notice as soon as they pick it up.",
      },
      {
        name: "Legal size folders",
        detail: "Larger folders for legal-size documents and contracts.",
      },
    ],
    uses: [
      "Sales proposals and bids",
      "Real estate listing and buyer packets",
      "New patient and new client welcome kits",
      "Employee onboarding",
      "Contractor estimates and project packets",
      "Trade show and event handouts",
    ],
    sections: [
      {
        heading: "What goes in a presentation folder?",
        body: "A presentation folder turns a stack of loose paper into one package. Put your proposal in the right pocket, and your brochure, sell sheets or references in the left. Your business card goes in the slit so your contact info stays with the paperwork.\n\nContractors use them for bids and estimates. Real estate agents use them for listing presentations and buyer packets. Dental and medical offices use them for new patient welcome kits. HR uses them for onboarding.\n\nThe folder is the first thing someone holds before they read a word. A branded folder tells them you took the time to get the details right.",
      },
      {
        heading: "Folder styles, slits and finishes",
        body: "The standard is a 9 x 12 two-pocket folder. It holds letter-size paper with room to spare and fits most uses. Single pocket folders work for a few sheets. Capacity folders have an expanding spine for thick packets.\n\nAdd a business card slit to one or both pockets. It's a small cut that keeps your card in the folder instead of lost on a desk.\n\nFinishes make the difference between a folder and a good folder. Gloss lamination makes colors pop and resists scuffs. Matte looks clean and sharp. Soft-touch feels velvety. Foil and spot UV put a shine on your logo. Pick one finish and one highlight, and you'll get the look without overspending.",
      },
      {
        heading: "Match the folder to everything inside it",
        body: "A folder works best when it matches the pages inside. Use the same logo, colors and fonts as your letterhead, business cards and brochures, and the whole package looks like one company put it together.\n\nPrint the inside pockets too. It's a good spot for a short list of services, your website or a few words about how you work.\n\nI handle folders, cards, letterhead and inserts together for businesses in Columbus and Central Ohio, so everything matches and reorders are easy. You'll see a proof of the folder flat and folded before anything prints.",
      },
    ],
    faqs: [
      {
        q: "How much do presentation folders cost?",
        a: "It depends on the quantity, the paper, the finish and add-ons like foil or business card slits. Send me what you need and I'll quote it within 24 hours. Reorders cost less per folder.",
      },
      {
        q: "What size is a standard presentation folder?",
        a: "9 x 12 inches. It holds letter-size paper with a little room around the edges. Legal size and other sizes are available.",
      },
      {
        q: "Can I add a business card slit?",
        a: "Yes. A slit can go on one or both pockets. It's one of the most useful add-ons on a folder.",
      },
      {
        q: "What's the difference between foil and spot UV?",
        a: "Foil is a metallic layer, like gold or silver, pressed onto the folder. Spot UV is a clear gloss coat on one area, like your logo. Both make that area stand out, and they can be used together.",
      },
      {
        q: "What's the smallest folder order?",
        a: "Small runs are fine. Tell me the quantity and I'll quote it. The price per folder drops as the quantity goes up.",
      },
      {
        q: "Can you design my presentation folder?",
        a: "Yes. I'll lay it out from your logo and colors and show you a proof before anything prints. First order? Design and setup are free.",
      },
    ],
    related: ["letterhead-and-envelopes", "business-cards-printing", "flyers-and-brochures", "catalogs-and-booklets"],
    industries: ["real-estate", "construction", "dental", "medical-specialty"],
  },
  {
    slug: "catalogs-and-booklets",
    group: "print",
    navLabel: "Catalogs and booklets",
    blurb: "Product catalogs, booklets, programs and manuals in stapled or bound formats.",
    metaTitle: "Catalog and Booklet Printing in Columbus, Ohio",
    metaDescription:
      "Catalog and booklet printing in Columbus, Ohio. Saddle-stitched booklets, perfect-bound catalogs and wire-o manuals. Proof before print. Free quote in 24 hours.",
    eyebrow: "Catalogs and booklets",
    h1: "Catalog and Booklet Printing in Columbus, Ohio",
    tagline: "Catalogs and booklets that sit on the desk for months.",
    lede: "Catalog and booklet printing in Columbus for product lines, programs, manuals and capability books. Stapled, glued or wire bound, full color, with a proof you approve first.",
    hero: {
      src: "/assets/brochures-flyers-layou.jpg",
      alt: "Folded brochures, booklets and cards printed with a red Ohio-shaped Buckeye logo",
    },
    options: [
      {
        name: "Saddle-stitched booklets",
        detail: "Stapled on the fold. The most common and lowest-cost binding for slim catalogs and programs.",
      },
      {
        name: "Perfect-bound catalogs",
        detail: "Pages glued into a flat spine like a paperback, with room to print the title on the spine.",
      },
      {
        name: "Wire-O manuals",
        detail: "Wire binding that lets pages lie flat or fold all the way back. Built for manuals and guides.",
      },
      {
        name: "Coil-bound workbooks",
        detail: "Plastic coil binding for workbooks, planners and internal documents.",
      },
      {
        name: "Product catalogs",
        detail: "Your product line with photos, specs and part numbers in one book.",
      },
      {
        name: "Event programs",
        detail: "Programs for galas, tournaments, graduations and church events.",
      },
      {
        name: "Training and safety manuals",
        detail: "Procedures and checklists your crew can keep in the truck or on the shop floor.",
      },
      {
        name: "Capability booklets",
        detail: "Show a prospect your services, equipment and past work in a few clean pages.",
      },
    ],
    uses: [
      "Manufacturers and distributors",
      "Retailers with seasonal product lines",
      "Contractors pitching commercial work",
      "Schools, churches and nonprofits",
      "Event and tournament programs",
      "Employee handbooks and training",
    ],
    sections: [
      {
        heading: "Saddle stitch, perfect bound or wire-O?",
        body: "Saddle stitching is folded sheets stapled through the spine. It's the lowest-cost binding and the right pick for slim catalogs, programs and newsletters. Because each sheet folds into four pages, the page count has to be a multiple of four.\n\nPerfect binding glues the pages into a flat spine, like a paperback. It needs enough pages to make a real spine, and it lets you print the title on the edge so the book reads on a shelf. Use it for thick catalogs and annual reports.\n\nWire-O and coil let pages lie flat or fold all the way back. That makes them the choice for manuals, recipe books and anything people use with their hands full.",
      },
      {
        heading: "Plan a catalog that's easy to update",
        body: "Prices change more often than products. Put pricing on a separate sheet or insert instead of on every page. When prices go up, you reprint one sheet instead of the whole catalog.\n\nOrganize it the way your customers shop: by category, by job or by season. Put a table of contents up front and a way to order on the back cover.\n\nSend me your product list, your photos and any specs. If your photos came off a website or a phone, I'll tell you which ones will print well and which ones won't before we lay out the pages.",
      },
      {
        heading: "Short runs and reorders",
        body: "Small first orders are welcome. A short run is a smart way to test a new catalog, print programs for a one-day event or put a handful of manuals in the trucks.\n\nBigger runs cost less per book. If you know you'll hand out a lot of them over the year, ordering more at once usually saves money. If your catalog changes often, smaller and more frequent runs keep you from throwing out old books.\n\nI work with manufacturers, retailers, contractors and nonprofits around Columbus and Central Ohio. Tell me the page count, the size and how many you need, and I'll quote a few quantities so you can compare.",
      },
    ],
    faqs: [
      {
        q: "How much does catalog printing cost?",
        a: "It depends on the page count, the size, the paper, the binding and the quantity. Send me those details and I'll quote it within 24 hours. The price per book drops as the quantity goes up.",
      },
      {
        q: "What binding should I choose for a catalog?",
        a: "Saddle stitching for slim books, perfect binding for thick ones that need a spine, and wire-O for manuals that need to lie flat. I'll recommend one when I see the page count.",
      },
      {
        q: "Why does a booklet need pages in multiples of four?",
        a: "Each sheet in a stapled booklet folds in half and makes four pages. If your content doesn't fill a multiple of four, add a notes page or an extra photo.",
      },
      {
        q: "What paper is best for a catalog?",
        a: "Gloss text paper inside makes photos look sharp, with a heavier cover stock outside to protect the pages. Matte works better for text-heavy manuals.",
      },
      {
        q: "Can you print a small number of booklets?",
        a: "Yes. Small runs are fine. Tell me how many you need and I'll quote it.",
      },
      {
        q: "Can you design my catalog?",
        a: "Yes. Send your products, photos and text, and I'll lay out the pages with a proof for you to approve. First order? Design and setup are free.",
      },
    ],
    related: ["flyers-and-brochures", "presentation-folders", "business-printing", "trade-show-displays"],
    industries: ["construction", "food-and-beverage", "auto-dealers"],
  },
  {
    slug: "menus-and-table-tents",
    group: "print",
    navLabel: "Menus and table tents",
    blurb: "Laminated menus, takeout menus, table tents and specials inserts.",
    metaTitle: "Menu Printing and Table Tents in Columbus",
    metaDescription:
      "Menu printing in Columbus, Ohio for restaurants, bars and cafes. Laminated menus, takeout menus, table tents and specials inserts. Free quote in 24 hours.",
    eyebrow: "Menus and table tents",
    h1: "Menu Printing and Table Tents in Columbus",
    tagline: "Menus and table tents that hold up to a dinner rush.",
    lede: "Menu printing in Columbus for restaurants, bars, cafes and food trucks. Laminated menus, folded menus, takeout menus and table tents that push your specials.",
    hero: {
      src: "/assets/brochures-flyers-layou.jpg",
      alt: "Folded cards and booklets standing on a table, printed with a red Ohio-shaped Buckeye logo",
    },
    options: [
      {
        name: "Laminated menus",
        detail: "Heavy stock sealed in lamination. Wipeable and built for daily handling.",
      },
      {
        name: "Bi-fold menus",
        detail: "Folded once into four pages. A common format for sit-down restaurants.",
      },
      {
        name: "Tri-fold menus",
        detail: "Three panels for apps, entrees, desserts and drinks in one piece.",
      },
      {
        name: "Paper and disposable menus",
        detail: "Low-cost menus for events, catering and places that hand a fresh one to every guest.",
      },
      {
        name: "Table tents",
        detail: "Folded cards that stand on tables and bar tops to push specials and happy hour.",
      },
      {
        name: "Takeout menus",
        detail: "Menus for the counter, the bag and the neighborhood, with your phone and ordering link.",
      },
      {
        name: "Specials and drink inserts",
        detail: "Clip-in or slide-in pages for seasonal items, so the main menu stays put.",
      },
      {
        name: "Catering menus",
        detail: "Menus for parties, offices and events that sell your catering side.",
      },
    ],
    uses: [
      "Restaurants and diners",
      "Bars, breweries and taprooms",
      "Coffee shops and bakeries",
      "Food trucks",
      "Pizza and takeout shops",
      "Caterers and event venues",
    ],
    sections: [
      {
        heading: "Laminated, cardstock or paper menus?",
        body: "Laminated menus are for places where menus get handled all day. The lamination seals the paper, so you can wipe off spills and grease and keep using it. Diners, family restaurants and bars usually go this route.\n\nCardstock menus without lamination feel nicer in the hand and cost less, but they wear faster. They work for places with a calmer dining room or menus that change often.\n\nPaper menus are the cheapest per piece. Use them for takeout, events and catering, or if you hand a fresh menu to every guest. A lot of Columbus restaurants mix all three: laminated for the dining room, paper for the bag.",
      },
      {
        heading: "Table tents that sell specials",
        body: "A table tent sits right where people are deciding what to order. Use it for the things your menu can't do well: today's special, happy hour, a seasonal drink, dessert, or a QR code for online ordering and reviews.\n\nKeep it to one message per side. A tent crowded with text gets ignored the same way a crowded window does.\n\nTable tents are cheap to reprint, so swap them with the seasons. Print the fall drink list, then the holiday list, then patio season. Your core menu stays the same and the tables still feel fresh.",
      },
      {
        heading: "Takeout menus and keeping prices current",
        body: "Food costs change, and menus have to keep up. If your prices move often, print smaller runs more often instead of a big stack that goes out of date. Specials inserts let you change the seasonal items without reprinting the whole menu.\n\nTakeout menus should do one job: get the next order. Put your phone number and ordering link at the top, list your hours, and add a QR code that opens your online menu.\n\nA takeout menu works in the bag, at the counter and on the doorstep. Pair it with door hangers or EDDM postcards to reach the homes around your kitchen in Columbus and Central Ohio.",
      },
    ],
    faqs: [
      {
        q: "How much does menu printing cost?",
        a: "It depends on the size, the paper, lamination and the quantity. Send me your current menu and how many you need, and I'll quote it within 24 hours.",
      },
      {
        q: "Should restaurant menus be laminated?",
        a: "If guests handle them every day, yes. Lamination makes menus wipeable and keeps them looking clean longer. Paper menus make more sense for takeout and events.",
      },
      {
        q: "Can you add a QR code to my menu?",
        a: "Yes. A QR code can open your online ordering, your digital menu or your review page. I scan the code on the proof before it prints.",
      },
      {
        q: "What size table tent should I get?",
        a: "Pick a size that fits your tables without blocking plates or conversation. Small tents suit bar tops and two-tops. Taller tents work for drink lists and dessert features.",
      },
      {
        q: "How often should I reprint my menu?",
        a: "Whenever your prices or items change enough that staff start explaining corrections. Shorter runs and specials inserts make updates cheaper.",
      },
      {
        q: "Can you design my menu?",
        a: "Yes. Send your current menu or your item list, your logo and any photos, and I'll lay it out with a proof to approve. First order? Design and setup are free.",
      },
    ],
    related: ["door-hangers", "eddm-postcards", "window-graphics", "custom-labels"],
    industries: ["food-and-beverage"],
  },
];
