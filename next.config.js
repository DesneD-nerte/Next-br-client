/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

module.exports = {
    webpack: (nextConfig) => {
        nextConfig.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        return nextConfig;
    },

    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["localhost"],
    },
    i18n,
};
