import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/comp2156",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
