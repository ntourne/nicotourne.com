import Head from "next/head";
import { Stack } from "@chakra-ui/react";
import { Layout } from "@components/layout";
import { ContactScreen } from "@screens/index";
import { PROFILE } from "@data/index";

export default function Contact() {
  return (
    <>
      <Head>
        <title>
          {PROFILE.name} - {PROFILE.title}
        </title>
        <meta name="description" content={PROFILE.about} />
      </Head>

      <Stack spacing={2}>
        <ContactScreen />
      </Stack>
    </>
  );
}

Contact.menu = "home";

Contact.getLayout = (page: any) => <Layout>{page}</Layout>;
