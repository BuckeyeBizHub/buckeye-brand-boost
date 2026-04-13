import React from "https://esm.sh/react@18.2.0";
import { ImageResponse } from "https://deno.land/x/og_edge@0.0.6/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/hrXUMAbOK1TQRKQtPFJP1P5NDPp1/social-images/social-1775753483930-Buckeye_Biz_Hub_Logo.webp";

// ── Helpers ────────────────────────────────────────────────
function truncate(s: string, max: number): string {
  return s.length > max ? s.slice(0, max - 1) + "…" : s;
}

function e(
  tag: string,
  props: Record<string, unknown> | null,
  ...children: unknown[]
) {
  return React.createElement(tag, props, ...children);
}

// ── Templates ──────────────────────────────────────────────
function defaultTemplate(title: string, desc: string) {
  return e(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "#0d0d0d",
        padding: "60px 80px",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
      },
    },
    // Red accent bar
    e("div", {
      style: {
        width: 80,
        height: 6,
        backgroundColor: "#c0392b",
        borderRadius: 3,
      },
    }),
    // Content
    e(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
          marginTop: 20,
        },
      },
      e(
        "div",
        {
          style: {
            fontSize: title.length > 50 ? 40 : title.length > 30 ? 48 : 56,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
          },
        },
        title
      ),
      desc
        ? e(
            "div",
            {
              style: {
                fontSize: 24,
                color: "#999999",
                marginTop: 20,
                lineHeight: 1.4,
              },
            },
            desc
          )
        : null
    ),
    // Footer
    footer()
  );
}

function articleTemplate(
  title: string,
  desc: string,
  author?: string,
  date?: string
) {
  return e(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "#0d0d0d",
        padding: "60px 80px",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
      },
    },
    // Badge row
    e(
      "div",
      { style: { display: "flex", gap: 12 } },
      badge("BLOG", "#c0392b", "#fff"),
      date ? badge(date, "#222222", "#999999") : null
    ),
    // Content
    e(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
          marginTop: 20,
        },
      },
      e(
        "div",
        {
          style: {
            fontSize: title.length > 50 ? 38 : title.length > 30 ? 46 : 52,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
          },
        },
        title
      ),
      desc
        ? e(
            "div",
            {
              style: {
                fontSize: 22,
                color: "#999999",
                marginTop: 16,
                lineHeight: 1.4,
              },
            },
            desc
          )
        : null,
      author
        ? e(
            "div",
            {
              style: {
                fontSize: 20,
                color: "#aaaaaa",
                marginTop: 16,
              },
            },
            `By ${author}`
          )
        : null
    ),
    footer()
  );
}

function productTemplate(
  title: string,
  desc: string,
  price?: string
) {
  return e(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "#0d0d0d",
        padding: "60px 80px",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
      },
    },
    badge("PRODUCT", "#1a6b3c", "#ffffff"),
    e(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
          marginTop: 20,
        },
      },
      e(
        "div",
        {
          style: {
            fontSize: title.length > 50 ? 40 : 52,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
          },
        },
        title
      ),
      desc
        ? e(
            "div",
            {
              style: {
                fontSize: 22,
                color: "#999999",
                marginTop: 16,
                lineHeight: 1.4,
              },
            },
            desc
          )
        : null,
      price
        ? e(
            "div",
            {
              style: {
                fontSize: 36,
                fontWeight: 700,
                color: "#c0392b",
                marginTop: 16,
              },
            },
            price
          )
        : null
    ),
    footer()
  );
}

// ── Shared blocks ──────────────────────────────────────────
function footer() {
  return e(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: "2px solid #222222",
        paddingTop: 24,
      },
    },
    e(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12,
        },
      },
      e("div", {
        style: {
          width: 14,
          height: 14,
          borderRadius: 7,
          backgroundColor: "#c0392b",
        },
      }),
      e(
        "div",
        {
          style: {
            fontSize: 22,
            fontWeight: 700,
            color: "#c0392b",
            letterSpacing: 1,
          },
        },
        "BUCKEYE BIZ HUB"
      )
    ),
    e(
      "div",
      { style: { fontSize: 18, color: "#666666" } },
      "buckeyebizhub.com"
    )
  );
}

function badge(text: string, bg: string, fg: string) {
  return e(
    "div",
    {
      style: {
        display: "flex",
        fontSize: 14,
        fontWeight: 700,
        color: fg,
        backgroundColor: bg,
        padding: "6px 20px",
        borderRadius: 20,
        letterSpacing: 2,
      },
    },
    text
  );
}

// ── Handler ────────────────────────────────────────────────
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const rawTitle = url.searchParams.get("title") || "Buckeye Biz Hub";
    const rawDesc = url.searchParams.get("description") || "";
    const type = url.searchParams.get("type") || "default";
    const author = url.searchParams.get("author") || undefined;
    const date = url.searchParams.get("date") || undefined;
    const price = url.searchParams.get("price") || undefined;

    const title = truncate(rawTitle, 80);
    const description = truncate(rawDesc, 140);

    let element;
    switch (type) {
      case "article":
        element = articleTemplate(title, description, author, date);
        break;
      case "product":
        element = productTemplate(title, description, price);
        break;
      default:
        element = defaultTemplate(title, description);
    }

    const response = new ImageResponse(element, {
      width: 1200,
      height: 630,
    });

    // Copy the response and add cache + CORS headers
    const pngBuffer = await response.arrayBuffer();
    return new Response(pngBuffer, {
      headers: {
        ...corsHeaders,
        "Content-Type": "image/png",
        "Cache-Control":
          "public, max-age=604800, s-maxage=2592000, immutable",
      },
    });
  } catch (err) {
    console.error("OG image generation failed:", err);
    return new Response(null, {
      status: 302,
      headers: { ...corsHeaders, Location: DEFAULT_OG_IMAGE },
    });
  }
});
