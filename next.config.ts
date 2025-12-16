import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  compress: true,
  poweredByHeader: false,
  typedRoutes: true,


  images:{
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      }
    ]
  },

  experimental: {
    inlineCss: true
  }
};

export default nextConfig;
