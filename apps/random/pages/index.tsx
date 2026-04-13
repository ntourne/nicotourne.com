import type { NextPage } from "next"
import Head from "next/head"

const RandomHome: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nicolas Tourne - Random</title>
        <meta name="description" content="Random topics by Nicolas Tourne" />
      </Head>
      <main className="flex min-h-screen flex-col items-center p-8">
        <h1 className="text-3xl font-bold">Random</h1>
        <p className="mt-4 text-gray-600">Coming soon.</p>
      </main>
    </>
  )
}

export default RandomHome
