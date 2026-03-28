import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import buckeyeLogo from "@/assets/buckeye-logo.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Promotional Products", href: "/promotional-products" },
  { label: "Industries We Serve", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
];

const serviceLinks = [
  { label: "Business Printing", href: "/business-printing" },
  { label: "Promotional Products", href: "/promotional-products" },
  { label: "Vehicle Branding", href: "/vehicle-branding" },
];

const resourceLinks = [
  { label: "Blog & Resources", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const Footer = () => {
  return (
    <footer className="bg-[hsl(0,0%,4%)] relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-[4px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_hsl(0_80%_42%/0.4)]" />

      {/* Glow effects */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.05] rounded-full blur-[180px]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px]" />

      {/* Main Footer Content */}
      <div className="container relative py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <img src={buckeyeLogo} alt="Buckeye Biz Hub" className="h-20 w-auto drop-shadow-[0_0_20px_hsl(0_85%_40%/0.4)]" />
            </Link>
            <p className="text-primary-foreground/35 text-sm leading-[1.8] font-medium mb-6 max-w-xs">
              Ohio's one-stop hub for professional business printing, custom promotional products, and vehicle branding that gets your brand noticed.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-black text-primary uppercase tracking-[0.2em] hover:text-ohio-red-light transition-colors duration-300 group">
              Get a Free Quote
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs font-black text-primary-foreground/60 uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-primary rounded-full" />
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link key={link.label} to={link.href} className="text-sm text-primary-foreground/30 hover:text-primary hover:translate-x-1 font-bold transition-all duration-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs font-black text-primary-foreground/60 uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-primary rounded-full" />
              Services
            </h4>
            <div className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <Link key={link.label} to={link.href} className="text-sm text-primary-foreground/30 hover:text-primary hover:translate-x-1 font-bold transition-all duration-300">
                  {link.label}
                </Link>
              ))}
            </div>

            <h4 className="font-display text-xs font-black text-primary-foreground/60 uppercase tracking-[0.25em] mt-8 mb-6 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-primary rounded-full" />
              Resources
            </h4>
            <div className="flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <Link key={link.label} to={link.href} className="text-sm text-primary-foreground/30 hover:text-primary hover:translate-x-1 font-bold transition-all duration-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-xs font-black text-primary-foreground/60 uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-primary rounded-full" />
              Contact Us
            </h4>
            <div className="space-y-5">
              <a href="mailto:david@buckeyebizhub.com" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-primary/[0.1] border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[0.65rem] font-bold text-primary-foreground/30 uppercase tracking-[0.15em]">Email</p>
                  <p className="text-sm font-bold text-primary-foreground/50 group-hover:text-primary transition-colors duration-300">david@buckeyebizhub.com</p>
                </div>
              </a>
              <a href="tel:6145613358" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-primary/[0.1] border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[0.65rem] font-bold text-primary-foreground/30 uppercase tracking-[0.15em]">Phone</p>
                  <p className="text-sm font-bold text-primary-foreground/50 group-hover:text-primary transition-colors duration-300">614-561-3358</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/[0.1] border border-primary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[0.65rem] font-bold text-primary-foreground/30 uppercase tracking-[0.15em]">Location</p>
                  <p className="text-sm font-bold text-primary-foreground/50">Columbus, Ohio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/[0.06] relative">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display italic text-primary-foreground/35 text-lg"
            >
              Rooted in Ohio. Built to Grow Your Business.
            </motion.p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center">
              <p className="text-primary-foreground/20 text-xs font-bold">
                © 2026 Buckeye Biz Hub, LLC. All Rights Reserved.
              </p>
              <span className="hidden sm:inline text-primary-foreground/10">|</span>
              <p className="text-primary-foreground/20 text-xs font-bold">Columbus, Ohio</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
