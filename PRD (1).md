# PRD — Maya Dimitrova Personal Website (Resume Replacement)

## 1. Overview
A static personal website that replaces Maya Dimitrova's PDF resume for potential employers and clients. Unlike a traditional CV layout, it presents her background as a personal professional profile — corporate yet minimal, suitable for a European hiring audience, mobile-friendly, and downloadable as a PDF for offline use.

## 2. Problem Statement
A PDF resume is static, hard to browse on mobile, and forces every viewer into the same rigid chronological format. Maya's background spans EU institutions, US higher education, and telecom — a personal site lets this come across as a coherent professional story rather than a list of jobs, while still giving recruiters a quick, scannable overview and an easy way to download a PDF version if they need one.

## 3. Goals
- Present Maya as a professional and a person — not just a list of past titles.
- Signal "corporate yet minimal" — trustworthy and polished, appropriate for European employers (clean, understated, no gimmicks).
- Move away from traditional CV structure: tell the story through About Me, Skills, Education, Work Experience, and Professional Interests as distinct, personality-inflected sections rather than a dense chronological block.
- Be fully mobile-friendly — many recruiters will open the link on a phone.
- Offer a one-click PDF download for anyone who still needs a traditional file.
- Include a clear way to get in touch (dedicated Contact page/section).

## 4. Non-Goals (for v1)
- No blog, no CMS, no backend/database.
- No traditional "CV table" layout (dense dates/bullets with no visual breathing room).
- No login/auth or dynamic content.
- No e-commerce or client-facing project intake forms (a simple contact method is enough for v1).

## 5. Target Audience
- European employers and hiring managers, particularly in IT project/program management, Agile delivery, EU institutions, and international organizations.
- Potential clients or collaborators evaluating Maya for project-based or consulting work.
- Professional network contacts asking to see her background.

## 6. Site Structure & Core Features (v1 — MVP)

| # | Section/Feature | Description | Priority |
|---|---|---|---|
| 1 | **Hero** | Photo, name, credentials (MBA, MMIS, CSM®), short personal tagline (not just a job title) | Must |
| 2 | **About Me** | Short narrative — who she is professionally and personally, tone warmer/more personal than a CV summary | Must |
| 3 | **Skills** | Grouped by theme (Project Management, Data & BI, Process Mapping, Technical, Leadership) — visual, not a bare bullet list | Must |
| 4 | **Work Experience** | Career story presented cleanly — company, role, dates, key impact — but restructured for readability, not a copy-paste of the CV bullets | Must |
| 5 | **Education & Certifications** | Degrees and certifications (CSM®, ITIL 4, ongoing AI academy) | Must |
| 6 | **Professional Interests** | New section (not on a traditional CV) — topics/areas she's genuinely curious about or developing in (e.g. AI, data interoperability, Agile coaching) | Must |
| 7 | **Contact** | Dedicated section: email (opens a Tally popup form — Name, Email, Content), LinkedIn, plain mailto link as a no-JS fallback | Must |
| 8 | **Downloadable PDF** | Button to download a polished PDF version of the resume | Must |
| 9 | **Responsive layout** | Fully usable on mobile — no horizontal scroll, readable font sizes, touch-friendly nav | Must |
| 10 | **Language proficiency display** | Visual (not just text) indicator for English/Bulgarian/French/Spanish levels | Should |
| 11 | **Photo treatment** | Professional but approachable — consistent with "corporate yet minimal" tone | Must |
| 12 | **Testimonial/recommendation** | Short quote from a former manager or colleague — reinforces credibility, reinforces "not a traditional CV" | Should |
| 13 | **Availability/status line** | Subtle signal such as "open to new opportunities" or "currently at X" — optional, tone-dependent | Should |
| 14 | **SEO basics** | Page title, meta description, Open Graph/Twitter share image so links posted to LinkedIn/email render a preview card instead of blank text | Should |
| 15 | **Privacy note** | One line covering what happens to a visitor's info if they use the contact form/email — a "corporate yet minimal" professionalism signal for a European audience | Should |
| 16 | **Analytics** | Simple, privacy-friendly page-view tracking (e.g. Plausible or GoatCounter) to know if the site is being viewed | Could |
| 17 | Dark/light mode toggle | | Could |
| 18 | Subtle scroll animations | | Could |

## 7. Tone & Positioning
- **"Corporate yet minimal"**: restrained color palette, generous whitespace, clear typographic hierarchy — polished like a consultancy's website, not a flashy portfolio.
- **"Appropriate for European employers"**: professional photo, formal-but-warm language, avoid overly casual American-style personal branding (no big bold slogans/hero taglines that feel like a sales pitch); understated confidence over self-promotion.
- **"Not a traditional CV"**: content is organized by theme and story (About Me → Skills → Interests) rather than strictly reverse-chronological job history; the Work Experience section still needs dates/facts, but framed with brief context rather than dense bullet lists.

## 8. Success Criteria
- A recruiter or client can understand who Maya is, what she does, and why she's credible within 30–45 seconds of scrolling.
- The site feels distinct from a PDF resume — more human, still credible.
- Works cleanly on a phone: readable text, no awkward wrapping, easy-to-tap nav and download button.
- The PDF download still gives a complete, traditional resume for anyone who needs one for internal HR systems.
- Page loads in under 2 seconds on a normal connection.

## 9. Constraints
- Static site only (HTML/CSS/optional light JS) — no server required.
- Should be deployable for free (e.g. GitHub Pages, Netlify, Vercel).
- Domain/URL not yet decided — a free subdomain (e.g. GitHub Pages default) works for v1; a custom domain (e.g. mayadimitrova.com) is a possible upgrade.
- Content should live in a single, easy-to-edit place so Maya can update it herself later without touching layout code.
- Built as a beginner "vibe coding" project — code stays simple and readable over "clever."

## 10. Open Questions
- What should go in "Professional Interests" — purely topical (e.g. AI, data standards, Agile coaching) or does she want to include personal interests too (hobbies) for a more rounded picture?
- ~~Contact page: simple mailto/phone/location listing, or an actual contact form?~~ Decided: Tally popup form (Name, Email, Content), triggered from the same email row, with a plain mailto link kept alongside as a fallback.
- Final hosting choice — GitHub Pages vs Netlify vs Vercel? Decided: Vercel (live at maya-s-profile.vercel.app).
- Does she have a professional photo ready, or does that need to be sourced/taken?
- Is there a former manager/colleague willing to give a short quote for the testimonial section, or should this be dropped for v1?
- Does she want an availability/status line (e.g. "open to new opportunities"), and if so, what should it say?
- Custom domain, or is a free subdomain fine for now?
- Is knowing site traffic (analytics) actually useful to her, or is that unnecessary overhead?
