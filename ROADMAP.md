# Roadmap — Maya Dimitrova Resume Website

## Session Log — 2026-07-07 (09:49–13:29)
- Content pulled out of the page into a typed `content/en.json` module.
- Added a Recommendations section; later emptied it rather than ship placeholder quotes.
- Fixed Vercel deploy config.
- Replaced the Formspree contact dialog with a Tally popup; fixed a broken LinkedIn link; added social share image (og:image/twitter:image).
- Docs (PRD, Roadmap) synced to match the actual build.
- Tagged first release, `v1.0.0`.

## Session Log — 2026-07-07 (14:01–14:35)
- Added a dedicated `/book` page with an inline Cal.com scheduler; Contact section grid went from 2 to 3 columns (Email · Book a call · LinkedIn).
- Found and fixed a real bug: the Cal.com embed never rendered because it was missing the bootstrap "stub" `window.Cal` requires before its script loads — calls were silently dropped. Fixed to match Cal.com's documented integration pattern.
- Added two Claude Code skills to this repo (`.claude/skills/`): `push-and-verify-deploy` (commit/push + confirm the live build actually changed, not just that push succeeded) and `update-docs-and-release-notes` (keep PRD/Roadmap/Design honest against real state).
- PRD.md and DESIGN.md updated to reflect the booking feature and the actual tech stack (React/TanStack Start, not plain HTML — this was wrong since the docs were first written, not just from this session).

## Phase 0 & 1 — Foundation (Done)
- [x] PRD, Design doc, real content and photo, Atelier Expressive visual system approved
- [x] Hosting decided and live: Vercel (maya-s-profile.vercel.app)
- [x] Core page built: Hero → Narrative → Expertise → History → Recommendations → Academic/Credentials → FAQ → Contact
- [x] Responsive layout, real content wired in, contact working (Tally + LinkedIn + mailto fallback)
- [ ] Tested in at least 2 browsers — still open

## Now — Closing the Gaps (next session)
Blocked-on-decision items are marked — everything else is just build time.

- [ ] **Resolve Professional Interests** *(needs Maya's decision)* — PRD still lists it Must-have; Design doc already dropped it. Reconcile the docs one way or the other.
- [ ] **Wire a real PDF download** — both "Download CV" buttons currently just scroll to Contact. Export real PDF, host it, link it.
- [ ] **Add a privacy note** to the contact form area — one line on what happens to a submitted message.
- [ ] **Recommendations & FAQ** *(needs Maya's input — quotes/questions)* — either populate with real content or remove from the nav.
- [ ] **Surface contact earlier** — a lightweight "Get in touch" link near the hero, not just section 8.
- [ ] **Smoke-test the live Tally popup** — submit a real message on the deployed site, confirm it arrives and reads well on mobile.
- [ ] **Confirm the Cal.com calendar actually renders on `/book`** — the embed code is verified correct and deployed, but rendering in a real browser hasn't been visually confirmed yet (no browser tool access this session).
- [ ] **Availability/status line** *(needs Maya's wording)* — e.g. "open to new opportunities."
- [ ] **Accessibility pass** — run Lighthouse/axe against the cream/moss-gold/slate-blue palette (never contrast-checked since Design doc v1).

## Phase 2 — Polish (v1.1)
- [ ] Visual (not just text) language-proficiency indicator
- [ ] Active-section highlighting in the sticky nav
- [ ] Subtle scroll animations
- [ ] Performance pass (image compression, CSS size)

## Phase 3 — Nice-to-haves (v2)
- [ ] Dark/light mode toggle
- [ ] Case-study style Projects section
- [ ] Privacy-friendly analytics (Plausible/GoatCounter) *(needs Maya's opinion on whether this is even wanted)*
- [ ] Custom domain *(needs Maya's decision)*

## Milestones / Definition of Done
| Milestone | Definition of Done | Status |
|---|---|---|
| MVP Live | Deployed, real content, responsive, no broken links | ✅ Done |
| Shareable | Clean URL, share preview image | ✅ Done |
| Trustworthy | Working PDF download, privacy note, no empty nav sections | ❌ Open — 3 items above |
| Polished | Accessibility + performance checked, cross-browser tested | ❌ Open |

## Decisions Waiting on Maya
- Keep or formally cut Professional Interests?
- Real testimonial quotes / FAQ content, or drop those nav items?
- Availability/status line wording, if any?
- Custom domain, or stay on the free Vercel subdomain?
- Is analytics worth adding, or unnecessary overhead?
