# Skill 05 — Finalize

**Stage:** 5 of 5
**Reads:** ALL previous outputs:
  - `context/workshop_description.md`
  - `projects/<slug>/01_research.md`
  - `projects/<slug>/02_learning_goals.md`
  - `projects/<slug>/03_script.md`
  - `projects/<slug>/04_slides.md`
**Writes:** `projects/<slug>/FINAL_<slug>.md`

---

## Purpose

This is the assembly stage. The Finalize skill reads everything produced by the four preceding skills and combines it into a single, polished, self-contained workshop document — the kind of thing a facilitator can open on the morning of the workshop and run the whole session from.

Before assembling, do a consistency pass: check that the learning goals match what the script actually covers, that the slide blueprint aligns with the script's structure, and that the scope described in the research is respected throughout. Fix any gaps or contradictions before writing the final document.

---

## Inputs

Read ALL of these before starting:
- `context/workshop_description.md`
- `projects/<slug>/01_research.md`
- `projects/<slug>/02_learning_goals.md`
- `projects/<slug>/03_script.md`
- `projects/<slug>/04_slides.md`

---

## Pre-Assembly Consistency Check

Before writing the final document, run through these checks mentally. Note any issues in the `Editorial Notes` section of the output:

1. **Goals vs. Script alignment** — does every learning objective appear in at least one script segment? Is there any script content that serves no stated objective?

2. **Research vs. Scope** — does the script stay within the scope the research recommended? Are any core concepts from the research missing from the script?

3. **Slides vs. Script** — does the slide count feel right for the session length? Are there script moments with no corresponding slide?

4. **Tone consistency** — is the voice consistent across the document, or did different stages produce jarringly different registers?

5. **Activity completeness** — does the activity described in the script have full instructions in both the script and the slide blueprint?

If you find issues, fix them in the final document rather than copying the issue forward. The FINAL file should be better than the sum of its parts.

---

## Output Template

```markdown
# <Workshop Title>
### A Complete Workshop Guide

**Prepared by:** Workshop Generator (Claude)
**Date generated:** <today's date>
**Workshop slug:** <slug>
**Duration:** <X hours>
**Audience:** <description>

---

## Table of Contents

1. [Workshop Overview](#overview)
2. [Learning Goals](#learning-goals)
3. [Pre-Workshop Checklist](#checklist)
4. [Research Summary](#research)
5. [Full Facilitator Script](#script)
6. [Slide Blueprint](#slides)
7. [Facilitator Tips](#tips)
8. [Recommended Resources](#resources)

---

## 1. Workshop Overview {#overview}

<3–5 paragraph narrative description of the workshop. Cover: what it is, who it's for, what problem it solves for participants, what they'll walk away with, and what makes this particular approach effective. This is the "elevator pitch" version of the whole document — readable in 90 seconds.>

**At a glance:**
| | |
|---|---|
| Topic | <topic> |
| Audience | <audience> |
| Duration | <duration> |
| Format | <in-person / virtual / hybrid> |
| Bloom's level | <primary cognitive level> |
| Primary goal | <one-sentence primary learning goal> |

---

## 2. Learning Goals {#learning-goals}

### Primary Goal

By the end of this workshop, participants will be able to:

> <Primary learning goal — copied and polished from 02_learning_goals.md>

### Specific Objectives

By the end of this workshop, participants will be able to:

1. **[<Bloom's>]** <Objective>
2. **[<Bloom's>]** <Objective>
3. **[<Bloom's>]** <Objective>
4. **[<Bloom's>]** <Objective>
5. **[<Bloom's>]** <Objective> *(if applicable)*

### What This Workshop Does NOT Cover

- <Out-of-scope item>
- <Out-of-scope item>
- <Out-of-scope item>

---

## 3. Pre-Workshop Checklist {#checklist}

Complete these before the session:

**Content prep (48 hours before):**
- [ ] Read through the full script at least once
- [ ] Build or adapt the slide deck from the blueprint in Section 6
- [ ] Prepare activity materials (if physical: print/cut; if digital: set up shared doc/tool)
- [ ] Test any technology or tools being used in the session

**Room/setup (day before or morning of):**
- [ ] Confirm room layout supports the planned activities
- [ ] Test AV (projector, screen share, audio)
- [ ] Have backup plan ready if technology fails
- [ ] Set up any physical materials (sticky notes, markers, handouts)

**Participant prep:**
- [ ] Send pre-read or context-setting email (if applicable)
- [ ] Confirm headcount and any accessibility needs
- [ ] Know who your "anchor participants" are — people who will engage actively

**Facilitator mindset:**
- [ ] Review the learning goals — what does success look like for YOU today?
- [ ] Read the Facilitator Tips (Section 7)
- [ ] Have water and something to eat before starting

---

## 4. Research Summary {#research}

*A condensed version of the full research for quick facilitator reference. Full research is in `01_research.md`.*

### Topic in Brief

<2–3 paragraph synthesis of the workshop topic — what it is, why it matters, key landscape. Condensed from the full research.>

### Core Concepts (Quick Reference)

<Condensed list of the 4–6 core concepts — one-line each. Enough for a facilitator to recall the key ideas mid-session.>

1. **<Concept>** — <one-line definition>
2. **<Concept>** — <one-line definition>
3. **<Concept>** — <one-line definition>
4. **<Concept>** — <one-line definition>

### Common Misconceptions to Watch For

<Condensed list — 3 misconceptions and their corrections. A facilitator should have these ready because participants will trigger them.>

---

## 5. Full Facilitator Script {#script}

*Full script copied and refined from `03_script.md`. Any inconsistencies with learning goals or slides have been resolved.*

<Insert full script here — all segments with speaker notes, activity instructions, debrief questions, and transitions. Do not truncate.>

---

## 6. Slide Blueprint {#slides}

*Full slide blueprint copied and refined from `04_slides.md`. Any gaps vs. the script have been addressed.*

<Insert full slide blueprint here — all slide entries with layout, content, speaker notes, and design prompts. Do not truncate.>

---

## 7. Facilitator Tips {#tips}

<6–10 practical, specific tips drawn from the nature of this particular topic and audience. These are not generic facilitation advice — they are specific to what tends to go wrong or go right in THIS kind of workshop.>

**Tip 1: <Title>**
<2–3 sentences of specific, actionable guidance.>

**Tip 2: <Title>**
<2–3 sentences.>

**Tip 3: <Title>**
<2–3 sentences.>

... (continue for 6–10 tips total)

**If the energy drops mid-session:**
<One specific re-engagement move that works for this topic and audience.>

**If participants are far ahead of the content:**
<How to handle a group that already knows more than expected.>

**If participants are far behind:**
<How to simplify or slow down without losing the thread.>

---

## 8. Recommended Resources {#resources}

*For participants who want to go deeper after the workshop.*

<List of 3–5 resources from the research stage, formatted as: **Title** by Author/Source — one-sentence description of what it offers and who it's best for.>

---

## Editorial Notes

*Auto-generated consistency notes from the Finalize skill.*

<List any issues found during the pre-assembly consistency check, and describe how they were resolved in this document. If everything was consistent, write "No issues found — all stages aligned."
>
```

---

## Quality Bar

A good Finalize output:
- Is a complete, self-contained document — a facilitator should not need to open any other file
- Resolved any inconsistencies found during the consistency check (and notes them)
- Has a filled-in Pre-Workshop Checklist (not generic — specific to this workshop)
- Has 6–10 Facilitator Tips that are specific to this topic and audience, not boilerplate
- Includes the full script and full slide blueprint (not summaries)
- Has a clean, navigable structure with a working table of contents
- Reads like one cohesive document, not four files stapled together
