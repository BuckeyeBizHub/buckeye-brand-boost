import type { IndustryPage } from "./types";

// Industry pages. Order here is menu order.
export const INDUSTRY_PAGES: IndustryPage[] = [
  {
    slug: "roofing",
    navLabel: "Roofers",
    blurb: "Yard signs, door hangers, truck lettering and crew shirts for roofing companies.",
    metaTitle: "Roofing Yard Signs and Door Hangers Columbus",
    metaDescription:
      "Yard signs, door hangers, postcards, truck lettering and crew shirts for Columbus roofing companies. 10 yard signs from $95. Free quote in 24 hours.",
    eyebrow: "Roofing",
    h1: "Get the next roof on the same street.",
    lede: "Roofing marketing that works the neighborhood while your crew works the roof. Yard signs, door hangers, postcards, truck lettering and crew shirts for Columbus roofing companies, all through one person.",
    hero: {
      src: "/photos/roofing-hero-sunset-crew.jpg",
      alt: "Roofing crew in hard hats and safety vests working on a house roof at sunset",
    },
    needs: [
      {
        heading: "Yard signs on every job",
        body: "A sign in the yard while the crew works tells every neighbor who's doing the roof. Print enough to leave one at every job.",
        products: ["yard-signs-and-signage"],
      },
      {
        heading: "Door hangers for the neighbors",
        body: "Knock the houses around the job and leave a door hanger where nobody answers. Give them one reason to call.",
        products: ["door-hangers", "eddm-postcards"],
      },
      {
        heading: "Postcards after a storm",
        body: "Every Door Direct Mail reaches whole carrier routes without a mailing list. Good for the streets around a cluster of jobs.",
        products: ["eddm-postcards", "postcards"],
      },
      {
        heading: "Names on the trucks",
        body: "Door lettering on the pickups and a wrap on the van that sits in a driveway all day.",
        products: ["vehicle-lettering", "vehicle-wraps", "fleet-wraps"],
      },
      {
        heading: "Crews that look like one company",
        body: "Matching shirts, polos and hats so homeowners know who's on their roof. Hard hat stickers too.",
        products: ["embroidered-apparel", "decals-and-stickers"],
      },
      {
        heading: "Paperwork that closes the deal",
        body: "Business cards, folders for your estimates and contract forms with your name on them.",
        products: ["business-cards-printing", "presentation-folders", "business-printing"],
      },
    ],
    sections: [
      {
        heading: "What roofing marketing works in Columbus neighborhoods?",
        body: "The cheapest lead a roofer gets is the neighbor of a job you're already doing. People walk by, see the tear-off and wonder whether their roof is next. Give them your name and number right there.\n\nA yard sign at the job, door hangers on the houses around it and a postcard to the streets nearby cover that block three ways. None of it is fancy. It works because it shows up where a homeowner already has a reason to think about their roof.\n\nKeep the message simple: your name, what you do, a phone number big enough to read from the street and one offer, like a free inspection. I'll lay it out and send a proof before anything prints.",
      },
      {
        heading: "Get your signs before storm season, not after",
        body: "When hail or high wind comes through Central Ohio, every roofer in town wants signs and door hangers the same week. Order a stock of yard signs and door hangers before the season starts, and you're knocking doors while others are still waiting on print.\n\nKeep your files set up and approved with me, so a reorder is one phone call. Same layout, same colors, new quantity. If you want a storm version with a different offer, I'll make a second design and keep both on file.\n\nOne honest note: know the rules where you knock. Some communities require a permit for door-to-door sales or limit yard signs. Check before your crew heads out.",
      },
      {
        heading: "Make the crew and trucks match the yard sign",
        body: "Homeowners are letting you onto their property and up on their house. A crew in matching shirts and a truck with your name on the door makes that easier to say yes to.\n\nStart with what fits the budget. Door lettering on both doors of a pickup starts at $249 installed. Embroidered polos start at $29 each. When you're ready, a partial wrap turns the van into a sign that sits in a driveway all day.\n\nUse the same logo, colors and phone number on the trucks, shirts, yard signs and door hangers. When a neighbor sees your truck on Monday and your yard sign on Friday, they should know it's the same company. I keep all of it on file, so every reorder matches.",
      },
    ],
    featured: [
      "yard-signs-and-signage",
      "door-hangers",
      "eddm-postcards",
      "vehicle-lettering",
      "vehicle-wraps",
      "embroidered-apparel",
      "business-cards-printing",
    ],
    prices: ["yard-signs", "door-hangers", "door-lettering", "embroidered-polos"],
    faqs: [
      {
        q: "How much do roofing yard signs cost?",
        a: "10 yard signs at 18 x 24, printed on both sides with H-stakes, start at $95. Bigger quantities bring the price per sign down. Send your logo and phone number and I'll quote it within 24 hours.",
      },
      {
        q: "What should a roofing door hanger say?",
        a: "Your company name, what you do, one clear offer like a free inspection, and a phone number that's easy to read. A line like \"We're working on your neighbor's roof this week\" gives them a reason to keep it. Less copy gets read more often.",
      },
      {
        q: "Do door hangers or postcards work better for roofers?",
        a: "They do different jobs. Door hangers go on the houses your crew can walk to, so they're great around an active job. Postcards reach whole streets by mail, including ones you'd never knock. Plenty of roofers use both.",
      },
      {
        q: "Can you print estimate and contract forms?",
        a: "Yes. Send me your current form or what it needs to say, and I'll set it up with your logo and contact info. Tell me how many copies each form needs and I'll match the format.",
      },
      {
        q: "Can you design my yard sign and door hanger?",
        a: "Yes. First order? Design and setup are free. Send your logo, phone number and the offer you want to lead with, and you'll approve a proof before anything prints.",
      },
      {
        q: "Do you work with roofers outside Columbus?",
        a: "Yes. I work with companies across Central Ohio, including Dublin, Westerville, Grove City, Delaware and Newark. I come to you or work by phone and email, whichever is easier.",
      },
    ],
  },
  {
    slug: "construction",
    navLabel: "Contractors",
    blurb: "Jobsite banners, hard hat stickers, truck lettering and workwear for contractors.",
    metaTitle: "Contractor Jobsite Signs and Workwear Columbus",
    metaDescription:
      "Jobsite banners, hard hat stickers, truck lettering and workwear for Columbus contractors. Truck door lettering from $249 installed. Free quote in 24 hours.",
    eyebrow: "Construction",
    h1: "Signs on the fence, names on the trucks, logos on the crew.",
    lede: "Construction signs and workwear for Columbus contractors: jobsite banners, hard hat stickers, truck lettering and branded shirts. Every project you build is a chance to show who built it.",
    hero: {
      src: "/assets/construction-hero.jpg",
      alt: "Orange Road Work Ahead sign with workers in safety vests and a dump truck on a dirt road behind it",
    },
    needs: [
      {
        heading: "Jobsite banners and fence signs",
        body: "Put your name on the fence line for the whole project. Mesh banners let wind through on chain-link.",
        products: ["banners-and-flags", "yard-signs-and-signage"],
      },
      {
        heading: "Hard hat stickers and safety labels",
        body: "Logo stickers for every hat, role stickers like First Aid, and warning labels for the shop and trailers.",
        products: ["decals-and-stickers"],
      },
      {
        heading: "Truck and trailer lettering",
        body: "Company name, phone and USDOT number on the trucks, plus equipment decals with unit numbers.",
        products: ["vehicle-lettering", "fleet-wraps"],
      },
      {
        heading: "Workwear the crew will wear",
        body: "Embroidered polos for the office and site walks, tees and hoodies for the field, all with the same logo.",
        products: ["embroidered-apparel", "promotional-products"],
      },
      {
        heading: "Bids that look buttoned up",
        body: "Business cards, presentation folders and printed proposals that match the rest of your brand.",
        products: ["business-cards-printing", "presentation-folders", "business-printing"],
      },
      {
        heading: "Home shows and builder events",
        body: "A retractable banner, a table throw and something worth handing out.",
        products: ["trade-show-displays", "promotional-products"],
      },
    ],
    sections: [
      {
        heading: "What signs go on a construction site?",
        body: "Start with a sign that says who's building it. A banner on the fence or a sign at the entrance turns a project that runs for months into the longest-running ad you'll buy. Add your phone number and website, big enough to read from a passing car.\n\nOn chain-link, mesh banners are the usual pick because wind passes through instead of tearing at the grommets. For a sign that stays up the whole job, a rigid sign holds up better than a banner. Some sites also need directional signs for deliveries and parking.\n\nCheck with the owner or GC before anything goes on the fence, since some projects have their own sign rules. Send me the fence length and a photo, and I'll size it.",
      },
      {
        heading: "Hard hat stickers, safety labels and crew gear",
        body: "On a busy site, people need to know who's who. A logo sticker on every hard hat does that. Role stickers like First Aid and CPR Trained or Safety Officer help people find the right person fast, and reflective vinyl shows up when lights hit it.\n\nFor the shop, trailers and equipment, I print warning and notice labels and equipment decals with asset numbers. You decide what the label says and where it goes. I make sure it prints clean and holds up outside.\n\nWorkwear finishes the look. Embroidered polos start at $29 each, and screen printed T-shirts start at $14 each. Small runs are fine. Ask and I'll tell you the minimum for your item.",
      },
      {
        heading: "Start with one truck, match the fleet later",
        body: "Door lettering on both doors, with your name and phone in cut vinyl, starts at $249 installed. It's the cheapest way to make a plain pickup look like a company truck. If the truck needs a USDOT number, I'll lay it out with your legal name so it reads clean from the side.\n\nWhen you add a truck, I pull the same file and the new one matches the old one. Trailers and box trucks have big flat panels, so they're a good place for large lettering or a partial wrap.\n\nI work with contractors across Columbus and Central Ohio. You deal with me from the first quote to the install, and trusted installers do the work.",
      },
    ],
    featured: [
      "banners-and-flags",
      "decals-and-stickers",
      "vehicle-lettering",
      "embroidered-apparel",
      "yard-signs-and-signage",
      "trade-show-displays",
      "presentation-folders",
    ],
    prices: ["door-lettering", "vinyl-banner", "vinyl-decals", "embroidered-polos"],
    faqs: [
      {
        q: "How much does a jobsite banner cost?",
        a: "A 3 x 6 ft vinyl banner, hemmed with grommets, starts at $55. Bigger banners, mesh material and double-sided printing change the price. Send the size of the fence or wall and I'll quote it within 24 hours.",
      },
      {
        q: "What's the difference between a vinyl banner and a mesh banner?",
        a: "Mesh banners have small holes that let wind through, so they hold up better on fences. Solid vinyl shows color a little brighter and works well on walls or in calmer spots. Tell me where it hangs and I'll recommend one.",
      },
      {
        q: "Can you make reflective hard hat stickers?",
        a: "Yes. Reflective vinyl lights up when headlights or a flashlight hit it. Send your logo or the role names you need and you'll get a proof.",
      },
      {
        q: "Do you letter trucks with USDOT numbers?",
        a: "Yes. Send your legal business name and numbers exactly as they appear on your registration. Whether you need a USDOT number is a question for FMCSA. Once you have it, I'll handle the layout.",
      },
      {
        q: "Can you design our stickers and banners?",
        a: "Yes. First order? Design and setup are free. Send your logo and what you need on it, and you'll approve a proof before anything prints.",
      },
      {
        q: "Can we order a small batch first?",
        a: "Yes. Small first orders are welcome. A few shirts or one truck is a good way to check the look before you outfit the whole crew, and reorders cost less per piece.",
      },
    ],
  },
  {
    slug: "dental",
    navLabel: "Dental practices",
    blurb: "Office signs, appointment cards, staff apparel and referral thank-yous for dentists.",
    metaTitle: "Dental Office Signs and Printing in Columbus",
    metaDescription:
      "Dental office signs, business and appointment cards, staff apparel and referral gifts in Columbus. 500 business cards from $29. Free quote in 24 hours.",
    eyebrow: "Dental",
    h1: "Print, signs and staff apparel for the dental office.",
    lede: "Dental office printing and signs for practices in Columbus and Central Ohio: appointment cards, letterhead, door lettering, staff polos and thank-yous for referring doctors. One person handles all of it, so your front desk doesn't have to.",
    hero: {
      src: "/assets/dental-printed-materials.jpg",
      alt: "Black and marble dental business card with a tooth logo next to an appointment reminder card",
    },
    needs: [
      {
        heading: "Cards for the front desk",
        body: "Business cards, appointment cards and recall postcards. The pieces that go home with every patient.",
        products: ["business-cards-printing", "business-printing", "postcards"],
      },
      {
        heading: "Letterhead and referral pads",
        body: "Letterhead, envelopes and referral forms that look like they came from the same office.",
        products: ["letterhead-and-envelopes", "business-printing"],
      },
      {
        heading: "Signs on the glass and walls",
        body: "Hours and logo on the door, frosted privacy film on interior glass and a logo wall behind the front desk.",
        products: ["window-graphics", "wall-and-floor-graphics"],
      },
      {
        heading: "Staff apparel that matches",
        body: "Embroidered polos and jackets for the team, in your practice colors.",
        products: ["embroidered-apparel"],
      },
      {
        heading: "Thank-yous for referring offices",
        body: "Branded gifts and treats for referring offices, patients who finish treatment and your own team.",
        products: ["promotional-products"],
      },
      {
        heading: "A new name or a refresh",
        body: "A new logo, a new name or a practice joining a group. Every printed and worn piece gets updated together.",
        products: ["full-rebrand-kits"],
      },
    ],
    sections: [
      {
        heading: "What printing does a dental office need?",
        body: "Most practices run on a short list: business cards, appointment cards, recall postcards, letterhead and envelopes. Specialists add referral pads and report letterhead for the general dentists who send them patients.\n\nThe trouble usually isn't the list. It's that each piece was ordered at a different time from a different place, so the logo and colors drift. Send me what you have now, and I'll set everything up from one set of files so the next reorder matches the last one.\n\n500 business cards, full color on both sides, start at $29. Once I have your files, a reorder is one email from the front desk.",
      },
      {
        heading: "Signs patients see before the front desk",
        body: "Patients size up the office from the parking lot. Clean lettering on the door with your name and hours tells them they're in the right place. Hours and logo lettering on one door starts at $149, installed.\n\nInside, frosted vinyl gives glass an etched look and adds privacy to consult rooms and treatment areas without blocking light. A logo wall behind the front desk makes a waiting room feel finished. Removable vinyl is the safer pick in leased space.\n\nI work with offices across Columbus and Central Ohio, and I'll mock the lettering up on a photo of your door before anything gets cut.",
      },
      {
        heading: "Thank-yous that keep referring offices close",
        body: "Referrals keep a lot of practices busy, especially specialists. A thank-you that shows up at the referring office with your name on it is a simple way to stay on their mind.\n\nI can put your logo on useful things: drinkware, pens, notepads, bags and treats for the break room. With 4,300+ vetted suppliers, there's plenty to pick from, and I'll steer you toward what gets used instead of what sits in a drawer.\n\nPick a few moments a year, like the holidays or a big referral month, and I'll keep the order and artwork on file. Each round after the first is quick.",
      },
    ],
    featured: [
      "business-cards-printing",
      "letterhead-and-envelopes",
      "window-graphics",
      "wall-and-floor-graphics",
      "embroidered-apparel",
      "promotional-products",
      "full-rebrand-kits",
    ],
    prices: ["business-cards", "window-lettering", "embroidered-polos"],
    faqs: [
      {
        q: "How much do dental business cards cost?",
        a: "500 business cards, full color on both sides, start at $29. Appointment lines on the back, special paper or rounded corners change the price. Send your current card and I'll quote it within 24 hours.",
      },
      {
        q: "Can you print appointment cards and recall postcards?",
        a: "Yes. I'll set them up with your logo, address and phone. Tell me how your front desk fills them out and I'll leave the right space to write.",
      },
      {
        q: "Can frosted vinyl go on our interior office glass?",
        a: "Yes. Frosted vinyl gives glass an etched look and adds privacy while letting light through. It can be a full band, your logo or a simple pattern.",
      },
      {
        q: "Do you do staff apparel for dental offices?",
        a: "Yes. Embroidered polos with your logo on the left chest start at $29 each. Small runs are fine. Ask and I'll tell you the minimum for your item.",
      },
      {
        q: "Can you design our cards and signs?",
        a: "Yes. First order? Design and setup are free. Send your logo and the pieces you use now, and you'll approve a proof before anything prints.",
      },
      {
        q: "Can you help with a rebrand or a practice name change?",
        a: "Yes. I'll list everything with your name on it: signs, cards, letterhead, apparel and forms. Then it all gets updated together, so nothing old is left behind.",
      },
    ],
  },
  {
    slug: "medical-specialty",
    navLabel: "Medical practices",
    blurb: "Office signs, patient printing, staff apparel and referral gifts for medical practices.",
    metaTitle: "Medical Practice Printing and Signs Columbus",
    metaDescription:
      "Printing, office signs, staff apparel and referral gifts for Columbus medical practices, chiropractors and PT clinics. 500 business cards from $29. Free quote.",
    eyebrow: "Medical and specialty",
    h1: "Signs, print and apparel for the practice.",
    lede: "Medical practice printing and signs for clinics, chiropractors, physical therapists, vets and specialists in Columbus. Cards, forms, door lettering, staff apparel and thank-yous for referring doctors, all through one person.",
    hero: {
      src: "/assets/industry-medical.jpg",
      alt: "Four smiling medical office staff at a front counter with clipboards, a laptop and a stethoscope",
    },
    needs: [
      {
        heading: "Patient-facing print",
        body: "Business cards, appointment cards, intake forms and take-home sheets that match each other.",
        products: ["business-cards-printing", "business-printing", "flyers-and-brochures"],
      },
      {
        heading: "Referral materials",
        body: "Referral pads, letterhead and presentation folders for the doctors who send you patients.",
        products: ["letterhead-and-envelopes", "presentation-folders"],
      },
      {
        heading: "Office signs and privacy film",
        body: "Door lettering, frosted glass for exam rooms and directional signs in the hallway.",
        products: ["window-graphics", "wall-and-floor-graphics", "yard-signs-and-signage"],
      },
      {
        heading: "Staff apparel",
        body: "Embroidered polos and jackets so patients can tell who works there.",
        products: ["embroidered-apparel"],
      },
      {
        heading: "Health fairs and community events",
        body: "Retractable banners, table covers and giveaways for health fairs, school visits and charity runs.",
        products: ["trade-show-displays", "promotional-products"],
      },
    ],
    sections: [
      {
        heading: "Printing a medical practice uses every week",
        body: "Every practice has a stack of printed pieces: business cards, appointment cards, intake and consent forms, take-home care sheets and referral pads. They get used fast, and they're often reordered in a hurry from wherever is quickest.\n\nThat's how a practice ends up with three versions of its logo. Send me what you use now, and I'll set every piece up from the same files. Reorders match, and your staff sends one email instead of hunting down a vendor.\n\nYou control the content of anything clinical, like forms and care instructions. My job is a clean layout, readable type and the right quantities.",
      },
      {
        heading: "Signs and frosted glass for the office",
        body: "Start at the door. Your name, hours and phone in clean vinyl tell a new patient they found the right place. Hours and logo lettering on one door starts at $149, installed.\n\nInside, frosted vinyl on exam room and office glass adds privacy without blocking light. Wall lettering and a logo behind the front desk make the waiting room feel put together. Floor and wall graphics can point people to check-in, imaging or the lab.\n\nIf you're in leased space or a medical building with sign rules, tell me up front. I'll work within the landlord's requirements and use removable vinyl where it makes sense.",
      },
      {
        heading: "Staying in front of referring doctors",
        body: "For a lot of specialty practices, referrals are the business. Doctors refer to people they remember and trust. A clean referral pad on their desk and a thank-you with your name on it help with the remembering part.\n\nI can source branded gifts and useful things for referring offices: notepads, pens, drinkware and treats for the staff room. With 4,300+ vetted suppliers to choose from, I'll point you to what actually gets used.\n\nFor health fairs and community events, a retractable banner starts at $129 with the stand included. Pair it with a table cover and a simple handout, and you're set for the year's events in Columbus and Central Ohio.",
      },
    ],
    featured: [
      "business-cards-printing",
      "business-printing",
      "window-graphics",
      "wall-and-floor-graphics",
      "embroidered-apparel",
      "promotional-products",
      "trade-show-displays",
    ],
    prices: ["business-cards", "window-lettering", "embroidered-polos", "retractable-banner"],
    faqs: [
      {
        q: "How much do business cards cost for a medical office?",
        a: "500 business cards, full color on both sides, start at $29. Special paper, rounded corners or appointment lines on the back change the price. Reorders are quick once your file is set up.",
      },
      {
        q: "Can you print our intake forms and patient handouts?",
        a: "Yes. Send the current version and I'll set it up clean and readable. You're responsible for the content. I make sure it prints right and matches the rest of your materials.",
      },
      {
        q: "What is frosted window film used for in a medical office?",
        a: "Privacy. It goes on exam room, office and conference room glass so people can't see straight in, while light still comes through. It can also carry your logo on a glass door.",
      },
      {
        q: "Do you make staff polos for medical practices?",
        a: "Yes. Embroidered polos with your logo start at $29 each. Small runs are fine. Ask and I'll tell you the minimum for your item.",
      },
      {
        q: "Can you design our printed materials?",
        a: "Yes. First order? Design and setup are free. Send your logo and what you use now, and you'll see and approve a proof before anything prints.",
      },
      {
        q: "Do you work with practices that have more than one location?",
        a: "Yes. I keep the files and specs on record, so every location gets the same cards, signs and apparel. Each office can order on its own and still match.",
      },
    ],
  },
  {
    slug: "lawn-care-landscaping",
    navLabel: "Lawn care companies",
    blurb: "Door hangers, yard signs, truck lettering and crew shirts for lawn and landscaping crews.",
    metaTitle: "Lawn Care Door Hangers and Yard Signs Columbus",
    metaDescription:
      "Door hangers, yard signs, truck and trailer lettering and crew shirts for Columbus lawn care and landscaping companies. 500 door hangers from $179. Free quote.",
    eyebrow: "Lawn care and landscaping",
    h1: "Your trucks are on every street. Put your name on them.",
    lede: "Lawn care marketing for Columbus landscaping and mowing companies: door hangers, yard signs, truck and trailer lettering and crew shirts. Your crews already spend all day in the neighborhoods where your next customers live.",
    hero: {
      src: "/assets/lawncare-hero.jpg",
      alt: "Close-up of a freshly cut green lawn with trees blurred in the background",
    },
    needs: [
      {
        heading: "Door hangers for the route",
        body: "Hang them on the houses next to the ones you already mow. Spring signups, fall cleanup and snow removal.",
        products: ["door-hangers", "eddm-postcards"],
      },
      {
        heading: "Yard signs on finished jobs",
        body: "A sign on a fresh install or a clean yard sells the next one on the street.",
        products: ["yard-signs-and-signage"],
      },
      {
        heading: "Truck and trailer lettering",
        body: "Name and phone on the truck doors, bigger lettering on the trailer, decals on the mowers.",
        products: ["vehicle-lettering", "fleet-wraps", "decals-and-stickers"],
      },
      {
        heading: "Crew shirts",
        body: "Tees for the summer crew, polos for whoever runs the estimates.",
        products: ["embroidered-apparel"],
      },
      {
        heading: "Cards and estimate forms",
        body: "Business cards for every crew lead and estimate forms that look professional.",
        products: ["business-cards-printing", "business-printing"],
      },
    ],
    sections: [
      {
        heading: "Door hangers that fill the route",
        body: "The best new lawn care customers live next door to the ones you already have. Your crew is on that street every week, so it costs almost nothing extra to hang a door hanger on the houses around each job.\n\nTime them to the season. Spring signups in late winter, fall cleanup in late summer, snow removal before the first storm. One clear offer per hanger works better than a list of everything you do.\n\n500 door hangers start at $179. For neighborhoods you don't service yet, Every Door Direct Mail postcards reach every house on a carrier route without a mailing list.",
      },
      {
        heading: "Lettering for trucks, trailers and equipment",
        body: "A lawn truck parked on a street for an hour is a sign people actually look at. Door lettering on both doors, with your name and phone, starts at $249 installed. That's enough to turn a plain pickup into a company truck.\n\nThe trailer is the bigger opportunity. Its flat sides are made for large lettering or a partial wrap, and neighbors stare at it while your crew works. Add logo decals to the mowers and equipment too.\n\nKeep the phone number big and the copy short. Someone driving by has a few seconds, so your name, what you do and a number is plenty.",
      },
      {
        heading: "Plan the season before it starts",
        body: "Spring hits fast in Central Ohio. Once the grass starts growing, you won't have time to chase print. Order crew shirts, yard signs and door hangers in the slow months, so they're on the shelf when the phone starts ringing.\n\nScreen printed T-shirts start at $14 each and suit summer crews. 10 yard signs, printed on both sides with stakes, start at $95. Put one in every yard you finish, with the homeowner's OK.\n\nI keep your files on record, so a mid-season reorder is one call. You deal with me from the quote to delivery.",
      },
    ],
    featured: [
      "door-hangers",
      "yard-signs-and-signage",
      "vehicle-lettering",
      "fleet-wraps",
      "embroidered-apparel",
      "eddm-postcards",
      "business-cards-printing",
    ],
    prices: ["door-hangers", "yard-signs", "door-lettering", "screen-printed-tees"],
    faqs: [
      {
        q: "How much do door hangers cost?",
        a: "500 door hangers at 4.25 x 11, full color on both sides with the hole and slit, start at $179. Larger runs bring the price per piece down. Reorders are fast once your file is set up.",
      },
      {
        q: "When should a lawn care company hand out door hangers?",
        a: "Before each season's buying decision. Late winter for spring signups, late summer for fall cleanup and early fall for snow removal. Hang them on the houses around the yards you already service.",
      },
      {
        q: "Can you letter a landscaping trailer?",
        a: "Yes. Trailers have big flat panels, which makes them a great spot for your name and phone in large letters. Send a photo and the panel size and I'll lay it out.",
      },
      {
        q: "Do you make decals for mowers and equipment?",
        a: "Yes. Outdoor vinyl decals with your logo or unit numbers work on mowers, trailers and equipment. 100 vinyl decals at 3 x 3, cut to shape, start at $85.",
      },
      {
        q: "Can you design our door hanger?",
        a: "Yes. First order? Design and setup are free. Send your logo, your services and one offer, and you'll approve a proof before anything prints.",
      },
      {
        q: "Do you work with lawn care companies outside Columbus?",
        a: "Yes. I work with crews across Central Ohio, including Hilliard, Gahanna, Westerville, Delaware and Mount Vernon. I come to you or work by phone and email, whichever is easier.",
      },
    ],
  },
  {
    slug: "real-estate",
    navLabel: "Real estate agents",
    blurb: "Yard signs, open house signs, car magnets, business cards and postcards for agents.",
    metaTitle: "Real Estate Signs and Agent Printing Columbus",
    metaDescription:
      "Real estate yard signs, open house signs, business cards, car magnets and just listed postcards for Columbus agents. 10 yard signs from $95. Free quote.",
    eyebrow: "Real estate",
    h1: "Signs, cards and mailers for agents and teams.",
    lede: "Real estate signs and marketing print for Columbus agents, teams and brokerages: open house signs, business cards, car magnets and just listed postcards. Order what this listing needs, and every reorder matches.",
    hero: {
      src: "/assets/industry-realestate.jpg",
      alt: "Open house yard sign with an agent photo, a name and an arrow, staked in front of a white two-story house",
    },
    needs: [
      {
        heading: "Open house and directional signs",
        body: "Yard signs with arrows that get buyers from the main road to the front door.",
        products: ["yard-signs-and-signage"],
      },
      {
        heading: "Business cards and folders",
        body: "Cards for every showing and folders for listing presentations and closing paperwork.",
        products: ["business-cards-printing", "presentation-folders"],
      },
      {
        heading: "Just listed and just sold postcards",
        body: "Mail the neighborhood around every listing and every closing.",
        products: ["postcards", "eddm-postcards"],
      },
      {
        heading: "Car magnets",
        body: "Your name and phone on the car during the week, off for the weekend.",
        products: ["car-magnets"],
      },
      {
        heading: "Closing gifts and pop-bys",
        body: "Branded gifts for closings and small drop-offs that keep you in front of past clients.",
        products: ["promotional-products"],
      },
    ],
    sections: [
      {
        heading: "Open house signs that get people to the door",
        body: "A lot of open house traffic comes from people who see a sign and turn. Put directional signs at each turn from the nearest main road, so a buyer never has to guess. Keep them simple: Open House, an arrow and your name or brokerage.\n\n10 yard signs at 18 x 24, printed on both sides with H-stakes, start at $95. Coroplast signs are light, cheap and easy to throw in the trunk. Make the arrows big and the words bigger.\n\nFollow your brokerage's sign rules and the local rules on signs near the road. Some Central Ohio communities and homeowner associations limit where signs can go and how long they can stay.",
      },
      {
        heading: "Just listed and just sold postcards",
        body: "A new listing or a closing is the best excuse you'll get to mail the neighbors. People want to know what homes on their street are doing. A just listed or just sold postcard tells them, and it puts your face in their mailbox.\n\nEvery Door Direct Mail reaches every address on a carrier route without buying a list. For a smaller mailing, postcards to your sphere or a farm area work well. 500 postcards at 4 x 6, full color on both sides, start at $55.\n\nKeep the card focused: a photo, the street, one line about the listing or the sale, and how to reach you. I'll set up a template so the next mailing just needs a new photo.",
      },
      {
        heading: "Look like the same agent everywhere",
        body: "Buyers and sellers see you on a sign, a card, a car door and a mailer before they meet you in person. When the logo, colors and photo match on all of it, you look established, even in your first year.\n\nCar magnets are an easy start. A pair at 12 x 18 starts at $35, and they come off when the car is a family car again. 500 business cards start at $29.\n\nIf you switch brokerages, I'll update everything together so nothing old stays out there. Teams can order through one account and keep every agent's pieces matching.",
      },
    ],
    featured: [
      "yard-signs-and-signage",
      "business-cards-printing",
      "postcards",
      "eddm-postcards",
      "car-magnets",
      "presentation-folders",
      "promotional-products",
    ],
    prices: ["yard-signs", "business-cards", "car-magnets", "postcards"],
    faqs: [
      {
        q: "How much do real estate yard signs cost?",
        a: "10 yard signs at 18 x 24, printed on both sides with H-stakes, start at $95. More signs bring the price per sign down. Aluminum signs cost more and last longer.",
      },
      {
        q: "What size should an open house sign be?",
        a: "18 x 24 is the most common size for open house and directional yard signs. It's big enough to read from a car and small enough to fit in a trunk.",
      },
      {
        q: "Can you print just listed and just sold postcards?",
        a: "Yes. 500 postcards at 4 x 6, full color on both sides, start at $55. I can set up a template so each new mailing only needs a new photo and address.",
      },
      {
        q: "Do car magnets work for real estate agents?",
        a: "Yes, if your car has flat steel doors. Magnets put your name on the car for work and come off for the weekend. Test the door with a fridge magnet first, since some panels are aluminum.",
      },
      {
        q: "Can you design my signs and cards?",
        a: "Yes. First order? Design and setup are free. Send your headshot, your logo and any brand rules your brokerage has, and you'll approve a proof before anything prints.",
      },
      {
        q: "Do you print for teams and brokerages?",
        a: "Yes. I keep each agent's files on record, so every card, sign and mailer matches the team look. Agents can order on their own and still stay on brand.",
      },
    ],
  },
  {
    slug: "auto-dealers",
    navLabel: "Auto dealers",
    blurb: "Lot banners, feather flags, showroom graphics, staff polos and gifts for car dealers.",
    metaTitle: "Car Dealer Banners and Lot Signs in Columbus",
    metaDescription:
      "Lot banners, feather flags, showroom graphics, staff polos and customer gifts for Columbus car dealers. 3 x 6 ft vinyl banners from $55. Free quote in 24 hours.",
    eyebrow: "Auto dealers",
    h1: "Banners, flags and gear for the lot and the showroom.",
    lede: "Car dealer signs and marketing for Columbus dealerships and independent lots: lot banners, feather flags, showroom graphics, staff polos and gifts for buyers. One person handles the whole list.",
    hero: {
      src: "/assets/industry-auto.jpg",
      alt: "Row of new cars parked in front of a glass-walled dealership showroom at dusk",
    },
    needs: [
      {
        heading: "Lot banners and flags",
        body: "Sale banners, feather flags and pole banners that get noticed from the road.",
        products: ["banners-and-flags", "yard-signs-and-signage"],
      },
      {
        heading: "Showroom and service graphics",
        body: "Window lettering, wall graphics and floor decals that point people to sales, service and parts.",
        products: ["window-graphics", "wall-and-floor-graphics"],
      },
      {
        heading: "Staff apparel",
        body: "Embroidered polos and jackets for sales, service and finance, all matching.",
        products: ["embroidered-apparel"],
      },
      {
        heading: "Buyer gifts and giveaways",
        body: "Keychains, drinkware and other branded gifts for buyers and service customers.",
        products: ["promotional-products"],
      },
      {
        heading: "Shuttle and service van lettering",
        body: "Your dealership name on the shuttle, the parts van and the loaners.",
        products: ["vehicle-lettering", "fleet-wraps", "car-magnets"],
      },
      {
        heading: "Mailers and print",
        body: "Service reminder postcards, business cards and event flyers.",
        products: ["postcards", "business-cards-printing", "flyers-and-brochures"],
      },
    ],
    sections: [
      {
        heading: "Lot signs and banners that work from the road",
        body: "Drivers pass your lot at speed. They get a second or two to notice a sale, a price or a brand. Big words, high contrast and one message per banner work better than a crowded design.\n\nA 3 x 6 ft vinyl banner, hemmed with grommets, starts at $55. Feather flags add motion along the frontage, and pole banners dress up the lot for a sale event. Swap the message for each event, and keep a set of evergreen pieces up the rest of the time.\n\nCheck the local sign code before you add a lot of temporary signs. Some Central Ohio cities limit banners and flags by size or by how many days they can stay up.",
      },
      {
        heading: "Showroom, service lane and staff",
        body: "Inside, the job is helping people find their way. Hours on the service door, graphics behind the sales desk and floor decals that point to service, parts and the cashier all help.\n\nStaff apparel tells a customer who to ask. Embroidered polos start at $29 each, and I can match colors across sales, service and parts while keeping the same logo. A retractable banner starts at $129 with the stand included, which makes it easy to move between the showroom and off-site events.\n\nFranchise dealers often have brand standards to follow. Send them over and I'll work inside them.",
      },
      {
        heading: "Gifts and mailers that bring buyers back",
        body: "The sale is only the start. Service visits, trade-ins and referrals come from customers who remember where they bought. A useful gift at delivery with your dealership's name on it, like a keychain, an ice scraper or a travel mug, keeps your name in their hands.\n\nWith 4,300+ vetted suppliers, there's plenty to choose from, and I'll steer you toward things people keep. Wholesale pricing helps when you order by the hundred.\n\nService reminder postcards and event mailers do the rest. I'll set up templates so each mailing only needs new offers and dates. I work with dealers across Columbus and Central Ohio.",
      },
    ],
    featured: [
      "banners-and-flags",
      "window-graphics",
      "wall-and-floor-graphics",
      "embroidered-apparel",
      "promotional-products",
      "trade-show-displays",
      "postcards",
    ],
    prices: ["vinyl-banner", "retractable-banner", "embroidered-polos", "window-lettering"],
    faqs: [
      {
        q: "How much does a car lot banner cost?",
        a: "A 3 x 6 ft vinyl banner, hemmed with grommets, starts at $55. Bigger sizes, double-sided printing and mesh material change the price. Send the size and where it hangs and I'll quote it within 24 hours.",
      },
      {
        q: "Do you make feather flags for car lots?",
        a: "Yes. Feather flags come in several sizes, with ground stakes or bases for pavement. Short words and big letters read best from the road.",
      },
      {
        q: "Can you work within our manufacturer's brand standards?",
        a: "Yes. Send the brand guide or the rules from your manufacturer and I'll design inside them. You'll approve a proof before anything prints.",
      },
      {
        q: "What promotional products work for car dealers?",
        a: "Things people use in the car or every day: keychains, ice scrapers, phone mounts, tire gauges and drinkware. Pick something useful and put your name and service number on it.",
      },
      {
        q: "Can you design our banners and mailers?",
        a: "Yes. First order? Design and setup are free. Tell me the offer and the dates, and you'll see a proof first.",
      },
      {
        q: "Do you letter shuttles and service vans?",
        a: "Yes. Door lettering on both doors starts at $249 installed, and bigger vans can carry a partial wrap. Leased vehicles are fine. Just tell me up front.",
      },
    ],
  },
  {
    slug: "fleet-and-logistics",
    navLabel: "Fleet operators",
    blurb: "Fleet wraps, decal kits, USDOT lettering and driver apparel for growing fleets.",
    metaTitle: "Fleet Graphics and Truck Lettering in Columbus",
    metaDescription:
      "Fleet wraps, decal kits, USDOT lettering and driver apparel for Columbus fleets. Truck door lettering from $249 installed, van wraps from $2,800. Free quote.",
    eyebrow: "Fleet and logistics",
    h1: "Every truck in the fleet, the same look.",
    lede: "Fleet graphics in Columbus for delivery vans, service trucks, box trucks and trailers: wraps, decal kits, USDOT lettering and driver apparel. I keep the specs on file, so the newest truck matches the oldest one.",
    hero: {
      src: "/assets/gallery-fleet-consistency.jpg",
      alt: "Two cargo vans with matching orange, red and yellow wraps parked in a snowy lot",
    },
    needs: [
      {
        heading: "Fleet wraps",
        body: "Full and partial wraps that look the same on every van, so the fleet reads as one company.",
        products: ["fleet-wraps", "vehicle-wraps"],
      },
      {
        heading: "Decal kits and unit numbers",
        body: "The same name, phone, logo and unit number on every vehicle, ready when you add one.",
        products: ["vehicle-lettering", "decals-and-stickers"],
      },
      {
        heading: "USDOT and MC lettering",
        body: "Legal name and numbers sized and spaced to read clean from the side of the truck.",
        products: ["vehicle-lettering"],
      },
      {
        heading: "Driver apparel",
        body: "Polos, tees and jackets so customers know who's at the door.",
        products: ["embroidered-apparel"],
      },
      {
        heading: "Warehouse and dock graphics",
        body: "Floor markings, wall signs and safety labels for the warehouse and the dock.",
        products: ["wall-and-floor-graphics", "decals-and-stickers", "yard-signs-and-signage"],
      },
    ],
    sections: [
      {
        heading: "Keep the fleet matching as it grows",
        body: "Fleets rarely buy every vehicle at once. You add a van this year, two trucks next year and a trailer when the work calls for it. The risk is that each one gets lettered a little differently, and the fleet stops looking like one company.\n\nThe fix is a spec on file: the layout, colors, sizes and placement for each vehicle type. When a new truck shows up, I pull the file and match it. Unit numbers, a new phone number or a new service line get updated across the whole set.\n\nDoor lettering on both doors starts at $249 installed. It's a good standard for pickups and service trucks that don't need a full wrap.",
      },
      {
        heading: "Wrap the fleet without parking it",
        body: "Every day a truck sits in the shop is a day it isn't earning. For a fleet rollout, plan the wraps a few vehicles at a time so most of the fleet stays on the road. I'll line up the schedule with my partner wrap shops and trusted installers around your routes.\n\nA partial wrap on a van or pickup starts at $1,200 installed. A full wrap on a cargo van starts at $2,800 installed. Partials put your brand where people look first, and full wraps turn the whole van into a sign.\n\nBox trucks and trailers have big flat sides, which makes them a cost-effective place for large graphics.",
      },
      {
        heading: "USDOT numbers and the details that matter",
        body: "If your trucks need USDOT numbers, federal rules say they go on both sides of the vehicle, in a color that contrasts with the paint, readable from 50 feet in daylight, along with the legal or trade name on file. Whether you need one is a question for FMCSA. Once you have it, I'll lay it out cleanly.\n\nOther details count too. Unit numbers on the doors and the rear help dispatch and dock staff. Rear doors are a good spot for your phone number and a short safety line.\n\nI work with fleets across Columbus and Central Ohio. You deal with me from the first quote to the last truck.",
      },
    ],
    featured: [
      "fleet-wraps",
      "vehicle-wraps",
      "vehicle-lettering",
      "decals-and-stickers",
      "embroidered-apparel",
      "wall-and-floor-graphics",
    ],
    prices: ["door-lettering", "partial-wrap", "full-van-wrap", "embroidered-polos"],
    faqs: [
      {
        q: "How much does it cost to wrap a fleet van?",
        a: "A full wrap on a cargo van starts at $2,800 installed. A partial wrap on a van or pickup starts at $1,200 installed. Fleet orders are quoted by vehicle type, so send me the makes, models and how many of each.",
      },
      {
        q: "Can you wrap our trucks a few at a time?",
        a: "Yes. Most fleets roll out in batches so the trucks stay on the road. I'll plan the order around your schedule and routes.",
      },
      {
        q: "How do you keep every truck matching?",
        a: "I keep a spec on file for each vehicle type: layout, colors, sizes and placement. New trucks get the same file, so they match the ones already on the road.",
      },
      {
        q: "Will a wrap damage the paint on our trucks?",
        a: "Wraps on factory paint usually come off cleanly with heat when it's time. Repainted panels and damaged paint are less predictable, so tell me about any body work before the job starts.",
      },
      {
        q: "Do you make driver uniforms?",
        a: "Yes. Embroidered polos start at $29 each, and tees, jackets and hats are available too. Small runs are fine. Ask and I'll tell you the minimum for your item.",
      },
      {
        q: "Can you design our fleet graphics?",
        a: "Yes. First order? Design and setup are free. Send photos of each vehicle type and your logo, and you'll approve a proof for each one before anything prints.",
      },
    ],
  },
  {
    slug: "food-and-beverage",
    navLabel: "Food and drink makers",
    blurb: "Product labels, packaging, menus, window lettering and food truck wraps.",
    metaTitle: "Food Labels and Restaurant Printing Columbus",
    metaDescription:
      "Custom food labels, packaging, menus, window lettering and food truck wraps for Columbus bakeries, roasters and breweries. 1,000 roll labels from $179.",
    eyebrow: "Food and drink",
    h1: "Labels first. Then the menu, the window and the truck.",
    lede: "Custom food labels and restaurant printing in Columbus for bakeries, bagel shops, coffee roasters, breweries, sauce makers and food trucks. Start with a short run of labels, see how they sell, then reorder bigger.",
    hero: {
      src: "/photos/1774655757043-bcjuak3ub95.jpeg",
      alt: "Food truck covered in a colorful sugar skull and marigold wrap with the service window open",
    },
    needs: [
      {
        heading: "Product labels",
        body: "Roll labels for jars, bags, bottles, cans and boxes. Film for anything that sees the fridge or the cooler.",
        products: ["custom-labels", "decals-and-stickers"],
      },
      {
        heading: "Packaging",
        body: "Branded boxes, bags, cups and sleeves with your logo on them.",
        products: ["packaging", "custom-labels"],
      },
      {
        heading: "Menus and table tents",
        body: "Menus, table tents and specials cards that are easy to update.",
        products: ["menus-and-table-tents"],
      },
      {
        heading: "Window lettering",
        body: "Hours, logo and a scan-to-order code on the front door.",
        products: ["window-graphics"],
      },
      {
        heading: "Food truck wraps",
        body: "A wrap that reads from across a parking lot and shows what you serve at a glance.",
        products: ["vehicle-wraps"],
      },
      {
        heading: "Staff shirts and merch",
        body: "Tees, hats and aprons for the crew, plus merch to sell at the counter.",
        products: ["embroidered-apparel", "promotional-products"],
      },
    ],
    sections: [
      {
        heading: "Start with a few hundred labels",
        body: "Most food and drink makers don't know their label volume on day one. You don't need to. Order a short run, put it on the jar or the bag, and see how it looks on the shelf and how it sells.\n\nA Columbus bagel shop started with 500 labels to try it out. The next order was 5,000. That's the usual path: small first, bigger once you know it works. Reorders cost less per label, because the setup is done and the file is already approved.\n\n1,000 roll labels at 2 x 2, on white BOPP film with a laminate, start at $179.",
      },
      {
        heading: "Pick the right label material",
        body: "Where the product lives decides the label. Paper labels cost the least and work for dry goods like coffee bags and bakery boxes. Anything that sees the fridge, a cooler or wet hands needs film. BOPP film holds up to moisture and cold, which makes it the go-to for sauces and drinks.\n\nClear film gives glass a no-label look. Silver film looks premium on a shelf. If you apply labels by hand, I'll set up the roll so they peel easily. If you use a label machine, send me the core size and unwind direction and they'll be printed to fit.\n\nYou're responsible for ingredient and nutrition content. I make sure it prints clean and readable.",
      },
      {
        heading: "Menus, windows and the food truck",
        body: "Once the product is labeled, the rest of the brand should match it. Menus and table tents carry the same logo and colors. Hours and logo lettering on one door or window starts at $149, installed, and a scan-to-order code on the glass keeps working after closing time.\n\nFor a food truck, the wrap is your sign, your menu board and your ad. Keep the name huge, the food obvious and the menu or QR code near the window where the line forms. I'll quote it from photos and the truck's measurements.\n\nI work with food businesses across Columbus and Central Ohio, and you deal with me from the first label to the truck.",
      },
    ],
    featured: [
      "custom-labels",
      "packaging",
      "menus-and-table-tents",
      "window-graphics",
      "vehicle-wraps",
      "decals-and-stickers",
      "embroidered-apparel",
      "promotional-products",
    ],
    prices: ["roll-labels", "vinyl-decals", "window-lettering", "screen-printed-tees"],
    faqs: [
      {
        q: "How much do custom food labels cost?",
        a: "1,000 roll labels at 2 x 2, on white BOPP film with a laminate, start at $179. Size, shape, material and quantity change the price. The price per label drops a lot as the quantity goes up.",
      },
      {
        q: "What's the smallest label order you'll do?",
        a: "Small runs are fine. A short first run is a smart way to test a new label before you buy thousands. Tell me the quantity and I'll quote it.",
      },
      {
        q: "Will labels hold up in the fridge or a cooler?",
        a: "Yes, with film like BOPP. Paper labels smear and peel when they get wet. Tell me where the product lives and I'll match the material.",
      },
      {
        q: "How much does a food truck wrap cost?",
        a: "It depends on the size of the truck, how much of it gets covered and the design. Send photos of every side and the measurements, and I'll quote it within 24 hours.",
      },
      {
        q: "Can you design our labels and menus?",
        a: "Yes. First order? Design and setup are free. Send your logo and what needs to go on it, and you'll approve a proof before anything prints.",
      },
      {
        q: "Do you print stickers for bags and boxes?",
        a: "Yes. 100 vinyl decals at 3 x 3, cut to shape, start at $85. For sealing bags and boxes in volume, stickers on a roll cost less per piece.",
      },
    ],
  },
];
