/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.infojobs.net/:path*'
      }
    ]
  }
}

module.exports = nextConfig
