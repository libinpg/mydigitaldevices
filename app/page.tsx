import Link from "next/link";
import DeviceCard from "@/components/DeviceCard";
import { capabilities } from "@/data/capabilities";
import { categoryLabels, devices } from "@/data/devices";
import type { DeviceCategory } from "@/types/device";

const categories = Object.keys(categoryLabels) as DeviceCategory[];

export default function HomePage() {
  const activeCount = devices.filter((device) => device.status === "active").length;
  const confirmedCapabilities = capabilities.filter((capability) => capability.confidence === "confirmed");

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <section className="max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300/80">Personal Device Archive</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Know what I already have before deciding what I need next.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
          A factual archive of the devices I own, their documented capabilities, and the evidence behind future upgrade decisions.
        </p>
      </section>

      <section className="mt-12 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm text-zinc-500">Documented devices</p>
          <p className="mt-1 text-3xl font-semibold">{devices.length}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm text-zinc-500">Marked active</p>
          <p className="mt-1 text-3xl font-semibold">{activeCount}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm text-zinc-500">Confirmed capability areas</p>
          <p className="mt-1 text-3xl font-semibold">{confirmedCapabilities.length}</p>
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.04] p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/70">Upgrade discipline</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">No automatic “you do not need an upgrade” verdicts.</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              The archive records what is known. If a future purchase is being considered, the next step is to identify a repeated or measurable limitation rather than infer one from product age alone.
            </p>
          </div>
          <Link href="/upgrade-check" className="inline-flex shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 px-5 py-2.5 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/15">
            Run upgrade check →
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Current capability map</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight">What the collection can support, based on recorded evidence</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-500">
            This is a coverage summary, not a benchmark or guarantee. “Partial” means the archive does not yet contain enough workload-specific evidence to make a stronger claim.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <article key={capability.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-medium text-zinc-100">{capability.name}</h3>
                <span className={capability.confidence === "confirmed" ? "rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] text-emerald-300" : "rounded-full bg-amber-400/10 px-2.5 py-1 text-[11px] text-amber-300"}>
                  {capability.confidence === "confirmed" ? "documented" : "needs evidence"}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-500">{capability.evidence}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-20 space-y-16">
        {categories.map((category) => {
          const categoryDevices = devices.filter((device) => device.category === category);
          if (categoryDevices.length === 0) return null;

          return (
            <section key={category}>
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Category</p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-tight">{categoryLabels[category]}</h2>
                </div>
                <span className="text-sm text-zinc-500">{categoryDevices.length} device{categoryDevices.length > 1 ? "s" : ""}</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categoryDevices.map((device) => (
                  <DeviceCard key={device.id} device={device} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
