import { Phone, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MobileCTABar = () => {
  const { pathname } = useLocation();
  // Hide on contact page since they're already there
  if (pathname === "/contact") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-primary/95 backdrop-blur-lg border-t border-primary-foreground/10 shadow-[0_-4px_30px_rgba(0,0,0,0.3)] safe-area-bottom">
      <div className="flex items-center justify-between px-4 py-3">
        <a href="tel:+16145551234" className="flex items-center gap-2 text-primary-foreground font-bold text-sm">
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <Link to="/contact">
          <Button size="sm" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-black text-xs px-5 py-2 rounded-full uppercase tracking-wider group">
            Get 24-Hour Quote
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MobileCTABar;
