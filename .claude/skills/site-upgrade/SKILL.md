---
name: site-upgrade
description: Audit a website, web app or browser game in this repo and iterate in proven pro-site features (hero formula, case-study pages, SEO/JSON-LD, perf, a11y, motion with kill switch, command menu, provenance, game-page patterns). Use when asked to improve, polish, upgrade, redesign or "make it look professional", or when starting any new landing page/site/game page.
---

# site-upgrade

Apply lessons from 12 sites read first-hand (nextgambit.com.au, detailscout.com.au, Linear, Raycast, Stripe, Vercel, Notion, Framer, Apple, Supercell, Riot Games, Duolingo meta) plus common pro-site patterns. Only add a feature when it fits THIS project's goal and audience — never bolt everything on.

## Procedure (follow in order)

1. **Understand.** Read README/CLAUDE.md and the project's entry files. State in one line: what it is, who it's for, the single primary action (Play / Book / Buy / Compare).
2. **Audit** against `references/feature-catalogue.md`. For each catalogue item mark: Missing / Weak / OK / Not applicable. Use real evidence (file:line), not guesses. Run Lighthouse or Playwright (pre-installed Chromium, `/opt/pw-browsers/chromium`, `--no-sandbox`) when a page can be served locally.
3. **Pick a shortlist (max 5 per pass)** ranked by impact ÷ effort, with a reason tied to the project goal. Skip anything marked Not applicable. Prefer: primary CTA clarity > performance/LCP > SEO/meta > accessibility > motion/polish > extras.
4. **Implement** the shortlist in small commits. Match the existing stack (plain HTML/JS stays plain; don't introduce a framework or heavy library for polish). Use CSS tokens in `:root`; no hard-coded colours.
5. **Verify.** Re-run the audit checks; screenshot at 390px and 1440px; check keyboard nav, reduced-motion, console errors. Report before/after.
6. **Report** (short): what changed, what was skipped and why, next 3 candidates. Don't claim a score you didn't measure.

## Rules
- Never add tracking, pixels, chat widgets or autoplaying audio without an explicit user ask and a consent gate.
- Label demos honestly ("illustrative", "in development"). No fabricated reviews, stats or logos.
- Don't copy another site's code, copy, imagery or brand assets — copy the *pattern*, write it fresh.
- Respect `prefers-reduced-motion`; every animation needs a pause/off path.
- Keep payload small; justify each new dependency.
- If the project is a game: read the "Game pages" section of the catalogue first.
- Update `docs/design-lessons.md` / the catalogue when you learn something new that generalises.

## How to invoke
- In this repo: `/site-upgrade` (optionally add a focus, e.g. `/site-upgrade landing page for the game` or `/site-upgrade retention`), or just say "improve/polish this site".
- In other repos: copy `.claude/skills/site-upgrade/` into that repo, or into `~/.claude/skills/site-upgrade/` to use it everywhere.
- Focus modes (pick from the user's wording): **landing/conversion** (catalogue A + 9a–9d), **retention/engagement** (9c, 9e, game section F), **performance** (C), **SEO** (B), **accessibility** (D), **visual polish** (E, 9f), **full audit** (all).

## Retention checklist (for games/apps; the pro sites do this off the landing page)
Return reason (daily challenge / streak / leaderboard) · shareable result card with OG image · devlog/changelog page linked in nav · newsletter or "notify me" · save progress safely · fast first-play (<3 s to interactive, no signup wall) · clear "what's new" on return.

## Output format for step 6
1. Audit table (feature · status · evidence). 2. Shortlist (≤5, with why). 3. Diff summary + screenshots/measurements. 4. Next 3 candidates. Keep it under ~40 lines.

## Known limits
Reference notes come from server-rendered HTML only (no animation/runtime/logged-in views). Treat them as patterns to verify, not specs. Refresh `references/opened-sites-notes.md` when asked to learn from new sites (fetch with curl, record purpose, patterns, anti-pattern, stack).

## References
- `references/feature-catalogue.md` — the checklist with how-to snippets and "when it applies".
- `references/opened-sites-notes.md` — first-hand per-site table, cross-site patterns, anti-patterns.
- `references/inspiration-sites.md` — index of opened and still-unopened sites.
- `docs/design-lessons.md` — full analysis of nextgambit.com.au / detailscout.com.au.
