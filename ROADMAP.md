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

## Session Log — 2026-07-07 (14:49–15:29)
- Investigated the Cal.com "stuck loading" report further: initially traced to a browser extension (worked in a private window) and marked resolved, then reverted that conclusion after it was reproduced in a private window too — root cause narrowed to something on the Cal.com account/event-type side (most likely no Availability schedule on the event), not the embed code. Left open, parked per Maya's call.
- Ran a real accessibility gap analysis: calculated WCAG contrast ratios against the site's actual color tokens (not estimated) and code-reviewed focus states, semantics, and ARIA. Found two real failures: Primary/Secondary text colors were below AA contrast (4.25–4.26:1, need 4.5:1) at every size except large headlines, and there was no visible keyboard focus indicator anywhere on the real page despite DESIGN.md specifying one.
- Fixed both: swapped Primary/Secondary to darker AA-passing shades already present in the palette (6.10:1 / 6.15:1), and added a global `:focus-visible` outline in `styles.css` covering every interactive element site-wide. Verified live by confirming the new color value in the deployed CSS bundle.
- DESIGN.md updated: Color Palette table reflects the new hex values and why they changed; Accessibility Notes section rewritten with the actual current status instead of "not yet checked."

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
- [ ] **Cal.com calendar still not rendering on `/book`** — still stuck loading, now confirmed in a private/incognito window too (rules out a browser-extension explanation). Needs real debugging, not just a browser-profile workaround.
- [ ] **Availability/status line** *(needs Maya's wording)* — e.g. "open to new opportunities."
- [x] **Contrast + keyboard focus fixed** — WCAG AA contrast failures on Primary/Secondary text fixed (verified with real ratios, not estimated); global keyboard focus outline added site-wide.
- [ ] **Run an automated accessibility scan (Lighthouse/axe)** — the contrast/focus fixes above came from manual review; an automated pass would catch anything that missed (e.g. `outline-variant` border contrast, still open — see DESIGN.md).

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
| Polished | Accessibility + performance checked, cross-browser tested | ⚠️ Partial — contrast/focus fixed, automated a11y scan + performance + cross-browser still open |

## Decisions Waiting on Maya
- Keep or formally cut Professional Interests?
- Real testimonial quotes / FAQ content, or drop those nav items?
- Availability/status line wording, if any?
- Custom domain, or stay on the free Vercel subdomain?
- Is analytics worth adding, or unnecessary overhead?
