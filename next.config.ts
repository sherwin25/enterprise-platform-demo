import type { NextConfig } from "next";

const isHostedBuild =
  process.env.CI === "true" ||
  process.env.CI === "1" ||
  process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  ...(isHostedBuild ? {} : { distDir: ".next.nosync" }),
  /* config options here */
};

export default nextConfig;
