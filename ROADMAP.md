# Roadmap — Maya Dimitrova Resume Website

## Phase 0: Prep (Today)
- [x] Write PRD
- [x] Write Design doc
- [x] Gather actual resume content (loaded from MayaDimitrova_Resume file)
- [x] Extract professional photo (from existing resume PDF)
- [x] Finalize visual design via Google Stitch (Atelier Expressive palette, approved as-is)
- [x] Decide scope: Professional Interests section dropped for v1
- [ ] Choose hosting: GitHub Pages / Netlify / Vercel

## Phase 1: MVP Build (v1)
- [ ] Set up project folder (`index.html`, `style.css`, optional `script.js`)
- [ ] Build HTML structure: Hero → Narrative (About) → Expertise (Skills) → Professional History (Experience) → Academic + Credentials (Education) → Contact
- [ ] Apply base styling: Stitch palette, Geist font, sharp corners, spacing from updated Design doc
- [ ] Make it responsive (test at desktop, tablet, mobile widths)
- [ ] Add real content (swap Stitch placeholder name/photo for Maya's actual content and headshot)
- [ ] Add contact links (email, LinkedIn)
- [ ] Test in at least 2 browsers

**Goal:** a working, deployed page with real content — "good enough to share."

## Phase 2: Polish (v1.1)
- [ ] Add "Download Resume PDF" button (link to actual PDF)
- [ ] Add subtle scroll animations (fade-in sections)
- [ ] Add sticky nav with active-section highlighting
- [ ] Add favicon + page title/meta tags (for link previews when shared)
- [ ] Accessibility pass (contrast check for the cream/moss-gold/slate-blue palette — not yet WCAG-verified, alt text, semantic tags)
- [ ] Performance pass (compress images, minify CSS if needed)

## Phase 3: Nice-to-haves (v2, optional)
- [ ] Dark/light mode toggle
- [ ] Projects section with case-study style cards
- [ ] Simple analytics (e.g. Plausible or GoatCounter) to see if anyone's viewing it
- [ ] Custom domain (e.g. yourname.com)
- [ ] Small CMS-free content update flow (edit one `data.json`, no touching HTML)

## Milestones / Definition of Done
| Milestone | Definition of Done |
|-----------|---------------------|
| MVP Live | Page deployed with real content, responsive, no broken links |
| Shareable | Has a clean URL I'd feel comfortable putting on a business card / LinkedIn |
| Polished | Passes a basic accessibility + performance check, has PDF download |

## Notes for the Training
Since this is a beginner vibe-coding session, the suggested order is:
1. Finalize this Roadmap + Design doc (done).
2. Ask your AI coding assistant to scaffold Phase 1 tasks one at a time — not all at once.
3. Preview after each section is added, rather than building the whole page blind.
4. Keep content and styling separate as early as possible — it makes later edits painless.
