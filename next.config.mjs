/** @type {import('next').NextConfig} */
import path from 'path'; // Added for webpack alias
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/stardew-guide' : '',
  assetPrefix: isProd ? '/stardew-guide/' : '',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => { // Added for webpack alias
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(process.cwd()), // Adjusted to use process.cwd() for .mjs
    };
    return config;
  },
}

export default nextConfig

