# Design Doc — Maya Dimitrova Resume Website

## 1. Visual Direction
**Style: Atelier Expressive** (finalized via Google Stitch, approved as-is).
- Evolved from the original "corporate yet minimal, charcoal-only" brief into a more editorial, curated aesthetic — closer to a bespoke gallery catalog or premium independent publication than a plain consultancy page.
- Retains rigorous alignment and intentional whitespace, but introduces a deliberate color story instead of staying monochrome.
- Emotional tone: "intellectually vibrant" rather than "quietly confident" — still professional, but more distinct and memorable.
- Flat design throughout — no shadows, blurs, or simulated depth. Hierarchy comes from tone and layering, not lighting effects.
- Sharp, unrounded corners (0px) on all elements — buttons, image containers, cards — for an architectural, high-end print feel.

## 2. Color Palette
Finalized palette, as generated and approved (supersedes the earlier charcoal/black-only direction):

| Role | Color | Notes |
|------|-------|-------|
| Background | `#fefbd0` | Pale warm cream/yellow |
| Primary | `#7b7b03` (headings, key text) / `#626200` (tint variant) | Deep muted moss-gold — used for headings, high-emphasis text and backgrounds |
| Secondary | `#697797` / `#505e7d` | Dusty slate blue — metadata, descriptions, supporting info |
| Neutral / Borders | `#7a7956` (approx., sage-tinted) / `outline-variant #cac7b2` | Hairline dividers and structural boundaries |
| Surface containers | `#f8f6cb` → `#e7e5bb` (low to highest) | Layered tonal surfaces for cards/sections |
| On-surface (body text) | `#1d1d04` | Near-black with warm undertone |
| Inverse surface (footer/contact block) | `#323215` bg / `#f5f3c8` text | Used for the dark closing "Let's connect" section |

## 3. Typography
- **Font family:** Geist — chosen for a technical, architectural feel.
- **Weights:** two only — Regular (400) and Medium (500).
- **Scale:**
  - Display (hero name): 48px desktop / 36px mobile, weight 500, tight letter-spacing (-0.02em)
  - Headline lg (section titles): 32px desktop / 24px mobile, weight 500
  - Headline md: 20px, weight 500
  - Body lg: 18px, weight 400, line-height 1.6
  - Body md: 16px, weight 400, line-height 1.6
  - Label md (nav, tags): 14px, weight 500, uppercase, tracking 0.05em
  - Label sm (fine print): 12px, weight 400
- Vertical rhythm based on a 1.6x line-height for body text; headline bottom margins ~1.5x font size.

## 4. Layout Structure
Single scrolling page, sticky top nav, section-based cards on a shared background.

```
┌─────────────────────────────────────┐
│  ROSSI.PM   INTRO NARRATIVE          │ ← sticky nav, label-md, uppercase
│  EXPERTISE HISTORY CONTACT [Download]│
├─────────────────────────────────────┤
│  HERO (01)                           │
│  Photo (right) · Name + tagline (left)│
│  Credential/skill tags (pills)        │
├─────────────────────────────────────┤
│  THE NARRATIVE (about me)            │
│  Short framing statement + 2 short   │
│  supporting paragraphs, two-column   │
├─────────────────────────────────────┤
│  THE EXPERTISE (skills)              │
│  3-column: Methodology · Leadership  │
│  · Tools & Stack — tags/proficiency  │
├─────────────────────────────────────┤
│  PROFESSIONAL HISTORY (experience)   │
│  Role · Company · Dates, with        │
│  outcome bullets + focus-area tags   │
├─────────────────────────────────────┤
│  ACADEMIC + CREDENTIALS              │
│  Left: degrees. Right (dark panel):  │
│  certifications, "Verify" link       │
├─────────────────────────────────────┤
│  CONTACT (dark inverse-surface)      │
│  Large "Let's connect" headline      │
│  Email · Book a call · LinkedIn      │
│  copyright                           │
└─────────────────────────────────────┘
```

A separate standalone page, `/book`, exists outside this single-scroll structure: light header with a "Back to profile" link, a "Scheduling" eyebrow + heading, and an inline Cal.com scheduler. It's reached only via the "Book a call" contact option, not from the main nav — the one-page narrative structure above is otherwise unchanged.

Note: this structure **does not include a Professional Interests section** — that section was dropped from scope (see PRD, Decisions Made).

## 5. Components
- **Nav bar:** simple text links, label-md, uppercase, no underline by default; solid 1px bottom border in Primary color on hover.
- **Buttons (primary):** background `#7b7b03`, text in background color, sharp corners, medium weight, padding 12px 24px (e.g. "Download CV").
- **Buttons (ghost/secondary):** transparent background, 1px border in Secondary color, text in Secondary color.
- **Skill/credential tags:** small pill-shaped or sharp-cornered chips depending on context — proficiency level tags (Expert/Advanced/Certified) shown inline next to skill names.
- **Cards (experience/history items):** no shadows or fills — separated by a top 1px border; date/category label in label-sm (Secondary color) above a Primary-colored title.
- **Lists:** vertical, 16px padding between items, small dash (–) instead of bullet points.
- **Contact row:** three-column grid on the dark inverse-surface closing panel, same icon-label-value-arrow row pattern for all three — Email (opens a Tally popup form), Book a call (links to the standalone `/book` page), LinkedIn (external link) — plus a small plain mailto link beneath the grid as a no-JS fallback.
- **Photo:** professional headshot, placed prominently in the Hero, sharp-cornered container (no rounding), consistent with the flat/architectural aesthetic.

## 6. Responsive Behavior
- **Desktop:** 1120px max-width container, 12-column grid for complex sections (Expertise, History), single centered 8-column reading width for long-form text (Narrative).
- **Mobile:** transitions to a single-column layout with 24px side margins; nav likely collapses to a simpler stacked or condensed form (to be confirmed during build).
- Spacing rhythm based on a 4px baseline unit; generous vertical spacing between major sections (~80px) to preserve the boutique/editorial feel.

## 7. Tech Approach
- Built as a **React + TanStack Start** app (Tailwind utility classes, based on the Stitch export) rather than the originally-planned plain HTML/CSS — same "keep it simple" spirit, just a different starting scaffold (via Lovable).
- All resume content lives in one typed file, `src/content/en.json`, so updating copy doesn't require touching layout/component code.
- PDF download: not yet implemented — the nav button currently links to the Contact section rather than a real file (tracked in ROADMAP.md).
- Two third-party embeds load client-side JS: Tally (contact form popup) and Cal.com (inline scheduler on `/book`) — both are additive widgets, not core to the page rendering.

## 8. Accessibility Notes
- Verify color contrast for the cream background against moss-gold and slate-blue text — non-standard palettes need explicit WCAG AA checks (this palette has not yet been contrast-tested).
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Alt text for the photo and any icons.
- Keyboard-navigable nav links, visible focus state (solid 1px Primary-color border, per Stitch spec).

## 9. Known Gaps / Follow-ups
- Placeholder content (name, headshot, copy) from the Stitch export needs to be swapped for Maya's real photo and finalized text before build.
- Color contrast has not yet been formally checked against WCAG AA.
- Mobile nav behavior not yet specified in detail — confirm during build.
