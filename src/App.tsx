import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/business-printing" element={<BusinessPrinting />} />
          <Route path="/promotional-products" element={<PromotionalProducts />} />
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
