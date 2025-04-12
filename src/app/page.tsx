"use client";
import React from "react";
import { DockNav } from "@/components/DockNav";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100"
        >
          <source src="/videos/abstract-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-950/70"></div>
      </div>

      {/* Centered Name and Title */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2">
          Yamini Ganesan
        </h1>
        <br />
        <h2 className="text-lg md:text-2xl lg:text-3xl font-medium text-white/80 mb-4">
          3D Environment Designer | 3D Artist, VR/AR Designer | Game Designer
        </h2>
      </div>
      <DockNav />
    </div>
  );
}
