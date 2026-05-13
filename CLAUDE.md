# Workshop Generator — Claude Orchestration Guide

This project generates a complete, ready-to-run **10-minute workshop** following the **ARIVA framework**. Each stage builds on the previous one and is saved as a structured Markdown file in a dedicated project folder.

---

## The ARIVA Framework

Every workshop this generator produces follows ARIVA — a research-based structure for short, high-engagement learning sessions. The timing is fixed for a 10-minute format:

| Phase | Name | Duration | Purpose |
|---|---|---|---|
| **A** | Arrival | ~60 sec | Orient participants. Name, topic, ILO. Nothing else. |
| **R** | Reactivating | 1–2 min | Connect the new concept to what they already know. One question. |
| **I** | Informing | 4–5 min | One core idea only. Examples, not theory. Maximum attention before it drops. |
| **V** | Verarbeitung | 2–3 min | Participants actively process: one micro-task or paired discussion. |
| **A** | Assessing | ~1 min | Close the loop: did they get it? One concrete question tied to the ILO. |

**Critical constraint:** A 10-minute workshop covers ONE concept and produces ONE Intended Learning Outcome (ILO). If it takes more than 10 minutes to explain, it is not this format.

---

## How to Start

1. The user has placed a workshop description in the `context/` folder (`context/workshop_description.md`).
2. Read that file first. Everything flows from it.
3. Derive a **workshop slug** from the title: lowercase, spaces replaced with underscores (e.g. `feedback_loops`).
4. Create the output folder: `projects/<workshop-slug>/`
5. Run each skill in order, saving its output before moving to the next.

---

## Workflow Sequence

```
SKILL 01 → SKILLS/RESEARCH.md          → projects/<slug>/01_research.md
SKILL 02 → SKILLS/LEARNING_GOALS.md    → projects/<slug>/02_learning_goals.md
SKILL 03 → SKILLS/SCRIPT.md            → projects/<slug>/03_script.md
SKILL 04 → SKILLS/SLIDES.md            → projects/<slug>/04_slides.md
SKILL 05 → SKILLS/FINALIZE.md          → projects/<slug>/FINAL_<slug>.md
```

---

## Rules for Every Skill

- **Read the skill file** (`SKILLS/<SKILL>.md`) before executing each stage.
- **Pass context forward**: each skill reads the workshop description AND all previously generated outputs.
- **Save immediately**: write the output file before starting the next stage.
- **Announce progress**: tell the user which stage just completed and what file was written.
- **Do not ask for confirmation between stages** unless a skill explicitly instructs it. Run the full pipeline autonomously.
- **Ruthlessly respect the 10-minute constraint**: if content doesn't fit, cut it — do not expand the scope.

---

## Project Folder Structure

```
projects/
└── <workshop-slug>/
    ├── 01_research.md
    ├── 02_learning_goals.md
    ├── 03_script.md
    ├── 04_slides.md
    └── FINAL_<workshop-slug>.md
```

The `FINAL_` file is the deliverable — a single document the facilitator can open and run from.

---

## Deriving the Workshop Slug

From the workshop topic, extract a short slug:
- Lowercase everything
- Replace spaces with underscores
- Strip punctuation
- 2–4 words max

**Examples:**
- "The Power of Active Listening" → `active_listening`
- "How Feedback Loops Work" → `feedback_loops`
- "What is Psychological Safety?" → `psychological_safety`

---

## Context Folder

`context/workshop_description.md` is the only required input. If the user places additional reference files there (prior notes, a reading, existing materials), read them too.

---

## Error Handling

- If `context/workshop_description.md` is missing or empty — stop and ask the user to fill it in.
- If a skill output seems too long or tries to cover multiple concepts — flag it and trim back to one core idea.
- If the `projects/` directory doesn't exist — create it.
