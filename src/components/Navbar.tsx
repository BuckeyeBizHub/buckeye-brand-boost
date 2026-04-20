import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ChevronDown, ExternalLink, Facebook, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import buckeyeLogo from "@/assets/buckeye-logo.png";

const serviceLinks = [
  { label: "Promotional Products", href: "/promotional-products" },
  { label: "Business Printing", href: "/business-printing" },
  { label: "Door Hangers", href: "/door-hangers" },
  { label: "Yard Signs & Signage", href: "/yard-signs-and-signage" },
  { label: "Banners & Large Format", href: "/banners-and-flags" },
  { label: "Vehicle Wraps & Fleet Graphics", href: "/vehicle-wraps-and-fleet-branding" },
  { label: "Branded Apparel", href: "/branded-apparel-and-uniforms" },
  { label: "Presentation Folders & Marketing Kits", href: "/presentation-folders" },
];

const industryLinks = [
  { label: "Dental Practices & Specialty Offices", href: "/dental" },
  { label: "Roofing & Exterior Contractors", href: "/roofing" },
  { label: "All Industries We Serve", href: "/industries" },
];

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  hasDropdown?: boolean;
  dropdownType?: "services" | "industries";
}

const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true, dropdownType: "services" },
  { label: "Industries Served", href: "/industries", hasDropdown: true, dropdownType: "industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"services" | "industries" | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
  }, [location.pathname]);

  const handleEnter = (type: "services" | "industries") => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(type);
  };
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const isServicesActive = () =>
    isActive("/services") || serviceLinks.some((s) => isActive(s.href));

  const isIndustriesActive = () =>
    isActive("/industries") || industryLinks.some((s) => isActive(s.href));

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        aria-label="Main navigation"
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-[hsl(0,0%,4%)]/[0.98] backdrop-blur-2xl shadow-[0_4px_40px_rgba(0,0,0,0.4)] border-b border-primary/[0.08]"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-3.5">
          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img
              src={buckeyeLogo}
              alt="Buckeye Biz Hub"
              className="h-14 w-auto drop-shadow-[0_0_15px_hsl(0_85%_40%/0.4)]"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                const isServices = link.dropdownType === "services";
                const items = isServices ? serviceLinks : industryLinks;
                const active = isServices ? isServicesActive() : isIndustriesActive();
                const isOpen = openDropdown === link.dropdownType;
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => handleEnter(link.dropdownType!)}
                    onMouseLeave={handleLeave}
                  >
                    <Link
                      to={link.href}
                      className={`relative flex items-center gap-1 text-[0.7rem] xl:text-[0.75rem] font-bold tracking-[0.1em] uppercase px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 ${
                        active
                          ? "text-primary-foreground bg-primary-foreground/[0.06]"
                          : "text-primary-foreground/50 hover:text-primary-foreground hover:bg-primary-foreground/[0.04]"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </Link>

                    {/* Dropdown panel */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-72 rounded-xl border border-primary/15 bg-[hsl(0,0%,6%)] backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-200 origin-top-left ${
                        isOpen
                          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                      }`}
                    >
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-ohio-red-light to-primary" />
                      <div className="py-2">
                        {items.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className={`block px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                              isActive(item.href)
                                ? "text-primary bg-primary/[0.1]"
                                : "text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/[0.06] hover:pl-7"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                        {isServices && (
                          <div className="border-t border-primary/[0.1] mt-1 pt-1">
                            <Link
                              to="/services"
                              className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-primary hover:bg-primary/[0.08] transition-all duration-200"
                            >
                              View All Services
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }
              return link.external ? (
                /* Shop Online */
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-[0.7rem] xl:text-[0.75rem] font-bold tracking-[0.1em] uppercase px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 text-primary hover:text-primary-foreground hover:bg-primary/[0.12] border border-primary/30 hover:border-primary/60"
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3 inline-block ml-1 -mt-0.5" />
                </a>
              ) : (
                /* Regular link */
                <Link
                  key={link.label}
                  to={link.href}
                  className={`relative text-[0.7rem] xl:text-[0.75rem] font-bold tracking-[0.1em] uppercase px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(link.href)
                      ? "text-primary-foreground bg-primary-foreground/[0.06]"
                      : "text-primary-foreground/50 hover:text-primary-foreground hover:bg-primary-foreground/[0.04]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Social + CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-1.5 pr-1 border-r border-primary-foreground/10 mr-1">
              <a
                href="https://www.facebook.com/BuckeyeBizHub/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-8 h-8 flex items-center justify-center rounded-md text-primary-foreground/50 hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/buckeyebizhub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-8 h-8 flex items-center justify-center rounded-md text-primary-foreground/50 hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.pinterest.com/BuckeyeBizHub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Pinterest"
                className="w-8 h-8 flex items-center justify-center rounded-md text-primary-foreground/50 hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
            </div>
            <Link to="/contact">
              <Button
                size="sm"
                className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black px-6 shadow-[0_0_25px_hsl(0_85%_40%/0.35)] hover:shadow-[0_0_40px_hsl(0_85%_40%/0.55)] transition-all duration-300 group uppercase tracking-wider text-xs"
              >
                Get 24-Hour Quote
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden text-primary-foreground p-1" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ══ Mobile Menu ══ */}
        {open && (
          <div className="lg:hidden bg-[hsl(0,0%,4%)]/[0.98] backdrop-blur-2xl border-t border-primary/[0.1] pb-5 animate-fade-in max-h-[calc(100vh-72px)] overflow-y-auto">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`flex items-center justify-between w-full px-6 py-3.5 text-sm font-bold uppercase tracking-widest transition-colors ${
                      isServicesActive() ? "text-primary" : "text-primary-foreground/50 hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="bg-primary-foreground/[0.03] border-y border-primary/[0.08] py-2">
                      {serviceLinks.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setOpen(false)}
                          className={`block px-10 py-3 text-sm font-bold uppercase tracking-widest transition-colors ${
                            isActive(item.href)
                              ? "text-primary"
                              : "text-primary-foreground/40 hover:text-primary"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                      <Link
                        to="/services"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2 px-10 py-3 text-sm font-bold uppercase tracking-widest text-primary hover:text-ohio-red-light transition-colors"
                      >
                        View All Services
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              ) : link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3.5 text-sm font-bold uppercase tracking-widest transition-colors text-primary hover:text-ohio-red-light"
                >
                  {link.label}
                  <ExternalLink className="w-3.5 h-3.5 inline-block ml-1.5 -mt-0.5" />
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-3.5 text-sm font-bold uppercase tracking-widest transition-colors ${
                    isActive(link.href) ? "text-primary" : "text-primary-foreground/50 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="px-6 pt-4">
              <Link to="/contact" onClick={() => setOpen(false)}>
                <Button
                  size="sm"
                  className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-black shadow-[0_0_25px_hsl(0_85%_40%/0.35)] uppercase tracking-wider group"
                >
                  Get 24-Hour Quote
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>
              <div className="flex items-center justify-center gap-4 mt-5">
                <a
                  href="https://www.facebook.com/BuckeyeBizHub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-primary-foreground/60 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/buckeyebizhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-primary-foreground/60 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.pinterest.com/BuckeyeBizHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Pinterest"
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-primary-foreground/60 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
