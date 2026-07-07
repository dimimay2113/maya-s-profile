# Roadmap — Maya Dimitrova Resume Website

## Phase 0: Prep (Today)
- [x] Write PRD
- [x] Write Design doc
- [x] Gather actual resume content (loaded from MayaDimitrova_Resume file)
- [x] Extract professional photo (from existing resume PDF)
- [x] Finalize visual design via Google Stitch (Atelier Expressive palette, approved as-is)
- [x] Decide scope: Professional Interests section dropped for v1
- [x] Choose hosting: Vercel (live at [maya-s-profile.vercel.app](https://maya-s-profile.vercel.app))

## Phase 1: MVP Build (v1)
- [x] Set up project (built on TanStack Start/React + Tailwind via Lovable, not plain HTML/CSS — same end goal, different scaffold)
- [x] Build page structure: Hero → Narrative → Expertise → Professional History → Recommendations → Academic + Credentials → FAQ → Contact
- [x] Apply base styling: Atelier Expressive palette, Geist font, sharp 0px corners, spacing from Design doc
- [x] Make it responsive (mobile nav collapses, `md:` breakpoints throughout)
- [x] Add real content (moved into a typed `content/en.json`, not hardcoded — Maya's actual resume data)
- [x] Add contact links (email → Tally popup form, LinkedIn, mailto fallback)
- [ ] Test in at least 2 browsers

**Goal:** a working, deployed page with real content — "good enough to share." ✅ Done — site is live and shareable.

## Phase 2: Polish (v1.1)
- [ ] Add "Download Resume PDF" button (link to actual PDF) — button exists in the nav but currently just scrolls to Contact, no PDF wired up yet
- [ ] Add subtle scroll animations (fade-in sections)
- [x] Add sticky nav with active-section highlighting — sticky nav done; active-section highlighting not yet added
- [x] Add favicon + page title/meta tags (for link previews when shared) — title, description, and now `og:image`/`twitter:image` (using the headshot) all in place
- [ ] Accessibility pass (contrast check for the cream/moss-gold/slate-blue palette — not yet WCAG-verified, alt text, semantic tags)
- [ ] Performance pass (compress images, minify CSS if needed)
- [ ] Populate or remove the Recommendations and FAQ sections — both are live in the nav but currently empty; decide whether to add real testimonials/FAQ content or drop them from the nav

## Phase 3: Nice-to-haves (v2, optional)
- [ ] Dark/light mode toggle
- [ ] Projects section with case-study style cards
- [ ] Simple analytics (e.g. Plausible or GoatCounter) to see if anyone's viewing it
- [ ] Custom domain (e.g. yourname.com)
- [ ] Small CMS-free content update flow (edit one `data.json`, no touching HTML)

## Milestones / Definition of Done
| Milestone | Definition of Done | Status |
|-----------|---------------------|--------|
| MVP Live | Page deployed with real content, responsive, no broken links | ✅ Done |
| Shareable | Has a clean URL I'd feel comfortable putting on a business card / LinkedIn, with a share preview image | ✅ Done |
| Polished | Passes a basic accessibility + performance check, has a working PDF download | Not yet — PDF download still just scrolls to Contact; accessibility/performance passes not run |

## Notes for the Training
Since this is a beginner vibe-coding session, the suggested order is:
1. Finalize this Roadmap + Design doc (done).
2. Ask your AI coding assistant to scaffold Phase 1 tasks one at a time — not all at once.
3. Preview after each section is added, rather than building the whole page blind.
4. Keep content and styling separate as early as possible — it makes later edits painless.
