/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["f4.bcbits.com"],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
