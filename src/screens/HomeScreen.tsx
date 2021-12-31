import { Stack } from "@chakra-ui/react";
import {
  HeadingCard,
  About,
  Experience,
  Header,
  Skills,
  Education,
  Language,
  WebsiteTech,
  ContactForm,
} from "@components/common";

export const HomeScreen = () => {
  return (
    <Stack spacing={8} pt={4}>
      <Header />
      <HeadingCard />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Language />
      <WebsiteTech />
    </Stack>
  );
};
