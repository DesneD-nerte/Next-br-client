/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (nextConfig) => {
    nextConfig.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return nextConfig;
  },
  
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"]
  }
};
