/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    qualities: [65, 75],
  },
  trailingSlash: true,
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
