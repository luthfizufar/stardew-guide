/** @type {import('next').NextConfig} */
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
    // ignoreBuildErrors: true, // Temporarily removed for debugging
  }
}

export default nextConfig

