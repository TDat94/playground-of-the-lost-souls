import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // for github pages
  basePath: '/playground-of-the-lost-souls',
  images: {
    unoptimized: true, // since github pages doesn't support image optimization
  },
};

export default nextConfig;
