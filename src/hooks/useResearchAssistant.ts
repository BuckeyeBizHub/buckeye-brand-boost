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
