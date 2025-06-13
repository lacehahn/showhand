/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Commented out for local development
  // output: 'export',
  // trailingSlash: true,
  // basePath: '/showhand',
  // assetPrefix: '/showhand/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 