/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Narayanan-Portfolio',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporarily ignore ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // Temporarily ignore TypeScript errors during build
  }
}

module.exports = nextConfig