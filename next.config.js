/** @type {import('next').NextConfig} */
const path = require("path");

// const base_path = process.env.NEXT_PUBLIC_BASE_PATH || ""
// let assetPrefix = base_path + '/'
// let basePath = base_path
const basePath = "";
const assetPrefix = "/";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix,
  images: { unoptimized: true },
  turbopack: {
    root: path.join(__dirname),
  },
};

module.exports = nextConfig;
