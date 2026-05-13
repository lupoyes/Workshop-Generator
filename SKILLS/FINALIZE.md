# Skill 05 — Finalize

**Stage:** 5 of 6
**Reads:** ALL previous outputs:
  - `context/workshop_description.md`
  - `projects/<slug>/01_research.md`
  - `projects/<slug>/02_learning_goals.md`
  - `projects/<slug>/03_script.md`
  - `projects/<slug>/04_slides.md`
**Writes:** `projects/<slug>/FINAL_<slug>.md`
**Then triggers:** Skill 06 — Export to JSON (automatically, after approval)

---

## Purpose

This is the assembly stage. Read everything produced by the four preceding skills, run a consistency check, assemble the full facilitator document — then **pause and show it to the human before writing anything to disk**.

The human reviews and approves (or requests changes). Only after explicit approval is the file written. Skill 06 runs automatically immediately after.

---

## Pipeline

### Step 1 — Read all inputs

Read ALL of these before doing anything else:
- `context/workshop_description.md`
- `projects/<slug>/01_research.md`
- `projects/<slug>/02_learning_goals.md`
- `projects/<slug>/03_script.md`
- `projects/<slug>/04_slides.md`

---

### Step 2 — Pre-assembly consistency check (autonomous)

Run through these checks silently. Collect findings — you will report them in the Preview.

1. **ILO thread** — Is the same ILO stated in Arrival, practiced in Verarbeitung, and checked in Assessing? If any phase is disconnected, note the fix you will apply.

2. **Reactivation bridge** — Does the R question connect naturally to the concept taught in Informing? If not, note the sharpened transition you will add.

3. **Verarbeitung fit** — Can the task genuinely be completed in 2–3 minutes? If it's too complex, note the simplification.

4. **Slides vs. script** — Does every ARIVA phase have at least one slide? Is any slide doing work the facilitator should do verbally? Note any gaps.

5. **Tone** — Is the voice consistent across all four source files? Note any section that needs tightening.

---

### Step 3 — Assemble the full document (autonomous, in memory)

Compose the complete final document using the Output Template below. Do NOT write it to disk yet.

Apply any fixes identified in the consistency check as you assemble.

---

### Step 4 — Human checkpoint ← required before writing

Present the following structured preview to the human. This is a compact summary — enough to review and approve without reading the full document. Make it clear what will be written once they approve.

---

**Present this preview exactly:**

```
── WORKSHOP PREVIEW ─────────────────────────────────────────

Title:       <Workshop Title>
Slug:        <slug>
Format:      <in-person / virtual / hybrid>
Audience:    <description>
Bloom's:     <level>

ILO
  <Full ILO sentence>

ARIVA TIMING CARD
  0:00–1:00  A  ARRIVAL        <one-line summary>
  1:00–2:30  R  REACTIVATING   "<reactivation question>"
  2:30–7:00  I  INFORMING      <one-line concept summary>
  7:00–9:30  V  VERARBEITUNG   "<task prompt>" — 2 min timer
  9:30–10:00 A  ASSESSING      "<assessing question>"

SLIDES  (<N> slides)
  01  <Title>  [<phase>]
  02  <Title>  [<phase>]
  ...

FACILITATOR TIPS
  · <Tip 1 title>
  · <Tip 2 title>
  · <Tip 3 title>
  ...

CONSISTENCY CHECK
  <"No issues found." OR a short bullet list of issues found and how they were fixed>

─────────────────────────────────────────────────────────────
Ready to write FINAL_<slug>.md and run the JSON export.
Does this look right, or would you like to change anything?
```

---

### Step 5 — Handle feedback

- **If the human approves** → proceed to Step 6.
- **If the human requests a change** → apply the targeted edit to the assembled document (in memory), re-present the updated preview, and ask again. Do not re-run earlier skills unless the human explicitly requests it.
- **If the human asks to change something from an earlier skill** (e.g. "change the Verarbeitung task") → update it in the assembled document and note the change in Editorial Notes. Do not regenerate the source file.

---

### Step 6 — Write the file

Write the assembled, approved document to `projects/<slug>/FINAL_<slug>.md` using the Output Template below.

Confirm to the human: `✓ FINAL_<slug>.md written.`

---

### Step 7 — Trigger Skill 06 automatically

Immediately after writing the file, run Skill 06 — Export to JSON without waiting for a separate instruction. Read `SKILLS/EXPORT_JSON.md` and execute it.

Tell the human: `Running Skill 06 — Export to JSON…`

---

## Output Template

```markdown
# <Workshop Title>
### 10-Minute ARIVA Workshop — Facilitator Guide

**Prepared by:** Workshop Generator (Claude)
**Date:** <today's date>
**Workshop slug:** <slug>
**Duration:** 10 minutes
**Format:** <in-person / virtual / hybrid>
**Audience:** <description>

---

## At a Glance

| | |
|---|---|
| **ILO** | <The single Intended Learning Outcome — one sentence> |
| **Core concept** | <The one teachable idea in plain language> |
| **Bloom's level** | <level> |
| **Format** | <in-person / virtual / hybrid> |
| **Group size** | <number> |

---

## ARIVA Timing Card

*(Print this or keep it visible while facilitating.)*

```
0:00–1:00   A  ARRIVAL        "<ILO stated in plain language>"
1:00–2:30   R  REACTIVATING   "<reactivation question>"
2:30–7:00   I  INFORMING      <One-sentence concept summary>
7:00–9:30   V  VERARBEITUNG   "<task prompt>" — 2 min timer
9:30–10:00  A  ASSESSING      "<assessing question>"
```

---

## Pre-Run Checklist

- [ ] Read the ILO out loud once — you should be able to say it without looking
- [ ] Know the reactivation question by heart — it's the first thing out of your mouth after your name
- [ ] Have the Verarbeitung task visible to participants (slide or whiteboard)
- [ ] Set up a visible 2-minute timer (phone timer, projected clock, or online timer)
- [ ] Know the assessing question — don't improvise it, it must map to the ILO
- [ ] If virtual: test screen share and confirm participants can see the slides
- [ ] Know the 1–2 misconceptions to watch for (from research brief)
- [ ] Have one sentence ready to park out-of-scope questions: "Great — that's beyond today's scope. Worth exploring after."
<add any workshop-specific checklist items here>

---

## Intended Learning Outcome

By the end of this workshop, participants will be able to:

> **<ILO — exact wording from 02_learning_goals.md>**

**Success signal:** <What a correct or meaningful response to the Assessing question looks like — one sentence.>

**What this workshop does NOT cover:**
- <Out-of-scope item 1>
- <Out-of-scope item 2>

---

## Full Facilitator Script

*(ARIVA structure — full speaker notes for each phase)*

---

### A — Arrival [0:00–1:00]

<Full Arrival script from 03_script.md — refined if needed.>

---

### R — Reactivating [1:00–2:30]

<Full Reactivating script from 03_script.md — refined if needed.>

---

### I — Informing [2:30–7:00]

<Full Informing script from 03_script.md — refined if needed.>

---

### V — Verarbeitung [7:00–9:30]

<Full Verarbeitung script from 03_script.md — refined if needed.>

---

### A — Assessing [9:30–10:00]

<Full Assessing script from 03_script.md — refined if needed.>

---

### Contingency Notes

<Contingency notes from 03_script.md — copied and refined if needed.>

---

## Slide Blueprint

*(5–7 slides — full spec for each)*

<Full slide blueprint from 04_slides.md — all slides with layout, content, speaker cue, and design prompt. Do not truncate.>

---

## Facilitator Tips

<3–5 tips specific to this topic and audience.>

**Tip 1: <Title>**
<2–3 sentences. Specific and actionable.>

**Tip 2: <Title>**
<2–3 sentences.>

**Tip 3: <Title>**
<2–3 sentences.>

*(Add 2 more if genuinely needed.)*

---

## If You Want to Go Deeper

*For participants who ask "what next?" after the session.*

<1–2 resources with a one-sentence description each.>

---

## Editorial Notes

*Consistency check findings from the Finalize skill.*

<Issues found and how they were resolved. Human-requested changes are noted here too. If nothing changed: "No issues found — all ARIVA phases align with the ILO.">
```

---

## Quality Bar

A good Finalize output:
- Showed the human a preview and received explicit approval before writing
- Has the ARIVA Timing Card filled in with exact questions and prompts — no placeholders
- Has a Pre-Run Checklist with 6–8 specific items, not generic advice
- Includes the full script and full slide blueprint without truncation
- Has 3–5 facilitator tips specific to this topic and audience
- Reads as one cohesive document, not four files stapled together
- Has Editorial Notes that are honest about what was adjusted (including any human-requested changes)
- Was immediately followed by Skill 06 — Export to JSON
