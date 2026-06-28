# Ray Amjad — Wikidata Q-item build sheet

Goal: create a referenced Wikidata item so Google's Knowledge Graph has a definitive entity for "Ray Amjad." Every statement below has a reference, because **unreferenced biographical statements get nominated for deletion within days.**

---

## 0. Before you create the item (anti-deletion prep)

1. **Warm up the account.** New accounts get spam-filtered. Make ~5–10 small edits to *existing* items first (add a missing identifier, fix a typo, add an ISBN, etc.). Do this an hour+ before creating your own item.
2. **Every statement gets a reference.** For each one: click "add reference" → `reference URL (P854)` = the source → `retrieved (P813)` = today's date.
3. **Do NOT create a Q-item for 21 Dreams.** Companies with no independent press get deleted fast (deletion-bait). Reference 21 Dreams only as text/employer, not as its own item, until it has press.

Create at: https://www.wikidata.org/wiki/Special:NewItem

---

## 1. Label / Description / Aliases

- **Label:** `Ray Amjad`
- **Description:** `British entrepreneur and software developer` *(descriptions don't need references; this one is fully press-backed and neutral. You may use "British software developer and YouTuber" if you prefer — your channel makes it true.)*
- **Aliases:** `Ray`, `theramjad`, `RAmjad`

---

## 2. Statements (each needs a P854 reference + P813 retrieved=today)

| Property | Value | Reference to cite |
|---|---|---|
| instance of (P31) | human (Q5) | BBC article URL |
| sex or gender (P21) | male (Q6581097) | BBC ("he", "the 25-year-old") |
| country of citizenship (P27) | United Kingdom (Q145) | BBC / Independent ("from Manchester") |
| place of birth (P19) | Manchester (Q18125) | Independent ("originally hailing from Manchester") |
| date of birth (P569) | 29 September 2000 | your X profile (states "Born September 29, 2000") — self-sourced; press ages 24→25 are consistent |
| residence (P551) | Tokyo (Q1490) | BBC ("He moved to Tokyo last year") |
| educated at (P69) | University of Cambridge (Q35794) | BBC + Independent ("Cambridge graduate") — add qualifier P512/academic degree + dates if known |
| occupation (P106) | entrepreneur (Q131524) | Independent ("young entrepreneur", "started his own successful business") |
| occupation (P106) | software developer | Independent ("creating apps, websites and software") |
| occupation (P106) | web developer *(optional)* | BBC ("working remotely in web design") |
| occupation (P106) | YouTuber *(optional, weak ref)* | your YouTube channel URL |
| official website (P856) | https://www.rayamjad.com | the site itself |

> For values shown without a Q-number (software developer, web developer, YouTuber), just type the label into Wikidata's box and pick the item whose description matches — the autocomplete is reliable. Confirmed Q-numbers above are safe to use directly.

---

## 3. Identifiers (reference = the profile URL itself)

| Property | Value |
|---|---|
| X username (P2002) | `theramjad` |
| Instagram username (P2003) | `theramjad` |
| LinkedIn personal profile ID (P6634) | `rayamjad` |
| YouTube channel ID (P2397) | `UC…` ← **get this**: YouTube Studio → Settings → Channel → Advanced settings → "Channel ID" (the `UC…` string, not the @handle) |

---

## 4. Image (P18) — do this AFTER the Commons upload

This was Ben Sigman's single highest-impact lever. The panel often won't instantiate until P18 is set.

1. Upload a tight headshot crop to https://commons.wikimedia.org/wiki/Special:UploadWizard
2. "It is entirely my own work" → license **CC-BY-SA 4.0**
3. Descriptive filename: `Ray Amjad 2026.jpg`
4. Back on this Wikidata item: add `image (P18)` = the Commons filename

---

## 5. Bridge check (must be true both directions)

- ✅ Your site's JSON-LD `sameAs` must include this item's URL (`https://www.wikidata.org/wiki/Q…`) — I'll add it once you have the Q-number.
- ✅ This item's `official website (P856)` = `https://www.rayamjad.com`

---

## Audit query (run after, to find unreferenced statements)

```bash
curl -s "https://www.wikidata.org/wiki/Special:EntityData/QXXXXXXX.json" | python3 -c "
import json, sys
d = json.load(sys.stdin); q = list(d['entities'])[0]
for prop, vals in d['entities'][q]['claims'].items():
    for v in vals:
        print(f\"{prop}: refs={len(v.get('references', []))}\")"
```
Any line with `refs=0` needs a reference before you're safe.
