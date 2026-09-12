"use client";

import { useEffect, useRef } from "react";

export function ButterflyCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const moveButterfly = (event: PointerEvent) => {
      cursor.style.opacity = "1";
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    window.addEventListener("pointermove", moveButterfly, { passive: true });
    window.addEventListener("pointerdown", moveButterfly, { passive: true });

    return () => {
      window.removeEventListener("pointermove", moveButterfly);
      window.removeEventListener("pointerdown", moveButterfly);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200"
    >
      <div className="butterfly-cursor relative size-11">
        <span className="butterfly-wing butterfly-wing-left butterfly-forewing absolute left-1 top-1 h-5 w-5 rounded-[90%_20%_90%_20%]" />
        <span className="butterfly-wing butterfly-wing-right butterfly-forewing absolute right-1 top-1 h-5 w-5 rounded-[20%_90%_20%_90%]" />
        <span className="butterfly-wing butterfly-wing-left butterfly-hindwing absolute bottom-1 left-2 h-4 w-4 rounded-[80%_20%_90%_30%]" />
        <span className="butterfly-wing butterfly-wing-right butterfly-hindwing absolute bottom-1 right-2 h-4 w-4 rounded-[20%_80%_30%_90%]" />
        <span className="absolute left-1/2 top-1/2 h-6 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#201b17] shadow-[0_0_3px_rgba(255,230,184,0.45)]" />
      </div>
    </div>
  );
}
