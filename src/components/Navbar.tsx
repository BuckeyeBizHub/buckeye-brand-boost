import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "Products", "About", "Contact"];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-ohio-grey-dark/98 backdrop-blur-md shadow-lg shadow-foreground/5" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-18 py-4">
        <a href="/" className="flex items-center gap-1">
          <span className="font-display italic text-2xl font-bold text-primary-foreground">Buckeye</span>
          <span className="font-display text-2xl font-bold text-primary">Biz Hub</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-semibold text-primary-foreground/60 hover:text-primary transition-colors duration-300 tracking-wide uppercase">
              {l}
            </a>
          ))}
          <Button size="sm" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-bold shadow-[0_0_20px_hsl(0_78%_45%/0.3)] hover:shadow-[0_0_30px_hsl(0_78%_45%/0.5)] transition-all duration-300">
            Get a Quote
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ohio-grey-dark/98 backdrop-blur-md border-t border-primary-foreground/10 pb-4">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block px-6 py-3 text-sm font-semibold text-primary-foreground/60 hover:text-primary transition-colors uppercase tracking-wide">
              {l}
            </a>
          ))}
          <div className="px-6 pt-2">
            <Button size="sm" className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-bold">
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
