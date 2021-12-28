import { Stack } from "@chakra-ui/react";
import {
  Header,
  HeadingCard,
  WebsiteTech,
  ContactForm,
} from "@components/common";

export const ContactScreen = () => {
  return (
    <Stack spacing={8} pt={4}>
      <Header isBack={true} />
      <ContactForm />
      <WebsiteTech />
    </Stack>
  );
};
