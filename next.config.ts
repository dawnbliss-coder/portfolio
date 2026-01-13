import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // ADD THIS LINE (Replace 'portfolio' with your actual repo name if different)
  basePath: '/portfolio', 
};

export default nextConfig;