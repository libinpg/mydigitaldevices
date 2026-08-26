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
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300/80">个人设备档案</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          在决定下一台设备之前，先看清自己已经拥有什么。
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
          记录我拥有的电子设备、已知能力，以及未来升级判断所依据的事实。这里不会因为设备变旧就自动推断需要升级。
        </p>
      </section>

      <section className="mt-12 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm text-zinc-500">已记录设备</p>
          <p className="mt-1 text-3xl font-semibold">{devices.length}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm text-zinc-500">标记为在用</p>
          <p className="mt-1 text-3xl font-semibold">{activeCount}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm text-zinc-500">已有证据支持的能力领域</p>
          <p className="mt-1 text-3xl font-semibold">{confirmedCapabilities.length}</p>
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.04] p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/70">升级判断原则</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">不自动给出“你不需要升级”的结论。</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              网站只记录已知事实。考虑购买新设备时，先确认是否存在反复出现或能够量化的限制，而不是只根据产品年份或新品发布做判断。
            </p>
          </div>
          <Link href="/upgrade-check" className="inline-flex shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 px-5 py-2.5 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/15">
            进行升级前检查 →
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">当前能力概览</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight">根据已记录信息，目前这些使用场景有明确设备支持</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-500">
            这里展示的是设备覆盖情况，不是跑分或性能保证。“需要更多证据”表示目前没有足够的具体工作负载或实测数据支持更强的结论。
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <article key={capability.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-medium text-zinc-100">{capability.name}</h3>
                <span className={capability.confidence === "confirmed" ? "rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] text-emerald-300" : "rounded-full bg-amber-400/10 px-2.5 py-1 text-[11px] text-amber-300"}>
                  {capability.confidence === "confirmed" ? "已有记录" : "需要更多证据"}
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
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">设备分类</p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-tight">{categoryLabels[category]}</h2>
                </div>
                <span className="text-sm text-zinc-500">{categoryDevices.length} 台设备</span>
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
