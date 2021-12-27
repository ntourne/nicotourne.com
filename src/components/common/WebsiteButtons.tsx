import { Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export const WebsiteButtons = ({ websites }: any) => {
  if (!websites) return <></>;

  return (
    <Flex direction="column" width={{ base: "100%", sm: "auto" }} align="left">
      {websites.map((website: any) => (
        <Button
          key={website.url}
          as="span"
          mb={1}
          rightIcon={<FaExternalLinkAlt />}
        >
          <Link href={website.url}>{website.label}</Link>
        </Button>
      ))}
    </Flex>
  );
};
