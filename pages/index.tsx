import Head from "next/head";
import { Stack } from "@chakra-ui/react";
import { Layout } from "@components/layout";
import { HomeScreen } from "@screens/index";
import { PROFILE } from "@data/index";
export default function Home() {
  return (
    <>
      <Head>
        <title>
          {PROFILE.name} - {PROFILE.title}
        </title>
        <meta name="description" content={PROFILE.about} />
      </Head>

      <Stack spacing={2}>
        <HomeScreen />
      </Stack>
    </>
  );
}

Home.menu = "home";

Home.getLayout = (page: any) => <Layout>{page}</Layout>;
