import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',      // This creates a 'out' folder with static files
  images: {
    unoptimized: true,   // Necessary because GitHub Pages doesn't support Next.js Image Optimization
  },
};

export default nextConfig;
