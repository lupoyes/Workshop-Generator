# Workshop Generator — Claude Orchestration Guide

This project turns a short workshop description into a complete, structured workshop package through a sequence of five skills. Each skill builds on the previous one, and every output is saved as a clean Markdown file inside a dedicated project folder.

---

## How to Start

1. The user has placed a workshop description in the `context/` folder (typically `context/workshop_description.md`).
2. Read that file first. Everything flows from it.
3. Derive a **workshop slug** from the title: lowercase, spaces replaced with underscores (e.g. `intro_to_machine_learning`).
4. Create the output folder: `projects/<workshop-slug>/`
5. Run each skill in order, saving its output before moving to the next.

---

## Workflow Sequence

Run each skill by reading its instruction file from `SKILLS/`. After completing each skill, write its output to the project folder as a structured Markdown file before starting the next skill. Do not skip stages — each skill feeds into the next.

```
SKILL 01 → SKILLS/RESEARCH.md          → projects/<slug>/01_research.md
SKILL 02 → SKILLS/LEARNING_GOALS.md    → projects/<slug>/02_learning_goals.md
SKILL 03 → SKILLS/SCRIPT.md            → projects/<slug>/03_script.md
SKILL 04 → SKILLS/SLIDES.md            → projects/<slug>/04_slides.md
SKILL 05 → SKILLS/FINALIZE.md          → projects/<slug>/FINAL_<slug>.md
```

---

## Rules for Every Skill

- **Read the skill file** (`SKILLS/<SKILL>.md`) before executing each stage — it contains the specific instructions, format requirements, and output template.
- **Pass context forward**: each skill should have access to the workshop description AND all previously generated output files. Read them before starting.
- **Save immediately**: write the output file as soon as a skill is complete, before starting the next stage.
- **Announce progress**: after saving each file, tell the user which stage just completed and what file was written.
- **Do not ask for confirmation between stages** unless a skill explicitly instructs it. Run the full pipeline autonomously.

---

## Project Folder Structure

After a full run, the project folder should look like this:

```
projects/
└── <workshop-slug>/
    ├── 01_research.md
    ├── 02_learning_goals.md
    ├── 03_script.md
    ├── 04_slides.md
    └── FINAL_<workshop-slug>.md
```

The `FINAL_` file is the deliverable. It combines all skill outputs into one cohesive, ready-to-use workshop document.

---

## Deriving the Workshop Slug

From the workshop description, extract the workshop title. Then:
- Lowercase everything
- Replace spaces and special characters with underscores
- Strip punctuation
- Keep it short (3–5 words max)

**Examples:**
- "Introduction to Machine Learning for Designers" → `intro_machine_learning_designers`
- "Prompt Engineering Basics" → `prompt_engineering_basics`
- "How to Run Effective Retrospectives" → `effective_retrospectives`

---

## Context Folder

The `context/` folder is where the user places inputs. At minimum it should contain:

- `context/workshop_description.md` — a short description of the workshop (topic, audience, duration, goals)

If the user places additional reference files in `context/` (e.g. existing materials, a syllabus, competitor research), read those too and use them to enrich the skill outputs.

---

## Skills Reference

See `SKILLS.md` for a human-readable overview of what each skill does. See the individual skill files in `SKILLS/` for the full execution instructions.

---

## Error Handling

- If `context/workshop_description.md` is missing or empty, stop and ask the user to add it before proceeding.
- If a skill output seems incomplete or too short, note it in a comment at the top of the output file and continue — do not abort the pipeline.
- If the `projects/` directory doesn't exist, create it.
