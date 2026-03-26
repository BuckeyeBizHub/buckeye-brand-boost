import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4"
        >
          Ready to Grow Your Ohio Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-xl text-primary-foreground/80 mb-10"
        >
          Let's build your brand together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold text-lg px-10 py-6 shadow-lg">
            Get a Free Quote in 24 Hours
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
