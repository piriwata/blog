/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["github.com"],
  },
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
}

module.exports = nextConfig
