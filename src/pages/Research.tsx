import { motion } from "framer-motion";
import { Send, Loader2, Sparkles, Search, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useResearchAssistant, SUGGESTED_QUESTIONS } from "@/hooks/useResearchAssistant";
import MessageBubble from "@/components/research/MessageBubble";
import { usePageTitle } from "@/hooks/usePageTitle";

const Research = () => {
  usePageTitle(
    "Branding Research Assistant - Buckeye Biz Hub Columbus Ohio",
    "Get expert AI-powered answers about promotional products, printing, vehicle wraps, banners, costs, and timelines for your Ohio business."
  );

  const { messages, input, setInput, isLoading, askQuestion, clearMessages, messagesEndRef } = useResearchAssistant();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[hsl(var(--hero-bg))] via-[hsl(220,25%,8%)] to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-ohio-navy/30 blur-[100px]" />
        </div>
        <div className="container relative z-10 text-center max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-5 bg-primary/[0.08] px-5 py-2 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              AI-Powered Research
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight mb-4">
              Branding Research<br />
              <span className="text-primary">Assistant</span>
            </h1>
            <p className="text-lg text-primary-foreground/60 max-w-xl mx-auto">
              Get instant, expert answers about promotional products, printing, vehicle branding, costs, timelines, and Columbus-area marketing ideas — all backed by cited sources.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chat area */}
      <section className="flex-1 py-8 lg:py-12 bg-gradient-to-b from-background to-muted/30">
        <div className="container max-w-3xl mx-auto px-6">
          <div className="rounded-2xl border border-border/60 bg-card shadow-xl overflow-hidden">
            {/* Chat header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-muted/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-ohio-navy flex items-center justify-center">
                  <Search className="w-5 h-5 text-ohio-gold" />
                </div>
                <div>
                  <h2 className="font-display text-base font-bold text-foreground">Ask Your Question</h2>
                  <p className="text-xs text-muted-foreground">Powered by AI · Answers with cited sources</p>
                </div>
              </div>
              {messages.length > 0 && (
                <Button variant="ghost" size="sm" onClick={clearMessages} className="text-muted-foreground hover:text-foreground gap-1.5">
                  <Trash2 className="w-3.5 h-3.5" />
                  Clear
                </Button>
              )}
            </div>

            {/* Messages */}
            <div className="min-h-[400px] max-h-[60vh] overflow-y-auto px-6 py-6 space-y-5">
              {messages.length === 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <p className="text-center text-muted-foreground text-sm">
                    Try one of these popular questions, or type your own below:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {SUGGESTED_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => askQuestion(q)}
                        className="text-left text-sm px-4 py-3.5 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/[0.04] transition-all text-foreground leading-relaxed group"
                      >
                        <span className="text-primary mr-1.5 font-bold">→</span>
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
              className="flex items-center gap-3 px-6 py-4 border-t border-border/50 bg-background"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about products, costs, timelines, branding ideas..."
                className="flex-1 text-sm bg-transparent outline-none placeholder:text-muted-foreground py-1"
                disabled={isLoading}
              />
              <Button type="submit" size="sm" className="gap-2 px-5 font-bold" disabled={isLoading || !input.trim()}>
                <Send className="w-4 h-4" />
                Ask
              </Button>
            </form>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10">
            <p className="text-sm text-muted-foreground mb-3">
              Ready to get started? Our team is here to help.
            </p>
            <Link to="/contact">
              <Button size="lg" className="font-bold uppercase tracking-wider">
                Get Your Free 24-Hour Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research;
