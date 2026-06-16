"use client";

import { useEffect, useState } from "react";

export interface ExperienceTimelineItem {
  id: string;
  marker: string;
  title: string;
  detail: string;
}

export function ExperienceTimeline({
  items,
}: {
  items: ExperienceTimelineItem[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] ?? items[0];
  const progress =
    items.length > 1 ? (activeIndex / (items.length - 1)) * 100 : 0;

  useEffect(() => {
    const updateActiveItem = () => {
      const viewportAnchor = window.innerHeight * 0.42;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      items.forEach((item, index) => {
        const element = document.getElementById(item.id);

        if (!element) return;

        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportAnchor);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    updateActiveItem();
    window.addEventListener("scroll", updateActiveItem, { passive: true });
    window.addEventListener("resize", updateActiveItem);

    return () => {
      window.removeEventListener("scroll", updateActiveItem);
      window.removeEventListener("resize", updateActiveItem);
    };
  }, [items]);

  const scrollToItem = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (!activeItem) {
    return null;
  }

  return (
    <>
      <div className="sticky top-0 z-20 -mx-5 mb-8 border-y border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-surface-strong)] px-5 py-4 backdrop-blur-md sm:-mx-8 sm:px-8 lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--portfolio-subtle)]">
              Timeline
            </p>
            <p className="mt-1 text-xl font-semibold text-[color:var(--portfolio-heading)]">
              {activeItem.marker}
            </p>
          </div>
          <p className="max-w-[210px] text-right text-xs leading-5 text-[color:var(--portfolio-muted)]">
            {activeItem.title}
          </p>
        </div>
        <div className="mt-4 flex gap-2">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to ${item.title}`}
              aria-current={index === activeIndex ? "step" : undefined}
              onClick={() => scrollToItem(item.id)}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                index <= activeIndex
                  ? "bg-[#f1b56f]"
                  : "bg-[color:var(--portfolio-border-strong)]"
              }`}
            />
          ))}
        </div>
      </div>

      <aside className="sticky top-28 hidden h-[calc(100vh-8rem)] w-16 shrink-0 lg:block">
        <div className="flex h-full flex-col items-center">
          <div className="text-center">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[color:var(--portfolio-subtle)] [writing-mode:vertical-rl]">
              Timeline
            </p>
            <p className="mt-4 text-2xl font-semibold leading-none text-[color:var(--portfolio-heading)]">
              {activeItem.marker}
            </p>
          </div>

          <div className="relative mt-6 flex min-h-72 flex-1 justify-center">
            <div className="absolute left-1/2 top-2 h-[calc(100%-16px)] w-px -translate-x-1/2 bg-[color:var(--portfolio-border-strong)]" />
            <div
              className="absolute left-1/2 top-2 h-[calc(100%-16px)] w-px -translate-x-1/2 origin-top bg-[linear-gradient(180deg,#f1b56f,#68d8c2)] transition-transform duration-300"
              style={{ transform: `translateX(-50%) scaleY(${progress / 100})` }}
            />
            {items.map((item, index) => {
              const offset =
                items.length > 1 ? (index / (items.length - 1)) * 100 : 0;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToItem(item.id)}
                  aria-label={`Go to ${item.title}`}
                  aria-current={index === activeIndex ? "step" : undefined}
                  className={`absolute left-1/2 rounded-full border transition-colors ${
                    index === activeIndex
                      ? "size-4 -translate-x-1/2 border-[#f1b56f] bg-[#f1b56f]"
                      : index < activeIndex
                        ? "size-3 -translate-x-1/2 border-[#68d8c2] bg-[#68d8c2]"
                        : "size-3 -translate-x-1/2 border-[color:var(--portfolio-border-strong)] bg-[color:var(--portfolio-bg)] hover:border-[color:var(--portfolio-heading)]"
                  }`}
                  style={{ top: `calc(${offset}% - 6px)` }}
                />
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
