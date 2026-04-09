import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Send, Loader2, Sparkles, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useResearchAssistant, SUGGESTED_QUESTIONS } from "@/hooks/useResearchAssistant";
import MessageBubble from "@/components/research/MessageBubble";
import { useState } from "react";

const VISIBLE_PATHS = [
  "/", "/services", "/business-cards", "/brochures-and-business-printing",
  "/promotional-products", "/branded-apparel-and-uniforms", "/yard-signs-and-signage",
  "/vehicle-wraps-and-fleet-branding", "/full-rebrand-kits", "/website-design",
  "/local-seo", "/banners-and-flags", "/decals", "/pricing", "/industries",
];

const ResearchAssistant = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, setInput, isLoading, askQuestion, messagesEndRef } = useResearchAssistant();

  if (!VISIBLE_PATHS.includes(pathname)) return null;

  return (
    <>
      {/* Floating trigger */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-6 z-50 flex items-center gap-2.5 rounded-full bg-ohio-navy pl-4 pr-5 py-3 font-semibold text-primary-foreground shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_hsl(220_55%_22%/0.5)] transition-all duration-300 hover:scale-105 group"
            aria-label="Open Research Assistant"
          >
            <div className="relative">
              <Search className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-ohio-gold rounded-full animate-pulse" />
            </div>
            <span className="hidden sm:inline text-sm font-bold tracking-wide">Ask an Expert</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-[400px] max-w-[calc(100vw-3rem)] rounded-2xl border border-border/50 bg-card shadow-[0_25px_80px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden"
            style={{ maxHeight: "min(600px, calc(100vh - 10rem))" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-ohio-navy to-[hsl(220,55%,28%)] text-primary-foreground">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-ohio-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight">Branding Research Assistant</h3>
                  <p className="text-[11px] opacity-60">AI-powered · Cited sources</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Link
                  to="/research"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-primary-foreground/10 transition-colors"
                  title="Open full page"
                >
                  <Maximize2 className="w-4 h-4" />
                </Link>
                <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-lg hover:bg-primary-foreground/10 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0">
              {messages.length === 0 && (
                <div className="space-y-4">
                  <div className="text-center px-2">
                    <p className="text-sm font-medium text-foreground mb-1">How can I help your business?</p>
                    <p className="text-xs text-muted-foreground">
                      Ask about printing, promotional products, vehicle branding, costs, timelines, or Ohio-specific marketing ideas.
                    </p>
                  </div>
                  <div className="space-y-2">
                    {SUGGESTED_QUESTIONS.slice(0, 3).map((q) => (
                      <button
                        key={q}
                        onClick={() => askQuestion(q)}
                        className="w-full text-left text-xs px-3.5 py-3 rounded-xl border border-border/80 hover:border-primary/30 hover:bg-primary/[0.04] transition-all text-foreground leading-relaxed"
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
                  <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    Researching...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => { e.preventDefault(); askQuestion(input); }}
              className="flex items-center gap-2 px-4 py-3 border-t border-border/50 bg-background"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about products, costs, timelines..."
                className="flex-1 text-sm bg-transparent outline-none placeholder:text-muted-foreground"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" className="h-8 w-8 shrink-0 rounded-lg" disabled={isLoading || !input.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResearchAssistant;
