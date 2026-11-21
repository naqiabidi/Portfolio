import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Only set outputFileTracingRoot locally to avoid overriding Vercel's container tracing
  ...(process.env.VERCEL ? {} : { outputFileTracingRoot: path.join(__dirname) }),
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
