/** @type {import('next').NextConfig} */
const base_path = process.env.NEXT_PUBLIC_BASE_PATH || ""
let assetPrefix = base_path + '/'
let basePath = base_path

const nextConfig = {
    output:"export",
    assetPrefix: assetPrefix,
    basePath: basePath,
}

module.exports = nextConfig
