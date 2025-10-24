import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yamini Ganesan | Under Construction",
  description: "The portfolio is being refreshed. Check back soon for the new experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  void children;
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-4 py-24 text-white">
            <div className="pointer-events-none absolute inset-0">
              <div
                aria-hidden="true"
                className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/30 to-transparent blur-3xl animate-pulse-soft"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-40 -right-24 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-emerald-500/40 via-teal-500/25 to-transparent blur-3xl animate-float-slow"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-[50%] bg-[radial-gradient(ellipse_at_bottom,_rgba(56,189,248,0.18),_transparent_70%)]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-40 mix-blend-screen"
              >
                <div className="h-full w-full bg-[linear-gradient(120deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:26px_26px]" />
              </div>
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[48rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 opacity-20 animate-spin-slow"
              />
            </div>
            <div className="relative z-10 max-w-2xl rounded-[2.75rem] border border-white/15 bg-white/5 p-10 text-center shadow-[0_45px_120px_-35px_rgba(56,189,248,0.65)] backdrop-blur-3xl sm:p-14">
              <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[0.7rem] font-medium uppercase tracking-[0.5em] text-white/70">
                Under Construction
              </span>
              <h1 className="mt-6 bg-gradient-to-r from-sky-200 via-violet-200 to-emerald-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl">
                Crafting a more immersive portfolio experience.
              </h1>
              <p className="mt-6 text-sm text-white/70 sm:text-base">
                Yamini is redesigning this space with new worlds, fresh renders,
                and interactive experiments. The site will return shortly with
                atmospheric updates.
              </p>
              <div className="mt-8 space-y-4">
                <div className="relative h-2 w-full overflow-hidden rounded-full border border-white/15 bg-white/10">
                  <div className="progress-glow absolute inset-y-0 left-0 w-1/2 rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-300 shadow-[0_0_25px_rgba(56,189,248,0.55)]" />
                </div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                  Phase 02 · Visual polish underway
                </p>
              </div>
              <div className="mt-10 text-sm text-white/70">
                <p>Need to reach Yamini sooner?</p>
                <a
                  className="mt-3 inline-flex items-center justify-center rounded-full border border-white/20 bg-gradient-to-r from-fuchsia-500/40 via-sky-500/30 to-emerald-400/40 px-6 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:shadow-[0_0_25px_rgba(244,114,182,0.35)]"
                  href="mailto:Yaminiganesh099@gmail.com"
                >
                  Email Yamini
                </a>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-10 z-10 flex items-center justify-center text-[0.65rem] uppercase tracking-[0.45em] text-white/35">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
                Est. relaunch arriving soon
              </span>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
