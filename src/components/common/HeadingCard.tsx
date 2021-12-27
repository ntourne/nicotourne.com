import { Flex, Box, Heading, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import { PROFILE } from "@data/index";

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
      {/* <Image
        height="120px"
        borderRadius="12px"
        display={{ base: "none", sm: "block" }}
        alt="Avatar from Nicolas"
        src={
          "https://media-exp1.licdn.com/dms/image/C5603AQHlUaGWXJChkg/profile-displayphoto-shrink_800_800/0/1517658648981?e=1646265600&v=beta&t=nHpP1NxERlKFHNGgVl7ZMAXEcaXJRTBd0udHgboz_Mk"
        }
      />

      */}
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
