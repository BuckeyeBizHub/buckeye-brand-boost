import type { ProductPage } from "../types";

// Vehicle wraps and fleet wraps. Order here is menu order.
export const VEHICLE_PAGES: ProductPage[] = [
  {
    slug: "vehicle-wraps",
    group: "vehicles",
    navLabel: "Vehicle wraps",
    blurb: "Full, partial and spot graphics wraps for vans, pickups, box trucks and trailers.",
    metaTitle: "Vehicle Wraps for Business in Columbus, Ohio",
    metaDescription:
      "Commercial vehicle wraps for work vans, pickups, box trucks and trailers in Central Ohio. Partial wraps from $1,200, installed. Free quote in 24 hours.",
    eyebrow: "Vehicle wraps",
    h1: "Wrap the truck you already drive to every job.",
    lede: "Vehicle wraps for work vans, pickups, box trucks, trailers and food trucks across Columbus and Central Ohio. Full, partial or spot graphics, with one person running the job from design to install.",
    hero: {
      src: "/assets/vehicle-wrap-hero.jpg",
      alt: "Work van with a red, green and yellow wrap parked next to plain white vans",
    },
    prices: ["partial-wrap", "full-van-wrap", "door-lettering"],
    options: [
      {
        name: "Full vehicle wraps",
        detail: "Printed vinyl over every painted panel. The biggest, loudest option, and the best fit for vans and box trucks on the road every day.",
      },
      {
        name: "Partial wraps",
        detail: "Printed graphics on the sides, doors and back, with the paint color filling in the rest. Most of the look for less money.",
      },
      {
        name: "Spot graphics and lettering",
        detail: "Logo, name, phone and website on the doors and tailgate. The low-cost way to stop driving an unmarked truck.",
      },
      {
        name: "Box truck wraps",
        detail: "Big flat sides make a box truck the best billboard you can own. Wrap the sides, the rear door or the whole box.",
      },
      {
        name: "Trailer wraps",
        detail: "Enclosed trailers sit at job sites and in driveways all day. Wrap the sides and rear so the trailer works while it's parked.",
      },
      {
        name: "Food truck wraps",
        detail: "Bold, full-coverage graphics with your logo, menu items and social handles, made to read from across a parking lot.",
      },
      {
        name: "Perforated window graphics",
        detail: "See-through printed film for rear and side windows. Graphics on the outside, a view out from the inside.",
      },
    ],
    uses: [
      "HVAC, plumbing and electrical vans",
      "Roofing and construction pickups",
      "Landscaping trucks and trailers",
      "Box trucks and delivery vans",
      "Food trucks and catering vans",
      "Mobile service and detailing businesses",
    ],
    sections: [
      {
        heading: "Full wrap, partial wrap or spot graphics?",
        body: "A full wrap covers every painted panel. It gets the most attention and hides a tired paint job. It also costs the most, so it makes the most sense on a vehicle you plan to keep and drive hard.\n\nA partial wrap covers the sides, doors and back and lets the paint fill in the rest. If the vehicle color works with your brand, a partial can look close to a full wrap for a lot less.\n\nSpot graphics are your logo, name, phone and website in vinyl. If you have five trucks and a tight budget, lettering on all five usually beats a full wrap on one. I'll lay out all three for your vehicle and you pick.",
        image: {
          src: "/assets/vehicle-wrap-partial.jpg",
          alt: "White pickup truck with partial brown and white wrap graphics on the side and rear",
        },
      },
      {
        heading: "What affects the cost of a vehicle wrap?",
        body: "Size is the big one. A box truck has a lot more surface than a pickup, and a full wrap on a high-roof van takes more vinyl and more install time than a partial on a smaller vehicle.\n\nAfter size comes coverage, design work and the shape of the vehicle. Deep curves, rivets and bumpers take longer to wrap clean. Paint condition matters too. Vinyl needs a solid surface, so peeling clear coat or rust has to be dealt with first.\n\nPartial wraps start at $1,200 and full commercial van wraps start at $2,800, installed. Send me the year, make and model, or a few photos, and you'll have a real number within 24 hours.",
      },
      {
        heading: "How long does a vehicle wrap last, and how do you care for it?",
        body: "A good commercial wrap lasts for years, not months. How many depends on the vinyl, how much sun the vehicle sees, Ohio winters and road salt, and how it gets washed. Flat surfaces like the hood and roof take the most sun and usually wear first.\n\nCare is simple. Hand wash with mild soap. Skip the brush car washes. Keep a pressure washer away from the edges and seams. Get bird droppings, fuel and tree sap off quickly, before they bake in.\n\nWhen it's time to come off, a wrap that was installed and removed the right way on sound factory paint generally leaves the paint underneath in good shape. That helps at trade-in time.",
      },
    ],
    faqs: [
      {
        q: "How much does it cost to wrap a work van?",
        a: "Partial wraps on a van or pickup start at $1,200, installed. Full commercial van wraps start at $2,800, installed. Size, coverage, design and the shape of the vehicle set the final price, and your quote comes back within 24 hours.",
      },
      {
        q: "Is a partial wrap worth it?",
        a: "For a lot of trades, yes. A partial covers the panels people actually look at and lets your paint do the rest. If the vehicle color works with your brand, you get most of the look for a lot less.",
      },
      {
        q: "Will a vehicle wrap damage my paint?",
        a: "On factory paint in good shape, a wrap that's installed and removed the right way generally won't. It can even shield the paint from sun and light scratches. Repainted panels and peeling clear coat are the exception, so I'll ask about paint condition up front.",
      },
      {
        q: "Can you wrap a leased vehicle?",
        a: "Usually, yes. Check your lease terms first. Because a wrap comes off, a lot of businesses wrap leased vans and have the graphics removed before turn-in.",
      },
      {
        q: "Do you do custom wraps on personal cars?",
        a: "My focus is commercial vehicles: work vans, pickups, box trucks, trailers and food trucks. If the vehicle works for your business, I'm in.",
      },
      {
        q: "Do I get to see the design before it's printed?",
        a: "Yes. You see and approve a proof before anything prints. Send your logo and what needs to be on the vehicle, and the design gets laid out for your make and model.",
      },
      {
        q: "Do you have a wrap shop I can drive to?",
        a: "No walk-in shop. I come to you or work from photos, and I coordinate the print and install with trusted installers. You deal with me from start to finish.",
      },
    ],
    related: ["fleet-wraps", "vehicle-lettering", "car-magnets", "window-graphics"],
    industries: ["roofing", "construction", "lawn-care-landscaping", "fleet-and-logistics", "food-and-beverage"],
  },
  {
    slug: "fleet-wraps",
    group: "vehicles",
    navLabel: "Fleet wraps",
    blurb: "One design across your whole fleet, rolled out a truck at a time.",
    metaTitle: "Fleet Wraps for Work Trucks in Columbus, Ohio",
    metaDescription:
      "Fleet wraps for businesses with two or more work vehicles in Central Ohio. One design, rolled out a truck at a time. Full van wraps from $2,800. Free quote.",
    eyebrow: "Fleet wraps",
    h1: "One look across every truck you run.",
    lede: "Fleet wraps for businesses with two vans or twenty. One design, set up once and rolled out one vehicle at a time so your trucks keep working. Serving Columbus and Central Ohio.",
    hero: {
      src: "/assets/vehicle-wrap-fleet.jpg",
      alt: "Aerial view of a parking lot full of matching white vans with red and blue graphics",
    },
    prices: ["full-van-wrap", "partial-wrap", "door-lettering"],
    options: [
      {
        name: "Full fleet wraps",
        detail: "Every van in the same full-coverage design. The strongest look for service fleets on the road all day.",
      },
      {
        name: "Partial fleet wraps",
        detail: "Sides, doors and rear on each vehicle, with your paint color doing the rest. A good fit for growing fleets and leased vans.",
      },
      {
        name: "Door lettering for older trucks",
        detail: "Name, logo and phone on the trucks you won't keep long, in the same fonts and colors as the wrapped ones.",
      },
      {
        name: "Box truck and trailer graphics",
        detail: "Your fleet design scaled up to the big flat sides of box trucks and enclosed trailers.",
      },
      {
        name: "Mixed fleet branding",
        detail: "Vans, pickups, box trucks and trailers in one system, laid out for each body style so the logo lands in the same spot.",
      },
      {
        name: "New vehicle add-ons",
        detail: "Bought another van? The design is already done, so the next one matches the rest.",
      },
    ],
    uses: [
      "HVAC and plumbing service fleets",
      "Roofing and construction crews",
      "Lawn care and landscaping trucks and trailers",
      "Delivery and logistics vans",
      "Moving companies",
      "Electrical contractors",
      "Pest control and cleaning services",
    ],
    sections: [
      {
        heading: "Why wrap your whole fleet the same way?",
        body: "Five trucks with five different looks read like five different companies. Five trucks in the same design read like one established business that's busy all over town. People notice the repeat. See the same van in Westerville on Monday and Hilliard on Thursday, and your name sticks.\n\nA matching fleet also makes your crew easier to trust. When a homeowner sees a wrapped van pull into the driveway, they know who's at the door before anyone gets out.\n\nThe rules are simple: same logo, same colors, same phone number in the same spot on every vehicle. I set that up once and hold every truck to it.",
      },
      {
        heading: "How a fleet rollout works without parking your trucks",
        body: "Nobody can park the whole fleet for a week. So the rollout goes one vehicle, or a couple, at a time. The rest of the fleet keeps running jobs while each truck gets done.\n\nIt starts with the design. I build one layout and adapt it to each body style you run, then you approve a proof for every vehicle type before anything prints. After that, I line up install dates with trusted installers around your schedule. Tell me which trucks can be down on which days and the plan gets built around that.\n\nYou deal with me the whole way. I handle the print and install side.",
      },
      {
        heading: "Do you have to wrap every truck in the fleet?",
        body: "No. Most fleets aren't all new. Put full or partial wraps on the vans you'll keep for years, and put matching door lettering on the older trucks you plan to replace. Same fonts, same colors, same logo. From the street it reads as one fleet.\n\nWhen an old truck gets replaced, the new one gets the full design. The file is already built, so adding a vehicle is print and install, not a new design project.\n\nFull van wraps start at $2,800, partial wraps at $1,200 and door lettering at $249, all installed. Send me a list of your vehicles and I'll price the whole fleet within 24 hours.",
        image: {
          src: "/assets/gallery-fleet-consistency.jpg",
          alt: "Two cargo vans in matching orange, red and black graphics parked in a snowy lot",
        },
      },
    ],
    faqs: [
      {
        q: "How much does it cost to wrap a fleet of vans?",
        a: "Full commercial van wraps start at $2,800 each, installed. Partial wraps start at $1,200 and door lettering at $249. Send your vehicle list and the quote covers every truck, back within 24 hours.",
      },
      {
        q: "Do you quote fleets as one job?",
        a: "Yes. I quote the whole fleet at once. The design work happens once and gets reused on every vehicle, which keeps the cost of each added truck down.",
      },
      {
        q: "How long will my trucks be out of service?",
        a: "Each vehicle is down only for its own install while the rest of the fleet keeps working. I'll give you dates with the quote and build the schedule around the days you can spare a truck.",
      },
      {
        q: "Can you match the look across vans, pickups and box trucks?",
        a: "Yes. One design gets laid out for each body style so the logo, colors and phone number land in the same place. You approve a proof for each vehicle type.",
      },
      {
        q: "Can I add vehicles to the fleet later?",
        a: "Yes. I keep your design files, so a new van gets the same look as the rest. It's print and install, not a new design.",
      },
      {
        q: "How long do fleet wraps last?",
        a: "Years, with care. Sun, road salt and washing habits make the difference. Hand wash when you can and skip the brush car washes.",
      },
    ],
    related: ["vehicle-wraps", "vehicle-lettering", "embroidered-apparel", "full-rebrand-kits"],
    industries: ["fleet-and-logistics", "roofing", "construction", "lawn-care-landscaping"],
  },
];
