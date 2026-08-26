import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Digital Devices",
  description: "A personal archive of the digital devices I own and use."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <header className="border-b border-white/10 bg-black/20 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold tracking-tight">
              My Digital Devices
            </Link>
            <nav className="text-sm text-zinc-400">
              <Link href="/" className="transition hover:text-white">Collection</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
