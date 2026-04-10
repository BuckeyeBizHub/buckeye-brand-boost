import { motion } from "framer-motion";
import { TrendingUp, MapPin, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import hvacImg from "@/assets/gallery-hvac-before-after.jpg";
import landscapingImg from "@/assets/gallery-landscaping-fleet.jpg";
import deliveryImg from "@/assets/gallery-delivery-truck.jpg";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const stories = [
  {
    icon: TrendingUp,
    image: hvacImg,
    title: "Columbus HVAC Company",
    desc: "Wrapped 12 service vans → 42% increase in inbound calls in 60 days. Wraps survived -10°F winters and heavy road salt with zero peeling.",
  },
  {
    icon: MapPin,
    image: landscapingImg,
    title: "Hartville Landscaping Fleet",
    desc: "Full wraps + door decals → doubled job leads from highway visibility in Stark County.",
  },
  {
    icon: Truck,
    image: deliveryImg,
    title: "Central Ohio Food-Delivery Service",
    desc: "8 refrigerated trucks turned into rolling billboards → consistent new-customer growth during peak lunch rushes.",
  },
];

const OhioSuccessStories = () => (
  <section className="py-24 lg:py-32 bg-muted/30">
    <div className="container max-w-6xl mx-auto px-6">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-14 text-center">
        Ohio Success Stories
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {stories.map((story, i) => (
          <motion.div key={story.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
            <Card className="overflow-hidden h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={story.image} alt={story.title + " vehicle wrap result"} loading="lazy" width={800} height={600} className="w-full h-52 object-cover" />
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <story.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-lg font-black text-foreground">{story.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{story.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OhioSuccessStories;
