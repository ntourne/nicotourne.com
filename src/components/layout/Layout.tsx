import { Container, Flex, Stack } from "@chakra-ui/react"

export const Layout = (props: { children: any }) => {
  const { children } = props

  return (
    <Flex minH="95vh" direction="column" align="center">
      <Container maxW="800px">
        <Stack>
          {children}
        </Stack>
      </Container>
    </Flex>
  )
}
