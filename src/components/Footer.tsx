import { Link } from "react-router-dom";
import { Mail, Phone, ArrowRight, Shield, Clock, ThumbsUp, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import buckeyeLogo from "@/assets/buckeye-logo.png";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
];

const printingLinks = [
  { label: "Business Cards", href: "/business-cards" },
  { label: "Brochures & Printing", href: "/business-printing" },
  { label: "Postcards & Direct Mail", href: "/postcards" },
  { label: "Catalogs & Booklets", href: "/catalogs-and-booklets" },
  { label: "Presentation Folders", href: "/presentation-folders" },
  { label: "Letterhead & Envelopes", href: "/letterhead-and-envelopes" },
  { label: "Menus & Table Tents", href: "/menus-and-table-tents" },
  { label: "Large Format Printing", href: "/large-format-printing" },
];

const brandingLinks = [
  { label: "Promotional Products", href: "/promotional-products" },
  { label: "Branded Apparel", href: "/branded-apparel-and-uniforms" },
  { label: "Vehicle Wraps & Fleet", href: "/vehicle-wraps-and-fleet-branding" },
  { label: "Banners & Flags", href: "/banners-and-flags" },
  { label: "Custom Decals", href: "/decals" },
  { label: "Yard Signs & Signage", href: "/yard-signs-and-signage" },
  { label: "Full Rebrand Kits", href: "/full-rebrand-kits" },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
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
            <address className="not-italic mt-3 text-primary-foreground/25 text-[0.65rem] font-bold leading-relaxed">
              1193 Virginia Ave<br />
              Columbus, OH 43212
            </address>
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

          {/* Column 3 – Printing */}
          <div>
            <h4 className="font-display text-xs font-black text-primary-foreground/60 uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-primary rounded-full" />
              Printing
            </h4>
            <div className="flex flex-col gap-3">
              {printingLinks.map((link) => (
                <Link key={link.label} to={link.href} className="text-sm text-primary-foreground/35 hover:text-primary hover:translate-x-1 font-bold transition-all duration-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4 – Branding */}
          <div>
            <h4 className="font-display text-xs font-black text-primary-foreground/60 uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-primary rounded-full" />
              Branding
            </h4>
            <div className="flex flex-col gap-3">
              {brandingLinks.map((link) => (
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

            {/* Follow Us */}
            <div className="mt-6">
              <p className="text-[0.65rem] font-black text-primary-foreground/60 uppercase tracking-[0.2em] mb-3">
                Follow Us
              </p>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/BuckeyeBizHub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary/[0.08] border border-primary/20 text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/buckeyebizhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary/[0.08] border border-primary/20 text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.pinterest.com/BuckeyeBizHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Pinterest"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary/[0.08] border border-primary/20 text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                </a>
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
      {/* Spacer for mobile sticky CTA bar */}
      <div className="h-16 lg:hidden" />
    </footer>
  );
};

export default Footer;
