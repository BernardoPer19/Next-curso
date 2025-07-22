import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailus.io',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
