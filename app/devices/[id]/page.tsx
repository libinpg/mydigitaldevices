import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryLabels, devices } from "@/data/devices";

const statusLabels = {
  active: "在用",
  spare: "备用",
  retired: "已退役"
} as const;

export function generateStaticParams() {
  return devices.map((device) => ({ id: device.id }));
}

export default function DeviceDetailPage({ params }: { params: { id: string } }) {
  const device = devices.find((item) => item.id === params.id);
  if (!device) notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <Link href="/" className="text-sm text-zinc-400 transition hover:text-white">
        ← 返回设备档案
      </Link>

      <section className="mt-10">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">
          {categoryLabels[device.category]} · {device.brand}
        </p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{device.name}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-7 text-zinc-400">{device.summary}</p>
          </div>
          <span className="w-fit rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-300">
            {statusLabels[device.status]}
          </span>
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">规格信息</h2>
          <span className="text-sm text-zinc-500">{device.specs.length} 项</span>
        </div>

        {device.specs.length > 0 ? (
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {device.specs.map((spec) => (
              <div key={spec.label} className="bg-zinc-950 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">{spec.label}</p>
                <p className="mt-2 text-lg font-medium text-zinc-100">{spec.value}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-dashed border-white/10 p-6 text-sm leading-6 text-zinc-500">
            这台设备暂时还没有补充详细规格。后续可以继续记录购买日期、价格、序列号、接口信息和个人使用备注等内容。
          </p>
        )}
      </section>

      {device.tags && device.tags.length > 0 && (
        <section className="mt-8 flex flex-wrap gap-2">
          {device.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-zinc-400">#{tag}</span>
          ))}
        </section>
      )}
    </main>
  );
}
