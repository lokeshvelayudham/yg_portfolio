"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Project } from "@/lib/projects-data";

type ProjectCarouselProps = {
  projects: Project[];
};

function getCarouselStep(scroller: HTMLDivElement) {
  const card = scroller.querySelector<HTMLElement>("[data-carousel-card]");
  const track = scroller.firstElementChild;

  if (!card || !track) {
    return 380;
  }

  return card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap || "0");
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const moveToNextProject = () => {
      const loopWidth = scroller.scrollWidth / 2;
      const step = getCarouselStep(scroller);

      if (scroller.scrollLeft + step >= loopWidth) {
        scroller.scrollLeft -= loopWidth;
      }

      scroller.scrollBy({ left: step, behavior: "smooth" });
    };

    const intervalId = window.setInterval(moveToNextProject, 1800);
    return () => window.clearInterval(intervalId);
  }, []);

  const moveCarousel = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const loopWidth = scroller.scrollWidth / 2;
    const step = getCarouselStep(scroller);

    // The duplicated cards form a seamless loop. Shift to the matching copy
    // before moving left so the previous project is always available.
    if (direction === "left" && scroller.scrollLeft < step) {
      scroller.scrollLeft += loopWidth;
    }

    if (direction === "right" && scroller.scrollLeft + step >= loopWidth) {
      scroller.scrollLeft -= loopWidth;
    }

    scroller.scrollBy({
      left: direction === "left" ? -380 : 380,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => moveCarousel("left")}
        aria-label="Show previous projects"
        className="absolute left-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#68d8c2]/70 bg-black/70 text-[#68d8c2] shadow-[0_0_18px_rgba(104,216,194,0.35)] backdrop-blur transition hover:bg-[#68d8c2] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#68d8c2] sm:left-6"
      >
        <ChevronLeft className="size-5" />
      </button>
      <div ref={scrollerRef} className="overflow-hidden">
        <div className="flex w-max gap-4 pr-4">
          {[0, 1].map((copyIndex) =>
            projects.map((project) => (
              <Link
                key={`${copyIndex}-${project.slug}`}
                data-carousel-card
                href={`/projects/${project.slug}`}
                tabIndex={copyIndex === 1 ? -1 : undefined}
                aria-hidden={copyIndex === 1}
                className="group relative h-52 w-[min(78vw,390px)] shrink-0 overflow-hidden border border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-surface-strong)] transition-[border-color,box-shadow] duration-300 hover:border-[#68d8c2] hover:shadow-[0_0_24px_rgba(104,216,194,0.55)] focus-visible:border-[#68d8c2] focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_rgba(104,216,194,0.75),0_0_28px_rgba(104,216,194,0.6)] active:border-[#f1b56f] active:shadow-[0_0_28px_rgba(241,181,111,0.7)] sm:w-[360px]"
              >
                <Image
                  src={project.hero}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 360px, 78vw"
                  className="object-cover opacity-70 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-[image:var(--portfolio-card-overlay)]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f1b56f]">
                    {project.category}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white">
                    {project.title}
                  </h2>
                </div>
              </Link>
            )),
          )}
        </div>
      </div>
      <button
        type="button"
        onClick={() => moveCarousel("right")}
        aria-label="Show next projects"
        className="absolute right-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#68d8c2]/70 bg-black/70 text-[#68d8c2] shadow-[0_0_18px_rgba(104,216,194,0.35)] backdrop-blur transition hover:bg-[#68d8c2] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#68d8c2] sm:right-6"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}
