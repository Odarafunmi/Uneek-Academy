/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allows production builds alongside the dev server (set NEXT_DIST_DIR=.next-build)
  distDir: process.env.NEXT_DIST_DIR || '.next',
  images: { unoptimized: true },
};

module.exports = nextConfig;
