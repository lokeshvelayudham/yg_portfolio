import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Linkedin, Mail, Play } from "lucide-react";
import { DockNav } from "@/components/DockNav";
import { featuredProjects } from "@/lib/projects-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060606] pb-24 text-white">
      <section className="relative min-h-[92svh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/abstract-bg-poster.webp"
          preload="metadata"
          className="absolute inset-0 size-full object-cover"
        >
          <source src="/videos/abstract-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,6,6,0.76)_0%,rgba(6,6,6,0.24)_48%,rgba(6,6,6,0.04)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(0deg,#060606_0%,rgba(6,6,6,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl items-end px-5 pb-16 pt-28 sm:px-8 lg:px-10">
          <div className="max-w-4xl drop-shadow-[0_12px_28px_rgba(0,0,0,0.65)]">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.42em] text-[#f1b56f]">
              3D Environment Artist
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-normal text-white sm:text-7xl lg:text-8xl">
              Yamini Ganesan
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
              Cinematic environments, atmospheric lighting, and interactive 3D
              worlds for games, virtual production, and real-time experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex h-11 items-center gap-2 bg-white px-5 text-sm font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:bg-[#f1b56f]"
              >
                View Work
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/projects/lost-past"
                className="inline-flex h-11 items-center gap-2 border border-white/20 px-5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-white/50 hover:bg-white/10"
              >
                <Play className="size-4" />
                Featured Case
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 py-8 sm:grid-cols-3 sm:px-8 lg:px-10">
          {[
            ["Focus", "Environment Art"],
            ["Pipeline", "Maya / Unreal / Redshift"],
            ["Signal", "Lighting, composition, real-time worlds"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="border-white/10 py-4 sm:border-l sm:px-6 sm:first:border-l-0"
            >
              <p className="text-[10px] uppercase tracking-[0.32em] text-white/38">
                {label}
              </p>
              <p className="mt-2 text-sm font-medium text-white/88">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#68d8c2]">
              Selected Work
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-normal text-white sm:text-5xl">
              Case studies built around atmosphere, structure, and readable
              worlds.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white"
          >
            All Projects
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`group relative min-h-[360px] overflow-hidden border border-white/10 bg-[#111] ${
                index === 0 ? "md:min-h-[520px]" : ""
              }`}
            >
              <Image
                src={project.hero}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover opacity-[0.78] transition duration-500 group-hover:scale-[1.03] group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.18)_68%)]" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f1b56f]">
                  {project.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/68">
                  {project.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  Open Case Study
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/10 bg-[#080807] px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(241,181,111,0),rgba(241,181,111,0.8),rgba(104,216,194,0.6),rgba(241,181,111,0))]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(241,181,111,0.13),rgba(241,181,111,0)_32%),radial-gradient(circle_at_82%_12%,rgba(104,216,194,0.1),rgba(104,216,194,0)_30%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#f1b56f]" />
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/48">
                Contact
              </p>
            </div>
            <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Let's create worlds that feel lived in.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/62">
              Available for environment art, real-time 3D, virtual production,
              and cinematic world-building roles.
            </p>

            <dl className="mt-8 grid gap-4 border-y border-white/10 py-5 sm:grid-cols-3">
              {[
                ["Focus", "Environment Art"],
                ["Location", "Chicago / Remote"],
                ["Status", "Open to Roles"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-white/34">
                    {label}
                  </dt>
                  <dd className="mt-2 text-sm font-medium text-white/82">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid gap-3">
            <Link
              href="mailto:Yaminiganesh099@gmail.com"
              className="group flex items-center justify-between border border-[#f1b56f]/50 bg-[#f1b56f] px-5 py-4 text-black transition-colors hover:bg-white"
            >
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-black/58">
                  Email
                </span>
                <span className="mt-1 block text-sm font-semibold">
                  Yaminiganesh099@gmail.com
                </span>
              </span>
              <Mail className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/yaminiganesan/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-white/12 bg-white/[0.035] px-5 py-4 text-white transition-colors hover:border-white/35 hover:bg-white/10"
            >
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-white/42">
                  Connect
                </span>
                <span className="mt-1 block text-sm font-semibold">
                  LinkedIn
                </span>
              </span>
              <Linkedin className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="https://yaminiganesan.artstation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-white/12 bg-white/[0.035] px-5 py-4 text-white transition-colors hover:border-white/35 hover:bg-white/10"
            >
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-white/42">
                  Portfolio
                </span>
                <span className="mt-1 block text-sm font-semibold">
                  ArtStation
                </span>
              </span>
              <ExternalLink className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      <DockNav />
    </main>
  );
}
