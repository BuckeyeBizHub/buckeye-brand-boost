import { motion } from "framer-motion";
import { Camera } from "lucide-react";

import hvacImg from "@/assets/gallery-hvac-before-after.jpg";
import landscapingImg from "@/assets/gallery-landscaping-fleet.jpg";
import deliveryImg from "@/assets/gallery-delivery-truck.jpg";
import magneticImg from "@/assets/gallery-magnetic-decal.jpg";
import fleetImg from "@/assets/gallery-fleet-consistency.jpg";
import boxTruckImg from "@/assets/gallery-box-truck-360.jpg";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const galleryItems = [
  { image: hvacImg, alt: "Before and after HVAC van wrap in Columbus Ohio" },
  { image: landscapingImg, alt: "Fleet of wrapped landscaping trucks on rural Ohio road" },
  { image: deliveryImg, alt: "Delivery truck with perforated window graphics in downtown Columbus" },
  { image: magneticImg, alt: "Magnetic door decal being applied to a business van" },
  { image: fleetImg, alt: "Fleet consistency shot with matching wrapped vehicles at Ohio job site" },
  { image: boxTruckImg, alt: "Wrapped box truck on construction site" },
];

const GallerySection = () => (
  <section className="py-24 lg:py-32 bg-background">
    <div className="container max-w-6xl mx-auto px-6">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center justify-center gap-3 mb-14">
        <Camera className="w-8 h-8 text-primary" />
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground text-center">
          Real Ohio Wraps in Action
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
