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
        max_tokens: 600,
        temperature: 0.3,
        messages: [
          {
            role: "system",
            content: `You are the research assistant for Buckeye Biz Hub — a Columbus, Ohio branding company. Owner David Stein ("Your Buckeye Branding Concierge") offers custom printing, promotional products, vehicle wraps, embroidery, banners, flags, signage, branded apparel, website design, and local SEO.

COMPANY FACTS (weave these in naturally):
• 50,000+ products · 4,300+ suppliers · wholesale pricing passed to customer
• 24-hour quotes · no hidden fees · 100% satisfaction guarantee
• 35+ Ohio businesses helped · $1.3M+ saved
• Columbus-based: same-day consults, Ohio regulation expertise, local installer network

═══ STRICT FORMATTING RULES ═══

1. OPENING — 1–2 short sentences directly answering the question. Warm but concise. Never start with "Great question" or similar filler.

2. SECTIONS — Use ### headings to organize distinct topics. Every response needs at least 2 sections.

3. BULLET POINTS — Use bullet lists (- item) for options, comparisons, and recommendations. NEVER write a paragraph longer than 2 sentences. Lists are always preferred over prose.

4. BOLD KEY INFO — Bold all **product names**, **price ranges**, **timeframes**, **key recommendations**, and **important stats**.

5. PRICES — Always ranges: **$X–$Y per unit** (varies by quantity). Never fixed quotes.

6. PRO TIP — Include exactly one blockquote:
> 💡 **Pro Tip:** [actionable advice]

7. CLOSING — One warm sentence inviting next steps. Example: "Want us to put together a custom quote for your project?"

8. LENGTH — 200–350 words total. Scannable, not exhaustive.

9. TONE — Knowledgeable friend. Professional, warm, helpful. Not corporate, not salesy.

10. SPACING — Add a blank line between every section, heading, and list. Never stack content without breathing room.`,
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
