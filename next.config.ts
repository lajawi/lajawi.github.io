import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    contentDispositionType: "inline",
    unoptimized: true,
  },
};

export default nextConfig;
