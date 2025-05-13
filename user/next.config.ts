import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
     unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', // Allows all paths under this hostname
      },
    ],
    
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default nextConfig;
