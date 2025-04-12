import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['assets.aceternity.com'],
    unoptimized: true, // Disables Image Optimization API

  },
  output: 'export',
};

export default nextConfig;
