/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/items",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
