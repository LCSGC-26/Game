# Feature catalogue

Format: **Feature** — applies when · how · check.

## A. Conversion & content
1. **Hero formula** — any landing page · mono eyebrow → 3-line declarative headline → one-line audience → primary + secondary CTA → 3 trust chips · primary CTA visible without scrolling at 390px.
2. **Repeated CTA band** — multi-section pages · same verb and reassurance line at the bottom of every page · identical wording everywhere.
3. **Proof beside every claim** — product/service sites · clip, screenshot, animated mini-UI or real review (linked to source) · no feature list without evidence.
4. **Case-study template** — portfolios · `THE WORK / <name>` eyebrow → outcome headline → 2-paragraph story → media → collapsible transcript → links to related pages → CTA.
5. **Honest labelling** — demos/concepts · "illustrative", "in development", "not a screen recording".
6. **Provenance** — compiled/scraped data (DetailScout) · source link + "last checked" date per item + disclaimers (GST, confirm details).
7. **Comparison tray** — choose-between-N items · persistent "My comparison (n)" counter, side-by-side inclusions · works without login (localStorage in try/catch).
8. **Programmatic SEO pages** — many similar entities · one template per service/provider/guide, data from one JSON/JS file · unique title/description per page, internal links.

9a. **Dual CTA** — products with self-serve + sales · "Get X free" / "Start now" beside "Contact sales/Request a demo" (Stripe, Notion, Linear, Framer).
9b. **Use cases as concrete jobs** — product sites · gallery of "Resolve support tickets in Slack"-style tasks instead of feature names (Notion, Raycast).
9c. **Shipping cadence as proof** — anything updated often · changelog / "Now" / "Recently shipped" strip (Linear, Vercel); for games a devlog + patch notes.
9d. **Customer stories led by a number** — B2B · headline contains the metric (Stripe).
9e. **Retention loop outside the landing page** — games/apps · return reason (daily challenge, streak, leaderboard), shareable result card, newsletter/changelog; Riot's front page is a content feed, Supercell recruits via culture pages.
9f. **Light/dark support** — dev/consumer tools · tokens flip via `prefers-color-scheme` + `data-theme` override, `<meta name="theme-color">` (Linear, Vercel).
9g. **Security headers** — any deployed site · HSTS (preload), CSP, `frame-ancestors` (Stripe, Vercel, Linear all ship them).
9h. **Brand-asset menu** — brands others write about · logo "Copy SVG" + brand guidelines link (Framer).

## B. SEO & sharing
9. **Meta set** — always · unique title ≤60, description ≤160, canonical, `og:*`, `twitter:card=summary_large_image`, 1200×630 image, `lang`/locale.
10. **JSON-LD** — always · Organization + WebSite; `VideoGame`/`WebApplication`/`Product`/`LocalBusiness`/`FAQPage`/`VideoObject` as relevant · validate in Rich Results Test (outside sandbox).
11. **sitemap.xml + robots.txt** — always · include `video:video` entries when you have films · `Disallow` only private paths.
12. **Keyword service slugs** — services · `/<service>-<region>` with matching H1.

## C. Performance
13. **LCP image** — always · preload with `fetchpriority="high"`, art-directed with `media`, explicit width/height, WebP/AVIF + `srcset`.
14. **Fonts** — always · self-host variable WOFF2, `font-display: swap`, subset via `unicode-range`, ≤2 families + mono.
15. **Lazy everything below the fold** — `loading="lazy"`, `preload="none"` on videos, poster image set.
16. **Budget** — static/marketing pages · aim <300 KB JS; DetailScout ships ~100 KB total.
17. **Core Web Vitals targets (75th pct)** — LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1.

## D. Accessibility
18. **Skip link, landmarks, focus-visible, labelled form fields, contrast ≥4.5:1.**
19. **Motion safety** — `@media (prefers-reduced-motion: reduce)` disables parallax/shake/autoplay; visible "Pause motion" control for ambient animation.
20. **Video** — poster, captions, transcript in `<details>`, download link fallback inside `<video>`.
21. **Keyboard-first** — all interactive widgets operable by keyboard; optional command menu (Cmd/Ctrl+K) for apps/dense sites, with shortcut hint chips (Raycast/Linear pattern) — only for apps with ≥10 destinations.

## E. Visual system & motion
22. **Tokens** — `:root{--bg,--panel,--text,--muted,--accent,--line,--pad:clamp(24px,5vw,72px)}`; re-skin by overriding tokens per section.
23. **Type pairing** — display serif + clean sans + mono for labels/data; cap at 2–3 families.
24. **One accent colour**, restrained palette; hairline borders; generous padding.
25. **Motion that demonstrates** — animate the product/workflow (mini-UI loops, state changes), not decoration. If it'd be as good static, cut it. Use CSS scroll-driven animations (`animation-timeline`, Chrome 115+/Safari 26) behind `@supports`, with IntersectionObserver fallback; View Transitions for page changes where supported.
26. **Brand-tied hero element** — e.g. live chess-move ticker for "Gambit"; for games, run the real game loop/demo in the hero.

## F. Game pages (browser games)
27. Title + 1-line pitch + big **Play** button above the fold; game container with reserved aspect-ratio (no layout shift while loading); fullscreen button; clearly explained controls.
28. Mute toggle, no audio before first user gesture; pause on `visibilitychange`; touch + keyboard + gamepad where sensible; `devicePixelRatio`-aware canvas.
29. Trailer/gameplay clip with poster + captions; 3 feature cards; screenshots (WebP); "Share" with prefilled OG image.
30. Save progress/high score in localStorage wrapped in try/catch; works if storage blocked.
31. Respect reduced motion: tone down screen shake, flashes (photosensitivity), offer a toggle.
32. JSON-LD `VideoGame`; analytics events (play start, level reached) only after consent.

## G. Privacy & trust
33. Consent gate before analytics/pixels; privacy + terms pages; real contact method; no secrets in client code.
34. Reviews/testimonials: real, attributed, linked to original.
