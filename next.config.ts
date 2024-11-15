import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => [
    {
      source: '/',
      destination: '/list',
      permanent: true,
    },
  ],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
