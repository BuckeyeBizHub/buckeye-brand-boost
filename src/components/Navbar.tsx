import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import buckeyeLogo from "@/assets/buckeye-logo.png";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "About Us", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
  { label: "Industries", href: "/industries" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Business Cards & Stationery", href: "/business-cards" },
      { label: "Brochures & Business Printing", href: "/brochures-and-business-printing" },
      { label: "Promotional Products & Giveaways", href: "/promotional-products" },
      { label: "Branded Apparel & Uniforms", href: "/branded-apparel-and-uniforms" },
      { label: "Yard Signs & Custom Signage", href: "/yard-signs-and-signage" },
      { label: "Vehicle Wraps & Fleet Branding", href: "/vehicle-wraps-and-fleet-branding" },
      { label: "Full Rebrand Kits", href: "/full-rebrand-kits" },
      { label: "Website Design & Development", href: "/website-design" },
      { label: "Local SEO & Google Ranking", href: "/local-seo" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  const handleMouseEnter = (label: string) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const isNavActive = (link: NavLink) => {
    if (isActive(link.href)) return true;
    return link.dropdown?.some((s) => isActive(s.href)) ?? false;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[hsl(0,0%,4%)]/[0.98] backdrop-blur-2xl shadow-[0_4px_40px_rgba(0,0,0,0.4)] border-b border-primary/[0.08]" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between py-3.5">
        {/* Logo */}
        <Link to="/" className="flex items-center group flex-shrink-0">
          <img src={buckeyeLogo} alt="Buckeye Biz Hub" className="h-14 w-auto drop-shadow-[0_0_15px_hsl(0_85%_40%/0.4)]" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.href}
                  className={`relative flex items-center gap-1 text-[0.75rem] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded-lg transition-all duration-300 ${
                    isNavActive(link)
                      ? "text-primary-foreground bg-primary-foreground/[0.06]"
                      : "text-primary-foreground/50 hover:text-primary-foreground hover:bg-primary-foreground/[0.04]"
                  }`}
                >
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                </Link>

                <div
                  className={`absolute top-full left-0 mt-2 w-64 rounded-2xl border-2 border-primary/15 bg-[hsl(0,0%,6%)] backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_hsl(0_85%_40%/0.1)] overflow-hidden transition-all duration-300 origin-top ${
                    activeDropdown === link.label
                      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-ohio-red-light to-primary" />
                  <div className="py-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className={`block px-6 py-3.5 text-sm font-bold transition-all duration-200 ${
                          isActive(item.href)
                            ? "text-primary bg-primary/[0.1]"
                            : "text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/[0.06] hover:pl-8"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`relative text-[0.75rem] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(link.href)
                    ? "text-primary-foreground bg-primary-foreground/[0.06]"
                    : "text-primary-foreground/50 hover:text-primary-foreground hover:bg-primary-foreground/[0.04]"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* CTA */}
        <Link to="/contact" className="hidden lg:block flex-shrink-0">
          <Button size="sm" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black px-7 shadow-[0_0_25px_hsl(0_85%_40%/0.35)] hover:shadow-[0_0_40px_hsl(0_85%_40%/0.55)] transition-all duration-300 group uppercase tracking-wider text-xs">
            Get 24-Hour Quote
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </Link>

        {/* Mobile toggle */}
        <button className="lg:hidden text-primary-foreground p-1" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[hsl(0,0%,4%)]/[0.98] backdrop-blur-2xl border-t border-primary/[0.1] pb-5 animate-fade-in max-h-[calc(100vh-72px)] overflow-y-auto">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                  className={`flex items-center justify-between w-full px-6 py-3.5 text-sm font-bold uppercase tracking-widest transition-colors ${
                    isNavActive(link) ? "text-primary" : "text-primary-foreground/50 hover:text-primary"
                  }`}
                >
                  {link.label}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileExpanded === link.label ? "rotate-180" : ""}`} />
                </button>
                {mobileExpanded === link.label && (
                  <div className="bg-primary-foreground/[0.03] border-y border-primary/[0.08]">
                    <Link to={link.href} onClick={() => setOpen(false)} className="block px-10 py-3 text-sm font-bold text-primary-foreground/40 hover:text-primary uppercase tracking-widest">
                      View All
                    </Link>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={() => setOpen(false)}
                        className={`block px-10 py-3 text-sm font-bold uppercase tracking-widest transition-colors ${
                          isActive(item.href) ? "text-primary" : "text-primary-foreground/40 hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
              <Button size="sm" className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-black shadow-[0_0_25px_hsl(0_85%_40%/0.35)] uppercase tracking-wider group">
                Get 24-Hour Quote
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
