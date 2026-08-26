import DeviceCard from "@/components/DeviceCard";
import { categoryLabels, devices } from "@/data/devices";
import type { DeviceCategory } from "@/types/device";

const categories = Object.keys(categoryLabels) as DeviceCategory[];

export default function HomePage() {
  const activeCount = devices.filter((device) => device.status === "active").length;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <section className="max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300/80">Personal Device Archive</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          The digital devices I own, use and keep around.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
          A growing collection of phones, computers, displays and XR hardware — organized as a personal digital-device archive.
        </p>
      </section>

      <section className="mt-12 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm text-zinc-500">Total devices</p>
          <p className="mt-1 text-3xl font-semibold">{devices.length}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm text-zinc-500">Active</p>
          <p className="mt-1 text-3xl font-semibold">{activeCount}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm text-zinc-500">Categories</p>
          <p className="mt-1 text-3xl font-semibold">{categories.length}</p>
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
