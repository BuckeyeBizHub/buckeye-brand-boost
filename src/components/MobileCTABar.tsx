import { Phone, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MobileCTABar = () => {
  const { pathname } = useLocation();
  if (pathname === "/contact") return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-border shadow-[0_-4px_30px_rgba(0,0,0,0.12)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
        <a href="tel:+16145613358" className="w-full">
          <Button
            size="sm"
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-xs uppercase tracking-wider"
          >
            <Phone className="w-3.5 h-3.5" />
            Call Now
          </Button>
        </a>
        <Link to="/contact" className="w-full">
          <Button
            size="sm"
            className="w-full bg-primary hover:bg-ohio-red-light text-primary-foreground font-black text-xs uppercase tracking-wider group"
          >
            Get a Free Quote
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MobileCTABar;
