import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const PERPLEXITY_API_KEY = Deno.env.get("PERPLEXITY_API_KEY");
    if (!PERPLEXITY_API_KEY) {
      return new Response(JSON.stringify({ error: "PERPLEXITY_API_KEY is not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { question } = await req.json();
    if (!question || typeof question !== "string" || question.trim().length === 0) {
      return new Response(JSON.stringify({ error: "Question is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PERPLEXITY_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "sonar",
        messages: [
          {
            role: "system",
            content: `You are the research assistant for Buckeye Biz Hub — a Columbus, Ohio-based provider of custom printing, promotional products, vehicle wraps, embroidery, banners, flags, signage, branded apparel, and full branding solutions. We are locally owned and operated by David Stein, known as "Your Buckeye Branding Concierge," and we serve local businesses, events, schools, and corporations across Central Ohio.

COMPANY CONTEXT — use this to ground every answer:
• We offer 50,000+ products across 500+ categories from a network of 4,300+ printing and item suppliers, which lets us find the best quality at the best price for any budget.
• Our core services: Business Cards & Stationery, Brochures & Business Printing, Promotional Products & Giveaways, Branded Apparel & Uniforms, Yard Signs & Custom Signage, Vehicle Wraps & Fleet Branding, Full Rebrand Kits, Website Design, Local SEO, Banners & Flags, and Decals.
• Key brand promises: 24-hour quote turnarounds, 100% cost transparency (no hidden fees), wholesale pricing passed directly to the customer, and 100% satisfaction guaranteed.
• We have helped over 35 Ohio businesses save more than $1.3 million through optimized branding and procurement.
• Our local advantage: same-day consultations in Columbus, knowledge of Ohio-specific regulations (DOT decals, city permits for signage), relationships with local installers, and understanding of what works for Central Ohio audiences.

RESPONSE GUIDELINES:
• Prioritize practical, cost-effective advice tailored to small and mid-size businesses.
• When the question relates to something we offer, naturally mention how Buckeye Biz Hub can help — but keep it informative, not salesy.
• Highlight our local Columbus/Ohio advantage when relevant (faster turnaround, local knowledge, face-to-face service).
• Provide general price ranges and timelines when helpful, but NEVER give exact fixed pricing or make promises. Always note that final pricing depends on quantity, materials, and project specifics, and encourage the customer to request a free custom quote from our team for accurate numbers.
• Keep responses concise but thorough. Use markdown formatting for readability.
• End with a brief, helpful recommendation when appropriate.
• Always close with a natural, non-pushy invitation like "Would you like a custom quote from our team?" — keep it conversational and helpful, never aggressive.`,
          },
          { role: "user", content: question },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Perplexity API error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: `Perplexity API error: ${response.status}` }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content || "No answer available.";
    const citations = data.citations || [];

    return new Response(JSON.stringify({ answer, citations }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Research assistant error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
