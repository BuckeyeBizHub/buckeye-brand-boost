import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import buckeyeLogo from "@/assets/buckeye-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[hsl(0,0%,4%)] py-20 border-t border-primary/[0.1] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.04] rounded-full blur-[150px]" />
      <div className="container relative">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-1.5 mb-5">
              <span className="font-display italic text-2xl font-black text-primary-foreground">Buckeye</span>
              <span className="font-display text-2xl font-black text-primary">Biz Hub</span>
            </Link>
            <p className="text-primary-foreground/30 text-sm leading-relaxed font-medium">
              Ohio's one-stop hub for business printing, promotional products, and vehicle branding.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-black text-primary-foreground/60 uppercase tracking-[0.2em] mb-5">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Services", href: "/services" },
                { label: "Promotional Products", href: "/promotional-products" },
                { label: "Business Printing", href: "/business-printing" },
                { label: "Industries", href: "/industries" },
                { label: "About", href: "/about" },
              ].map((link) => (
                <Link key={link.label} to={link.href} className="text-sm text-primary-foreground/30 hover:text-primary font-bold transition-colors duration-300">{link.label}</Link>
              ))}
            </div>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-black text-primary-foreground/60 uppercase tracking-[0.2em] mb-5">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:david@buckeyebizhub.com" className="text-sm text-primary-foreground/30 hover:text-primary font-bold transition-colors duration-300">david@buckeyebizhub.com</a>
              <a href="tel:6145613358" className="text-sm text-primary-foreground/30 hover:text-primary font-bold transition-colors duration-300">614-561-3358</a>
              <span className="text-sm text-primary-foreground/30 font-bold">Columbus, Ohio</span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/[0.06] pt-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display italic text-primary-foreground/40 text-lg mb-3 text-center"
          >
            Rooted in Ohio. Built to Grow Your Business.
          </motion.p>
          <div className="w-20 h-[2px] bg-primary/30 mx-auto my-4 rounded-full" />
          <p className="text-primary-foreground/20 text-sm font-medium text-center">
            © {new Date().getFullYear()} Buckeye Biz Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
