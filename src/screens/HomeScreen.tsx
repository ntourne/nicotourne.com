import { Stack, Container } from "@chakra-ui/react"
import { HeadingCard, About, Header } from "@components/common"
import { Card } from "@components/layout"

export const HomeScreen = () => {
  return (
    <Container
      maxW="container.xl"
      px={0}
      h="100vh"
      py={4}
      position="relative"
      centerContent
    >
      <Card margin="auto">
        <Stack spacing={10}>
          <Header />
          <HeadingCard />
          <About />
        </Stack>
      </Card>
    </Container>
  )
}
