import { motion } from "framer-motion";
import { ClipboardCheck, Paintbrush, Layers, Printer, Wrench, HeartHandshake } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const steps = [
  { num: 1, icon: ClipboardCheck, title: "Free Consultation & Measurement", desc: "We visit your location in Central Ohio or use photos you send." },
  { num: 2, icon: Paintbrush, title: "Custom Design Proof", desc: "Professional 3D mockups on your exact vehicles (delivered in 24 hours)." },
  { num: 3, icon: Layers, title: "Premium Material Selection", desc: "3M or Avery high-performance vinyl engineered for Ohio winters, salt, and road debris." },
  { num: 4, icon: Printer, title: "Precision Printing & Lamination", desc: "UV-resistant inks with high-gloss or matte finish for maximum durability." },
  { num: 5, icon: Wrench, title: "Professional Installation", desc: "Certified Ohio installers (mobile service available at your shop or fleet yard)." },
  { num: 6, icon: HeartHandshake, title: "Follow-Up & Maintenance Kit", desc: "Free touch-up tools + yearly inspection to keep your wrap looking new." },
];

const HowItWorksSection = () => (
  <section className="py-24 lg:py-32 bg-background">
    <div className="container max-w-6xl mx-auto px-6">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-14 text-center">
        How It Works — 6 Simple Steps
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div key={step.num} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
            className="relative bg-card rounded-2xl border p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-black text-lg shrink-0">{step.num}</span>
              <step.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-black text-foreground mb-2">{step.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
