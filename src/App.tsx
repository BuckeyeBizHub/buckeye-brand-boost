import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import BackToTop from "@/components/BackToTop";
import MobileCTABar from "@/components/MobileCTABar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Index from "./pages/Index.tsx";
import Services from "./pages/Services.tsx";
import PromotionalProducts from "./pages/PromotionalProducts.tsx";
import BusinessPrinting from "./pages/BusinessPrinting.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Industries from "./pages/Industries.tsx";
import VehicleBranding from "./pages/VehicleBranding.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import FAQ from "./pages/FAQ.tsx";
import Blog from "./pages/Blog.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import Testimonials from "./pages/Testimonials.tsx";
import AdminPhotos from "./pages/AdminPhotos.tsx";
import Pricing from "./pages/Pricing.tsx";
import BusinessCards from "./pages/BusinessCards.tsx";
import BrochuresAndPrinting from "./pages/BrochuresAndPrinting.tsx";
import PromotionalProductsPage from "./pages/PromotionalProductsPage.tsx";
import BrandedApparel from "./pages/BrandedApparel.tsx";
import YardSignsAndSignage from "./pages/YardSignsAndSignage.tsx";
import VehicleWrapsAndFleet from "./pages/VehicleWrapsAndFleet.tsx";
import FullRebrandKits from "./pages/FullRebrandKits.tsx";
import WebsiteDesign from "./pages/WebsiteDesign.tsx";
import LocalSeo from "./pages/LocalSeo.tsx";
import BannersAndFlags from "./pages/BannersAndFlags.tsx";
import Decals from "./pages/Decals.tsx";
import Research from "./pages/Research.tsx";
import TidioChatEnhancer from "./components/TidioChatEnhancer";
import ResearchAssistant from "./components/ResearchAssistant";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <TidioChatEnhancer />
        <Breadcrumbs />
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
          <Route path="/research" element={<Research />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BackToTop />
        <MobileCTABar />
        <ResearchAssistant />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
