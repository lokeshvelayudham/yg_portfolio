import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Film, Wrench } from "lucide-react";
import { DockNav } from "@/components/DockNav";
import {
  getProjectBySlug,
  getRelatedProjects,
  projects,
} from "@/lib/projects-data";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Yamini Ganesan",
    };
  }

  return {
    title: `${project.title} | Yamini Ganesan`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Yamini Ganesan`,
      description: project.summary,
      images: [project.hero],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project.slug);

  return (
    <main className="min-h-screen bg-[color:var(--portfolio-bg)] pb-24 text-[color:var(--portfolio-text)]">

      <section className="relative min-h-[82svh] overflow-hidden">
        <Image
          src={project.hero}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/48" />
        <div className="absolute inset-0 bg-[image:var(--portfolio-hero-gradient)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-[image:var(--portfolio-hero-fade)]" />

        <div className="relative z-10 mx-auto flex min-h-[82svh] max-w-7xl flex-col justify-end px-5 pb-14 pt-28 sm:px-8 lg:px-10">
          <Link
            href="/projects"
            className="mb-8 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/65 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Work Index
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#f1b56f]">
            {project.category}
          </p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-none tracking-normal text-white sm:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-white/72 sm:text-lg">
            {project.summary}
          </p>
        </div>
      </section>

      <section className="border-y border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-surface)]">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 py-8 sm:grid-cols-3 sm:px-8 lg:px-10">
          <div className="border-[color:var(--portfolio-border)] py-4 sm:border-r sm:pr-6">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[color:var(--portfolio-subtle)]">
              Role
            </p>
            <p className="mt-2 text-sm font-medium text-[color:var(--portfolio-heading)]">
              {project.role}
            </p>
          </div>
          <div className="border-[color:var(--portfolio-border)] py-4 sm:border-r sm:px-6">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[color:var(--portfolio-subtle)]">
              Tools
            </p>
            <p className="mt-2 text-sm font-medium text-[color:var(--portfolio-heading)]">
              {project.tools.join(" / ")}
            </p>
          </div>
          <div className="py-4 sm:pl-6">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[color:var(--portfolio-subtle)]">
              Focus
            </p>
            <p className="mt-2 text-sm font-medium text-[color:var(--portfolio-heading)]">
              {project.contributions.slice(0, 2).join(" / ")}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_360px] lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#68d8c2]">
            Overview
          </p>
          <div className="mt-6 space-y-6 text-base leading-8 text-[color:var(--portfolio-muted)]">
            {project.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <aside className="border border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-surface-strong)] p-5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--portfolio-subtle)]">
            <Wrench className="size-4" />
            Contributions
          </div>
          <ul className="mt-5 space-y-3">
            {project.contributions.map((item) => (
              <li
                key={item}
                className="border-t border-[color:var(--portfolio-border)] pt-3 text-sm leading-6 text-[color:var(--portfolio-muted)] first:border-t-0 first:pt-0"
              >
                {item}
              </li>
            ))}
          </ul>

          {project.externalLinks.length > 0 && (
            <div className="mt-8 space-y-3">
              {project.externalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-between border border-[color:var(--portfolio-border)] px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--portfolio-heading)] transition-colors hover:border-[color:var(--portfolio-border-strong)] hover:bg-[color:var(--portfolio-surface)]"
                >
                  {link.label}
                  <ExternalLink className="size-4" />
                </Link>
              ))}
            </div>
          )}
        </aside>
      </section>

      {project.videos.length > 0 && (
        <section className="border-y border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-surface)] px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.34em] text-[#f1b56f]">
              <Film className="size-4" />
              Video
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {project.videos.map((video) => (
                <figure key={video.src}>
                  <div className="aspect-video overflow-hidden border border-[color:var(--portfolio-border)] bg-black">
                    <video
                      src={video.src}
                      poster={video.poster}
                      controls
                      preload="metadata"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-[color:var(--portfolio-muted)]">
                    {video.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="flex items-end justify-between gap-6 border-b border-[color:var(--portfolio-border)] pb-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--portfolio-subtle)]">
              Gallery
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[color:var(--portfolio-heading)]">
              Project frames and process views
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {project.gallery.map((image, index) => (
            <div
              key={image}
              className={`relative overflow-hidden border border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-surface-strong)] ${
                index === 0 ? "aspect-[16/9] md:col-span-2" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={image}
                alt={`${project.title} gallery ${index + 1}`}
                fill
                sizes={
                  index === 0
                    ? "(min-width: 768px) 100vw, 100vw"
                    : "(min-width: 768px) 50vw, 100vw"
                }
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-surface-strong)] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between gap-6">
            <h2 className="text-2xl font-semibold text-[color:var(--portfolio-heading)]">
              More case studies
            </h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--portfolio-muted)] transition-colors hover:text-[color:var(--portfolio-heading)]"
            >
              All Work
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relatedProjects.map((related) => (
              <Link
                key={related.slug}
                href={`/projects/${related.slug}`}
                className="group relative aspect-[4/3] overflow-hidden border border-[color:var(--portfolio-border)] bg-black"
              >
                <Image
                  src={related.hero}
                  alt={related.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover opacity-[0.72] transition duration-500 group-hover:scale-[1.03] group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-[image:var(--portfolio-card-overlay)]" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-[#f1b56f]">
                    {related.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {related.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <DockNav />
    </main>
  );
}
