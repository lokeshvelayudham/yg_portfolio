"use client";
import React, { useState } from "react";
import { DockNav } from "@/components/DockNav";

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {/* Fallback gradient that shows while video loads */}
        <div className={`absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-950/70 transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-100'}`}></div>
        
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src="/videos/abstract-bg.webm" type="video/webm" />
          <source src="/videos/abstract-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Centered Name and Title */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-1 sm:mb-2 animate-slide-in-left">
          Yamini Ganesan
        </h1>
        <br className="hidden sm:block" />
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-white/80 px-2 sm:px-0 animate-slide-in-left">
          3D Environment Designer | 3D Artist, VR/AR Designer | Game Designer
        </h2>
      </div>
      <DockNav />

      {/* Mobile-specific optimizations */}
      <style jsx>{`
        @media (max-width: 640px) {
          video {
            object-position: 50% 50%;
          }
        }
      `}</style>
    </div>
  );
}