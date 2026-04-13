import type { NextPage } from "next"
import Head from "next/head"

const BlogHome: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nicolas Tourne - Blog</title>
        <meta name="description" content="Articles and writings by Nicolas Tourne" />
      </Head>
      <main className="flex min-h-screen flex-col items-center p-8">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="mt-4 text-gray-600">Coming soon.</p>
      </main>
    </>
  )
}

export default BlogHome
