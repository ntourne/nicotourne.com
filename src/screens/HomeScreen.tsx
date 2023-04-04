import { Stack, Container, Divider } from "@chakra-ui/react"
import { HeadingCard, About, Header, Articles } from "@components/common"
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
        <Stack spacing={6}>
          <Header />
          <HeadingCard />
          <About />
          <Divider />
          <Articles />
        </Stack>
      </Card>
    </Container>
  )
}
