# Workshop Generator — Skills Overview

This document describes the five skills that make up the Workshop Generator workflow. Each skill is a self-contained stage that reads the workshop context and the previous stage's output, then produces a structured Markdown file.

Full execution instructions for each skill live in the `SKILLS/` folder. This file is the index and quick reference.

---

## Skill 01 — Research

**File:** `SKILLS/RESEARCH.md`
**Output:** `projects/<slug>/01_research.md`

Explores the workshop topic in depth. Claude investigates the subject matter, identifies what a learner at this level needs to know, surfaces common misconceptions, and gathers relevant frameworks, tools, examples, and references.

**Input:** Workshop description from `context/`
**Output shape:** Topic overview · Key concepts · Common misconceptions · Relevant tools/frameworks · Curated references

---

## Skill 02 — Learning Goals

**File:** `SKILLS/LEARNING_GOALS.md`
**Output:** `projects/<slug>/02_learning_goals.md`

Translates the research and workshop description into a set of precise, measurable learning objectives. Uses Bloom's Taxonomy to anchor each goal at the right cognitive level. Also defines what success looks like — how would a facilitator know the goals were met?

**Input:** Workshop description + `01_research.md`
**Output shape:** Primary learning goal · 4–6 specific objectives (Bloom-anchored) · Success indicators · Out-of-scope clarifications

---

## Skill 03 — Script Generation

**File:** `SKILLS/SCRIPT.md`
**Output:** `projects/<slug>/03_script.md`

Writes a full facilitation script for the workshop. Structures the session with timed segments, speaker notes, transitions, activities, and check-in questions. Follows the learning goals and draws from the research. Tone matches the audience.

**Input:** Workshop description + `01_research.md` + `02_learning_goals.md`
**Output shape:** Session overview · Timed agenda · Full facilitator script with speaker notes · Activity instructions · Debrief questions

---

## Skill 04 — Slides Generation

**File:** `SKILLS/SLIDES.md`
**Output:** `projects/<slug>/04_slides.md`

Produces a slide-by-slide blueprint for the workshop presentation. Each slide entry includes a title, layout suggestion, bullet content, speaker note, and a detailed visual prompt ready to send to a design AI (e.g. Claude Artifacts, Midjourney, or a designer). This skill does not create the actual slides — it creates the complete brief for doing so.

**Input:** Workshop description + `02_learning_goals.md` + `03_script.md`
**Output shape:** Slide deck overview · Per-slide entries (title · layout · content · speaker note · design prompt)

---

## Skill 05 — Finalize

**File:** `SKILLS/FINALIZE.md`
**Output:** `projects/<slug>/FINAL_<slug>.md`

The closing skill. Reads all four previous outputs and assembles them into a single, polished workshop document. Resolves any inconsistencies between stages, adds a cover page, table of contents, facilitator tips section, and a quick-start checklist. This is the deliverable the user hands to a facilitator or shares with a team.

**Input:** All four previous output files
**Output shape:** Cover · Table of contents · Executive summary · Learning goals · Full script · Slide blueprint · Facilitator tips · Pre-workshop checklist

---

## Skill Chaining at a Glance

```
context/workshop_description.md
        │
        ▼
[01 RESEARCH] ──────────────────────────────────────────► 01_research.md
        │
        ▼
[02 LEARNING GOALS] ◄── research ───────────────────────► 02_learning_goals.md
        │
        ▼
[03 SCRIPT] ◄── research + goals ───────────────────────► 03_script.md
        │
        ▼
[04 SLIDES] ◄── goals + script ─────────────────────────► 04_slides.md
        │
        ▼
[05 FINALIZE] ◄── all four outputs ─────────────────────► FINAL_<slug>.md
```

---

## Adding or Modifying Skills

Each skill is a standalone Markdown file in `SKILLS/`. To add a new stage:
1. Create a new file `SKILLS/NN_your_skill.md` following the format of the existing skills.
2. Add it to the sequence in `CLAUDE.md` and document it in this file.
3. Decide what previous outputs it needs and list them in its **Inputs** section.
