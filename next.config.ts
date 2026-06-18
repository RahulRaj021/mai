import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2iyhd3v3rvz2k.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "dropinblog.net",
      },
    ],
  },
};

export default nextConfig;
