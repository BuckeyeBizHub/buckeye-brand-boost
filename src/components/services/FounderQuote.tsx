"use client";
import { motion } from "framer-motion";

const FounderQuote = () => (
  <section className="py-16 lg:py-24 bg-background">
    <div className="container max-w-4xl mx-auto px-6">
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-l-4 border-primary pl-8 md:pl-10"
      >
        <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed italic font-serif">
          "I've run businesses in Ohio for over 25 years. I learned the hard way what branding mistakes cost, in time and in money. So we built Buckeye Biz Hub on partners we trust. You get a sharp, professional brand, and you skip the mistakes I already paid for."
        </p>
        <footer className="mt-6">
          <p className="font-bold text-foreground text-base md:text-lg">David Stein, co-founder</p>
          <p className="text-muted-foreground text-sm font-semibold">Buckeye Biz Hub</p>
        </footer>
      </motion.blockquote>
    </div>
  </section>
);

export default FounderQuote;
