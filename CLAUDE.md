# CLAUDE.md

Project: `game` (browser game / web project by Luan). Currently near-empty — see `README.md`.

## Design & web conventions (learned from nextgambit.com.au / detailscout.com.au)

Full analysis and checklist: `docs/design-lessons.md`. When creating or editing any page, landing site or UI in this repo:

1. **Tokens first.** Define colours, spacing (`--pad: clamp(24px,5vw,72px)`) and fonts as CSS variables on `:root`; never hard-code colours in components. Default look: dark base + ivory text + ONE accent colour; serif display + clean sans + mono for small caps labels.
2. **Hero formula.** Mono eyebrow → short declarative headline (full stops) → one-line audience → primary CTA ("Play") + secondary CTA → 3 trust chips. Repeat the same CTA band at the bottom of every page.
3. **Show, don't list.** Pair every claim with a gameplay clip, animated mock or screenshot. Videos need a poster, captions/transcript (`<details>`), and a download/fallback link. Label demos honestly ("illustrative", "in development").
4. **SEO/meta on every page.** Unique title/description, canonical, OG + Twitter image, JSON-LD (`VideoGame`/`WebApplication`), `sitemap.xml`, `robots.txt`.
5. **Performance.** Self-host fonts (`font-display: swap`), WebP with `srcset`, `fetchpriority="high"` on the LCP image, lazy-load below the fold, set image dimensions.
6. **Accessibility & games.** Honour `prefers-reduced-motion`; provide pause and mute controls (no audio autoplay); pause on `visibilitychange`; keyboard + touch input; contrast ≥ 4.5:1; focus-visible; skip link.
7. **Privacy.** Don't add analytics/pixels/chat widgets without a consent gate. Never put secrets in client code.
8. **Provenance.** Any compiled/scraped data shows its source and a "last checked" date.
9. Prefer plain HTML/CSS/JS for small static sites (DetailScout ships ~100 KB total); reach for a framework only when needed.

Before finishing UI work, run through the checklist in `docs/design-lessons.md` §7.
