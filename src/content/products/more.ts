import type { ProductPage } from "../types";

// Non-print services: websites, local SEO and consulting. Order here is menu order.
export const MORE_PAGES: ProductPage[] = [
  {
    slug: "website-design",
    group: "more",
    navLabel: "Website design",
    blurb: "Simple, fast websites for local businesses that bring in calls and quote requests.",
    metaTitle: "Website Design for Small Business in Columbus",
    metaDescription:
      "Website design for Columbus and Central Ohio small businesses. Fast, phone-friendly sites with clear calls to action that bring in calls and quote requests.",
    eyebrow: "Website design",
    h1: "A website that gets the phone to ring.",
    lede: "Website design for Columbus small businesses that need more calls, not more animations. Fast, built for phones, and clear about what you do, where you work and how to reach you.",
    hero: {
      src: "/assets/rebrand-website.jpg",
      alt: "Laptop on a white desk showing a business website with an orange button and photo tiles",
    },
    options: [
      {
        name: "New business websites",
        detail: "A clean site built around your services, your service area and one clear next step: call or request a quote.",
      },
      {
        name: "Website redesigns",
        detail: "Your current site rebuilt to load faster, work on phones and match the rest of your brand.",
      },
      {
        name: "Landing pages",
        detail: "One page with one job, like catching leads from an ad, a mailer or the QR code on a yard sign.",
      },
      {
        name: "Service and location pages",
        detail: "A page for each service and each area you cover, so people searching for that exact thing find you.",
      },
      {
        name: "Quote forms and click-to-call",
        detail: "Short forms and tap-to-call buttons that make it easy to reach you from a phone.",
      },
    ],
    uses: [
      "Contractors and home service businesses",
      "Dental and medical offices",
      "Restaurants and breweries",
      "Real estate agents and teams",
      "New businesses that need a first site",
      "Businesses with a dated or broken site",
    ],
    sections: [
      {
        heading: "What a small business website needs to do",
        body: "Visitors decide fast whether to stay. They want to know what you do, whether you work in their area and how to reach you. If they have to dig for any of that, they leave and call someone else.\n\nSo the basics matter more than the bells and whistles. A clear headline. Your services in plain words. Your phone number at the top, tappable on a phone. Real photos of your work and your crew when you have them. A short quote form.\n\nA lot of your visitors are on a phone, so the site gets built for the phone first and the desktop second. If it's slow, hard to read or the button is buried, it's costing you calls.",
      },
      {
        heading: "Your website and your print should look like the same company",
        body: "Your trucks, your signs, your business cards and your website all tell people who you are. When they don't match, it looks like two different businesses. When they do, you look established.\n\nBecause I handle print, signs and vehicle graphics too, your website gets built from the same logo, colors and fonts. A landing page can match the postcard you just mailed or the QR code on your yard sign, so people who scan it land somewhere that makes sense.\n\nThat's the upside of one person seeing the whole picture. Nothing gets lost between the web person and the print shop, and you have one number to call when something needs to change.",
      },
      {
        heading: "How a website project works",
        body: "It starts with a conversation about your business, your customers and what you want the site to do. I look at what you have now and what the people you compete with around Columbus are doing.\n\nThen comes the plan: which pages you need, what goes on each one and what you want visitors to do. You see the design before it's built, and you review the whole site before it goes live.\n\nYou'll have a quote within 24 hours of that first talk, with what's included spelled out. If you already have a domain and hosting, I'll work with what you have. If you're not happy with the result, we make it right.",
      },
    ],
    faqs: [
      {
        q: "How much does a small business website cost?",
        a: "It depends on how many pages you need, who writes the copy and what the site has to do, like quote forms or online booking. A simple site costs less than one with lots of pages and features. You'll get a quote within 24 hours with everything spelled out.",
      },
      {
        q: "How long does it take to build a website?",
        a: "It depends on the size of the site and how fast the content comes together. Your quote comes with a timeline. The biggest delay is usually waiting on photos and text, so getting those ready early helps.",
      },
      {
        q: "Will my website work on phones?",
        a: "Yes. Every site gets built and checked on phones first, then on tablets and desktops.",
      },
      {
        q: "Can I update the website myself?",
        a: "Usually, yes. I'll set it up so you can change text, photos and hours without calling anyone. If you'd rather not touch it, send me the changes.",
      },
      {
        q: "Do you redesign existing websites?",
        a: "Yes. If your site is slow, dated or hard to use on a phone, I'll rebuild it and keep what's working, like your domain and the pages that already bring in traffic.",
      },
      {
        q: "Does a new website help with Google?",
        a: "A well-built site helps: clear page titles, a page for each service, fast load times and your business info marked up so Google can read it. Showing up in the map also depends on your Google Business Profile and reviews, which is what local SEO covers.",
      },
    ],
    related: ["local-seo", "full-rebrand-kits", "business-consulting", "business-cards-printing"],
    industries: ["roofing", "construction", "dental", "real-estate"],
  },
  {
    slug: "local-seo",
    group: "more",
    navLabel: "Local SEO",
    blurb: "Show up in Google Maps and local search when nearby customers look for you.",
    metaTitle: "Local SEO and Google Maps Help in Columbus",
    metaDescription:
      "Local SEO for Columbus and Central Ohio businesses. Google Business Profile setup, reviews, listings and service area pages that help nearby customers find you.",
    eyebrow: "Local SEO",
    h1: "Get found when people nearby search for what you do.",
    lede: "Local SEO helps Columbus businesses show up in Google Maps and local search results. It starts with your Google Business Profile, your reviews and a website that says clearly what you do and where.",
    hero: {
      src: "/assets/local-seo-hero.jpg",
      alt: "Tablet on a conference table showing a map with red location pins and a business listing",
    },
    options: [
      {
        name: "Google Business Profile setup",
        detail: "Categories, services, hours, photos and service area filled in right, plus posts to keep the profile active.",
      },
      {
        name: "Review requests and replies",
        detail: "A simple way to ask happy customers for reviews, and a reply to every one, good or bad.",
      },
      {
        name: "Listings cleanup",
        detail: "Your business name, address and phone number matching across directories and listing sites. Mismatched info confuses Google and customers.",
      },
      {
        name: "Service area pages",
        detail: "Website pages for the services you offer and the towns you cover, written for real people first.",
      },
      {
        name: "On-page SEO fixes",
        detail: "Page titles, headings, local business markup and speed fixes so Google can read your site.",
      },
      {
        name: "Local SEO audit",
        detail: "A plain-language look at where you show up today, where you don't and what to fix first.",
      },
    ],
    uses: [
      "Roofers, HVAC, plumbers and electricians",
      "Lawn care and landscaping companies",
      "Dental and medical offices",
      "Restaurants and breweries",
      "Real estate agents",
      "Any business that serves a local area",
    ],
    sections: [
      {
        heading: "How Google decides who shows up in the map",
        body: "When someone searches for a roofer near me or a dentist in Westerville, Google shows a map with a few businesses at the top. Google says local results come down to three things: relevance, distance and prominence.\n\nRelevance is how well your profile and website match the search. Distance is how close you are to the person searching. Prominence is how well known you are: your reviews, your listings, links to your site and what's said about you online.\n\nYou can't move your address. You can make your profile complete, make your website clear about what you do and where, and keep reviews coming in. That's where the work goes.",
      },
      {
        heading: "Start with your Google Business Profile",
        body: "For a lot of local businesses, the Google Business Profile is the first thing a customer sees. It's what shows in the map, with your hours, photos, reviews and a call button.\n\nGet the basics right: the right primary category, every service you offer, accurate hours, your service area and real photos. Post updates now and then. Answer every review, good or bad, like a person and not a robot.\n\nThen make sure your name, address and phone number match everywhere they appear online, from your website to directory listings. Small differences add up, like an old phone number on one site or a suite number that shows in one place and not another.",
      },
      {
        heading: "What local SEO can and can't promise",
        body: "Nobody honest can guarantee you the top spot. Google changes how it ranks results, and your competitors are working on it too. Anyone who promises page one by a certain date is guessing.\n\nWhat steady work does is stack the odds in your favor. A complete profile, a steady flow of reviews, a website with a page for each service and area, and clean listings all help. Results build over time.\n\nI work with Columbus and Central Ohio businesses that want to be found close to home: Dublin, Westerville, Gahanna, Hilliard, Grove City and beyond. You'll get a plain-language look at where you stand and what I'd fix first.",
      },
    ],
    faqs: [
      {
        q: "What is local SEO?",
        a: "Local SEO is the work that helps your business show up when people nearby search on Google, especially in the map results. It covers your Google Business Profile, reviews, listings and your website.",
      },
      {
        q: "How long does local SEO take to work?",
        a: "It takes time, and anyone who gives you an exact date is guessing. Fixing a broken profile or wrong listings can help sooner. Rankings build with steady work over months.",
      },
      {
        q: "Can you guarantee first page rankings?",
        a: "No. Nobody can honestly guarantee rankings, because Google decides. What I can promise is steady work on the things that matter for local search and a straight answer about what's working.",
      },
      {
        q: "How important are Google reviews?",
        a: "Very. Reviews affect whether people call you, and they're part of how Google judges prominence. A steady flow of recent reviews does more than a burst of them from three years ago.",
      },
      {
        q: "Do I need a website for local SEO?",
        a: "You can show up in the map with only a Google Business Profile, but a good website helps. It tells Google more about your services and service area, and it gives customers a place to land.",
      },
      {
        q: "How much does local SEO cost?",
        a: "It depends on how competitive your trade is in your area and how much needs fixing. A one-time profile cleanup costs a lot less than ongoing work. Tell me your business and your area and you'll have a quote within 24 hours.",
      },
    ],
    related: ["website-design", "business-consulting", "full-rebrand-kits"],
    industries: ["roofing", "lawn-care-landscaping", "dental", "real-estate"],
  },
  {
    slug: "business-consulting",
    group: "more",
    navLabel: "Business consulting",
    blurb: "Operations and growth help for small business owners, from someone who's run them.",
    metaTitle: "Small Business Consulting in Columbus, Ohio",
    metaDescription:
      "Small business consulting in Columbus and Central Ohio. Operations and growth help from David Stein, BeerTubes co-founder and SBC Hospitality Group founder.",
    eyebrow: "Consulting",
    h1: "Operations and growth help from someone who's run a business.",
    lede: "Small business consulting for Columbus and Central Ohio owners who are stuck, stretched thin or growing faster than their systems. I've built, run and sold businesses, and I help owners fix how the work gets done.",
    hero: {
      src: "/assets/website-design-hero.jpg",
      alt: "Bright office desk with a large monitor, a laptop and potted plants by tall windows",
    },
    options: [
      {
        name: "One-time strategy session",
        detail: "One focused conversation about one decision: a hire, a price change, a new service, a slow season. You leave with a recommendation and a next step.",
      },
      {
        name: "Operations review",
        detail: "A look at how work moves through your business, from first call to final invoice, and where it gets stuck.",
      },
      {
        name: "Process and systems setup",
        detail: "Simple checklists, handoffs and tools so the business doesn't depend on you remembering everything.",
      },
      {
        name: "Sales and marketing review",
        detail: "Where your customers come from, what it costs to get them and what to fix first.",
      },
      {
        name: "Ongoing advising",
        detail: "Regular check-ins for owners who want someone to call when something big comes up.",
      },
    ],
    uses: [
      "Owners doing too much themselves",
      "Businesses growing faster than their systems",
      "Adding a service or a location",
      "Fixing a slow sales process",
      "Getting ready to hire",
      "Planning a sale or a handoff",
    ],
    sections: [
      {
        heading: "Business advice from someone who's done the work",
        body: "From 2001 to 2006 I was service manager at Clintonville Automotive Repair Service, my family's independent repair shop and a third-generation business. In 2005 I co-founded BeerTubes and ran it as president. I'm a named inventor on its patents. I grew sales from $79K in year one to $4.5M, sold to Anheuser-Busch InBev, MillerCoors, Constellation Brands and 100+ distributors, and sold the company in 2017.\n\nFrom 2017 to 2023 I was founder and president of SBC Hospitality Group: Stein Brewing Co. in Mount Vernon, a Newark brewery, The Joint diner and a Dave's Cosmic Subs franchise I co-owned. More than 100 employees. I've also spent 15+ years helping my wife run her dental specialty practice, and I have a psychology degree from Ohio State.\n\nSo when you bring me payroll, hiring, pricing or a slow month, I've been there.",
      },
      {
        heading: "What small business consulting looks like with me",
        body: "Most owners don't need a thick binder of a plan. They need someone to look at how the work actually gets done, find the two or three things causing the most pain, and help fix them.\n\nThat usually means operations and growth: how leads get handled, how jobs get scheduled and tracked, who owns what, how you price, and which tools you pay for but don't use. Sometimes it's a sales process that lives in the owner's head. Sometimes it's a software switch nobody had time to finish.\n\nI work alongside you and your staff, not around them. Your people know where the problems are, and the fix sticks when they help build it.",
      },
      {
        heading: "Who it's for, and who it isn't",
        body: "This fits owner-run businesses in Columbus and Central Ohio that have real customers and real revenue but feel stuck: too busy to fix things, growing faster than their systems, or not growing at all. Trades, service businesses and professional offices are a good fit.\n\nIt isn't big-company consulting. If you need a specialist for something outside my lane, I'll tell you and point you to one.\n\nStart with a conversation. Tell me what's going on and you'll get an honest answer about whether I can help, plus a quote within 24 hours if I can. If I'm not the right fit, you'll hear that too.",
      },
    ],
    faqs: [
      {
        q: "What does a small business consultant do?",
        a: "A consultant looks at how your business runs and helps you fix what's holding it back. With me, that's mostly operations and growth: how work flows, how leads turn into jobs, how you price and who owns what.",
      },
      {
        q: "How much does business consulting cost?",
        a: "It depends on the scope. A one-time session costs a lot less than ongoing advising. Tell me what's going on and you'll get a quote within 24 hours, with the scope spelled out.",
      },
      {
        q: "What kinds of businesses do you work with?",
        a: "Owner-run small businesses in Columbus and Central Ohio, mostly trades, service businesses and professional offices. If you have customers and revenue but feel stuck, it's worth a conversation.",
      },
      {
        q: "Do you work with my staff or only with me?",
        a: "Both. I start with the owner, then talk with the people doing the work. They usually know exactly where things break down.",
      },
      {
        q: "Can you help put the plan into action?",
        a: "Yes. I can stay involved to set up the process, train the team and check that it sticks. If the fix involves print, signs, apparel or vehicle graphics, Buckeye Biz Hub handles that too.",
      },
      {
        q: "Will you keep my business information private?",
        a: "Yes. What you share about your numbers, your staff and your customers stays between us. I don't name clients or share their numbers.",
      },
    ],
    related: ["website-design", "local-seo", "full-rebrand-kits"],
  },
];
