import { motion } from "framer-motion";
import { Send, Loader2, Sparkles, Search, Trash2, ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useResearchAssistant } from "@/hooks/useResearchAssistant";
import MessageBubble from "@/components/research/MessageBubble";
import { usePageSEO } from "@/hooks/usePageTitle";

const RESEARCH_PAGE_QUESTIONS = [
  "What are the best promotional products for trade shows and events in Columbus in 2026?",
  "Should I choose a full vehicle wrap, partial wrap, or spot graphics for my Ohio fleet?",
  "What's trending in custom branded apparel and embroidery for Columbus businesses right now?",
  "How do I pick the right business cards and stationery for my company in 2026?",
  "What kind of signage and banners work best for local Columbus events and storefronts?",
  "How can I create a complete branded marketing kit on a reasonable budget?",
  "What are some creative, cost-effective branding ideas for small businesses in Central Ohio?",
  "How fast can you deliver custom printing or vehicle wraps for an upcoming project?",
];

const Research = () => {
  usePageSEO({ title: "Branding Research Assistant - Buckeye Biz Hub Columbus Ohio", description: "Get expert AI-powered answers about promotional products, printing, vehicle wraps, banners, costs, and timelines for your Ohio business.", noindex: true });

  const { messages, input, setInput, isLoading, askQuestion, clearMessages, messagesEndRef } = useResearchAssistant();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-14 bg-gradient-to-b from-[hsl(var(--hero-bg))] via-[hsl(220,25%,8%)] to-[hsl(0,0%,4%)] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-16 right-1/3 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-ohio-navy/20 blur-[120px]" />
        </div>
        <div className="container relative z-10 text-center max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-5 bg-primary/[0.08] px-5 py-2 rounded-full border border-primary/10">
              <Sparkles className="w-3.5 h-3.5" />
              AI-Powered Research
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight mb-5">
              Branding Research<br />
              <span className="text-primary">Assistant</span>
            </h1>
            <p className="text-lg text-primary-foreground/60 max-w-xl mx-auto leading-relaxed mb-6">
              Get instant, expert answers about promotional products, printing, vehicle branding, costs, timelines, and Columbus-area marketing ideas — backed by cited sources.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-primary-foreground/50">
              <a href="tel:+16145613358" className="flex items-center gap-1.5 hover:text-primary-foreground/80 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                (614) 561-3358
              </a>
              <span className="hidden sm:inline text-primary-foreground/20">|</span>
              <a href="mailto:david@buckeyebizhub.com" className="flex items-center gap-1.5 hover:text-primary-foreground/80 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                david@buckeyebizhub.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chat area */}
      <section className="flex-1 py-8 lg:py-14 bg-gradient-to-b from-[hsl(0,0%,4%)] via-background to-muted/20">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="rounded-2xl border border-primary/10 bg-card shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden">
            {/* Chat header bar */}
            <div className="flex items-center justify-between px-6 lg:px-8 py-5 border-b border-border/50 bg-gradient-to-r from-foreground/[0.02] to-primary/[0.03]">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shadow-[0_0_20px_hsl(0_85%_40%/0.3)]">
                  <Search className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-foreground">Ask Your Question</h2>
                  <p className="text-xs text-muted-foreground">Powered by AI · Every answer includes cited sources</p>
                </div>
              </div>
              {messages.length > 0 && (
                <Button variant="outline" size="sm" onClick={clearMessages} className="gap-1.5 text-xs font-bold">
                  <Trash2 className="w-3.5 h-3.5" />
                  Clear Chat
                </Button>
              )}
            </div>

            {/* Messages */}
            <div className="min-h-[500px] lg:min-h-[550px] max-h-[65vh] overflow-y-auto px-6 lg:px-8 py-8 space-y-6">
              {messages.length === 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <div className="text-center">
                    <p className="text-base font-semibold text-foreground mb-1">
                      What would you like to know?
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Choose a question below or type your own — we'll find the answer with sources.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {RESEARCH_PAGE_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => askQuestion(q)}
                        className="text-left text-sm px-4 py-4 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/[0.04] hover:shadow-md transition-all text-foreground leading-relaxed group"
                      >
                        <span className="text-primary mr-2 font-black text-base">→</span>
                        {q}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {messages.map((msg, i) => (
                <MessageBubble key={i} message={msg} />
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl rounded-bl-md px-5 py-4 flex items-center gap-3 text-sm text-muted-foreground">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    Researching your question...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => { e.preventDefault(); askQuestion(input); }}
              className="flex items-center gap-3 px-6 lg:px-8 py-5 border-t border-border/50 bg-muted/20"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about products, costs, timelines, branding ideas..."
                className="flex-1 text-sm bg-transparent outline-none placeholder:text-muted-foreground py-1.5"
                disabled={isLoading}
              />
              <Button type="submit" className="gap-2 px-6 font-bold shadow-[0_0_15px_hsl(0_85%_40%/0.2)]" disabled={isLoading || !input.trim()}>
                <Send className="w-4 h-4" />
                Ask
              </Button>
            </form>
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 rounded-2xl border border-primary/15 bg-gradient-to-r from-primary/[0.06] via-card to-primary/[0.06] px-8 py-10 text-center shadow-lg">
            <h3 className="font-display text-2xl font-black text-foreground mb-2">
              Ready to bring your brand to life?
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
              Our team delivers custom quotes within 24 hours — no obligation, just expert guidance for your Ohio business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact">
                <Button size="lg" className="font-black uppercase tracking-wider gap-2 px-8 shadow-[0_0_25px_hsl(0_85%_40%/0.3)]">
                  Get Your Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="tel:+16145613358">
                <Button size="lg" variant="outline" className="font-bold gap-2 px-6 border-primary/20 hover:border-primary/40">
                  <Phone className="w-4 h-4" />
                  (614) 561-3358
                </Button>
              </a>
              <a href="mailto:david@buckeyebizhub.com">
                <Button size="lg" variant="outline" className="font-bold gap-2 px-6 border-primary/20 hover:border-primary/40">
                  <Mail className="w-4 h-4" />
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research;
