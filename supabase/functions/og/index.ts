const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/hrXUMAbOK1TQRKQtPFJP1P5NDPp1/social-images/social-1775753483930-Buckeye_Biz_Hub_Logo.webp";

const WIDTH = 1200;
const HEIGHT = 630;

// ── Cached state (persists across warm invocations) ────────
let ready = false;
let satoriFn: (
  element: Record<string, unknown>,
  opts: Record<string, unknown>
) => Promise<string>;
let ResvgClass: new (
  svg: string,
  opts: Record<string, unknown>
) => { render: () => { asPng: () => Uint8Array } };
let fontRegular: ArrayBuffer;
let fontBold: ArrayBuffer;

async function ensureInit() {
  if (ready) return;

  const [smod, yogaMod, rmod, fontRegData, fontBoldData] = await Promise.all([
    import("https://esm.sh/satori@0.10.14"),
    import("https://esm.sh/yoga-wasm-web@0.3.3"),
    import("https://deno.land/x/resvg_wasm@0.2.0/mod.ts"),
    fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.ttf"
    ).then((r) => r.arrayBuffer()),
    fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.ttf"
    ).then((r) => r.arrayBuffer()),
  ]);

  // Yoga WASM for satori layout engine
  const yogaWasm = await fetch(
    "https://unpkg.com/yoga-wasm-web@0.3.3/dist/yoga.wasm"
  ).then((r) => r.arrayBuffer());
  const yoga = await yogaMod.default(yogaWasm);
  smod.init(yoga);

  // Resvg WASM for SVG → PNG
  await rmod.initWasm();

  satoriFn = smod.default;
  ResvgClass = rmod.Resvg;
  fontRegular = fontRegData;
  fontBold = fontBoldData;
  ready = true;
}

// ── Helpers ────────────────────────────────────────────────
function truncate(s: string, max: number): string {
  return s.length > max ? s.slice(0, max - 1) + "…" : s;
}

// ── Templates ──────────────────────────────────────────────

function defaultTemplate(title: string, desc: string) {
  return wrapper([
    titleBlock(title),
    desc ? descBlock(desc) : null,
  ]);
}

function articleTemplate(title: string, desc: string, author?: string, date?: string) {
  const badges: unknown[] = [];
  badges.push(badge("BLOG", "#c0392b", "#fff"));
  if (date) badges.push(badge(date, "#222", "#999"));

  return wrapper([
    // Badge row
    {
      type: "div",
      props: {
        style: { display: "flex", gap: 12, marginBottom: 20 },
        children: badges,
      },
    },
    titleBlock(title),
    desc ? descBlock(desc) : null,
    author
      ? {
          type: "div",
          props: {
            style: { fontSize: 20, color: "#aaa", marginTop: 16 },
            children: `By ${author}`,
          },
        }
      : null,
  ]);
}

function productTemplate(title: string, desc: string, price?: string) {
  return wrapper([
    badge("PRODUCT", "#1a6b3c", "#fff"),
    titleBlock(title),
    desc ? descBlock(desc) : null,
    price
      ? {
          type: "div",
          props: {
            style: {
              fontSize: 36,
              fontWeight: 700,
              color: "#c0392b",
              marginTop: 16,
            },
            children: price,
          },
        }
      : null,
  ]);
}

// ── Shared blocks ──────────────────────────────────────────

function wrapper(contentChildren: (unknown | null)[]) {
  return {
    type: "div",
    props: {
      style: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "#0d0d0d",
        padding: "60px 80px",
        justifyContent: "space-between",
        fontFamily: "Inter",
      },
      children: [
        // Red accent bar at top
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              width: 80,
              height: 6,
              backgroundColor: "#c0392b",
              borderRadius: 3,
              marginBottom: 12,
            },
            children: [],
          },
        },
        // Content area
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: 1,
            },
            children: contentChildren.filter(Boolean),
          },
        },
        // Footer
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "2px solid #222",
              paddingTop: 24,
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  },
                  children: [
                    // Red dot logo mark
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          width: 14,
                          height: 14,
                          borderRadius: 7,
                          backgroundColor: "#c0392b",
                        },
                        children: [],
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          fontSize: 22,
                          fontWeight: 700,
                          color: "#c0392b",
                          letterSpacing: 1,
                        },
                        children: "BUCKEYE BIZ HUB",
                      },
                    },
                  ],
                },
              },
              {
                type: "div",
                props: {
                  style: { fontSize: 18, color: "#666" },
                  children: "buckeyebizhub.com",
                },
              },
            ],
          },
        },
      ],
    },
  };
}

function titleBlock(title: string) {
  return {
    type: "div",
    props: {
      style: {
        fontSize: title.length > 50 ? 40 : title.length > 30 ? 48 : 56,
        fontWeight: 700,
        color: "#ffffff",
        lineHeight: 1.2,
      },
      children: title,
    },
  };
}

function descBlock(desc: string) {
  return {
    type: "div",
    props: {
      style: {
        fontSize: 24,
        color: "#999",
        marginTop: 20,
        lineHeight: 1.4,
      },
      children: desc,
    },
  };
}

function badge(text: string, bg: string, fg: string) {
  return {
    type: "div",
    props: {
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
      children: text,
    },
  };
}

// ── Request handler ────────────────────────────────────────
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    await ensureInit();

    const url = new URL(req.url);
    const rawTitle = url.searchParams.get("title") || "Buckeye Biz Hub";
    const rawDesc = url.searchParams.get("description") || "";
    const type = url.searchParams.get("type") || "default";
    const author = url.searchParams.get("author") || undefined;
    const date = url.searchParams.get("date") || undefined;
    const price = url.searchParams.get("price") || undefined;

    const title = truncate(rawTitle, 80);
    const description = truncate(rawDesc, 140);

    // Pick template
    let element: Record<string, unknown>;
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

    // Generate SVG via satori
    const svg = await satoriFn(element, {
      width: WIDTH,
      height: HEIGHT,
      fonts: [
        { name: "Inter", data: fontRegular, weight: 400, style: "normal" },
        { name: "Inter", data: fontBold, weight: 700, style: "normal" },
      ],
    });

    // Convert SVG → PNG via resvg
    const resvg = new ResvgClass(svg, {
      fitTo: { mode: "width", value: WIDTH },
    });
    const pngBytes = resvg.render().asPng();

    return new Response(pngBytes, {
      headers: {
        ...corsHeaders,
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=604800, s-maxage=2592000, immutable",
      },
    });
  } catch (err) {
    console.error("OG image generation failed:", err);
    // Fallback: redirect to static OG image
    return new Response(null, {
      status: 302,
      headers: { ...corsHeaders, Location: DEFAULT_OG_IMAGE },
    });
  }
});
