import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustryCard from "@/components/industries/IndustryCard";
import IndustriesCTA from "@/components/industries/IndustriesCTA";

import industryDentist from "@/assets/industry-dentist.jpg";
import industryMedical from "@/assets/industry-medical.jpg";
import industryHvac from "@/assets/industry-hvac.jpg";
import industryAuto from "@/assets/industry-auto.jpg";
import industryLandscaping from "@/assets/industry-landscaping.jpg";
import industryRealestate from "@/assets/industry-realestate.jpg";
import industryRestaurant from "@/assets/industry-restaurant.jpg";
import industryConstruction from "@/assets/industry-construction.jpg";
import industryAdditional from "@/assets/industry-additional.jpg";

const industries = [
  {
    image: industryDentist,
    title: "Dentists & Dental Practices",
    description: "From branded reception signage and patient welcome kits to custom vehicle wraps for mobile dental units, we help Columbus dental practices build instant trust and stay top-of-mind with every patient interaction.",
    bullets: [
      "Custom appointment & recall cards",
      "Branded patient giveaways & toothbrush kits",
      "Professional window & lobby graphics",
      "Vehicle wraps for shuttles & mobile units",
      "Embroidered staff polos & scrubs",
      "Referral program materials & direct mail",
    ],
    quote: "Our new vehicle wrap and lobby signage made our practice look 10x more professional. Patients comment on it every single day.",
    ctaLabel: "Get Dental Practice Quote",
  },
  {
    image: industryMedical,
    title: "Medical Offices & Doctors",
    description: "Medical offices across Columbus and Ohio trust us for professional brochures, HIPAA-compliant forms, branded staff apparel, and wayfinding signage that projects competence and builds patient confidence from the moment they walk in.",
    bullets: [
      "Professional brochures & patient education",
      "Branded scrubs, lab coats & staff apparel",
      "Lobby signage & wayfinding displays",
      "Home health vehicle wraps",
      "Prescription pads & HIPAA-compliant forms",
      "Exterior building graphics & monument signs",
    ],
    quote: "Buckeye Biz Hub handled everything — from our scrub embroidery to our fleet branding. One partner for it all.",
    ctaLabel: "Get Medical Office Quote",
  },
  {
    image: industryHvac,
    title: "HVAC & Plumbing Services",
    description: "A professionally wrapped service truck generates thousands of impressions daily. We make your HVAC or plumbing fleet impossible to miss — plus door hangers, yard signs, branded uniforms, and promotional leave-behinds that keep your phone ringing.",
    bullets: [
      "Full & partial truck wraps",
      "Yard signs for active job sites",
      "Branded uniforms, polos & hats",
      "Refrigerator magnets & door hangers",
      "Promotional leave-behinds (pens, flashlights)",
      "Business cards & estimate folders",
    ],
    quote: "Our wrapped vans are the best advertising we've ever done. We get calls every week from people who saw us in their neighborhood.",
    ctaLabel: "Get HVAC & Plumbing Quote",
  },
  {
    image: industryAuto,
    title: "Auto Dealerships & Automotive",
    description: "Ohio auto dealerships need bold signage that moves inventory. From showroom banners and lot flags to custom staff apparel and service shuttle wraps, every piece is designed to enhance your dealership's image and drive foot traffic.",
    bullets: [
      "Showroom banners & window clings",
      "Custom license plate frames & key tags",
      "Lot flags, A-frames & directional signs",
      "Branded sales staff polos & jackets",
      "Service shuttle & courtesy car wraps",
      "Illuminated exterior displays",
    ],
    quote: "The banners and lot flags transformed our curb appeal. We've seen a real uptick in walk-in traffic since the rebrand.",
    ctaLabel: "Get Auto Dealership Quote",
  },
  {
    image: industryLandscaping,
    title: "Lawn Care & Landscaping",
    description: "For Columbus landscaping businesses, visibility is everything. Custom trailer wraps, truck lettering, and branded yard signs at every job site turn satisfied customers into your best referral engine — with a crew that looks as professional as their work.",
    bullets: [
      "Trailer & truck wraps and lettering",
      "Branded job-site yard signs",
      "Custom crew t-shirts & embroidered hats",
      "Vehicle magnetics for seasonal trucks",
      "Promotional giveaways (seed packets, koozies)",
      "Estimate folders & door hangers",
    ],
    quote: "Every yard sign we plant at a job generates at least 2–3 calls from neighbors. It's been incredible for growth.",
    ctaLabel: "Get Landscaping Quote",
  },
  {
    image: industryRealestate,
    title: "Real Estate Agents & Agencies",
    description: "Columbus real estate agents rely on us for premium For Sale signs, luxury business cards, and branded closing gifts that create unforgettable client experiences. Vehicle magnets and partial wraps keep your personal brand visible on every showing drive.",
    bullets: [
      "For Sale signs, riders & directional arrows",
      "Luxury business cards & property brochures",
      "Branded closing gifts (tumblers, cutting boards)",
      "Vehicle magnets & partial wraps",
      "Open house banners & A-frame displays",
      "Just-sold postcards & direct mail",
    ],
    quote: "My branded closing gift packages have become a huge referral driver. Clients love them and remember my name.",
    ctaLabel: "Get Real Estate Quote",
  },
  {
    image: industryRestaurant,
    title: "Restaurants & Bars",
    description: "From custom bar rail mats and branded coasters to professional menus, table tents, and staff uniforms, we help Columbus restaurants and bars create an unforgettable brand experience that turns first-time visitors into loyal regulars.",
    bullets: [
      "Custom bar rail mats & branded coasters",
      "Professional menus & table tents",
      "Staff uniforms & embroidered aprons",
      "Window decals & sidewalk A-frames",
      "Branded delivery vehicle wraps",
      "Loyalty cards & promotional merch",
    ],
    quote: "The branded coasters, menus, and staff polos gave our restaurant a cohesive, polished look that customers notice immediately.",
    ctaLabel: "Get Restaurant Quote",
  },
  {
    image: industryConstruction,
    title: "Construction & Contractors",
    description: "Ohio construction companies depend on us for truck and trailer wraps, job-site banners, branded safety gear, and professional proposal materials that project credibility on every project and close more bids.",
    bullets: [
      "Truck & trailer wraps",
      "Job-site banners & safety signage",
      "Branded hard hats & hi-vis vests",
      "Embroidered jackets & workwear",
      "Business cards & proposal folders",
      "Yard signs at active build sites",
    ],
    quote: "Our wrapped fleet and branded crew gear make us look like the biggest company on every job site. It wins us contracts.",
    ctaLabel: "Get Construction Quote",
  },
  {
    image: industryAdditional,
    title: "Additional Industries We Serve",
    description: "We also proudly serve many more Ohio businesses including retail stores, manufacturing, law firms, education, property management, logistics & warehousing, and more. No matter your industry, we deliver premium branding at wholesale pricing.",
    bullets: [
      "Retail stores & boutiques",
      "Manufacturing & industrial",
      "Law firms & professional services",
      "Schools, colleges & education",
      "Property management companies",
      "Logistics, warehousing & distribution",
      "Fitness studios & gyms",
      "Nonprofits & community organizations",
    ],
    quote: "We weren't sure if Buckeye Biz Hub worked with our niche industry — turns out they had perfect solutions ready to go.",
    ctaLabel: "Tell Us About Your Industry",
  },
];

const Industries = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Buckeye Biz Hub – Industries We Serve",
    description: "Tailored printing, promotional products & vehicle branding for Ohio's key industries including dental, medical, HVAC, automotive, landscaping, real estate, restaurants, construction, and more.",
    url: "https://buckeye-brand-boost.lovable.app/industries",
    areaServed: { "@type": "State", name: "Ohio" },
    address: { "@type": "PostalAddress", addressRegion: "OH", addressCountry: "US" },
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <IndustriesHero />

      {/* Industry Card Grid */}
      <section className="py-20 lg:py-28 bg-ohio-cream">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
              Tailored Solutions for <span className="text-primary">Every Industry</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We understand the unique branding needs of Ohio businesses. Here's how we help each industry stand out, grow, and win.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {industries.map((ind, i) => (
              <IndustryCard key={ind.title} industry={ind} index={i} />
            ))}
          </div>
        </div>
      </section>

      <IndustriesCTA />
      <Footer />
    </div>
  );
};

export default Industries;
