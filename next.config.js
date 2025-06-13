/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/showhand' : '',
  assetPrefix: isProd ? '/showhand/' : '',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 