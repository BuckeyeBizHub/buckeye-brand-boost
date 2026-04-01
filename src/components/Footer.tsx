import { Link } from "react-router-dom";
import { Mail, Phone, ArrowRight, Shield, Clock, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import buckeyeLogo from "@/assets/buckeye-logo.png";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
];

const serviceLinks = [
  { label: "Business Printing", href: "/business-printing" },
  { label: "Promotional Products", href: "/promotional-products" },
  { label: "Vehicle Wraps & Branding", href: "/vehicle-branding" },
  { label: "Custom Signage & Banners", href: "/services" },
];

const Footer = () => {
  return (
    <footer className="bg-[hsl(0,0%,4%)] relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-[4px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_hsl(0_80%_42%/0.4)]" />

      {/* Glow effects */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.05] rounded-full blur-[180px]" />

      {/* Main Footer Content */}
      <div className="container relative py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 – Company Info */}
          <div>
            <Link to="/" className="inline-block mb-5">
              <img src={buckeyeLogo} alt="Buckeye Biz Hub" className="h-16 w-auto drop-shadow-[0_0_20px_hsl(0_85%_40%/0.4)]" />
            </Link>
            <p className="text-primary-foreground/50 text-sm font-bold leading-relaxed mb-3">
              Business Printing • Promotional Products • Vehicle Branding
            </p>
            <p className="text-primary-foreground/30 text-xs font-bold uppercase tracking-[0.1em]">
              Proudly Ohio Owned & Operated | Columbus, Ohio
            </p>
          </div>

          {/* Column 2 – Company */}
          <div>
            <h4 className="font-display text-xs font-black text-primary-foreground/60 uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-primary rounded-full" />
              Company
            </h4>
            <div className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <Link key={link.label} to={link.href} className="text-sm text-primary-foreground/35 hover:text-primary hover:translate-x-1 font-bold transition-all duration-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 – Services */}
          <div>
            <h4 className="font-display text-xs font-black text-primary-foreground/60 uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-primary rounded-full" />
              Services
            </h4>
            <div className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <Link key={link.label} to={link.href} className="text-sm text-primary-foreground/35 hover:text-primary hover:translate-x-1 font-bold transition-all duration-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4 – Get In Touch */}
          <div>
            <h4 className="font-display text-xs font-black text-primary-foreground/60 uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-primary rounded-full" />
              Get In Touch
            </h4>
            <div className="space-y-4 mb-6">
              <a href="tel:6145613358" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-primary/[0.1] border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-bold text-primary-foreground/50 group-hover:text-primary transition-colors duration-300">614-561-3358</span>
              </a>
              <a href="mailto:david@buckeyebizhub.com" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-primary/[0.1] border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-bold text-primary-foreground/50 group-hover:text-primary transition-colors duration-300">david@buckeyebizhub.com</span>
              </a>
            </div>

            <Link to="/contact">
              <Button size="sm" className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-black shadow-[0_0_25px_hsl(0_85%_40%/0.35)] uppercase tracking-wider text-xs group">
                Get Your 24-Hour Quote
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>

            {/* Trust badges */}
            <div className="mt-5 space-y-2">
              <div className="flex items-center gap-2 text-primary-foreground/30">
                <Shield className="w-3.5 h-3.5 text-primary/60" />
                <span className="text-[0.65rem] font-bold uppercase tracking-wider">Full Pricing Transparency</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/30">
                <ThumbsUp className="w-3.5 h-3.5 text-primary/60" />
                <span className="text-[0.65rem] font-bold uppercase tracking-wider">100% Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/30">
                <Clock className="w-3.5 h-3.5 text-primary/60" />
                <span className="text-[0.65rem] font-bold uppercase tracking-wider">Fast Local Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/[0.06] bg-[hsl(220,30%,4%)]">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/25 text-xs font-bold">
              © 2026 Buckeye Biz Hub. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4 text-xs font-bold">
              <Link to="/privacy-policy" className="text-primary-foreground/25 hover:text-primary transition-colors duration-300">Privacy Policy</Link>
              <span className="text-primary-foreground/10">|</span>
              <Link to="/contact" className="text-primary-foreground/25 hover:text-primary transition-colors duration-300">Terms of Service</Link>
            </div>
            <p className="text-primary-foreground/20 text-[0.65rem] font-bold uppercase tracking-[0.1em]">
              500+ Happy Ohio Businesses • A+ Rating • 24-Hour Quotes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;