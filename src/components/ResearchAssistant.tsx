import { AnimatePresence } from "framer-motion";
import { Search, X, Send, Loader2, Sparkles, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useResearchAssistant, getQuestionsForPage } from "@/hooks/useResearchAssistant";
import MessageBubble from "@/components/research/MessageBubble";
import { useState, useMemo, useCallback } from "react";

const VISIBLE_PATHS = new Set([
  "/", "/services", "/business-cards", "/brochures-and-business-printing",
  "/promotional-products", "/branded-apparel-and-uniforms", "/yard-signs-and-signage",
  "/vehicle-wraps-and-fleet-branding", "/full-rebrand-kits", "/website-design",
  "/local-seo", "/banners-and-flags", "/decals", "/pricing", "/industries",
]);

const PAGE_LABELS: Record<string, string> = {
  "/vehicle-wraps-and-fleet-branding": "vehicle wraps & fleet branding",
  "/business-cards": "business cards & stationery",
  "/brochures-and-business-printing": "brochures & printing",
  "/promotional-products": "promotional products",
  "/branded-apparel-and-uniforms": "branded apparel & uniforms",
  "/yard-signs-and-signage": "yard signs & signage",
  "/banners-and-flags": "banners & flags",
  "/decals": "decals",
  "/full-rebrand-kits": "full rebrand kits",
  "/website-design": "website design",
  "/local-seo": "local SEO",
  "/pricing": "pricing & packages",
  "/services": "our services",
};

const ResearchAssistant = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, setInput, isLoading, askQuestion, messagesEndRef } = useResearchAssistant();

  const contextQuestions = useMemo(() => getQuestionsForPage(pathname), [pathname]);
  const pageLabel = PAGE_LABELS[pathname];

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    askQuestion(input);
  }, [askQuestion, input]);

  if (!VISIBLE_PATHS.has(pathname) && !pathname.startsWith("/blog")) return null;

  return (
    <>
      {/* Floating trigger — no framer-motion overhead, pure CSS */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-24 right-4 sm:right-6 z-50 flex items-center gap-2 sm:gap-2.5 rounded-full bg-primary pl-3 pr-3.5 sm:pl-4 sm:pr-5 py-3 sm:py-3 font-semibold text-primary-foreground shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_hsl(0_85%_40%/0.4)] transition-all duration-300 hover:scale-105 animate-fade-in ring-2 ring-primary/30 sm:ring-0"
          aria-label="Open Research Assistant"
        >
          <div className="relative">
            <Search className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary-foreground rounded-full animate-pulse" />
          </div>
          <span className="text-xs sm:text-sm font-bold tracking-wide">Ask an Expert</span>
        </button>
      )}

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed bottom-20 sm:bottom-24 right-2 sm:right-6 z-50 w-[calc(100vw-1rem)] sm:w-[400px] rounded-2xl border border-border/50 bg-card shadow-[0_25px_80px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden animate-fade-in"
            style={{ maxHeight: "min(600px, calc(100vh - 8rem))" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 bg-gradient-to-r from-foreground to-foreground/90 text-primary-foreground">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm leading-tight">Branding Research Assistant</h3>
                  <p className="text-[10px] sm:text-[11px] opacity-60">AI-powered · Cited sources</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                <Link
                  to="/research"
                  onClick={handleClose}
                  className="p-1.5 rounded-lg hover:bg-primary-foreground/10 transition-colors"
                  title="Open full page"
                >
                  <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
                <button onClick={handleClose} className="p-1.5 rounded-lg hover:bg-primary-foreground/10 transition-colors">
                  <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-3 sm:py-4 space-y-3 sm:space-y-4 min-h-0">
              {messages.length === 0 && (
                <div className="space-y-3">
                  <div className="text-center px-1">
                    <p className="text-xs sm:text-sm font-medium text-foreground mb-0.5">
                      {pageLabel
                        ? <>Questions about <span className="text-primary font-bold">{pageLabel}</span>?</>
                        : "How can I help your business?"}
                    </p>
                    <p className="text-[11px] sm:text-xs text-muted-foreground">
                      {pageLabel
                        ? "Get instant answers about costs, timelines, and options."
                        : "Ask about printing, promos, vehicle branding, costs, or Ohio ideas."}
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    {contextQuestions.map((q) => (
                      <button
                        key={q}
                        onClick={() => askQuestion(q)}
                        className="w-full text-left text-[11px] sm:text-xs px-3 py-2.5 rounded-xl border border-border/80 hover:border-primary/30 hover:bg-primary/[0.04] transition-all text-foreground leading-relaxed"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <MessageBubble key={i} message={msg} compact />
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl rounded-bl-md px-3.5 py-2.5 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-primary" />
                    Researching...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 border-t border-border/50 bg-background"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about products, costs, timelines..."
                className="flex-1 text-xs sm:text-sm bg-transparent outline-none placeholder:text-muted-foreground"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" className="h-7 w-7 sm:h-8 sm:w-8 shrink-0 rounded-lg" disabled={isLoading || !input.trim()}>
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Button>
            </form>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResearchAssistant;
