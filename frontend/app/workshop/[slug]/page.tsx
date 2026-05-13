import { notFound } from "next/navigation";
import Link from "next/link";
import { getWorkshop, getAllSlugs } from "@/lib/workshops";
import type { Workshop, Slide, FacilitatorTip, Misconception } from "@/lib/types";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function WorkshopPage(props: PageProps<"/workshop/[slug]">) {
  const { slug } = await props.params;
  const workshop = getWorkshop(slug);
  if (!workshop) notFound();

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <nav className="mb-10">
          <Link
            href="/"
            className="text-sm text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
          >
            ← All workshops
          </Link>
        </nav>

        <WorkshopHeader workshop={workshop} />
        <TimingCard workshop={workshop} />
        <ARIVAScript workshop={workshop} />
        <SlidesSection slides={workshop.slides} />
        <FacilitatorSection workshop={workshop} />
        <PreRunChecklist items={workshop.preRunChecklist} />
      </div>
    </main>
  );
}

function WorkshopHeader({ workshop }: { workshop: Workshop }) {
  return (
    <header className="mb-10">
      <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
        10-min ARIVA Workshop
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {workshop.title}
      </h1>

      <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
        <MetaRow label="ILO" value={workshop.ilo} fullWidth />
        <MetaRow label="Core concept" value={workshop.coreConcept} fullWidth />
        <MetaRow label="Bloom's level" value={workshop.bloomsLevel} />
        <MetaRow label="Format" value={workshop.meta.format} />
        <MetaRow label="Audience" value={workshop.meta.audience} />
        {workshop.meta.groupSize && (
          <MetaRow label="Group size" value={workshop.meta.groupSize} />
        )}
      </div>

      {workshop.misconceptions.length > 0 && (
        <div className="mt-6 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-2">
            Watch for these misconceptions
          </p>
          <ul className="space-y-2">
            {workshop.misconceptions.map((m: Misconception, i: number) => (
              <li key={i} className="text-sm">
                <span className="text-amber-700 dark:text-amber-400 font-medium">
                  {m.misconception}
                </span>
                <span className="text-zinc-500 dark:text-zinc-400">
                  {" "}— {m.reality}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function MetaRow({
  label,
  value,
  fullWidth,
}: {
  label: string;
  value: string;
  fullWidth?: boolean;
}) {
  return (
    <div className={fullWidth ? "col-span-2" : ""}>
      <dt className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
        {label}
      </dt>
      <dd className="mt-0.5 text-zinc-700 dark:text-zinc-300">{value}</dd>
    </div>
  );
}

const PHASE_LABELS: Record<string, { label: string; color: string }> = {
  arrival: { label: "A — Arrival", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" },
  reactivating: { label: "R — Reactivating", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" },
  informing: { label: "I — Informing", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" },
  verarbeitung: { label: "V — Verarbeitung", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300" },
  assessing: { label: "A — Assessing", color: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300" },
};

function TimingCard({ workshop }: { workshop: Workshop }) {
  const { timingCard } = workshop;
  const rows = [
    { phase: "arrival", time: "0:00–1:00", text: timingCard.arrival },
    { phase: "reactivating", time: "1:00–2:30", text: timingCard.reactivating },
    { phase: "informing", time: "2:30–7:00", text: timingCard.informing },
    { phase: "verarbeitung", time: "7:00–9:30", text: timingCard.verarbeitung },
    { phase: "assessing", time: "9:30–10:00", text: timingCard.assessing },
  ];

  return (
    <section className="mb-10">
      <SectionTitle>Timing Card</SectionTitle>
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        {rows.map((row, i) => {
          const meta = PHASE_LABELS[row.phase];
          return (
            <div
              key={row.phase}
              className={`flex items-baseline gap-4 px-5 py-3 text-sm ${
                i < rows.length - 1
                  ? "border-b border-zinc-100 dark:border-zinc-800"
                  : ""
              } bg-white dark:bg-zinc-900`}
            >
              <span className="w-20 shrink-0 font-mono text-xs text-zinc-400">
                {row.time}
              </span>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${meta.color}`}
              >
                {meta.label}
              </span>
              <span className="text-zinc-600 dark:text-zinc-400">{row.text}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ARIVAScript({ workshop }: { workshop: Workshop }) {
  const { ariva } = workshop;

  const phases = [
    {
      key: "arrival",
      ...PHASE_LABELS.arrival,
      time: "0:00–1:00",
      content: ariva.arrival.script,
      highlights: [] as string[],
    },
    {
      key: "reactivating",
      ...PHASE_LABELS.reactivating,
      time: "1:00–2:30",
      content: ariva.reactivating.script,
      highlights: [
        `Question: ${ariva.reactivating.question}`,
        `Format: ${ariva.reactivating.format}`,
      ],
    },
    {
      key: "informing",
      ...PHASE_LABELS.informing,
      time: "2:30–7:00",
      content: ariva.informing.script,
      highlights: [`Core concept: ${ariva.informing.coreConcept}`],
    },
    {
      key: "verarbeitung",
      ...PHASE_LABELS.verarbeitung,
      time: "7:00–9:30",
      content: ariva.verarbeitung.script,
      highlights: [
        `Task: ${ariva.verarbeitung.taskPrompt}`,
        `Format: ${ariva.verarbeitung.format}`,
      ],
    },
    {
      key: "assessing",
      ...PHASE_LABELS.assessing,
      time: "9:30–10:00",
      content: ariva.assessing.script,
      highlights: [
        `Question: ${ariva.assessing.question}`,
        `Success: ${ariva.assessing.successSignal}`,
      ],
    },
  ];

  return (
    <section className="mb-10">
      <SectionTitle>Facilitator Script</SectionTitle>
      <div className="space-y-4">
        {phases.map((phase) => (
          <div
            key={phase.key}
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden"
          >
            <div className="flex items-center gap-3 px-5 py-3 border-b border-zinc-100 dark:border-zinc-800">
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${phase.color}`}
              >
                {phase.label}
              </span>
              <span className="font-mono text-xs text-zinc-400">{phase.time}</span>
            </div>
            {phase.highlights.length > 0 && (
              <div className="px-5 pt-3 pb-1 flex flex-wrap gap-2">
                {phase.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-md px-2 py-1"
                  >
                    {h}
                  </span>
                ))}
              </div>
            )}
            <div className="px-5 py-4">
              <p className="text-sm text-zinc-600 dark:text-zinc-400 whitespace-pre-wrap leading-relaxed">
                {phase.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SlidesSection({ slides }: { slides: Slide[] }) {
  if (!slides || slides.length === 0) return null;

  return (
    <section className="mb-10">
      <SectionTitle>Slide Blueprint</SectionTitle>
      <div className="space-y-4">
        {slides.map((slide) => (
          <div
            key={slide.number}
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden"
          >
            <div className="flex items-center gap-3 px-5 py-3 border-b border-zinc-100 dark:border-zinc-800">
              <span className="font-mono text-xs text-zinc-400">
                Slide {slide.number.toString().padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {slide.title}
              </span>
              <span className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                {slide.layout}
              </span>
            </div>
            <div className="px-5 py-4 space-y-3">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                  Content
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 whitespace-pre-wrap">
                  {slide.content}
                </p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                  Speaker cue
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 italic">
                  {slide.speakerCue}
                </p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                  Design prompt
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500 bg-zinc-50 dark:bg-zinc-800 rounded-lg p-3">
                  {slide.designPrompt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FacilitatorSection({ workshop }: { workshop: Workshop }) {
  return (
    <section className="mb-10 space-y-6">
      {workshop.facilitatorTips.length > 0 && (
        <div>
          <SectionTitle>Facilitator Tips</SectionTitle>
          <div className="space-y-3">
            {workshop.facilitatorTips.map((tip: FacilitatorTip, i: number) => (
              <div
                key={i}
                className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-5 py-4"
              >
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                  {tip.title}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {workshop.outOfScope.length > 0 && (
        <div>
          <SectionTitle>Out of Scope</SectionTitle>
          <ul className="space-y-1">
            {workshop.outOfScope.map((item: string, i: number) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-zinc-500 dark:text-zinc-400"
              >
                <span className="mt-1 text-zinc-300 dark:text-zinc-600">–</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {workshop.deeperResources.length > 0 && (
        <div>
          <SectionTitle>Go Deeper</SectionTitle>
          <ul className="space-y-1">
            {workshop.deeperResources.map((r: string, i: number) => (
              <li
                key={i}
                className="text-sm text-zinc-500 dark:text-zinc-400 flex gap-2"
              >
                <span className="text-zinc-300 dark:text-zinc-600">→</span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

function PreRunChecklist({ items }: { items: string[] }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="mb-10">
      <SectionTitle>Pre-Run Checklist</SectionTitle>
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-5 py-4">
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="mt-0.5 h-4 w-4 shrink-0 rounded border border-zinc-300 dark:border-zinc-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
      {children}
    </h2>
  );
}
