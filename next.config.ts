import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    contentDispositionType: "inline",
  },
};

export default nextConfig;
