import { Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export const WebsiteButtons = ({ websites }: any) => {
  if (!websites) return <></>;

  return (
    <Flex direction="column" align="left">
      {websites.map((website: any) => (
        <Link key={website.url} href={website.url} passHref>
          <a target="_blank" rel="noreferrer">
            <Button
              as="span"
              mb={1}
              width={{ base: "100%", sm: "auto" }}
              rightIcon={<FaExternalLinkAlt />}
            >
              {website.label}
            </Button>
          </a>
        </Link>
      ))}
    </Flex>
  );
};
