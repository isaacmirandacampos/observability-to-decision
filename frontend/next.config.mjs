/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["landinghunt.fra1.cdn.digitaloceanspaces.com"],
  },
  experimental: {
    instrumentationHook: true,
  },
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  },
};

export default nextConfig;
