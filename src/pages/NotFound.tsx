import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Home, ArrowRight, Search, Phone, Mail, BookOpen, Briefcase, Star, HelpCircle, DollarSign, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { track404 } from "@/lib/error-tracking";

const popularPages = [
  { label: "Our Services", href: "/services", icon: Briefcase, description: "Browse our full range of printing, branding, and marketing solutions." },
  { label: "Business Cards", href: "/business-cards", icon: Star, description: "Premium business cards with gold foil, raised print, and custom finishes." },
  { label: "Vehicle Wraps", href: "/vehicle-wraps-and-fleet-branding", icon: MapPin, description: "Full and partial vehicle wraps for fleet branding across Ohio." },
  { label: "Get a Quote", href: "/contact", icon: Phone, description: "Request your free 24-hour quote — no obligation, wholesale pricing." },
  { label: "Blog", href: "/blog", icon: BookOpen, description: "Tips, guides, and Ohio business branding insights." },
  { label: "Pricing", href: "/pricing", icon: DollarSign, description: "Transparent pricing with no hidden fees." },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    track404(location.pathname, document.referrer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Page Not Found | Buckeye Biz Hub</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="The page you're looking for doesn't exist. Browse our services or return to the homepage." />
      </Helmet>

      <Navbar />

      <div className="flex-1 pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          {/* Error indicator */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-8">
            <Search className="w-3.5 h-3.5" />
            Error 404
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight">
            Page Not Found
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            We couldn't find <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono">{location.pathname}</code>.
            It may have been moved, renamed, or no longer exists.
          </p>

          <p className="text-muted-foreground mb-10">
            Try one of these popular pages or head back to the homepage.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2">
                <Home className="w-4 h-4" />
                Back to Homepage
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="font-bold gap-2">
                <Phone className="w-4 h-4" />
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Popular pages grid */}
          <div className="text-left">
            <h2 className="font-display text-2xl font-black text-foreground mb-6 text-center">
              Popular Pages
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularPages.map((page) => (
                <Link
                  key={page.href}
                  to={page.href}
                  className="group flex items-start gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <page.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-sm">
                      {page.label}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed mt-0.5">
                      {page.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Help section */}
          <div className="mt-12 p-6 rounded-2xl bg-muted/50 border border-border">
            <div className="flex items-center justify-center gap-2 mb-3">
              <HelpCircle className="w-5 h-5 text-primary" />
              <h3 className="font-display text-lg font-bold text-foreground">Need Help?</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              If you believe this page should exist, please let us know so we can fix it.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="tel:+16145613358" className="inline-flex items-center gap-1.5 text-primary font-bold hover:underline">
                <Phone className="w-3.5 h-3.5" /> (614) 561-3358
              </a>
              <a href="mailto:david@buckeyebizhub.com" className="inline-flex items-center gap-1.5 text-primary font-bold hover:underline">
                <Mail className="w-3.5 h-3.5" /> david@buckeyebizhub.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
