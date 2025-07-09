import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "raw.githubusercontent.com",
      "images.unsplash.com" // si también usas Unsplash
    ]
  }
};


export default nextConfig;
