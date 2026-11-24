# Opened-site notes (fetched 2026-11-24; server-rendered HTML + headers only)

Method: curl of the homepage, parsed for title/meta/headings/nav/stack. Client-rendered visuals, animations, CSS-file media queries and logged-in product were NOT seen, so "no reduced-motion" below only means none in the inline HTML. Couldn't read: itch.io (HTTP 429), awwwards.com (connection reset), duolingo.com (11 KB JS shell, no server-rendered content).

| Site | Positioning / hero | Nav & CTA | Stack & tech signals | Take |
|---|---|---|---|---|
| **linear.app** | "The product development system for teams and agents" | Product · Resources · Customers · Pricing · **Now** (changelog) · Docs · Open app · Log in · Sign up | Next.js, Cloudflare edge cache (`s-maxage=1800, stale-while-revalidate`), strict CSP, light/dark via `data-theme` + `prefers-color-scheme`, skip link, `theme-color`, Sentry | Story in 4 sections (Intake → Planning → AI/automation → Build/ship) + a "Changelog" strip + closing "Built for the future. Available today." Shipping cadence is itself marketing. |
| **raycast.com** | "Your shortcut to everything." | Download-first | Next.js + Tailwind, 57 preloads, 2 JSON-LD blocks | Benefit-led section headings ("It's not about saving time.", "There's an extension for that.", "Don't repeat yourself.", "Take the short way."), extension-store as proof, product as keyboard-first. |
| **stripe.com** | "Financial infrastructure to grow your revenue." | Products · Solutions · Developers · Resources · Pricing · Sign in · **Start now** + Contact sales | Next.js, nginx, HSTS preload, strict CSP, Intercom | Dual CTA (self-serve + sales), solutions per business model, customer stories with a hard number as the headline ("URBN consolidates $5 billion…", "Hertz unifies commerce…"). |
| **vercel.com** | "Agentic Infrastructure" | Mega-menu (Agent Stack / Core Platform / Security / Tools) | Next.js, 6 JSON-LD blocks, `theme-color`, skip link, HSTS preload | "Recently shipped" strip, three persona headlines (build agents / ship apps / host platforms), very rich structured data. |
| **notion.com** | "Where teams and agents think together." | Get Notion free · Request a demo | Next.js, Vercel | Verb triad (**Capture · Find · Automate**), then use-case gallery ("Triage product feedback", "Resolve support tickets in Slack", "Automate weekly reporting") — concrete jobs, not features. Free-start CTA is the primary. |
| **framer.com** | "The website builder for shipping standout sites" | Platform · Solutions · Resources · Enterprise · Pricing · Log in · Sign up | Framer-hosted, 172 lazy images, cookie banner present, 1 video | "Start with the agent → Refine on the canvas → Publish instantly" 3-step flow; platform proof list (Performance, CMS, SEO, Collaboration, Localization); brand guidelines + "Copy logo SVG" in the logo menu. |
| **apple.com** | Product tiles; one hero per product | Store-style nav, **Buy** CTAs repeated per tile | No framework signals, 3 JSON-LD, video hero, HSTS preload | Maximum restraint: one image, one line, two links per tile. Whitespace and consistent tile grid carry the brand. |
| **supercell.com** | Games portfolio + careers | Games list by title · Careers (Why you might love it here, Living in Helsinki/London/Shanghai) | Next.js, OneTrust consent, skip link, 76 KB HTML | Studio site that recruits as well as sells: culture pages, per-city pages, "Be Safe & Play Fair" trust page. Light page weight. |
| **riotgames.com** | "What's happening?" news/dev-update feed over game portfolio | Games · Esports & Entertainment · We're hiring · Press/Security/Accessibility/Community Pact links | GA, video hero | Content-led retention: dev updates, cinematics, event teasers on the front page; clear trust/legal footer incl. Accessibility and Community Pact. |
| **duolingo.com** | "Free, fun and science-based" (meta only) | — | Client-rendered shell, OneTrust, GA | Retention mechanics (streaks etc.) live in-product and weren't observable here. Meta description is a clean one-liner: free + fun + science-based. |

## Cross-site patterns (observed, ≥3 sites)
1. **One-sentence category claim as H1**, mostly "<noun> for <audience>" or an outcome ("shortcut to everything").
2. **Next.js/React + edge CDN** is the default pro stack (7 of 9 readable); the big ones still ship `theme-color`, canonical, OG image, JSON-LD, HSTS (preload), strict CSP.
3. **Free/instant start CTA + a sales/demo CTA side by side** (Stripe, Notion, Linear, Framer).
4. **Use cases as concrete jobs** ("Resolve support tickets in Slack") beat feature lists (Notion, Raycast, Stripe).
5. **Shipping cadence as proof** — changelog / "Now" / "Recently shipped" (Linear, Vercel).
6. **Numbers in customer-story headlines** (Stripe).
7. **Skip link + `theme-color` + dark/light support** on the developer-facing sites (Linear, Vercel, Raycast).
8. **Lazy-load aggressively**: Framer 172 lazy images; LCP image preloaded with `fetchpriority`.
9. **Retention is content or product, not the marketing page**: Riot's news feed, Supercell's careers/culture, Linear's changelog, Duolingo's in-app loop. For a game: ship a changelog/devlog, a return-reason (daily challenge, leaderboard), and shareable results.

## Anti-patterns observed
- Very heavy homepages (Linear 1.2 MB HTML, Framer 1.9 MB, Stripe 0.7 MB HTML) — only viable behind a strong CDN; small projects should not copy the weight.
- Gradient/mesh hero + dark mode as default look is now generic (flagged in third-party write-ups); differentiate with a brand-specific element (cf. Next Gambit's chess ticker).
- Apple/Stripe-scale polish relies on large design teams; copy structure and restraint, not effects.
