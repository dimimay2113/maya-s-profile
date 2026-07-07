---
name: push-and-verify-deploy
description: Commit and push changes to GitHub for this repo (maya-s-profile) and verify the Vercel deployment actually picked them up — not just that git push succeeded. Use this whenever the user asks to push changes, deploy, redeploy, "ship" something, update GitHub, or asks whether a change is live yet / whether the deployment went through. Also use when the user says "redeploy" with no code changes pending — that still needs a real action (an empty commit), not a no-op. This project has no Vercel CLI or API token configured, so verification means inspecting what the live site is actually serving, not querying a dashboard.
---

## Why this matters

Vercel is connected to this repo via its GitHub integration and auto-deploys on push to `main` — but there's no `vercel` CLI or API token authenticated in this environment. "Monitoring the deployment" can't mean querying Vercel's API by default. It has to mean looking at what the live site actually serves after the push, and being honest about what that check does and doesn't prove. An HTTP 200 alone proves nothing — a stale cached page returns 200 too.

## Steps

### 1. Check for pending changes
Run `git status`. If there's nothing to commit and the user just wants a fresh build triggered (e.g. they say "redeploy" with no prior instruction to change code), push an empty commit instead of silently doing nothing:
```
git commit --allow-empty -m "Trigger redeploy"
```
Otherwise, stage and commit the relevant changed files. Write the message around *why* the change happened, not just *what* changed — match the tone already in this repo's `git log` (imperative mood, specific, no generic "update files" or "misc changes").

### 2. Push
```
git push origin main
```
Never force-push. If the push is rejected because the remote has commits you don't have, stop and tell the user — don't force over it.

### 3. Verify the deploy actually landed

First check whether `vercel` or `gh` CLI is available and authenticated (`vercel --version`, `gh auth status`). If either works, prefer it directly — it gives a real answer instead of an inference.

If neither is available (the default so far in this project), verify from the outside:
1. `curl -s <deployed-url> -o page.html` for the raw HTML — not a summarizing fetch tool. Summarizers convert to markdown, drop script tags and exact asset filenames, and never execute client-side JS, so they can't confirm a client-injected feature (like the Cal.com embed) actually shipped.
2. Pull the JS/CSS chunk filenames referenced in that HTML (`grep -o 'src="[^"]*\.js"'`). This app code-splits per route, so a change to e.g. `src/routes/book.tsx` lands in its own chunk (like `book-XXXXXX.js`), not the main `index-XXXXXX.js` bundle — fetch the chunk that actually corresponds to what changed.
3. `curl` those specific chunks and grep for a marker unique to the change just pushed (a new string, a new link, a new function name) to confirm the *new* code shipped, not a stale cached build.
4. If the marker isn't there yet, the build may still be in progress — say so and offer to check again shortly rather than concluding it failed.

### 4. Report honestly
Tell the user:
- The commit hash that was pushed.
- What was actually confirmed, and how (e.g. "the new Cal.com link is present in the deployed `book-*.js` chunk").
- What could *not* be confirmed and why (e.g. "I can't confirm the calendar visually renders in a browser — the Chrome tool isn't connected here; worth a manual check").

Never say "deployment successful" or "it works" without real evidence backing it. An inconclusive check should be reported as inconclusive, with an offer to check again — not smoothed over into a confident claim.
