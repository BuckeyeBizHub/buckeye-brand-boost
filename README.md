# buckeyebizhub.com

The Buckeye Biz Hub website. Built the same way as referralens.com:
Next.js (App Router) + Tailwind + shadcn/ui, hosted on Vercel, deployed by
pushing to GitHub.

## Run it

```
npm install
npm run dev      # http://localhost:3000
npm run build    # the strict build Vercel runs; do this before pushing
```

## Where things are

- `src/app/` one folder per URL. Each `page.tsx` sets that page's title,
  description and canonical (`pageMetadata`) and renders a view.
- `src/views/` the page bodies, carried over from the Lovable build.
- `src/components/` shared pieces (nav, footer, sections, shadcn `ui/`).
- `src/lib/site-routes.ts` the page list used for `/sitemap.xml`. Add new pages there.
- `next.config.ts` permanent (301) redirects for old and merged URLs.
- `public/assets/` site images.

Blog posts come from WordPress at buckeyebizhub.blog and are rendered on the
server, refreshed hourly.
