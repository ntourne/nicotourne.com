import { Flex, Box, Container, Stack } from "@chakra-ui/react";

export const Layout = (props: { children: any }) => {
  const { children } = props;
  return (
    <Flex minH="95vh" direction="column" align="center">
      <Container as={Stack} maxW={"800px"}>
        {children}
      </Container>
    </Flex>
  );
};
