import { Flex, Box, Heading, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import { PROFILE } from "@data/index";
import { ContactEmail } from ".";

export const HeadingCard = () => {
  return (
    <Flex
      direction={["column", "row"]}
      flex="1"
      mt={12}
      mb={8}
      align={{ base: "left", sm: "center" }}
    >
      <Box display={{ base: "block", sm: "none" }} mb={3}>
        <Avatar />
      </Box>
      <Flex direction="column">
        <Heading as="h1" fontSize={{ base: "2em", sm: "2.5em" }}>
          {PROFILE.name}
        </Heading>
        <Heading
          as="h2"
          fontSize={{ base: "1.2em", sm: "1.5em" }}
          mt={{ base: 0, sm: 2 }}
        >
          {PROFILE.title}
        </Heading>
      </Flex>
      <Spacer />
      <Box display={{ base: "none", sm: "block" }}>
        <Avatar />
      </Box>

      <Box display={{ base: "block", sm: "none" }} mt={4}>
        <ContactEmail />
      </Box>
    </Flex>
  );
};

const Avatar = () => {
  return (
    <Image
      src={PROFILE.avatarUrl}
      alt={`Avatar from ${PROFILE.name}`}
      className="rounded-full"
      height="80px"
      width="80px"
      layout="fixed"
    />
  );
};
