import { Stack } from "@chakra-ui/react"
import { ContactForm, Header, WebsiteTech } from "@components/common"

export const ContactScreen = () => {
  return (
    <Stack gap={8} pt={4}>
      <Header />
      <ContactForm />
      <WebsiteTech />
    </Stack>
  );
}
