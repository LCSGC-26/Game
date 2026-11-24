# Inspiration sites

Status key: **Opened** = fetched and read in-session; **Search-only** = known from search results/third-party write-ups, NOT opened (verify before relying on it). The sandbox network is allowlisted; to open a new site ask the user to add the exact host.

## Opened
See `opened-sites-notes.md` for the detailed per-site table (Linear, Raycast, Stripe, Vercel, Notion, Framer, Apple, Supercell, Riot Games, Duolingo meta).

| Site | Take |
|---|---|
| https://nextgambit.com.au | Hero formula, film-led case studies, token-first dark/acid palette, SEO + video sitemap, honest "illustrative" labels. See `docs/design-lessons.md`. |
| https://detailscout.com.au | Tiny static build (~100 KB), provenance + "last checked", comparison tray, programmatic service/provider pages, Pause-motion control. |

## Search-only (verify) — superseded where noted above; remaining unopened: Awwwards (connection reset), itch.io (429), SaaSFrame, Game Developer lists
| Site / source | Pattern to study |
|---|---|
| Linear (linear.app) | Near-black UI, real product screenshots doing the selling, precise type, command-palette culture; scroll animations are costly — don't overdo. |
| Raycast (raycast.com) | Site as an oversized command palette; monospaced shortcut chips echo product; dark, dense, structured. |
| Stripe (stripe.com) | Explains a complex product fast: animated gradient hero + live code snippets. Gradient look is now generic — don't copy lazily. |
| Vercel (vercel.com) | Dark by default for developer audiences; minimal, fast. |
| Awwwards listings (awwwards.com/inspiration_search/design-agencies/) | Browse agency Site-of-the-Day winners in 2026 (e.g. Noomo Agency, aino.agency, Studio375, Unseen Studio "2025 Wrapped") for motion/WebGL ideas. Winners are often heavy; take ideas, not weight. |
| SaaSFrame (saasframe.io/landing-page-examples/interactive-demo) | Interactive demo in the hero instead of static screenshots (a 2026 trend). |
| Game Developer — "15 amazing game landing pages" / Lapa Ninja game category | Game landing structure; indie browser-game pages on itch.io are usually plain: title, play area, controls, screenshots. |
| DEV Community — browser game websites | Clear title, short intro, large play area, visible Play button, fullscreen, no layout shift while iframe loads. |
| Chrome docs — scroll-driven animations | `animation-timeline` (Chrome/Edge 115+, Safari 26, Firefox flagged at time of writing); use `@supports`. |
| web.dev — Core Web Vitals | LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1. |

## How to add a site
Open it (ask for allowlist if blocked), note: purpose, 3 patterns worth copying, 1 anti-pattern, tech clues. Add a row under **Opened**.
