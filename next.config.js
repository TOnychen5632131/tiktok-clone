/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  cacheStartUrl: false,
  dynamicStartUrl: true,
  runtimeCaching: [],
  disable: process.env.NODE_ENV === 'production',
});

const nextConfig = withPWA({
  typescript:{
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        search: '',
      },
    ],
  },
});

module.exports = nextConfig;
