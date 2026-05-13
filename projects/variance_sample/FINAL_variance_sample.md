# Calculate the Variance of a Sample
### 10-Minute ARIVA Workshop — Facilitator Guide

**Prepared by:** Workshop Generator (Claude)
**Date:** 2026-05-13
**Workshop slug:** variance_sample
**Duration:** 10 minutes
**Format:** In-person
**Audience:** Students, no statistics background, 13–30 participants

---

## At a Glance

| | |
|---|---|
| **ILO** | Calculate the variance of a small dataset by hand, using the three-step process: subtract the mean, square the differences, and average the squared values |
| **Core concept** | Variance measures how spread out data is — it is the average of the squared distances from the mean |
| **Bloom's level** | Apply |
| **Format** | In-person |
| **Group size** | 13–30 |

---

## ARIVA Timing Card

*Print this or keep it visible while facilitating.*

```
0:00–1:00   A  ARRIVAL        "By the end you'll be able to calculate variance by hand."
1:00–2:30   R  REACTIVATING   "Two classes, same average of 70% — which would you rather be in?"
2:30–7:00   I  INFORMING      Variance = average squared distance from the mean. Three steps.
7:00–9:30   V  VERARBEITUNG   "Dataset: 2, 4, 4, 4, 6 — mean is 4. Calculate variance in pairs. 2 min."
9:30–10:00  A  ASSESSING      "If variance is 0, what does that tell you about the data?"
```

---

## Pre-Run Checklist

- [ ] Say the ILO out loud once before you walk in — "calculate variance by hand using three steps"
- [ ] Know the Reactivating question by heart: "Two classes, same average, different spread — which would you rather be in?"
- [ ] Write the three steps on the board before participants arrive: (1) subtract the mean, (2) square the differences, (3) average them
- [ ] Write the Verarbeitung dataset on the board or have it on Slide 05: **2, 4, 4, 4, 6 — mean = 4**
- [ ] Have a visible 2-minute timer ready (phone timer, projected timer, or a watch you can call out)
- [ ] Know the answer: variance of (2, 4, 4, 4, 6) = **1.6**
- [ ] Know the two things to park: standard deviation ("next step after this") and n vs. n−1 ("two versions of the formula, we're using the simpler one today")
- [ ] Arrange seating so participants can work in pairs easily

---

## Intended Learning Outcome

By the end of this workshop, participants will be able to:

> **Calculate** the variance of a small dataset by hand, following the three-step process: subtract the mean, square the differences, and average the squared values.

**Success signal:** In the Assessing phase, a student who answers "all the values are the same" or "there's no spread" to the variance-is-zero question has understood the concept, not just memorised the steps.

**What this workshop does NOT cover:**
- Standard deviation (the square root of variance — for a follow-up session)
- Population variance vs. sample variance (n vs. n−1) — use n throughout; acknowledge the distinction exists if asked
- Why we square (algebraic proof) — the intuitive reason (cancellation) is sufficient

---

## Full Facilitator Script

---

### A — Arrival [0:00–1:00]

> "Hi, I'm [name]. In the next 10 minutes, we're going to look at **variance** — a way to measure how spread out data is. By the end, you'll be able to **calculate the variance of a small dataset by hand**. Let's go."

> **Cue:** Say the ILO clearly and directly. Don't explain what variance is yet — that's Informing. Move immediately into the first question.

---

### R — Reactivating [1:00–2:30]

> "Quick question before we get into the math. Imagine two classes. Both had an average grade of 70%. In one class, everyone scored between 65 and 75. In the other, grades ranged from 30 to 100. Show of hands — who would rather be in the first class?"
>
> *(Wait for hands.)*
>
> "Who'd rather be in the second?"
>
> *(Take 1–2 quick reasons from volunteers. Listen for words like 'consistent', 'fair', 'risky', 'unpredictable'.)*
>
> "Interesting. Both classes have the same average — but they feel completely different. That difference is what variance captures. Variance is the number that tells you how spread out your data is. Let's see exactly how it works."

> **Cue:** If students are quiet after hands go up, prompt: "One word — why'd you pick that one?" Don't let silence stretch past 10 seconds.

> **Cue:** If a student says "I'd pick the risky class because I could get 100" — great. Say: "Exactly — same mean, very different experience. Variance is the tool that captures that difference."

**Transition:** "Here's the concept — and then I'll show you the three steps."

---

### I — Informing [2:30–7:00]

**Part 1 — The intuition [2:30–4:00]**

> "Variance measures how far each value in your dataset is from the mean — on average. That's it. If your data is clustered tightly around the mean, variance is low. If it's scattered all over the place, variance is high."
>
> "Think about those two classes. In the tight class — 65 to 75 — every grade is close to the average of 70. Small distances. Low variance. In the scattered class — 30 to 100 — some grades are far from 70. Large distances. High variance."

**Part 2 — The three steps [4:00–6:30]**

*(Write on the board as you say each step.)*

> "How do we calculate it? Three steps.
>
> **Step 1: Subtract the mean from each value.** This gives you the distance of each value from the mean. Some will be positive, some negative — that's fine.
>
> **Step 2: Square each of those distances.** Why? Two reasons. First, squaring makes all values positive — otherwise the negatives and positives cancel out and you'd always get zero. Second, squaring punishes big deviations more than small ones.
>
> **Step 3: Average those squared distances.** Add them up and divide by how many values you have. That average is your variance."

**Worked example [6:30–7:00]**

> "Quick example. Scores: 3, 4, 5. Mean is 4."
> *(Write: 3−4=−1, 4−4=0, 5−4=+1)*
> "Square them: 1, 0, 1."
> "Average: (1+0+1) ÷ 3 = **0.67**. That's the variance."

> **Cue:** At around 6:00, check in: "Any questions before you try one yourselves?" Take one question only. If someone asks about standard deviation or n−1, say: "Great question — that's the next step after today. For now, let's focus on this."

**Transition:** "Your turn. Find a partner."

---

### V — Verarbeitung [7:00–9:30]

> "Here are five numbers: **2, 4, 4, 4, 6**. The mean is 4. Work in pairs. Calculate the variance. Follow the three steps on the board. Pen and paper only. You have **2 minutes**."
>
> *(Start visible 2-minute timer.)*
> "Go."

> **Cue:** Walk the room while they work. Listen for confusion at Step 2 (squaring) and Step 3 (dividing by n). Don't correct immediately — let them work through it. Note pairs who finish quickly.

> **Cue:** At 1:30: "30 seconds — wrap up your last step."

**To close:**
> "Time. What did you get? Shout it out."
> *(Collect answers. Write them on the board. Confirm 1.6.)*
> "Let's check. Step 1: 2−4=−2, 4−4=0, 4−4=0, 4−4=0, 6−4=+2. Step 2, square them: 4, 0, 0, 0, 4. Step 3: (4+0+0+0+4) ÷ 5 = **1.6**."
> "Notice: three values sit exactly at the mean — they contribute zero to the variance. Only the two outliers drive it."

**Transition:** "Last question."

---

### A — Assessing [9:30–10:00]

> "One final question. If I told you the variance of a dataset is exactly **zero** — what does that tell you about the data?"
>
> *(Take 2–3 hands or quick shout-outs.)*
>
> "Exactly — if variance is zero, every value is identical. Nothing is spread from the mean. All distances are zero. Zero squared is zero. Zero averaged is zero."
>
> "You've just calculated variance. If you want to go one step further — standard deviation is the square root of variance, which brings the units back to the original scale. But that's for next time."

> **Cue:** If responses show the concept didn't land, don't re-teach. Say: "It means every value is the same — no variation at all. That's why it's called variance." Then close.

---

### Contingency Notes

**Group finishes Verarbeitung in under 1 minute:**
> "Fast work. Now tell me — what would happen to the variance if I changed the 2 to a 10? Would it go up or down?"

**Group runs out of time before finishing:**
> Cut the self-check. Walk through the answer on the board yourself. Go straight to the Assessing question.

**Student asks about standard deviation:**
> "Standard deviation is the square root of variance — it brings everything back to the original units. We'll get there. For now, let's finish variance."

**Student asks about n vs. n−1:**
> "There are two versions of this formula — one for a sample, one for a whole population. We're using the simpler one today. Worth looking up after this."

---

## Slide Blueprint

*6 slides — one per ARIVA beat. All slides serve as cues and visual anchors, not content surfaces.*

**Visual system:** Deep indigo (#1E1B4B) for orientation beats (Arrival, Assessing) · Warm white (#F9F7F4) for active beats · Amber (#F59E0B) for accents, results, and timer. Font: Plus Jakarta Sans.

---

### Slide 01 — Arrival / Title Card
**Layout:** Title card · Indigo background
**Content:** Title: **Variance** · Subtitle: *By the end, you'll be able to calculate the variance of a small dataset by hand.* · [Name] · [Date]
**Speaker cue:** Read the subtitle aloud as the ILO. Move immediately.
**Design Prompt:** Full-bleed deep indigo. "Variance" in very large warm white Plus Jakarta Sans Bold, centered. Subtitle in smaller weight below. No images, no decoration. Clean, confident, like a good opening line.

---

### Slide 02 — Reactivating Question
**Layout:** Quote card — two halves · White background
**Content:** Left half: **Class A** / *Everyone: 65–75* · Right half: **Class B** / *Grades: 30–100* · Bottom: "Both classes: average = 70%" · Prompt: **Which class would you rather be in?**
**Speaker cue:** Ask the question verbally. Wait for hands before advancing.
**Design Prompt:** White background split vertically by a fine indigo line. Left: clustered dots in amber. Right: widely-scattered dots in amber. Amber bold question at the bottom. Clean, readable from the back of the room.

---

### Slide 03 — Informing: The Three Steps
**Layout:** Two-column · White background
**Content:** Headline: **How to calculate variance** · Left: numbered steps (1. Subtract mean, 2. Square differences, 3. Average) · Right: minimal flow diagram (values → −mean → ² → sum ÷ n → Variance)
**Speaker cue:** Walk through steps verbally. Also write on physical board. Slide reinforces, doesn't replace.
**Design Prompt:** White background. Left: numbered list in large indigo, generous spacing. Right: clean flow diagram in indigo with amber arrows and final "Variance" box. No shadows or decoration.

---

### Slide 04 — Informing: Worked Example
**Layout:** Full-width step-by-step · White background
**Content:** Headline: **Example: 3, 4, 5 — mean = 4** · Step 1: 3−4=−1, 4−4=0, 5−4=+1 · Step 2: 1, 0, 1 · Step 3: (1+0+1)÷3 = **0.67** · Bottom: *Variance = 0.67*
**Speaker cue:** Advance briefly as you run the example. Students should be watching you, not reading the slide.
**Design Prompt:** White background. Three horizontal rows, each a step. "Variance = 0.67" in amber bold at the bottom. Clean, generous spacing — feels like a whiteboard, not a table.

---

### Slide 05 — Verarbeitung Task
**Layout:** Instruction card · White background
**Content:** Title: **Your turn.** · 1. Dataset: **2, 4, 4, 4, 6** — mean = 4 · 2. Follow the three steps · 3. Work in pairs — pen and paper only · Timer badge: **⏱ 2 minutes**
**Speaker cue:** Read task aloud. Start timer. Leave this slide showing for the full 2 minutes.
**Design Prompt:** White background. "Your turn." in large indigo bold. Task in numbered list, generous spacing. Amber timer badge (rounded rectangle) in bottom-right corner, large enough to see from across the room. The slide should feel energising: "stop watching, start doing."

---

### Slide 06 — Assessing Question
**Layout:** Takeaway card · Indigo background
**Content:** **If the variance of a dataset is 0, what does that tell you about the data?**
**Speaker cue:** Ask aloud. Collect 2–3 responses. Close the session.
**Design Prompt:** Deep indigo background (slightly lighter than Slide 01 — #2E2A6B — to signal close, not beginning). Question in large warm white, centered, filling 60% of the slide. Nothing else. The visual closing mirrors the opening.

---

## Facilitator Tips

**Tip 1: Intuition before formula — always.**
The biggest risk with this workshop is writing the formula on the board before students have any sense of what it means. Always explain the "what" (spread, distance from mean) before the "how" (the three steps). If you lead with Σ(xᵢ − x̄)² ÷ n, you'll lose them immediately.

**Tip 2: The squaring question will come up — be ready.**
Roughly half of all groups will ask "why do we square?" during or immediately after the Informing phase. Have a 20-second answer ready: "Without squaring, the positives and negatives cancel out to zero — and that tells you nothing. Squaring solves that." Don't go deeper than this in the available time.

**Tip 3: The Verarbeitung dataset is small by design — let them finish.**
(2, 4, 4, 4, 6) with a mean of 4 is chosen so that the arithmetic is fast and the answer (1.6) is clean. Don't change the dataset to something "more realistic" — harder numbers will eat the full 2 minutes on arithmetic, leaving no time for the insight.

**Tip 4: Three zeros in the dataset are a teaching gift.**
When you confirm the answer, point out that three values sit exactly at the mean and contribute zero to the variance. This makes the concept visceral — students can see that only the two outliers (2 and 6) drive the variance. This moment often produces the real "aha."

**Tip 5: n vs. n−1 will come up — park it confidently.**
Someone will ask. "We're using the formula for a full population today — there's also a version for samples where you divide by n−1 instead. It's a subtle but important distinction that deserves its own session." Then move on. Don't get drawn into the Bessel's correction rabbit hole.

---

## If You Want to Go Deeper

**"Statistics" by Freedman, Pisani & Purves** — The most intuitive introduction to statistics ever written. Chapter 4 covers spread and variance without intimidating notation. Ideal for students who want to understand the "why" before the "how."

**Khan Academy — Variance and Standard Deviation** (khanacademy.org) — Free, well-paced video series with worked examples. Perfect follow-on for students who want to practice more problems after this session.

---

## Editorial Notes

No issues found — all ARIVA phases align with the ILO. The Assessing question ("variance = 0") tests conceptual understanding rather than mechanical recall, which is appropriate for the Apply level — students who can answer it correctly have internalised the concept, not just memorised the formula steps. The n vs. n−1 distinction is consistently handled as an out-of-scope park across all phases.
