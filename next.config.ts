import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  outputFileTracingIncludes: {
    '/*': ['./src/lib/data/names.json', './public/data/names.json'],
    '/api/*': ['./src/lib/data/names.json', './public/data/names.json'],
  },
};

export default nextConfig;
