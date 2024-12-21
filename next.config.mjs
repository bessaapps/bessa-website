/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["blog.getbessa.com", "shop.getbessa.com"] },
  async rewrites() {
    return [
      {
        source: "/:path",
        destination: "/blog/:path"
      }
    ];
  }
};

export default nextConfig;
