/** @type {import('next').NextConfig} */
// const base_path = process.env.NEXT_PUBLIC_BASE_PATH || ""
// let assetPrefix = base_path + '/'
// let basePath = base_path
let basePath = ''
let assetPrefix = '/'

const nextConfig = {
    output:"export",
    basePath: basePath,
    assetPrefix: assetPrefix,
}
module.exports = nextConfig
