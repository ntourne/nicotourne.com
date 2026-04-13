/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: "/blog",
  transpilePackages: [
    "@nicotourne/ui",
    "@nicotourne/data",
  ],
}
