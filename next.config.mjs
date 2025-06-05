/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [new URL("https://bit.ly/**")] }
};

export default nextConfig;
