"use client";
import SimpleServicePage from "@/components/services/SimpleServicePage";
const hero = "/assets/vehicle-wrap-hero.jpg";
const g1 = "/assets/vehicle-wrap-fleet-real.jpg";
const g2 = "/assets/vehicle-wrap-full-real.jpg";
const g3 = "/assets/vehicle-wrap-lumpia-queen-columbus.jpg";
const VehicleWraps = () => (
  <SimpleServicePage
    service="Vehicle Wraps"
    metaTitle="Vehicle Wraps in Columbus, Ohio | Buckeye Biz Hub"
    metaDescription="Custom vehicle wraps in Columbus, Ohio. Turn your truck, van or fleet into a 24/7 billboard with 3M and Avery vinyl installed by trusted Ohio pros."
    slug="/vehicle-wraps"
    description={`For most Columbus, Ohio businesses, a vehicle wrap is the best marketing money they'll ever spend. It works every day it's on the road. And you pay for it once. HVAC tech on I-270 every morning, landscaper rolling through Dublin and Westerville, contractor parked at job sites all week: your truck already goes where your customers live and work. We turn it into a billboard.

Buckeye Biz Hub runs vehicle wraps in Columbus, Ohio start to finish: design, materials and installation. We focus on commercial fleets. We use 3M and Avery vinyl rated for 5–7 years of Ohio weather, and we work with vetted Central Ohio installers who wrap vehicles every day. Pick a full wrap, partial wrap, decals, magnets for personal vehicles or perforated window graphics. Whatever fits your goals and budget.

Every wrap starts with a free consultation. David looks at your brand, your vehicles and your goals, then gets you a quote within 24 hours. Material, design and install are listed separately. No markup games. No hidden charges. Just a wrap that makes your truck the one people notice on every job site, parking lot and freeway in Columbus.`}
    gallery={[
      { src: g1, alt: "Wrapped service fleet for a Columbus, Ohio company" },
      { src: g2, alt: "Full vehicle wrap with brand graphics in Central Ohio" },
      { src: g3, alt: "Local Columbus business vehicle wrap close-up" },
    ]}
    startingFrom="$1,495"
    pricingNote="for a partial wrap; full wraps from $3,200"
    benefits={[
      "3M and Avery cast vinyl built for Ohio winters and summers",
      "Design, print and install managed by one local point of contact",
      "Protects your factory paint and preserves vehicle resale value",
      "Materials, design and install priced separately on every quote",
    ]}
  />
);

export default VehicleWraps;
