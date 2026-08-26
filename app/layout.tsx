import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "我的数字设备",
  description: "记录我拥有和使用过的电子设备，以及基于事实的升级判断。"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <header className="border-b border-white/10 bg-black/20 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold tracking-tight">
              我的数字设备
            </Link>
            <nav className="text-sm text-zinc-400">
              <Link href="/" className="transition hover:text-white">设备档案</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
