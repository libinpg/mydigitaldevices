import Link from "next/link";
import { upgradeQuestions } from "@/data/capabilities";

export default function UpgradeCheckPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <Link href="/" className="text-sm text-zinc-400 transition hover:text-white">
        ← 返回设备档案
      </Link>

      <section className="mt-10 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">基于证据的升级检查</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          把“想升级”转换成可以验证的需求。
        </h1>
        <p className="mt-6 text-base leading-7 text-zinc-400 sm:text-lg">
          这个页面不会替你决定是否购买新设备，而是帮助区分：已经明确存在的限制、尚未量化的问题，以及单纯来自新品或比较带来的吸引力。
        </p>
      </section>

      <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">购买之前</p>
            <h2 className="mt-2 text-2xl font-semibold">先记录证据</h2>
          </div>
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">建议 30 天后再次评估</span>
        </div>

        <ol className="mt-8 space-y-5">
          {upgradeQuestions.map((question, index) => (
            <li key={question} className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm text-zinc-300">
                {index + 1}
              </span>
              <div>
                <p className="font-medium text-zinc-100">{question}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-500">尽量写下观察、测量结果或具体例子。“感觉它有点旧”是真实感受，但还不能直接等同于性能需求。</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm font-medium text-white">已确认的限制</p>
          <p className="mt-2 text-sm leading-6 text-zinc-500">某项任务无法完成、耗时明显超出可接受范围、内存或存储不足，或者达不到你预先设定的可测量目标。</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm font-medium text-white">需要继续观察</p>
          <p className="mt-2 text-sm leading-6 text-zinc-500">可能存在真实限制，但目前还没有足够频繁或可测量的证据。</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm font-medium text-white">主要来自新品吸引力</p>
          <p className="mt-2 text-sm leading-6 text-zinc-500">购买欲望主要来自新品发布、外观、宣传或与其他设备比较，而不是当前任务确实失败。</p>
        </div>
      </section>

      <p className="mt-10 text-sm leading-6 text-zinc-600">
        这些分类只是帮助整理思路，不属于心理或财务建议。即使性能上并非必需，为兴趣和体验购买设备仍然可以是一个个人选择。
      </p>
    </main>
  );
}
