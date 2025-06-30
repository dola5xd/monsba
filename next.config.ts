import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
        pathname: "/premium_photo-**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["motion", "lenis", "swiper"],
  },
};

export default nextConfig;
