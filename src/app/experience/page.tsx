import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, GraduationCap, Users } from "lucide-react";
import { DockNav } from "@/components/DockNav";

export const metadata = {
  title: "Experience | Yamini Ganesan",
  description:
    "Education, industry experience, leadership, and interactive media background for Yamini Ganesan.",
};

const experienceSections = [
  {
    icon: GraduationCap,
    label: "Graduate Study",
    title: "DePaul University",
    meta: "MA Animation",
    copy: [
      "At DePaul University, I have expanded my creative practice through hands-on animation, game, research, and immersive media work. My background in design, animation, and VR allows me to move between artistic direction, technical problem solving, and team collaboration.",
      "As a Student Assistant in the Jarvis Student Center for Innovation and an Event Manager for SIGGRAPH DePaul, I have supported student events, built faculty and industry relationships, and helped connect animation and game students with professional communities.",
      "I also contribute as a Research Assistant under Professor Allen Turner, assisting with projects that explore animation, technology, and interactive media.",
    ],
    images: [
      "/images/Sankofa2.webp",
      "/images/Sankofa1.webp",
      "/images/wellNut1.webp",
    ],
  },
  {
    icon: BriefcaseBusiness,
    label: "Industry",
    title: "Game, VR, and Visual Design",
    meta: "Environment Art / Game Design / VR",
    copy: [
      "After earning my degree in Animation and Special Effects from Karnavati University, I began as a Visual Designer, building a foundation in layout, typography, and 2D design tools that still supports my 3D and game work.",
      "I later worked in the game industry as a Game Designer at PixcellPlay Pvt. Ltd., contributing to gameplay documentation, level balancing, feature research, and iteration across mobile game projects.",
      "With IQtechmax and GoingClear, I led VR environment work for metaverse projects, using Unreal Engine to model, texture, integrate assets, and coordinate development across teams.",
    ],
    images: ["/images/ie1.webp", "/images/ie2.webp", "/images/ie3.webp"],
  },
  {
    icon: Users,
    label: "Community",
    title: "Leadership and Industry Engagement",
    meta: "SIGGRAPH DePaul / Women in Games / LinkedIn",
    copy: [
      "Outside of production work, I stay active in the games and animation community through events such as IGDC, SIGGRAPH DePaul, and Women in Games programs.",
      "I use these spaces to connect with professionals, support students entering creative technology fields, and keep my practice aligned with current industry conversations.",
      "My professional presence on LinkedIn has grown to more than 10,000 followers through consistent engagement, networking, and project sharing.",
    ],
    images: ["/images/ku.webp", "/images/k1.webp", "/images/k2.webp"],
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#060606] pb-24 text-white">

      <section className="mx-auto max-w-7xl px-5 pb-10 pt-32 sm:px-8 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#68d8c2]">
          Experience
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-none tracking-normal sm:text-7xl">
          A background across art, games, research, and real-time production.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
          The portfolio work is grounded in a broader practice spanning
          environment art, VR design, animation, visual design, student
          leadership, and industry collaboration.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
        <div className="border-y border-white/10">
          {experienceSections.map((section) => {
            const Icon = section.icon;

            return (
              <article
                key={section.title}
                className="grid gap-8 border-b border-white/10 py-12 last:border-b-0 lg:grid-cols-[320px_1fr]"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#f1b56f]">
                    <Icon className="size-4" />
                    {section.label}
                  </div>
                  <h2 className="mt-5 text-3xl font-semibold text-white">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/42">
                    {section.meta}
                  </p>
                </div>

                <div className="grid gap-8 xl:grid-cols-[1fr_360px]">
                  <div className="space-y-5 text-base leading-8 text-white/70">
                    {section.copy.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 xl:grid-cols-1">
                    {section.images.map((src, index) => (
                      <div
                        key={src}
                        className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-[#111]"
                      >
                        <Image
                          src={src}
                          alt={`${section.title} image ${index + 1}`}
                          fill
                          sizes="(min-width: 1280px) 360px, 33vw"
                          className="object-cover opacity-[0.82]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#10100f] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <h2 className="max-w-2xl text-3xl font-semibold text-white">
            See how this experience shows up in the project case studies.
          </h2>
          <Link
            href="/projects"
            className="inline-flex h-11 items-center gap-2 bg-white px-5 text-sm font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:bg-[#f1b56f]"
          >
            View Work
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
      <DockNav />
    </main>
  );
}
