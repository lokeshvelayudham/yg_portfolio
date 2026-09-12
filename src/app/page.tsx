import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  UserRound,
} from "lucide-react";
import { ButterflyCursor } from "@/components/ButterflyCursor";
import { DockNav } from "@/components/DockNav";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { featuredProjects } from "@/lib/projects-data";

type PipelineTool = {
  name: string;
  logo: string;
  logoClassName?: string;
};

type HomeStat =
  | {
      kind: "text";
      label: string;
      value: string;
    }
  | {
      kind: "tools";
      label: string;
      tools: PipelineTool[];
    };

const pipelineTools: PipelineTool[] = [
  {
    name: "Maya",
    logo: "/logos/autodesk-maya.svg",
  },
  {
    name: "ZBrush",
    logo: "/logos/zbrush.svg",
    logoClassName: "dark:brightness-0 dark:invert",
  },
  {
    name: "Unreal",
    logo: "/logos/unreal-engine.svg",
  },
  {
    name: "Substance",
    logo: "/logos/substance-3d-designer.svg",
  },
  {
    name: "Houdini",
    logo: "/logos/houdini.svg",
  },
];

const homeStats: HomeStat[] = [
  {
    kind: "text",
    label: "Focus",
    value: "3D Designer + Tech Artist",
  },
  {
    kind: "tools",
    label: "Softwares",
    tools: pipelineTools,
  },
];

const carouselProjects = [
  "lost-rooms",
  "architectural-interior-lighting-study",
  "lost-past",
]
  .map((slug) => featuredProjects.find((project) => project.slug === slug))
  .filter(
    (project): project is (typeof featuredProjects)[number] =>
      project !== undefined,
  );

export default function Home() {
  return (
    <main className="min-h-screen cursor-none bg-[color:var(--portfolio-bg)] pb-24 text-[color:var(--portfolio-text)]">
      <ButterflyCursor />
      <section className="relative min-h-screen overflow-hidden">
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
        <div className="absolute inset-0 bg-[image:var(--portfolio-hero-gradient)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-[image:var(--portfolio-hero-fade)]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-16 pt-28 sm:px-8 lg:px-10">
          <div className="max-w-4xl drop-shadow-[0_12px_28px_rgba(0,0,0,0.65)]">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.42em] text-[#f1b56f]">
              3D Designer
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-normal text-white sm:text-7xl lg:text-8xl">
              Yamini Ganesan
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
              Where art, technology and immersion collide.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex h-11 items-center gap-2 bg-white px-5 text-sm font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:bg-[#f1b56f]"
              >
                View Portfolio
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/projects/lost-past"
                className="inline-flex h-11 items-center gap-2 border border-white/20 px-5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-white/50 hover:bg-white/10"
              >
                <Play className="size-4" />
                Featured Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-surface)]">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 py-8 sm:grid-cols-2 sm:px-8 lg:px-10">
          {homeStats.map((stat) => (
            <div
              key={stat.label}
              className="border-[color:var(--portfolio-border)] py-4 sm:border-l sm:px-6 sm:first:border-l-0"
            >
              <p className="text-[10px] uppercase tracking-[0.32em] text-[color:var(--portfolio-subtle)]">
                {stat.label}
              </p>
              {stat.kind === "tools" ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {stat.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex size-11 items-center justify-center rounded-full border border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-surface-strong)] transition-colors hover:border-[color:var(--portfolio-border-strong)] hover:bg-[color:var(--portfolio-bg)]"
                      role="img"
                      aria-label={tool.name}
                    >
                      <Image
                        src={tool.logo}
                        alt=""
                        width={24}
                        height={24}
                        className={`size-6 object-contain ${tool.logoClassName ?? ""}`}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-2 text-sm font-medium text-[color:var(--portfolio-heading)]">
                  {stat.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-12 border-b border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-bg)] px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <div className="flex size-14 items-center justify-center rounded-full border border-[#68d8c2]/60 bg-[#68d8c2]/10 text-[#68d8c2] shadow-[0_0_28px_rgba(104,216,194,0.16)]">
              <UserRound className="size-6" />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.34em] text-[#68d8c2]">
              About
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-[color:var(--portfolio-heading)] sm:text-5xl">
              About Me
            </h2>
          </div>
          <div className="max-w-3xl border-l border-[color:var(--portfolio-border)] pl-0 sm:pl-8 lg:mt-3">
            <p className="text-lg leading-8 text-[color:var(--portfolio-muted)] sm:text-xl">
              I&apos;m Yamini Ganesan, a 3D Designer and technical artist who
              builds immersive environments, interactive experiences, and
              cinematic worlds.
            </p>
            <p className="mt-5 text-base leading-7 text-[color:var(--portfolio-muted)]">
              My work brings together environment art, real-time technology,
              animation, and visual storytelling—from Unreal Engine game
              spaces and virtual production to digital twins and educational
              media.
            </p>
            <Link
              href="/experience"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#f1b56f] transition-colors hover:text-[color:var(--portfolio-heading)]"
            >
              Explore My Experience
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-label="Featured project carousel"
        className="overflow-hidden border-b border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-surface)] py-5"
      >
        <div className="mb-4 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#68d8c2]">
            Project Highlights
          </p>
        </div>
        <ProjectCarousel projects={carouselProjects} />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 border-b border-[color:var(--portfolio-border)] pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#68d8c2]">
              Featured Work
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-normal text-[color:var(--portfolio-heading)] sm:text-5xl">
              All Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--portfolio-muted)] transition-colors hover:text-[color:var(--portfolio-heading)]"
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
              className={`group relative min-h-[360px] overflow-hidden border border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-surface-strong)] ${
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
              <div className="absolute inset-0 bg-[image:var(--portfolio-card-overlay)]" />
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

      <DockNav />
    </main>
  );
}
