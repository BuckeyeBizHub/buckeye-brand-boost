import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-ohio-grey-dark py-14 border-t border-primary-foreground/[0.05] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/[0.03] rounded-full blur-[100px]" />
      <div className="container relative text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display italic text-primary-foreground/45 text-xl mb-3"
        >
          Rooted in Ohio. Built to Grow Your Business.
        </motion.p>
        <div className="w-16 h-[2px] bg-primary/30 mx-auto my-5 rounded-full" />
        <p className="text-primary-foreground/25 text-sm font-medium">
          © {new Date().getFullYear()} Buckeye Biz Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
