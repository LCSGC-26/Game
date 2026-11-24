# Design lessons from nextgambit.com.au

Analysis date: 2026-11-24. Public pages only (no logins, no form submissions).
Sources: https://nextgambit.com.au/ and its work pages, plus https://detailscout.com.au/ (the one live project it links to).

> Repo context: `lcsgc-26/game` currently contains only a `README.md` ("# Game"), so there is no existing code to audit yet. Recommendations are written as defaults for new work and as a checklist for any code added later. Re-audit once code exists.

---

## 1. Executive summary (prioritised)

1. **Sell one outcome with proof, not a feature list.** The homepage says what, for whom, where ("Websites, custom software and AI automation… for Australian businesses"), then immediately offers two CTAs: *Book a 30-minute call* and *Explore the projects*. Every page repeats the same CTA ("Talk to David").
2. **Show the work as short films and honest case studies.** Each project page leads with a 30–75 s film, a one-line outcome, a transcript in a `<details>`, and cross-links to the matching service page. Illustrative demos are labelled "illustrative" / "not a screen recording" — this builds trust.
3. **One strong, restrained visual system.** Near-black + ivory + a single acid-green accent, serif display (Instrument Serif) over a clean sans (Geist) with a mono for labels. Tokens live in CSS variables.
4. **Technical SEO done properly.** Unique title/description per page, OG/Twitter cards, canonical, `en_AU` locale, JSON-LD (`Organization`, `WebSite`, `Service` offers), `sitemap.xml` with `video:video` entries, sane `robots.txt`, preloaded LCP images with `fetchpriority`.
5. **Performance basics.** Self-hosted variable fonts with `font-display: swap` and `unicode-range` subsets, responsive `srcset`/WebP, art-directed hero (landscape vs portrait via media-query preloads), poster images for video.
6. **Accessibility touches worth copying.** Reduced-motion media queries, "Pause motion" control (DetailScout), skip link, captions + transcripts for every film, "download the file" fallback inside `<video>`.

Biggest anti-patterns / risks seen: see §6.

---

## 2. What nextgambit.com.au is

A one-person agency site (David Parry, Gold Coast QLD, "carpenter turned project manager and software developer") selling: websites/branding/campaign films, business & AI automation, AI agents, custom software, AI consulting, and "business modernisation". Targets Australian trades/small businesses. Conversion goal: a free 30-minute call via an enquiry form (name, work email, optional phone/company, free-text, consent checkbox) or email.

### Structure
- `/` single long homepage: hero film → work (4 projects + "more custom software": Gridline, Relay, Axiom concept dashboards) → Google reviews (3, each linking to the original) → 6 capability cards, each with a small animated UI mock → "How we work" (Understand / Build / Launch) → "Meet David" → enquiry form → footer.
- Service landing pages (SEO-targeted slugs): `/ai-automation-australia`, `/ai-agent-development-australia`, `/custom-ai-development-australia`, `/ai-consulting-australia`, `/business-modernisation-australia`, `/digital-presence-launch-australia`.
- Work pages: `/work/detail-scout-gold-coast`, `/work/fairfix-tradie-os`, `/work/adam-gill-tradie-os`, `/work/gambit-chess`. Plus `/privacy`, `/terms`.
- Nav: Services (6) · Projects (4 + "View all the work") · How it works · Meet David · "Book a call". A floating "Talk to Gambit" sales-concierge widget is present on every page.

### Copy style
Short declarative headlines with a full stop and a line break ("Standout websites. Custom software. AI automation."). Second person, plain Australian English, tradie-friendly ("Less chasing. Clearer work."). Numbered eyebrows ("01 / WEBSITE DESIGN", "HOW WE WORK") in mono caps. Each service card = one benefit sentence + "Explore this service". Human-in-control framing for AI ("Human approval", "approved by a person, manual controls always available") rather than hype.

### Design
- Palette (from `:root`): `--black #070907`, `--panel #101311`, `--ivory #eeeae0`, `--paper #d9d3c6`, `--acid #c9ff3d`, `--bone #e8d9b6`, `--muted #8b918c`, `--line #2b302d`, `--pad: clamp(24px,5vw,72px)`.
- Type: Instrument Serif (display), Geist (UI/body, variable 100–900), Geist Mono (eyebrows/labels/data). 
- Layout: full-bleed sections, hairline borders, generous clamp()-based padding, big editorial headings.
- Motion: scroll-reveal component, a live chess-game ticker (hero decoration tied to the brand name "Gambit"), animated mini-UI "workflow" mocks per service, hero film with sound toggle. 13 `prefers-reduced-motion` rules in the CSS.
- Imagery: cinematic stills/video posters, WebP, separate portrait hero for mobile.

### Tech-stack clues
- Framework: React Server Components app built with Vite/Rolldown and the *vinext* runtime (Next.js-API-compatible; response `vary` includes `X-Vinext-*`), hosted on **Vercel** (`server: vercel`, `x-vercel-id`). Chunked, hashed assets under `/_next/static`.
- CSS: **Tailwind v4** utilities (`--tw-*` custom properties) plus hand-written page CSS with design tokens; Lucide icons.
- Analytics: GA4 (`gtag`), Meta Pixel, a first-party `public-analytics` chunk.
- SEO: canonical, OG/Twitter, JSON-LD `@graph`, Google + Bing site verification, `sitemap.xml` with video entries, `robots.txt` (`Disallow: /api/`).
- Caching: `cache-control: public, max-age=0, must-revalidate` on HTML.

---

## 3. Projects published on the site

| # | Project | Site page | Live URL | Notes |
|---|---------|-----------|----------|-------|
| 1 | DetailScout Gold Coast (website design) | https://nextgambit.com.au/work/detail-scout-gold-coast | https://detailscout.com.au | Only project with a public live site |
| 2 | FairFix · Tradie OS (connected business system) | https://nextgambit.com.au/work/fairfix-tradie-os | none (private system; 60 s narrated film) | Film only |
| 3 | Adam Gill · Tradie OS (construction ops) | https://nextgambit.com.au/work/adam-gill-tradie-os | none (private; 1:15 captioned film) | Film only |
| 4 | Gambit Chess (Unreal Engine game, in development) | https://nextgambit.com.au/work/gambit-chess | none (45 s showcase + 3 in-engine captures) | Film only |
| – | Gridline / Relay / Axiom (energy ops, dispatch, portfolio dashboards) | on homepage only | none | Presented as concept/"more custom software" |

Honest labelling: pages say the films are "illustrative", "AI-assisted, stylised", "not a literal screen recording", and that the AI office manager is a "vision/concept". Reviews link to the original Google review.

### DetailScout (https://detailscout.com.au) — analysis
- **Purpose:** independent comparison of 18 Gold Coast car detailers / 30 sourced packages; book direct, no booking fees.
- **UX:** hero → provider carousel/cards (website preview chrome with domain, service chips, "View website" / "Explore packages") → compare tray ("My comparison" counter) → service pages (`/services/ceramic-coating`, `/mobile`, `/pre-sale`…), provider pages (`/detailers/<slug>`), guides (`/guides/car-detailing-prices-gold-coast/`), `/compare/`, `/about/`, `/contact/`, `/privacy/`. Every provider shows its **source URL and "checked" date** (2026-09-25).
- **Design:** warm paper (`#f7f7ef`) + deep green ink (`#182d2b`) + lime accent (`#d3f574`); Georgia serif display; light theme. Sections re-theme via section-scoped `:root`-style token overrides. "Pause motion" button in the header; skip link; `prefers-reduced-motion` handled.
- **Build:** static, hand-written HTML/CSS/vanilla JS (~14 KB `app.js`, ~29 KB data file, ~45 KB CSS, no framework), Cloudflare-hosted, cache-busting `?v=` query strings, GA4, JSON-LD (`Organization`, `WebSite`, `WebPage`), prerendered per-page HTML so it is crawlable.
- **Strengths:** tiny payload, fast, content in a single `data.js` that drives pages, transparent sourcing/pricing disclaimers (GST note, "confirm vehicle size"), programmatic SEO pages per service and provider.
- **Weaknesses:** data lives in a client-side JS global (no API/CMS, manual updates, stale-price risk — mitigated by the visible "checked" date); system serif only (no custom type); `?v=` manual cache-busting instead of hashed filenames; a comparison product with no user accounts/saved lists beyond the in-page tray.

---

## 4. Lessons worth copying (with how)

1. **Hero formula:** eyebrow (mono caps) → 3-line value headline → one-line audience/geography → primary + secondary CTA → 3 trust chips ("Founder-built", "Australia-wide", "Shipped to production").
2. **Evidence rows under every claim:** a small UI mock, a film, or a review next to each capability. Don't just list features.
3. **Case-study template:** eyebrow `THE WORK / <PROJECT>` → outcome headline → 2-paragraph build story → film → collapsible transcript → links to related service pages → CTA band ("YOUR MOVE").
4. **CTA band repeated on every page** with the same verb ("Talk to David") and a reassurance line ("Free 30-minute conversation. Work directly with David.").
5. **Honest AI positioning:** human-in-the-loop labels; "illustrative" tags.
6. **SEO-slugged service pages** (`/<service>-australia`) each with unique title, meta description and FAQ-style content; `sitemap.xml` with `<video:video>`.
7. **Token-first CSS** (`:root` custom properties, `clamp()` spacing) so a brand can be re-skinned in one block.
8. **Perf:** art-directed hero preloads with `fetchpriority="high"` and media queries; WebP + `srcset`; video poster preloaded; fonts self-hosted with `font-display: swap`.
9. **Show provenance** (DetailScout): source link + "last checked" date on any scraped/compiled data.
10. **Motion with a kill switch:** `prefers-reduced-motion` + visible Pause control.
11. **Game-brand tie-in:** the live chess-move ticker makes the brand name memorable — for *game* projects, put the actual game loop/state in the marketing hero.

## 5. Specific improvements for this repo (`game`)

Since there is no code yet, apply these when starting:
1. Ship a landing page with: hero (title, 1-line pitch, **Play** CTA + secondary "Watch trailer"), a 20–45 s gameplay clip with poster and captions/transcript, 3 feature cards each with a tiny animated mock, and a CTA band.
2. Define `:root` tokens first (bg, panel, text, accent, line, `--pad`), one display + one UI + one mono font, self-hosted, `font-display: swap`.
3. Add metadata from day one: unique `<title>`/description, canonical, OG + Twitter image (1200×630), JSON-LD `VideoGame` (or `WebApplication`), `sitemap.xml`, `robots.txt`.
4. Games specifically: pause on `visibilitychange`, respect `prefers-reduced-motion` (reduce shake/flash), keyboard + touch controls, a visible mute toggle (never autoplay audio), `devicePixelRatio`-aware canvas, preload critical sprites.
5. Add a small analytics event layer (play start, level reached, share) behind a consent check.

## 6. Anti-patterns / risks observed (avoid)

- **Heavy third-party tracking** (GA4 + Meta Pixel + first-party analytics + concierge widget) with no visible cookie/consent banner on first load — privacy/ACL risk and perf cost.
- **Autoplay-style media weight:** hero film + showreel + multiple posters on the homepage; first load is ~88 KB HTML but pulls ~30 module chunks. Lazy-load below-the-fold media.
- **HTML `cache-control: max-age=0, must-revalidate`** is fine, but no CDN-level static caching hints for pages.
- **Mojibake risk:** link arrows rendered as `â†—` when the response was read without charset assumptions — always send `Content-Type: text/html; charset=utf-8` and `<meta charset>` early (the site does; it only shows when a client mis-decodes), and prefer SVG icons over Unicode arrows.
- **Content-heavy carousel/film pages with the key info inside video** — keep text equivalents (they do; copy that).
- DetailScout: client-side data global, manual `?v=` cache busting, system-serif-only typography.
- Claims such as "Shipped to production" with three of four projects shown only as films: be explicit about what is live vs. demo (they mostly are).

## 7. Checklist (use before shipping any page)

- [ ] One-sentence value prop + primary CTA above the fold on mobile
- [ ] Unique title (≤60 chars) / description (≤160) / canonical / OG image
- [ ] JSON-LD appropriate to the page type
- [ ] Tokens in `:root`; no hard-coded colours in components
- [ ] LCP image preloaded, `width`/`height` set, WebP/AVIF, `srcset`
- [ ] Fonts self-hosted, `font-display: swap`, subsetted
- [ ] `prefers-reduced-motion` honoured; pause/mute controls present
- [ ] Every video: poster, captions or transcript, download/fallback link
- [ ] Contrast ≥ 4.5:1; focus-visible styles; skip link; labelled form fields
- [ ] Tracking only after consent; no secrets in client code
- [ ] Lighthouse mobile ≥ 90 for Performance/Accessibility/SEO

## 8. Limits of this analysis

Only server-rendered HTML, CSS, headers, sitemap/robots and the DetailScout static assets were read. Film content, runtime animations and the sales-concierge behaviour were not viewed. Gridline/Relay/Axiom have no public URLs. FairFix, Adam Gill and Gambit Chess have no public live sites.
