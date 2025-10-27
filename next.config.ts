import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // 👈 Important for static export
  images: {
    unoptimized: true, // required if using next/image
  },
};

export default nextConfig;
