/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  publicRuntimeConfig: {
    serverUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:12345" // development api
        : "https://cta.remybaranx.com", // production api
    mpStatUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:33334" // development api
        : "https://cta.remybaranx.com", // production api
  },
};

module.exports = nextConfig;
