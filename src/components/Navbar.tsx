import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Services", "Products", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ohio-grey-dark/95 backdrop-blur-sm border-b border-ohio-grey/20">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-1">
          <span className="font-display italic text-2xl font-bold text-primary-foreground">Buckeye</span>
          <span className="font-display text-2xl font-bold text-primary">Biz Hub</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-medium text-primary-foreground/70 hover:text-primary transition-colors">
              {l}
            </a>
          ))}
          <Button size="sm" className="bg-primary hover:bg-ohio-red-light text-primary-foreground font-semibold">
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
        <div className="md:hidden bg-ohio-grey-dark border-t border-ohio-grey/20 pb-4">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block px-6 py-3 text-sm text-primary-foreground/70 hover:text-primary transition-colors">
              {l}
            </a>
          ))}
          <div className="px-6 pt-2">
            <Button size="sm" className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-semibold">
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
