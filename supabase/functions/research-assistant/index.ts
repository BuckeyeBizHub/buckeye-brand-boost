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

FORMATTING RULES — follow these strictly for every response:
1. Start with a brief, friendly 1–2 sentence opening that directly addresses the question. Be warm and conversational.
2. Use **bold text** for key terms, product names, prices, and important takeaways.
3. Organize information with clear sections using ### headings when covering multiple topics.
4. Use bullet points (•) or numbered lists for comparisons, options, or steps — never write dense paragraphs.
5. Keep paragraphs to 2–3 sentences maximum. White space is your friend.
6. When giving price ranges, format them clearly: e.g., **$3–$8 per unit** (depending on quantity and customization).
7. Include a "💡 **Pro Tip**" callout when you have a practical recommendation.
8. End with a brief, warm closing line and a natural invitation like "Want us to put together a custom quote for your project?" — never pushy.
9. NEVER give exact fixed pricing or make promises. Always note that final pricing depends on quantity, materials, and project specifics.
10. When the question relates to something we offer, naturally mention how Buckeye Biz Hub can help — informative, not salesy.
11. Highlight our local Columbus/Ohio advantage when relevant.
12. Keep the overall tone like a knowledgeable friend helping out — professional but warm.`,
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
