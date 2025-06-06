import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {}, // Disable Turbopack and fall back to Webpack by providing an empty object
  },
};

export default nextConfig;
