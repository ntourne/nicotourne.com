import { Container, Separator, Stack } from "@chakra-ui/react"
import {
  About,
  Articles,
  Header,
  HeadingCard,
  OpenToWorkBanner,
} from "@components/common"
import { Card } from "@components/layout"

export const HomeScreen = () => {
  return (
    <Container
      maxW="container.xl"
      px={0}
      h="100vh"
      py={4}
      position="relative"
      // centerContent
    >
      <Card margin="auto">
        <Stack gap={6}>
          <OpenToWorkBanner />
          <Header />
          <HeadingCard />
          <About />
          <Separator />
          <Articles />
        </Stack>
      </Card>
    </Container>
  );
}
