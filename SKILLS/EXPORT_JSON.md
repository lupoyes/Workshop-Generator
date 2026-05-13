# Skill 06 — Export to JSON

**Stage:** 6 of 6 (optional — run after Skill 05)
**Reads:** ALL five project files:
  - `projects/<slug>/01_research.md`
  - `projects/<slug>/02_learning_goals.md`
  - `projects/<slug>/03_script.md`
  - `projects/<slug>/04_slides.md`
  - `projects/<slug>/FINAL_<slug>.md`
**Writes:**
  - `projects/<slug>/workshop.json` — full structured data for this workshop
  - `projects/index.json` — updated manifest of all available workshops

---

## Purpose

Transform the five Markdown files produced by Skills 01–05 into a single, machine-readable `workshop.json` that the Next.js frontend can consume. This skill does **not** add content — it extracts and restructures exactly what was written in the previous stages.

The `projects/index.json` manifest is also updated so the frontend can list all workshops without scanning directories.

---

## Inputs

Read ALL of these before writing anything:
- `projects/<slug>/01_research.md`
- `projects/<slug>/02_learning_goals.md`
- `projects/<slug>/03_script.md`
- `projects/<slug>/04_slides.md`
- `projects/<slug>/FINAL_<slug>.md`

Also read `projects/index.json` if it exists (to append, not overwrite).

---

## Extraction Map

Work through each field below. Every value must come from the source files — do not invent, summarize, or embellish. If a field is genuinely absent from the source, use `null`.

### Top-level fields

| JSON field | Source |
|---|---|
| `slug` | Derived from the folder name (e.g. `feedback_loops`) |
| `title` | `FINAL_<slug>.md` — first `# ` heading |
| `generatedAt` | Today's date in ISO format (YYYY-MM-DD) |
| `meta.format` | `FINAL_<slug>.md` — **Format:** line in the header block |
| `meta.audience` | `FINAL_<slug>.md` — **Audience:** line |
| `meta.groupSize` | `FINAL_<slug>.md` — **Group size** from the At-a-Glance table |
| `meta.duration` | `"10 minutes"` (always fixed) |

### ILO and concept

| JSON field | Source |
|---|---|
| `ilo` | `02_learning_goals.md` — the blockquote under `## Intended Learning Outcome (ILO)` |
| `bloomsLevel` | `02_learning_goals.md` — **Bloom's level:** in the header |
| `coreConcept` | `01_research.md` — blockquote under `## The One Teachable Concept` / **Core concept (one sentence):** |

### Timing card

Extract the five rows from the `## ARIVA Timing Card` code block in `FINAL_<slug>.md`.

```json
"timingCard": {
  "arrival":      "<text after 'ARRIVAL'>",
  "reactivating": "<text after 'REACTIVATING'>",
  "informing":    "<text after 'INFORMING'>",
  "verarbeitung": "<text after 'VERARBEITUNG'>",
  "assessing":    "<text after 'ASSESSING'>"
}
```

### Pre-run checklist

Extract each `- [ ] ` item from `## Pre-Run Checklist` in `FINAL_<slug>.md` as an array of strings (strip the `- [ ] ` prefix).

### ARIVA phases

Extract from `## Full Facilitator Script` in `FINAL_<slug>.md`. For each phase, capture the full content between its `###` heading and the next `###` heading.

Also extract the specific structured fields from the supporting files:

| JSON field | Source |
|---|---|
| `ariva.reactivating.question` | `01_research.md` — blockquote under `## Reactivation Hook (R phase — 1–2 min)` / **Question:** |
| `ariva.reactivating.format` | `01_research.md` — **Format:** line in the Reactivation Hook section |
| `ariva.verarbeitung.taskPrompt` | `01_research.md` — blockquote under `## Verarbeitung Task (V phase — 2–3 min)` / **Task prompt:** |
| `ariva.verarbeitung.format` | `01_research.md` — **Format:** line in the Verarbeitung Task section |
| `ariva.assessing.question` | `01_research.md` — blockquote under `## Assessing Question (A phase — ~1 min)` / **Question:** |
| `ariva.assessing.successSignal` | `02_learning_goals.md` — sentence after "A participant has met the ILO if:" |

For each phase, include:
```json
{
  "timeRange": "0:00–1:00",
  "script": "<full speaker notes block for this phase>"
}
```

### Slides

Extract from `## Slide Blueprint` in `FINAL_<slug>.md`. For each `### Slide NN` section:

```json
{
  "number": 1,
  "title": "Arrival / Title Card",
  "phase": "A — Arrival",
  "layout": "<layout type>",
  "content": "<content block as a string>",
  "speakerCue": "<speaker cue text>",
  "designPrompt": "<design prompt text>"
}
```

### Misconceptions

Extract from `## Common Misconceptions` in `01_research.md`. Each numbered item becomes:
```json
{ "misconception": "...", "reality": "..." }
```

### Out of scope

Extract each bullet from `## What Is Out of Scope` in `01_research.md` as a string array.

### Facilitator tips

Extract from `## Facilitator Tips` in `FINAL_<slug>.md`. Each **Tip N: Title** block becomes:
```json
{ "title": "...", "body": "..." }
```

### Deeper resources

Extract each item from `## If You Want to Go Deeper` in `FINAL_<slug>.md` as a string array.

### Editorial notes

Extract the full content of `## Editorial Notes` in `FINAL_<slug>.md` as a single string.

---

## Full JSON Schema

Write `projects/<slug>/workshop.json` matching this structure exactly:

```json
{
  "slug": "string",
  "title": "string",
  "generatedAt": "YYYY-MM-DD",
  "meta": {
    "format": "string",
    "audience": "string",
    "groupSize": "string | null",
    "duration": "10 minutes"
  },
  "ilo": "string",
  "bloomsLevel": "string",
  "coreConcept": "string",
  "timingCard": {
    "arrival": "string",
    "reactivating": "string",
    "informing": "string",
    "verarbeitung": "string",
    "assessing": "string"
  },
  "preRunChecklist": ["string"],
  "ariva": {
    "arrival": {
      "timeRange": "0:00–1:00",
      "script": "string"
    },
    "reactivating": {
      "timeRange": "1:00–2:30",
      "question": "string",
      "format": "string",
      "script": "string"
    },
    "informing": {
      "timeRange": "2:30–7:00",
      "coreConcept": "string",
      "script": "string"
    },
    "verarbeitung": {
      "timeRange": "7:00–9:30",
      "taskPrompt": "string",
      "format": "string",
      "script": "string"
    },
    "assessing": {
      "timeRange": "9:30–10:00",
      "question": "string",
      "successSignal": "string",
      "script": "string"
    }
  },
  "slides": [
    {
      "number": 1,
      "title": "string",
      "phase": "string",
      "layout": "string",
      "content": "string",
      "speakerCue": "string",
      "designPrompt": "string"
    }
  ],
  "misconceptions": [
    { "misconception": "string", "reality": "string" }
  ],
  "outOfScope": ["string"],
  "facilitatorTips": [
    { "title": "string", "body": "string" }
  ],
  "preRunChecklist": ["string"],
  "deeperResources": ["string"],
  "editorialNotes": "string"
}
```

---

## Updating the Index

After writing `workshop.json`, read `projects/index.json` (create it if missing). Update the entry for this slug:

```json
{
  "workshops": [
    {
      "slug": "string",
      "title": "string",
      "audience": "string",
      "ilo": "string",
      "bloomsLevel": "string",
      "generatedAt": "YYYY-MM-DD"
    }
  ]
}
```

- If this slug already exists in the array, replace its entry.
- If it doesn't exist, append it.
- Sort the array by `generatedAt` descending.
- Write the result back to `projects/index.json`.

---

## Quality Bar

A good export:
- Contains no placeholder text — every field is populated from the source files
- The `ilo` field is a verbatim copy from the learning goals document
- The `slides` array has exactly as many entries as `04_slides.md` defined
- `projects/index.json` has been updated with this workshop's summary entry
- The JSON is valid — no trailing commas, no unescaped quotes inside strings

---

## Announce on Completion

Tell the user:
1. Which file was written (`projects/<slug>/workshop.json`)
2. That `projects/index.json` was updated
3. That the workshop is now available in the frontend
