import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "/services" },
    { label: "Products", href: "/promotional-products" },
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[hsl(0,0%,4%)]/[0.98] backdrop-blur-2xl shadow-[0_4px_40px_rgba(0,0,0,0.4)] border-b border-primary/[0.08]" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-1.5 group">
          <span className="font-display italic text-[1.7rem] font-black text-primary-foreground group-hover:text-primary-foreground transition-colors">Buckeye</span>
          <span className="font-display text-[1.7rem] font-black text-primary transition-colors">Biz Hub</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className={`relative text-[0.8rem] font-bold tracking-[0.15em] uppercase transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                location.pathname === l.href
                  ? "text-primary-foreground after:w-full"
                  : "text-primary-foreground/50 hover:text-primary-foreground after:w-0"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button size="sm" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-black px-7 shadow-[0_0_25px_hsl(0_85%_40%/0.35)] hover:shadow-[0_0_40px_hsl(0_85%_40%/0.55)] transition-all duration-300 group uppercase tracking-wider text-xs">
              Get a Quote
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
        </div>

        <button className="md:hidden text-primary-foreground p-1" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[hsl(0,0%,4%)]/[0.98] backdrop-blur-2xl border-t border-primary/[0.1] pb-5 animate-fade-in">
          {links.map((l) => (
            <Link key={l.label} to={l.href} onClick={() => setOpen(false)} className="block px-6 py-3.5 text-sm font-bold text-primary-foreground/50 hover:text-primary active:text-primary transition-colors uppercase tracking-widest">
              {l.label}
            </Link>
          ))}
          <div className="px-6 pt-3">
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button size="sm" className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-black shadow-[0_0_25px_hsl(0_85%_40%/0.35)]">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
