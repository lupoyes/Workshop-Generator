# Workshop Generator — Skills Overview

This document describes the five skills that make up the Workshop Generator pipeline. Every output is designed for a **10-minute ARIVA workshop**: one concept, one Intended Learning Outcome (ILO), heavy interaction, tight timing.

Full execution instructions live in `SKILLS/`. This file is the index and quick reference.

---

## The ARIVA Blueprint (for reference across all skills)

```
A  Arrival          ~60 sec    Orient — name, topic, ILO. That's it.
R  Reactivating     1–2 min    One question linking new content to prior knowledge.
I  Informing        4–5 min    One core idea. Examples only. No theory tangents.
V  Verarbeitung     2–3 min    One micro-task or paired discussion.
A  Assessing        ~1 min     One question tied directly to the ILO.
─────────────────────────────────────────────────────
                   10 min total
```

---

## Skill 01 — Research

**File:** `SKILLS/RESEARCH.md`
**Output:** `projects/<slug>/01_research.md`

Scoped research pass focused on what a 10-minute workshop actually needs: the single most teachable version of the concept, the right reactivation hook, a concrete micro-task for the processing phase, and a crisp assess question. This is not an exhaustive literature review — it's a facilitator brief.

**Input:** Workshop description from `context/`
**Output shape:** One-concept focus · Reactivation hook · Best example/analogy · Micro-task design · Assess question · Common misconceptions (1–2 only)

---

## Skill 02 — Learning Goals

**File:** `SKILLS/LEARNING_GOALS.md`
**Output:** `projects/<slug>/02_learning_goals.md`

Produces exactly ONE Intended Learning Outcome (ILO) anchored to a Bloom's level. For 10 minutes, multiple objectives are scope creep — the ILO must be singular, honest, and testable in the final Assessing phase. Also defines the one thing that is explicitly out of scope.

**Input:** Workshop description + `01_research.md`
**Output shape:** One ILO (Bloom's verb) · Bloom's level justification · Success signal · One out-of-scope boundary

---

## Skill 03 — Script Generation

**File:** `SKILLS/SCRIPT.md`
**Output:** `projects/<slug>/03_script.md`

Writes the complete facilitation script in ARIVA structure, with speaker-ready notes for each phase. Every second is accounted for. The Informing phase covers one idea with one example. The Verarbeitung gives participants a concrete task with a timer. The Assessing closes directly on the ILO.

**Input:** Workshop description + `01_research.md` + `02_learning_goals.md`
**Output shape:** ARIVA agenda table · Full per-phase speaker notes · Verarbeitung task instructions · Assessing question · Contingency notes (group too fast / too slow)

---

## Skill 04 — Slides Generation

**File:** `SKILLS/SLIDES.md`
**Output:** `projects/<slug>/04_slides.md`

Produces a minimal slide deck blueprint: 5–7 slides maximum for a 10-minute session. Each slide is a **beat**, not a content dump. Slides serve as cues and visual anchors — not lecturing surfaces. Includes a design prompt for each slide ready to send to any AI design tool.

**Input:** Workshop description + `02_learning_goals.md` + `03_script.md`
**Output shape:** Per-slide entries (layout · 1 key visual element · minimal text · speaker cue · design prompt) · Design system summary

---

## Skill 05 — Finalize

**File:** `SKILLS/FINALIZE.md`
**Output:** `projects/<slug>/FINAL_<slug>.md`

Assembles all four outputs into one clean, self-contained facilitator document. Runs a consistency check across ARIVA phases, resolves any gaps, and adds a 10-minute pre-run checklist and 3–5 facilitator tips specific to this topic and audience. This is the only file the facilitator needs on the day.

**Input:** All four previous output files
**Output shape:** At-a-glance card · ILO · Pre-run checklist · Full ARIVA script · Slide blueprint · Facilitator tips

---

## Skill Chaining at a Glance

```
context/workshop_description.md
        │
        ▼
[01 RESEARCH] ─────────────────────────────────────────► 01_research.md
        │                                                  (one concept, one hook,
        ▼                                                   one task, one question)
[02 LEARNING GOALS] ◄── research ──────────────────────► 02_learning_goals.md
        │                                                  (ONE ILO)
        ▼
[03 SCRIPT] ◄── research + ILO ────────────────────────► 03_script.md
        │                                                  (ARIVA, 10 min)
        ▼
[04 SLIDES] ◄── ILO + script ──────────────────────────► 04_slides.md
        │                                                  (5–7 slides)
        ▼
[05 FINALIZE] ◄── all four outputs ────────────────────► FINAL_<slug>.md
                                                           (one document, run-ready)
```

---

## Adding or Modifying Skills

Each skill is a standalone Markdown file in `SKILLS/`. To add a stage, create `SKILLS/NN_name.md`, add it to the sequence in `CLAUDE.md`, and document it here. All additions must respect the 10-minute constraint — if a new skill expands scope, it should do so explicitly and with the user's permission.
