import { useState, useRef, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface Message {
  role: "user" | "assistant";
  content: string;
  citations?: string[];
}

export const SUGGESTED_QUESTIONS = [
  "What promotional products get the best ROI for small businesses?",
  "How much do vehicle wraps cost compared to billboard advertising?",
  "What are the most popular trade show giveaways in 2025?",
  "How can branded apparel boost team morale and brand visibility?",
  "What's the turnaround time for custom banners and yard signs?",
  "What branding essentials should a new Columbus business invest in first?",
];

export const PAGE_QUESTIONS: Record<string, string[]> = {
  "/vehicle-wraps-and-fleet-branding": [
    "How much does a full vehicle wrap cost for a work truck?",
    "How long do vehicle wraps last in Ohio weather?",
    "What's the ROI of fleet branding vs. digital ads?",
  ],
  "/business-cards": [
    "What paper stock is best for premium business cards?",
    "How much do gold foil business cards cost in bulk?",
    "What finishes make business cards stand out?",
  ],
  "/brochures-and-business-printing": [
    "What's the best brochure fold type for a service menu?",
    "How many brochures should I order for a trade show?",
    "What paper weight is best for professional brochures?",
  ],
  "/promotional-products": [
    "What are the best promotional products under $5 per unit?",
    "Which giveaway items get kept the longest?",
    "What's trending for corporate promotional gifts in 2025?",
  ],
  "/branded-apparel-and-uniforms": [
    "Embroidered vs. screen-printed logos — which is better?",
    "How much do custom polo shirts cost in bulk?",
    "What fabrics work best for outdoor work uniforms?",
  ],
  "/yard-signs-and-signage": [
    "How long do corrugated yard signs last outdoors?",
    "What size yard sign gets the most visibility from the road?",
    "How much do custom yard signs cost per unit?",
  ],
  "/banners-and-flags": [
    "What's the difference between vinyl and fabric banners?",
    "How tall should a feather flag be for roadside visibility?",
    "What are the best banner options for a grand opening?",
  ],
  "/decals": [
    "What's the difference between vinyl decals and stickers?",
    "How long do outdoor decals last in sun and rain?",
    "Do you offer reflective decals for DOT compliance?",
  ],
  "/full-rebrand-kits": [
    "What's included in a full rebrand kit?",
    "How much does a complete business rebrand typically cost?",
    "How long does a full rebrand take from start to finish?",
  ],
  "/website-design": [
    "How much does a small business website cost?",
    "What makes a website convert visitors into leads?",
    "How long does a professional website take to build?",
  ],
  "/local-seo": [
    "How long does it take to rank on Google locally?",
    "What's the difference between SEO and Google Ads?",
    "How important is Google Business Profile for local businesses?",
  ],
  "/pricing": [
    "What's included in wholesale pricing for bulk orders?",
    "Do you offer payment plans for large branding projects?",
    "How do your prices compare to online print shops?",
  ],
  "/services": [
    "Which branding service gives the best ROI?",
    "What services does a new business need first?",
    "Can I bundle multiple services for a discount?",
  ],
};

export function getQuestionsForPage(pathname: string): string[] {
  return PAGE_QUESTIONS[pathname] || SUGGESTED_QUESTIONS.slice(0, 3);
}

export function useResearchAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const askQuestion = async (question: string) => {
    if (!question.trim() || isLoading) return;
    const userMsg: Message = { role: "user", content: question.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("research-assistant", {
        body: { question: question.trim() },
      });
      if (error) throw error;
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.answer, citations: data.citations },
      ]);
    } catch (e) {
      console.error("Research error:", e);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't process that request. Please try again in a moment." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearMessages = () => setMessages([]);

  return { messages, input, setInput, isLoading, askQuestion, clearMessages, messagesEndRef };
}
