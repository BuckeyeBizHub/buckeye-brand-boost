"use client";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const hvacImg = "/assets/gallery-hvac-before-after.jpg";
const landscapingImg = "/assets/gallery-landscaping-fleet.jpg";
const deliveryImg = "/assets/gallery-delivery-truck.jpg";
const magneticImg = "/assets/gallery-magnetic-decal.jpg";
const fleetImg = "/assets/gallery-fleet-consistency.jpg";
const boxTruckImg = "/assets/gallery-box-truck-360.jpg";
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const galleryItems = [
  { image: hvacImg, alt: "Example: before and after HVAC van wrap" },
  { image: landscapingImg, alt: "Example: fleet of wrapped landscaping trucks" },
  { image: deliveryImg, alt: "Example: delivery truck with perforated window graphics" },
  { image: magneticImg, alt: "Example: magnetic door decal on a business van" },
  { image: fleetImg, alt: "Example: matching wrapped vehicles at a job site" },
  { image: boxTruckImg, alt: "Example: wrapped box truck on a construction site" },
];

const GallerySection = () => (
  <section className="py-24 lg:py-32 bg-background">
    <div className="container max-w-6xl mx-auto px-6">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center justify-center gap-3 mb-14">
        <Camera className="w-8 h-8 text-primary" />
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground text-center">
          What a wrap can look like
        </h2>
      </motion.div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {galleryItems.map((item, i) => (
          <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
            className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          >
            <img src={item.image} alt={item.alt} loading="lazy" width={800} height={600}
              className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
