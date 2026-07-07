import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/coasters",
      destination: "/free-drink-coasters-for-lgbt-bars",
      permanent: true
    }
  ]
};

export default nextConfig;
