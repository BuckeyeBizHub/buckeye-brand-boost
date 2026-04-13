import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import BackToTop from "@/components/BackToTop";
import MobileCTABar from "@/components/MobileCTABar";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollToTop from "./components/ScrollToTop.tsx";

// Critical route – no lazy load
import Index from "./pages/Index.tsx";

// Lazy-loaded routes for smaller initial bundle
const Services = lazy(() => import("./pages/Services.tsx"));
const PromotionalProducts = lazy(() => import("./pages/PromotionalProducts.tsx"));
const BusinessPrinting = lazy(() => import("./pages/BusinessPrinting.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Industries = lazy(() => import("./pages/Industries.tsx"));
const VehicleBranding = lazy(() => import("./pages/VehicleBranding.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const Portfolio = lazy(() => import("./pages/Portfolio.tsx"));
const FAQ = lazy(() => import("./pages/FAQ.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.tsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));
const Testimonials = lazy(() => import("./pages/Testimonials.tsx"));
const AdminPhotos = lazy(() => import("./pages/AdminPhotos.tsx"));
const Pricing = lazy(() => import("./pages/Pricing.tsx"));
const BusinessCards = lazy(() => import("./pages/BusinessCards.tsx"));
const BrochuresAndPrinting = lazy(() => import("./pages/BrochuresAndPrinting.tsx"));
const PromotionalProductsPage = lazy(() => import("./pages/PromotionalProductsPage.tsx"));
const BrandedApparel = lazy(() => import("./pages/BrandedApparel.tsx"));
const YardSignsAndSignage = lazy(() => import("./pages/YardSignsAndSignage.tsx"));
const VehicleWrapsAndFleet = lazy(() => import("./pages/VehicleWrapsAndFleet.tsx"));
const FullRebrandKits = lazy(() => import("./pages/FullRebrandKits.tsx"));
const WebsiteDesign = lazy(() => import("./pages/WebsiteDesign.tsx"));
const LocalSeo = lazy(() => import("./pages/LocalSeo.tsx"));
const BannersAndFlags = lazy(() => import("./pages/BannersAndFlags.tsx"));
const Decals = lazy(() => import("./pages/Decals.tsx"));
const Research = lazy(() => import("./pages/Research.tsx"));
const Postcards = lazy(() => import("./pages/Postcards.tsx"));
const CatalogsAndBooklets = lazy(() => import("./pages/CatalogsAndBooklets.tsx"));
const PresentationFolders = lazy(() => import("./pages/PresentationFolders.tsx"));
const MenusAndTableTents = lazy(() => import("./pages/MenusAndTableTents.tsx"));
const LetterheadAndEnvelopes = lazy(() => import("./pages/LetterheadAndEnvelopes.tsx"));
const LargeFormatPrinting = lazy(() => import("./pages/LargeFormatPrinting.tsx"));

const ResearchAssistant = lazy(() => import("./components/ResearchAssistant"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Breadcrumbs />
        <Suspense fallback={<PageLoader />}>
          <main id="main-content">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/business-printing" element={<BusinessPrinting />} />
            <Route path="/promotional-products" element={<PromotionalProductsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/vehicle-branding" element={<VehicleBranding />} />
            <Route path="/admin/photos" element={<AdminPhotos />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/business-cards" element={<BusinessCards />} />
            <Route path="/brochures-and-business-printing" element={<BrochuresAndPrinting />} />
            <Route path="/branded-apparel-and-uniforms" element={<BrandedApparel />} />
            <Route path="/yard-signs-and-signage" element={<YardSignsAndSignage />} />
            <Route path="/vehicle-wraps-and-fleet-branding" element={<VehicleWrapsAndFleet />} />
            <Route path="/full-rebrand-kits" element={<FullRebrandKits />} />
            <Route path="/website-design" element={<WebsiteDesign />} />
            <Route path="/local-seo" element={<LocalSeo />} />
            <Route path="/banners-and-flags" element={<BannersAndFlags />} />
            <Route path="/decals" element={<Decals />} />
            <Route path="/postcards" element={<Postcards />} />
            <Route path="/catalogs-and-booklets" element={<CatalogsAndBooklets />} />
            <Route path="/presentation-folders" element={<PresentationFolders />} />
            <Route path="/menus-and-table-tents" element={<MenusAndTableTents />} />
            <Route path="/letterhead-and-envelopes" element={<LetterheadAndEnvelopes />} />
            <Route path="/large-format-printing" element={<LargeFormatPrinting />} />
            <Route path="/research" element={<Research />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </main>
        </Suspense>
        <BackToTop />
        <MobileCTABar />
        <Suspense fallback={null}>
          <ResearchAssistant />
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
