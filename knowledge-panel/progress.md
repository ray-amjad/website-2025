# Ray Amjad — Google Knowledge Panel Progress

**Living doc — we continue from here.** Last updated: 2026-06-28

---

## 🎯 Canonical identity card (use VERBATIM everywhere — never drift)

| Field | Value |
|---|---|
| Name | Ray Amjad |
| Location | Tokyo, Japan |
| Headline (full) | Agentic engineer, educator, founder of 21 Dreams |
| Headline (bio, X/LI/IG) | Teaching agentic engineering on YouTube \| Founder of 21 Dreams |
| Website (canonical) | https://www.rayamjad.com |
| Wikidata occupations | entrepreneur, software developer *(referenceable; ≠ headline, that's fine)* |

---

## ✅ Done

- [x] JSON-LD `@graph` schema (Person ↔ 21 Dreams ↔ RAY AMJAD LTD ↔ WebSite) — **live**
- [x] OG/Twitter metadata + headshot — live
- [x] `sitemap.ts`, `robots.ts`, `llms.txt` — live
- [x] Canonical host = **www.rayamjad.com** (resolved www/apex conflict)
- [x] Identity locked: **agentic engineer & educator**; `knowsAbout` incl. Claude Code, Codex, AI agents
- [x] `/about` states Tokyo (visible-text ↔ schema consistency)
- [x] Cross-platform consistency: **X ✅ · LinkedIn ✅ · Instagram ✅ · YouTube ✅**
- [x] Google Search Console — **domain property verified** (rayamjad.com)

---

## ⬜ Next steps (in order)

### 1. Finish Search Console
- [x] Sitemaps → submitted `https://www.rayamjad.com/sitemap.xml` (28 Jun 2026; "Couldn't fetch" = normal same-day lag, file verified fetchable by Googlebot → flips to Success on its own)
- [ ] URL inspection → `https://www.rayamjad.com/` → **Request Indexing**

### 2. Wikidata Q-item  → see **`wikidata.md`** for the full sheet
- [ ] Warm up account: ~10–15 small edits to **existing** Wikidata items over a few days (NOT photo uploads — those warm Commons, not Wikidata edit history). Optionally upload own travel/historical photos to Commons in parallel to age the account.
- [ ] Get **YouTube Channel ID** (`UC…`) — Studio → Settings → Channel → Advanced → Channel ID
- [ ] Create item with referenced statements (every statement needs P854 + P813)
- [ ] Run the audit query to confirm 0 unreferenced statements

### 3. Wikimedia Commons + P18  *(Ben's single highest-impact lever)*
- [x] Tight square headshot crop ready → **`Ray Amjad 2026.jpg`** (in this folder)
- [ ] Upload to Commons (Special:UploadWizard), license **CC-BY-SA 4.0**, filename `Ray Amjad 2026.jpg`
- [ ] Add `image (P18)` = filename on the Wikidata item

### 4. Build the bridge
- [ ] Paste the **Q-number** to Claude → Claude adds `https://www.wikidata.org/wiki/Q…` to the site's `sameAs` → redeploy
- [ ] Confirm Wikidata `official website (P856)` = www.rayamjad.com (both directions)

### 5. Wait ~5–6 weeks
- [ ] **Don't tweak** during the wait — let Google's crawl cycle catch up
- [ ] When the panel appears: search your name → bottom of panel → **Claim this knowledge panel** → verify via X/YouTube
- [ ] Screenshot it for a baseline

---

## 📌 Decisions / notes

- **Identity churn resolved** → "agentic engineer & educator" (matches your YouTube bio + actual video topics: Claude Code, Codex, agentic coding).
- **Wikidata occupation ≠ headline, on purpose.** The BBC + Independent describe you as an *entrepreneur / software developer* who moved to Tokyo — not "agentic engineer" or "YouTuber." Wikidata statements must be referenceable, so we use entrepreneur + software developer there. Your forward-looking identity stays on the site/socials.
- **Press strength:** BBC ("moved to Tokyo") + The Independent ("Cambridge graduate… started his own successful business creating apps, websites and software") support Tokyo, Cambridge, British/Manchester. Strong enough for Wikidata notability.
- **Do NOT create a 21 Dreams Q-item** — no independent press = deletion-bait.
- **Birthday:** 29 September 2000 (from X profile; consistent with press ages 24→25).

## 📂 Files in this folder (`knowledge-panel/`)
- `progress.md` — this file (the living roadmap)
- `wikidata.md` — full Wikidata build sheet
- `Ray Amjad 2026.jpg` — square headshot crop, ready for Commons upload (P18 lever)
