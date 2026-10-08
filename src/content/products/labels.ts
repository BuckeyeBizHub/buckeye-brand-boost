import type { ProductPage } from "../types";

// Labels, decals and lettering: the lead group. Order here is menu order.
export const LABEL_PAGES: ProductPage[] = [
  {
    slug: "custom-labels",
    group: "labels",
    navLabel: "Custom labels",
    blurb: "Roll labels and product labels for jars, bags, bottles and boxes.",
    metaTitle: "Custom Labels and Roll Labels in Columbus, Ohio",
    metaDescription:
      "Custom product labels and roll labels for Columbus businesses. 1,000 roll labels from $179. Start small, reorder bigger. Free quote in 24 hours.",
    eyebrow: "Labels",
    h1: "Custom labels for the stuff you sell.",
    lede: "Roll labels for jars, bags, bottles and boxes. Start with a short run, see it on the shelf, then reorder bigger when it sells.",
    hero: { src: "/assets/banner-decals-stickers.jpg", alt: "Sheet of custom printed logo stickers and labels in different shapes" },
    prices: ["roll-labels", "vinyl-decals"],
    options: [
      {
        name: "Roll labels",
        detail: "Labels on a roll, ready for hand application or a label machine. Squares, circles, rectangles or a custom shape.",
      },
      {
        name: "Product labels",
        detail: "Front labels, ingredient panels and back labels for food, candles, soap, sauces and baked goods.",
      },
      {
        name: "Waterproof and freezer labels",
        detail: "BOPP film that holds up to condensation, ice and handling. Good for drinks, coolers and frozen goods.",
      },
      {
        name: "Clear and metallic labels",
        detail: "Clear film for a no-label look on glass. Silver film for a premium shelf look.",
      },
      {
        name: "Paper labels",
        detail: "The lowest cost per label for dry goods, shipping boxes and short-term use.",
      },
      {
        name: "Sheet labels and stickers",
        detail: "Labels and stickers cut one at a time for bags, boxes and thank-you notes.",
      },
    ],
    uses: [
      "Bakeries, bagel shops and coffee roasters",
      "Sauces, jams, honey and other jarred goods",
      "Candles, soap and bath products",
      "Breweries, wineries and distilleries",
      "Shipping boxes and mailers",
      "Farm market and pop-up vendors",
    ],
    sections: [
      {
        heading: "Start with a few hundred. Reorder by the thousand.",
        body: "Most label customers don't know their real volume on day one. That's fine. Order a short run, put it on the product, and see how it looks and sells.\n\nWhen you reorder, the price per label drops fast. The setup is already done, the file is already approved, and I already know your jar.",
      },
      {
        heading: "Get the material right the first time",
        body: "The wrong label material is the most common mistake I see. Paper labels smear when they get wet. Film labels cost a little more and survive the fridge, the cooler and the dishwasher-wet hands.\n\nTell me what the label goes on and where it lives: shelf, fridge, freezer, outdoors. I'll match the material and finish to it before anything prints.",
      },
      {
        heading: "Sizes, shapes and rolls that fit your process",
        body: "Hand-applying? I'll set up the roll so labels peel easily and there are not too many per roll. Using a label machine? Send me the core size and the direction the label comes off the roll, and it'll be printed to fit.\n\nNot sure on size? Measure the flat area of the container and send a photo. I'll suggest a size that leaves a little room on each side.",
      },
    ],
    story: {
      heading: "500 labels turned into 5,000.",
      body: "A Columbus bagel shop started with a 500-label order to try it out. The labels worked, the product sold, and the next order was 5,000. That's how most of my label customers start: small, then bigger once they know it works.",
    },
    faqs: [
      {
        q: "What's the smallest label order you'll do?",
        a: "Small runs are fine. Tell me the quantity you need and I'll quote it. A short first run is a smart way to test a new label before you buy thousands.",
      },
      {
        q: "How much do custom labels cost?",
        a: "1,000 roll labels at 2 x 2 start at $179. Price depends on size, quantity, material and finish. The price per label drops a lot as quantity goes up.",
      },
      {
        q: "Can labels go in the fridge or get wet?",
        a: "Yes, with the right material. Film labels like BOPP hold up to moisture and cold. Paper labels don't. Tell me where the product lives and I'll match the material.",
      },
      {
        q: "Do you do food labels with ingredients and nutrition facts?",
        a: "Yes. Send your ingredient list and nutrition panel and it gets laid out on the label. You're responsible for the content being accurate. I make sure it prints clean and readable.",
      },
      {
        q: "Can you design the label?",
        a: "Yes. Send your logo and what needs to be on it. If you already have a print-ready file, even better.",
      },
      {
        q: "How long do labels take?",
        a: "Your quote comes back within 24 hours. Production time depends on the material and quantity, and I'll give you a date with the quote.",
      },
    ],
    related: ["decals-and-stickers", "packaging", "window-graphics", "vehicle-lettering"],
    industries: ["food-and-beverage"],
  },
  {
    slug: "decals-and-stickers",
    group: "labels",
    navLabel: "Decals and stickers",
    blurb: "Die-cut stickers, vinyl decals, hard hat stickers and safety labels.",
    metaTitle: "Custom Decals and Stickers in Columbus, Ohio",
    metaDescription:
      "Custom vinyl decals, die-cut stickers, hard hat stickers and safety labels for Columbus businesses. 100 vinyl decals from $85. Free quote in 24 hours.",
    eyebrow: "Decals and stickers",
    h1: "Vinyl decals and stickers for trucks, gear and giveaways.",
    lede: "Custom decals and stickers for Columbus businesses: trucks, hard hats, equipment, windows and handouts. Tell me where it's going to live and I'll match the vinyl to it. Short first runs are fine.",
    hero: {
      src: "/assets/decal-bumper-stickers.jpg",
      alt: "Assorted printed bumper stickers and die-cut vinyl stickers laid out on a white surface",
    },
    prices: ["vinyl-decals", "roll-labels"],
    options: [
      {
        name: "Die-cut stickers",
        detail: "Cut right to the outline of your logo. Good for handouts, laptops, toolboxes and water bottles.",
      },
      {
        name: "Custom vinyl decals",
        detail: "Outdoor vinyl for trucks, trailers, equipment and signs. Add a laminate for sun, scratches and washing.",
      },
      {
        name: "Bumper stickers",
        detail: "The classic rectangle for cars, schools, teams, campaigns and events.",
      },
      {
        name: "Hard hat stickers",
        detail: "Company logo, crew name or role stickers like First Aid or Safety Officer. Reflective vinyl is available.",
      },
      {
        name: "Safety and warning labels",
        detail: "Caution, warning and PPE labels in the familiar OSHA-style layout for shop walls, machines and doors.",
      },
      {
        name: "Equipment decals",
        detail: "Company name, asset numbers and warning decals for machines, trailers, mowers and tools.",
      },
      {
        name: "QR code stickers",
        detail: "Scan-to-review, scan-to-pay or scan-to-book codes for doors, invoices, job signs and packaging.",
      },
      {
        name: "Stickers on a roll",
        detail: "For packaging or handing out in volume. Roll format peels fast, and the price per sticker drops with quantity.",
      },
    ],
    uses: [
      "Roofing and construction crews",
      "Hard hats and job site safety",
      "Shop floors and machinery",
      "Trucks, trailers and toolboxes",
      "Trade show and event giveaways",
      "Coffee shops, breweries and retail bags",
      "Review and payment QR codes",
      "Schools, teams and campaigns",
    ],
    sections: [
      {
        heading: "What's the difference between a decal and a sticker?",
        body: "Most people use the words the same way, and that's fine. In the print world, a sticker is usually printed on paper or thin vinyl and made to hand out, stick on a laptop or seal a bag. A decal is usually heavier outdoor vinyl made to go on a truck, a window, a machine or a sign, and stay there.\n\nWhat matters more is where it's going. A sticker that lives in a desk drawer can be cheap paper. A decal on a dump truck tailgate needs outdoor vinyl and a laminate to stand up to sun, road salt and the pressure washer.\n\nTell me the surface and the conditions. I'll match the material, adhesive and finish before anything prints, and you'll see a proof first.",
      },
      {
        heading: "Hard hat stickers and safety labels for job sites",
        body: "Crews go through hard hat stickers fast. A logo sticker on every hat tells the site who's who. Role stickers like First Aid and CPR Trained or Safety Officer help people find the right person in a hurry. Reflective vinyl shows up when headlights or a flashlight hit it.\n\nFor shop walls and machines, I print caution, warning and notice labels in the standard OSHA-style layout: a colored header, a symbol and a short instruction. Send me the wording you need, or tell me the hazard and I'll lay it out.\n\nOne honest note: you're responsible for what the label says and where it goes. My job is making sure it prints clean, reads from a distance and holds up where you put it.",
        image: {
          src: "/assets/construction-safety-decals.jpg",
          alt: "Round First Aid and CPR Trained hard hat stickers next to green Safety Officer stickers",
        },
      },
      {
        heading: "QR code stickers people actually scan",
        body: "A QR sticker on your front door, your invoice or the back of a job sign is a cheap way to get reviews, payments and booked calls. A roofer can put one on a yard sign so a neighbor scans straight to the quote form.\n\nA few things make them work. Use a QR service that lets you change where the code points later, so you don't have to reprint when your page moves. Print it big enough to scan from where people will actually stand. And put a reason to scan next to it. \"Scan for a free estimate\" beats a bare code every time.\n\nI scan the code on the proof before it goes to print. If it doesn't scan, it doesn't print.",
      },
    ],
    faqs: [
      {
        q: "How much do custom stickers cost?",
        a: "100 vinyl decals at 3 x 3, cut to shape, start at $85. Bigger sizes, special vinyl like reflective, and a laminate change the price. The price per sticker drops as the quantity goes up.",
      },
      {
        q: "What's the smallest sticker order you'll do?",
        a: "Small runs are fine. Tell me how many you need and I'll quote it. Reorders get cheaper per piece once the file is set up.",
      },
      {
        q: "How long do outdoor vinyl decals last?",
        a: "It depends on the vinyl, the laminate and how much sun and washing it sees. Outdoor vinyl with a laminate lasts far longer than an unlaminated sticker. Tell me where it's going and I'll match the material to the job.",
      },
      {
        q: "Are vinyl stickers waterproof?",
        a: "Vinyl stickers handle rain, snow and washing. Paper stickers don't. If it's going outside, on a cooler or on a water bottle, ask for vinyl.",
      },
      {
        q: "Can you make reflective hard hat stickers?",
        a: "Yes. Reflective vinyl lights up when headlights or a flashlight hit it. Send your logo or the role names you need and I'll send a proof.",
      },
      {
        q: "Do you make DOT number decals?",
        a: "Yes. DOT and MC number lettering for trucks and trailers is on my vehicle lettering page, along with door lettering for your company name and phone.",
      },
      {
        q: "Can you design my sticker?",
        a: "Yes. Send your logo and an idea of the shape. You'll see and approve a proof before anything prints.",
      },
    ],
    related: ["custom-labels", "vehicle-lettering", "window-graphics", "wall-and-floor-graphics"],
    industries: ["construction", "roofing", "fleet-and-logistics", "food-and-beverage"],
  },
  {
    slug: "vehicle-lettering",
    group: "labels",
    navLabel: "Vehicle lettering",
    blurb: "Truck and van door lettering, DOT numbers and rear window graphics.",
    metaTitle: "Vehicle Lettering and DOT Decals in Columbus",
    metaDescription:
      "Vehicle lettering in Columbus for trucks and vans: door lettering, DOT number decals and rear window graphics. Both doors installed from $249. Free quote.",
    eyebrow: "Vehicle lettering",
    h1: "Put your name and number on the truck.",
    lede: "Vehicle lettering in Columbus for work trucks, vans and trailers. Your company name, phone and DOT number in cut vinyl, installed. It's the lowest-cost way to turn a plain truck into a work truck people remember.",
    hero: {
      src: "/assets/vehicle-wrap-before-after.jpg",
      alt: "Side of a white van shown blank on the left and with a red Ohio-shaped Buckeye Biz Hub logo on the right",
    },
    prices: ["door-lettering", "car-magnets", "vinyl-decals"],
    options: [
      {
        name: "Truck door lettering",
        detail: "Company name, phone and website on both doors in cut vinyl. Clean, readable and priced for a single truck.",
      },
      {
        name: "Van lettering",
        detail: "Door and side panel lettering for cargo and service vans, with room for a short service list.",
      },
      {
        name: "DOT and MC number decals",
        detail: "USDOT and MC numbers with your company name, sized and spaced so they read from the road.",
      },
      {
        name: "Cut vinyl lettering",
        detail: "Single-color letters with no background, cut from outdoor vinyl in colors that match your truck and logo.",
      },
      {
        name: "Rear window lettering",
        detail: "Website, phone or a short message across the back glass, or perforated film you can still see out of.",
      },
      {
        name: "Printed logo decals",
        detail: "Full-color logo decals for doors and tailgates when your logo has gradients, photos or lots of colors.",
      },
      {
        name: "Fleet decal kits",
        detail: "The same layout on every truck, with unit numbers, so the fleet matches. Easy to reorder when you add a vehicle.",
      },
      {
        name: "Trailer and box truck lettering",
        detail: "Big letters on big panels. Name, phone and services for trailers and box trucks.",
      },
    ],
    uses: [
      "Roofing and construction crews",
      "Lawn care trucks and trailers",
      "Plumbers, HVAC techs and electricians",
      "Box trucks and delivery vans",
      "Leased vehicles",
      "Small fleets adding one truck at a time",
      "Company cars for sales reps",
    ],
    sections: [
      {
        heading: "How much does truck lettering cost in Columbus?",
        body: "Door lettering on both doors, with your company name and phone in cut vinyl, starts at $249 installed. It's a smart first step for a new truck or a one-truck business.\n\nThe price goes up with the amount of copy, the number of colors and the size of the panels. A full-color printed logo costs more than cut letters. Adding a website, a service list, the tailgate or the back glass adds to it too.\n\nIf you're deciding between lettering and a wrap, start with what the truck has to do. Lettering puts your name and number on the road for the least money. A wrap turns the whole truck into an ad. I'll quote both if you want to compare them side by side.",
      },
      {
        heading: "DOT number decals: what goes on the truck",
        body: "If your truck needs a USDOT number, federal rules say it goes on both sides of the vehicle, in a color that contrasts with the paint, readable from 50 feet in daylight. The marking also needs your legal business name or the trade name on file. Add your MC number if you have one.\n\nWhether you need a DOT number is a question for FMCSA, not me. Once you have it, I'll lay out the lettering so it's the right size, spaced cleanly and easy to read. Send me your exact name and numbers as they appear on your registration.\n\nCut vinyl is the usual choice here. White on a dark truck, black on a white one. I check the contrast on the proof before anything gets cut.",
        image: {
          src: "/assets/decal-dot-numbers.png",
          alt: "Sample USDOT lettering layout with a company name, city, USDOT number, MC number and GVW",
        },
      },
      {
        heading: "Letter one truck now, match the fleet later",
        body: "A lot of small companies letter one truck and add from there. I keep the layout, colors and sizes on file, so truck two matches truck one and the reorder is quick.\n\nIf you run a small fleet in Central Ohio, ask about a decal kit: the same name, phone, logo and unit number on every vehicle. It's easier to budget, and your crews are easy to spot when they're out on jobs.\n\nOn leased vehicles, cut vinyl on factory paint usually comes off with heat when the lease ends. Check your lease terms first, and tell me the truck is leased so I can plan for it. Repainted panels can be less predictable, so mention any body work too.",
      },
    ],
    faqs: [
      {
        q: "How much does it cost to letter a truck?",
        a: "Both doors, with your name and phone in cut vinyl, start at $249 installed. More copy, more colors, printed logos and extra panels add to the price. Send a photo of the truck and what you want on it, and I'll quote it within 24 hours.",
      },
      {
        q: "Is vehicle lettering cheaper than a wrap?",
        a: "Yes, by a lot. Door lettering starts at $249 installed. A partial wrap on a van or pickup starts at $1,200. Lettering gets your name on the truck. A wrap turns the truck into a billboard.",
      },
      {
        q: "How long does vehicle lettering last?",
        a: "It depends on the vinyl, the color and how the truck is stored and washed. Outdoor cut vinyl is made for life on a work truck. Hand washing and keeping the pressure washer off the edges help it last.",
      },
      {
        q: "Can vehicle lettering be removed?",
        a: "Yes. Vinyl on factory paint usually comes off with heat and a little patience. Repainted panels and older paint are less predictable, so tell me about the truck's history before we start.",
      },
      {
        q: "What size do DOT numbers need to be?",
        a: "Federal rules require the USDOT number to be readable from 50 feet in daylight, on both sides of the truck, in a contrasting color. Bigger is safer. I'll size the lettering to your door and check it on the proof.",
      },
      {
        q: "Can you letter a trailer or box truck?",
        a: "Yes. Trailers and box trucks have big flat panels, which makes them a great spot for your name and phone in large letters. Send the panel size and a photo and I'll lay it out.",
      },
    ],
    related: ["car-magnets", "vehicle-wraps", "fleet-wraps", "decals-and-stickers"],
    industries: ["roofing", "construction", "lawn-care-landscaping", "fleet-and-logistics"],
  },
  {
    slug: "car-magnets",
    group: "labels",
    navLabel: "Car magnets",
    blurb: "Magnetic signs for personal cars and trucks you also use for work.",
    metaTitle: "Car Magnets and Magnetic Signs in Columbus",
    metaDescription:
      "Custom car magnets for Columbus businesses. Your name and number on the car for work, off for the weekend. A pair from $35. Free quote in 24 hours.",
    eyebrow: "Car magnets",
    h1: "Business on the car all week. Off for the weekend.",
    lede: "Custom car magnets put your business name and phone on a personal car or truck without anything permanent. On for work, off for the weekend. A pair of 12 x 18 magnets starts at $35.",
    hero: {
      src: "/assets/vehicle-decal-closeup.jpg",
      alt: "Red Ohio-shaped Buckeye Biz Hub logo with a black name bar on the white side of a vehicle",
    },
    prices: ["car-magnets", "door-lettering"],
    options: [
      {
        name: "Car door magnets",
        detail: "The standard. One for each front door with your logo, name and phone.",
      },
      {
        name: "Truck door magnets",
        detail: "Larger sizes for pickup doors and work trucks, when permanent lettering isn't an option yet.",
      },
      {
        name: "Real estate agent magnets",
        detail: "Brokerage logo, agent name and phone. Easy to move when you switch cars.",
      },
      {
        name: "Custom shape magnets",
        detail: "Cut to the outline of your logo instead of a rectangle.",
      },
      {
        name: "Tailgate and trailer magnets",
        detail: "For steel tailgates and trailer panels. Good for a second message on the back of the vehicle.",
      },
      {
        name: "Temporary promo magnets",
        detail: "A seasonal offer or a hiring message you'll pull off in a month.",
      },
    ],
    uses: [
      "Real estate agents",
      "Sales reps driving personal cars",
      "Lawn care and handyman side businesses",
      "Delivery and catering drivers",
      "Leased cars",
      "Family cars that double as work cars",
      "Seasonal promotions and hiring messages",
    ],
    sections: [
      {
        heading: "Car magnets or vehicle lettering?",
        body: "Magnets make sense when the car is yours, the business is part-time, or you share the vehicle with family. They go on in seconds and come off just as fast. A pair of 12 x 18 magnets starts at $35.\n\nLettering makes sense when the truck works every day. Cut vinyl looks cleaner, stays put on the highway and can't be pulled off the door by someone walking by. Door lettering on both doors starts at $249 installed.\n\nPlenty of people start with magnets, prove the business, then move to lettering on a dedicated work truck. That's a smart order to do it in, and I can set up both from the same design.",
      },
      {
        heading: "Will a magnet stick to my car?",
        body: "Magnets need flat steel. They won't hold on aluminum, fiberglass or plastic panels, and some newer trucks use aluminum body panels. Test the door with a fridge magnet before you order.\n\nThe magnet also needs full contact. Body lines, ribs, deep curves and trim leave gaps, and a gap lets wind get under the edge at highway speed. Measure the flattest area of the door and send me a photo. I'll pick a size that fits inside it.\n\nCommon sizes are 12 x 18, 12 x 24 and 18 x 24. Bigger reads better from a distance, but only if the door has the flat space for it.",
      },
      {
        heading: "How to take care of car magnets",
        body: "Take them off once a week, wipe the magnet and the door, and let both dry before you put them back. Dirt and moisture trapped underneath can mark the paint. Paint under a magnet that never moves can also fade differently from the rest of the door. In a Columbus winter, check for salt and slush under there too.\n\nPull them off before a car wash. Brushes and high pressure will catch an edge. If an edge has started to lift, take the magnet off for long highway drives.\n\nStore them flat or on a steel surface like a fridge or filing cabinet. Don't roll them tight or fold them, and keep them out of a hot trunk in summer.",
      },
    ],
    faqs: [
      {
        q: "How much do car magnets cost?",
        a: "A pair of 12 x 18 car magnets, 30 mil with rounded corners, starts at $35. Bigger sizes, custom shapes and larger quantities change the price. Reorders cost less per piece.",
      },
      {
        q: "Will car magnets damage my paint?",
        a: "Not if you take care of them. Remove them weekly, clean under them and let everything dry. Problems come from magnets left on for months with dirt and water trapped underneath.",
      },
      {
        q: "Can I go through a car wash with magnets on?",
        a: "Take them off first. Brushes and pressure washers can catch an edge and pull the magnet off or bend it.",
      },
      {
        q: "Do car magnets fly off on the highway?",
        a: "A magnet in full contact with a flat steel panel holds well. Trouble starts when it sits over a body line or an edge lifts and wind gets under it. Put it on flat steel, press it down edge to edge, and check it before long trips.",
      },
      {
        q: "What size car magnet should I get?",
        a: "Measure the flattest part of your door and go a little smaller than that. 12 x 18 is a common size for car doors. 12 x 24 and 18 x 24 suit bigger doors and trucks.",
      },
      {
        q: "Why won't a magnet stick to my truck?",
        a: "The panel is probably aluminum or fiberglass. Some newer trucks use aluminum bodies, and magnets won't hold on them. Vinyl door lettering is the better choice there.",
      },
    ],
    related: ["vehicle-lettering", "decals-and-stickers", "vehicle-wraps", "yard-signs-and-signage"],
    industries: ["real-estate", "lawn-care-landscaping", "construction"],
  },
  {
    slug: "window-graphics",
    group: "labels",
    navLabel: "Window graphics",
    blurb: "Storefront lettering, hours decals, frosted vinyl, window clings and perf film.",
    metaTitle: "Window Graphics and Lettering in Columbus",
    metaDescription:
      "Storefront window lettering, hours decals, frosted glass vinyl and one-way window film in Columbus. Hours and logo on one door from $149, installed.",
    eyebrow: "Window graphics",
    h1: "Lettering, frost and graphics for your storefront glass.",
    lede: "Window graphics in Columbus for storefronts, offices and work vans. Hours, logo, frosted privacy vinyl, clings and see-through perforated film. Your glass is the first thing people see, so put it to work.",
    hero: {
      src: "/photos/roofing-qr-sticker-scan.jpg",
      alt: "White QR code decal with scan-me lettering on a glass storefront door",
    },
    prices: ["window-lettering", "vinyl-decals"],
    options: [
      {
        name: "Storefront window lettering",
        detail: "Business name, logo, phone and website in cut vinyl on the glass.",
      },
      {
        name: "Hours decals",
        detail: "Store hours on the door in clean white or black vinyl, set up so a change doesn't mean redoing the whole door.",
      },
      {
        name: "Frosted glass vinyl",
        detail: "An etched-glass look for logos on doors and privacy bands on office and exam room glass.",
      },
      {
        name: "Perforated one-way window film",
        detail: "A full-color graphic on the outside. From inside, you can still see out.",
      },
      {
        name: "Window clings",
        detail: "Static clings with no adhesive. Easy to move and reuse for seasonal promos and sales.",
      },
      {
        name: "Rear window perf for vehicles",
        detail: "Perforated graphics for the back glass of vans, SUVs and trucks.",
      },
      {
        name: "QR code window decals",
        detail: "A scan-to-order, scan-to-book or scan-to-review code on the door or window.",
      },
    ],
    uses: [
      "Restaurants, coffee shops and bars",
      "Dental and medical offices",
      "Salons, spas and gyms",
      "Retail shops and boutiques",
      "Office suites and conference rooms",
      "Real estate and insurance offices",
      "Service vans and SUVs",
    ],
    sections: [
      {
        heading: "What should go on a storefront window?",
        body: "Start with what someone needs from the sidewalk or the parking lot: your name, what you do, your hours and how to reach you. That's it. A window crowded with copy gets ignored. If you're in a strip center, your glass may be the only sign you fully control, so make it count.\n\nPut the name and logo at eye level or above, where it reads from the street. Hours go on the door near the handle, where people look when they're deciding whether to pull. A phone number or website belongs where someone can read it after closing time.\n\nStorefront hours and logo lettering on one door or window starts at $149, installed. I'll mock it up on a photo of your glass so you see it before anything is cut.",
      },
      {
        heading: "Frosted vinyl, window clings or perforated film?",
        body: "Frosted vinyl gives glass an etched look for much less than real etching. Use it for a logo on a glass door, or a privacy band across an office or exam room window so people can't see straight in. Light still comes through.\n\nWindow clings hold on with static, not glue. They come off clean and can go back up next season, which makes them the right call for sales, holidays and promos you'll swap out.\n\nPerforated window film is printed on the outside and full of tiny holes. From outside you see the graphic. From inside you can still see out. It's the go-to for full-window graphics on storefronts and van back glass. It works best when it's brighter outside than inside, and it's harder to see through when the glass is wet.",
        image: {
          src: "/assets/vehicle-wrap-window.jpg",
          alt: "Perforated window film with white lettering across the rear doors of a silver van",
        },
      },
      {
        heading: "Inside or outside the glass?",
        body: "Most storefront lettering goes on the inside of the glass, reversed so it reads right from the street. It's out of the weather, out of reach of scrapers and squeegees, and it lasts longer for it.\n\nSome jobs belong outside. Tinted or reflective glass can hide graphics applied on the inside, and perforated film usually goes on the outside so the print shows. I'll look at your glass and tell you which side makes sense.\n\nOn vehicles, perf goes on the back glass and rear side windows. I keep it off the windshield and front door windows, because state law limits what can go there. That applies to work vans all over Central Ohio, so it's worth knowing before you design the back of the van.",
      },
    ],
    faqs: [
      {
        q: "How much does storefront window lettering cost?",
        a: "Hours and logo lettering on one door or window starts at $149, installed. More windows, bigger graphics, frosted vinyl and printed full-color pieces add to the price. Send a photo of your storefront and I'll quote it within 24 hours.",
      },
      {
        q: "Can you see out of perforated window film?",
        a: "Yes. From inside, the holes let you see out while people outside see the graphic. It works best in daylight, when it's brighter outside than inside. Rain on the glass makes it harder to see through.",
      },
      {
        q: "Are window decals removable?",
        a: "Yes. Cut vinyl comes off glass with a razor scraper and a little heat. Window clings peel right off and can be reused.",
      },
      {
        q: "Can I put a perforated graphic on my back window?",
        a: "Yes, on the rear glass and rear side windows of vans, SUVs and trucks. I keep it off the windshield and front side windows because state law limits what can go there.",
      },
      {
        q: "Will window lettering survive window cleaning?",
        a: "Lettering on the inside stays out of the way of most cleaning. Outside vinyl handles normal washing. Keep razor blades and scrapers off the edges either way.",
      },
      {
        q: "What happens when my hours change?",
        a: "Ask me to set your hours up as separate lines. Then a change means replacing one line instead of the whole door.",
      },
    ],
    related: ["wall-and-floor-graphics", "yard-signs-and-signage", "decals-and-stickers", "banners-and-flags"],
    industries: ["food-and-beverage", "dental", "medical-specialty", "real-estate"],
  },
  {
    slug: "wall-and-floor-graphics",
    group: "labels",
    navLabel: "Wall and floor graphics",
    blurb: "Wall murals, logo walls, wall decals and floor decals for wayfinding.",
    metaTitle: "Wall and Floor Graphics in Columbus, Ohio",
    metaDescription:
      "Wall murals, office logo walls, wall decals and floor graphics for Columbus businesses. Removable or permanent vinyl, matched to your surface. Free quote.",
    eyebrow: "Wall and floor graphics",
    h1: "Graphics for the walls and floors you already have.",
    lede: "Wall and floor graphics in Columbus for offices, shops, gyms and waiting rooms. A logo wall behind the front desk, a mural in the break room, or floor decals that tell people where to go. Removable or permanent, matched to your surface.",
    hero: {
      src: "/assets/printing-murals.jpg",
      alt: "Full-wall printed mural of orange canyons and a passenger jet in an office with desks and chairs",
    },
    options: [
      {
        name: "Wall murals",
        detail: "Full-wall printed graphics for offices, gyms, restaurants and waiting rooms.",
      },
      {
        name: "Office logo walls",
        detail: "Your logo in cut vinyl or print behind the front desk or in the conference room.",
      },
      {
        name: "Wall decals and lettering",
        detail: "Mission statements, values, room names and quotes in cut vinyl lettering.",
      },
      {
        name: "Floor decals",
        detail: "Laminated with an anti-slip finish for lobbies, stores and event floors.",
      },
      {
        name: "Wayfinding floor graphics",
        detail: "Arrows, lane lines, stand-here spots and directions to the front desk.",
      },
      {
        name: "Removable wall graphics",
        detail: "Lower-tack vinyl for leased space, seasonal displays and short-term promotions.",
      },
      {
        name: "Outdoor floor decals",
        detail: "Rough-surface film for sidewalks and entryways, made to grip concrete.",
      },
    ],
    uses: [
      "Dental and medical waiting rooms",
      "Office lobbies and conference rooms",
      "Gyms and training studios",
      "Restaurants, bars and breweries",
      "Retail stores and pop-ups",
      "Warehouses and shop floors",
      "Trade show and event floors",
    ],
    sections: [
      {
        heading: "Removable or permanent wall vinyl?",
        body: "Removable vinyl uses a lower-tack adhesive. It's made to come off without pulling paint, which makes it the right call for leased space, seasonal graphics and anything you'll change in a year or two. Permanent vinyl grips harder. It's built to stay, and it can take paint with it when it comes off. Use it for a logo wall you plan to keep.\n\nThe wall matters as much as the vinyl. Smooth painted drywall is easy. Textured walls, block and brick need a film made to conform into the texture, or the graphic will lift. Fresh paint needs time to cure before vinyl goes on, so tell me when the wall was painted.\n\nSend a photo of the wall up close and one from across the room. That tells me most of what I need.",
      },
      {
        heading: "Floor decals that hold up to foot traffic",
        body: "Floor graphics need a laminate with an anti-slip texture. A plain sticker on a floor is a slip hazard, and it wears through fast. Floor-rated material is made to be walked on, mopped and walked on again.\n\nThey work well on sealed concrete, tile, vinyl plank and finished wood. Carpet and rough outdoor surfaces need different material, so tell me what the floor is.\n\nUse them to point the way to the front desk, mark lines at the counter, show stand-here spots, put a logo at the entrance or call out a sale in a store aisle. Removable floor decals fit events and short promotions. I'll match the material to how long it needs to last and how hard the floor gets cleaned.",
        image: {
          src: "/assets/decal-floor-wall.jpg",
          alt: "Floor decal with a large arrow and the word Clearance on a wood floor",
        },
      },
      {
        heading: "Planning a logo wall or mural for your office",
        body: "Start with the wall people see first: behind the front desk, in the waiting room or across from the entrance. Send me the wall measurements and a few photos, including outlets, switches, thermostats and door frames. Those are what trip up a layout.\n\nA cut vinyl logo looks like it was painted on and suits most front desks. A printed mural covers the whole wall with photos, color or a big scene, and works for gyms, break rooms and kids' areas.\n\nYou'll see a mockup on a photo of your wall before anything prints. Trusted installers put it up, and I'll give you a date with the quote. I work with offices and shops across Columbus and Central Ohio, and you deal with me start to finish.",
      },
    ],
    faqs: [
      {
        q: "How much does a wall mural cost?",
        a: "It depends on the size of the wall, the material and the install. A cut vinyl logo costs less than a full printed mural. Send the measurements and a photo and I'll quote it within 24 hours.",
      },
      {
        q: "Will wall decals damage my paint?",
        a: "Removable vinyl is made to come off without pulling paint on a properly cured wall. Permanent vinyl can take paint with it. Tell me if you're in leased space and I'll use removable.",
      },
      {
        q: "Can vinyl go on a textured wall?",
        a: "Yes, with the right film. Standard vinyl lifts on orange peel, block and brick. Films made for textured walls get worked into the surface during install.",
      },
      {
        q: "Are floor decals slippery?",
        a: "Not when they're made right. Floor graphics get an anti-slip laminate. A plain sticker should never go on a floor.",
      },
      {
        q: "How long do floor decals last?",
        a: "It depends on foot traffic, cleaning and whether they're inside or outside. A decal at a busy entrance wears faster than one in a side hallway. Tell me how long you need it to last and I'll match the material.",
      },
      {
        q: "Do you install wall graphics?",
        a: "Yes. Trusted installers put them up, and I handle the whole job so you deal with one person start to finish.",
      },
    ],
    related: ["window-graphics", "decals-and-stickers", "trade-show-displays", "full-rebrand-kits"],
    industries: ["dental", "medical-specialty", "food-and-beverage"],
  },
];
