const repo = "creative_attempt";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  output: "export",
  images: { unoptimized: true },

  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;