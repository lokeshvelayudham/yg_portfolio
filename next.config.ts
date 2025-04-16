// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['assets.aceternity.com'],
    unoptimized: true, // Disables Image Optimization API
  },
  output: 'export',
  distDir: 'out', // Explicit output directory
  async headers() {
    return [
      {
        source: '/videos/abstract-bg.(mp4|webm)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  }
};

export default nextConfig;