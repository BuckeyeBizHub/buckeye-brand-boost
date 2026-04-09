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
          "After running three different companies here in Ohio for over 25 years, I've learned the hard way how expensive and time-consuming branding mistakes can be. That's why we built Buckeye Biz Hub and secured strong local partnerships — so we can help you create a powerful, professional brand while saving you significant time and, more importantly, real money by avoiding those same costly errors."
        </p>
        <footer className="mt-6">
          <p className="font-bold text-foreground text-base md:text-lg">— David Stein, Your Buckeye Branding Concierge</p>
          <p className="text-muted-foreground text-sm font-semibold">Buckeye Biz Hub</p>
        </footer>
      </motion.blockquote>
    </div>
  </section>
);

export default FounderQuote;
