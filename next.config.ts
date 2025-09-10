/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Narayanan-Portfolio',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['app']
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  assetPrefix: '/Narayanan-Portfolio/',
}

module.exports = nextConfig