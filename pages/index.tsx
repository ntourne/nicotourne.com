import { Layout } from "@components/layout"
import { PROFILE } from "@data/index"
import { HomeScreen } from "@screens/index"
import Head from "next/head"

const Home = () => {
  const title = `${PROFILE.name} - ${PROFILE.title}`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={PROFILE.about} />
      </Head>
      <div className="flex flex-col gap-2 pb-20 sm:pb-6">
        <HomeScreen />
      </div>
    </>
  )
}

Home.menu = "home"

Home.getLayout = (page: any) => <Layout>{page}</Layout>

export default Home
