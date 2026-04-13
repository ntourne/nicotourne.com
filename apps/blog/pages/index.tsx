import type { NextPage } from "next"
import Head from "next/head"
import { POSTS } from "@nicotourne/data/posts"

const featuredPosts = POSTS.slice(0, 5)

const BlogHome: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nicolas Tourne - Blog</title>
        <meta name="description" content="Articles and writings by Nicolas Tourne" />
      </Head>
      <main className="min-h-screen bg-stone-50 px-6 py-16 text-stone-900">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-10">
          <header className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
              Nicolas Tourne
            </p>
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Articles</h1>
              <p className="max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
                Notes and essays on software, AI, Web3, and the systems shaping the web.
              </p>
            </div>
          </header>

          <section className="space-y-4">
            {featuredPosts.map((post) => (
              <article
                key={post.url}
                className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col gap-3 no-underline"
                >
                  <p className="text-sm font-medium text-stone-500">{post.createdDate}</p>
                  <h2 className="text-xl font-semibold leading-tight text-stone-900">
                    {post.title}
                  </h2>
                  <span className="text-sm font-semibold text-stone-700">
                    Read article →
                  </span>
                </a>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  )
}

export default BlogHome
