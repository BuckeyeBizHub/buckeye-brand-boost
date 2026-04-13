import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ChevronDown, ExternalLink, Printer, LayoutGrid, Gift } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import buckeyeLogo from "@/assets/buckeye-logo.png";

/* ── Mega-menu columns ── */
const megaColumns = [
  {
    icon: Printer,
    title: "Printing & Marketing",
    items: [
      { label: "Business Printing", href: "/business-printing" },
      { label: "Door Hangers", href: "/door-hangers" },
      { label: "Presentation Folders & Marketing Kits", href: "/presentation-folders" },
    ],
  },
  {
    icon: LayoutGrid,
    title: "Signs & Large Format",
    items: [
      { label: "Yard Signs & Signage", href: "/yard-signs-and-signage" },
      { label: "Banners & Large Format", href: "/banners-and-flags" },
    ],
  },
  {
    icon: Gift,
    title: "Promotional & Branding",
    items: [
      { label: "Promotional Products", href: "/promotional-products" },
      { label: "Vehicle Wraps & Fleet Graphics", href: "/vehicle-wraps-and-fleet-branding" },
      { label: "Branded Apparel", href: "/branded-apparel-and-uniforms" },
    ],
  },
];

const allServiceLinks = megaColumns.flatMap((c) => c.items);

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  isMega?: boolean;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", isMega: true },
  { label: "Pricing", href: "/pricing" },
  { label: "Shop Online", href: "http://www.buckeyebizhub.store/", external: true },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMegaOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const handleMegaEnter = () => {
    clearTimeout(timeoutRef.current);
    setMegaOpen(true);
  };
  const handleMegaLeave = () => {
    timeoutRef.current = setTimeout(() => setMegaOpen(false), 150);
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const isServicesActive = () =>
    isActive("/services") || allServiceLinks.some((s) => isActive(s.href));

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
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) =>
              link.isMega ? (
                /* ── Services with Mega Menu ── */
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={handleMegaEnter}
                  onMouseLeave={handleMegaLeave}
                >
                  <Link
                    to={link.href}
                    className={`relative flex items-center gap-1 text-[0.75rem] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded-lg transition-all duration-300 ${
                      isServicesActive()
                        ? "text-primary-foreground bg-primary-foreground/[0.06]"
                        : "text-primary-foreground/50 hover:text-primary-foreground hover:bg-primary-foreground/[0.04]"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`}
                    />
                  </Link>

                  {/* Mega-menu panel */}
                  <div
                    className={`absolute top-full right-0 mt-2 w-[680px] xl:w-[760px] rounded-2xl border-2 border-primary/15 bg-[hsl(0,0%,6%)] backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_hsl(0_85%_40%/0.1)] overflow-hidden transition-all duration-300 origin-top-right ${
                      megaOpen
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    {/* Top accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-ohio-red-light to-primary" />

                    {/* 3-column grid */}
                    <div className="grid grid-cols-3 gap-0 divide-x divide-primary/[0.08] pt-4 pb-2 px-2">
                      {megaColumns.map((col) => (
                        <div key={col.title} className="px-4">
                          <div className="flex items-center gap-2 mb-3 px-2">
                            <col.icon className="w-4 h-4 text-primary" />
                            <span className="text-xs font-black uppercase tracking-[0.15em] text-primary-foreground/40">
                              {col.title}
                            </span>
                          </div>
                          {col.items.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className={`block px-3 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 ${
                                isActive(item.href)
                                  ? "text-primary bg-primary/[0.1]"
                                  : "text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/[0.06] hover:pl-5"
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>

                    {/* Bottom bar */}
                    <div className="border-t border-primary/[0.1] px-6 py-4 flex items-center justify-between">
                      <p className="text-xs text-primary-foreground/35 max-w-sm">
                        Local Columbus concierge service — design, printing, and delivery included
                      </p>
                      <Link to="/services">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-bold text-xs uppercase tracking-wider group"
                        >
                          View All Services
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : link.external ? (
                /* ── Shop Online ── */
                <div key={link.label} className="relative group/shop">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-[0.75rem] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded-lg transition-all duration-300 text-primary hover:text-primary-foreground hover:bg-primary/[0.12] border border-primary/30 hover:border-primary/60"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 inline-block ml-1 -mt-0.5" />
                  </a>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-xl border border-border/60 bg-[hsl(0,0%,6%)] p-4 shadow-xl opacity-0 scale-95 -translate-y-1 pointer-events-none group-hover/shop:opacity-100 group-hover/shop:scale-100 group-hover/shop:translate-y-0 group-hover/shop:pointer-events-auto transition-all duration-300 z-50">
                    <p className="text-xs text-primary-foreground/50 leading-relaxed">
                      <span className="font-bold text-primary-foreground/70">Please note:</span> Our Online Store is for ready-made promotional products and swag only. For custom printing, vehicle wraps, signage, branded apparel, or full concierge branding services, please{" "}
                      <Link to="/contact" className="text-primary font-bold hover:underline">
                        contact us
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              ) : (
                /* ── Regular link ── */
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
            <Button
              size="sm"
              className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black px-7 shadow-[0_0_25px_hsl(0_85%_40%/0.35)] hover:shadow-[0_0_40px_hsl(0_85%_40%/0.55)] transition-all duration-300 group uppercase tracking-wider text-xs"
            >
              Get 24-Hour Quote
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>

          {/* Mobile toggle */}
          <button className="lg:hidden text-primary-foreground p-1" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ══ Mobile Menu ══ */}
        {open && (
          <div className="lg:hidden bg-[hsl(0,0%,4%)]/[0.98] backdrop-blur-2xl border-t border-primary/[0.1] pb-5 animate-fade-in max-h-[calc(100vh-72px)] overflow-y-auto">
            {navLinks.map((link) =>
              link.isMega ? (
                /* Mobile Services accordion */
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
                      {megaColumns.map((col) => (
                        <div key={col.title} className="mb-2">
                          <div className="flex items-center gap-2 px-8 py-2">
                            <col.icon className="w-3.5 h-3.5 text-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-foreground/30">
                              {col.title}
                            </span>
                          </div>
                          {col.items.map((item) => (
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
                        </div>
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
                <div key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="block px-6 py-3.5 text-sm font-bold uppercase tracking-widest transition-colors text-primary hover:text-ohio-red-light"
                  >
                    {link.label}
                    <ExternalLink className="w-3.5 h-3.5 inline-block ml-1.5 -mt-0.5" />
                  </a>
                  <p className="px-6 pb-3 text-xs text-primary-foreground/35 leading-relaxed">
                    Ready-made promo products &amp; swag only. For custom printing, wraps, signage, or full branding —{" "}
                    <Link to="/contact" onClick={() => setOpen(false)} className="text-primary font-bold hover:underline">
                      contact us
                    </Link>
                    .
                  </p>
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
                <Button
                  size="sm"
                  className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-black shadow-[0_0_25px_hsl(0_85%_40%/0.35)] uppercase tracking-wider group"
                >
                  Get 24-Hour Quote
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
