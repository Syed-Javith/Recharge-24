/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { hostname: "127.0.0.1" },
      { hostname: "api.rechargefest.in" },
      { hostname: "localhost" },
    ],
  },
};

module.exports = nextConfig;
