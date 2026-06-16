import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers3 } from "lucide-react";
import { DockNav } from "@/components/DockNav";
import { projects } from "@/lib/projects-data";

export const metadata = {
  title: "Work | Yamini Ganesan",
  description:
    "Environment art, real-time 3D, technical art, and virtual production case studies by Yamini Ganesan.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[color:var(--portfolio-bg)] pb-24 text-[color:var(--portfolio-text)]">

      <section className="mx-auto max-w-7xl px-5 pb-10 pt-32 sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#68d8c2]">
            Work Index
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-none tracking-normal text-[color:var(--portfolio-heading)] sm:text-7xl">
            Environment art and real-time worlds.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--portfolio-muted)] sm:text-lg">
            A focused set of game environments, cinematic lighting studies,
            digital twin work, virtual production shots, and technical tools.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
        <div className="grid auto-rows-[320px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`group relative overflow-hidden border border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-surface-strong)] ${
                index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : index === 1
                    ? "lg:row-span-2"
                    : ""
              }`}
            >
              <Image
                src={project.hero}
                alt={project.title}
                fill
                sizes={
                  index === 0
                    ? "(min-width: 1024px) 66vw, 100vw"
                    : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                }
                className="object-cover opacity-[0.72] transition duration-500 group-hover:scale-[1.035] group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-[image:var(--portfolio-card-overlay)]" />
              <div className="absolute left-4 top-4 flex items-center gap-2 border border-white/15 bg-black/45 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 backdrop-blur-md">
                <Layers3 className="size-3.5" />
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f1b56f]">
                  {project.category}
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight text-white">
                  {project.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/65">
                  {project.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/78">
                  Case Study
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
