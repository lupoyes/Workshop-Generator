import Link from "next/link";
import { getWorkshopIndex } from "@/lib/workshops";

export default function Home() {
  const workshops = getWorkshopIndex();

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
            ARIVA Workshop Generator
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Workshop Library
          </h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            10-minute facilitation guides, ready to run.
          </p>
        </header>

        {workshops.length === 0 ? (
          <EmptyState />
        ) : (
          <ul className="space-y-4">
            {workshops.map((w) => (
              <li key={w.slug}>
                <Link
                  href={`/workshop/${w.slug}`}
                  className="group block rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                          {w.bloomsLevel}
                        </span>
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">
                          {w.generatedAt}
                        </span>
                      </div>
                      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors truncate">
                        {w.title}
                      </h2>
                      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
                        {w.ilo}
                      </p>
                    </div>
                    <span className="shrink-0 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors mt-1">
                      →
                    </span>
                  </div>
                  {w.audience && (
                    <p className="mt-3 text-xs text-zinc-400 dark:text-zinc-500">
                      Audience: {w.audience}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

function EmptyState() {
  return (
    <div className="rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700 p-12 text-center">
      <p className="text-zinc-400 dark:text-zinc-500 text-sm">
        No workshops yet.
      </p>
      <p className="mt-2 text-zinc-400 dark:text-zinc-500 text-xs font-mono">
        Add a description to{" "}
        <span className="text-zinc-600 dark:text-zinc-400">
          context/workshop_description.md
        </span>{" "}
        and run the pipeline.
      </p>
    </div>
  );
}
