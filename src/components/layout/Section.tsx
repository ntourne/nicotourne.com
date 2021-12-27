import { Flex, Heading, Box } from "@chakra-ui/react";

export const Section = ({ title, children }: any) => {
  return (
    <Flex direction="column">
      {title && (
        <Heading as="h3" fontSize="1.3em" mb={4}>
          {title}
        </Heading>
      )}
      {children && <Box>{children}</Box>}
    </Flex>
  );
};
