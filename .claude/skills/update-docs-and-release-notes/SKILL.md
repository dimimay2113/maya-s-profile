---
name: update-docs-and-release-notes
description: After a feature or fix ships (or whenever explicitly asked), check whether PRD.md, ROADMAP.md, and DESIGN.md still reflect reality, update only the ones that have actually drifted, and draft or update the GitHub release notes for the change. Use this when the user asks to "update the docs," "update release notes," "sync the PRD/Roadmap," "update PRD and Roadmap," or after any feature/fix lands where the docs might now be stale. The "if needed" is load-bearing — this skill is not a reflexive rewrite of every doc every time, it's a verification pass that only touches what's actually out of date.
---

## Why this matters
Docs drift fast in a project that ships this quickly — PRD.md and DESIGN.md have both gone stale within hours of real code shipping (DESIGN.md said "no contact form" after one had already been built; PRD.md still marked Professional Interests as Must-have after Design.md had already dropped it). The goal isn't grep-and-replace-the-date, it's verifying each doc against ground truth and fixing only what's actually wrong.

## What "if needed" means, per file

- **PRD.md** — Compare the feature table and Open Questions against what's actually live (read the code, don't infer from memory or commit messages alone). Update rows that no longer match reality, mark resolved Open Questions as resolved. Leave sections alone that are still accurate.
- **ROADMAP.md** — Compare checkboxes against actual `git log` + live site state, not against what was originally planned. Add newly-discovered gaps surfaced during this pass. Preserve the "blocked on a decision" vs. "just needs building" split already established in this doc (see its "Decisions Waiting on Maya" section) — don't collapse that distinction back into one flat list.
- **DESIGN.md** — Only touch this if an actual visual/UX/component decision changed (a new component pattern, a new page, a changed layout). This doc describes what's live, not what's planned — leave it alone unless something at that level of granularity actually shipped.

If a file genuinely needs no changes, say so explicitly in the final report rather than making a cosmetic edit just to show activity.

## Ground the update before editing
- `git log --oneline -20` (or back to the last relevant tag) for what actually shipped since the docs were last touched.
- Read the current code for anything a doc claims — don't trust a commit message summary alone, it can be incomplete or slightly off from what actually landed.
- If relevant, check the live site directly using the approach in the `push-and-verify-deploy` skill (curl the real HTML/JS, not a summarizing fetch) rather than assuming the deploy matches the code.

## Release notes
Same tooling situation as deploying: check first whether `gh` CLI is installed and authenticated (`gh auth status`). If so, prefer it directly (`gh release create` / `gh release edit`). If not — the default so far in this project — draft the notes as markdown for the user to paste into GitHub's "Draft a new release" page themselves. Use this shape:

```markdown
## vX.Y.Z — <short description>

### Added
- ...

### Fixed
- ...

### Known gaps
- ... (pull from ROADMAP.md's open items where relevant)
```

Pick the version bump based on what actually shipped (patch for fixes, minor for new features) relative to the last tag — check `git tag -l` first rather than guessing the next number.

## Report back
List exactly which doc(s) were changed and why, and which ones were checked but left alone (with a one-line reason each). The point is to make the "if needed" judgment visible, not silent — the user should be able to tell this was a real check, not a rubber stamp.
