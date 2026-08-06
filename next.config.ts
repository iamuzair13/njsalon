import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
    ],
  },
  allowedDevOrigins: ["127.0.0.1", "http://127.0.0.1:51458", "192.168.5.72", "http://192.168.5.72:3000", "192.168.5.53", "http://192.168.5.53:3000"],
};

export default nextConfig;
