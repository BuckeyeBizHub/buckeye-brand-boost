import SimpleServicePage from "@/components/services/SimpleServicePage";
import hero from "@/assets/vehicle-wrap-hero.jpg";
import g1 from "@/assets/vehicle-wrap-fleet-real.jpg";
import g2 from "@/assets/vehicle-wrap-full-real.jpg";
import g3 from "@/assets/vehicle-wrap-lumpia-queen-columbus.jpg";

const VehicleWraps = () => (
  <SimpleServicePage
    service="Vehicle Wraps"
    metaTitle="Vehicle Wraps in Columbus, Ohio | Buckeye Biz Hub"
    metaDescription="Custom vehicle wraps in Columbus, Ohio. Turn your truck, van, or fleet into a 24/7 mobile billboard with premium 3M and Avery materials installed by trusted Ohio pros."
    slug="/vehicle-wraps"
    description={`A vehicle wrap is the single highest-ROI marketing investment most Columbus, Ohio businesses ever make. Industry studies show a single wrapped vehicle generates between 30,000 and 70,000 visual impressions every day it's on the road — and unlike paid ads, you only pay for it once. Whether you're an HVAC tech driving I-270 every morning, a landscaper rolling through Dublin and Westerville, or a contractor parked at job sites all week, your vehicle is already going where your customers live and work. We just turn it into a billboard.

At Buckeye Biz Hub, we handle vehicle wraps in Columbus Ohio end-to-end: design, materials, and installation. We use only premium 3M and Avery vinyl rated for 5–7 years of Ohio weather, and we partner with vetted Central Ohio installers who do this every single day. You can choose a full wrap, partial wrap, vehicle decals, magnetics for personal vehicles, or window perforated graphics — whatever fits your goals and budget.

Every wrap project starts with a free consultation. David personally reviews your brand, your vehicle, and your goals, then comes back with a transparent quote within 24 hours showing wholesale material cost, design fee, and install fee separately. No markup games. No hidden charges. Just a wrap that makes your truck the most-noticed vehicle on every Columbus job site, parking lot, and freeway.`}
    gallery={[
      { src: g1, alt: "Wrapped service fleet for a Columbus, Ohio company" },
      { src: g2, alt: "Full vehicle wrap with brand graphics in Central Ohio" },
      { src: g3, alt: "Local Columbus business vehicle wrap close-up" },
    ]}
    startingFrom="$1,495"
    pricingNote="for a partial wrap; full wraps from $3,200"
    benefits={[
      "30,000–70,000 daily impressions per wrapped vehicle in Central Ohio traffic",
      "Premium 3M and Avery cast vinyl built to handle Ohio winters and summers",
      "Full design, print, and installation managed by one trusted local team",
      "Protects your factory paint and preserves vehicle resale value",
      "Transparent pricing — wholesale materials, design, and install priced separately",
    ]}
  />
);

export default VehicleWraps;
