module.exports = {
  eslint: {
    dirs: ['pages', 'components'],
  },
  images: {
    domains: ['api.microlink.io'],
  },

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains : ['media.geeksforgeeks.org']
  }
}
  
module.exports = nextConfig
}
