/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iqtidor.uicgroup.tech",
      },
    ],
  },
};

module.exports = nextConfig;
