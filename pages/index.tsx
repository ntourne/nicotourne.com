import { Stack } from "@chakra-ui/react"
import { Layout } from "@components/layout"
import { PROFILE } from "@data/index"
import { HomeScreen } from "@screens/index"
import Head from "next/head"

const Home = () => {
  return (
    <>
      <Head>
        <title>
          {PROFILE.name} - {PROFILE.title}
        </title>
        <meta name="description" content={PROFILE.about} />
      </Head>
      <Stack gap={2} pb={{ base: 20, sm: 6 }}>
        <HomeScreen />
      </Stack>
    </>
  );
}

Home.menu = "home"

Home.getLayout = (page: any) => <Layout>{page}</Layout>

export default Home
