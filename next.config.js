/** @type {import('next').NextConfig} */
const { urlMigrations } = require('./lib/routes.redirects.js');

const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async redirects() {
    return urlMigrations.map((m) => ({
      source: m.from,
      destination: m.to,
      permanent: m.permanent,
    }));
  },
};

module.exports = nextConfig;
