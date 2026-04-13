import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AlertTriangle, Home, RefreshCw, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ServerError = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Something Went Wrong | Buckeye Biz Hub</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Something went wrong on our end. Please try again or contact us for help." />
      </Helmet>

      <Navbar />

      <div className="flex-1 pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 text-destructive text-xs font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-8">
            <AlertTriangle className="w-3.5 h-3.5" />
            Error 500
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight">
            Something Went Wrong
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            We're experiencing a temporary issue on our end. Our team has been notified and is working on a fix.
          </p>

          <p className="text-muted-foreground mb-10">
            Please try again in a few moments. If the problem persists, contact us directly.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2"
              onClick={() => window.location.reload()}
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </Button>
            <Link to="/">
              <Button size="lg" variant="outline" className="font-bold gap-2">
                <Home className="w-4 h-4" />
                Back to Homepage
              </Button>
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-muted/50 border border-border">
            <h2 className="font-display text-lg font-bold text-foreground mb-3">
              Contact Us Directly
            </h2>
            <p className="text-muted-foreground text-sm mb-4">
              Need help right away? Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="tel:6145613358" className="inline-flex items-center gap-1.5 text-primary font-bold hover:underline">
                <Phone className="w-3.5 h-3.5" /> 614-561-3358
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

export default ServerError;
