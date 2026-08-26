import Link from "next/link";
import type { Device } from "@/types/device";

const iconByCategory = {
  phone: "📱",
  laptop: "💻",
  desktop: "🖥️",
  monitor: "🖼️",
  xr: "🥽"
} as const;

export default function DeviceCard({ device }: { device: Device }) {
  return (
    <Link
      href={`/devices/${device.id}`}
      className="group rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
    >
      <div className="mb-8 flex items-start justify-between gap-4">
        <div className="text-3xl" aria-hidden="true">{iconByCategory[device.category]}</div>
        <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs capitalize text-zinc-400">
          {device.status}
        </span>
      </div>
      <p className="mb-1 text-xs uppercase tracking-[0.2em] text-zinc-500">{device.brand}</p>
      <h3 className="text-xl font-semibold tracking-tight text-white">{device.name}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-400">{device.summary}</p>
      {device.specs.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {device.specs.slice(0, 2).map((spec) => (
            <span key={spec.label} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-zinc-300">
              {spec.value}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
