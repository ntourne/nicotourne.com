/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: [
    "react-markdown",
    "@nicotourne/ui",
    "@nicotourne/data",
    "@nicotourne/lib",
  ],
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/blog",
          destination: `${process.env.BLOG_APP_URL}/blog`,
        },
        {
          source: "/blog/:path*",
          destination: `${process.env.BLOG_APP_URL}/blog/:path*`,
        },
        {
          source: "/random",
          destination: `${process.env.RANDOM_APP_URL}/random`,
        },
        {
          source: "/random/:path*",
          destination: `${process.env.RANDOM_APP_URL}/random/:path*`,
        },
      ],
    }
  },
}
