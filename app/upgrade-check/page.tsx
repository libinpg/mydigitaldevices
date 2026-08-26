import Link from "next/link";
import { upgradeQuestions } from "@/data/capabilities";

export default function UpgradeCheckPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <Link href="/" className="text-sm text-zinc-400 transition hover:text-white">
        ← Back to device archive
      </Link>

      <section className="mt-10 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Evidence-first upgrade check</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Turn an upgrade impulse into a testable requirement.
        </h1>
        <p className="mt-6 text-base leading-7 text-zinc-400 sm:text-lg">
          This page does not decide whether you should buy something. It helps separate a documented limitation from novelty, comparison pressure, or an unmeasured concern.
        </p>
      </section>

      <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Before buying</p>
            <h2 className="mt-2 text-2xl font-semibold">Record the evidence</h2>
          </div>
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">30-day review suggested</span>
        </div>

        <ol className="mt-8 space-y-5">
          {upgradeQuestions.map((question, index) => (
            <li key={question} className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm text-zinc-300">
                {index + 1}
              </span>
              <div>
                <p className="font-medium text-zinc-100">{question}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-500">Write down an observation, measurement, or concrete example. “It feels old” is a valid feeling, but not yet a performance requirement.</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm font-medium text-white">Documented blocker</p>
          <p className="mt-2 text-sm leading-6 text-zinc-500">A task fails, takes too long, runs out of memory/storage, or misses a measurable target.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm font-medium text-white">Needs observation</p>
          <p className="mt-2 text-sm leading-6 text-zinc-500">There may be a real limitation, but there is not enough repeated or measured evidence yet.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm font-medium text-white">Novelty-driven</p>
          <p className="mt-2 text-sm leading-6 text-zinc-500">The desire is mostly about a new product, design, launch, or comparison rather than a current task failure.</p>
        </div>
      </section>

      <p className="mt-10 text-sm leading-6 text-zinc-600">
        These labels are prompts for reflection, not psychological or financial advice. A purchase can still be worthwhile for enjoyment even when it is not required by performance.
      </p>
    </main>
  );
}
